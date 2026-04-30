import { Building2, Boxes, Code2, Palette } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yHeader = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} id="services" className="py-28 border-t border-border/60 relative overflow-hidden">
      <div className="absolute -top-40 right-0 h-[400px] w-[400px] rounded-full bg-primary-glow/30 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div style={{ y: yHeader }} className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Services</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            What we do
          </h2>
          <p className="mt-4 text-base text-foreground/65 leading-relaxed">
            Four practices, one studio. Crafted with care for projects of any size.
          </p>
        </motion.div>

        <ServiceGrid scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}

function ServiceGrid({ scrollYProgress }: { scrollYProgress: import("framer-motion").MotionValue<number> }) {
  const y0 = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const y1 = useTransform(scrollYProgress, [0, 1], [120, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -20]);
  const y3 = useTransform(scrollYProgress, [0, 1], [140, -100]);
  const ys = [y0, y1, y2, y3];
  return (
    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1200px" }}>
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          style={{ y: ys[i] }}
          initial={{ rotateX: 0, rotateY: 0 }}
          whileHover={{ 
            y: -15, 
            rotateX: i % 2 === 0 ? 5 : -5, 
            rotateY: i % 2 === 0 ? -5 : 5,
            scale: 1.05,
            transition: { type: "spring", stiffness: 300, damping: 20 } 
          }}
          className="group rounded-3xl bg-card border border-border p-7 shadow-soft hover:shadow-card relative overflow-hidden cursor-pointer"
        >
          <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
            <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
              <s.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
            <div className="mt-6 h-px w-full bg-border" />
            <p className="mt-4 text-xs uppercase tracking-widest text-primary font-semibold">0{i + 1}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
