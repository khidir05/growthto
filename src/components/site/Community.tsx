import { Twitter, Youtube } from "lucide-react";

const cards = [
  { icon: Twitter, name: "X / Twitter", followers: "15.2K FOLLOWERS", body: "Stay updated on new features and discover how others are using Grow To.", cta: "Follow us" },
  { icon: Youtube, name: "YouTube", followers: "32K SUBSCRIBERS", body: "Tips, tutorials and in-depth feature guides to inspire and enhance your Grow To workflow.", cta: "Subscribe" },
];

export function Community() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Community</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground">Stay in the loop</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-5 text-left">
          {cards.map((c) => (
            <div key={c.name} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <div className="flex items-start justify-between">
                <span className="h-11 w-11 rounded-xl bg-foreground grid place-items-center"><c.icon className="h-5 w-5 text-background" /></span>
                <span className="text-xs text-muted-foreground">{c.followers}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              <a href="#" className="mt-6 inline-flex items-center rounded-full bg-secondary text-foreground px-4 py-2 text-sm hover:bg-secondary/80 transition">{c.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
