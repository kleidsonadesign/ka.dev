import { motion } from "motion/react";
import { Mail, ArrowRight, Github, Linkedin, Youtube, FileText } from "lucide-react";
import { useState } from "react";

const contactLinks = [
  {
    platform: "LinkedIn",
    username: "linkedin.com/in/kleidsonadesign",
    icon: Linkedin,
    url: "https://linkedin.com/in/kleidsonadesign",
    color: "purple",
  },
  {
    platform: "GitHub",
    username: "github.com/kleidsonadesign",
    icon: Github,
    url: "https://github.com/kleidsonadesign",
    color: "cyan",
  },
  {
    platform: "Portfólio",
    username: "almeida.korvenlab.com",
    icon: Youtube,
    url: "https://almeida.korvenlab.com/",
    color: "purple",
  },
  {
    platform: "Telefone",
    username: "(82) 99945-0453",
    icon: FileText,
    url: "tel:+5582999450453",
    color: "cyan",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ContactSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  return (
    <section id="contato" className="py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-[980px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ 
            fontFamily: "'Fraunces', Georgia, serif",
            fontWeight: 700,
            letterSpacing: '-0.02em',
            textShadow: '0 0 15px rgba(255, 255, 255, 0.1)'
          }}>
            Vamos construir algo juntos?
          </h2>
          <p className="text-white/50 uppercase tracking-wider text-xs font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
            Aberto a projetos freelance e oportunidades
          </p>
        </motion.div>

        {/* Main Email Card - Magnetic Effect */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          animate={{
            x: isHovering ? mousePosition.x * 0.05 : 0,
            y: isHovering ? mousePosition.y * 0.1 : 0,
          }}
          whileHover={{ 
            scale: 1.01,
            boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)",
            borderColor: "rgba(255, 255, 255, 0.5)"
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="group bg-[#0A0A0A]/90 backdrop-blur-sm rounded-3xl p-5 md:p-6 mb-3 md:mb-4 transition-all cursor-pointer text-center border-white/20"
          style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <motion.div
            animate={{ rotate: isHovering ? [0, -10, 10, 0] : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Mail className="w-7 h-7 md:w-8 md:h-8 text-[#A855F7] mx-auto mb-2 md:mb-3" />
          </motion.div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
            <h3 className="text-lg md:text-2xl text-white transition-colors" style={{ 
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
              letterSpacing: '-0.02em',
              textShadow: '0 0 15px rgba(255, 255, 255, 0.1)'
            }}>
              kleidsonadesign@gmail.com
            </h3>
            <motion.div
              animate={{ x: isHovering ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white/30 group-hover:text-white/60 transition-all" />
            </motion.div>
          </div>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  transition: { duration: 0.3 } 
                }}
                className="group bg-[#0A0A0A]/90 backdrop-blur-sm rounded-3xl p-5 transition-all border-white/20"
                style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"
                    style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <Icon className="w-5 h-5 text-white/70" />
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-all" />
                  </motion.div>
                </div>
                <h4 className="text-white mb-1 text-base transition-colors font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {link.platform}
                </h4>
                <p className="text-white/40 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{link.username}</p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 pt-6 border-t border-white/5"
        >
          <p className="text-white/30 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            © 2026 Kleidson Almeida. Feito com React, Tailwind CSS e Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}