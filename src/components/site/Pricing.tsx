import { Check } from "lucide-react";
import { useState } from "react";

const tiers = [
  { name: "Grow To Basic", price: "Free", desc: "For solo use with light needs.", cta: "Try Grow To free", featured: false, features: ["Unlimited projects", "Unlimited clients", "Time tracking", "CRM", "iOS & Android app"] },
  { name: "Grow To Premium", price: "$189", suffix: "/mo", desc: "For pro use with light needs.", cta: "Get started", featured: true, badge: "Save 20%", features: ["Everything in Basic", "AR scene builder", "Dedicated workspace", "Priority support", "Scheduling"] },
  { name: "Grow To Enterprise", price: "Flexible", desc: "For team use with light needs.", cta: "Contact sales", featured: false, features: ["Everything in Premium", "Custom data import", "Advanced onboarding", "Hubspot integration", "Timesheets"] },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-x-0 -top-40 h-80 bg-gradient-to-b from-[oklch(0.92_0.04_240)] to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Pricing</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Simple plans <br /> for serious work
          </h2>
        </div>

        <div className="mt-10 mx-auto max-w-7xl grid md:grid-cols-3 gap-5 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-7 flex flex-col ${t.featured ? "border-2 border-primary bg-card shadow-card md:-translate-y-3" : "border border-border bg-card shadow-soft"}`}
            >
              {t.featured && (
                <div className="absolute top-5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-[oklch(0.85_0.05_240)] p-1 text-xs">
                  <button onClick={() => setAnnual(true)} className={`px-3 py-1 rounded-full ${annual ? "bg-white text-foreground" : "text-foreground/70"}`}>Annually</button>
                  <button onClick={() => setAnnual(false)} className={`px-3 py-1 rounded-full ${!annual ? "bg-white text-foreground" : "text-foreground/70"}`}>Monthly</button>
                </div>
              )}
              <div className={t.featured ? "mt-12" : ""}>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                {t.badge && <span className="ml-2 text-[10px] font-semibold rounded-full bg-primary/15 text-primary px-2 py-0.5">{t.badge}</span>}
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{t.price}</span>
                  {t.suffix && <span className="text-sm text-muted-foreground">{t.suffix}</span>}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 block text-center rounded-full px-5 py-2.5 text-sm font-medium transition ${t.featured ? "bg-foreground text-background hover:opacity-90" : "bg-secondary text-foreground hover:bg-secondary/80"}`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
