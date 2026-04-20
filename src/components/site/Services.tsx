import { Boxes, Code2, Smartphone, Cpu, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Boxes,
    title: "Augmented Reality",
    desc: "Immersive AR experiences for retail, training, marketing and product visualization.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Tailored platforms engineered to scale with your business goals and operations.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    desc: "Beautiful, performant apps across iOS, Android and the modern web.",
  },
  {
    icon: Cpu,
    title: "System Integration & IoT",
    desc: "Connect devices, data and systems into one intelligent ecosystem.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Services</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Engineered for tomorrow.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Full-stack capabilities across immersive AR and modern software — from concept to launch.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ArrowUpRight className="absolute top-6 right-6 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
