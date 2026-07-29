import Link from "next/link";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import Logo from "./Logo";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/#what-we-do" },
  { label: "Packages", href: "/#packages" },
  { label: "Industries", href: "/#industries" },
  { label: "Branding", href: "/branding" },
];

const CONTACT = [
  { icon: FaPhone, label: "+27 10 123 4567", href: "tel:+27101234567" },
  { icon: FaEnvelope, label: "hello@axbai.co.za", href: "mailto:hello@axbai.co.za" },
  { icon: FaLocationDot, label: "Johannesburg, South Africa", href: null },
];

const LEGAL = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-px grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1.3fr] lg:gap-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            We help small businesses capture more customers, save time and grow
            with intelligent automation.
          </p>
          {/* Socials — re-import FaLinkedinIn / FaInstagram / FaFacebookF /
              FaYoutube from react-icons/fa6 when these go live.
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-ink transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div> */}
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Quick Links</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources — restore the RESOURCES list alongside this block.
        <div>
          <p className="text-sm font-semibold text-white">Resources</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {RESOURCES.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div> */}

        <div>
          <p className="text-sm font-semibold text-white">Contact Us</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {CONTACT.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    className="flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Icon className="size-4 shrink-0 text-gold" />
                    {label}
                  </a>
                ) : (
                  <span className="flex items-center gap-2">
                    <Icon className="size-4 shrink-0 text-gold" />
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter — re-import ArrowRight from lucide-react, and wire the
            button to a Server Action before shipping this.
        <div>
          <p className="text-sm font-semibold text-white">Newsletter</p>
          <p className="mt-4 text-sm text-white/50 leading-relaxed">
            Stay updated with tips and insights to grow your business.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 rounded-md border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
            />
            <button
              type="button"
              aria-label="Subscribe"
              className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gold text-ink hover:bg-gold-light transition-colors"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div> */}
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} AXB AI Consulting. All rights reserved.
          </p>
          <ul className="flex items-center gap-4">
            {LEGAL.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-white/70">
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