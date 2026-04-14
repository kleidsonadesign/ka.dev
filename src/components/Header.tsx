import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, RotateCcw } from "lucide-react";
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

  return (
    // O segredo está aqui: h-auto e flex justify-center
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4"
    >
      {/* Container com largura máxima definida para alinhar com o conteúdo. 
        Note o bg-[#111111] bem escuro e borda sutil.
      */}
      <nav className="flex items-center justify-between w-full max-w-[1200px] h-[60px] px-4 bg-[#111111] border border-white/5 rounded-full shadow-2xl">
        
        {/* Esquerda: Logo (K) */}
        <div className="flex items-center gap-6">
          <a href="#home" className="flex items-center justify-center w-9 h-9 bg-white rounded-full text-black font-bold text-lg italic transition-transform hover:scale-110">
            K
          </a>

          {/* Links de Navegação - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Direita: Utils e Botão */}
        <div className="flex items-center gap-3">
          
          {/* Versão e Ícones (Desktop) */}
          <div className="hidden md:flex items-center gap-3 mr-2">
             <div className="flex items-center gap-1.5 px-2.5 py-1 border border-white/10 rounded-full text-[11px] text-gray-500">
                <RotateCcw size={12} />
                <span>V1</span>
             </div>
             {/* Bandeira/Idioma fictício */}
             <div className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer">🇺🇸</div>
             <div className="p-1.5 text-gray-500 hover:text-white cursor-pointer transition-colors">
                <Menu size={18} className="rotate-90" /> {/* Ícone simulando o seletor de tema */}
             </div>
          </div>

          {/* Botão Contatar - O destaque da pílula */}
          <a
            href="#contato"
            className="flex items-center gap-3 pl-5 pr-1 bg-[#F5F5F3] hover:bg-white text-black rounded-full h-10 transition-all group"
          >
            <span className="text-[13px] font-bold">Contatar</span>
            <div className="flex items-center justify-center w-8 h-8 bg-[#0F0F0F] text-white rounded-full transition-transform group-hover:translate-y-0.5">
              <ChevronDown size={14} />
            </div>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-[#111111] border border-white/10 rounded-3xl p-6 lg:hidden flex flex-col gap-4 text-center shadow-2xl"
          >
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-gray-400 text-lg">
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
