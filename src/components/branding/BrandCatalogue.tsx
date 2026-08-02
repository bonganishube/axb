import Link from "next/link";
import { ArrowRight, Building2, Gift, Palette, type LucideIcon } from "lucide-react";

type Category = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

/* One icon per category, not per line item — the list reads as a list. */
const CATEGORIES: Category[] = [
  {
    title: "BRANDING ESSENTIALS",
    icon: Palette,
    items: [
      "Business Cards",
      "Letterheads",
      "Email Signature",
      "Invoice Template",
      "Company Profile",
      "Social Media Templates",
      "Presentation Deck",
      "Brand Guidelines",
      "Logo Refresh",
    ],
  },
  {
    title: "PROMOTIONAL ITEMS",
    icon: Gift,
    items: [
      "NFC Business Card",
      "NFC Key Holder",
      "Pens",
      "Notepads",
      "Mugs",
      "Water Bottles",
      "T-Shirts",
      "Golf Shirts",
      "Hoodies",
    ],
  },
  {
    title: "OFFICE & EVENTS",
    icon: Building2,
    items: [
      "Pull-up Banner",
      "Gazebo",
      "Table Cloth",
      "Flags",
      "Wall Banner",
      "Reception Signage",
      "Vehicle Branding",
      "Window Vinyl",
      "Office Signs",
    ],
  },
];

export default function BrandCatalogue() {
  return (
    <section id="catalogue" className="bg-white py-20 lg:py-24">
      <div className="container-px">
        {/* Section header — same shape as "What We Do" on the home page */}
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark">
              CHOOSE WHAT YOU NEED
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-ink">
              Brand Catalogue
              <br />
              <span className="text-gold-dark">
                Pick the items that fit your business.
              </span>
            </h2>
          </div>
          <p className="text-body text-sm leading-relaxed lg:pt-2">
            Build your brand one piece at a time or roll out everything at once.
            Every item is produced to the same standard, so your business looks
            the part wherever customers meet it.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {/* Price card */}
          <div className="flex flex-col rounded-2xl border border-gold p-6 shadow-xl shadow-gold/10">
            <h3 className="text-lg font-extrabold text-ink">
              Brand Accelerator
            </h3>
            <p className="mt-1 text-xs text-body leading-relaxed">
              Choose only the items your business needs.
            </p>

            <div className="mt-5">
              <p className="text-sm text-body">Starting from</p>
              <span className="text-3xl font-extrabold text-gold-dark">
                R2,500
              </span>
            </div>

            <hr className="my-5 border-black/10" />

            <p className="text-sm text-body leading-relaxed grow">
              Unlock the complete Brand Accelerator{" "}
              <span className="font-semibold text-ink">free</span> when you sign
              up for{" "}
              <span className="font-semibold text-ink">AXB Enterprise</span>.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-gold px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
            >
              Book a Branding Consultation
            </Link>
          </div>

          {/* Category cards */}
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="flex flex-col rounded-2xl border border-black/[0.08] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cream text-gold-dark">
                  <cat.icon className="size-5" />
                </span>
                <p className="text-xs font-bold tracking-[0.12em] text-ink">
                  {cat.title}
                </p>
              </div>

              <ul className="mt-6 flex flex-col gap-2.5 grow border-t border-black/[0.06] pt-5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-ink/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] size-1.5 shrink-0 rounded-full bg-gold"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-md border border-black/15 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-cream"
              >
                View Options
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
