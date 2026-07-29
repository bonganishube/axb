"use client";

import { useActionState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import {
  CONTACT_INITIAL_STATE,
  submitContact,
  type ContactField,
} from "@/app/actions";

const FIELD =
  "w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none";
const LABEL = "block text-xs font-semibold tracking-wide text-white/60";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    CONTACT_INITIAL_STATE,
  );

  const error = (field: ContactField) => state.errors?.[field];

  if (state.ok) {
    return (
      <div
        id="contact-form"
        className="rounded-2xl border border-white/10 bg-ink/80 p-8 text-center shadow-2xl backdrop-blur-sm"
      >
        <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-gold text-ink">
          <Check className="size-5" strokeWidth={2.5} />
        </span>
        <p className="mt-5 text-lg font-bold text-white">Message received</p>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <div
      id="contact-form"
      className="rounded-2xl border border-white/10 bg-ink/80 p-6 shadow-2xl backdrop-blur-sm sm:p-8"
    >
      <p className="text-base font-bold text-white">
        Book your free strategy call
      </p>
      <p className="mt-1.5 text-sm text-white/60">
        Tell us about your business and we&rsquo;ll be in touch.
      </p>

      <form action={formAction} className="mt-6 space-y-4" noValidate>
        {/* Honeypot — hidden from users, catches bots. */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={LABEL}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your full name"
              aria-invalid={Boolean(error("name"))}
              aria-describedby={error("name") ? "name-error" : undefined}
              className={`mt-1.5 ${FIELD}`}
            />
            {error("name") && (
              <p id="name-error" className="mt-1.5 text-xs text-gold-light">
                {error("name")}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className={LABEL}>
              Phone <span className="font-normal text-white/35">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+27 82 000 0000"
              className={`mt-1.5 ${FIELD}`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className={LABEL}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.co.za"
            aria-invalid={Boolean(error("email"))}
            aria-describedby={error("email") ? "email-error" : undefined}
            className={`mt-1.5 ${FIELD}`}
          />
          {error("email") && (
            <p id="email-error" className="mt-1.5 text-xs text-gold-light">
              {error("email")}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className={LABEL}>
            What would you like to automate?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="e.g. after-hours patient enquiries and appointment reminders"
            aria-invalid={Boolean(error("message"))}
            aria-describedby={error("message") ? "message-error" : undefined}
            className={`mt-1.5 resize-y ${FIELD}`}
          />
          {error("message") && (
            <p id="message-error" className="mt-1.5 text-xs text-gold-light">
              {error("message")}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending&hellip;
            </>
          ) : (
            <>
              Request My Free Call
              <ArrowRight className="size-4" />
            </>
          )}
        </button>

        <p aria-live="polite" className="min-h-4 text-xs text-white/50">
          {!state.ok && state.message}
        </p>
      </form>
    </div>
  );
}
