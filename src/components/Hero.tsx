import { Bell, Calendar, MessageCircle, Play, Repeat } from "lucide-react";
import {
  GoogleIcon,
  Microsoft365Icon,
  SlackIcon,
  WhatsAppIcon,
  FacebookIcon,
  CalendarIcon,
  EmailIcon,
} from "./icons/BrandIcons";

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
  { icon: GoogleIcon, label: "Google" },
  { icon: WhatsAppIcon, label: "WhatsApp" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: SlackIcon, label: "Slack" },
  { icon: Microsoft365Icon, label: "Microsoft 365" },
  { icon: CalendarIcon, label: "Calendars" },
  { icon: EmailIcon, label: "Email" },
];

export default function Hero() {
  return (
    <section className="relative bg-ink text-white rounded-b-[2.5rem] overflow-hidden">
      <div className="container-px pt-32 pb-16 lg:pt-40">
        <div className="grid lg:grid-cols-[1.35fr_0.65fr_0.7fr] gap-10 items-center">
          {/* Copy */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold leading-[1.25] tracking-tight">
              Stop Losing Customers to
              <br />
              Missed Calls, Slow Responses
              <br />
              <span className="text-gold">and Manual Admin.</span>
            </h1>
            <p className="mt-6 max-w-md text-white/60 text-[15px] leading-relaxed">
              We help small businesses capture every lead, book more
              appointments and save hours of admin—so your team can focus on
              what matters.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
              >
                Book a Free Strategy Call
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                See How It Works
                <Play className="size-3.5 fill-white" />
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <PhoneMockup />
          </div>

          {/* Feature bullets */}
          <div className="relative flex flex-col gap-6">
            {/* connector lines from the phone */}
            <svg
              className="pointer-events-none absolute right-full top-0 hidden h-full w-16 lg:block"
              viewBox="0 0 64 300"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g
                fill="none"
                stroke="#c9a24a"
                strokeOpacity="0.5"
                strokeWidth="1"
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

            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-gold/40 text-gold">
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="text-xs text-white/50 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools strip */}
        <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8">
          <span className="text-xs font-medium text-white/40 whitespace-nowrap">
            Works with the tools you already use
          </span>
          {TOOLS.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-sm text-white/70"
            >
              <Icon className="size-4" />
              {label}
            </span>
          ))}
          <span className="text-sm text-white/40">...and more</span>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[260px] rounded-[2rem] border-[6px] border-white/15 bg-[#0f0f10] p-2.5 shadow-2xl">
      <div className="rounded-[1.5rem] bg-[#151516] overflow-hidden">
        {/* status bar */}
        <div className="flex items-center justify-between px-4 pt-3 pb-1 text-[10px] text-white/70">
          <span>9:41</span>
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>

        {/* app header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <span className="flex size-7 items-center justify-center rounded-full bg-gold/20 text-gold text-xs font-bold">
            AI
          </span>
          <div>
            <p className="text-xs font-semibold text-white">
              Your Business Assistant
            </p>
            <p className="text-[10px] text-emerald-400 flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Online
            </p>
          </div>
        </div>

        {/* chat */}
        <div className="flex flex-col gap-2 px-3 py-4 min-h-[280px]">
          <ChatBubble align="left">Hi! How can we help you today?</ChatBubble>
          <ChatBubble align="right">
            I&rsquo;d like to book an appointment
          </ChatBubble>
          <ChatBubble align="left">
            Sure! What date works best for you?
          </ChatBubble>
          <ChatBubble align="right">Friday at 10am works.</ChatBubble>
          <ChatBubble align="left">
            Great! Your appointment is confirmed.
          </ChatBubble>
        </div>

        {/* input */}
        <div className="flex items-center gap-2 px-3 py-3 border-t border-white/10">
          <div className="flex-1 rounded-full bg-white/10 px-3 py-2 text-[11px] text-white/40">
            Type a message...
          </div>
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-violet-500 text-white text-xs">
            &#8593;
          </span>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({
  align,
  children,
}: {
  align: "left" | "right";
  children: React.ReactNode;
}) {
  const isRight = align === "right";
  return (
    <div className={`flex ${isRight ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-2xl px-3 py-2 text-[11px] leading-snug ${
          isRight
            ? "bg-violet-500 text-white rounded-br-sm"
            : "bg-white/10 text-white/85 rounded-bl-sm"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
