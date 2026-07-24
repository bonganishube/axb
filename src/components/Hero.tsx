import { Bell, Calendar, MessageCircle, Play, Repeat, Sparkles } from "lucide-react";
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

const FEATURES = [
  {
    icon: MessageCircle,
    title: "Answers enquiries 24/7",
    desc: "No more missed opportunities",
  },
  {
    icon: Calendar,
    title: "Books appointments automatically",
    desc: "Fewer calls, more bookings",
  },
  {
    icon: Repeat,
    title: "Captures every lead and enquiry",
    desc: "Never lose a potential customer",
  },
  {
    icon: Bell,
    title: "Sends follow-ups & reminders",
    desc: "Improve show-ups and customer loyalty",
  },
];

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
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
              <Sparkles className="size-3.5" />
              AI automation for small business
            </span>

            <h1
              className="animate-fade-up mt-5 text-[26px] font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-[40px]"
              style={{ animationDelay: "80ms" }}
            >
              Stop Losing Customers to{" "}
              <br className="hidden lg:block" />
              Missed Calls, Slow Responses{" "}
              <br className="hidden lg:block" />
              <span className="bg-[linear-gradient(100deg,#f2ce78,#d7a63c_55%,#9a7621)] bg-clip-text text-transparent">
                and Manual Admin.
              </span>
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-md text-[15px] leading-relaxed text-white/60"
              style={{ animationDelay: "160ms" }}
            >
              We help small businesses capture every lead, book more
              appointments and save hours of admin—so your team can focus on
              what matters.
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
                className="group inline-flex items-center gap-2.5 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                See How It Works
                <span className="flex size-5 items-center justify-center rounded-full bg-white/15 text-white transition-colors group-hover:bg-gold group-hover:text-ink">
                  <Play className="size-2.5 fill-current" />
                </span>
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div
            className="animate-fade-up flex justify-center"
            style={{ animationDelay: "200ms" }}
          >
            <div className="animate-floaty">
              <PhoneMockup />
            </div>
          </div>

          {/* Feature bullets */}
          <div className="relative flex flex-col gap-6">
            {/* connector lines from the phone */}
            <svg
              className="animate-fade-in pointer-events-none absolute right-full top-0 hidden h-full w-16 lg:block"
              style={{ animationDelay: "500ms" }}
              viewBox="0 0 64 300"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g
                fill="none"
                stroke="#c9a24a"
                strokeOpacity="0.5"
                strokeWidth="1"
                strokeDasharray="4 4"
                vectorEffect="non-scaling-stroke"
              >
                <path d="M0 150 H20" />
                <path d="M20 37.5 V262.5" />
                <path d="M20 37.5 H64" />
                <path d="M20 112.5 H64" />
                <path d="M20 187.5 H64" />
                <path d="M20 262.5 H64" />
              </g>
            </svg>

            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="animate-fade-up group flex items-start gap-3"
                style={{ animationDelay: `${360 + i * 100}ms` }}
              >
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-gold/40 bg-gold/5 text-gold transition-colors group-hover:border-gold group-hover:bg-gold/15">
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-0.5 text-xs text-white/50">{desc}</p>
                </div>
              </div>
            ))}
          </div>
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

