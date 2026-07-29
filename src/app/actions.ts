"use server";

export type ContactField = "name" | "email" | "phone" | "message";

export type ContactState = {
  ok: boolean;
  message: string;
  errors?: Partial<Record<ContactField, string>>;
};

export const CONTACT_INITIAL_STATE: ContactState = { ok: false, message: "" };

/** Generous caps so a bot can't post a novel through the form. */
const MAX = { name: 120, email: 160, phone: 40, message: 4000 } as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/**
 * Handles the strategy-call enquiry form.
 *
 * This is a public endpoint — Server Actions are reachable by direct POST, not
 * just through the UI — so it validates everything and never trusts the client.
 *
 * Delivery: set CONTACT_WEBHOOK_URL (Zapier / Make / n8n / your own handler) to
 * forward enquiries. Without it, submissions are logged server-side only.
 */
export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: hidden from real users, irresistible to bots. Pretend success.
  if (text(formData, "website", 200)) {
    return { ok: true, message: "Thanks — we'll be in touch shortly." };
  }

  const name = text(formData, "name", MAX.name);
  const email = text(formData, "email", MAX.email);
  const phone = text(formData, "phone", MAX.phone);
  const message = text(formData, "message", MAX.message);

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10)
    errors.message = "Please tell us a little about your business.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Please check the highlighted fields.", errors };
  }

  const enquiry = {
    name,
    email,
    phone: phone || null,
    message,
    receivedAt: new Date().toISOString(),
  };

  const endpoint = process.env.CONTACT_WEBHOOK_URL;

  try {
    if (endpoint) {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } else {
      console.info("[contact] new enquiry (no CONTACT_WEBHOOK_URL set)", enquiry);
    }
  } catch (error) {
    console.error("[contact] failed to deliver enquiry", error);
    return {
      ok: false,
      message:
        "Something went wrong sending your message. Please email hello@axbai.co.za.",
    };
  }

  return {
    ok: true,
    message: "Thanks — we'll be in touch within one business day.",
  };
}
