import { ArrowUpRight } from "lucide-react";
import retail from "@/assets/project-ar-retail.jpg";
import saas from "@/assets/project-saas.jpg";
import iot from "@/assets/project-iot.jpg";

const projects = [
  { img: retail, tag: "AR · Retail", title: "LiveRoom AR", desc: "Try-before-you-buy AR app letting shoppers visualize furniture in real spaces." },
  { img: saas, tag: "SaaS · Analytics", title: "PulseGrid", desc: "Real-time analytics platform powering decision-making for fast-growing teams." },
  { img: iot, tag: "AR · IoT", title: "FieldVision", desc: "Industrial AR helmet overlay surfacing live machine data on the factory floor." },
];

export function Portfolio() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Selected Work</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Projects that move things forward.
            </h2>
          </div>
          <a href="#contact" className="text-sm font-medium text-foreground inline-flex items-center gap-1 hover:text-primary transition">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden border border-border bg-card shadow-soft hover:shadow-card transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-primary font-semibold">{p.tag}</span>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
