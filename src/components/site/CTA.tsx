import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import skyBg from "@/assets/sky-bg.jpg";

export function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const skyY = useTransform(scrollYProgress, [0, 1], [-50, 80]);
  const cloudL = useTransform(scrollYProgress, [0, 1], [60, -100]);
  const cloudR = useTransform(scrollYProgress, [0, 1], [-60, 100]);

  return (
    <section ref={ref} id="contact" className="relative py-32 overflow-hidden">
      <motion.div style={{ y: skyY, backgroundImage: `url(${skyBg})` }} className="absolute inset-0 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <motion.div style={{ x: cloudL }} className="absolute left-0 bottom-12 w-56 h-28 bg-white/80 rounded-full blur-3xl" />
      <motion.div style={{ x: cloudR }} className="absolute right-0 bottom-20 w-64 h-28 bg-white/70 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Ready to grow together</h2>
        <p className="mt-4 text-base text-foreground/70">Start with Grow To for free. No credit card required.</p>
        <a href="mailto:hello@growto.com" className="mt-8 inline-flex items-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition">
          Contact Us
        </a>
      </div>
    </section>
  );
}
