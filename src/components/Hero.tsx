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
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[52rem] h-[52rem] bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.05, 1], x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 3 }}
        />
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
            <motion.h1 className="text-5xl md:text-6xl mb-3 text-center lg:text-left font-bold">
              <span className="text-white/90">{displayedName.split(' ')[0]}</span>
              <br />
              <span className="text-primary/90">{displayedName.split(' ')[1] || ''}</span>
              <span className="inline-block w-0.5 h-10 md:h-12 bg-primary/60 ml-2 animate-pulse"></span>
            </motion.h1>

            <div className="mb-8 text-center lg:text-left h-12 overflow-hidden">
              <motion.p
                key={currentSkill}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-300 tracking-widest uppercase font-medium text-lg"
              >
                {rotatingSkills[currentSkill]}
              </motion.p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
              <a href="#sobre" className="px-8 py-3 bg-primary text-white rounded-full text-center">Sobre Mim</a>
              <a href="/CurriculoKleidsonAlmeida.pdf" download className="px-8 py-3 border-2 border-primary text-primary rounded-full flex items-center justify-center gap-2 group">
                <FileDown size={18} /> Baixar CV
              </a>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/kleidsonadesign/" },
                { icon: Github, href: "https://github.com/kleidsonadesign" },
                { icon: Mail, href: "mailto:kleidsonadesign@gmail.com" },
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-12 h-12 flex items-center justify-center rounded-full bg-muted group">
                  <social.icon size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
                </a>
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
            <div className="info-block w-full p-12 bg-black/20 backdrop-blur-sm rounded-[24px]">
              <motion.h2 className="mb-10 text-center leading-tight">
                <span className="block text-gray-300 text-4xl font-medium tracking-wide">Developer</span>
                <span className="block text-primary text-6xl font-bold relative inline-block mt-1">
                  <span className="relative z-10">Full Stack</span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-accent/40 to-primary/0 blur-lg"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                </span>
                <span className="block text-gray-300 text-4xl font-medium mt-1">& UI/UX</span>
              </motion.h2>

              <div className="space-y-6 mt-10">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-4 py-4 border-b border-gray-800/50 last:border-b-0 group">
                    <skill.icon size={28} className="text-primary group-hover:text-accent transition-colors duration-300" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
