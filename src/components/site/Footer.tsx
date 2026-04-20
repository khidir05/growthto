import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center font-bold text-primary-foreground">G</span>
              <span className="font-semibold">Grow To</span>
            </div>
            <p className="mt-4 text-sm text-dark-foreground/60 max-w-sm">
              A future-focused software house crafting immersive AR and scalable digital products.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-full border border-white/10 grid place-items-center hover:bg-white/10 transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-dark-foreground/70">
              <li><a href="#services" className="hover:text-primary-glow transition">Services</a></li>
              <li><a href="#work" className="hover:text-primary-glow transition">Work</a></li>
              <li><a href="#process" className="hover:text-primary-glow transition">Process</a></li>
              <li><a href="#contact" className="hover:text-primary-glow transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-dark-foreground/70">
              <li>hello@growto.com</li>
              <li>+1 (555) 010 4242</li>
              <li>Remote · Worldwide</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap gap-3 items-center justify-between text-xs text-dark-foreground/50">
          <p>© {new Date().getFullYear()} Grow To. All rights reserved.</p>
          <p>Crafted with care · AR & Software</p>
        </div>
      </div>
    </footer>
  );
}
