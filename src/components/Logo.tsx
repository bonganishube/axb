export default function Logo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/axb-logo.svg"
      alt="AXB — AI Consulting"
      width={132}
      height={56}
      className={className ?? "h-14 w-auto"}
    />
  );
}
