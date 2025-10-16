import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Certificados", href: "#certificados" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Contato", href: "#contato" },
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-4 pt-4 pb-3">
        {/* Container Flex para Centralizar Header */}
        <div className="flex items-center justify-center gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.2,
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="inline-block text-3xl tracking-wider"
            >
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-white"
              >
                ka
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-primary"
              >
                .dev
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Floating Menu - Glassmorphism */}
          <nav 
            className="max-w-4xl px-8 py-4" 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(255, 255, 255, 0.1)'
            }}
          >
          <div className="flex items-center justify-between">
            {/* Desktop Menu - Center */}
            <div className="hidden md:flex items-center gap-8 mx-auto">
              {menuItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`text-sm transition-all duration-300 relative group px-3 py-2 ${
                      isActive 
                        ? '' 
                        : ''
                    }`}
                    style={{ 
                      color: isActive ? '#9333EA' : 'rgba(255, 255, 255, 0.85)',
                      fontWeight: isActive ? '600' : '500'
                    }}
                  >
                    {/* Background glow on hover */}
                    <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 rounded-lg transition-all duration-300 blur-sm"></span>
                    
                    {/* Text */}
                    <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.6)] group-hover:text-white transition-colors duration-300">
                      {item.label}
                    </span>
                    
                    {/* Animated underline - sempre visível no ativo */}
                    <motion.span 
                      className="absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                      initial={{ width: 0, x: "-50%" }}
                      animate={{ 
                        width: isActive ? "80%" : 0,
                        x: "-50%"
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        boxShadow: isActive ? '0 0 8px rgba(147, 51, 234, 0.8), 0 0 16px rgba(168, 85, 247, 0.5)' : 'none'
                      }}
                    ></motion.span>
                    
                    {/* Hover underline */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(147,51,234,0.5)]"></span>
                  </motion.a>
                );
              })}
              <motion.a
                href="#contato"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-accent text-white transition-all relative overflow-hidden group"
                style={{
                  paddingLeft: '2rem',
                  paddingRight: '2rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 20px rgba(147, 51, 234, 0.5), 0 0 30px rgba(147, 51, 234, 0.3)',
                  fontWeight: '600'
                }}
              >
                {/* Shine effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                
                {/* Glow effect */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_25px_rgba(147,51,234,0.7),0_0_50px_rgba(168,85,247,0.5)]"></span>
                
                <span className="relative z-10">Contato</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 mx-auto"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-primary/20 pt-4"
            >
              {menuItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 transition-colors text-center`}
                    style={{ 
                      color: isActive ? '#9333EA' : 'rgba(255, 255, 255, 0.85)',
                      fontWeight: isActive ? '600' : '500'
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-4 bg-primary hover:bg-accent text-white text-center transition-colors"
                style={{
                  paddingLeft: '2rem',
                  paddingRight: '2rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 20px rgba(147, 51, 234, 0.5), 0 0 30px rgba(147, 51, 234, 0.3)',
                  fontWeight: '600'
                }}
              >
                Contatar
              </a>
            </motion.div>
          )}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
