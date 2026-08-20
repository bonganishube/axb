import { Play } from "lucide-react";
import {
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaFacebookMessenger,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import HeroMockup from "./HeroMockup";
import HeroFeatures from "./HeroFeatures";
import BackgroundFX from "./BackgroundFX";

const TOOLS = [
  { icon: FaWhatsapp, label: "WhatsApp", color: "#25D366" },
  { icon: FaTiktok, label: "TikTok", color: "#FFFFFF" },
  { icon: FaInstagram, label: "Instagram", color: "#E4405F" },
  { icon: FaFacebook, label: "Facebook", color: "#1877F2" },
  { icon: FaFacebookMessenger, label: "Messenger", color: "#0084FF" },
  { icon: FaXTwitter, label: "X", color: "#FFFFFF" },
  { icon: FaLinkedin, label: "LinkedIn", color: "#0A66C2" },
  { icon: FaYoutube, label: "YouTube", color: "#FF0000" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white rounded-b-[2.5rem]">
      <BackgroundFX />

      <div className="container-px relative pt-32 pb-16 lg:pt-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.72fr_0.72fr] lg:items-center lg:gap-10">
          {/* Copy */}
          <div className="max-w-xl">
            <h1
              className="animate-fade-up text-[26px] font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-[40px]"
              style={{ animationDelay: "80ms" }}
            >
              Work Smarter. Serve Faster.{" "}
              {/* <br className="hidden lg:block" />
              {" "}
              <br className="hidden lg:block" /> */}
              <span className="bg-[linear-gradient(100deg,#f2ce78,#d7a63c_55%,#9a7621)] bg-clip-text text-transparent">
                Grow Without the Extra Admin.
              </span>
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-md text-[15px] leading-relaxed text-white/60"
              style={{ animationDelay: "160ms" }}
            >
              We automate everyday tasks like customer enquiries, bookings, follow-ups and admin, helping your business run smoothly even when you're busy.
            </p>

            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(215,166,60,0.6)] transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_16px_40px_-8px_rgba(215,166,60,0.75)]"
              >
                Book a Free Strategy Call
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-2.5 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 md:hidden"
              >
                See How It Works
                <span className="flex size-5 items-center justify-center rounded-full bg-white/15 text-white transition-colors group-hover:bg-gold group-hover:text-ink">
                  <Play className="size-2.5 fill-current" />
                </span>
              </a>
            </div>
          </div>

          {/* Phone mockup — animated, cycles the full journey */}
          <div
            className="animate-fade-up flex justify-center"
            style={{ animationDelay: "200ms" }}
          >
            <HeroMockup />
          </div>

          {/* Feature bullets + live connector wires to the phone */}
          <HeroFeatures />
        </div>

        {/* Tools strip */}
        <div
          className="animate-fade-up mt-20 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8"
          style={{ animationDelay: "500ms" }}
        >
          <span className="whitespace-nowrap text-xs font-medium text-white/40">
            Works with the tools you already use
          </span>
          {TOOLS.map(({ icon: Icon, label, color }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <Icon className="size-4" color={color} />
              {label}
            </span>
          ))}
          <span className="text-sm text-white/40">...and more</span>
        </div>
      </div>
    </section>
  );
}
