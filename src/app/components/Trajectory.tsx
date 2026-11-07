import { motion, useScroll, useTransform } from "motion/react";
import { useCallback, useMemo, useRef } from "react";
import { useTranslation } from "../../i18n/LanguageContext";
import { useDesktopJourney, usePinnedJourney } from "../hooks/usePinnedJourney";
import type { SceneId } from "../lib/scenes";
import type { EducationItem, ExperienceItem } from "../../i18n/translations";

type PathSlide = {
  id: string;
  sceneId: SceneId;
  kind: "education" | "experience";
  mark: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags: string[];
  active?: boolean;
  accent: string;
  logo?: string;
};

const ACCENTS: Record<string, string> = {
  unifacisa: "rgba(43,91,255,0.35)",
  korven: "rgba(43,91,255,0.48)",
  inss: "rgba(46,160,120,0.32)",
  appen: "rgba(90,140,180,0.32)",
  freelance: "rgba(232,168,74,0.28)",
};

const SCENE_BY_ID: Record<string, SceneId> = {
  unifacisa: "path-edu",
  korven: "path-korven",
  inss: "path-inss",
  appen: "path-appen",
  freelance: "path-freelance",
};

function PathCard({
  slide,
  index,
  total,
  nowLabel,
  activeLabel,
}: {
  slide: PathSlide;
  index: number;
  total: number;
  nowLabel: string;
  activeLabel: string;
}) {
  return (
    <article
      className="ka-work-panel ka-work-slide-panel h-full relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 90% 0%, ${slide.accent}, transparent 48%), linear-gradient(160deg, rgba(10,12,20,0.62), rgba(5,5,5,0.3))`,
      }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 ka-display text-[clamp(5rem,14vw,11rem)] leading-none text-white/[0.04] select-none"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.div>

      <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center h-full">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="ka-eyebrow text-[var(--ka-cobalt)]">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-white/20" />
            <span className="ka-eyebrow text-white/45">{slide.mark}</span>
            {slide.active && (
              <span
                className={`ka-eyebrow text-[10px] rounded-full px-2.5 py-1 border ${
                  slide.kind === "education"
                    ? "text-[var(--ka-cobalt)] border-[var(--ka-cobalt)]/40"
                    : "text-emerald-300/90 border-emerald-400/30"
                }`}
              >
                {slide.kind === "education" ? nowLabel : activeLabel}
              </span>
            )}
          </div>

          <div className="flex items-start gap-4 mb-4">
            {slide.logo && (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04]">
                <span className="ka-display text-lg text-white/80">{slide.logo}</span>
              </div>
            )}
            <div>
              <h3 className="ka-display text-[clamp(2rem,4.4vw,3.4rem)] text-white mb-2">
                {slide.title}
              </h3>
              <p className="text-white/70 text-lg">{slide.subtitle}</p>
            </div>
          </div>

          <p className="ka-eyebrow mb-5 text-[10px] text-white/40">{slide.period}</p>
          <p className="text-white/55 leading-relaxed text-base md:text-lg max-w-xl mb-7">
            {slide.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {slide.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/12 bg-black/30 px-3 py-1.5 text-xs tracking-wide text-white/65"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[220px] rounded-2xl border border-white/10 bg-black/25 p-6 md:p-8 overflow-hidden">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background: `radial-gradient(ellipse at 30% 20%, ${slide.accent}, transparent 55%)`,
            }}
          />
          <div className="relative h-full flex flex-col justify-between gap-8">
            <div>
              <p className="ka-eyebrow text-white/35 mb-3">
                {slide.kind === "education" ? "Formation" : "Experience"}
              </p>
              <p className="ka-display text-[clamp(2.4rem,5vw,4rem)] text-white/90 leading-none">
                {slide.mark}
              </p>
            </div>

            <div className="space-y-3">
              <div className="h-px w-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--ka-cobalt)]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${((index + 1) / total) * 100}%` }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <p className="ka-eyebrow text-white/35">
                Path progress · {index + 1} of {total}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function PathCardMobile({
  slide,
  index,
  nowLabel,
  activeLabel,
}: {
  slide: PathSlide;
  index: number;
  nowLabel: string;
  activeLabel: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [48, -48]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.35, 1, 1, 0.4]);

  return (
    <motion.article
      ref={ref}
      data-scene={slide.sceneId}
      className="ka-work-panel relative overflow-hidden"
      style={{
        y,
        opacity,
        background: `radial-gradient(ellipse at 90% 0%, ${slide.accent}, transparent 48%), linear-gradient(160deg, rgba(10,12,20,0.62), rgba(5,5,5,0.3))`,
      }}
    >
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="ka-eyebrow text-[var(--ka-cobalt)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-8 bg-white/20" />
        <span className="ka-eyebrow text-white/45">{slide.mark}</span>
        {slide.active && (
          <span className="ka-eyebrow text-[10px] text-[var(--ka-cobalt)] border border-[var(--ka-cobalt)]/40 rounded-full px-2.5 py-1">
            {slide.kind === "education" ? nowLabel : activeLabel}
          </span>
        )}
      </div>
      <h3 className="ka-display text-3xl text-white mb-2">{slide.title}</h3>
      <p className="text-white/70 mb-1">{slide.subtitle}</p>
      <p className="ka-eyebrow mb-4 text-[10px]">{slide.period}</p>
      <p className="text-white/55 leading-relaxed mb-5">{slide.description}</p>
      <div className="flex flex-wrap gap-2">
        {slide.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/12 bg-black/30 px-3 py-1.5 text-xs text-white/65"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function Trajectory() {
  const { t, language } = useTranslation();
  const desktopJourney = useDesktopJourney();
  const nowLabel = language === "pt" ? "AGORA" : "NOW";
  const activeLabel = language === "pt" ? "ATIVO" : "ACTIVE";

  const slides = useMemo<PathSlide[]>(() => {
    const edu = t.trajectory.education.map((item: EducationItem) => ({
      id: item.id,
      sceneId: SCENE_BY_ID[item.id] ?? ("trajetoria" as SceneId),
      kind: "education" as const,
      mark: t.trajectory.educationTitle,
      title: item.institution,
      subtitle: item.degree,
      period: item.period,
      description: item.description,
      tags: item.tags,
      active: item.active,
      accent: ACCENTS[item.id] ?? ACCENTS.unifacisa,
      logo: item.logoText,
    }));

    const jobs = [...t.trajectory.corporate, t.trajectory.freelance].map(
      (item: ExperienceItem) => ({
        id: item.id,
        sceneId: SCENE_BY_ID[item.id] ?? ("trajetoria" as SceneId),
        kind: "experience" as const,
        mark: item.role.split("·")[0]?.trim() || item.role,
        title: item.company,
        subtitle: item.role,
        period: item.period,
        description: item.description,
        tags: item.tags,
        active: item.active,
        accent: ACCENTS[item.id] ?? ACCENTS.freelance,
        logo: item.logoText,
      }),
    );

    return [...edu, ...jobs];
  }, [t]);

  const sceneForIndex = useCallback(
    (index: number) => slides[index]?.sceneId,
    [slides],
  );

  const { containerRef, x, activeIndex, slideWidth } = usePinnedJourney({
    enabled: desktopJourney,
    count: slides.length,
    sceneForIndex,
  });

  return (
    <section id="trajetoria" className="relative">
      <div className="ka-container pt-[clamp(4.5rem,10vw,7.5rem)]">
        <motion.div
          data-scene="trajetoria"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mb-10 md:mb-14 max-w-3xl"
        >
          <p className="ka-eyebrow mb-4 text-[var(--ka-cobalt)]">{t.trajectory.eyebrow}</p>
          <h2 className="ka-display text-[clamp(2.4rem,5.5vw,4.2rem)] text-white mb-4">
            {t.trajectory.title}
          </h2>
          <p className="text-white/55 text-base md:text-lg leading-relaxed">
            {language === "pt"
              ? "Formação e experiência em produção — cada etapa com impacto técnico e de negócio."
              : "Education and production experience — each step with technical and business impact."}
          </p>
        </motion.div>
      </div>

      {desktopJourney ? (
        <div
          ref={containerRef}
          className="ka-work-journey relative"
          data-scene-rail=""
          style={{ height: `${slides.length * 100}vh` }}
        >
          <div className="ka-work-pin sticky top-0 h-[100svh] overflow-hidden">
            <motion.div
              className="ka-work-track flex h-full will-change-transform"
              style={{ x, width: slideWidth * slides.length }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className="ka-work-slide relative h-full shrink-0"
                  style={{ width: slideWidth, minWidth: slideWidth }}
                >
                  <div className="ka-container h-full flex items-center py-24">
                    <div className="w-full max-h-[calc(100svh-8rem)] overflow-hidden">
                      <PathCard
                        slide={slide}
                        index={index}
                        total={slides.length}
                        nowLabel={nowLabel}
                        activeLabel={activeLabel}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="pointer-events-none absolute bottom-8 left-0 right-0 z-10">
              <div className="ka-container flex items-center justify-between gap-4">
                <p className="ka-eyebrow text-white/45">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")} · {slides[activeIndex]?.title}
                </p>
                <div className="flex items-center gap-2">
                  {slides.map((slide, index) => (
                    <span
                      key={slide.id}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        index === activeIndex
                          ? "w-10 bg-[var(--ka-cobalt)]"
                          : "w-3 bg-white/25"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="ka-container space-y-8 md:space-y-10 pb-4">
          {slides.map((slide, index) => (
            <PathCardMobile
              key={slide.id}
              slide={slide}
              index={index}
              nowLabel={nowLabel}
              activeLabel={activeLabel}
            />
          ))}
        </div>
      )}

      <div className="ka-container pb-[clamp(3rem,8vw,5rem)]" />
    </section>
  );
}
