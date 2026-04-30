import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import projects from "@/assets/feature-projects.png";
import finance from "@/assets/feature-finance.png";

type Item = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  img: string;
  imgBg: string;
  reverse?: boolean;
  pills: string[];
};

const items: Item[] = [
  {
    eyebrow: "AR EXPERIENCES",
    title: "Bring every product to life",
    body: "Plan, design and ship immersive AR experiences — all in one place. With smart asset workflows, real-time collaboration and analytics, your team stays organized and clients stay confident.",
    cta: "Try Grow To free",
    img: projects,
    imgBg: "bg-[oklch(0.86_0.06_240)]",
    pills: ["Scenes", "Tracking", "Assets", "Reports"],
  },
  {
    eyebrow: "SOFTWARE DEVELOPMENT",
    title: "Ship software, stress less",
    body: "Build branded apps, dashboards and APIs. Whether you bill hourly or per project, everything is automated, observable and production-ready from day one.",
    cta: "Try Grow To free",
    img: finance,
    imgBg: "bg-[oklch(0.94_0.04_140)]",
    reverse: true,
    pills: ["Web Apps", "Mobile", "APIs", "Integrations"],
  },
];

function Row({ item }: { item: Item }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div ref={ref} className={`grid lg:grid-cols-2 gap-10 items-center ${item.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <motion.div style={{ y }} className={`relative aspect-square rounded-3xl overflow-hidden ${item.imgBg} grid place-items-center p-8`}>
        <img src={item.img} alt={item.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-contain drop-shadow-xl" />
      </motion.div>
      <div className={item.reverse ? "lg:pr-10" : "lg:pl-10"}>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">{item.eyebrow}</span>
        <h3 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.05]">{item.title}</h3>
        <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-md">
          {item.body}
        </p>
        <a href="#contact" className="mt-7 inline-flex items-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
          {item.cta}
        </a>
        <div className="mt-10 flex flex-wrap gap-2">
          {item.pills.map((p) => (
            <span key={p} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground/80 shadow-soft">
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeatureSplit() {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 space-y-28">
        {items.map((it) => (
          <Row key={it.title} item={it} />
        ))}
      </div>
    </section>
  );
}
