import { motion } from "motion/react";
import { Code2, Palette, Brain, Rocket } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Experiência em React, Node.js, Django e Spring Boot",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Interfaces modernas com foco em UX/UI usando Figma",
    },
    {
      icon: Brain,
      title: "IA Generativa",
      description: "Especialização em Inteligência Artificial e prompts",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Foco em usabilidade e boas práticas de desenvolvimento",
    },
  ];

  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Container centralizado com max-width */}
        <div className="max-w-[1000px] mx-auto">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4">
              <span className="text-gray-400">&lt;</span>Sobre <span className="text-primary">Mim</span><span className="text-gray-400">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </motion.div>

          {/* Texto de apresentação centralizado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 space-y-6 max-w-[800px] mx-auto"
          >
            <p className="text-gray-200 leading-relaxed text-lg">
              Atuo como <span className="text-primary">desenvolvedor de software</span> com experiência 
              fullstack, tendo maior afinidade e foco no desenvolvimento <span className="text-primary">frontend</span> e <span className="text-primary">IA</span>.
            </p>
            <p className="text-gray-200 leading-relaxed text-lg">
              Tenho conhecimento sólido em <span className="text-primary">tecnologias modernas</span> para 
              criação de interfaces, sempre buscando aliar <span className="text-primary">usabilidade</span>, 
              performance e boas práticas de desenvolvimento.
            </p>
            <p className="text-gray-200 leading-relaxed text-lg">
              Atualmente cursando <span className="text-primary">Sistemas de Informação</span> na Unifacisa, 
              com previsão de conclusão em 2027.
            </p>
          </motion.div>

          {/* Botão Ver Projetos centralizado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            <motion.a
              href="#projetos"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-accent text-white rounded-full transition-all cursor-interactive"
              style={{
                boxShadow: '0 4px 20px rgba(147, 51, 234, 0.5), 0 0 30px rgba(147, 51, 234, 0.3)'
              }}
            >
              Ver Projetos
              <Rocket size={20} />
            </motion.a>
          </motion.div>

          {/* Grid 2x2 dos blocos de habilidades centralizado */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 0.4 + index * 0.1,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="info-block cursor-interactive group"
                  style={{ padding: '2rem' }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.4 + index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="flex items-center justify-center mb-4"
                  >
                    <IconComponent 
                      size={48}
                      className="text-primary group-hover:text-accent transition-all duration-300"
                      style={{ 
                        filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.5))',
                        strokeWidth: 2
                      }}
                    />
                  </motion.div>
                  <h3 className="text-xl mb-2 text-white text-center">{item.title}</h3>
                  <p className="text-gray-400 text-sm text-center leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