function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-gold/15 blur-[130px]" />
      <div className="absolute left-[52%] top-1/3 h-[360px] w-[360px] rounded-full bg-violet-600/20 blur-[130px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[264px] rounded-[2.75rem] bg-neutral-900 p-2 shadow-2xl ring-1 ring-white/10">
      <div className="relative overflow-hidden rounded-[2.25rem] bg-white">
        {/* dynamic island */}
        <div className="absolute left-1/2 top-2 z-10 h-[18px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

        {/* status bar */}
        <div className="flex items-center justify-between px-5 pb-1 pt-2.5 text-[11px] font-semibold text-neutral-900">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <SignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>

        {/* app header */}
        <div className="flex items-center gap-2.5 border-b border-neutral-100 px-4 py-3">
          <span className="flex size-8 items-center justify-center rounded-full bg-neutral-900">
            <MarkX />
          </span>
          <div>
            <p className="text-xs font-semibold text-neutral-900">
              Your Business Assistant
            </p>
            <p className="flex items-center gap-1 text-[10px] text-emerald-500">
              <span className="animate-pulse-dot size-1.5 rounded-full bg-emerald-500" />
              Online
            </p>
          </div>
        </div>

        {/* chat */}
        <div className="flex min-h-[300px] flex-col gap-3 bg-white px-3.5 py-4">
          <ChatBubble align="left" time="10:10" delay={600}>
            Hi! How can we help you today?
          </ChatBubble>
          <ChatBubble align="right" time="10:10" delay={760}>
            I&rsquo;d like to book an appointment
          </ChatBubble>
          <ChatBubble align="left" time="10:10" delay={920}>
            Sure! What date works best for you?
          </ChatBubble>
          <ChatBubble align="right" time="10:10" delay={1080}>
            Friday at 10am works.
          </ChatBubble>
          <ChatBubble align="left" time="10:12" delay={1240}>
            Great! Your appointment is confirmed.
          </ChatBubble>
          <TypingBubble delay={1440} />
        </div>

        {/* input */}
        <div className="flex items-center gap-2 border-t border-neutral-100 px-3 py-3">
          <div className="flex-1 rounded-full bg-neutral-100 px-3.5 py-2 text-[11px] text-neutral-400">
            Type a message...
          </div>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#6C5CE7] text-white shadow-lg shadow-[#6C5CE7]/30">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 19V5M12 5l-6 6M12 5l6 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({
  align,
  time,
  delay,
  children,
}: {
  align: "left" | "right";
  time: string;
  delay: number;
  children: React.ReactNode;
}) {
  const isRight = align === "right";
  return (
    <div
      className={`animate-fade-up flex flex-col ${isRight ? "items-end" : "items-start"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`max-w-[78%] rounded-2xl px-3 py-2 text-[11.5px] leading-snug ${
          isRight
            ? "rounded-br-md bg-[#6C5CE7] text-white"
            : "rounded-bl-md bg-neutral-100 text-neutral-800"
        }`}
      >
        {children}
      </div>
      <span
        className={`mt-1 flex items-center gap-1 text-[9px] text-neutral-400 ${
          isRight ? "pr-1" : "pl-1"
        }`}
      >
        {time}
        {isRight && (
          <svg width="14" height="9" viewBox="0 0 18 11" fill="none" aria-hidden="true" className="text-[#6C5CE7]">
            <path d="M1 6l3 3.5L9.5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5 6l3 3.5L17 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
    </div>
  );
}

function TypingBubble({ delay }: { delay: number }) {
  return (
    <div
      className="animate-fade-up flex items-start"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-neutral-100 px-3 py-2.5">
        <span className="typing-dot size-1.5 rounded-full bg-neutral-400" />
        <span className="typing-dot size-1.5 rounded-full bg-neutral-400" style={{ animationDelay: "0.2s" }} />
        <span className="typing-dot size-1.5 rounded-full bg-neutral-400" style={{ animationDelay: "0.4s" }} />
      </div>
    </div>
  );
}

/* --- Assistant avatar: the gold X mark --- */
function MarkX() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="markGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F2CE78" />
          <stop offset="1" stopColor="#B8862B" />
        </linearGradient>
      </defs>
      <path
        d="M5 5l14 14M19 5L5 19"
        stroke="url(#markGold)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* --- iOS-style status bar icons --- */
function SignalIcon() {
  return (
    <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor" aria-hidden="true">
      <rect x="0" y="7" width="3" height="4" rx="0.8" />
      <rect x="4.3" y="5" width="3" height="6" rx="0.8" />
      <rect x="8.6" y="2.6" width="3" height="8.4" rx="0.8" />
      <rect x="12.9" y="0" width="3" height="11" rx="0.8" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor" aria-hidden="true">
      <path d="M7.5 1.2c2.6 0 5 1 6.8 2.7l-1.3 1.3A8 8 0 0 0 7.5 3 8 8 0 0 0 2 5.2L0.7 3.9A9.6 9.6 0 0 1 7.5 1.2Z" />
      <path d="M7.5 5c1.5 0 2.9.6 3.9 1.6l-1.3 1.3A3.7 3.7 0 0 0 7.5 6.8c-1 0-2 .4-2.6 1.1L3.6 6.6A5.5 5.5 0 0 1 7.5 5Z" />
      <path d="M7.5 8.6c.6 0 1.1.2 1.5.6L7.5 10.8 6 9.2c.4-.4 1-.6 1.5-.6Z" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="currentColor" strokeOpacity="0.4" />
      <rect x="2" y="2" width="18" height="8" rx="1.6" fill="currentColor" />
      <rect x="23" y="4" width="1.6" height="4" rx="0.8" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}