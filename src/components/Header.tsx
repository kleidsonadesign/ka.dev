import { motion } from "framer-motion";
import { ChevronDown, RotateCcw, Sun } from "lucide-react";

export function Header() {
  const menuItems = [
    { label: "Conteúdo", href: "#conteudo" },
    { label: "Projetos", href: "#projetos" },
    { label: "Trajetória", href: "#trajetoria" },
    { label: "Certificações", href: "#certificacoes" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 px-4">
      {/* Container Principal: Extremamente fino e escuro */}
      <nav className="flex items-center justify-between w-full max-w-[1100px] h-[52px] px-4 bg-[#0F0F0F] border border-white/10 rounded-full">
        
        {/* Esquerda: Logo Circular */}
        <div className="flex items-center">
          <a href="#home" className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-black font-serif italic font-bold text-lg">
            k
          </a>
        </div>

        {/* Centro: Links com fonte bem pequena e cinza */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] text-gray-400 hover:text-white transition-colors font-light tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Direita: Ícones de utilidades e Botão */}
        <div className="flex items-center gap-4">
          
          {/* Badge V1 */}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-full border border-white/5 bg-white/5 text-[10px] text-gray-500">
            <RotateCcw size={10} />
            <span>V1</span>
          </div>

          {/* Bandeira (Emoji ou Imagem pequena) */}
          <span className="text-lg grayscale hover:grayscale-0 cursor-pointer transition-all">🇺🇸</span>

          {/* Ícone Sol */}
          <button className="text-gray-500 hover:text-white transition-colors">
            <Sun size={18} strokeWidth={1.5} />
          </button>

          {/* Botão Contatar: O formato exato da imagem */}
          <a
            href="#contato"
            className="flex items-center gap-3 pl-5 pr-1 py-1 bg-[#F1F1EF] hover:bg-white text-black rounded-full transition-all group"
          >
            <span className="text-[13px] font-medium">Contatar</span>
            <div className="flex items-center justify-center w-8 h-8 bg-[#121212] text-white rounded-full">
              <ChevronDown size={14} />
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
