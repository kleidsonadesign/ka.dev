import { motion } from "motion/react";
import { Code2, Palette, Brain, Rocket } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Experiencia em React, Node.js, Django e Spring Boot",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Interfaces modernas com foco em UX/UI usando Figma",
    },
    {
      icon: Brain,
      title: "IA Generativa",
      description: "Especializacao em Inteligencia Artificial e prompts",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Foco em usabilidade e boas praticas de desenvolvimento",
    },
  ];

  return (
    <section id="sobre" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span 
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase"
              style={{ color: 'rgba(147, 51, 234, 0.8)' }}
            >
              Sobre {">"}_
            </span>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              >
                <span className="text-white">Desenvolvedor</span>
                <br />
                <span className="text-primary">Full Stack</span>
              </h2>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Atuo como <span className="text-white">desenvolvedor de software</span> com experiencia 
                  fullstack, tendo maior afinidade e foco no desenvolvimento <span className="text-primary">frontend</span> e <span className="text-primary">IA</span>.
                </p>
                <p>
                  Tenho conhecimento solido em <span className="text-white">tecnologias modernas</span> para 
                  criacao de interfaces, sempre buscando aliar usabilidade, 
                  performance e boas praticas de desenvolvimento.
                </p>
                <p>
                  Atualmente cursando <span className="text-primary">Sistemas de Informacao</span> na Unifacisa, 
                  com previsao de conclusao em 2027.
                </p>
              </div>

              <motion.a
                href="#projetos"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 mt-10 text-primary hover:text-white transition-colors"
              >
                <span className="text-lg">Ver Projetos</span>
                <span className="text-2xl">{">"}_</span>
              </motion.a>
            </motion.div>

            {/* Right - Skills Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-6 rounded-2xl group transition-all duration-300"
                    style={{
                      background: 'rgba(147, 51, 234, 0.05)',
                      border: '1px solid rgba(147, 51, 234, 0.15)',
                    }}
                  >
                    <IconComponent 
                      size={32}
                      className="text-primary mb-4 group-hover:scale-110 transition-transform"
                    />
                    <h3 className="text-white font-medium mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
