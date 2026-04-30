export function Footer() {
  return (
    <footer className="py-12 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground text-xs font-bold">G</span>
            <span className="font-semibold text-foreground">GrowthTo</span>
          </div>
          <p className="mt-3 text-sm text-foreground/60">
            GrowthTo — growing with your projects.
          </p>
        </div>
        <nav className="flex items-center gap-6 text-sm text-foreground/70">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl px-6 mt-8 text-xs text-foreground/50">
        © {new Date().getFullYear()} GrowthTo. All rights reserved.
      </div>
    </footer>
  );
}
