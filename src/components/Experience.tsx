import { motion } from "motion/react";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

interface TimelineItem {
  type: "work" | "education";
  icon: React.ElementType;
  title: string;
  company: string;
  period: string;
  description: string;
  location?: string;
  current?: boolean;
}

export function Experience() {
  const timeline: TimelineItem[] = [
    {
      type: "work",
      icon: Briefcase,
      title: "Estagiario de TI",
      company: "INSS (Instituto Nacional do Seguro Social)",
      period: "Nov. 2025 - Atualmente",
      description: "Suporte a sistemas e infraestrutura de TI, atendimento ao usuario e manutencao de equipamentos",
      location: "Campina Grande, PB",
      current: true,
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Quality Assurance",
      company: "Appen",
      period: "2024",
      description: "Quality Assurance em projetos de tecnologia, garantindo qualidade e padronizacao",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Sistemas de Informacao",
      company: "Unifacisa",
      period: "Jan. 2023 - Jun. 2027",
      description: "Bacharelado em andamento com foco em desenvolvimento de software e IA",
      location: "Campina Grande, PB",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Suporte de TI",
      company: "Colegio Sagrada Familia",
      period: "2020",
      description: "Suporte tecnico e manutencao de sistemas e equipamentos de informatica",
    },
  ];

  return (
    <section id="experiencia" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-accent/6 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4">
              Experiencia <span className="text-primary">Profissional</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Minha trajetoria profissional e academica em tecnologia
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
              <div 
                className="h-full w-full"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.5) 10%, rgba(168, 85, 247, 0.5) 90%, transparent)',
                }}
              />
            </div>

            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className={`relative mb-12 md:mb-16 ${
                    isEven ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15 + 0.2,
                      type: "spring",
                      stiffness: 300,
                    }}
                    className={`absolute left-0 md:left-1/2 w-12 h-12 md:-translate-x-1/2 flex items-center justify-center z-10`}
                  >
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        item.current 
                          ? 'bg-primary shadow-lg shadow-primary/50' 
                          : 'bg-primary/20 border-2 border-primary/50'
                      }`}
                      style={{
                        boxShadow: item.current 
                          ? '0 0 20px rgba(147, 51, 234, 0.6), 0 0 40px rgba(147, 51, 234, 0.3)' 
                          : undefined,
                      }}
                    >
                      <IconComponent 
                        size={20} 
                        className={item.current ? 'text-white' : 'text-primary'}
                      />
                    </div>
                    
                    {/* Pulse animation for current */}
                    {item.current && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary"
                        animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`ml-20 md:ml-0 ${isEven ? 'md:mr-10' : 'md:ml-10'} cursor-interactive`}
                  >
                    <div
                      className="p-6 rounded-2xl transition-all duration-300 group"
                      style={{
                        background: 'linear-gradient(135deg, rgba(20, 12, 26, 0.8) 0%, rgba(8, 3, 13, 0.9) 100%)',
                        border: item.current 
                          ? '1px solid rgba(147, 51, 234, 0.4)' 
                          : '1px solid rgba(147, 51, 234, 0.15)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      {/* Current badge */}
                      {item.current && (
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 mb-3 ${isEven ? 'md:float-right md:ml-3' : ''}`}>
                          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                          <span className="text-primary text-xs font-medium">Atual</span>
                        </div>
                      )}

                      <h3 className="text-xl text-white mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-primary font-medium mb-3">
                        {item.company}
                      </p>

                      <div className={`flex flex-wrap gap-3 mb-3 text-sm text-gray-400 ${isEven ? 'md:justify-end' : ''}`}>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-primary/70" />
                          {item.period}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-primary/70" />
                            {item.location}
                          </span>
                        )}
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Type indicator */}
                      <div className={`mt-4 pt-4 border-t border-primary/10 ${isEven ? 'md:text-right' : ''}`}>
                        <span 
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs ${
                            item.type === 'work' 
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                              : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          }`}
                        >
                          {item.type === 'work' ? 'Trabalho' : 'Educacao'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
