import { motion } from "motion/react";
import { useTranslation } from "../../i18n/LanguageContext";

export function Trajectory() {
  const { t } = useTranslation();
  const experiences = [...t.trajectory.corporate, t.trajectory.freelance];

  return (
    <section id="trajetoria" className="ka-section relative overflow-hidden">
      <div aria-hidden className="ka-watermark absolute right-[-6%] bottom-10 text-[22vw] opacity-85">
        PATH
      </div>

      <div className="ka-container relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-14 md:mb-20 max-w-3xl"
        >
          <p className="ka-eyebrow mb-4 text-[var(--ka-cobalt)]">{t.trajectory.eyebrow}</p>
          <h2 className="ka-display text-[clamp(2.4rem,5.5vw,4.2rem)] text-white">
            {t.trajectory.title}
          </h2>
        </motion.div>

        {/* Education — featured strip */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="ka-eyebrow text-[var(--ka-cobalt)]">01</span>
            <span className="h-px flex-1 bg-white/12" />
            <span className="ka-eyebrow">{t.trajectory.educationTitle}</span>
          </div>

          {t.trajectory.education.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="ka-editorial-panel !p-6 md:!p-10"
            >
              <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
                <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03]">
                  <span className="ka-display text-xl md:text-2xl text-white/80">
                    {item.logoText}
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="ka-display text-3xl md:text-4xl text-white">
                      {item.institution}
                    </h3>
                    {item.active && (
                      <span className="ka-eyebrow text-[10px] text-[var(--ka-cobalt)] border border-[var(--ka-cobalt)]/40 rounded-full px-2.5 py-1">
                        NOW
                      </span>
                    )}
                  </div>
                  <p className="text-white/70 text-lg mb-1">{item.degree}</p>
                  <p className="ka-eyebrow mb-5 text-[10px]">{item.period}</p>
                  <p className="text-white/50 leading-relaxed max-w-2xl mb-5">
                    {item.description}
                  </p>
                  <p className="text-sm text-white/35 tracking-wide">
                    {item.tags.join("  ·  ")}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Experience — editorial timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="ka-eyebrow text-[var(--ka-cobalt)]">02</span>
            <span className="h-px flex-1 bg-white/12" />
            <span className="ka-eyebrow">{t.trajectory.experienceTitle}</span>
          </div>

          <div className="border-t border-white/12">
            {experiences.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="ka-index-row group"
                data-cursor="hover"
              >
                <div className="grid md:grid-cols-[7rem_1fr] gap-4 md:gap-10 py-8 md:py-10">
                  <div className="pt-1">
                    <span className="ka-eyebrow text-[var(--ka-cobalt)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-2">
                      <h3 className="ka-display text-2xl md:text-3xl text-white">
                        {item.company}
                      </h3>
                      {item.active && (
                        <span className="ka-eyebrow text-[10px] text-emerald-300/90 border border-emerald-400/30 rounded-full px-2.5 py-1">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <p className="text-white/70 mb-1">{item.role}</p>
                    <p className="ka-eyebrow mb-4 text-[10px]">{item.period}</p>
                    <p className="text-white/50 leading-relaxed max-w-2xl mb-5">
                      {item.description}
                    </p>
                    <p className="text-xs md:text-sm text-white/30 tracking-[0.12em] uppercase">
                      {item.tags.join("  ·  ")}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
