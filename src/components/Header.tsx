import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Sun, ChevronDown, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { label: "Conteúdo", href: "#conteudo" },
    { label: "Projetos", href: "#projetos" },
    { label: "Trajetória", href: "#trajetoria" },
    { label: "Certificações", href: "#certificados" },
  ];

  // Lógica de Scroll para manter a seção ativa
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
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      {/* Container Principal (Cápsula) */}
      <nav className="flex items-center justify-between w-full max-w-6xl h-16 px-6 bg-[#0F0F0F] border border-white/10 rounded-full shadow-2xl">
        
        {/* Lado Esquerdo: Logo */}
        <div className="flex items-center">
          <a href="#home" className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-black font-bold text-xl italic">
            K
          </a>
        </div>

        {/* Centro: Links de Navegação (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  isActive ? "text-white" : "text-gray-400"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Lado Direito: Utils e Botão */}
        <div className="hidden md:flex items-center gap-4">
          {/* Botão Versão */}
          <button className="flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full text-xs text-gray-400 hover:bg-white/5">
            <RotateCcw size={14} />
            <span>V1</span>
          </button>

          {/* Botão Idioma */}
          <button className="text-gray-400 hover:text-white">
            <Globe size={20} />
          </button>

          {/* Botão Tema */}
          <button className="text-gray-400 hover:text-white">
            <Sun size={20} />
          </button>

          {/* Botão Contatar (Estilo Pílula Creme) */}
          <a
            href="#contato"
            className="flex items-center gap-3 pl-6 pr-2 py-1.5 bg-[#EAE8E4] hover:bg-white text-black rounded-full font-semibold transition-all group"
          >
            <span className="text-sm">Contatar</span>
            <div className="p-1.5 bg-black text-white rounded-full group-hover:scale-110 transition-transform">
              <ChevronDown size={16} />
            </div>
          </a>
        </div>

        {/* Mobile: Botão Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu Mobile (Dropdown) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-[#0F0F0F] border border-white/10 rounded-2xl p-4 md:hidden flex flex-col gap-4"
          >
            {menuItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-white text-center py-2"
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
