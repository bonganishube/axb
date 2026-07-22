import { Check } from "lucide-react";

const PLANS = [
  {
    name: "AXB Launch",
    tagline: "For businesses getting online.",
    price: "R999",
    period: "/month",
    note: "Less than the value of one missed customer each month.",
    features: [
      "AI Assistant (Basic)",
      "Website",
      "Smart Booking",
      "Lead Capture",
      "Email Setup",
      "1 Month Support",
    ],
    cta: "Start Building",
    highlight: false,
  },
  {
    name: "AXB Growth",
    tagline: "For growing businesses ready to save hours every week.",
    price: "R1,999",
    period: "/month",
    note: "Save 10-20 hours of admin every month.",
    features: [
      "Everything in Launch",
      "Automated Follow-ups",
      "CRM Integration",
      "Advanced Analytics",
      "Priority Support",
    ],
    cta: "Grow My Business",
    highlight: true,
    badge: "MOST POPULAR",
  },
  {
    name: "AXB Scale",
    tagline: "For businesses managing high enquiry volumes.",
    price: "R3,999",
    period: "/month",
    note: "Replace manual work with intelligent automation.",
    features: [
      "Everything in Growth",
      "Advanced Automations",
      "Custom Workflows",
      "Multi-channel Support",
      "Priority Support",
    ],
    cta: "Talk to an Expert",
    highlight: false,
  },
  {
    name: "AXB Enterprise",
    tagline: "For businesses with complex operations and custom needs.",
    price: "Custom",
    period: "",
    note: "A completely tailored system built around your business.",
    features: [
      "Custom AI Solutions",
      "Dedicated Account Manager",
      "Advanced Integrations",
      "SLA & Premium Support",
    ],
    cta: "Book a Consultation",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="packages" className="bg-white py-20 lg:py-24">
      <div className="container-px">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark">
          PACKAGES
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
          Simple packages. Serious impact.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.highlight
                  ? "border-gold shadow-xl shadow-gold/10 lg:-translate-y-3"
                  : "border-black/[0.08]"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold tracking-wide text-ink whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-lg font-extrabold text-ink">{plan.name}</h3>
              <p className="mt-1 text-xs text-body leading-relaxed">
                {plan.tagline}
              </p>

              <div className="mt-5">
                <span
                  className={`text-3xl font-extrabold ${
                    plan.price === "Custom" ? "text-gold-dark" : "text-ink"
                  }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-body">{plan.period}</span>
                )}
              </div>
              <p className="mt-1 text-xs text-body leading-relaxed">
                {plan.note}
              </p>

              <ul className="mt-6 flex flex-col gap-3 grow">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-ink/80"
                  >
                    <Check className="size-4 shrink-0 text-gold-dark mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-gold text-ink hover:bg-gold-light"
                    : "border border-black/15 text-ink hover:bg-cream"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
