import { motion } from "motion/react";
import { FileDown, ArrowLeft } from "lucide-react";
import { AtmosphericBackground } from "../components/AtmosphericBackground";

const RESUME_FILE = {
  href: "/resume/kleidson-almeida-santos-resume.pdf",
  download: "Kleidson Almeida Santos - Resume.pdf",
  label: "Kleidson Almeida Santos — Resume",
  description: "Full Stack Engineer · Distributed Systems & SaaS Architecture (PDF)",
} as const;

export function ResumePage() {
  return (
    <div className="min-h-screen overflow-x-hidden relative text-[var(--ka-text)]">
      <AtmosphericBackground />

      <main className="relative min-h-screen flex items-center justify-center px-4 py-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-lg"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Portfolio / Portfólio</span>
          </a>

          <div className="rounded-[28px] border border-white/15 bg-[#0A0A0A]/90 backdrop-blur-sm p-8 md:p-10">
            <p className="ka-eyebrow mb-3 text-center">Download / Baixar</p>
            <h1 className="ka-display text-3xl md:text-4xl text-white text-center mb-2">
              Resume / Currículo
            </h1>
            <p className="text-white/50 text-center text-sm mb-8 md:mb-10">
              Versão atualizada com base no CV oficial
              <br />
              Updated resume based on the official CV
            </p>

            <motion.a
              href={RESUME_FILE.href}
              download={RESUME_FILE.download}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="group flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.03] p-4 hover:border-[var(--ka-cobalt)]/50 hover:bg-white/[0.05] transition-all"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-black/40 text-[var(--ka-cobalt)]">
                <FileDown className="w-5 h-5" />
              </span>
              <span className="flex-1">
                <span className="block font-semibold text-white">
                  {RESUME_FILE.label}
                </span>
                <span className="block text-xs text-white/45 mt-0.5">
                  {RESUME_FILE.description}
                </span>
              </span>
            </motion.a>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
