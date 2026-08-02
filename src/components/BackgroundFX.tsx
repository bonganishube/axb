type BackgroundFXProps = {
  /** Second glow wash. "violet" on the home hero, "gold" for an all-brand
      warm treatment (branding page). */
  accent?: "violet" | "gold";
};

/* Shared dark-section atmosphere: two glow washes over a faint dot grid.
   Used by the home hero and the branding hero so both read as the same
   surface. Parent needs `relative isolate overflow-hidden`. */
export default function BackgroundFX({ accent = "violet" }: BackgroundFXProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-gold/15 blur-[130px]" />
      <div
        className={`absolute left-[52%] top-1/3 h-[360px] w-[360px] rounded-full blur-[130px] ${
          accent === "gold" ? "bg-gold-light/15" : "bg-violet-600/20"
        }`}
      />
      {accent === "gold" && (
        <div className="absolute -right-20 bottom-0 h-[320px] w-[320px] rounded-full bg-gold-dark/25 blur-[120px]" />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    </div>
  );
}
