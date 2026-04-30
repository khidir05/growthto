export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-xs text-foreground/70">
          A small studio, still growing
        </span>
        <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.05]">
          From concept <br className="hidden sm:block" /> to reality.
        </h1>
        <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          GrowthTo helps you bring ideas to life — from building design and visual identity
          to digital systems and augmented experiences.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Tell us about your project
          </a>
          <p className="text-xs md:text-sm text-foreground/55 max-w-md">
            No commitment needed — just share what you have in mind, and we'll figure out the best path together.
          </p>
        </div>
      </div>
    </section>
  );
}
