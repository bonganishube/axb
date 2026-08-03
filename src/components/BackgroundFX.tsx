type BackgroundFXProps = {
  /** Second glow wash. "violet" on the home hero, "gold" for an all-brand
      warm treatment (branding page). */
  accent?: "violet" | "gold";
  /** Which glow washes to draw. The dot grid always renders, so a section can
      drop glows and still read as the same surface as the others.
      - "all" — every wash (home hero)
      - "edges" — corner washes only, for sections whose photo supplies the
        centre light itself (branding hero)
      - "none" — grid only, for sections lit entirely by their photo
        (branding CTA) */
  washes?: "all" | "edges" | "none";
};

/* Shared dark-section atmosphere: glow washes over a faint dot grid. Used by
   the home hero, branding hero and branding CTA so all three read as the same
   surface. Parent needs `relative isolate overflow-hidden`. */
export default function BackgroundFX({
  accent = "violet",
  washes = "all",
}: BackgroundFXProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {washes !== "none" && (
        <>
          <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-gold/15 blur-[130px]" />
          {accent === "gold" && (
            <div className="absolute -right-20 bottom-0 h-[320px] w-[320px] rounded-full bg-gold-dark/25 blur-[120px]" />
          )}
        </>
      )}
      {washes === "all" && (
        <div
          className={`absolute left-[52%] top-1/3 h-[360px] w-[360px] rounded-full blur-[130px] ${
            accent === "gold" ? "bg-gold-light/15" : "bg-violet-600/20"
          }`}
        />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    </div>
  );
}
