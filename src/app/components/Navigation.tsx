import { motion } from "motion/react";
import { Globe, Menu, X, Moon } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Floating Pill Navigation - Desktop */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="bg-black/60 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-3 shadow-xl" style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center cursor-pointer"
          >
            <Moon className="w-3 h-3 text-white" />
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("conteudo")}
              className="text-white/70 hover:text-white transition-colors text-[11px] font-medium"
            >
              Conteúdo
            </button>
            <button
              onClick={() => scrollToSection("trajetoria")}
              className="text-white/70 hover:text-white transition-colors text-[11px] font-medium"
            >
              Trajetória
            </button>
            <button
              onClick={() => scrollToSection("certificacoes")}
              className="text-white/70 hover:text-white transition-colors text-[11px] font-medium"
            >
              Certificações
            </button>
          </div>

          {/* Divider */}
          <div className="w-px h-3 bg-white/10" />

          {/* Language & Version */}
          <div className="flex items-center gap-2">
            
            <div className="flex items-center gap-1 bg-white/5 px-1.5 py-0.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
              <Globe className="w-2.5 h-2.5 text-white/60" />
              <span className="text-white/60 text-[9px] font-medium">PT</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-3 bg-white/10" />

          {/* Contatar Button - White */}
          <motion.button
            onClick={() => scrollToSection("contato")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white hover:bg-white/90 text-black px-3 py-1 rounded-full transition-all shadow-lg shadow-white/20 hover:shadow-white/30 text-[11px] font-medium"
          >
            Contatar
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden bg-black/80 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-[940px] mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-white font-bold text-xs">K</span>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-black/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-2 max-w-[940px] mx-auto">
              <button
                onClick={() => scrollToSection("conteudo")}
                className="block w-full text-left text-white/70 hover:text-white py-2.5 px-4 rounded-lg hover:bg-white/5 transition-colors text-sm"
              >
                Conteúdo
              </button>
              <button
                onClick={() => scrollToSection("trajetoria")}
                className="block w-full text-left text-white/70 hover:text-white py-2.5 px-4 rounded-lg hover:bg-white/5 transition-colors text-sm"
              >
                Trajetória
              </button>
              <button
                onClick={() => scrollToSection("certificacoes")}
                className="block w-full text-left text-white/70 hover:text-white py-2.5 px-4 rounded-lg hover:bg-white/5 transition-colors text-sm"
              >
                Certificações
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block w-full bg-[#A855F7] hover:bg-[#9333EA] text-white py-2.5 px-4 rounded-lg transition-all text-sm shadow-lg shadow-purple-500/30 mt-2"
              >
                Contatar
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}