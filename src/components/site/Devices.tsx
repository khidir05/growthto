import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import tablet from "@/assets/tablet-scene.jpg";

export function Devices() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 1]);
  const [tab, setTab] = useState<"mobile" | "web">("web");

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Seamless across devices</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Work from anywhere, <br /> stay in sync
        </h2>
      </div>
      <div ref={ref} className="relative mt-12 mx-auto max-w-6xl px-6">
        <motion.div style={{ y, scale }} className="relative rounded-3xl overflow-hidden shadow-card border border-border">
          <img src={tablet} alt="Tablet showing dashboard" loading="lazy" width={1536} height={1024} className="w-full h-auto" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-dark/80 backdrop-blur px-1.5 py-1.5 text-xs">
            <button
              onClick={() => setTab("mobile")}
              className={`px-4 py-1.5 rounded-full transition ${tab === "mobile" ? "bg-white text-dark" : "text-white/80 hover:text-white"}`}
            >
              Mobile App
            </button>
            <button
              onClick={() => setTab("web")}
              className={`px-4 py-1.5 rounded-full transition ${tab === "web" ? "bg-white text-dark" : "text-white/80 hover:text-white"}`}
            >
              Web App
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
