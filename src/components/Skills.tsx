import { motion } from "motion/react";

export function Skills() {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", 
    "Python", "Django", "PostgreSQL", "MongoDB", 
    "Docker", "AWS", "Git", "Figma"
  ];

  return (
    <section id="skills" className="py-20">
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
            Skills <span className="text-gray-500">{">"}_</span>
          </h2>
        </motion.div>

        {/* Skills Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -2, scale: 1.05 }}
              className="px-4 py-2.5 rounded-lg text-sm font-medium border transition-all duration-300 cursor-default"
              style={{
                background: 'rgba(147, 51, 234, 0.1)',
                borderColor: 'rgba(147, 51, 234, 0.3)',
                color: '#A855F7',
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
