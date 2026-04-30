export function LogoCloud() {
  const logos = ["SAVANNAH", "MILANO", "LUMINOUS", "theo", "Amsterdam", "NEXUS"];
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs text-muted-foreground tracking-wide">
          Trusted by 7,000+ top startups, freelancers and studios
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
          {logos.map((l) => (
            <span key={l} className="text-base md:text-lg font-semibold tracking-wider text-foreground/70">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
