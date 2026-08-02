import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { Fragment } from "react";
import BackgroundFX from "../BackgroundFX";

const TRUST = [
  { icon: ShieldCheck, label: "No obligation" },
  { icon: Clock, label: "30-min call" },
  { icon: Sparkles, label: "Free with AXB Enterprise" },
];

export default function BrandingCta() {
  return (
    <section className="relative isolate overflow-hidden rounded-t-[2.5rem] bg-ink text-white">
      <BackgroundFX accent="gold" />

      {/* Photo — masked, not overlaid. Fading the image's own alpha lets the
          section background show through continuously, so there's no edge for
          a gradient to almost-but-not-quite match. Top/bottom fades keep it off
          the white section above and the footer below; the left fade hands over
          to the copy column on desktop.

          -z-20 puts it under BackgroundFX (-z-10) so the glow and dot grid run
          unbroken across the whole section instead of stopping at the photo. */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-20 w-full mask-t-from-80% mask-b-from-65% lg:w-[52%] lg:mask-l-from-45%"
      >
        <Image
          src="/branding-cta.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 52vw, 100vw"
        />
        {/* Knock the photo back to the same density as the home CTA, where the
            image reads as atmosphere rather than a subject. Heavier on mobile,
            where the copy sits directly over it. Inside the mask, so the wash
            fades out with the photo instead of ending on its own edge. */}
        <div className="absolute inset-0 bg-ink/85 lg:bg-ink/65" />
      </div>

      <div className="relative container-px py-20 lg:py-24">
        {/* Wider than the copy column elsewhere: the heading wants two lines at
            this size, and the photo's left third is pure gradient anyway. */}
        <div className="max-w-xl sm:max-w-2xl lg:max-w-[41rem]">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
            <Award className="size-3.5" />
            First impressions decide the rest
          </span>

          {/* Hard break at lg so the gold phrase gets its own line; below that
              the column is too narrow for it, so text-balance takes over and
              keeps the last line from stranding a single word. */}
          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Your customers judge your business
            <br className="hidden lg:block" />{" "}
            <span className="text-gold">before they speak to you.</span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
            Your branding tells people whether you&rsquo;re trustworthy,
            professional and established. We help you create a brand that looks
            as polished as the systems running behind it.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(215,166,60,0.6)] transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_16px_40px_-8px_rgba(215,166,60,0.75)]"
          >
            Book a Branding Consultation
            <ArrowRight className="size-4" />
          </Link>

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
