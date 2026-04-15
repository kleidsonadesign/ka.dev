import { motion } from "motion/react";
import { GraduationCap, Briefcase } from "lucide-react";
import korvenImage from "../../imports/korven.png";
import wagooImage from "../../imports/wagoo1.png"; // Importação da imagem do Wagoo
import inssImage from "../../imports/INSS.svg-1.png"; // Importação da imagem do INSS
import appenImage from "../../imports/appen.png"
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function TrajectorySection() {
  return (
    <section id="trajetoria" className="py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-[980px] mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8"
          style={{ 
            fontFamily: "'Fraunces', Georgia, serif",
            fontWeight: 700,
            letterSpacing: '-0.02em',
            textShadow: '0 0 15px rgba(255, 255, 255, 0.1)'
          }}
        >
          Trajetória Profissional
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* COLUNA ESQUERDA: FORMAÇÃO ACADÊMICA */}
          <div className="space-y-4">
            {/* Título da Coluna */}
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4 text-white/40" />
              <h3
                className="text-[10px] font-semibold text-white/40 tracking-wider uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Formação Acadêmica
              </h3>
            </div>

            {/* Card Unifacisa */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.5)",
                transition: { duration: 0.3 },
              }}
              className="bg-[#0B0B0B] rounded-3xl p-5 transition-all border-white/20"
              style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <div className="flex items-start gap-3 mb-3">
                {/* Logo Unifacisa */}
                <div
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0"
                  style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}
                >
                  <span
                    className="text-white font-bold text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    UF
                  </span>
                </div>

                {/* Nome e Período */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4
                      className="text-white font-semibold text-base"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Unifacisa
                    </h4>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                      <span
                        className="text-white/40 text-[10px] whitespace-nowrap"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        jan 2023 — abr 2027
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Título do Curso */}
              <h5
                className="text-white/80 text-sm font-medium mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Bacharelado em Sistemas de Informação
              </h5>

              {/* Descrição */}
              <p
                className="text-white/50 text-xs leading-relaxed mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Formação completa em desenvolvimento de software, arquitetura de sistemas, banco de dados e engenharia de software com foco em soluções escaláveis.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {["ARQUITETURA", "ENGENHARIA DE SOFTWARE", "BANCO DE DADOS", "DEVOPS"].map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    }}
                    className="px-2.5 py-1 bg-black rounded-full text-[9px] text-white/70 cursor-pointer transition-all font-medium"
                    style={{
                      borderWidth: 1,
                      borderColor: "rgba(255, 255, 255, 0.05)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* COLUNA DIREITA: EXPERIÊNCIA PROFISSIONAL */}
          <div className="space-y-4">
            {/* Título da Coluna */}
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4 text-white/40" />
              <h3
                className="text-[10px] font-semibold text-white/40 tracking-wider uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Experiência Profissional
              </h3>
            </div>

            {/* Card Korven Lab */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.5)",
                transition: { duration: 0.3 },
              }}
              className="bg-[#0B0B0B] rounded-3xl p-5 transition-all border-white/20"
              style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <div className="flex items-start gap-3 mb-3">
                {/* Logo Korven Lab */}
                <div
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0"
                  style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}
                >
                  <img
                    src={korvenImage}
                    alt="Korven Lab"
                    className="w-6 h-6"
                  />
                </div>

                {/* Nome e Período */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4
                        className="text-white font-semibold text-base"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Korven Lab
                      </h4>
                      <p
                        className="text-white/60 text-xs"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Engenheiro de Software / Fundador
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                      <span
                        className="text-white/40 text-[10px] whitespace-nowrap"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        dez 2023 — presente
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Descrição */}
              <p
                className="text-white/50 text-xs leading-relaxed mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Liderança técnica no desenvolvimento de produtos digitais (SaaS). Desenvolvimento de backends robustos em Node.js/TypeScript com Docker. Gerenciamento de infraestrutura AWS (EC2, S3, Lambda) para escalabilidade e alta disponibilidade.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {["NODE.JS", "AWS", "DOCKER", "TYPESCRIPT"].map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    }}
                    className="px-2.5 py-1 bg-black rounded-full text-[9px] text-white/70 cursor-pointer transition-all font-medium"
                    style={{
                      borderWidth: 1,
                      borderColor: "rgba(255, 255, 255, 0.05)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Card INSS */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.5)",
                transition: { duration: 0.3 },
              }}
              className="bg-[#0B0B0B] rounded-3xl p-5 transition-all border-white/20"
              style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <div className="flex items-start gap-3 mb-3">
                {/* Logo INSS */}
                <div
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0"
                  style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}
                >
                  {/* Substituição do texto pelo logo */}
                  <img
                    src={inssImage}
                    alt="INSS"
                    className="w-8 h-8 object-contain" // Ajuste de tamanho e proporção
                  />
                </div>

                {/* Nome e Período */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4
                        className="text-white font-semibold text-base"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        INSS
                      </h4>
                      <p
                        className="text-white/60 text-xs"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Analista de Suporte e Infraestrutura
                      </p>
                    </div>
                    <span
                      className="text-white/40 text-[10px] whitespace-nowrap flex-shrink-0"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      jan 2025 — presente
                    </span>
                  </div>
                </div>
              </div>

              {/* Descrição */}
              <p
                className="text-white/50 text-xs leading-relaxed mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Atuação estratégica na sustentação de ambientes críticos com mentalidade DevOps. Desenvolvimento de scripts de automação (Python/Shell Script) para monitoramento de servidores, reduzindo tempo de resposta a incidentes.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {["DEVOPS", "PYTHON", "SHELL SCRIPT", "AUTOMAÇÃO"].map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    }}
                    className="px-2.5 py-1 bg-black rounded-full text-[9px] text-white/70 cursor-pointer transition-all font-medium"
                    style={{
                      borderWidth: 1,
                      borderColor: "rgba(255, 255, 255, 0.05)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Card Appen */}
             <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.5)",
                transition: { duration: 0.3 },
              }}
              className="bg-[#0B0B0B] rounded-3xl p-5 transition-all border-white/20"
              style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <div className="flex items-start gap-3 mb-3">
                {/* Logo INSS */}
                <div
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0"
                  style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}
                >
                  {/* Substituição do texto pelo logo */}
                  <img
                    src={appenImage}
                    alt="INSS"
                    className="w-8 h-8 object-contain" // Ajuste de tamanho e proporção
                  />
                </div>

                {/* Nome e Período */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4
                        className="text-white font-semibold text-base"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Appen
                      </h4>
                      <p
                        className="text-white/60 text-xs"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Analista de QA
                      </p>
                    </div>
                    <span
                      className="text-white/40 text-[10px] whitespace-nowrap flex-shrink-0"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      2024
                    </span>
                  </div>
                </div>
              </div>

              {/* Descrição */}
              <p
                className="text-white/50 text-xs leading-relaxed mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Criação e execução de planos de testes automatizados (Selenium) e manuais. Investigação detalhada de bugs e validação de correções antes do deploy, garantindo qualidade do software.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {["SELENIUM", "QA", "TESTES", "AUTOMAÇÃO"].map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    }}
                    className="px-2.5 py-1 bg-black rounded-full text-[9px] text-white/70 cursor-pointer transition-all font-medium"
                    style={{
                      borderWidth: 1,
                      borderColor: "rgba(255, 255, 255, 0.05)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}