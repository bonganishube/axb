import Image from "next/image";
import {
  FileText,
  Home,
  MoreHorizontal,
  Scale,
  ShieldCheck,
  Star,
  HeartPulse,
  Users,
  Wrench,
} from "lucide-react";

const INDUSTRIES = [
  { icon: HeartPulse, label: "Medical Practices" },
  { icon: Scale, label: "Law Firms" },
  { icon: FileText, label: "Accounting Firms" },
  { icon: Users, label: "Recruitment Agencies" },
  { icon: ShieldCheck, label: "Insurance Brokers" },
  { icon: Home, label: "Property Agencies" },
  { icon: Wrench, label: "Home Services" },
  { icon: MoreHorizontal, label: "...and more" },
];

export default function Testimonial() {
  return (
    <section id="industries" className="bg-cream py-20 lg:py-24">
      <div className="container-px grid items-center gap-16 lg:grid-cols-2">
        {/* Image + testimonial card */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="relative aspect-[4/4.4] w-full overflow-hidden rounded-2xl">
            <Image
              src="/testimonial-doctor.jpg"
              alt="Dr. N. Mahlangu, Medical Practice Owner"
              fill
              sizes="(min-width: 1024px) 28rem, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative mx-auto -mt-6 w-[calc(100%-2rem)] rounded-2xl bg-white p-6 shadow-xl sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0 sm:w-80">
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold" />
              ))}
            </div>
            <p className="mt-4 text-[15px] italic leading-relaxed text-ink">
              &ldquo;We reduced repetitive reception calls and patients received
              answers immediately, even after hours.&rdquo;
            </p>
            <div className="mt-5 h-px w-10 bg-gold-dark/60" />
            <p className="mt-4 text-sm font-bold text-ink">Dr. N. Mahlangu</p>
            <p className="text-xs text-body">Medical Practice Owner</p>
          </div>
        </div>

        {/* Copy + industries */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark">
            BUILT FOR SERVICE BUSINESSES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Helping businesses like yours
            <br className="hidden sm:block" /> win back{" "}
            <span className="text-gold-dark">time and grow.</span>
          </h2>
          <div className="mt-6 h-[3px] w-14 rounded-full bg-gold-dark" />

          <div className="mt-10 grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {INDUSTRIES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 border-ink/10 px-3 text-center even:border-l sm:border-l sm:[&:nth-child(4n+1)]:border-l-0"
              >
                <Icon
                  className="size-8 text-gold-dark"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold leading-snug text-ink">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}