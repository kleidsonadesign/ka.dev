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
        scrolled ? "backdrop-blur-xl bg-black/60 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <motion.div
        className="absolute left-0 top-0 h-[2px] origin-left bg-gradient-to-r from-white via-[var(--ka-cobalt)] to-white"
        style={{ scaleX: progress, width: "100%" }}
      />

      <div className="ka-container flex items-center justify-between gap-4 px-5 md:px-8 py-4">
        <a href="#topo" className="flex items-center gap-3 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] overflow-hidden group-hover:border-[var(--ka-cobalt)] group-hover:shadow-[0_0_24px_rgba(43,91,255,0.45)] transition-all">
            <img
              src="/images/ka-moon.png"
              alt="Almeida Santos"
              className="h-6 w-6 object-contain"
            />
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight">Almeida Santos</span>
            <span className="ka-eyebrow mt-1 text-[10px]">{t.nav.brandTag}</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-white/60 hover:text-white transition-colors relative after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--ka-cobalt)] after:transition-transform hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="ka-eyebrow rounded-full border border-white/15 px-3 py-2 text-white/70 hover:text-white hover:border-white/35 transition-colors"
            aria-label="Toggle language"
          >
            {language === "pt" ? "EN" : "PT"}
          </button>
          <a
            href="#contato"
            className="hidden md:inline-flex items-center rounded-full bg-[var(--ka-cobalt)] px-4 py-2 text-sm font-semibold text-white hover:brightness-110 hover:shadow-[0_0_28px_rgba(43,91,255,0.45)] transition"
          >
            {t.nav.contact}
          </a>
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/80"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl px-5 py-4 space-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-white/80 hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
