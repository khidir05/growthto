import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about_3d.png";
import logoImg from "@/assets/logo/logo.png";

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
            GrowthTo is still growing and that's our advantage. From civil engineering and
            architecture, to web and application development, augmented reality experiences,
            and graphic design each project is a chance to learn and create something meaningful.
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

        <motion.div style={{ y: yRight, perspective: "1000px" }} className="grid grid-cols-2 gap-4">
          {/* Card 1: Gambar */}
          <motion.div
            initial={{ rotateY: 15, rotateX: 15 }}
            whileHover={{ scale: 1.05, rotateY: 0, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="aspect-square rounded-3xl bg-gradient-primary shadow-card overflow-hidden"
          >
            <img src={aboutImg} className="w-full h-full object-cover mix-blend-overlay opacity-60 hover:scale-110 transition-transform duration-500" alt="About Studio" />
          </motion.div>

          {/* Card 2: Growing with your projects (Sekarang bg-dark) */}
          <motion.div
            initial={{ rotateY: -15, rotateX: 15 }}
            whileHover={{ scale: 1.05, rotateY: 0, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="aspect-square rounded-3xl bg-dark text-dark-foreground shadow-soft mt-12 grid place-items-center p-6 text-center"
          >
            <p className="text-sm italic opacity-80" style={{ transform: "translateZ(30px)" }}>"Growing with your projects."</p>
          </motion.div>

          {/* Card 3: GrowthTo Logo (Sekarang bg-card) */}
          <motion.div
            initial={{ rotateY: 15, rotateX: -15 }}
            whileHover={{ scale: 1.05, rotateY: 0, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="aspect-square rounded-3xl bg-card border border-border p-6 flex flex-col justify-center items-center shadow-card"
          >
            <div style={{ transform: "translateZ(40px)" }} className="flex flex-col items-center text-center w-full">
              <img src={logoImg} alt="GrowthTo Logo" className="w-full h-auto max-w-[160px] mb-3 object-contain" />
              <p className="font-montserrat text-3xl font-bold tracking-tight">
                <span style={{ color: '#000000' }}>Growth</span>
                <span style={{ color: '#ba782a' }}>To</span>
              </p>
            </div>
          </motion.div>

          {/* Card 4: Gambar */}
          <motion.div
            initial={{ rotateY: -15, rotateX: -15 }}
            whileHover={{ scale: 1.05, rotateY: 0, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="aspect-square rounded-3xl shadow-soft mt-12 overflow-hidden border border-border/50"
          >
            <img src={aboutImg} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="About 3D" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}