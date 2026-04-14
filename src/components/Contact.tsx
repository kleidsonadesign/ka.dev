import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageSquare } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus("error");
    }
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
      label: "Localizacao",
      value: "Campina Grande, PB",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/kleidsonadesign/" },
    { icon: Github, label: "GitHub", link: "https://github.com/kleidsonadesign" },
    { icon: MessageSquare, label: "WhatsApp", link: "https://wa.me/5582999450453" },
  ];

  return (
    <section id="contato" className="py-32 relative overflow-hidden">
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
              Contato {">"}_
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
              Vamos <span className="text-primary">Conversar</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <p className="text-gray-400 text-lg leading-relaxed">
                Tem algum projeto em mente? Vamos conversar e transformar suas ideias em realidade.
              </p>

              {/* Contact Items */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl group transition-all"
                    style={{
                      background: 'rgba(147, 51, 234, 0.05)',
                      border: '1px solid rgba(147, 51, 234, 0.15)',
                    }}
                  >
                    <div 
                      className="w-12 h-12 flex items-center justify-center rounded-full transition-colors"
                      style={{
                        background: 'rgba(147, 51, 234, 0.1)',
                      }}
                    >
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{item.label}</p>
                      <p className="text-white group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <p className="text-gray-500 text-sm mb-4 uppercase tracking-wider">Redes Sociais</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="w-12 h-12 flex items-center justify-center rounded-full transition-all"
                      style={{
                        background: 'rgba(147, 51, 234, 0.1)',
                        border: '1px solid rgba(147, 51, 234, 0.2)',
                      }}
                    >
                      <social.icon size={20} className="text-gray-400 hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form 
                action="https://formspree.io/f/mjkalqzo" 
                method="POST" 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Nome</label>
                  <input
                    type="text"
                    name="name" 
                    required
                    className="w-full px-5 py-4 text-white placeholder-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    style={{
                      background: 'rgba(147, 51, 234, 0.05)',
                      border: '1px solid rgba(147, 51, 234, 0.15)',
                    }}
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    name="email" 
                    required
                    className="w-full px-5 py-4 text-white placeholder-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    style={{
                      background: 'rgba(147, 51, 234, 0.05)',
                      border: '1px solid rgba(147, 51, 234, 0.15)',
                    }}
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Mensagem</label>
                  <textarea
                    name="message" 
                    required
                    rows={5}
                    className="w-full px-5 py-4 text-white placeholder-gray-600 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    style={{
                      background: 'rgba(147, 51, 234, 0.05)',
                      border: '1px solid rgba(147, 51, 234, 0.15)',
                    }}
                    placeholder="Descreva seu projeto..."
                  />
                </div>

                {status === "success" && (
                  <p className="text-emerald-400 text-sm">Mensagem enviada com sucesso!</p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm">Erro ao enviar. Tente novamente.</p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-primary text-white rounded-xl flex items-center justify-center gap-3 text-sm uppercase tracking-wider font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  style={{
                    boxShadow: '0 4px 30px rgba(147, 51, 234, 0.3)',
                  }}
                >
                  {status === "submitting" ? "Enviando..." : "Enviar Mensagem"}
                  <Send size={18} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
