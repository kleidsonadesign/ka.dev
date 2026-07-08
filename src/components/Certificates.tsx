import { motion } from "motion/react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { useState } from "react";
import { certificatesData } from "../data/certificates";

export function Certificates() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="certificados" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            <span className="text-gray-400">{"<"}</span>Meus <span className="text-primary">Certificados</span><span className="text-gray-400">{"/>"}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Certificações e cursos que contribuíram para meu desenvolvimento profissional
          </p>
        </motion.div>

        {/* Grid de Certificados */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              id={certificate.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
                ease: "easeOut"
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative overflow-hidden transition-all"
              style={{
                backgroundColor: '#140C1A',
                borderRadius: '12px',
                border: '1px solid rgba(147, 51, 234, 0.25)',
                boxShadow: '0 0 5px rgba(147, 51, 234, 0.2)'
              }}
            >
              {/* Imagem */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  id={`${certificate.id}-image`}
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

                {/* Badge de Certificado */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 + 0.3 }}
                  className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm"
                >
                  <Award size={24} className="text-white" />
                </motion.div>

                {/* Overlay com Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-primary/90 flex items-center justify-center"
                >
                  <motion.a
                    id={`${certificate.id}-link`}
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{
                      scale: hoveredIndex === index ? 1 : 0,
                      rotate: hoveredIndex === index ? 0 : -180
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.1
                    }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-primary hover:bg-gray-100 transition-colors cursor-interactive"
                  >
                    <ExternalLink size={20} className="icon-glow" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3
                  id={`${certificate.id}-title`}
                  className="text-xl mb-2 text-white group-hover:text-primary transition-colors"
                >
                  {certificate.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <span
                    id={`${certificate.id}-institution`}
                    className="flex-1"
                  >
                    {certificate.institution}
                  </span>
                  <div className="flex items-center gap-1 text-primary">
                    <Calendar size={14} />
                    <span id={`${certificate.id}-date`}>{certificate.date}</span>
                  </div>
                </div>

                <div
                  id={`${certificate.id}-skills`}
                  className="flex flex-wrap gap-2 mt-4"
                >
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contador de Certificados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full"
            style={{
              backgroundColor: 'rgba(147, 51, 234, 0.1)',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              boxShadow: '0 0 20px rgba(147, 51, 234, 0.2)'
            }}
          >
            <Award size={24} className="text-primary" />
            <span className="text-gray-300">
              <span className="text-primary text-2xl mr-2">{certificatesData.length}</span>
              Certificados Conquistados
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
