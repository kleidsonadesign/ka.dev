import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "../../i18n/LanguageContext";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="topo"
      className="relative z-10 min-h-[100svh] flex flex-col justify-end overflow-hidden"
    >
      {/* Full-bleed visual plane */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/projects/wagoobot/web.png?v=prints"
          alt=""
          className="h-full w-full object-cover object-top opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/75 to-[#030303]/35" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(43,91,255,0.35), transparent 55%)",
          }}
        />
        <div className="ka-hero-scanlines absolute inset-0 pointer-events-none" />
      </div>

      <div className="ka-container w-full px-5 md:px-8 pt-28 pb-10 md:pb-14 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6 md:mb-8"
        >
          <span className="ka-cobalt-banner">{t.hero.eyebrow}</span>
        </motion.div>

        <motion.h1
          className="ka-brand-mega text-white"
          initial={{ opacity: 0, y: 48, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          ALMEIDA
        </motion.h1>

        <motion.p
          className="ka-display text-[clamp(1.4rem,3.5vw,2.4rem)] text-white/55 italic mt-2 mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          {t.hero.headline}{" "}
          <span className="text-white/90 not-italic">{t.hero.headlineAccent}</span>
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="max-w-xl text-sm md:text-base text-white/55 leading-relaxed">
            {t.hero.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#trabalho"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
              data-cursor="hover"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 group-hover:border-[var(--ka-cobalt)] group-hover:bg-[var(--ka-cobalt)] transition-colors">
                <ArrowDown size={18} />
              </span>
              <span className="border-b border-white/20 group-hover:border-white pb-0.5 transition-colors">
                {t.hero.cta}
              </span>
            </a>
            <a
              href="/resume/kleidson-almeida-santos-resume.pdf"
              download="Kleidson Almeida Santos - Resume.pdf"
              className="ka-eyebrow text-[10px] text-white/40 hover:text-white transition-colors"
            >
              {t.hero.secondaryCta} ↗
            </a>
          </div>
        </motion.div>

        <motion.p
          className="mt-10 ka-eyebrow text-[10px] text-white/35"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {t.hero.location} · {t.hero.timezone}
        </motion.p>
      </div>
    </section>
  );
}
