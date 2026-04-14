import { motion } from "motion/react";
import { 
  Code2, 
  Palette, 
  Database, 
  Server, 
  Figma, 
  GitBranch,
  FileCode,
  Layers,
  Terminal,
  Braces,
  Globe
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
  category: "frontend" | "backend" | "tools" | "database";
}

export function Skills() {
  const skills: Skill[] = [
    { name: "React", icon: Code2, category: "frontend" },
    { name: "TypeScript", icon: Braces, category: "frontend" },
    { name: "Next.js", icon: Globe, category: "frontend" },
    { name: "Tailwind CSS", icon: Palette, category: "frontend" },
    { name: "Node.js", icon: Server, category: "backend" },
    { name: "Python", icon: Terminal, category: "backend" },
    { name: "Django", icon: Layers, category: "backend" },
    { name: "C++", icon: FileCode, category: "backend" },
    { name: "MongoDB", icon: Database, category: "database" },
    { name: "MySQL", icon: Database, category: "database" },
    { name: "Figma", icon: Figma, category: "tools" },
    { name: "Git", icon: GitBranch, category: "tools" },
  ];

  const categories = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
    { key: "tools", label: "Tools" },
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="skills">
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
              Tech Stack {">"}_
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
              Minhas <span className="text-primary">Tecnologias</span>
            </h2>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {categories.map((category, catIndex) => {
              const categorySkills = skills.filter(s => s.category === category.key);
              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                >
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                    {category.label}
                    <span className="flex-1 h-px bg-primary/20 ml-4" />
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill, index) => {
                      const IconComponent = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                          whileHover={{ y: -3, scale: 1.05 }}
                          className="flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300 group"
                          style={{
                            background: 'rgba(147, 51, 234, 0.08)',
                            border: '1px solid rgba(147, 51, 234, 0.2)',
                          }}
                        >
                          <IconComponent 
                            size={18} 
                            className="text-primary group-hover:scale-110 transition-transform"
                          />
                          <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
