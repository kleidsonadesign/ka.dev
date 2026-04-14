import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Skills", href: "#skills" },
    { label: "Experiencia", href: "#experiencia" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["home", "sobre", "projetos", "skills", "experiencia", "contato"];
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8, 3, 13, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(147, 51, 234, 0.1)' : 'none',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-wider"
          >
            <span className="text-white">ka</span>
            <span className="text-primary">.dev</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="relative px-4 py-2 text-sm tracking-wider transition-colors duration-300"
                  style={{ 
                    color: isActive ? '#9333EA' : 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  <span className="flex items-center gap-1">
                    {item.label}
                    <span 
                      className="transition-opacity duration-300"
                      style={{ 
                        opacity: isActive ? 1 : 0,
                        color: '#9333EA'
                      }}
                    >
                      {">"}_
                    </span>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
            
            {/* Contact Button */}
            <motion.a
              href="#contato"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2.5 text-sm tracking-wider rounded-full transition-all duration-300"
              style={{
                background: 'rgba(147, 51, 234, 0.2)',
                border: '1px solid rgba(147, 51, 234, 0.4)',
                color: '#9333EA',
              }}
            >
              Contato
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatedMobileMenu 
        isOpen={isMenuOpen} 
        menuItems={menuItems} 
        activeSection={activeSection}
        onClose={() => setIsMenuOpen(false)}
      />
    </motion.header>
  );
}

function AnimatedMobileMenu({ 
  isOpen, 
  menuItems, 
  activeSection,
  onClose 
}: { 
  isOpen: boolean; 
  menuItems: { label: string; href: string }[];
  activeSection: string;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden border-t border-primary/10"
      style={{
        background: 'rgba(8, 3, 13, 0.95)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div className="container mx-auto px-6 py-6">
        {menuItems.map((item, index) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={onClose}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between py-4 border-b border-primary/10 transition-colors"
              style={{ 
                color: isActive ? '#9333EA' : 'rgba(255, 255, 255, 0.7)',
              }}
            >
              <span className="text-lg">{item.label}</span>
              <span style={{ color: '#9333EA' }}>{">"}_</span>
            </motion.a>
          );
        })}
        <motion.a
          href="#contato"
          onClick={onClose}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="block mt-6 py-4 text-center rounded-full text-lg"
          style={{
            background: 'rgba(147, 51, 234, 0.2)',
            border: '1px solid rgba(147, 51, 234, 0.4)',
            color: '#9333EA',
          }}
        >
          Contato
        </motion.a>
      </div>
    </motion.div>
  );
}
