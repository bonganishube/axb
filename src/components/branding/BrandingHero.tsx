import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crown, Gem, Layers, Plus, Timer, Truck } from "lucide-react";
import BackgroundFX from "../BackgroundFX";

/* Moved up from the catalogue: reads like the home hero's "works with the
   tools you already use" strip and keeps the catalogue itself uncluttered. */
const BENEFITS = [
  { icon: Gem, label: "Premium quality materials" },
  { icon: Layers, label: "Consistent brand everywhere" },
  { icon: Timer, label: "Fast turnaround times" },
  { icon: Truck, label: "Delivered to your doorstep" },
];

export default function BrandingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white rounded-b-[2.5rem]">
      <BackgroundFX accent="gold" />

      <div className="container-px relative pt-28 pb-16 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="max-w-xl">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
              Take your business to the next level
            </span>

            <h1
              className="animate-fade-up mt-5 text-[26px] font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-[40px]"
              style={{ animationDelay: "80ms" }}
            >
              Look as professional{" "}
              <br className="hidden lg:block" />
              <span className="bg-[linear-gradient(100deg,#f2ce78,#d7a63c_55%,#9a7621)] bg-clip-text text-transparent">
                as you operate.
              </span>
            </h1>

            <p
              className="animate-fade-up mt-5 text-base font-medium text-white/85"
              style={{ animationDelay: "140ms" }}
            >
              Your systems work smarter. Now let your brand make the same
              impression.
            </p>

            <p
              className="animate-fade-up mt-4 max-w-md text-[15px] leading-relaxed text-white/60"
              style={{ animationDelay: "200ms" }}
            >
              The AXB Brand Accelerator gives you everything you need to build a
              consistent, premium brand presence across digital and physical
              touchpoints.
            </p>

            <div
              className="animate-fade-up mt-7 flex flex-wrap gap-3"
              style={{ animationDelay: "260ms" }}
            >
              <span className="inline-flex items-center gap-2.5 rounded-lg border border-gold/30 bg-gold/10 px-4 py-3">
                <Crown className="size-5 shrink-0 text-gold" />
                <span className="text-sm font-semibold leading-tight text-white">
                  Included with
                  <br />
                  AXB Enterprise
                </span>
              </span>
              <span className="inline-flex items-center gap-2.5 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3">
                <Plus className="size-5 shrink-0 text-gold" />
                <span className="text-sm font-medium leading-tight text-white/80">
                  Available as an add-on
                  <br />
                  for all other packages
                </span>
              </span>
            </div>

            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "320ms" }}
            >
              <a
                href="#catalogue"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(215,166,60,0.6)] transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_16px_40px_-8px_rgba(215,166,60,0.75)]"
              >
                Explore the Brand Catalogue
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Book a Free Call
              </Link>
            </div>
          </div>

          {/* Product mockup */}
          <div
            className="animate-fade-up relative"
            style={{ animationDelay: "200ms" }}
          >
            {/* warm glow behind the photo, reads as a halo around its corners */}
            <div
              aria-hidden="true"
              className="absolute -inset-10 -z-10 rounded-full bg-gold/20 blur-[100px]"
            />

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
              <Image
                src="/branding-hero.png"
                alt="AXB branded stationery, cards and merchandise"
                fill
                preload
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Benefits strip */}
        <div
          className="animate-fade-up mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8"
          style={{ animationDelay: "500ms" }}
        >
          {BENEFITS.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <Icon className="size-4 shrink-0 text-gold" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
