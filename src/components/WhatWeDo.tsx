import {
  BarChart3,
  CalendarCheck,
  MessageSquareText,
  Monitor,
  ShieldCheck,
  Users,
} from "lucide-react";

const ITEMS = [
  {
    icon: MessageSquareText,
    title: "Never Miss Another Customer Enquiry",
    desc: "AI assistant that answers questions day or night.",
  },
  {
    icon: CalendarCheck,
    title: "Fill Your Calendar Automatically",
    desc: "Customers can book appointments without waiting for a phone call.",
  },
  {
    icon: Users,
    title: "Turn More Enquiries Into Paying Customers",
    desc: "Capture every lead and automatically follow up.",
  },
  {
    icon: Monitor,
    title: "Make a Great First Impression",
    desc: "Fast, mobile-friendly websites that build trust and generate enquiries.",
  },
  {
    icon: ShieldCheck,
    title: "Look Like a Business Customers Can Trust",
    desc: "Professional branding and content that gives you credibility.",
  },
  {
    icon: BarChart3,
    title: "Know What's Working",
    desc: "Simple dashboards that show what's driving growth.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-px">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-10 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark">
              WHAT WE DO
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-ink">
              Everything Your Business Needs to{" "}
              <span className="text-gold-dark">
                Stop Losing Time and Customers.
              </span>
            </h2>
          </div>
          <p className="text-body text-sm leading-relaxed lg:pt-2">
            One connected system that works behind the scenes to help you
            attract customers, respond instantly and automate daily
            operations.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-black/[0.06] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-cream text-gold-dark">
                <Icon className="size-5" />
              </span>
              <p className="mt-4 text-sm font-bold text-ink leading-snug">
                {title}
              </p>
              <p className="mt-2 text-xs text-body leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
