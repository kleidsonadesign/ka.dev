import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageSquare } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso! (Demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kleidsonadesign@gmail.com",
      link: "mailto:kleidsonadesign@gmail.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (82) 99945-0453",
      link: "https://api.whatsapp.com/send/?phone=5582999450453",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Campina Grande, PB",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/kleidsonadesign/",
      color: "hover:bg-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/kleidsonadesign",
      color: "hover:bg-gray-700",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      link: "https://wa.me/5582999450453",
      color: "hover:bg-green-600",
    },
  ];

  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Tem algum projeto em mente? Vamos conversar e transformar suas ideias em realidade!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, y: -2 }}
                    className="info-block flex items-center gap-4 cursor-pointer group"
                  >
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 group-hover:bg-primary transition-colors"
                    >
                      <item.icon className="text-primary group-hover:text-white transition-colors icon-glow" size={24} />
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 10,
                      y: -3
                    }}
                    className={`w-14 h-14 flex items-center justify-center rounded-full bg-muted hover:text-white transition-all hover:shadow-[0_6px_16px_rgba(0,0,0,0.3)] ${social.color}`}
                  >
                    <social.icon size={24} className="icon-glow" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="hidden lg:block mt-8 info-block"
              style={{ padding: '2rem', borderRadius: '16px' }}
            >
              <p className="text-gray-200 leading-relaxed">
                "Transformando <span className="text-primary">ideias</span> em <span className="text-primary">código</span>, 
                criando <span className="text-primary">experiências</span> memoráveis através da tecnologia."
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm text-gray-400 mb-2">Nome</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  style={{
                    backgroundColor: '#140C1A',
                    borderRadius: '12px',
                    border: '1px solid rgba(147, 51, 234, 0.25)',
                    boxShadow: '0 0 5px rgba(147, 51, 234, 0.2)'
                  }}
                  placeholder="Seu nome completo"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  style={{
                    backgroundColor: '#140C1A',
                    borderRadius: '12px',
                    border: '1px solid rgba(147, 51, 234, 0.25)',
                    boxShadow: '0 0 5px rgba(147, 51, 234, 0.2)'
                  }}
                  placeholder="seu@email.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm text-gray-400 mb-2">Mensagem</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  style={{
                    backgroundColor: '#140C1A',
                    borderRadius: '12px',
                    border: '1px solid rgba(147, 51, 234, 0.25)',
                    boxShadow: '0 0 5px rgba(147, 51, 234, 0.2)'
                  }}
                  placeholder="Descreva seu projeto ou dúvida..."
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-primary hover:bg-accent text-white rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-[0_12px_24px_rgba(147,51,234,0.4)] flex items-center justify-center gap-2 cursor-interactive"
              >
                Enviar Mensagem
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
