import { Rocket, ShieldCheck, Users, HeartHandshake } from "lucide-react";

const items = [
  { icon: Rocket, title: "Innovative & Future-Ready", desc: "Cutting-edge AR and software stacks built for what's next." },
  { icon: ShieldCheck, title: "Scalable & Reliable", desc: "Architectures that grow with your users — from MVP to enterprise." },
  { icon: Users, title: "Experienced Team", desc: "Senior engineers and designers shipping production software daily." },
  { icon: HeartHandshake, title: "Client-Focused", desc: "Transparent partnerships, clear timelines, measurable outcomes." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 bg-gradient-dark text-dark-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.2em] text-primary-glow font-semibold">Why Choose Us</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              A partner built for <span className="text-gradient-primary">growth</span>.
            </h2>
            <p className="mt-5 text-base text-dark-foreground/70 leading-relaxed">
              We blend creative thinking with deep engineering to deliver products that perform — and scale beautifully.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {items.map((i) => (
              <div key={i.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/[0.08] transition">
                <div className="h-10 w-10 rounded-lg bg-primary/20 grid place-items-center">
                  <i.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <h3 className="mt-4 font-semibold">{i.title}</h3>
                <p className="mt-1.5 text-sm text-dark-foreground/70">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
