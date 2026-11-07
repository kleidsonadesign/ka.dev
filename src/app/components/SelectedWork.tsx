import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "../../i18n/LanguageContext";
import type { WorkCase } from "../../i18n/translations";
import { BrowserFrame, PhoneFrame } from "./DeviceFrame";

function WorkCaseBlock({
  project,
  index,
  visitLabel,
  webLabel,
  mobileLabel,
}: {
  project: WorkCase;
  index: number;
  visitLabel: string;
  webLabel: string;
  mobileLabel: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [160, -90]);
  const textY = useTransform(scrollYProgress, [0, 1], [90, -60]);
  const textX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -36 : 36, 0, index % 2 === 0 ? 28 : -28],
  );
  const imageScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.88, 1, 0.94]);
  const phoneRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-10, -6, -2]);
  const panelOpacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0.35, 1, 1, 0.4]);
  const glow = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.1, 0.8, 0.15]);

  return (
    <motion.article
      ref={ref}
      className="ka-work-panel"
      data-scene={project.id}
      data-cursor="hover"
      data-cursor-label={project.name}
      style={{
        opacity: panelOpacity,
        background:
          index === 0
            ? "radial-gradient(ellipse at 90% 0%, rgba(43,91,255,0.22), transparent 46%), linear-gradient(160deg, rgba(11,16,32,0.55), rgba(7,7,7,0.28))"
            : index === 1
              ? "radial-gradient(ellipse at 10% 10%, rgba(255,255,255,0.1), transparent 42%), linear-gradient(160deg, rgba(16,16,16,0.5), rgba(6,6,6,0.25))"
              : "radial-gradient(ellipse at 80% 20%, rgba(232,168,74,0.14), transparent 46%), linear-gradient(160deg, rgba(12,15,24,0.5), rgba(5,5,5,0.25))",
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: glow,
          background:
            index === 0
              ? "radial-gradient(ellipse at 80% 20%, rgba(43,91,255,0.32), transparent 52%)"
              : index === 1
                ? "radial-gradient(ellipse at 20% 30%, rgba(46,180,110,0.22), transparent 55%)"
                : "radial-gradient(ellipse at 75% 25%, rgba(232,168,74,0.2), transparent 55%)",
        }}
      />

      <div
        className={`relative grid lg:grid-cols-2 gap-10 lg:gap-12 items-center ${
          index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div style={{ y: textY, x: textX }}>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="ka-eyebrow text-[var(--ka-cobalt)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-white/20" />
            <span className="text-white/45 text-sm">{project.year}</span>
            <span className="text-white/25">·</span>
            <span className="text-white/55 text-sm">{project.role}</span>
          </div>

          <h3 className="ka-display text-[clamp(2.4rem,5vw,4rem)] text-white mb-4">
            {project.name}
          </h3>
          <p className="text-white/65 leading-relaxed mb-6 text-base md:text-lg">
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
        </motion.div>

        <div className="relative min-h-[300px] md:min-h-[380px] pb-8">
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="relative z-[1] ka-media-reveal"
          >
            <BrowserFrame
              src={project.webImage}
              alt={`${project.name} ${webLabel}`}
            />
          </motion.div>

          <motion.div
            style={{ y: phoneY, rotate: phoneRotate }}
            className={`absolute z-[2] -bottom-2 ${
              index % 2 === 0 ? "-left-1 md:-left-5" : "-right-1 md:-right-5"
            }`}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <PhoneFrame
              src={project.mobileImage}
              alt={`${project.name} ${mobileLabel}`}
            />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

export function SelectedWork() {
  const { t } = useTranslation();

  return (
    <section id="trabalho" className="ka-section">
      <div className="ka-container">
        <motion.div
          data-scene="work"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-20 max-w-3xl"
        >
          <p className="ka-eyebrow mb-4">{t.work.eyebrow}</p>
          <h2 className="ka-display text-[clamp(2.2rem,5.5vw,4rem)] text-white mb-4">
            {t.work.title}
          </h2>
          <p className="text-white/55 text-base md:text-lg leading-relaxed">
            {t.work.subtitle}
          </p>
        </motion.div>

        <div className="space-y-10 md:space-y-14">
          {t.work.cases.map((project, index) => (
            <WorkCaseBlock
              key={project.id}
              project={project}
              index={index}
              visitLabel={t.work.visit}
              webLabel={t.work.webLabel}
              mobileLabel={t.work.mobileLabel}
            />
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="ka-eyebrow mb-6">{t.work.moreTitle}</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {t.work.more.map((item, i) => {
              const className =
                "ka-glow-card group rounded-2xl p-5 block";
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
                  <p className="mt-2 text-sm text-white/45 relative z-[1]">{item.blurb}</p>
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
      </div>
    </section>
  );
}
