import { Palette, Plug, Users, Globe, Eye } from "lucide-react";

const cards = [
  {
    title: "Smart, flexible, and built around your workflow",
    body: "Personalize every detail. From branding and interface to colors and motion — Grow To feels like an extension of your brand.",
    visual: (
      <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
        <div className="flex items-center gap-2">
          {["#1E293B","#A78BFA","#F59E0B","#F97316","#10B981","#3B82F6","#14B8A6"].map((c) => (
            <span key={c} className="h-7 w-7 rounded-full border border-border" style={{ background: c }} />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-xl bg-secondary p-3">
          <span className="inline-flex items-center gap-2 text-xs text-foreground"><span className="h-4 w-7 rounded-full bg-primary relative"><span className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white"/></span>Hide branding</span>
          <span className="text-xs text-muted-foreground">Theme</span>
        </div>
      </div>
    ),
    icon: Palette,
  },
  {
    title: "Integrates seamlessly with the tools you already use",
    body: "Plug Grow To into your favorite tools. Sync data, automate flows, and make systems work smarter together.",
    visual: (
      <div className="grid grid-cols-4 gap-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-card border border-border grid place-items-center shadow-soft">
            <span className="h-6 w-6 rounded-md bg-gradient-primary" />
          </div>
        ))}
      </div>
    ),
    icon: Plug,
  },
];

const small = [
  { icon: Users, title: "Collaborate in realtime", body: "Keep every conversation in sync — comments, messages, and project chats stay on the same page." },
  { icon: Globe, title: "Speaks your language", body: "Set your language, currency, time and date — for an experience that feels truly local." },
  { icon: Eye, title: "View things your way", body: "Toggle between Kanban, cards, list, table, timeline and calendar layouts." },
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Features</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Built for teams, <br /> powered by simplicity
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {cards.map((c) => (
            <div key={c.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-card transition">
              <h3 className="text-lg font-semibold text-foreground max-w-sm">{c.title}</h3>
              <div className="mt-6">{c.visual}</div>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid md:grid-cols-3 gap-5">
          {small.map((s) => (
            <div key={s.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-card transition">
              <div className="h-9 w-9 rounded-full bg-secondary grid place-items-center">
                <s.icon className="h-4 w-4 text-foreground" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
