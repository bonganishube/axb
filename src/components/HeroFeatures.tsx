"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, Calendar, MessageCircle, Repeat } from "lucide-react";

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

// Connector strip geometry (px), living in the gap between the phone and the
// bullets. Only the y-positions are measured — they track each icon's centre.
const STRIP_W = 64; // matches w-16
const BUS_X = 20; // x of the vertical "bus" the branches fan out from

export default function HeroFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [geo, setGeo] = useState<{ h: number; ys: number[] } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Each row's fade-up transform makes the row an offsetParent, so a single
    // offsetTop only measures within the row. Accumulate offsetTop up the
    // chain to the container instead — still layout-based (transform-immune,
    // so it's exact even mid entrance-animation), just correct across nesting.
    const centerWithin = (node: HTMLElement) => {
      let y = node.offsetHeight / 2;
      let cur: HTMLElement | null = node;
      while (cur && cur !== container) {
        y += cur.offsetTop;
        cur = cur.offsetParent as HTMLElement | null;
      }
      return y;
    };

    const measure = () => {
      const ys = iconRefs.current.map((el) => (el ? centerWithin(el) : 0));
      setGeo({ h: container.offsetHeight, ys });
    };

    measure();
    // Any responsive change (width → text rewraps → row heights change) resizes
    // the container, so re-measuring here keeps the wires on the icon centres.
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  const ys = geo?.ys ?? [];
  const first = ys[0] ?? 0;
  const last = ys[ys.length - 1] ?? 0;
  const entryY = (first + last) / 2;

  return (
    <div ref={containerRef} className="relative flex flex-col gap-6">
      {/* Connector lines from the phone — measured so they always meet each
          icon's centre, whatever the screen size does to the text wrapping. */}
      {geo && ys.length > 0 && (
        <svg
          className="animate-fade-in pointer-events-none absolute right-full top-0 hidden h-full w-16 overflow-visible lg:block"
          style={{ animationDelay: "500ms" }}
          viewBox={`0 0 ${STRIP_W} ${geo.h}`}
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* static track — the always-visible wiring to all four icons */}
          <g
            stroke="#c9a24a"
            strokeOpacity="0.5"
            strokeWidth="1"
            strokeDasharray="4 4"
            vectorEffect="non-scaling-stroke"
          >
            <path d={`M0 ${entryY} H ${BUS_X}`} />
            <path d={`M${BUS_X} ${first} V ${last}`} />
            {ys.map((y, i) => (
              <path key={i} d={`M${BUS_X} ${y} H ${STRIP_W}`} />
            ))}
          </g>

          {/* glowing pulses that flow from the phone out to each icon */}
          <g
            className="wire-pulse"
            stroke="#f4d789"
            strokeWidth="1.75"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          >
            {ys.map((y, i) => (
              <path
                key={i}
                d={`M0 ${entryY} H ${BUS_X} V ${y} H ${STRIP_W}`}
                pathLength={100}
                strokeDasharray="14 86"
                style={{ animationDelay: `${i * 0.85}s` }}
              />
            ))}
          </g>
        </svg>
      )}

      {FEATURES.map(({ icon: Icon, title, desc }, i) => (
        <div
          key={title}
          className="animate-fade-up group flex items-start gap-3"
          style={{ animationDelay: `${360 + i * 100}ms` }}
        >
          <span
            ref={(el) => {
              iconRefs.current[i] = el;
            }}
            className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-gold/40 bg-gold/5 text-gold transition-colors group-hover:border-gold group-hover:bg-gold/15"
          >
            <Icon className="size-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="mt-0.5 text-xs text-white/50">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
