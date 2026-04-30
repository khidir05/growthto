const small = [
  { name: "Sergio Walker", role: "Agency Owner", quote: "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works. Fast and beautifully built." },
  { name: "Jane Jay Jay", role: "Project Manager, Google", quote: "We used to duct-tape tools together. Now contracts, time tracking and payments live in one clean system. Everything a small team needs to stay pro." },
  { name: "Maya Patel", role: "Founder, NorthLab", quote: "Onboarding our team was instant. The AR module alone replaced three vendors and shipped twice as fast as our last attempt." },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
          “Grow To is by far the best <br /> studio tool I have ever used”
        </h2>
        <div className="mt-8 flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-gradient-primary" />
          <p className="mt-3 text-sm font-semibold text-foreground">Martha Punla</p>
          <p className="text-xs text-muted-foreground">VP Marketing, Meta</p>
        </div>
      </div>
      <div className="mt-12 mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-5">
        {small.map((t) => (
          <figure key={t.name} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <blockquote className="text-sm text-foreground/80 leading-relaxed">"{t.quote}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="h-9 w-9 rounded-full bg-gradient-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
