import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import skyBg from "@/assets/sky-bg.jpg";
import dashboard from "@/assets/dashboard-mock.png";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const skyY = useTransform(scrollY, [0, 800], [0, 200]);
  const cloudLeftX = useTransform(scrollY, [0, 800], [0, -120]);
  const cloudRightX = useTransform(scrollY, [0, 800], [0, 120]);
  const dashY = useTransform(scrollY, [0, 800], [0, -80]);
  const titleY = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section ref={ref} id="top" className="relative pt-32 pb-32 overflow-hidden">
      <motion.div
        style={{ y: skyY, backgroundImage: `url(${skyBg})` }}
        className="absolute inset-0 -top-20 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Floating clouds */}
      <motion.div
        style={{ x: cloudLeftX }}
        className="absolute left-0 top-32 w-48 h-24 bg-white/80 rounded-full blur-2xl opacity-90 animate-drift"
      />
      <motion.div
        style={{ x: cloudRightX }}
        className="absolute right-0 top-48 w-64 h-28 bg-white/70 rounded-full blur-3xl opacity-80 animate-drift"
      />
      <motion.div
        style={{ x: cloudLeftX }}
        className="absolute left-1/4 top-[420px] w-40 h-20 bg-white/60 rounded-full blur-2xl opacity-70"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div style={{ y: titleY }} className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
            Build immersive AR <br /> experiences like a pro
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            All-in-one studio for crafting AR products and scalable software — from first prototype to production launch, Grow To has your back.
          </p>
          <div className="mt-9 flex items-center justify-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Try Grow To free
            </a>
            <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition story-link">
              See features
            </a>
          </div>
        </motion.div>

        <motion.div
          style={{ y: dashY }}
          className="relative mt-16 mx-auto max-w-5xl"
        >
          <div className="absolute -inset-10 bg-gradient-primary opacity-15 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden border border-white/40 shadow-card bg-white/30 backdrop-blur-sm">
            <img
              src={dashboard}
              alt="Grow To AR studio dashboard"
              width={1536}
              height={1024}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
