import { motion } from "motion/react";
import { Linkedin, Github, Mail, FileDown, Languages, Bot, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const [currentSkill, setCurrentSkill] = useState(0);
  const fullName = "Kleidson Almeida";
  
  const rotatingSkills = [
    "UI/UX Design",
    "Desenvolvimento de Sistemas",
    "Inteligência Artificial",
    "Web Design"
  ];
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  useEffect(() => {
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % rotatingSkills.length);
    }, 2500);
    
    return () => clearInterval(skillInterval);
  }, []);
  
  const skills = [
    { icon: Languages, text: "Inglês & Português" },
    { icon: Bot, text: "IA no Desenvolvimento" },
    { icon: Briefcase, text: "5 Anos de Experiência" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Side - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl mb-3 text-center lg:text-left font-bold"  // Tamanho do Kleidson Almeida
            >
              <motion.span 
                className="text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                {displayedName.split(' ')[0]}
              </motion.span>
              <br />
              <motion.span 
                className="text-primary/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.3 }}
              >
                {displayedName.split(' ')[1] || ''}
              </motion.span>
              <span className="inline-block w-0.5 h-10 md:h-12 bg-primary/60 ml-2 animate-pulse" style={{ animation: displayedName === fullName ? 'none' : undefined }}></span>
            </motion.h1>

      

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mb-8 text-center lg:text-left h-12 overflow-hidden"
            >
              <motion.p
                key={currentSkill}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-300 tracking-widest uppercase"
                style={{ fontSize: '1.125rem', fontWeight: '500', letterSpacing: '0.15em' }}
              >
                {rotatingSkills[currentSkill]}
              </motion.p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
              <motion.a
                href="#sobre"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded-full text-center cursor-interactive"
                style={{
                  boxShadow: '0 4px 20px rgba(147, 51, 234, 0.5), 0 0 40px rgba(147, 51, 234, 0.3)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(147, 51, 234, 0.7), 0 0 60px rgba(147, 51, 234, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(147, 51, 234, 0.5), 0 0 40px rgba(147, 51, 234, 0.3)';
                }}
              >
                Sobre Mim
              </motion.a>
             
              
 <motion.a
  href="/CurriculoKleidsonAlmeida.pdf"           // Caminho do arquivo na pasta 'public'
  download="CurriculoKleidsonAlmeida.pdf"  // Nome sugerido para o download
  whileHover={{ y: -3 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 hover:shadow-[0_8px_20px_rgba(147,51,234,0.3)] cursor-interactive group"
>
  <motion.div
    whileHover={{ y: -2 }}
    transition={{ duration: 0.2 }}
  >
    <FileDown size={18} />
  </motion.div>
  Baixar CV
</motion.a>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/kleidsonadesign/", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/kleidsonadesign", label: "GitHub" },
                { icon: Mail, href: "mailto:kleidsonadesign@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 5,
                    y: -2
                  }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-muted cursor-interactive group"
                  style={{
                    boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.6), inset -2px -2px 6px rgba(147, 51, 234, 0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <social.icon 
                    size={20} 
                    className="text-gray-300 group-hover:text-primary transition-colors duration-300" 
                    style={{ filter: 'drop-shadow(0 0 4px rgba(147, 51, 234, 0.3))' }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="info-block transition-all duration-300 w-full" style={{ padding: '3rem', borderRadius: '24px' }}>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-10 tracking-tight text-center leading-tight"
              >
                <motion.span 
                  className="block text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  style={{ fontSize: '2.75rem', letterSpacing: '0.05em', fontWeight: '500' }}
                >
                  FullStack
                </motion.span>
                <motion.span 
                  className="block text-primary relative inline-block group glow-text mt-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
                  style={{ fontSize: '3.75rem', fontWeight: '700', letterSpacing: '0.05em' }}
                >
                  <span className="relative z-10">Vibe Coding</span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-accent/40 to-primary/0 blur-lg"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  ></motion.span>
                </motion.span>
                <motion.span 
                  className="block text-gray-300 mt-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  style={{ fontSize: '2.75rem', letterSpacing: '0.05em', fontWeight: '500' }}
                >
                  & UI/UX
                </motion.span>
              </motion.h2>

              <div className="space-y-6 mt-10">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.text}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: 1.3 + index * 0.15,
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                      className="flex items-center gap-4 cursor-interactive group py-4 border-b border-gray-800/50 last:border-b-0"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          delay: 1.3 + index * 0.15 + 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="flex items-center justify-center"
                      >
                        <IconComponent 
                          size={28}
                          className="text-primary group-hover:text-accent transition-colors duration-300"
                          style={{ filter: 'drop-shadow(0 0 6px rgba(147, 51, 234, 0.5))' }}
                          strokeWidth={2}
                        />
                      </motion.div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
