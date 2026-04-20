import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-ar.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              AR · Software · Innovation
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
              Building <span className="text-gradient-primary">Immersive AR</span> & Software Experiences
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We help businesses transform ideas into powerful augmented reality and scalable digital solutions — designed for growth.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-glow hover:opacity-95 transition"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition"
              >
                <Play className="h-4 w-4 text-primary" />
                View Our Work
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 max-w-md gap-6">
              {[
                { k: "50+", v: "Projects" },
                { k: "20+", v: "Clients" },
                { k: "8+", v: "Industries" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-2xl font-bold text-foreground">{s.k}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-card bg-dark">
              <img
                src={heroImg}
                alt="Augmented reality interface visualization"
                width={1536}
                height={1280}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
