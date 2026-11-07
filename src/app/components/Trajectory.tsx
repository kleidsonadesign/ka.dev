import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useMemo, useRef, useState } from "react";
import { useTranslation } from "../../i18n/LanguageContext";
import type { SceneId } from "../lib/scenes";
import type { EducationItem, ExperienceItem } from "../../i18n/translations";

type PathStop = {
  id: string;
  sceneId: SceneId;
  kind: "education" | "experience";
  mark: string;
  title: string;
  subtitle: string;
  period: string;
  year: string;
  description: string;
  tags: string[];
  active?: boolean;
  accent: string;
  logo?: string;
};

const ACCENTS: Record<string, string> = {
  unifacisa: "rgba(43,91,255,0.4)",
  korven: "rgba(43,91,255,0.55)",
  inss: "rgba(46,160,120,0.38)",
  appen: "rgba(90,140,180,0.38)",
  freelance: "rgba(232,168,74,0.34)",
};

const SCENE_BY_ID: Record<string, SceneId> = {
  unifacisa: "path-edu",
  korven: "path-korven",
  inss: "path-inss",
  appen: "path-appen",
  freelance: "path-freelance",
};

function extractYear(period: string) {
  const years = period.match(/20\d{2}/g);
  return years?.[0] ?? period.slice(0, 4);
}

