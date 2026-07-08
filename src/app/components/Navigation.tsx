import { motion } from "motion/react";
import { Globe, Menu, X, Moon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "../../i18n/LanguageContext";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "conteudo", label: t.nav.content },
    { id: "trajetoria", label: t.nav.trajectory },
    { id: "certificacoes", label: t.nav.certifications },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="bg-black/60 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-3 shadow-xl" style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center cursor-pointer"
          >
            <Moon className="w-3 h-3 text-white" />
          </motion.div>

          <div className="flex items-center gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/70 hover:text-white transition-colors text-[11px] font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="w-px h-3 bg-white/10" />

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
            className="flex items-center gap-1 bg-white/5 px-1.5 py-0.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Globe className="w-2.5 h-2.5 text-white/60" />
            <span className="text-white/60 text-[9px] font-medium uppercase">{t.nav.language}</span>
          </button>

          <div className="w-px h-3 bg-white/10" />

          <motion.button
            onClick={() => scrollToSection("contato")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white hover:bg-white/90 text-black px-3 py-1 rounded-full transition-all shadow-lg shadow-white/20 hover:shadow-white/30 text-[11px] font-medium"
          >
            {t.nav.contact}
          </motion.button>
        </div>
      </motion.nav>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden bg-black/80 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-[940px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-white font-bold text-xs">K</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
              className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-white/60" />
              <span className="text-white/60 text-[10px] font-medium uppercase">{t.nav.language}</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors active:scale-95"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white/70" />
              ) : (
                <Menu className="w-5 h-5 text-white/70" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-black/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-2 max-w-[940px] mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-white/70 hover:text-white py-2.5 px-4 rounded-lg hover:bg-white/5 transition-colors text-sm"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contato")}
                className="block w-full bg-[#A855F7] hover:bg-[#9333EA] text-white py-2.5 px-4 rounded-lg transition-all text-sm shadow-lg shadow-purple-500/30 mt-2"
              >
                {t.nav.contact}
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
