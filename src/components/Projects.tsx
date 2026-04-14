import { motion } from "motion/react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useState } from "react";
import { projectsData } from "../data/projects";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projetos" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-primary text-sm font-medium">Portfolio</span>
            </motion.div>
            
            <h2 className="text-5xl mb-4">
              Meus <span className="text-primary">Projetos</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
              Confira alguns dos projetos que desenvolvi utilizando as mais modernas tecnologias
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => {
              const isLarge = index === 0;
              const gridClass = isLarge ? "md:col-span-2 md:row-span-2" : "";

              return (
                <motion.div
                  key={project.id}
                  id={project.id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className={`${gridClass} group relative overflow-hidden cursor-interactive rounded-2xl`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 12, 26, 0.8) 0%, rgba(8, 3, 13, 0.9) 100%)',
                    border: '1px solid rgba(147, 51, 234, 0.2)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  {/* Animated border glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, transparent 50%, rgba(168, 85, 247, 0.15) 100%)',
                    }}
                  />

                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${isLarge ? 'h-80' : 'h-56'}`}>
                    <motion.img
                      id={`${project.id}-image`}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredIndex === index ? 1.08 : 1,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                    
                    {/* Gradient overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(8, 3, 13, 0.95) 0%, rgba(8, 3, 13, 0.4) 40%, transparent 100%)',
                      }}
                    />

                    {/* Hover overlay with actions */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center gap-4"
                      style={{
                        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.85) 0%, rgba(168, 85, 247, 0.85) 100%)',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      <motion.a
                        id={`${project.id}-link`}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, y: 20 }}
                        animate={{
                          scale: hoveredIndex === index ? 1 : 0,
                          y: hoveredIndex === index ? 0 : 20,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          delay: 0.1,
                        }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-primary hover:bg-gray-100 transition-colors shadow-lg"
                      >
                        <ExternalLink size={22} />
                      </motion.a>
                      <motion.a
                        id={`${project.id}-github`}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, y: 20 }}
                        animate={{
                          scale: hoveredIndex === index ? 1 : 0,
                          y: hoveredIndex === index ? 0 : 20,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          delay: 0.15,
                        }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-primary hover:bg-gray-100 transition-colors shadow-lg"
                      >
                        <Github size={22} />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 relative z-10 ${isLarge ? 'p-8' : ''}`}>
                    <h3
                      id={`${project.id}-title`}
                      className={`text-white mb-3 group-hover:text-primary transition-colors duration-300 ${isLarge ? 'text-2xl' : 'text-xl'}`}
                    >
                      {project.title}
                    </h3>
                    <p
                      id={`${project.id}-description`}
                      className={`text-gray-400 mb-4 leading-relaxed ${isLarge ? 'text-base' : 'text-sm'}`}
                    >
                      {project.description}
                    </p>
                    <div id={`${project.id}-tags`} className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/40"
                          style={{
                            background: 'rgba(147, 51, 234, 0.1)',
                            border: '1px solid rgba(147, 51, 234, 0.2)',
                            color: 'rgba(168, 85, 247, 1)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom highlight line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-14"
          >
            <motion.a
              href="https://github.com/kleidsonadesign"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-accent text-white rounded-full transition-all cursor-interactive"
              style={{
                boxShadow: '0 4px 20px rgba(147, 51, 234, 0.4), 0 0 40px rgba(147, 51, 234, 0.2)',
              }}
            >
              Ver Mais no GitHub
              <Github size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
