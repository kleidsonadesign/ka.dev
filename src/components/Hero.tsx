import { motion } from "motion/react";
import { Linkedin, Github, Mail, FileDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 flex flex-col gap-8"
          >
            {/* Name Card */}
            <div 
              className="rounded-2xl p-6 border"
              style={{
                background: 'rgba(147, 51, 234, 0.05)',
                borderColor: 'rgba(147, 51, 234, 0.2)',
              }}
            >
              <p className="text-4xl lg:text-5xl font-serif text-white leading-tight mb-4">
                Kleidson<br />Almeida
              </p>
              <p className="text-sm text-gray-400">@kleidson</p>
            </div>

            {/* Location & Time */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-lg border border-gray-800"
            >
              <p className="text-sm text-gray-400 flex items-center gap-2 mb-2">
                <span>📍</span> São Paulo, SP
              </p>
              <p className="text-xs text-gray-500">GMT-3</p>
              <p className="text-xl font-mono text-gray-300 mt-2" id="time">
                --:--:--
              </p>
            </motion.div>

            {/* Links Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-3"
            >
              <a
                href="/CV.pdf"
                download="CV.pdf"
                className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium border transition-all duration-300"
                style={{
                  background: 'rgba(147, 51, 234, 0.1)',
                  borderColor: 'rgba(147, 51, 234, 0.2)',
                  color: 'white',
                }}
              >
                <FileDown size={16} /> CV
              </a>
              <a
                href="https://www.linkedin.com/in/kleidsonadesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium border transition-all duration-300"
                style={{
                  background: 'rgba(147, 51, 234, 0.1)',
                  borderColor: 'rgba(147, 51, 234, 0.2)',
                  color: 'white',
                }}
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://github.com/kleidsonadesign"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium border transition-all duration-300"
                style={{
                  background: 'rgba(147, 51, 234, 0.1)',
                  borderColor: 'rgba(147, 51, 234, 0.2)',
                  color: 'white',
                }}
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.youtube.com/@kleidsonadesign"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium border transition-all duration-300"
                style={{
                  background: 'rgba(147, 51, 234, 0.1)',
                  borderColor: 'rgba(147, 51, 234, 0.2)',
                  color: 'white',
                }}
              >
                ▶ YouTube
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-9 flex flex-col gap-8"
          >
            {/* Hero Title & Description */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-gray-400">Disponível para projetos</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-tight mb-6">
                Desenvolvedor Fullstack. Estudando cloud e IA.
              </h1>
              <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
                Dev desde 14, hoje fullstack na Varzel e pós-graduando em Arq. de Software na FIAP. 
                Certificado AWS, C2 em inglês. Compartilho o que aprendo no LinkedIn e YouTube.
              </p>
            </div>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {['NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL', 'DOCKER', 'TAILWIND'].map((skill, i) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg text-xs font-medium border"
                  style={{
                    background: 'rgba(147, 51, 234, 0.1)',
                    borderColor: 'rgba(147, 51, 234, 0.3)',
                    color: '#A855F7',
                  }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Project Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Card 1 - Placeholder */}
              <div className="aspect-video rounded-xl overflow-hidden border border-gray-800 bg-gradient-to-br from-purple-500 to-purple-900"></div>
              {/* Card 2 - Placeholder */}
              <div className="aspect-video rounded-xl overflow-hidden border border-gray-800 bg-gradient-to-br from-green-500 to-green-900"></div>
              {/* Card 3 - Placeholder */}
              <div className="aspect-video rounded-xl overflow-hidden border border-gray-800 bg-gradient-to-br from-yellow-500 to-yellow-900"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Time update */}
      {typeof window !== 'undefined' && (
        <script>{`
          function updateTime() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            document.getElementById('time').textContent = hours + ':' + minutes + ':' + seconds;
          }
          updateTime();
          setInterval(updateTime, 1000);
        `}</script>
      )}
    </section>
  );
}
