import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  type: "work" | "education";
  icon: React.ElementType;
  title: string;
  company: string;
  period: string;
  location?: string;
}

export function Experience() {
  const timeline: TimelineItem[] = [
    {
      type: "work",
      icon: Briefcase,
      title: "Estagiário de TI",
      company: "INSS",
      period: "Nov. 2025 - Atualmente",
      location: "Campina Grande, PB",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Quality Assurance",
      company: "Appen",
      period: "2024",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Sistemas de Informação",
      company: "Unifacisa",
      period: "Jan. 2023 - Jun. 2027",
      location: "Campina Grande, PB",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Suporte de TI",
      company: "Colégio Sagrada Família",
      period: "2020",
    },
  ];

  return (
    <section id="experiencia" className="py-20">
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
            Trajetória <span className="text-gray-500">{">"}_</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {timeline.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-4 rounded-lg border border-gray-800 hover:border-gray-700 transition-all group"
              >
                <div className="pt-1">
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(147, 51, 234, 0.2)',
                      border: '1px solid rgba(147, 51, 234, 0.3)',
                    }}
                  >
                    <IconComponent size={16} className="text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0 group-hover:translate-x-1 transition-transform">
                  <h3 className="text-white font-medium text-sm">{item.title}</h3>
                  <p className="text-primary text-xs mt-0.5">{item.company}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-xs mt-2">
                    <span>{item.period}</span>
                    {item.location && (
                      <>
                        <span>•</span>
                        <span>{item.location}</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
