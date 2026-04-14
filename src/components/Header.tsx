import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Mantive os teus itens originais aqui
  const menuItems = [
    { label: "Projetos", href: "#projetos" },
    { label: "Certificados", href: "#certificados" },
    { label: "Experiência", href: "#experiencia" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      {/* O "Container" principal com a estética da imagem */}
      <nav className="flex items-center justify-between w-full max-w-5xl h-14 px-5 bg-[#0A0A0A] border border-white/10 rounded-full shadow-xl">
        
        {/* Logo Estilizado */}
        <div className="flex items-center">
          <a href="#home" className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-black font-bold text-lg italic hover:scale-105 transition-transform">
            K
          </a>
        </div>

        {/* Menu Desktop: Mantendo teus links e animações de underline */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className="relative px-2 py-1 text-sm font-medium transition-colors duration-300"
                style={{ color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)' }}
              >
                {item.label}
                {/* Underline animado que você já tinha */}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-white rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Lado Direito: Botão de Contato Estilo Imagem */}
        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="flex items-center gap-2 pl-5 pr-1.5 py-1 bg-[#F5F5F3] hover:bg-white text-black rounded-full font-semibold transition-all group"
          >
            <span className="text-xs uppercase tracking-wider">Contatar</span>
            <div className="p-1 bg-[#1A1A1A] text-white rounded-full transition-transform group-hover:rotate-12">
              <ChevronDown size={14} />
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-1"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Simples e Sólido */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 md:hidden flex flex-col items-center gap-4"
          >
            {menuItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-white py-2"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