function PathChapter({
  stop,
  index,
  total,
  nowLabel,
  activeLabel,
  flip,
}: {
  stop: PathStop;
  index: number;
  total: number;
  nowLabel: string;
  activeLabel: string;
  flip: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [72, 0, 0, -56]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.75, 1], [0, 1, 1, 0.35]);
  const watermarkX = useTransform(
    scrollYProgress,
    [0, 1],
    flip ? ["8%", "-6%"] : ["-8%", "6%"],
  );
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [0, 0.12, 0.1, 0]);
  const panelScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.94, 1, 1, 0.96]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.15, 0.85, 0.75, 0.2]);
  const lineProgress = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);

  return (
    <article
      ref={ref}
      data-scene={stop.sceneId}
      className="ka-path-chapter relative min-h-[100svh] flex items-center py-[clamp(4rem,10vh,7rem)]"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-[12%] select-none overflow-hidden"
        style={{
          x: watermarkX,
          opacity: watermarkOpacity,
          [flip ? "right" : "left"]: "2%",
        }}
      >
        <p className="ka-display text-[clamp(7rem,22vw,18rem)] leading-[0.8] text-white whitespace-nowrap">
          {stop.year}
        </p>
      </motion.div>

      <div className="ka-container relative w-full">
        <motion.div
          className={`ka-path-stage relative overflow-hidden ${flip ? "ka-path-stage--flip" : ""}`}
          style={{
            scale: panelScale,
            background: `radial-gradient(ellipse at ${flip ? "12%" : "88%"} 0%, ${stop.accent}, transparent 52%), linear-gradient(165deg, rgba(8,10,16,0.72), rgba(4,4,4,0.35))`,
          }}
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-8 blur-3xl"
            style={{
              opacity: glowOpacity,
              background: `radial-gradient(circle at ${flip ? "20%" : "80%"} 30%, ${stop.accent}, transparent 55%)`,
            }}
          />

          <div
            className={`relative grid gap-10 lg:gap-16 items-center lg:grid-cols-[1.05fr_0.95fr] ${
              flip ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <motion.div style={{ y: titleY, opacity: titleOpacity }}>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="ka-eyebrow text-[var(--ka-cobalt)]">
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <span className="h-px w-10 bg-white/25" />
                <span className="ka-eyebrow text-white/45">{stop.mark}</span>
                {stop.active && (
                  <span
                    className={`ka-eyebrow text-[10px] rounded-full px-2.5 py-1 border ${
                      stop.kind === "education"
                        ? "text-[var(--ka-cobalt)] border-[var(--ka-cobalt)]/40"
                        : "text-emerald-300/90 border-emerald-400/30"
                    }`}
                  >
                    {stop.kind === "education" ? nowLabel : activeLabel}
                  </span>
                )}
              </div>

              <p className="ka-eyebrow text-white/35 mb-3 tracking-[0.22em]">{stop.period}</p>

              <h3 className="ka-display text-[clamp(2.8rem,7vw,5.6rem)] leading-[0.92] text-white mb-4">
                {stop.title}
              </h3>

              <p className="text-white/70 text-lg md:text-xl mb-6 max-w-xl">{stop.subtitle}</p>

              <p className="text-white/55 leading-relaxed text-base md:text-lg max-w-xl mb-8">
                {stop.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {stop.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 bg-black/30 px-3 py-1.5 text-xs tracking-wide text-white/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="relative min-h-[240px] md:min-h-[320px] flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-10">
                {stop.logo ? (
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04]">
                    <span className="ka-display text-xl text-white/80">{stop.logo}</span>
                  </div>
                ) : (
                  <div
                    className="h-16 w-16 rounded-2xl border border-white/12"
                    style={{
                      background: `linear-gradient(145deg, ${stop.accent}, transparent)`,
                    }}
                  />
                )}
                <div>
                  <p className="ka-eyebrow text-white/35 mb-1">
                    {stop.kind === "education" ? "Formation" : "Experience"}
                  </p>
                  <p className="text-white/80 text-sm md:text-base max-w-[14rem] leading-snug">
                    {stop.mark}
                  </p>
                </div>
              </div>

              <div>
                <div className="ka-path-meter mb-3">
                  <motion.div
                    className="ka-path-meter-fill"
                    style={{ scaleX: lineProgress, transformOrigin: flip ? "right" : "left" }}
                  />
                </div>
                <p className="ka-eyebrow text-white/35">
                  {String(index + 1).padStart(2, "0")} · {stop.year}
                </p>
              </div>

              <motion.p
                aria-hidden
                className="pointer-events-none absolute -bottom-4 -right-2 ka-display text-[clamp(4rem,10vw,8rem)] leading-none text-white/[0.06] select-none"
                style={{ opacity: titleOpacity }}
              >
                {stop.title.slice(0, 3).toUpperCase()}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

function PathSpine({
  stops,
  progress,
  activeIndex,
}: {
  stops: PathStop[];
  progress: MotionValue<number>;
  activeIndex: number;
}) {
  const fill = useSpring(progress, { stiffness: 90, damping: 28, mass: 0.4 });
  const height = useTransform(fill, [0, 1], ["0%", "100%"]);

  return (
    <aside className="ka-path-spine pointer-events-none" aria-hidden>
      <div className="ka-path-spine-inner">
        <div className="ka-path-spine-track">
          <motion.div className="ka-path-spine-fill" style={{ height }} />
        </div>
        <ul className="ka-path-spine-list">
          {stops.map((stop, index) => {
            const active = index === activeIndex;
            return (
              <li
                key={stop.id}
                className={`ka-path-spine-item ${active ? "is-active" : ""}`}
              >
                <span className="ka-path-spine-dot" />
                <span className="ka-path-spine-label">{stop.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export function Trajectory() {
  const { t, language } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const nowLabel = language === "pt" ? "AGORA" : "NOW";
  const activeLabel = language === "pt" ? "ATIVO" : "ACTIVE";

  const stops = useMemo<PathStop[]>(() => {
    const edu = t.trajectory.education.map((item: EducationItem) => ({
      id: item.id,
      sceneId: SCENE_BY_ID[item.id] ?? ("trajetoria" as SceneId),
      kind: "education" as const,
      mark: t.trajectory.educationTitle,
      title: item.institution,
      subtitle: item.degree,
      period: item.period,
      year: extractYear(item.period),
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
        year: extractYear(item.period),
        description: item.description,
        tags: item.tags,
        active: item.active,
        accent: ACCENTS[item.id] ?? ACCENTS.freelance,
        logo: item.logoText,
      }),
    );

    return [...edu, ...jobs];
  }, [t]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(
      stops.length - 1,
      Math.max(0, Math.round(value * (stops.length - 1))),
    );
    setActiveIndex(next);
  });

  return (
    <section id="trajetoria" ref={sectionRef} className="ka-path relative">
      <div className="ka-container pt-[clamp(4.5rem,10vw,7.5rem)] pb-6 md:pb-10">
        <motion.div
          data-scene="trajetoria"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="ka-eyebrow mb-4 text-[var(--ka-cobalt)]">{t.trajectory.eyebrow}</p>
          <h2 className="ka-display text-[clamp(2.4rem,5.5vw,4.2rem)] text-white mb-4">
            {t.trajectory.title}
          </h2>
          <p className="text-white/55 text-base md:text-lg leading-relaxed">
            {language === "pt"
              ? "Um corredor vertical de etapas — formação e produção, cada uma com peso próprio."
              : "A vertical corridor of stages — education and production, each with its own weight."}
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <PathSpine stops={stops} progress={scrollYProgress} activeIndex={activeIndex} />

        <div className="ka-path-chapters">
          {stops.map((stop, index) => (
            <PathChapter
              key={stop.id}
              stop={stop}
              index={index}
              total={stops.length}
              nowLabel={nowLabel}
              activeLabel={activeLabel}
              flip={index % 2 === 1}
            />
          ))}
        </div>
      </div>

      <div className="ka-container pb-[clamp(3rem,8vw,5rem)]" />
    </section>
  );
}
