export function CTA() {
  return (
    <section id="contact" className="py-28 border-t border-border/60">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl bg-dark text-dark-foreground p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-base text-dark-foreground/70">
              Let's talk. No pressure.
            </p>
            <a
              href="mailto:hello@growthto.studio"
              className="mt-8 inline-flex items-center rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
