import { motion } from "motion/react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export function Experience() {
  const timeline = [
    {
      type: "work",
      icon: Briefcase,
      title: "QA",
      company: "Appen",
      period: "2024",
      description: "Quality Assurance em projetos de tecnologia",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Suporte de TI",
      company: "Colégio Sagrada Família",
      period: "2020",
      description: "Suporte técnico e manutenção de sistemas",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Graduação em Sistemas de Informação",
      company: "Unifacisa",
      period: "Jan. 2023 - Jun. 2027",
      description: "Bacharelado em andamento",
    },
  ];

  const courses = [
    { title: "WebDesign", institution: "Microcamp" },
    { title: "IA Generativa", institution: "Nvidia" },
    { title: "Engenharia de Prompt", institution: "Adapta" },
  ];

  return (
    <section id="experiencia" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            Experiência <span className="text-primary">Profissional</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className="relative mb-12 md:ml-20"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.15 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="absolute -left-24 top-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hidden md:flex"
                >
                  <item.icon className="text-white icon-glow" size={24} />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="info-block cursor-interactive duration-300"
                  style={{ padding: '1.75rem' }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl text-white mb-1">{item.title}</h3>
                      <p className="text-primary">{item.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm bg-muted/30 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-primary" size={32} />
              <h3 className="text-3xl">Cursos Complementares</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.15,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="info-block cursor-interactive duration-300"
                  style={{ padding: '1.75rem' }}
                >
                  <h4 className="text-xl text-white mb-2">{course.title}</h4>
                  <p className="text-gray-400 text-sm">{course.institution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
