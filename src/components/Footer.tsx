import { motion } from "motion/react";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-primary/30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
              Desenvolvido com <Heart className="text-primary" size={18} fill="currentColor" /> por
              <span className="text-primary">Kleidson Almeida</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 - Todos os direitos reservados
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-primary hover:bg-accent text-white transition-colors shadow-lg shadow-primary/20"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
