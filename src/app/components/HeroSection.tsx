import { motion } from "motion/react";
import { MapPin, Clock, Github, Linkedin, Youtube, FileText, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import wagooImage from "../../imports/wagoo1.png";
import korvenImage from "../../imports/korven.png";
import inssImage from "../../imports/INSS.svg-1.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function HeroSection() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const techStack = [
    "NODE.JS",
    "REACT.JS",
    "TYPESCRIPT",
    "AWS",
    "DOCKER",
    "POSTGRESQL",
  ];

  const projects = [
    { name: "Wagoo", gradient: "from-white/5 to-white/10", image: wagooImage, url: "https://wagoobot.com/" },
    { name: "Korven Lab", gradient: "from-white/5 to-white/10", image: korvenImage, url: "https://korvenlab.com" },
    { name: "INSS Automation", gradient: "from-white/5 to-white/10", image: inssImage },
  ];

  return (
    <section id="conteudo" className="pt-24 pb-12 md:pb-16 px-4 md:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-grid gap-3 lg:gap-4 max-w-full lg:max-w-[980px] mx-auto"
        style={{
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "auto auto auto",
          gridTemplateAreas: `
            "identidade identidade topo topo topo topo topo topo topo topo topo topo"
            "identidade identidade intro intro intro intro intro intro intro intro intro intro"
            "links links links links links links projetos projetos projetos projetos projetos projetos"
          `,
        }}
      >
        {/* BOX 1: Identidade - KLEIDSON ALMEIDA */}
        <motion.div
          variants={cardVariants}
          whileHover={{ 
            y: -5, 
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
            borderColor: "rgba(255, 255, 255, 0.5)",
            transition: { duration: 0.3 } 
          }}
          style={{ gridArea: "identidade", borderWidth: 1, borderStyle: "solid" }}
          className="bg-[#0A0A0A]/90 backdrop-blur-sm rounded-[24px] px-4 py-6 md:px-5 md:py-4 transition-all flex items-center justify-center border-white/20 order-1 lg:order-none w-full min-h-[140px] lg:min-h-0"
          initial={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <div className="text-center">
            <h1 
              className="font-bold text-white mb-2 text-[24px] text-left" 
              style={{ 
                fontFamily: "'Fredoka One', sans-serif",
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: '0.9',
                textShadow: '0 0 15px rgba(255, 255, 255, 0.1)'
              }}
            >
              KLEIDSON<br />ALMEIDA
            </h1>
            <p 
              className="text-white/50 text-xs md:text-sm font-medium" 
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              @almeida1r.dev
            </p>
          </div>
        </motion.div>

        {/* BOX 2: Info Slim - FullStack/AWS */}
        <motion.div
          variants={cardVariants}
          whileHover={{ 
            y: -5, 
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
            borderColor: "rgba(255, 255, 255, 0.5)",
            transition: { duration: 0.3 } 
          }}
          style={{ gridArea: "topo", borderWidth: 1, borderStyle: "solid" }}
          className="bg-[#0A0A0A]/90 backdrop-blur-sm rounded-[24px] p-4 md:p-5 transition-all border-white/20 order-3 lg:order-none"
          initial={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <div 
            className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-2 text-white/60 text-[11px]" 
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <div className="flex items-center flex-wrap gap-2">
              <span>FullStack Developer</span>
              <span className="text-white/20 hidden md:inline">|</span>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <span>AWS Certified Developer</span>
              <span className="text-white/20 hidden md:inline">|</span>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <span>Unifacisa</span>
              <span className="text-white/20 hidden md:inline">|</span>
            </div>
            <span>Campina Grande, PB</span>
          </div>
        </motion.div>

        {/* BOX 3: Intro - Engenheiro de Software */}
        <motion.div
          variants={cardVariants}
          whileHover={{ 
            y: -5, 
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
            borderColor: "rgba(255, 255, 255, 0.5)",
            transition: { duration: 0.3 } 
          }}
          style={{ gridArea: "intro", borderWidth: 1, borderStyle: "solid" }}
          className="bg-[#0A0A0A]/90 backdrop-blur-sm rounded-[24px] p-4 md:p-5 transition-all border-white/20 order-4 lg:order-none"
          initial={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <h2 
            className="text-base md:text-xl lg:text-2xl text-white mb-2 leading-tight font-bold" 
            style={{ 
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
              letterSpacing: '-0.02em',
              textShadow: '0 0 15px rgba(255, 255, 255, 0.1)'
            }}
          >
            Engenheiro de Software FullStack.<br />
            Estudando IA e Cloud.
          </h2>
          <p 
            className="text-white/60 mb-3 leading-relaxed max-w-3xl text-[11px] md:text-xs" 
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Profissional de tecnologia com 5 anos de experiência. Foco no desenvolvimento de aplicações escaláveis e diferencial competitivo em Cloud Computing, IA e DevOps.
          </p>
          <div className="flex flex-wrap gap-1">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  backgroundColor: "rgba(168, 85, 247, 0.1)",
                  borderColor: "rgba(168, 85, 247, 0.3)"
                }}
                className="px-2 py-0.5 bg-black rounded-full text-[9px] font-medium text-white/70 transition-all cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif", borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* BOX 4: Links/Hora */}
        <motion.div
          variants={cardVariants}
          whileHover={{ 
            y: -5, 
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
            borderColor: "rgba(255, 255, 255, 0.5)",
            transition: { duration: 0.3 } 
          }}
          style={{ gridArea: "links", borderWidth: 1, borderStyle: "solid" }}
          className="bg-[#0A0A0A]/90 backdrop-blur-sm rounded-[24px] p-5 md:p-5 transition-all border-white/20 order-2 lg:order-none w-full"
          initial={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <div className="grid lg:flex lg:flex-col gap-4 lg:gap-3">
            {/* Localização e Hora em Grid 2x1 no mobile */}
            <div className="grid grid-cols-1 gap-2 lg:space-y-1.5 lg:block">
              <div 
                className="flex items-center gap-2 text-white/60 text-[11px] md:text-xs" 
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5 text-white/40 flex-shrink-0" />
                <span>Campina Grande, PB</span>
              </div>
              <div 
                className="flex items-center gap-2 text-white/60 text-[11px] md:text-xs" 
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 text-white/40 flex-shrink-0" />
                <span className="font-mono">{currentTime.toLocaleTimeString("pt-BR")}</span>
              </div>
              <p 
                className="text-white/40 text-[10px] lg:block" 
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                GMT-3
              </p>
            </div>

            {/* Links em Grid 2x2 */}
            <div className="pt-4 lg:pt-3 border-t border-white/5">
              <div className="grid grid-cols-2 gap-2 lg:gap-1.5">
                <motion.a
                  href="https://almeida.korvenlab.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-[11px] md:text-xs"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <FileText className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span>CV</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/kleidsonadesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-[11px] md:text-xs"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Linkedin className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/kleidsonadesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-[11px] md:text-xs"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Github className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="#contato"
                  whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-[11px] md:text-xs"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Youtube className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span>YouTube</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOX 5: Projetos Preview */}
        <motion.div
          variants={cardVariants}
          whileHover={{ 
            y: -5, 
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
            borderColor: "rgba(255, 255, 255, 0.5)",
            transition: { duration: 0.3 } 
          }}
          style={{ gridArea: "projetos", borderWidth: 1, borderStyle: "solid" }}
          className="bg-[#0A0A0A]/90 backdrop-blur-sm rounded-[24px] p-4 md:p-5 transition-all border-white/20 order-5 lg:order-none overflow-hidden"
          initial={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <h3 
            className="text-white mb-3 font-medium text-[11px] md:text-xs" 
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Projetos em Destaque
          </h3>
          
          {/* Fade gradients nas extremidades */}
          <div className="absolute left-0 top-12 bottom-0 w-12 md:w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-12 bottom-0 w-12 md:w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
          
          {/* Carrossel infinito */}
          <div className="relative -mx-4 md:-mx-5">
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-3"
                animate={{
                  x: [0, -(120 * projects.length)],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicar projetos para loop infinito */}
                {[...projects, ...projects, ...projects].map((project, index) => (
                  <motion.div
                    key={`${project.name}-${index}`}
                    className="flex-shrink-0"
                    style={{ width: "100px" }}
                  >
                    {project.url ? (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <motion.div
                          whileHover={{ 
                            scale: 1.05, 
                            y: -5,
                            transition: { duration: 0.2 } 
                          }}
                          className="group cursor-pointer"
                        >
                          <motion.div 
                            className={`h-20 md:h-24 bg-gradient-to-br ${project.gradient} rounded-lg md:rounded-xl flex items-center justify-center transition-all overflow-hidden relative`}
                            style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}
                            whileHover={{
                              borderColor: "rgba(255, 255, 255, 0.5)",
                              boxShadow: "0 4px 20px rgba(255, 255, 255, 0.15)"
                            }}
                          >
                            {project.image ? (
                              <img 
                                src={project.image} 
                                alt={project.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                            )}
                          </motion.div>
                          <p 
                            className="text-[9px] md:text-[10px] text-white/50 mt-1.5 text-center group-hover:text-white/70 transition-colors whitespace-nowrap" 
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {project.name}
                          </p>
                        </motion.div>
                      </a>
                    ) : (
                      <motion.div
                        whileHover={{ 
                          scale: 1.05, 
                          y: -5,
                          transition: { duration: 0.2 } 
                        }}
                        className="group cursor-pointer"
                      >
                        <motion.div 
                          className={`h-20 md:h-24 bg-gradient-to-br ${project.gradient} rounded-lg md:rounded-xl flex items-center justify-center transition-all overflow-hidden relative`}
                          style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}
                          whileHover={{
                            borderColor: "rgba(255, 255, 255, 0.5)",
                            boxShadow: "0 4px 20px rgba(255, 255, 255, 0.15)"
                          }}
                        >
                          {project.image ? (
                            <img 
                              src={project.image} 
                              alt={project.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                          )}
                        </motion.div>
                        <p 
                          className="text-[9px] md:text-[10px] text-white/50 mt-1.5 text-center group-hover:text-white/70 transition-colors whitespace-nowrap" 
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {project.name}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile version - stacked layout */}
      <style>{`
        /* Mobile-first: Complete override below 1024px */
        @media (max-width: 1023px) {
          .hero-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 0.75rem !important;
            grid-template-columns: unset !important;
            grid-template-rows: unset !important;
            grid-template-areas: unset !important;
            max-width: 100% !important;
          }
          
          /* Box 1: Identity - Horizontal Rectangle */
          .hero-grid > div[style*="identidade"] {
            order: 1 !important;
            width: 100% !important;
            height: auto !important;
            min-height: 120px !important;
            aspect-ratio: unset !important;
            padding: 1rem !important;
          }
          
          .hero-grid > div[style*="identidade"] h1 {
            font-size: 1.5rem !important;
            word-break: break-word !important;
            hyphens: auto !important;
          }
          
          /* Box 4: Links/Location - Order 2 */
          .hero-grid > div[style*="links"] {
            order: 2 !important;
            width: 100% !important;
            padding: 1rem !important;
          }
          
          /* Box 2: Info Slim - Order 3 */
          .hero-grid > div[style*="topo"] {
            order: 3 !important;
            width: 100% !important;
            padding: 1rem !important;
          }
          
          /* Box 3: Intro - Order 4 */
          .hero-grid > div[style*="intro"] {
            order: 4 !important;
            width: 100% !important;
            padding: 1rem !important;
          }
          
          /* Box 5: Projects - Order 5 */
          .hero-grid > div[style*="projetos"] {
            order: 5 !important;
            width: 100% !important;
            padding: 1rem !important;
          }
        }
        
        /* Desktop: Restore grid layout at 1024px and above */
        @media (min-width: 1024px) {
          .hero-grid {
            display: grid !important;
          }
        }
        
        /* Extra small screens (320px) - Further optimizations */
        @media (max-width: 374px) {
          .hero-grid > div {
            padding: 0.875rem !important;
          }
          
          .hero-grid > div[style*="identidade"] h1 {
            font-size: 1.375rem !important;
          }
        }
      `}</style>
    </section>
  );
}