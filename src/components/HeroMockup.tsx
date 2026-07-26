"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  CalendarCheck,
  Camera,
  CreditCard,
  Check,
  ChevronDown,
  ChevronLeft,
  Clock,
  MessageCircle,
  MoreVertical,
  Bell,
  Menu,
  Mic,
  Paperclip,
  Plus,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Step data — the full journey the assistant runs, start to end      */
/* ------------------------------------------------------------------ */

type ChatItem =
  | { kind: "in" | "out"; text: string; time: string }
  | { kind: "slots"; slots: string[] }
  | {
      kind: "pay";
      label: string;
      amount: string;
      sub: string;
      time: string;
      cta: string;
    }
  | { kind: "conf"; label: string; sub: string; time: string };

type Step = {
  title: string;
  items?: ChatItem[];
  dashboard?: boolean;
};

const STEPS: Step[] = [
  {
    title: "Captures every enquiry",
    items: [
      { kind: "in", text: "Hi 👋 Thanks for messaging Beauty Studio! How can I help today?", time: "10:28" },
      { kind: "out", text: "Do you do makeup for events?", time: "10:28" },
      { kind: "in", text: "Absolutely 💄 Consultations, event glam and masterclasses.", time: "10:29" },
      { kind: "in", text: "Would you like to book one?", time: "10:29" },
      { kind: "out", text: "Yes, please 🙌", time: "10:29" },
    ],
  },
  {
    title: "Books appointments",
    items: [
      { kind: "out", text: "I'd like to book a makeup consultation.", time: "10:30" },
      { kind: "in", text: "Sure! Here are Saturday's open slots:", time: "10:31" },
      { kind: "slots", slots: ["12:00 PM", "2:00 PM", "4:00 PM"] },
      { kind: "out", text: "2:00 PM works for me!", time: "10:32" },
      { kind: "in", text: "Perfect — you're booked for Sat, 25 May 🎉", time: "10:32" },
    ],
  },
  {
    title: "Takes secure payments",
    items: [
      { kind: "in", text: "Here's your secure payment:", time: "10:30" },
      {
        kind: "pay",
        label: "Payment Required",
        amount: "R750.00",
        sub: "Makeup Consultation · 25 May, 2:00 PM",
        time: "10:30",
        cta: "Pay Securely",
      },
      { kind: "out", text: "Payment completed ✅", time: "10:31" },
      { kind: "in", text: "Payment received ✅ Booking confirmed.", time: "10:31" },
      {
        kind: "conf",
        label: "Booking Confirmed",
        sub: "Makeup Consultation · 25 May · 2:00 PM",
        time: "10:31",
      },
    ],
  },
  {
    title: "Keeps you organised",
    dashboard: true,
  },
];

const STAGGER = 190; // ms between item reveals
const DWELL = 2400; // ms to linger after the last item

