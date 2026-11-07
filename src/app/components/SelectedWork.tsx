import { motion, useMotionValue } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "../../i18n/LanguageContext";
import { useScene } from "../lib/SceneContext";
import { type SceneId } from "../lib/scenes";
import type { WorkCase } from "../../i18n/translations";
import { BrowserFrame, PhoneFrame } from "./DeviceFrame";

function useDesktopJourney(minWidth = 1024) {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia(`(min-width: ${minWidth}px)`).matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  });

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(mq.matches && !reduced.matches);
    sync();
    mq.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
    };
  }, [minWidth]);

  return enabled;
}

function WorkCaseSlide({
  project,
  index,
  visitLabel,
  webLabel,
  mobileLabel,
  compact,
}: {
  project: WorkCase;
  index: number;
  visitLabel: string;
  webLabel: string;
  mobileLabel: string;
  compact?: boolean;
}) {
  return (
    <article
      className={`ka-work-panel h-full ${compact ? "ka-work-slide-panel" : ""}`}
      data-scene={project.id}
      data-cursor="hover"
      data-cursor-label={project.name}
      style={{
        background:
          index === 0
            ? "radial-gradient(ellipse at 90% 0%, rgba(43,91,255,0.22), transparent 46%), linear-gradient(160deg, rgba(11,16,32,0.55), rgba(7,7,7,0.28))"
            : index === 1
              ? "radial-gradient(ellipse at 10% 10%, rgba(255,255,255,0.1), transparent 42%), linear-gradient(160deg, rgba(16,16,16,0.5), rgba(6,6,6,0.25))"
              : "radial-gradient(ellipse at 80% 20%, rgba(232,168,74,0.14), transparent 46%), linear-gradient(160deg, rgba(12,15,24,0.5), rgba(5,5,5,0.25))",
      }}
    >
      <div
        className={`relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full ${
          index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="ka-eyebrow text-[var(--ka-cobalt)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-white/20" />
            <span className="text-white/45 text-sm">{project.year}</span>
            <span className="text-white/25">·</span>
            <span className="text-white/55 text-sm">{project.role}</span>
          </div>

          <h3 className="ka-display text-[clamp(2.2rem,4.6vw,3.8rem)] text-white mb-4">
            {project.name}
          </h3>
          <p className="text-white/65 leading-relaxed mb-6 text-base md:text-lg max-w-xl">
            {project.summary}
          </p>

          <ul className="space-y-2.5 mb-7">
            {project.highlights.map((item) => (
              <li key={item} className="text-sm text-white/55 flex gap-2">
                <span className="text-[var(--ka-cobalt)] mt-0.5">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/12 bg-black/30 px-3 py-1.5 text-xs tracking-wide text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              <span className="border-b border-white/30 group-hover:border-[var(--ka-cobalt)] transition-colors pb-0.5">
                {visitLabel}
              </span>
              <ArrowUpRight
                size={16}
                className="text-[var(--ka-cobalt)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
        </div>

        <div className="relative min-h-[260px] md:min-h-[340px] pb-8">
          <div className="relative z-[1] ka-media-reveal">
            <BrowserFrame
              src={project.webImage}
              alt={`${project.name} ${webLabel}`}
            />
          </div>

          <div
            className={`absolute z-[2] -bottom-2 ${
              index % 2 === 0 ? "-left-1 md:-left-5" : "-right-1 md:-right-5"
            }`}
          >
            <PhoneFrame
              src={project.mobileImage}
              alt={`${project.name} ${mobileLabel}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function WorkMore({
  title,
  items,
}: {
  title: string;
  items: { name: string; url?: string; blurb: string }[];
}) {
  return (
    <div className="mt-16 md:mt-20 pt-10 border-t border-white/10">
      <p className="ka-eyebrow mb-6">{title}</p>
      <div className="grid sm:grid-cols-3 gap-4">
        {items.map((item, i) => {
          const className = "ka-glow-card group rounded-2xl p-5 block";
          const body = (
            <>
              <div className="flex items-start justify-between gap-3 relative z-[1]">
                <h4 className="font-semibold text-white text-lg">{item.name}</h4>
                {item.url && (
                  <ArrowUpRight
                    size={16}
                    className="text-white/35 group-hover:text-[var(--ka-cobalt)] transition-colors"
                  />
                )}
              </div>
              <p className="mt-2 text-sm text-white/45 relative z-[1]">
                {item.blurb}
              </p>
            </>
          );

          const onMove = (e: React.MouseEvent<HTMLElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty(
              "--local-x",
              `${e.clientX - rect.left}px`,
            );
            e.currentTarget.style.setProperty(
              "--local-y",
              `${e.clientY - rect.top}px`,
            );
          };

          if (item.url) {
            return (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={className}
                onMouseMove={onMove}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                {body}
              </motion.a>
            );
          }

          return (
            <motion.div
              key={item.name}
              className={className}
              onMouseMove={onMove}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ delay: i * 0.08 }}
            >
              {body}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function SelectedWork() {
  const { t } = useTranslation();
  const { lockScene, unlockScene } = useScene();
  const desktopJourney = useDesktopJourney();
  const cases = t.work.cases;
  const count = Math.max(cases.length, 1);

  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const progress = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  useLayoutEffect(() => {
    const measure = () => setViewportWidth(window.innerWidth);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!desktopJourney) {
      x.set(0);
      progress.set(0);
      unlockScene();
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      const total = Math.max(container.offsetHeight - window.innerHeight, 1);
      const passed = Math.min(Math.max(-rect.top, 0), total);
      const p = passed / total;
      const width = window.innerWidth;
      const translate = -p * (count - 1) * width;

      progress.set(p);
      x.set(translate);

      const idx = Math.min(count - 1, Math.max(0, Math.round(p * (count - 1))));
      setActiveIndex(idx);

      const id = cases[idx]?.id;
      if (id) lockScene(id as SceneId);

      if (p <= 0 || p >= 1) {
        // keep locked while visually inside the pin range
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      unlockScene();
    };
  }, [desktopJourney, cases, count, lockScene, unlockScene, x, progress]);

  useEffect(() => {
    if (!desktopJourney) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) unlockScene();
      },
      { threshold: 0.02 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [desktopJourney, unlockScene]);

  const slideWidth = viewportWidth || 1200;

  return (
    <section id="trabalho" className="relative">
      <div className="ka-container pt-[clamp(4.5rem,10vw,7.5rem)]">
        <motion.div
          data-scene="work"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14 max-w-3xl"
        >
          <p className="ka-eyebrow mb-4">{t.work.eyebrow}</p>
          <h2 className="ka-display text-[clamp(2.2rem,5.5vw,4rem)] text-white mb-4">
            {t.work.title}
          </h2>
          <p className="text-white/55 text-base md:text-lg leading-relaxed">
            {t.work.subtitle}
          </p>
        </motion.div>
      </div>

      {desktopJourney ? (
        <div
          ref={containerRef}
          className="ka-work-journey relative"
          data-scene-rail=""
          style={{ height: `${count * 100}vh` }}
        >
          <div className="ka-work-pin sticky top-0 h-[100svh] overflow-hidden">
            <motion.div
              className="ka-work-track flex h-full will-change-transform"
              style={{
                x,
                width: slideWidth * count,
              }}
            >
              {cases.map((project, index) => (
                <div
                  key={project.id}
                  className="ka-work-slide relative h-full shrink-0"
                  style={{ width: slideWidth, minWidth: slideWidth }}
                >
                  <div className="ka-container h-full flex items-center py-24">
                    <div className="w-full max-h-[calc(100svh-8rem)] overflow-hidden">
                      <WorkCaseSlide
                        project={project}
                        index={index}
                        visitLabel={t.work.visit}
                        webLabel={t.work.webLabel}
                        mobileLabel={t.work.mobileLabel}
                        compact
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
                  {String(cases.length).padStart(2, "0")} ·{" "}
                  {cases[activeIndex]?.name}
                </p>
                <div className="flex items-center gap-2">
                  {cases.map((project, index) => (
                    <span
                      key={project.id}
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
        <div className="ka-container space-y-10 md:space-y-14 pb-4">
          {cases.map((project, index) => (
            <WorkCaseSlide
              key={project.id}
              project={project}
              index={index}
              visitLabel={t.work.visit}
              webLabel={t.work.webLabel}
              mobileLabel={t.work.mobileLabel}
            />
          ))}
        </div>
      )}

      <div className="ka-container pb-[clamp(4.5rem,10vw,7.5rem)]">
        <WorkMore title={t.work.moreTitle} items={t.work.more} />
      </div>
    </section>
  );
}
