import { motion } from "motion/react";
import { useTranslation } from "../../i18n/LanguageContext";

export function Certifications() {
  const { t } = useTranslation();

  return (
    <section id="certificacoes" className="ka-section relative overflow-hidden">
      <div className="ka-container relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mb-12 md:mb-16 flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-xl">
            <p className="ka-eyebrow mb-4 text-[var(--ka-cobalt)]">
              {t.certifications.eyebrow}
            </p>
            <h2 className="ka-display text-[clamp(2.4rem,5.5vw,4rem)] text-white">
              {t.certifications.title}
            </h2>
          </div>
          <p className="ka-eyebrow text-white/30">
            {String(t.certifications.items.length).padStart(2, "0")} / CRED
          </p>
        </motion.div>

        <div className="border-y border-white/12">
          {t.certifications.items.map((item, i) => (
            <motion.article
              key={`${item.institution}-${item.title}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="ka-index-row group"
              data-cursor="hover"
            >
              <div className="grid grid-cols-[3rem_1fr_auto] md:grid-cols-[4rem_10rem_1fr_auto] gap-4 md:gap-8 items-center py-7 md:py-9">
                <span className="ka-eyebrow text-[var(--ka-cobalt)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="hidden md:block ka-eyebrow text-white/40 text-[10px]">
                  {item.institution}
                </span>
                <div className="min-w-0">
                  <p className="md:hidden ka-eyebrow text-white/40 text-[10px] mb-1">
                    {item.institution}
                  </p>
                  <h3 className="ka-display text-xl md:text-2xl text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
                <span
                  className={`ka-eyebrow text-[10px] shrink-0 ${
                    item.statusColor === "green"
                      ? "text-emerald-300"
                      : "text-amber-200"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
