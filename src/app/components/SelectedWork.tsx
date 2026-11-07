import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "../../i18n/LanguageContext";
import type { WorkCase } from "../../i18n/translations";
import { PhoneFrame } from "./DeviceFrame";

function WorkCaseBlock({
  project,
  index,
  visitLabel,
  mobileLabel,
}: {
  project: WorkCase;
  index: number;
  visitLabel: string;
  mobileLabel: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [90, -30]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="ka-work-bleed"
      data-cursor="hover"
    >
      {/* Full-bleed media */}
      <div className="relative overflow-hidden border-y border-white/10 bg-[#050505]">
        <motion.div style={{ y: imageY }} className="relative">
          <img
            src={project.webImage}
            alt={project.name}
            className="block w-full h-auto min-h-[42vw] md:min-h-[28vw] object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
        </motion.div>

        <motion.div
          style={{ y: phoneY }}
          className={`absolute z-[2] bottom-4 md:bottom-8 ${
            index % 2 === 0 ? "right-4 md:right-10" : "left-4 md:left-10"
          }`}
        >
          <PhoneFrame
            src={project.mobileImage}
            alt={`${project.name} ${mobileLabel}`}
            className={index % 2 === 0 ? "rotate-[-5deg]" : "rotate-[5deg]"}
          />
        </motion.div>
      </div>

      <div className="ka-container px-5 md:px-8 py-8 md:py-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="ka-eyebrow text-[var(--ka-cobalt)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-white/30">·</span>
          <span className="ka-eyebrow text-[10px]">{project.year}</span>
          <span className="text-white/30">·</span>
          <span className="text-sm text-white/45">{project.role}</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-end">
          <div>
            <h3 className="ka-display text-[clamp(2.6rem,6vw,4.8rem)] text-white mb-4">
              {project.name}
            </h3>
            <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl mb-5">
              {project.summary}
            </p>
            <p className="text-xs md:text-sm text-white/30 tracking-[0.14em] uppercase">
              {project.stack.join("  ·  ")}
            </p>
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 self-start lg:self-end text-sm font-semibold text-white"
            >
              <span className="border-b border-white/25 group-hover:border-[var(--ka-cobalt)] transition-colors pb-0.5">
                {visitLabel}
              </span>
              <ArrowUpRight size={16} className="text-[var(--ka-cobalt)]" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function SelectedWork() {
  const { t } = useTranslation();

  return (
    <section id="trabalho" className="relative pt-20 md:pt-28 pb-8">
      <div className="ka-container px-5 md:px-8 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="ka-eyebrow mb-4 text-[var(--ka-cobalt)]">{t.work.eyebrow}</p>
          <h2 className="ka-display text-[clamp(2.4rem,6vw,4.4rem)] text-white mb-4">
            {t.work.title}
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed">
            {t.work.subtitle}
          </p>
        </motion.div>
      </div>

      <div className="space-y-16 md:space-y-24">
        {t.work.cases.map((project, index) => (
          <WorkCaseBlock
            key={project.id}
            project={project}
            index={index}
            visitLabel={t.work.visit}
            mobileLabel={t.work.mobileLabel}
          />
        ))}
      </div>

      <div className="ka-container px-5 md:px-8 mt-16 md:mt-24">
        <div className="flex items-center gap-3 mb-2">
          <span className="ka-eyebrow text-[var(--ka-cobalt)]">+</span>
          <span className="h-px flex-1 bg-white/12" />
          <span className="ka-eyebrow">{t.work.moreTitle}</span>
        </div>
        <div className="border-t border-white/12">
          {t.work.more.map((item, i) => {
            const inner = (
              <>
                <span className="ka-eyebrow text-[var(--ka-cobalt)] w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h4 className="ka-display text-xl md:text-2xl text-white">{item.name}</h4>
                  <p className="text-sm text-white/40 mt-1">{item.blurb}</p>
                </div>
                {item.url && (
                  <ArrowUpRight
                    size={16}
                    className="text-white/25 group-hover:text-[var(--ka-cobalt)] transition-colors shrink-0"
                  />
                )}
              </>
            );

            const className =
              "ka-index-row group flex items-center gap-4 md:gap-8 py-6 md:py-7";

            if (item.url) {
              return (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                  data-cursor="hover"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  {inner}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={item.name}
                className={className}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                {inner}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
