import { Building2, Boxes, Code2, Palette } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Civil Engineering & Architecture",
    desc: "From technical drawings to site supervision. We help plan and build functional structures tailored to your needs.",
  },
  {
    icon: Boxes,
    title: "Augmented Reality",
    desc: "See it before it's built, feel it before it exists. AR visualization to help you make better decisions.",
  },
  {
    icon: Code2,
    title: "Web & Application Development",
    desc: "Websites and systems that work for you. We build clean, functional web apps aligned with your workflow.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Visuals that speak for themselves. Logos, branding, social content, and marketing materials — crafted so your message lands right.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Services</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            What we do
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-background p-8 md:p-10 hover:bg-card transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-accent grid place-items-center">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
