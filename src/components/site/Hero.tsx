import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import architectureImg from "@/assets/architecture_3d.png";
import arImg from "@/assets/ar_3d.png";
import webappImg from "@/assets/webapp_3d.png";

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
    <section ref={ref} id="top" className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 overflow-hidden min-h-[100vh] flex flex-col justify-center" style={{ perspective: "1000px" }}>
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />

      {/* Floating decorative cards (parallax) */}
      <motion.div
        style={{ y: yCard1 }}
        className="absolute top-24 sm:top-32 left-[-20px] sm:left-8 lg:left-20 w-36 sm:w-52 rounded-2xl bg-card border border-border shadow-card p-3 sm:p-4 cursor-pointer z-10"
        initial={{ rotateY: 15, rotateX: 10, rotateZ: -6 }}
        animate={{ 
          rotateY: [15, 5, 15], 
          rotateX: [10, 5, 10],
          rotateZ: [-6, -2, -6]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, zIndex: 30 }}
        whileTap={{ scale: 1.05, zIndex: 30 }}
      >
        <div className="animate-float" style={{ animationDelay: "0s" }}>
          <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}>
            <div className="h-2 w-10 rounded-full bg-primary/70" />
            <p className="mt-3 text-xs font-semibold text-foreground">Architecture</p>
            <p className="mt-1 text-[10px] text-muted-foreground leading-snug hidden sm:block">Plans, drawings & supervision.</p>
            <div className="mt-3 h-20 sm:h-28 rounded-lg overflow-hidden shadow-inner bg-muted">
              <img src={architectureImg} alt="Architecture 3D" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yCard2 }}
        className="absolute top-52 sm:top-56 right-[-10px] sm:right-10 lg:right-24 w-40 sm:w-56 rounded-2xl bg-card border border-border shadow-card p-3 sm:p-4 cursor-pointer z-10"
        initial={{ rotateY: -15, rotateX: 15, rotateZ: 5 }}
        animate={{ 
          rotateY: [-15, -5, -15], 
          rotateX: [15, 8, 15],
          rotateZ: [5, 2, 5]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, zIndex: 30 }}
        whileTap={{ scale: 1.05, zIndex: 30 }}
      >
        <div className="animate-float" style={{ animationDelay: "2s" }}>
          <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
            <div className="h-2 w-10 rounded-full" style={{ background: "var(--primary-glow)" }} />
            <p className="mt-3 text-xs font-semibold text-foreground">AR Visualization</p>
            <p className="mt-1 text-[10px] text-muted-foreground leading-snug hidden sm:block">See it before you build it.</p>
            <div className="mt-3 h-24 sm:h-32 rounded-lg overflow-hidden shadow-inner bg-muted">
              <img src={arImg} alt="AR Visualization 3D" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yCard3 }}
        className="absolute bottom-10 sm:bottom-10 lg:bottom-24 left-4 sm:left-10 lg:left-24 w-32 sm:w-36 lg:w-48 rounded-2xl bg-dark text-dark-foreground shadow-card p-3 sm:p-4 cursor-pointer z-10"
        initial={{ rotateY: 20, rotateX: -10, rotateZ: 4 }}
        animate={{ 
          rotateY: [20, 10, 20], 
          rotateX: [-10, -5, -10],
          rotateZ: [4, 1, 4]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, zIndex: 30 }}
        whileTap={{ scale: 1.05, zIndex: 30 }}
      >
        <div className="animate-float" style={{ animationDelay: "1s" }}>
          <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
            <p className="text-[10px] uppercase tracking-widest opacity-70">Web App</p>
            <p className="mt-2 text-xs sm:text-sm font-semibold">Functional & clean.</p>
            <div className="mt-3 h-16 sm:h-20 sm:h-24 rounded-lg overflow-hidden shadow-inner bg-muted">
              <img src={webappImg} alt="Web App 3D" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div style={{ y: yTitle, opacity }} className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center z-20 mt-10 sm:mt-0">
        <span className="inline-flex items-center rounded-full border border-border bg-card/70 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-medium text-foreground/80 shadow-sm">
          A small studio, still growing
        </span>
        <h1 className="mt-6 text-[2.75rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-foreground">
          From concept <br className="hidden sm:block" />
          to <span className="text-gradient-primary">reality.</span>
        </h1>
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-foreground/75 max-w-2xl mx-auto leading-relaxed px-2">
          GrowthTo helps you bring ideas to life — from building design and visual identity
          to digital systems and augmented experiences.
        </p>
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-5">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-4 text-base font-semibold hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Start a project
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-foreground/5 text-foreground px-8 py-4 text-base font-semibold hover:bg-foreground/10 transition-all"
            >
              Explore services
            </a>
          </div>
          <p className="text-sm text-foreground/55 max-w-md px-4">
            No commitment needed — just share what you have in mind.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
