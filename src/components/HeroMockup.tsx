"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  CalendarCheck,
  Camera,
  CreditCard,
  ChevronLeft,
  Clock,
  MessageCircle,
  MoreVertical,
  MoreHorizontal,
  Bell,
  Menu,
  Mic,
  Paperclip,
  Plus,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared surface tokens — dark-mode phone screen                     */
/* ------------------------------------------------------------------ */

const CARD = "shadow-[0_2px_10px_-4px_rgba(0,0,0,0.6)]";
const BUBBLE = "shadow-[0_1px_2px_rgba(0,0,0,0.35)]";

/* ------------------------------------------------------------------ */
/*  Step data — the full journey the assistant runs, start to end      */
/* ------------------------------------------------------------------ */

type ChatItem =
  | { kind: "day"; text: string }
  | { kind: "in" | "out"; text: string; time: string }
  | { kind: "slots"; slots: string[] }
  | {
      kind: "pay";
      label: string;
      amount: string;
      service: string;
      when: string;
      time: string;
      cta: string;
    }
  | { kind: "conf"; label: string; service: string; when: string; time: string };

type Step = {
  title: string;
  items?: ChatItem[];
  dashboard?: boolean;
};

const STEPS: Step[] = [
  {
    title: "Captures every enquiry",
    items: [
      { kind: "day", text: "Today" },
      { kind: "in", text: "Hi! 👋 Thanks for messaging Beauty Studio. How can I help today?", time: "10:28" },
      { kind: "out", text: "Do you do makeup for events?", time: "10:28" },
      { kind: "in", text: "Absolutely 💄 Consultations, event glam and masterclasses.", time: "10:29" },
      { kind: "out", text: "Yes, please! 🙌", time: "10:29" },
    ],
  },
  {
    title: "Books appointments",
    items: [
      { kind: "out", text: "I'd like to book a makeup consultation.", time: "10:30" },
      { kind: "in", text: "Sure! Here are Saturday's open slots:", time: "10:31" },
      { kind: "slots", slots: ["12:00 PM", "2:00 PM", "4:00 PM"] },
      { kind: "out", text: "2:00 PM works for me!", time: "10:32" },
      { kind: "in", text: "Perfect! You're booked for Sat, 25 May at 2:00 PM 🎉", time: "10:32" },
    ],
  },
  {
    title: "Takes secure payments",
    items: [
      { kind: "day", text: "Today" },
      {
        kind: "pay",
        label: "Payment Required",
        amount: "R750.00",
        service: "Makeup Consultation",
        when: "25 May 2024 · 2:00 PM",
        time: "10:30",
        cta: "Pay Securely",
      },
      { kind: "out", text: "Payment completed ✅", time: "10:31" },
      { kind: "in", text: "Payment received! ✅ Your booking is confirmed.", time: "10:31" },
      {
        kind: "conf",
        label: "Booking Confirmed",
        service: "Makeup Consultation",
        when: "25 May 2024 · 2:00 PM",
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
const DASH_REVEALS = 10; // number of staggered reveals in the dashboard scene

function stepDuration(step: Step) {
  const n = step.dashboard ? DASH_REVEALS : step.items!.length;
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
    <div id="how-it-works" className="flex scroll-mt-24 flex-col items-center gap-7">
      <div className="animate-floaty">
        <Phone>
          {/* keyed so reveal animations replay on every step change */}
          <div key={active} className="flex min-h-0 flex-1 flex-col">
            {step.dashboard ? <Dashboard /> : <Chat items={step.items!} />}
          </div>
        </Phone>
      </div>

      {/* Step caption + progress rail (no play / prev / next) */}
      <div className="w-[310px] max-w-full">
        <div className="flex items-center justify-center gap-2.5">
          <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gold">
            Step {active + 1}
          </span>
          <span
            key={active}
            className="animate-fade-up text-[13.5px] font-medium text-white/85"
          >
            {step.title}
          </span>
        </div>

        <div className="mt-4 flex gap-2" aria-hidden="true">
          {STEPS.map((s, i) => (
            <span
              key={i}
              className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/12"
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
/*  Phone frame — proper iPhone proportions (~2.14 screen ratio)       */
/* ------------------------------------------------------------------ */

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[310px] rounded-[3rem] bg-gradient-to-b from-neutral-800 to-neutral-950 p-[9px] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.6),0_18px_45px_-22px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
      <div className="relative flex h-[680px] flex-col overflow-hidden rounded-[2.55rem] bg-[#0c0918] ring-1 ring-white/10">
        {/* dynamic island */}
        <div className="absolute left-1/2 top-2.5 z-20 h-[22px] w-[84px] -translate-x-1/2 rounded-full bg-black" />

        {/* status bar */}
        <div className="flex items-center justify-between bg-ink px-6 pb-2 pt-4 text-[11.5px] font-semibold text-white">
          <span className="tabular-nums">9:41</span>
          <div className="flex items-center gap-1">
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
      <div className="flex items-center gap-2.5 border-b border-white/10 bg-ink px-3.5 py-3">
        <ChevronLeft className="size-5 shrink-0 text-white/50" />
        <div className="relative shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icon.svg"
            alt="AXB"
            width={36}
            height={36}
            className="size-9 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-[#0c0918] bg-[#25d366]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold leading-tight text-white">
            AXB Assistant
          </p>
          <p className="text-[10px] leading-tight text-white/45">Online</p>
        </div>
        <MoreVertical className="size-4 shrink-0 text-white/50" />
      </div>

      {/* messages */}
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-3 overflow-hidden bg-ink px-4 py-5">
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

  if (item.kind === "day") {
    return (
      <div
        className="animate-fade-up self-center rounded-full bg-white/10 px-3 py-1 text-[9.5px] font-medium text-white/55"
        style={style}
      >
        {item.text}
      </div>
    );
  }

  if (item.kind === "in" || item.kind === "out") {
    const isRight = item.kind === "out";
    return (
      <div
        className={`animate-fade-up flex flex-col ${isRight ? "items-end" : "items-start"}`}
        style={style}
      >
        <div
          className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[12px] leading-relaxed text-white/90 ${BUBBLE} ${
            isRight
              ? "rounded-br-md bg-[#144d3b]"
              : "rounded-bl-md bg-white/10 text-white/90"
          }`}
        >
          {item.text}
        </div>
        <span
          className={`mt-1 flex items-center gap-1 text-[9.5px] tabular-nums text-white/40 ${
            isRight ? "pr-1" : "pl-1"
          }`}
        >
          {item.time}
          {isRight && (
            <svg width="14" height="9" viewBox="0 0 18 11" fill="none" aria-hidden="true" className="text-[#53bdeb]">
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
      <div className="animate-fade-up flex w-[64%] flex-col gap-2 self-start" style={style}>
        {item.slots.map((s) => (
          <div
            key={s}
            className={`flex items-center gap-3 rounded-2xl bg-white/10 text-white/90 px-3.5 py-2.5 text-[12.5px] font-semibold ${CARD}`}
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Calendar className="size-3.5" />
            </span>
            {s}
          </div>
        ))}
      </div>
    );
  }

  if (item.kind === "pay") {
    return (
      <div
        className={`animate-fade-up w-[88%] self-start rounded-2xl rounded-bl-md bg-white/10 text-white/90 p-4 ${CARD}`}
        style={style}
      >
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
            <CreditCard className="size-[18px]" />
          </span>
          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-white/45">
              {item.label}
            </p>
            <p className="text-[20px] font-extrabold leading-tight tracking-tight text-white tabular-nums">
              {item.amount}
            </p>
          </div>
        </div>
        <div className="mt-3 border-t border-white/10 pt-2.5 leading-snug">
          <p className="text-[11.5px] font-medium text-white/75">{item.service}</p>
          <p className="mt-0.5 text-[10px] text-white/45">{item.when}</p>
        </div>
        <button
          type="button"
          className="mt-3 w-full rounded-xl bg-gold py-2.5 text-[12px] font-bold text-[#12181d]"
        >
          {item.cta}
        </button>
        <p className="mt-2 text-right text-[9px] tabular-nums text-white/40">
          {item.time}
        </p>
      </div>
    );
  }

  if (item.kind !== "conf") return null;

  // confirmation
  return (
    <div
      className={`animate-fade-up w-[88%] self-start rounded-2xl rounded-bl-md bg-white/10 text-white/90 p-3.5 ${CARD}`}
      style={style}
    >
      <div className="flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#25d366]/15 text-[#4ade80]">
          <CalendarCheck className="size-[18px]" />
        </span>
        <div className="min-w-0 flex-1 leading-snug">
          <div className="flex items-baseline justify-between gap-2">
            <p className="text-[12.5px] font-bold text-white">{item.label}</p>
            <span className="shrink-0 text-[9px] tabular-nums text-white/40">
              {item.time}
            </span>
          </div>
          <p className="mt-0.5 text-[11px] font-medium text-white/75">{item.service}</p>
          <p className="text-[10px] text-white/45">{item.when}</p>
        </div>
      </div>
    </div>
  );
}

function InputBar() {
  return (
    <div className="flex items-center gap-2.5 border-t border-white/10 bg-ink px-3.5 py-3">
      <Plus className="size-5 shrink-0 text-white/55" />
      <div className="flex flex-1 items-center gap-2 rounded-full bg-ink-soft px-4 py-2.5 text-[11.5px] text-white/40">
        <span className="flex-1">Type a message</span>
        <Paperclip className="size-4 text-white/40" />
        <Camera className="size-4 text-white/40" />
      </div>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink-soft text-white/50 shadow-sm">
        <Mic className="size-4" />
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dashboard scene                                                    */
/* ------------------------------------------------------------------ */

const STATS = [
  { icon: Calendar, tint: "bg-gold/15 text-gold", n: "4", k: "Appointments" },
  { icon: CreditCard, tint: "bg-[#4ade80]/15 text-[#4ade80]", n: "R2,250", k: "Received" },
  { icon: Clock, tint: "bg-[#e0a54e]/15 text-[#e0a54e]", n: "R750", k: "Pending" },
  { icon: MessageCircle, tint: "bg-[#8b8bf0]/15 text-[#a5a5f5]", n: "3", k: "Enquiries" },
];
const APPTS = [
  ["10:00 AM", "Bridal Glam", "In-studio"],
  ["2:00 PM", "Consultation", "Client visit"],
];
const PAYMENTS = [
  { initial: "N", name: "Nomsa D.", svc: "Makeup Consultation", amt: "R750", status: "Paid" },
  { initial: "S", name: "Siphokazi N.", svc: "Makeup Consultation", amt: "R750", status: "Pending" },
];
const NAV = [
  { icon: Calendar, label: "Dashboard", active: true },
  { icon: CalendarCheck, label: "Appts", active: false },
  { icon: CreditCard, label: "Payments", active: false },
  { icon: MessageCircle, label: "Enquiries", active: false },
  { icon: MoreHorizontal, label: "More", active: false },
];

function Dashboard() {
  let i = 0;
  const step = () => ({ animationDelay: `${i++ * STAGGER}ms` });
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden bg-ink px-4 pt-3.5">
      {/* dashboard header */}
      <div className="animate-fade-up flex items-center justify-between" style={step()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/axb-mark.svg"
          alt="AXB"
          width={61}
          height={20}
          className="h-5 w-auto"
        />
        <div className="flex items-center gap-2 text-white/50">
          <Bell className="size-[18px]" />
          <span className="flex size-8 items-center justify-center rounded-xl bg-white/10">
            <Menu className="size-4" />
          </span>
        </div>
      </div>

      {/* greeting */}
      <div className="animate-fade-up border-t border-white/10 pt-2.5" style={step()}>
        <p className="text-[15px] font-bold leading-tight text-white">
          Good morning, Beauty Studio 👋
        </p>
        <p className="mt-1 text-[10.5px] text-white/45">Saturday, 25 May 2024</p>
      </div>

      {/* KPI grid — airy 2×2 */}
      <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-2.5">
        {STATS.map((s) => (
          <div
            key={s.k}
            className="animate-fade-up rounded-2xl bg-white/5 px-3 py-2.5"
            style={step()}
          >
            <div className="flex items-center gap-2">
              <span className={`flex size-7 shrink-0 items-center justify-center rounded-full ${s.tint}`}>
                <s.icon className="size-3.5" />
              </span>
              <p className="text-[16px] font-extrabold leading-none tracking-tight text-white tabular-nums">
                {s.n}
              </p>
            </div>
            <p className="mt-1.5 text-[10px] font-medium text-white/45">{s.k}</p>
          </div>
        ))}
      </div>

      {/* appointments */}
      <div className="animate-fade-up flex items-baseline justify-between border-t border-white/10 pt-2.5" style={step()}>
        <p className="text-[12.5px] font-bold text-white">
          Today&rsquo;s Appointments
        </p>
        <span className="text-[10px] font-semibold text-gold">View all</span>
      </div>
      <div className="animate-fade-up flex flex-col gap-1.5" style={step()}>
        {APPTS.map(([time, name, where]) => (
          <div
            key={time}
            className="flex items-center gap-3 rounded-2xl bg-white/5 px-3 py-2"
          >
            <span className="w-14 shrink-0 whitespace-nowrap text-[10.5px] font-bold text-white tabular-nums">
              {time}
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="truncate text-[11.5px] font-medium text-white/90">{name}</p>
              <p className="truncate text-[9.5px] text-white/45">{where}</p>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 text-[9px] font-semibold text-[#4ade80]">
              <span className="size-1.5 rounded-full bg-[#4ade80]" />
              Confirmed
            </span>
          </div>
        ))}
      </div>

      {/* recent payments */}
      <div className="animate-fade-up flex items-baseline justify-between border-t border-white/10 pt-2.5" style={step()}>
        <p className="text-[12.5px] font-bold text-white">Recent Payments</p>
        <span className="text-[10px] font-semibold text-gold">View all</span>
      </div>
      <div className="animate-fade-up flex flex-col gap-1.5" style={step()}>
        {PAYMENTS.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 rounded-2xl bg-white/5 px-3 py-2"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white/70">
              {p.initial}
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="truncate text-[11.5px] font-medium text-white/90">{p.name}</p>
              <p className="truncate text-[9.5px] text-white/45">{p.svc}</p>
            </div>
            <div className="shrink-0 text-right leading-tight">
              <p className="text-[11px] font-bold text-white tabular-nums">{p.amt}</p>
              <p
                className={`text-[9px] font-semibold ${
                  p.status === "Paid" ? "text-[#4ade80]" : "text-[#e0a54e]"
                }`}
              >
                {p.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* bottom nav */}
      <div className="mt-auto -mx-4 flex items-center justify-between border-t border-white/10 px-4 pb-4 pt-3 bg-white/2">
        {NAV.map((n) => (
          <span
            key={n.label}
            className={`flex flex-1 flex-col items-center gap-1 text-[7.5px] font-medium ${
              n.active ? "text-gold" : "text-white/40"
            }`}
          >
            <n.icon className="size-[18px]" />
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
    <svg width="14" height="10" viewBox="0 0 16 11" fill="currentColor" aria-hidden="true">
      <rect x="0" y="7" width="3" height="4" rx="0.8" />
      <rect x="4.3" y="5" width="3" height="6" rx="0.8" />
      <rect x="8.6" y="2.6" width="3" height="8.4" rx="0.8" />
      <rect x="12.9" y="0" width="3" height="11" rx="0.8" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="13" height="10" viewBox="0 0 15 11" fill="currentColor" aria-hidden="true">
      <path d="M7.5 1.2c2.6 0 5 1 6.8 2.7l-1.3 1.3A8 8 0 0 0 7.5 3 8 8 0 0 0 2 5.2L0.7 3.9A9.6 9.6 0 0 1 7.5 1.2Z" />
      <path d="M7.5 5c1.5 0 2.9.6 3.9 1.6l-1.3 1.3A3.7 3.7 0 0 0 7.5 6.8c-1 0-2 .4-2.6 1.1L3.6 6.6A5.5 5.5 0 0 1 7.5 5Z" />
      <path d="M7.5 8.6c.6 0 1.1.2 1.5.6L7.5 10.8 6 9.2c.4-.4 1-.6 1.5-.6Z" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="22" height="11" viewBox="0 0 25 12" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="currentColor" strokeOpacity="0.4" />
      <rect x="2" y="2" width="18" height="8" rx="1.6" fill="currentColor" />
      <rect x="23" y="4" width="1.6" height="4" rx="0.8" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}
