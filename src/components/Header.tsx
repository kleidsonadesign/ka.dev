import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Conteúdo", href: "#home" },
    { label: "Projetos", href: "#projetos" },
    { label: "Trajetória", href: "#experience" },
    { label: "Certificações", href: "#certificados" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 py-6"
      style={{ background: 'rgba(8, 3, 13, 0.7)', backdropFilter: 'blur(10px)' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm"
              style={{ background: '#9333EA', border: '2px solid #9333EA' }}
            >
              KC
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden sm:flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <span>V1</span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="hidden sm:block text-gray-300 hover:text-white transition-colors"
            >
              🌙
            </motion.button>

            <motion.a
              href="#contato"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium"
              style={{
                background: 'white',
                color: '#08030D',
                border: '1.5px solid white'
              }}
            >
              Contatar
              <span>↓</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-gray-800"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
