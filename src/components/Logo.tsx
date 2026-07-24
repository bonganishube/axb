export default function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col items-center ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/axb-mark.svg"
        alt="AXB"
        width={98}
        height={32}
        className="h-7 w-auto sm:h-8"
      />
      {/* <span className="mt-1 flex items-center gap-1.5 whitespace-nowrap text-[7px] font-medium tracking-[0.3em] text-white/85 sm:text-[8px]">
        <span className="h-px w-3 bg-gold/80" />
        AI CONSULTING
        <span className="h-px w-3 bg-gold/80" />
      </span> */}
    </span>
  );
}
