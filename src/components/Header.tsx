"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#", hasDropdown: false },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Packages", href: "#packages", hasDropdown: false },
  { label: "Industries", href: "#industries", hasDropdown: false },
  { label: "About Us", href: "#", hasDropdown: false },
  { label: "Resources", href: "#", hasDropdown: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="container-px flex items-center justify-between py-6">
        <a href="#" className="flex flex-col leading-none shrink-0">
          <span className="text-2xl font-extrabold tracking-tight text-white">
            AX<span className="text-gold">B</span>
          </span>
          <span className="text-[9px] tracking-[0.3em] text-white/60 font-medium mt-0.5">
            AI CONSULTING
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                link.label === "Home"
                  ? "text-gold"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="size-3.5" />}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
        >
          Book a Free Call
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-white/10 container-px py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/85 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-ink"
          >
            Book a Free Call
          </a>
        </div>
      )}
    </header>
  );
}
