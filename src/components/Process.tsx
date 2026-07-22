const STEPS = [
  {
    number: "1",
    title: "Understand",
    desc: "We learn where customers are slipping through the cracks.",
  },
  {
    number: "2",
    title: "Build",
    desc: "We customise your automation around your existing workflow.",
  },
  {
    number: "3",
    title: "Go Live",
    desc: "Your system launches and starts working for you.",
  },
  {
    number: "4",
    title: "Optimise",
    desc: "We monitor, optimise and expand your system as you grow.",
  },
];

export default function Process() {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="container-px">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark">
          OUR PROCESS
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-ink">
          A simple 4-step journey
          <br />
          to a better running business.
        </h2>

        <div className="mt-16 relative grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6">
          <div className="hidden sm:block absolute top-4 left-0 right-0 border-t-2 border-dashed border-gold/40 -z-0" />
          {STEPS.map((step) => (
            <div key={step.number} className="relative flex flex-col gap-4">
              <span className="relative z-10 flex size-9 items-center justify-center rounded-full bg-gold text-sm font-bold text-ink">
                {step.number}
              </span>
              <div>
                <p className="text-base font-bold text-ink">{step.title}</p>
                <p className="mt-1 text-sm text-body leading-relaxed max-w-[180px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
