import Image from "next/image";

export default function CtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1600&q=80&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      <div className="relative container-px py-24 lg:py-32">
        <div className="max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white">
            Let&rsquo;s build a system that works while you focus on what
            matters.
          </h2>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">
            Book a free strategy call and see what&rsquo;s possible for your
            business.
          </p>
          <a
            href="#packages"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
          >
            Book My Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
