import { Compass, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  { n: "01", icon: Compass, title: "Discover", desc: "We dig into goals, users and constraints to align on what success looks like." },
  { n: "02", icon: PenTool, title: "Design", desc: "Wireframes, prototypes and visual systems that turn vision into a clear plan." },
  { n: "03", icon: Code, title: "Develop", desc: "Senior engineers build with quality, performance and scalability baked in." },
  { n: "04", icon: Rocket, title: "Deploy", desc: "Launch, measure and iterate — we stay with you beyond the release." },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Our Process</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            From idea to impact in four steps.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl bg-card border border-border p-6 shadow-soft hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-primary">{s.n}</span>
                <div className="h-10 w-10 rounded-xl bg-accent grid place-items-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 h-px w-6 bg-gradient-to-r from-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
