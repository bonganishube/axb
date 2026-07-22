import { Mail, MapPin, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutubeIcon,
} from "./icons/BrandIcons";
import Logo from "./Logo";

const QUICK_LINKS = ["Home", "Solutions", "Packages", "Industries", "About Us"];
const RESOURCES = ["Blog", "Case Studies", "Guides", "FAQs", "Contact"];
const SOCIALS = [
  { icon: LinkedInIcon, label: "LinkedIn" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: YoutubeIcon, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-px py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr_0.8fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            We help small businesses capture more customers, save time and
            grow with intelligent automation.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Quick Links</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

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
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact Us</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-gold" />
              +27 10 123 4567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-gold" />
              hello@axbai.co.za
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-gold" />
              Johannesburg, South Africa
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Follow Us</p>
          <div className="mt-4 flex gap-3">
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
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© 2024 AXB AI Consulting. All rights reserved.</p>
          <p>
            <a href="#" className="hover:text-white/70">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-white/70">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
