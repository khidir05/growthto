import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yLeft = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section ref={ref} id="about" className="py-28 border-t border-border/60 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div style={{ y: yLeft }} className="rounded-3xl bg-card border border-border p-10 shadow-card">
          <span className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">About</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            A small studio, taking every project seriously.
          </h2>
          <p className="mt-6 text-base text-foreground/70 leading-relaxed">
            GrowthTo is still growing — and that's our advantage. From civil engineering and
            architecture, to web and application development, augmented reality experiences,
            and graphic design — each project is a chance to learn and create something meaningful.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-secondary p-4">
              <p className="text-2xl font-semibold text-foreground">4</p>
              <p className="text-xs text-muted-foreground mt-1">Disciplines under one roof</p>
            </div>
            <div className="rounded-2xl bg-secondary p-4">
              <p className="text-2xl font-semibold text-foreground">1:1</p>
              <p className="text-xs text-muted-foreground mt-1">Direct with the makers</p>
            </div>
          </div>
        </motion.div>

        <motion.div style={{ y: yRight }} className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-3xl bg-gradient-primary shadow-card" />
          <div className="aspect-square rounded-3xl bg-card border border-border shadow-soft mt-12 grid place-items-center p-6 text-center">
            <p className="text-sm text-foreground/70 italic">"Growing with your projects."</p>
          </div>
          <div className="aspect-square rounded-3xl bg-dark text-dark-foreground p-6 flex flex-col justify-end shadow-card">
            <p className="text-xs uppercase tracking-widest opacity-70">Studio</p>
            <p className="mt-1 text-lg font-semibold">GrowthTo</p>
          </div>
          <div className="aspect-square rounded-3xl bg-accent shadow-soft mt-12" />
        </motion.div>
      </div>
    </section>
  );
}
