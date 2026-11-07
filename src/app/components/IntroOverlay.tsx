import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslation } from "../../i18n/LanguageContext";

const INTRO_KEY = "ka-dev-intro-seen";
const INTRO_MS = 3200;

export function IntroOverlay() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem(INTRO_KEY) === "1";
    if (reduced || seen) return;

    setVisible(true);
    const timer = window.setTimeout(() => {
      sessionStorage.setItem(INTRO_KEY, "1");
      setVisible(false);
    }, INTRO_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(INTRO_KEY, "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020206] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="ka-aurora ka-aurora-a opacity-70" />
            <div className="ka-aurora ka-aurora-b opacity-50" />
            <div className="ka-neon-scan" />
          </div>

          <button
            type="button"
            onClick={dismiss}
            className="absolute top-6 right-6 ka-eyebrow text-white/50 hover:text-white transition-colors z-10"
          >
            {t.intro.skip} ↗
          </button>

          <div className="relative text-center px-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center"
            >
              <span className="absolute inset-0 rounded-2xl border border-white/25 bg-white/[0.03]" />
              <span
                className="absolute inset-[-10px] rounded-[22px] border border-[var(--ka-cobalt)]/40"
                style={{ animation: "ka-pulse-ring 1.8s ease-out infinite" }}
              />
              <img
                src="/images/ka-moon.png"
                alt="Almeida Santos"
                className="relative h-10 w-10 object-contain"
                style={{ filter: "drop-shadow(0 0 18px rgba(43,91,255,0.55))" }}
              />
            </motion.div>

            <motion.p
              className="ka-eyebrow mb-6 text-[var(--ka-cobalt)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              {t.intro.loading}
            </motion.p>

            <div className="mx-auto h-[2px] w-52 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full origin-left bg-gradient-to-r from-white via-[var(--ka-cobalt)] to-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: INTRO_MS / 1000, ease: "linear" }}
              />
            </div>

            <motion.p
              className="ka-watermark mt-16 text-[18vw] leading-none absolute left-1/2 -translate-x-1/2 top-[58%] -z-10 opacity-90"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 0.35, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              DEV
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
