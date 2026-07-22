export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 620 320" className={className} aria-hidden="true">
      <path
        d="M 50 245 L 215 75 L 260 245"
        fill="none"
        stroke="#ffffff"
        strokeWidth="30"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
      <path
        d="M 230 75 L 420 245"
        fill="none"
        stroke="#c9a24a"
        strokeWidth="30"
        strokeLinecap="square"
      />
      <path
        d="M 420 75 L 230 245"
        fill="none"
        stroke="#c9a24a"
        strokeWidth="30"
        strokeLinecap="square"
      />
      <path
        d="M 440 75 L 440 245"
        fill="none"
        stroke="#ffffff"
        strokeWidth="30"
        strokeLinecap="square"
      />
      <path d="M 440 75 L 440 160 L 560 115 Z" fill="#ffffff" />
      <path d="M 440 160 L 440 245 L 560 205 Z" fill="#ffffff" />
    </svg>
  );
}

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col items-center ${className ?? ""}`}>
      <LogoMark className="h-9 w-auto" />
      <span className="mt-1.5 flex items-center gap-2 text-[9px] tracking-[0.35em] text-white/55 font-medium">
        <span className="h-px w-4 bg-gold/50" />
        AI CONSULTING
        <span className="h-px w-4 bg-gold/50" />
      </span>
    </div>
  );
}
