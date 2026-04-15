import { motion } from "motion/react";
import { Plus } from "lucide-react";

const certifications = [
  {
    institution: "AMAZON WEB SERVICES",
    title: "Developer Associate (DVA)",
    status: "Ativo",
    statusColor: "green",
    logo: "AWS",
  },
  {
    institution: "ADAPTA / NVIDIA",
    title: "Engenharia de Prompt & IA Generativa",
    status: "Ativo",
    statusColor: "green",
    logo: "AI",
  },
  {
    institution: "MICROCAMP",
    title: "WebDesign & UI/UX",
    status: "Ativo",
    statusColor: "green",
    logo: "MC",
  },
  {
    institution: "MICROSOFT AZURE",
    title: "Azure Fundamentals (AZ-900)",
    status: "Em breve",
    statusColor: "yellow",
    logo: "AZ",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function CertificationsSection() {
  return (
    <section id="certificacoes" className="py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-[980px] mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8"
          style={{ 
            fontFamily: "'Fraunces', Georgia, serif",
            fontWeight: 700,
            letterSpacing: '-0.02em',
            textShadow: '0 0 15px rgba(255, 255, 255, 0.1)'
          }}
        >
          Top Certificações
        </motion.h2>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 0 25px rgba(255, 255, 255, 0.2)",
                borderColor: "rgba(255, 255, 255, 0.5)",
                transition: { duration: 0.3 },
              }}
              className="bg-[#0A0A0A]/90 backdrop-blur-sm rounded-3xl p-5 transition-all border-white/20"
              style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <div className="flex items-start gap-3 mb-3">
                {/* Logo */}
                <div
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0"
                  style={{ borderWidth: 1, borderColor: "rgba(255, 255, 255, 0.05)" }}
                >
                  <span
                    className="text-white font-bold text-xs"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {cert.logo}
                  </span>
                </div>

                {/* Institution and Title */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-white/40 text-[10px] uppercase font-semibold tracking-wider mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {cert.institution}
                  </p>
                  <h3
                    className="text-white text-sm font-semibold leading-tight"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-3">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 bg-black rounded-full text-[10px] font-medium ${
                    cert.statusColor === "green" ? "text-green-400" : "text-yellow-400"
                  }`}
                  style={{
                    borderWidth: 1,
                    borderColor:
                      cert.statusColor === "green"
                        ? "rgba(34, 197, 94, 0.3)"
                        : "rgba(234, 179, 8, 0.3)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      cert.statusColor === "green" ? "bg-green-400" : "bg-yellow-400"
                    }`}
                  ></span>
                  {cert.status}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Empty Card - Coming Soon */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -5,
              borderColor: "rgba(255, 255, 255, 0.3)",
              transition: { duration: 0.3 },
            }}
            className="bg-transparent rounded-3xl p-5 transition-all flex flex-col items-center justify-center min-h-[140px] cursor-pointer"
            style={{
              borderWidth: 2,
              borderColor: "rgba(255, 255, 255, 0.1)",
              borderStyle: "dashed",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3"
            >
              <Plus className="w-6 h-6 text-white/40" />
            </motion.div>
            <p
              className="text-white/40 text-xs font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Em breve
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}