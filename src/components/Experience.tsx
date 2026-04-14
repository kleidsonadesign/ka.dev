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
      company: "INSS",
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
    <section id="experiencia" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
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
              Experiencia {">"}_
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
              Minha <span className="text-primary">Trajetoria</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div 
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.4) 10%, rgba(147, 51, 234, 0.4) 90%, transparent)',
              }}
            />

            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative pl-16 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div 
                    className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      item.current 
                        ? 'bg-primary' 
                        : 'bg-primary/20 border border-primary/40'
                    }`}
                    style={{
                      boxShadow: item.current ? '0 0 20px rgba(147, 51, 234, 0.5)' : undefined,
                    }}
                  >
                    <IconComponent 
                      size={18} 
                      className={item.current ? 'text-white' : 'text-primary'}
                    />
                    {item.current && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary"
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    {/* Current badge */}
                    {item.current && (
                      <span 
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs mb-3"
                        style={{
                          background: 'rgba(147, 51, 234, 0.15)',
                          border: '1px solid rgba(147, 51, 234, 0.3)',
                          color: '#9333EA',
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Atual
                      </span>
                    )}

                    <h3 className="text-xl text-white font-medium group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-primary text-sm mt-1 mb-3">
                      {item.company}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {item.location}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Type tag */}
                    <span 
                      className={`inline-block mt-4 px-3 py-1 rounded-full text-xs ${
                        item.type === 'work' 
                          ? 'text-emerald-400' 
                          : 'text-blue-400'
                      }`}
                      style={{
                        background: item.type === 'work' 
                          ? 'rgba(16, 185, 129, 0.1)' 
                          : 'rgba(59, 130, 246, 0.1)',
                        border: item.type === 'work'
                          ? '1px solid rgba(16, 185, 129, 0.2)'
                          : '1px solid rgba(59, 130, 246, 0.2)',
                      }}
                    >
                      {item.type === 'work' ? 'Trabalho' : 'Educacao'}
                    </span>
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
