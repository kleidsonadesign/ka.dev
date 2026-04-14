import { motion } from "motion/react";
import { Mail, Send } from "lucide-react";
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
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="py-20">
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
            Contato <span className="text-gray-500">{">"}_</span>
          </h2>
          <p className="text-gray-400">Vamos conversar sobre seu projeto</p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <form 
            action="https://formspree.io/f/mjkalqzo" 
            method="POST" 
            onSubmit={handleSubmit} 
            className="space-y-5"
          >
            <div>
              <label className="block text-gray-400 text-sm mb-2">Nome</label>
              <input
                type="text"
                name="name" 
                required
                className="w-full px-4 py-3 text-white placeholder-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
                className="w-full px-4 py-3 text-white placeholder-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
                rows={4}
                className="w-full px-4 py-3 text-white placeholder-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3.5 bg-white text-black rounded-lg flex items-center justify-center gap-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {status === "submitting" ? "Enviando..." : "Enviar"}
              <Send size={16} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
