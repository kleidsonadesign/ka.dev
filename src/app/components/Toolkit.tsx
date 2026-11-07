import { motion } from "motion/react";
import { useTranslation } from "../../i18n/LanguageContext";

export function Toolkit() {
  const { t } = useTranslation();

  return (
    <section id="toolkit" className="ka-section relative overflow-hidden">
      <div aria-hidden className="ka-watermark absolute left-[-4%] top-1/3 text-[20vw] opacity-85">
        STACK
      </div>

      <div className="ka-container relative">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-20 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="ka-eyebrow mb-4 text-[var(--ka-cobalt)]">{t.toolkit.eyebrow}</p>
            <h2 className="ka-display text-[clamp(2.4rem,5.5vw,4rem)] text-white mb-5">
              {t.toolkit.title}
            </h2>
            <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-sm">
              {t.toolkit.subtitle}
            </p>
          </motion.div>

          <div className="border-t border-white/12">
            {t.toolkit.groups.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="ka-index-row group"
                data-cursor="hover"
              >
                <div className="flex items-start gap-4 md:gap-8 py-6 md:py-7">
                  <span className="ka-eyebrow text-[var(--ka-cobalt)] pt-1 shrink-0 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                      <h3 className="ka-display text-2xl md:text-[1.85rem] text-white group-hover:text-white transition-colors">
                        {group.title}
                      </h3>
                    </div>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed tracking-wide">
                      {group.items.map((item, idx) => (
                        <span key={item}>
                          <span className="text-white/75 group-hover:text-white transition-colors">
                            {item}
                          </span>
                          {idx < group.items.length - 1 && (
                            <span className="text-white/20 mx-2">/</span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
