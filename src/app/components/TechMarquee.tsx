import { motion } from "motion/react";
import {
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiDocker,
  SiPostgresql,
  SiPython,
  SiFigma,
  SiTailwindcss,
} from "react-icons/si";
import { Cloud, Coffee } from "lucide-react";

const technologies = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: SiDocker },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: Coffee },
  { name: "Figma", icon: SiFigma },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

export function TechMarquee() {
  // Duplicar o array para criar loop infinito sem quebras
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="py-8 md:py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-[980px] mx-auto">
        <div
          className="relative bg-[#0A0A0A]/90 backdrop-blur-sm rounded-full py-6 overflow-hidden border-white/20"
          style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.2)" }}
        >
          {/* Fade gradients nas extremidades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>

          {/* Carrossel infinito */}
          <div className="flex">
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={{
                x: [0, -50 * technologies.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTechs.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    className="flex items-center gap-3 group cursor-pointer flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-8 h-8 text-white/40 group-hover:text-white transition-all duration-300" />
                    <span
                      className="text-white/40 group-hover:text-white text-sm font-medium transition-all duration-300 whitespace-nowrap"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}