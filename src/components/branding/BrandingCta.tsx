import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

export default function BrandingCta() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* product image bleeding off the right edge */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[40%] lg:block">
        <Image
          src="/branding-cta.jpg"
          alt="AXB branded mug and merchandise"
          fill
          className="object-cover"
          sizes="40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent mix-blend-screen" />
      </div>

      <div className="relative container-px py-14 lg:py-16">
        <div className="grid gap-10 lg:max-w-[62%] lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="flex size-14 items-center justify-center rounded-full border border-gold/40 text-gold">
              <Award className="size-7" />
            </span>
            <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-white">
              Your customers judge your business before they speak to you.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Your branding tells people whether you&rsquo;re trustworthy,
              professional and established.
            </p>
          </div>

          {/* Middle */}
          <div className="lg:border-l lg:border-white/15 lg:pl-10 flex flex-col justify-center">
            <p className="text-base leading-relaxed text-white/80">
              We help you create a brand that looks as polished as the systems
              running behind it.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
            >
              Book a Branding Consultation
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
