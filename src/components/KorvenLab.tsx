import { motion } from "motion/react";
import { Sparkles, Cpu, Lightbulb, ArrowRight, ExternalLink } from "lucide-react";

export function KorvenLab() {
  const services = [
    {
      icon: Cpu,
      title: "Automação com IA",
      description: "Soluções personalizadas de automação utilizando inteligência artificial para otimizar processos",
    },
    {
      icon: Lightbulb,
      title: "Consultoria Tech",
      description: "Análise e implementação de tecnologias modernas para impulsionar seu negócio",
    },
    {
      icon: Sparkles,
      title: "Prompts & Agentes",
      description: "Desenvolvimento de prompts avançados e agentes de IA para tarefas específicas",
    },
  ];

  return (
    <section id="korven-lab" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px]" />
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
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-primary text-sm font-medium">Consultoria & Inovacao</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl mb-4">
              <span className="text-white">Korven</span>{" "}
              <span className="text-primary">Lab</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Fundador da Korven Lab, consultoria especializada em soluções tecnologicas 
              e inteligencia artificial para empresas que buscam inovacao.
            </p>
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-50" />
            
            <div 
              className="relative rounded-2xl p-8 md:p-12"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 12, 26, 0.9) 0%, rgba(8, 3, 13, 0.95) 100%)',
                border: '1px solid rgba(147, 51, 234, 0.25)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Services Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="group p-6 rounded-xl cursor-interactive transition-all duration-300"
                      style={{
                        background: 'rgba(147, 51, 234, 0.05)',
                        border: '1px solid rgba(147, 51, 234, 0.15)',
                      }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                      >
                        <IconComponent 
                          size={28} 
                          className="text-primary group-hover:text-accent transition-colors"
                          style={{ filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.4))' }}
                        />
                      </motion.div>
                      <h3 className="text-xl text-white mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-primary/10"
              >
                <p className="text-gray-300 text-center sm:text-left">
                  Interessado em transformar seu negocio com tecnologia?
                </p>
                <motion.a
                  href="#contato"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-accent text-white rounded-full transition-all cursor-interactive group"
                  style={{
                    boxShadow: '0 4px 20px rgba(147, 51, 234, 0.4)',
                  }}
                >
                  Vamos Conversar
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Social proof / Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mt-10 text-center"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <ExternalLink size={16} className="text-primary" />
              <span>Projetos Entregues</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Cpu size={16} className="text-primary" />
              <span>Automacoes Implementadas</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Sparkles size={16} className="text-primary" />
              <span>Solucoes Personalizadas</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
