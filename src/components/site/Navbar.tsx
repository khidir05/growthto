import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets//logo/logo1.png"; // <-- Pastikan path ini sesuai

const links = [
  { href: "#features", label: "Features" },
  { href: "#benefits", label: "Benefits" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact Us" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Update: Efek transparansi modern bergaya glassmorphism */}
      <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${scrolled ? "bg-background/50 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-border/20" : "bg-transparent"} ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-20 flex items-center justify-between">

          <a href="#top" className="flex items-center hover:scale-105 transition-transform duration-300 origin-left">
            {/* Update: h-11/h-12 menyesuaikan tinggi tombol, w-auto menjaga proporsi */}
            <img src={logoImg} alt="GrowthTo Logo" className="h-9 md:h-10 w-auto object-contain drop-shadow-sm" />
          </a>

          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[15px] font-medium text-foreground/80 hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#try"
              className="inline-flex items-center rounded-full bg-foreground text-background px-6 py-3 text-[15px] font-semibold hover:opacity-90 transition shadow-md"
            >
              Try GrowthTo free
            </a>
          </div>

          <button className="lg:hidden p-2 rounded-full hover:bg-black/5" onClick={() => setOpen(true)} aria-label="Open Menu">
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </header>

      {/* Mobile Modal Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/10 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-background/90 backdrop-blur-2xl rounded-[32px] shadow-2xl border border-white/20 flex flex-col p-6 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-8">
              <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                {/* Update: Logo mobile modal */}
                <img src={logoImg} alt="GrowthTo Logo" className="h-8 w-8 object-contain" />
                <p className="font-montserrat text-xl font-bold tracking-tight">
                  <span style={{ color: '#000000' }}>Growth</span>
                  <span style={{ color: '#ba782a' }}>To</span>
                </p>
              </a>
              <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition" aria-label="Close Menu">
                <X className="h-5 w-5 text-foreground" />
              </button>
            </div>

            <nav className="flex flex-col items-center gap-6 py-4 flex-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[17px] font-medium text-foreground/80 hover:text-foreground transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 mt-8">
              <a href="#try" onClick={() => setOpen(false)} className="rounded-full bg-foreground text-background px-6 py-4 text-center text-[17px] font-bold shadow-lg hover:shadow-xl transition">
                Try GrowthTo free
              </a>
              <a href="#features" onClick={() => setOpen(false)} className="rounded-full bg-foreground/5 text-foreground px-6 py-4 text-center text-[17px] font-bold hover:bg-foreground/10 transition">
                See features
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}