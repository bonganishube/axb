export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1040 500"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="axbGold" x1="0" y1="0" x2="0.15" y2="1">
          <stop offset="0" stopColor="#f6da84" />
          <stop offset="0.5" stopColor="#d7a63c" />
          <stop offset="1" stopColor="#a9781f" />
        </linearGradient>
      </defs>

      {/* A — clean white peak */}
      <path
        d="M 55 450 L 270 55 L 485 450"
        fill="none"
        stroke="#fff"
        strokeWidth="66"
        strokeLinejoin="miter"
        strokeMiterlimit="6"
      />

      {/* X — bold metallic gold */}
      <path d="M 430 55 L 700 450" stroke="url(#axbGold)" strokeWidth="70" />
      <path d="M 700 55 L 430 450" stroke="url(#axbGold)" strokeWidth="70" />

      {/* B — angular white */}
      <rect x="760" y="55" width="62" height="395" fill="#fff" />
      <path d="M 820 55 L 930 55 L 980 105 L 980 185 L 930 235 L 820 235 Z" fill="#fff" />
      <path d="M 820 265 L 940 265 L 990 315 L 990 400 L 940 450 L 820 450 Z" fill="#fff" />
    </svg>
  );
}

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col items-center ${className ?? ""}`}>
      <LogoMark className="h-10 w-auto" />
      <span className="mt-2 flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.34em] text-white/70">
        <span className="h-px w-8 bg-gradient-to-r from-white/10 to-gold" />
        AI CONSULTING
        <span className="h-px w-8 bg-gradient-to-l from-white/10 to-gold" />
      </span>
    </div>
  );
}
