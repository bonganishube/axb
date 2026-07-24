import Image from "next/image";
import { Fragment } from "react";
import { CalendarDays, Clock, Play, ShieldCheck, Users } from "lucide-react";

const TRUST = [
  { icon: ShieldCheck, label: "No obligation" },
  { icon: Clock, label: "30-min call" },
  { icon: Users, label: "Tailored for your business" },
];

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden rounded-t-[2.5rem] bg-ink text-white"
    >
      {/* Photo — full-bleed on mobile, right side on desktop.
          The gradient background is a clean fallback shown until a photo is
          added at /public/cta-laptop.jpg. */}
      <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-br from-neutral-800 to-ink lg:w-[56%]">
        <Image
          src="/cta-laptop.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="object-cover object-center"
        />
        {/* Fade the photo into the dark background */}
        <div className="absolute inset-0 bg-ink/70 lg:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/70 to-transparent lg:block" />
      </div>

      <div className="relative container-px py-20 lg:py-28">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[40px]">
            Let&rsquo;s build a system that works
            <br className="hidden sm:block" /> while you focus on{" "}
            <span className="text-gold">what matters.</span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
            Book a free strategy call and see what&rsquo;s possible for your
            business.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#packages"
              className="inline-flex items-center gap-2.5 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(215,166,60,0.6)] transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_16px_40px_-8px_rgba(215,166,60,0.75)]"
            >
              <CalendarDays className="size-4" />
              Book My Free Strategy Call
            </a>
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2.5 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              <span className="flex size-5 items-center justify-center rounded-full bg-white/15 text-white transition-colors group-hover:bg-gold group-hover:text-ink">
                <Play className="size-2.5 fill-current" />
              </span>
              See How It Works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/80">
            {TRUST.map(({ icon: Icon, label }, i) => (
              <Fragment key={label}>
                {i > 0 && (
                  <span className="hidden h-4 w-px bg-white/20 sm:block" />
                )}
                <span className="flex items-center gap-2">
                  <Icon className="size-4 text-gold" />
                  {label}
                </span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}