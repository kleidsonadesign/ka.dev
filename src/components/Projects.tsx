import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "../data/projects";

export function Projects() {
  return (
    <section id="projetos" className="py-20">
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
            Projetos <span className="text-gray-500">{">"}_</span>
          </h2>
          <p className="text-gray-400">Conheça os projetos que desenvolvi</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projectsData.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%)',
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 md:h-56 bg-gray-900">
                {project.image.startsWith('http') ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center">
                    <p className="text-white text-sm">{project.title}</p>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={20} className="text-gray-500 group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                </div>

                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{
                        background: 'rgba(147, 51, 234, 0.15)',
                        color: '#A855F7',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
