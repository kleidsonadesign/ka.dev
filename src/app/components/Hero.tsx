import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowDownRight, MapPin } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "../../i18n/LanguageContext";
import { BrowserFrame, PhoneFrame } from "./DeviceFrame";

function splitWords(text: string) {
  return text.split(" ");
}

function BrandLetters({ text }: { text: string }) {
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <span className="flex flex-wrap gap-x-[0.28em] gap-y-0" aria-label={text}>
      {words.map((word, wi) => {
        const letters = word.split("").map((char, ci) => {
          const i = charIndex++;
          return (
            <motion.span
              key={`${word}-${ci}`}
              className="inline-block"
              initial={{ opacity: 0, y: "0.55em", rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.28 + i * 0.028,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "50% 100%" }}
            >
              {char}
            </motion.span>
          );
        });
        charIndex += 1; // space between words
        return (
          <span key={`${word}-${wi}`} className="inline-flex whitespace-nowrap">
            {letters}
          </span>
        );
      })}
    </span>
  );
}

export function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const copyY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const stageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const stageScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(my, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(smoothY, [-40, 40], [6, -6]);
  const rotateY = useTransform(smoothX, [-40, 40], [-8, 8]);
  const phoneX = useTransform(smoothX, [-40, 40], [-10, 10]);
  const phoneY = useTransform(smoothY, [-40, 40], [-8, 8]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 80);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 80);
  };

  const headlineWords = splitWords(`${t.hero.headline} ${t.hero.headlineAccent}`);

  return (
    <section
      ref={sectionRef}
      id="topo"
      className="relative z-10 min-h-[100svh] flex items-center pt-24 pb-12 px-5 md:px-8 overflow-hidden"
    >
      <div className="ka-container w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center relative">
        <motion.div style={{ y: copyY }}>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <span className="ka-cobalt-banner inline-flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-black/40 animate-ping opacity-70" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-black/70" />
              </span>
              {t.hero.eyebrow}
            </span>
          </motion.div>

          <h1
            className="ka-display text-[clamp(3rem,9vw,6.6rem)] text-white mb-5 perspective-[800px]"
            style={{ textShadow: "0 0 40px rgba(255,255,255,0.08)" }}
          >
            <BrandLetters text={t.hero.brand} />
          </h1>

          <p className="ka-display text-[clamp(1.55rem,3.8vw,2.7rem)] text-white/90 mb-7 max-w-2xl flex flex-wrap gap-x-2 gap-y-1">
            {headlineWords.map((word, i) => {
              const isAccent = i >= splitWords(t.hero.headline).length;
              return (
                <motion.span
                  key={`${word}-${i}`}
                  className={isAccent ? "italic text-white/50" : ""}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </p>

          <motion.p
            className="max-w-xl text-base md:text-lg text-white/60 leading-relaxed mb-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.75 }}
          >
            {t.hero.summary}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            <a
              href="#trabalho"
              data-cursor="hover"
              data-cursor-label="Scroll"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-sm font-semibold hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-shadow"
            >
              {t.hero.cta}
              <ArrowDownRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="/resume/kleidson-almeida-santos-resume.pdf"
              download="Kleidson Almeida Santos - Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white/80 hover:border-white/50 hover:text-white hover:bg-white/[0.04] transition"
            >
              {t.hero.secondaryCta}
            </a>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-2 text-white/45 text-sm">
              <MapPin size={14} className="text-[var(--ka-cobalt)]" />
              <span>
                {t.hero.location} · {t.hero.timezone}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-white/35">
              <div className="ka-scroll-cue" />
              <span className="ka-eyebrow text-[10px]">Scroll</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          ref={stageRef}
          onMouseMove={onMove}
          onMouseLeave={() => {
            mx.set(0);
            my.set(0);
          }}
          style={{ y: stageY, scale: stageScale }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none perspective-[1200px] pb-10"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          data-cursor="hover"
          data-cursor-label="Drag"
        >
          <motion.div
            aria-hidden
            className="ka-orbit-moon absolute -top-8 -left-6 md:-left-10 z-[3] h-14 w-14 md:h-16 md:w-16"
            animate={{ opacity: [0.25, 1, 0.25] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/images/ka-moon.png"
              alt=""
              className="h-full w-full object-contain drop-shadow-[0_0_24px_rgba(43,91,255,0.65)]"
            />
          </motion.div>

          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <div className="ka-media-reveal">
              <BrowserFrame
                src="/images/projects/wagoobot/web.png?v=prints"
                alt="Wagoo web"
              />
            </div>

            <motion.div
              style={{ x: phoneX, y: phoneY }}
              className="absolute -bottom-6 right-2 md:right-6 z-10 drop-shadow-[0_0_40px_rgba(43,91,255,0.35)]"
            >
              <PhoneFrame
                src="/images/projects/shopwagoo/mobile.png?v=prints"
                alt="Shopwag mobile"
                className="rotate-[-7deg]"
              />
            </motion.div>
          </motion.div>

          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-full opacity-80"
            style={{
              background:
                "radial-gradient(circle, rgba(43,91,255,0.35), transparent 62%)",
              filter: "blur(10px)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
