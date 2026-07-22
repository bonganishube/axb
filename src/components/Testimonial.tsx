import Image from "next/image";
import { Star } from "lucide-react";
import {
  Briefcase,
  Building2,
  Home,
  Scale,
  ShieldAlert,
  Stethoscope,
  Users,
  Wrench,
} from "lucide-react";

const INDUSTRIES = [
  { icon: Stethoscope, label: "Medical Practices" },
  { icon: Scale, label: "Law Firms" },
  { icon: Briefcase, label: "Accounting Firms" },
  { icon: Users, label: "Recruitment Agencies" },
  { icon: ShieldAlert, label: "Insurance Brokers" },
  { icon: Building2, label: "Property Agencies" },
  { icon: Wrench, label: "Home Services" },
  { icon: Home, label: "...and more" },
];

export default function Testimonial() {
  return (
    <section id="industries" className="bg-cream py-20 lg:py-24">
      <div className="container-px grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative aspect-[4/4.4] w-full max-w-md overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80&auto=format&fit=crop"
              alt="Dr. N. Mahlangu, Medical Practice Owner"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-10 sm:left-6 sm:right-auto sm:w-72 rounded-xl bg-white p-5 shadow-xl">
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-gold" />
              ))}
            </div>
            <p className="mt-3 text-sm text-ink leading-relaxed">
              &ldquo;We reduced repetitive reception calls and patients
              received answers immediately, even after hours.&rdquo;
            </p>
            <p className="mt-4 text-sm font-bold text-ink">Dr. N. Mahlangu</p>
            <p className="text-xs text-body">Medical Practice Owner</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark">
            BUILT FOR SERVICE BUSINESSES
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-ink">
            Helping businesses like yours{" "}
            <span className="text-gold-dark">win back time and grow.</span>
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
            {INDUSTRIES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-start gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-white text-gold-dark">
                  <Icon className="size-5" />
                </span>
                <p className="text-sm font-medium text-ink leading-snug">
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
