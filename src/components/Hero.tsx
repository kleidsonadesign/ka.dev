{/* Right Side - Info */}
<motion.div className="flex items-center justify-center">
  <div className="info-block transition-all duration-300 w-full" style={{ padding: '3rem', borderRadius: '24px' }}>
    <motion.h2 className="mb-10 tracking-tight text-center leading-tight">
      <motion.span 
        className="block text-gray-300"
        style={{ fontSize: '2.75rem', letterSpacing: '0.05em', fontWeight: '500' }}
      >
        Developer
      </motion.span>
      <motion.span 
        className="block text-primary relative inline-block group glow-text mt-1"
        style={{ fontSize: '3.75rem', fontWeight: '700', letterSpacing: '0.05em' }}
      >
        <span className="relative z-10">Full Stack</span>
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-primary/0 via-accent/40 to-primary/0 blur-lg"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
        />
      </motion.span>
      <motion.span 
        className="block text-gray-300 mt-1"
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
            key={index}
            className="flex items-center gap-4 cursor-interactive group py-4 border-b border-gray-800/50 last:border-b-0"
          >
            <IconComponent size={28} className="text-primary group-hover:text-accent transition-colors duration-300" />
            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill.text}</span>
          </motion.div>
        );
      })}
    </div>
  </div>
</motion.div>
