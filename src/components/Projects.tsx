import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { projectsData } from "../data/projects";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projetos" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
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
              Projetos {">"}_
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
              Trabalhos <span className="text-primary">Recentes</span>
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative overflow-hidden rounded-2xl"
                style={{
                  background: 'rgba(20, 12, 26, 0.6)',
                  border: '1px solid rgba(147, 51, 234, 0.15)',
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(8, 3, 13, 1) 0%, rgba(8, 3, 13, 0.3) 50%, transparent 100%)',
                    }}
                  />
                  
                  {/* Hover Actions */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center gap-4"
                    style={{
                      background: 'rgba(147, 51, 234, 0.9)',
                    }}
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                      transition={{ delay: 0.1, type: "spring" }}
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-primary"
                    >
                      <ExternalLink size={22} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                      transition={{ delay: 0.15, type: "spring" }}
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-primary"
                    >
                      <Github size={22} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight 
                      size={20} 
                      className="text-gray-500 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full"
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
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-16"
          >
            <motion.a
              href="https://github.com/kleidsonadesign"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, x: 5 }}
              className="inline-flex items-center gap-3 text-primary hover:text-white transition-colors text-lg"
            >
              <span>Ver mais no GitHub</span>
              <span className="text-2xl">{">"}_</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
