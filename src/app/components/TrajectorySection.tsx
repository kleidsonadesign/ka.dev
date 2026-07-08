import { motion } from "motion/react";
import { GraduationCap, Briefcase } from "lucide-react";
import korvenImage from "../../imports/korven.png";
import inssImage from "../../imports/INSS.svg-1.png";
import appenImage from "../../imports/appen.png";
import { useTranslation } from "../../i18n/LanguageContext";
import type { EducationItem, ExperienceItem } from "../../i18n/translations";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const experienceImages = {
  korven: korvenImage,
  inss: inssImage,
  appen: appenImage,
} as const;

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <motion.span
          key={tag}
          whileHover={{
            scale: 1.05,
            y: -2,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 0.3)",
          }}
          className="px-2.5 py-1 bg-black rounded-full text-[9px] text-white/70 cursor-pointer transition-all font-medium"
          style={{
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.05)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}

function EducationCard({ item, delay = 0 }: { item: EducationItem; delay?: number }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      whileHover={{
        y: -5,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
        borderColor: "rgba(255, 255, 255, 0.5)",
        transition: { duration: 0.3 },
      }}
      className="bg-[#0B0B0B] rounded-3xl p-5 transition-all border-white/20"
      style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.2)" }}
    >
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0"
          style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}
        >
          <span className="text-white font-bold text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            {item.logoText}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="text-white font-semibold text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
              {item.institution}
            </h4>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {item.active && <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />}
              <span className="text-white/40 text-[10px] whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item.period}
              </span>
            </div>
          </div>
        </div>
      </div>
      <h5 className="text-white/80 text-sm font-medium mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
        {item.degree}
      </h5>
      <p className="text-white/50 text-xs leading-relaxed mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
        {item.description}
      </p>
      <TagList tags={item.tags} />
    </motion.div>
  );
}

function ExperienceCard({ item, delay = 0 }: { item: ExperienceItem; delay?: number }) {
  const imageSrc = item.imageKey ? experienceImages[item.imageKey] : undefined;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      whileHover={{
        y: -5,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
        borderColor: "rgba(255, 255, 255, 0.5)",
        transition: { duration: 0.3 },
      }}
      className="bg-[#0B0B0B] rounded-3xl p-5 transition-all border-white/20"
      style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.2)" }}
    >
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 overflow-hidden"
          style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}
        >
          {imageSrc ? (
            <img src={imageSrc} alt={item.company} className="w-8 h-8 object-contain" />
          ) : (
            <span className="text-white font-bold text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              {item.logoText}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="text-white font-semibold text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item.company}
              </h4>
              <p className="text-white/60 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item.role}
              </p>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {item.active && <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />}
              <span className="text-white/40 text-[10px] whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item.period}
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white/50 text-xs leading-relaxed mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
        {item.description}
      </p>
      <TagList tags={item.tags} />
    </motion.div>
  );
}

export function TrajectorySection() {
  const { t } = useTranslation();

  return (
    <section id="trajetoria" className="py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-[980px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8"
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
          }}
        >
          {t.trajectory.title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4 text-white/40" />
              <h3
                className="text-[10px] font-semibold text-white/40 tracking-wider uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t.trajectory.educationTitle}
              </h3>
            </div>
            {t.trajectory.education.map((item, index) => (
              <EducationCard key={item.id} item={item} delay={index * 0.05} />
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4 text-white/40" />
              <h3
                className="text-[10px] font-semibold text-white/40 tracking-wider uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t.trajectory.experienceTitle}
              </h3>
            </div>
            {t.trajectory.corporate.map((item, index) => (
              <ExperienceCard key={item.id} item={item} delay={index * 0.05} />
            ))}

            <div className="flex items-center gap-2 mb-1 pt-2">
              <Briefcase className="w-4 h-4 text-white/40" />
              <h3
                className="text-[10px] font-semibold text-white/40 tracking-wider uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t.trajectory.freelanceTitle}
              </h3>
            </div>
            <ExperienceCard item={t.trajectory.freelance} delay={0.15} />
          </div>
        </div>
      </div>
    </section>
  );
}
