import Image from "next/image";
import { ArrowRight, Crown, Plus } from "lucide-react";

export default function BrandingHero() {
  return (
    <section className="bg-cream">
      <div className="container-px py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Product mockup */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/branding-hero.jpg"
              alt="AXB branded stationery, cards and merchandise"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Copy */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark">
              TAKE YOUR BUSINESS TO THE NEXT LEVEL
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-ink">
              Look as professional
              <br />
              as you operate.
            </h1>
            <p className="mt-5 text-lg font-medium text-ink/80">
              Your systems work smarter. Now let your brand make the same
              impression.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-body">
              The AXB Brand Accelerator gives you everything you need to build a
              consistent, premium brand presence across digital and physical
              touchpoints.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2.5 rounded-lg bg-gold px-4 py-3 text-ink">
                <Crown className="size-5 shrink-0" />
                <span className="text-sm font-semibold leading-tight">
                  Included with
                  <br />
                  AXB Enterprise
                </span>
              </span>
              <span className="inline-flex items-center gap-2.5 rounded-lg border border-black/15 px-4 py-3 text-ink">
                <Plus className="size-5 shrink-0 text-gold-dark" />
                <span className="text-sm font-medium leading-tight">
                  Available as an add-on
                  <br />
                  for all other packages
                </span>
              </span>
            </div>

            <a
              href="#catalogue"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-ink/90 transition-colors"
            >
              Explore the Brand Catalogue
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
