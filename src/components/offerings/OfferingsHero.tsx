import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Headset, Phone, Scaling, SlidersHorizontal } from "lucide-react";

const BENEFITS = [
  { icon: SlidersHorizontal, label: "Tailored to your business" },
  { icon: Scaling, label: "Scalable & flexible" },
  { icon: Headset, label: "Expert support" },
];

export default function OfferingsHero() {
  return (
    // min-h tracks the artwork: it is sized off the viewport width, so without
    // this it outgrows the section on wide screens and rides up under the header
    // grid (not flex) so the container-px child still stretches to full width
    // before its own max-width/auto-margins centre it
    <section className="relative isolate overflow-hidden bg-ink text-white lg:grid lg:min-h-[40vw] lg:items-center">
      {/* Artwork, right-anchored on desktop. `object-contain` rather than cover:
          the source (1692×930) already sits on its own black field with the box
          starting ~30% in, so cover at full bleed drags the box under the copy.
          Contained inside a right-hand column it lands clear of the text at
          every desktop width, and the letterboxing is invisible — the photo's
          black matches the section. */}
      <div className="absolute right-0 top-1/2 -z-10 hidden w-[68%] -translate-y-1/2 aspect-[1692/930] lg:block xl:w-[70%] 2xl:w-[64%]">
        <Image
          src="/offerings-hero.png"
          alt=""
          fill
          preload
          className="object-cover object-right"
          sizes="70vw"
        />
        {/* Rolloffs on all four inner edges. The box matches the source aspect,
           so these land exactly on the photo's edges — the photo's black is a
           touch warmer than bg-ink and would otherwise show as a rectangle. */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(to_right,#0b0b0b_0%,rgba(11,11,11,0.75)_35%,rgba(11,11,11,0.35)_65%,transparent_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(to_bottom,#0b0b0b_0%,rgba(11,11,11,0.5)_45%,transparent_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_top,#0b0b0b_0%,rgba(11,11,11,0.55)_45%,transparent_100%)]"
        />
      </div>

      {/* w-full: container-px's auto inline margins would otherwise make this
          grid item shrink to fit-content instead of stretching */}
      <div className="container-px relative w-full pt-28 pb-16 lg:pt-40 lg:pb-28">
        <div className="grid items-center gap-12 lg:block">
          {/* Copy — held to the left half on lg so it clears the artwork */}
          <div className="max-w-xl">
            <div className="animate-fade-up flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                Build your solution
              </span>
              <span
                aria-hidden="true"
                className="h-px w-24 bg-gradient-to-r from-gold to-transparent"
              />
            </div>

            <h1
              className="animate-fade-up mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]"
              style={{ animationDelay: "80ms" }}
            >
              Build a Business
              <br />
              That <span className="text-gold">Runs Smarter</span>
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-md text-[17px] leading-relaxed text-white/75"
              style={{ animationDelay: "160ms" }}
            >
              Choose the solutions your business needs. AXB connects the right
              tools, automation and AI to help you save time, serve customers
              and grow.
            </p>

            <div
              className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href="#build"
                className="inline-flex items-center gap-3 rounded-lg bg-gold px-7 py-4 text-sm font-bold text-ink shadow-[0_10px_30px_-8px_rgba(215,166,60,0.6)] transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_16px_40px_-8px_rgba(215,166,60,0.75)]"
              >
                Build My Solution
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 rounded-lg border border-gold/60 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-gold hover:bg-gold/10"
              >
                <Phone className="size-4 text-gold" />
                Talk to an Expert
              </Link>
            </div>

            <div
              className="animate-fade-up mt-12 flex flex-wrap items-center gap-x-10 gap-y-4"
              style={{ animationDelay: "340ms" }}
            >
              {BENEFITS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2.5 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <Icon className="size-5 shrink-0 text-gold" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Artwork below the copy on small screens, where the full-bleed
             version would crop the box out of frame */}
          <div
            className="animate-fade-up relative aspect-[1692/930] w-full overflow-hidden rounded-2xl lg:hidden"
            style={{ animationDelay: "200ms" }}
          >
            <Image
              src="/offerings-hero.png"
              alt="AXB solutions — AI agent, booking system, automation and CRM assembled into one connected solution"
              fill
              loading="eager"
              fetchPriority="high"
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
