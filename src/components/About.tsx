import { motion } from "motion/react";

export function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif text-white mb-2">
            Sobre <span className="text-gray-500">{">"}_</span>
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Atuo como <span className="text-white">desenvolvedor de software</span> fullstack, com maior afinidade em <span className="text-primary">frontend</span> e <span className="text-primary">IA</span>.
            </p>
            <p>
              Tenho conhecimento sólido em tecnologias modernas para criação de interfaces, sempre buscando aliar <span className="text-white">usabilidade</span>, <span className="text-white">performance</span> e boas práticas de desenvolvimento.
            </p>
            <p>
              Atualmente cursando <span className="text-primary">Sistemas de Informação</span> na Unifacisa, com previsão de conclusão em 2027.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
