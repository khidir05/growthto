import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBlob1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  return (
    <section ref={ref} id="contact" className="py-28 border-t border-border/60 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div style={{ scale }} className="rounded-[2rem] bg-dark text-dark-foreground p-12 md:p-16 text-center relative overflow-hidden shadow-card">
          <motion.div style={{ y: yBlob1 }} className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary-glow/30 blur-3xl" />
          <motion.div style={{ y: yBlob2 }} className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-base text-dark-foreground/70">
              Let's talk. No pressure.
            </p>
            <a
              href="mailto:hello@growthto.studio"
              className="mt-8 inline-flex items-center rounded-full bg-primary-glow text-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition shadow-glow"
            >
              Start a conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
