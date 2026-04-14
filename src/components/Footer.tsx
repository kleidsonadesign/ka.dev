import { motion } from "motion/react";
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/kleidsonadesign", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kleidsonalmeida/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:kleidsonalmeida11@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(147, 51, 234, 0.08) 0%, transparent 100%)',
        }}
      />
      
      {/* Top border with glow */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.5), transparent)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="flex flex-col items-center text-center mb-10">
            {/* Logo */}
            <motion.a
              href="#home"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-3xl tracking-wider mb-6"
            >
              <span className="text-white">ka</span>
              <span className="text-primary">.dev</span>
            </motion.a>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 mb-8"
            >
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-interactive"
                    style={{
                      background: 'rgba(147, 51, 234, 0.1)',
                      border: '1px solid rgba(147, 51, 234, 0.2)',
                    }}
                    aria-label={social.label}
                  >
                    <IconComponent size={18} className="text-gray-300 hover:text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Made with love */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 flex items-center gap-2 text-sm"
            >
              Desenvolvido com{" "}
              <Heart className="text-primary" size={16} fill="currentColor" />{" "}
              por <span className="text-primary font-medium">Kleidson Almeida</span>
            </motion.p>
          </div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-primary/10"
          >
            <p className="text-gray-500 text-sm">
              2025 Todos os direitos reservados
            </p>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm cursor-interactive"
            >
              Voltar ao topo
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                style={{
                  background: 'rgba(147, 51, 234, 0.15)',
                  border: '1px solid rgba(147, 51, 234, 0.3)',
                }}
              >
                <ArrowUp size={14} />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
