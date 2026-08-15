import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import Logo from "./Logo";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/#what-we-do" },
  { label: "Offerings", href: "/offerings" },
  { label: "Packages", href: "/#packages" },
  { label: "Industries", href: "/#industries" },
  { label: "Branding", href: "/branding" },
];

const CONTACT = [
  {
    icon: FaPhone,
    caption: "Call us",
    label: "+27 65 974 0886",
    href: "tel:+27659740886",
  },
  {
    icon: FaEnvelope,
    caption: "Email us",
    label: "hello@axbai.co.za",
    href: "mailto:hello@axbai.co.za",
  },
  {
    icon: FaLocationDot,
    caption: "Based in",
    label: "Johannesburg, South Africa",
    href: null,
  },
];

const LEGAL = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/65">
      <div className="container-px">
        {/* The CTA section above is also dark — this hairline keeps the footer
            from melting into it. */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              We help small businesses capture more customers, save time and
              grow with intelligent automation.
            </p>
            <Link
              href="/#contact-form"
              className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
            >
              Book a Free Call
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-0 bg-gold transition-all group-hover:w-3"
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <ColumnHeading>Contact Us</ColumnHeading>
            <ul className="mt-5 flex flex-col gap-4">
              {CONTACT.map(({ icon: Icon, caption, label, href }) => {
                const body = (
                  <>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                      <Icon className="size-4" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                        {caption}
                      </span>
                      <span className="text-sm text-white/80 transition-colors group-hover:text-white">
                        {label}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className="group flex items-center gap-3">
                        {body}
                      </a>
                    ) : (
                      <span className="group flex items-center gap-3">
                        {body}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} AXB AI Consulting. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {LEGAL.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p className="text-sm font-semibold text-white">{children}</p>
      <span className="mt-2 block h-0.5 w-8 rounded-full bg-gold" />
    </>
  );
}
