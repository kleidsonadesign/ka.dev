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
  Cpu,
  Globe,
  Terminal,
  Braces
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
  description: string;
  category: "frontend" | "backend" | "tools" | "database";
  size?: "large" | "medium" | "small";
}

export function Skills() {
  const skills: Skill[] = [
    {
      name: "React",
      icon: Code2,
      description: "Biblioteca principal para interfaces modernas e reativas",
      category: "frontend",
      size: "large",
    },
    {
      name: "TypeScript",
      icon: Braces,
      description: "Tipagem estatica para JavaScript escalavel",
      category: "frontend",
      size: "medium",
    },
    {
      name: "Next.js",
      icon: Globe,
      description: "Framework fullstack com SSR e SSG",
      category: "frontend",
      size: "medium",
    },
    {
      name: "Tailwind CSS",
      icon: Palette,
      description: "Estilizacao utility-first para UI moderna",
      category: "frontend",
      size: "small",
    },
    {
      name: "Node.js",
      icon: Server,
      description: "Runtime JavaScript para backend escalavel",
      category: "backend",
      size: "large",
    },
    {
      name: "Python",
      icon: Terminal,
      description: "Automacao, IA e desenvolvimento backend",
      category: "backend",
      size: "medium",
    },
    {
      name: "Django",
      icon: Layers,
      description: "Framework Python robusto para web apps",
      category: "backend",
      size: "small",
    },
    {
      name: "MongoDB",
      icon: Database,
      description: "Banco NoSQL para dados flexiveis",
      category: "database",
      size: "medium",
    },
    {
      name: "MySQL",
      icon: Database,
      description: "Banco relacional para dados estruturados",
      category: "database",
      size: "small",
    },
    {
      name: "Figma",
      icon: Figma,
      description: "Design de interfaces e prototipacao",
      category: "tools",
      size: "medium",
    },
    {
      name: "Git",
      icon: GitBranch,
      description: "Controle de versao e colaboracao",
      category: "tools",
      size: "small",
    },
    {
      name: "C++",
      icon: FileCode,
      description: "Programacao de baixo nivel e algoritmos",
      category: "backend",
      size: "small",
    },
  ];

  const getCategoryColor = (category: Skill["category"]) => {
    const colors = {
      frontend: "from-primary to-accent",
      backend: "from-emerald-500 to-teal-500",
      tools: "from-amber-500 to-orange-500",
      database: "from-blue-500 to-cyan-500",
    };
    return colors[category];
  };

  const getCategoryBorder = (category: Skill["category"]) => {
    const borders = {
      frontend: "rgba(147, 51, 234, 0.3)",
      backend: "rgba(16, 185, 129, 0.3)",
      tools: "rgba(245, 158, 11, 0.3)",
      database: "rgba(59, 130, 246, 0.3)",
    };
    return borders[category];
  };

  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4">
              <span className="text-gray-400">&lt;</span>
              Tech <span className="text-primary">Stack</span>
              <span className="text-gray-400">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Tecnologias que domino para criar solucoes completas e escaláveis
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[120px]">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              const gridClass = 
                skill.size === "large" 
                  ? "col-span-2 row-span-2" 
                  : skill.size === "medium" 
                    ? "col-span-2 row-span-1" 
                    : "col-span-1 row-span-1";

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className={`${gridClass} group relative cursor-interactive rounded-2xl p-5 flex flex-col justify-between overflow-hidden transition-all duration-300`}
                  style={{
                    background: 'rgba(20, 12, 26, 0.6)',
                    border: `1px solid ${getCategoryBorder(skill.category)}`,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Hover glow effect */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(skill.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Corner accent */}
                  <div 
                    className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${getCategoryColor(skill.category)} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity`}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-auto">
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getCategoryColor(skill.category)} bg-opacity-20 flex items-center justify-center`}
                        style={{ 
                          background: `linear-gradient(135deg, ${getCategoryBorder(skill.category)}, transparent)`,
                        }}
                      >
                        <IconComponent 
                          size={skill.size === "large" ? 24 : 20} 
                          className="text-white"
                          style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.3))' }}
                        />
                      </motion.div>
                    </div>

                    <div className="mt-auto">
                      <h3 className={`text-white font-semibold mb-1 ${skill.size === "large" ? "text-xl" : "text-base"}`}>
                        {skill.name}
                      </h3>
                      
                      {/* Description only visible on hover for medium+ cards */}
                      {(skill.size === "large" || skill.size === "medium") && (
                        <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Bottom gradient line */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${getCategoryColor(skill.category)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Category Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {[
              { label: "Frontend", category: "frontend" as const },
              { label: "Backend", category: "backend" as const },
              { label: "Database", category: "database" as const },
              { label: "Tools", category: "tools" as const },
            ].map((item) => (
              <div key={item.category} className="flex items-center gap-2">
                <div 
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${getCategoryColor(item.category)}`}
                />
                <span className="text-gray-400 text-sm">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
