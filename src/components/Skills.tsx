import { motion } from "motion/react";

export function Skills() {
  // Ícones de tecnologia para o marquee (duplicados para loop contínuo)
  const technologies = [
    "React", "TypeScript", "JavaScript", "Python", "Node.js", 
    "Django", "Next.js", "Tailwind", "Figma", "Git",
    "MongoDB", "MySQL", "C++", "HTML5", "CSS3"
  ];

  // Duplicar o array para criar loop infinito suave
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="relative overflow-hidden py-0 my-20" id="skills">
      {/* Container de largura total com fundo roxo profundo */}
      <div 
        className="relative w-screen left-1/2 right-1/2 -mx-[50vw]" 
        style={{ 
          background: '#1A0033',
          boxShadow: `
            inset 0 0 100px rgba(147, 51, 234, 0.15),
            inset 0 0 60px rgba(147, 51, 234, 0.1),
            0 -20px 60px rgba(147, 51, 234, 0.3),
            0 -10px 30px rgba(147, 51, 234, 0.2),
            0 20px 60px rgba(147, 51, 234, 0.3),
            0 10px 30px rgba(147, 51, 234, 0.2)
          `
        }}
      >
        {/* Conteúdo principal */}
        <div className="py-16 px-4 relative z-10">
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: '#ffffff',
              letterSpacing: '0.02em',
              lineHeight: '1.2'
            }}
          >
            &lt;Onde o código encontra a estética /&gt;
          </motion.h2>

          {/* Container do Marquee com overflow controlado */}
          <div className="relative">
            <div className="marquee-container overflow-hidden">
              <motion.div
                className="marquee-content flex gap-8 items-center"
                animate={{
                  x: [0, -50 * technologies.length],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedTechs.map((tech, index) => (
                  <div
                    key={`${tech}-${index}`}
                    className="tech-pill flex-shrink-0 px-8 py-4 rounded-xl transition-all duration-300"
                    style={{
                      minWidth: 'fit-content'
                    }}
                  >
                    <span 
                      className="whitespace-nowrap"
                      style={{ 
                        fontSize: '1.25rem',
                        color: '#ffffff',
                        fontWeight: '500',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {tech}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradientes laterais para fade effect */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-20"
              style={{
                background: 'linear-gradient(to right, #000000 0%, transparent 100%)'
              }}
            />
            <div 
              className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-20"
              style={{
                background: 'linear-gradient(to left, #000000 0%, transparent 100%)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
