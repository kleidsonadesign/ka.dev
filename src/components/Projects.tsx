import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { projectsData } from "../data/projects";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projetos" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            Meus <span className="text-primary">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi utilizando as mais modernas tecnologias
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              id={project.id}
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
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  id={`${project.id}-image`}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-primary/90 flex items-center justify-center gap-4"
                >
                  <motion.a
                    id={`${project.id}-link`}
                    href={project.link}
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
                  <motion.a
                    id={`${project.id}-github`}
                    href={project.github}
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ 
                      scale: hoveredIndex === index ? 1 : 0,
                      rotate: hoveredIndex === index ? 0 : 180
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: 0.15
                    }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-primary hover:bg-gray-100 transition-colors cursor-interactive"
                  >
                    <Github size={20} className="icon-glow" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  id={`${project.id}-title`}
                  className="text-2xl mb-3 text-white group-hover:text-primary transition-colors"
                >
                  {project.title}
                </h3>
                <p 
                  id={`${project.id}-description`}
                  className="text-gray-300 text-sm mb-4 leading-relaxed"
                >
                  {project.description}
                </p>
                <div 
                  id={`${project.id}-tags`}
                  className="flex flex-wrap gap-2"
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/kleidsonadesign"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-accent text-white rounded-full transition-colors shadow-lg shadow-primary/20"
          >
            Ver Mais no GitHub
            <Github size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
