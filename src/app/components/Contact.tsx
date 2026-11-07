import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "../../i18n/LanguageContext";

export function Contact() {
  const { t } = useTranslation();
  const whatsapp = t.contact.links.find((l) =>
    l.platform.toLowerCase().includes("whatsapp"),
  );
  const otherLinks = t.contact.links.filter(
    (l) => !l.platform.toLowerCase().includes("whatsapp"),
  );

  return (
    <section id="contato" className="relative overflow-hidden pt-10 pb-8">
      <div
        className="ka-contact-bleed mx-4 md:mx-6 lg:mx-8 rounded-[28px] md:rounded-[40px] overflow-hidden relative"
        style={{
          background:
            "radial-gradient(ellipse at 90% 0%, rgba(43,91,255,0.4), transparent 42%), radial-gradient(ellipse at 10% 100%, rgba(255,255,255,0.08), transparent 40%), linear-gradient(165deg, #0a0e1a 0%, #050505 55%, #030303 100%)",
        }}
      >
        <div aria-hidden className="ka-neon-scan opacity-40" />
        <div
          aria-hidden
          className="ka-watermark absolute -right-4 bottom-0 text-[28vw] md:text-[18vw] opacity-90"
        >
          HELLO
        </div>

        <motion.div
          aria-hidden
          className="absolute -top-24 right-[20%] h-72 w-72 rounded-full blur-3xl pointer-events-none"
          animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.12, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "rgba(43,91,255,0.35)" }}
        />

        <div className="ka-container relative px-6 md:px-10 py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="ka-eyebrow mb-5 text-[var(--ka-cobalt)]">{t.contact.eyebrow}</p>
              <h2 className="ka-display text-[clamp(2.8rem,7vw,5.5rem)] text-white mb-6 max-w-3xl">
                {t.contact.title}
              </h2>
              <p className="text-white/55 text-base md:text-lg max-w-lg mb-10 leading-relaxed">
                {t.contact.subtitle}
              </p>

              {whatsapp && (
                <motion.a
                  href={whatsapp.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black hover:bg-[var(--ka-cobalt)] hover:text-white transition-colors shadow-[0_0_50px_rgba(255,255,255,0.15)]"
                  data-cursor="hover"
                >
                  {t.contact.cta}
                  <ArrowUpRight size={16} />
                </motion.a>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="border-t border-white/15"
            >
              {otherLinks.map((link, i) => (
                <a
                  key={link.platform}
                  href={link.url}
                  download={
                    link.url.endsWith(".pdf")
                      ? "Kleidson Almeida Santos - Resume.pdf"
                      : undefined
                  }
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                  className="ka-index-row group flex items-center justify-between gap-4 py-5"
                  data-cursor="hover"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <div className="min-w-0">
                    <p className="ka-eyebrow text-[10px] text-white/35 mb-1">
                      {String(i + 1).padStart(2, "0")} · {link.platform}
                    </p>
                    <p className="text-white/80 text-sm md:text-base truncate group-hover:text-white transition-colors">
                      {link.username}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-white/25 group-hover:text-[var(--ka-cobalt)] transition-colors"
                  />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <p className="mt-8 mb-6 text-center text-xs text-white/30 px-4">{t.contact.footer}</p>
    </section>
  );
}