function stepDuration(step: Step) {
  const n = step.dashboard ? 11 : step.items!.length;
  return n * STAGGER + 800 + DWELL;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function HeroMockup() {
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const t = setTimeout(
      () => setActive((a) => (a + 1) % STEPS.length),
      stepDuration(STEPS[active]),
    );
    return () => clearTimeout(t);
  }, [active, reduced]);

  const step = STEPS[active];

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="animate-floaty">
        <Phone>
          {/* keyed so reveal animations replay on every step change */}
          <div key={active} className="flex min-h-0 flex-1 flex-col">
            {step.dashboard ? <Dashboard /> : <Chat items={step.items!} />}
          </div>
        </Phone>
      </div>

      {/* Step caption + progress rail (no play / prev / next) */}
      <div className="w-[268px] max-w-full">
        <div className="flex items-center justify-center gap-2">
          <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-gold">
            Step {active + 1}
          </span>
          <span
            key={active}
            className="animate-fade-up text-[13px] font-medium text-white/80"
          >
            {step.title}
          </span>
        </div>

        <div className="mt-3 flex gap-1.5" aria-hidden="true">
          {STEPS.map((s, i) => (
            <span
              key={i}
              className="h-1 flex-1 overflow-hidden rounded-full bg-white/12"
            >
              <span
                className="block h-full rounded-full bg-gold"
                style={
                  i < active
                    ? { width: "100%" }
                    : i === active && !reduced
                      ? {
                          width: "0%",
                          animation: `fill-bar ${stepDuration(s)}ms linear forwards`,
                        }
                      : i === active
                        ? { width: "100%" }
                        : { width: "0%" }
                }
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Phone frame — proper iPhone proportions (~2.17 screen ratio)       */
/* ------------------------------------------------------------------ */

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[268px] rounded-[2.9rem] bg-neutral-900 p-[9px] shadow-2xl ring-1 ring-white/10">
      <div className="relative flex h-[544px] flex-col overflow-hidden rounded-[2.4rem] bg-[#ece7df]">
        {/* dynamic island */}
        <div className="absolute left-1/2 top-2 z-20 h-[19px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

        {/* status bar */}
        <div className="flex items-center justify-between bg-white px-5 pb-1.5 pt-3 text-[11px] font-semibold text-neutral-900">
          <span className="tabular-nums">9:41</span>
          <div className="flex items-center gap-1.5">
            <SignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Chat scene                                                         */
/* ------------------------------------------------------------------ */

function Chat({ items }: { items: ChatItem[] }) {
  return (
    <>
      {/* chat header */}
      <div className="flex items-center gap-1.5 border-b border-black/5 bg-white px-2.5 py-2">
        <ChevronLeft className="size-5 shrink-0 text-neutral-500" />
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-[8px] font-bold tracking-wide text-white">
          AXB
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[12px] font-semibold leading-tight text-neutral-900">
            Your Business Assistant
          </p>
          <p className="text-[10px] leading-tight text-neutral-400">Online</p>
        </div>
        <MoreVertical className="size-4 shrink-0 text-neutral-500" />
      </div>

      {/* messages */}
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-2 overflow-hidden bg-[#ece7df] px-3.5 py-3">
        {items.map((item, i) => (
          <ChatRow key={i} item={item} delay={i * STAGGER} />
        ))}
      </div>

      <InputBar />
    </>
  );
}

function ChatRow({ item, delay }: { item: ChatItem; delay: number }) {
  const style = { animationDelay: `${delay}ms` };

  if (item.kind === "in" || item.kind === "out") {
    const isRight = item.kind === "out";
    return (
      <div
        className={`animate-fade-up flex flex-col ${isRight ? "items-end" : "items-start"}`}
        style={style}
      >
        <div
          className={`max-w-[82%] rounded-2xl px-3 py-2 text-[11.5px] leading-snug shadow-sm ${
            isRight
              ? "rounded-br-md bg-[#d9fdd3] text-neutral-800"
              : "rounded-bl-md bg-white text-neutral-800"
          }`}
        >
          {item.text}
        </div>
        <span
          className={`mt-1 flex items-center gap-1 text-[9px] tabular-nums text-neutral-400 ${
            isRight ? "pr-1" : "pl-1"
          }`}
        >
          {item.time}
          {isRight && (
            <svg width="14" height="9" viewBox="0 0 18 11" fill="none" aria-hidden="true" className="text-[#4aa3e0]">
              <path d="M1 6l3 3.5L9.5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.5 6l3 3.5L17 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      </div>
    );
  }

  if (item.kind === "slots") {
    return (
      <div className="animate-fade-up flex flex-col gap-1.5" style={style}>
        {item.slots.map((s) => (
          <div
            key={s}
            className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 text-[12px] font-semibold text-neutral-800 shadow-sm"
          >
            <Calendar className="size-3.5 text-[#16294d]" />
            {s}
          </div>
        ))}
      </div>
    );
  }

  if (item.kind === "pay") {
    return (
      <div
        className="animate-fade-up w-[86%] self-start rounded-2xl rounded-bl-md bg-white p-3 shadow-sm"
        style={style}
      >
        <div className="flex items-center gap-2.5">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#16294d] text-[#16294d]">
            <CreditCard className="size-4" />
          </span>
          <div>
            <p className="text-[10px] font-semibold text-neutral-500">
              {item.label}
            </p>
            <p className="text-[17px] font-extrabold leading-tight tracking-tight text-neutral-900">
              {item.amount}
            </p>
          </div>
        </div>
        <p className="mt-1.5 text-[10.5px] text-neutral-600">{item.sub}</p>
        <button
          type="button"
          className="mt-2 w-full rounded-lg bg-[#16294d] py-2 text-[11.5px] font-bold text-white"
        >
          {item.cta}
        </button>
      </div>
    );
  }

  if (item.kind !== "conf") return null;

  // confirmation
  return (
    <div
      className="animate-fade-up w-[86%] self-start rounded-2xl rounded-bl-md bg-white p-3 shadow-sm"
      style={style}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#16294d] text-[#16294d]">
          <CalendarCheck className="size-4" />
        </span>
        <div>
          <p className="text-[12px] font-bold text-neutral-900">{item.label}</p>
          <p className="mt-0.5 text-[10.5px] text-neutral-600">{item.sub}</p>
        </div>
      </div>
    </div>
  );
}

function InputBar() {
  return (
    <div className="flex items-center gap-2 bg-[#ece7df] px-2.5 py-2">
      <Plus className="size-5 shrink-0 text-[#16294d]" />
      <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] text-neutral-400">
        <span className="flex-1">Type a message</span>
        <Paperclip className="size-3.5 text-neutral-400" />
        <Camera className="size-3.5 text-neutral-400" />
      </div>
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#16294d] text-white">
        <Mic className="size-4" />
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dashboard scene                                                    */
/* ------------------------------------------------------------------ */

const STATS = [
  { icon: Calendar, tint: "bg-[#efe6d3] text-[#a97f2c]", n: "4", k: "Appointments Today" },
  { icon: CreditCard, tint: "bg-[#e0f0e4] text-[#2f8f4e]", n: "R2,250", k: "Payments Received" },
  { icon: Clock, tint: "bg-[#fbeed9] text-[#c07a17]", n: "R750", k: "Pending Payments" },
  { icon: MessageCircle, tint: "bg-[#e7e6f6] text-[#5b5bd6]", n: "3", k: "New Enquiries" },
];
const APPTS = [
  ["10:00", "Makeup Consultation", "Studio"],
  ["12:00", "Makeup Appointment", "Client"],
  ["14:00", "Masterclass", "Studio"],
];
const NAV = [
  { icon: Calendar, label: "Dashboard", active: true },
  { icon: CalendarCheck, label: "Appointments", active: false },
  { icon: CreditCard, label: "Payments", active: false },
  { icon: MessageCircle, label: "Enquiries", active: false },
  { icon: MoreVertical, label: "More", active: false },
];

function Dashboard() {
  let i = 0;
  const step = () => ({ animationDelay: `${i++ * STAGGER}ms` });
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden bg-white px-3.5 pt-3">
      {/* dashboard header */}
      <div className="animate-fade-up flex items-center justify-between" style={step()}>
        <div className="leading-none">
          <span className="text-[17px] font-black tracking-wide text-neutral-900">
            A<span className="text-gold">X</span>B
          </span>
          <span className="ml-0.5 text-[6px] font-semibold tracking-[0.35em] text-neutral-400">
            CONSULTING
          </span>
        </div>
        <div className="flex gap-2.5 text-neutral-500">
          <Bell className="size-4" />
          <Menu className="size-4" />
        </div>
      </div>

      <div className="animate-fade-up" style={step()}>
        <p className="text-[13.5px] font-bold leading-tight text-neutral-900">
          Good morning, Beauty Studio 👋
        </p>
        <p className="text-[10px] text-neutral-400">
          Here&rsquo;s what&rsquo;s happening today.
        </p>
      </div>

      <div
        className="animate-fade-up flex w-fit items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5 text-[10.5px] font-semibold text-neutral-700"
        style={step()}
      >
        <Calendar className="size-3.5 text-neutral-500" />
        25 May 2024
        <ChevronDown className="size-3 text-neutral-400" />
      </div>

      {/* stat cards */}
      <div className="grid grid-cols-2 gap-2">
        {STATS.map((s) => (
          <div
            key={s.k}
            className="animate-fade-up rounded-xl border border-neutral-100 p-2"
            style={step()}
          >
            <span className={`mb-1 flex size-6 items-center justify-center rounded-lg ${s.tint}`}>
              <s.icon className="size-3.5" />
            </span>
            <p className="text-[14px] font-extrabold leading-none tracking-tight text-neutral-900 tabular-nums">
              {s.n}
            </p>
            <p className="mt-0.5 text-[8px] leading-tight text-neutral-400">{s.k}</p>
          </div>
        ))}
      </div>

      {/* appointments */}
      <div className="animate-fade-up flex items-baseline justify-between" style={step()}>
        <p className="text-[11.5px] font-bold text-neutral-900">
          Today&rsquo;s Appointments
        </p>
        <span className="text-[9px] font-semibold text-gold">View all</span>
      </div>

      <div>
        {APPTS.map(([time, name, where]) => (
          <div
            key={time}
            className="animate-fade-up flex items-center gap-2.5 border-b border-neutral-100 py-1"
            style={step()}
          >
            <span className="w-9 text-[10.5px] font-bold text-neutral-900 tabular-nums">
              {time}
            </span>
            <div className="flex-1 leading-tight">
              <p className="text-[11px] font-medium text-neutral-800">{name}</p>
              <p className="text-[8.5px] text-neutral-400">{where}</p>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-[#e4f5e9] px-2 py-0.5 text-[8.5px] font-bold text-[#2f8f4e]">
              <Check className="size-2.5" strokeWidth={3} />
              Confirmed
            </span>
          </div>
        ))}
      </div>

      {/* bottom nav */}
      <div className="mt-auto -mx-3.5 flex items-center justify-between border-t border-neutral-100 px-3 pb-3 pt-2">
        {NAV.map((n) => (
          <span
            key={n.label}
            className={`flex flex-1 flex-col items-center gap-0.5 text-[7.5px] font-medium ${
              n.active ? "text-gold" : "text-neutral-400"
            }`}
          >
            <n.icon className="size-4" />
            {n.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  iOS status-bar icons                                               */
/* ------------------------------------------------------------------ */

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