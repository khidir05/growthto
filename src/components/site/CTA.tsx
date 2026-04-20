import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-dark text-dark-foreground p-12 md:p-20 text-center shadow-card">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-primary/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Let's build something <span className="text-gradient-primary">great together</span>.
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-dark-foreground/70 text-lg">
              Have a product in mind? We turn ambitious ideas into shippable, scalable software.
            </p>
            <a
              href="mailto:hello@growto.com"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3.5 text-sm font-medium shadow-glow hover:opacity-95 transition"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
