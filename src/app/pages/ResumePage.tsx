import { motion } from "motion/react";
import { FileDown, ArrowLeft } from "lucide-react";
import { SpaceBackground } from "../components/SpaceBackground";

const RESUME_FILES = {
  pt: {
    href: "/resume/kleidson-almeida-curriculo-pt-br.pdf",
    download: "Kleidson Almeida Santos - Curriculo - PT-BR.pdf",
    label: "Português (PT-BR)",
    description: "Currículo em português do Brasil",
  },
  en: {
    href: "/resume/kleidson-almeida-resume-en.pdf",
    download: "Kleidson Almeida Santos - Resume - ENG.pdf",
    label: "English (ENG)",
    description: "Resume in English",
  },
} as const;

export function ResumePage() {
  return (
    <div className="min-h-screen bg-black dark overflow-x-hidden relative">
      <SpaceBackground />

      <div className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" style={{ zIndex: 2 }} />
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" style={{ zIndex: 2 }} />

      <main className="relative min-h-screen flex items-center justify-center px-4 py-16" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-lg"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Portfolio / Portfólio</span>
          </a>

          <div
            className="rounded-3xl border border-white/20 bg-[#0A0A0A]/90 backdrop-blur-sm p-8 md:p-10"
            style={{ boxShadow: "0 0 40px rgba(255, 255, 255, 0.04)" }}
          >
            <p
              className="text-white/40 uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Download / Baixar
            </p>
            <h1
              className="text-3xl md:text-4xl font-bold text-white text-center mb-2"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
              }}
            >
              Resume / Currículo
            </h1>
            <p
              className="text-white/50 text-center text-sm mb-8 md:mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Choose your preferred language version
              <br />
              Escolha a versão no idioma de sua preferência
            </p>

            <div className="flex flex-col gap-4">
              {Object.values(RESUME_FILES).map((file, index) => (
                <motion.a
                  key={file.href}
                  href={file.href}
                  download={file.download}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.45 }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 0 24px rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(255, 255, 255, 0.5)",
                  }}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/[0.03] px-5 py-5 transition-colors hover:bg-white/[0.06]"
                >
                  <div className="text-left">
                    <p className="text-white font-medium text-base md:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {file.label}
                    </p>
                    <p className="text-white/45 text-xs md:text-sm mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {file.description}
                    </p>
                    <p className="text-white/30 text-[10px] md:text-xs mt-2 font-mono">PDF</p>
                  </div>
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/25 transition-colors"
                  >
                    <FileDown className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
