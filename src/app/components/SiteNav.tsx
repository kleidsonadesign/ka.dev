import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "../../i18n/LanguageContext";

export function SiteNav() {
  const { t, toggleLanguage, language } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#trabalho", label: t.nav.work },
    { href: "#github", label: t.nav.stats },
    { href: "#trajetoria", label: t.nav.trajectory },
    { href: "#contato", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-black/70 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <motion.div
        className="absolute left-0 top-0 h-[2px] origin-left bg-[var(--ka-cobalt)]"
        style={{ scaleX: progress, width: "100%" }}
      />

      <div className="ka-container flex items-center justify-between gap-4 px-5 md:px-8 py-4">
        <a href="#topo" className="flex items-center gap-3 group" data-cursor="hover">
          <span className="flex h-8 w-8 items-center justify-center border border-[var(--ka-cobalt)] bg-[var(--ka-cobalt)]/10 overflow-hidden">
            <img src="/images/ka-moon.png" alt="" className="h-5 w-5 object-contain" />
          </span>
          <span
            className="font-mono text-sm tracking-[0.2em] uppercase text-white"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            ALMEIDA
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-xs font-mono tracking-[0.18em] uppercase text-white/45 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="font-mono text-[11px] tracking-[0.2em] uppercase border border-white/20 px-3 py-2 text-white/70 hover:text-white hover:border-white/40 transition-colors"
            aria-label="Toggle language"
          >
            {language === "pt" ? "EN" : "PT"}
          </button>
          <button
            type="button"
            className="lg:hidden inline-flex h-10 items-center gap-2 border border-white/20 px-3 text-white/80 font-mono text-[11px] tracking-[0.2em] uppercase"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl px-5 py-4 space-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-2 py-3 font-mono text-xs tracking-[0.2em] uppercase text-white/70 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
