"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "Solutions", href: "/#what-we-do", hasDropdown: true },
  { label: "Packages", href: "/#packages", hasDropdown: false },
  { label: "Industries", href: "/#industries", hasDropdown: false },
  { label: "About Us", href: "/#", hasDropdown: false },
  { label: "Resources", href: "/#", hasDropdown: true },
];

type HeaderProps = {
  solid?: boolean;
  active?: string;
};

export default function Header({ solid = false, active = "Home" }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={
        solid
          ? "sticky top-0 inset-x-0 z-40 bg-ink/95 backdrop-blur border-b border-white/10"
          : "absolute top-0 inset-x-0 z-40"
      }
    >
      <div className="container-px flex items-center justify-between py-6">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                link.label === active
                  ? "text-gold"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="size-3.5" />}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="hidden lg:inline-flex items-center rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
        >
          Book a Free Call
        </Link>

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
            <Link
              key={link.label}
              href={link.href}
              className="text-white/85 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-ink"
          >
            Book a Free Call
          </Link>
        </div>
      )}
    </header>
  );
}
