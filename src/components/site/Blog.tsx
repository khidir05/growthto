import blogFeature from "@/assets/blog-feature.jpg";

const tags = [
  { label: "TOOLS", color: "bg-[oklch(0.78_0.13_60)] text-white", title: "Top 10 digital agency software" },
  { label: "INSIGHT", color: "bg-[oklch(0.75_0.15_45)] text-white", title: "A complete guide to project success in 2026" },
  { label: "MANAGEMENT", color: "bg-[oklch(0.7_0.15_150)] text-white", title: "What are billable hours" },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Blog</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Ideas to level-up <br /> your studio game
          </h2>
        </div>

        <article className="mt-12 grid md:grid-cols-2 rounded-3xl overflow-hidden border border-border bg-card shadow-soft">
          <img src={blogFeature} alt="How to start a 100k creative agency" loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
          <div className="p-8 flex flex-col">
            <span className="self-start rounded-full bg-foreground text-background text-xs px-3 py-1">MUST READ</span>
            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">How to start a 100k creative AR studio in 2026</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">Learn how to kickstart your journey into AR studio ownership with our comprehensive guide.</p>
            <div className="mt-auto pt-6 flex items-center gap-3">
              <span className="h-9 w-9 rounded-full bg-gradient-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Dhyna Phils</p>
                <p className="text-xs text-muted-foreground">Head of Marketing</p>
              </div>
              <span className="ml-auto rounded-full bg-primary/15 text-primary text-xs font-semibold px-3 py-1">FEATURED</span>
            </div>
          </div>
        </article>

        <div className="mt-5 grid md:grid-cols-3 gap-5">
          {tags.map((t) => (
            <a key={t.title} href="#" className="rounded-3xl border border-border bg-card p-5 flex items-center gap-4 shadow-soft hover:shadow-card transition">
              <span className={`text-[10px] font-bold tracking-wider rounded-md px-2 py-1 ${t.color}`}>{t.label}</span>
              <p className="text-sm font-semibold text-foreground">{t.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
