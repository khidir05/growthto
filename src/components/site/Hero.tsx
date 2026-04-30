import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yCard1 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yCard3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative pt-40 pb-32 overflow-hidden min-h-[100vh]">
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />

      {/* Floating decorative cards (parallax) */}
      <motion.div
        style={{ y: yCard1 }}
        className="hidden md:block absolute top-32 left-8 lg:left-20 w-44 rounded-2xl bg-card border border-border shadow-card p-4 rotate-[-6deg]"
      >
        <div className="h-2 w-10 rounded-full bg-primary/70" />
        <p className="mt-3 text-xs font-semibold text-foreground">Architecture</p>
        <p className="mt-1 text-[10px] text-muted-foreground leading-snug">Plans, drawings & supervision.</p>
        <div className="mt-3 h-16 rounded-lg bg-gradient-warm" />
      </motion.div>

      <motion.div
        style={{ y: yCard2 }}
        className="hidden md:block absolute top-56 right-10 lg:right-24 w-48 rounded-2xl bg-card border border-border shadow-card p-4 rotate-[5deg]"
      >
        <div className="h-2 w-10 rounded-full" style={{ background: "var(--primary-glow)" }} />
        <p className="mt-3 text-xs font-semibold text-foreground">AR Visualization</p>
        <p className="mt-1 text-[10px] text-muted-foreground leading-snug">See it before you build it.</p>
        <div className="mt-3 h-16 rounded-lg bg-gradient-primary" />
      </motion.div>

      <motion.div
        style={{ y: yCard3 }}
        className="hidden lg:block absolute bottom-24 left-24 w-40 rounded-2xl bg-dark text-dark-foreground shadow-card p-4 rotate-[4deg]"
      >
        <p className="text-[10px] uppercase tracking-widest opacity-70">Web App</p>
        <p className="mt-2 text-sm font-semibold">Functional, clean, yours.</p>
      </motion.div>

      <motion.div style={{ y: yTitle, opacity }} className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1 text-xs text-foreground/70">
          A small studio, still growing
        </span>
        <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.05]">
          From concept <br className="hidden sm:block" />
          to <span className="text-gradient-primary">reality.</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          GrowthTo helps you bring ideas to life — from building design and visual identity
          to digital systems and augmented experiences.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition shadow-glow"
          >
            Tell us about your project
          </a>
          <p className="text-xs md:text-sm text-foreground/55 max-w-md">
            No commitment needed — just share what you have in mind, and we'll figure out the best path together.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
