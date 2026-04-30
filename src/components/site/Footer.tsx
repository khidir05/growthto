import { Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-border bg-card shadow-soft p-8">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground text-xs font-bold">G</span>
                <span className="font-semibold text-foreground">Grow To</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground max-w-sm">
                Your favourite AR & software studio. Built for early-stage founders and modern teams.
              </p>
              <div className="mt-6 flex gap-3">
                {[Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="h-9 w-9 rounded-full bg-foreground text-background grid place-items-center hover:opacity-80 transition">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider text-foreground">PAGES</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#top" className="hover:text-foreground transition">Home</a></li>
                <li><a href="#features" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition">Pricing</a></li>
                <li><a href="#blog" className="hover:text-foreground transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wider text-foreground">INFORMATION</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#contact" className="hover:text-foreground transition">Contact</a></li>
                <li>Privacy</li>
                <li>Terms of use</li>
                <li>404</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-3 items-center justify-between text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Grow To. Crafted with care.</p>
            <p>Built with Lovable</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
