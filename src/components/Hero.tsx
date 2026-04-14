import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Github, Mail, FileDown, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);
  
  const rotatingSkills = [
    "UI/UX Design",
    "Desenvolvimento de Sistemas",
    "Inteligencia Artificial",
    "Web Design"
  ];
  
  useEffect(() => {
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % rotatingSkills.length);
    }, 3000);
    
    return () => clearInterval(skillInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Name Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <span 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm tracking-wider"
                style={{
                  background: 'rgba(147, 51, 234, 0.1)',
                  border: '1px solid rgba(147, 51, 234, 0.3)',
                  color: 'rgba(168, 85, 247, 1)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Disponivel para projetos
              </span>
            </motion.div>

            {/* Big Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6"
            >
              <h1 
                className="font-bold tracking-tight leading-none"
                style={{ fontSize: 'clamp(3rem, 12vw, 8rem)' }}
              >
                <span className="text-white">KLEIDSON</span>
              </h1>
              <h1 
                className="font-bold tracking-tight leading-none"
                style={{ fontSize: 'clamp(3rem, 12vw, 8rem)' }}
              >
                <span className="text-primary">ALMEIDA</span>
              </h1>
            </motion.div>

            {/* Role Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8"
            >
              <p 
                className="text-gray-400 tracking-widest uppercase"
                style={{ fontSize: '1.125rem', letterSpacing: '0.25em' }}
              >
                FULLSTACK DEVELOPER & UI/UX
              </p>
            </motion.div>

            {/* Rotating Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="h-10 mb-12 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSkill}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-300 text-lg"
                >
                  {rotatingSkills[currentSkill]} <span className="text-primary">{">"}_</span>
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-8 mb-12"
            >
              {[
                { value: "5+", label: "Anos de Experiencia" },
                { value: "EN/PT", label: "Ingles & Portugues" },
                { value: "SI", label: "Sistemas de Informacao" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="text-center px-6 py-3"
                  style={{
                    borderLeft: index > 0 ? '1px solid rgba(147, 51, 234, 0.3)' : 'none',
                  }}
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <motion.a
                href="#projetos"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary text-white rounded-full text-sm uppercase tracking-wider font-medium flex items-center gap-3"
                style={{
                  boxShadow: '0 4px 30px rgba(147, 51, 234, 0.4)',
                }}
              >
                Ver Projetos
                <span className="text-white/80">{">"}_</span>
              </motion.a>
              <motion.a
                href="/CurriculoKleidsonAlmeida.pdf"
                download="CurriculoKleidsonAlmeida.pdf"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-primary/40 text-primary rounded-full flex items-center gap-3 text-sm uppercase tracking-wider font-medium hover:bg-primary/10 transition-colors"
              >
                <FileDown size={18} /> 
                CV <span className="text-primary/60">{">"}_</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex items-center justify-center gap-4"
            >
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/kleidsonadesign/", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/kleidsonadesign", label: "GitHub" },
                { icon: Mail, href: "mailto:kleidsonadesign@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full group transition-all duration-300"
                  style={{
                    background: 'rgba(147, 51, 234, 0.1)',
                    border: '1px solid rgba(147, 51, 234, 0.2)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                >
                  <social.icon size={20} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.a
              href="#sobre"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ArrowDown size={16} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
