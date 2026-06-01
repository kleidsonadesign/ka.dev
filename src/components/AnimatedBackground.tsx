import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configurar tamanho do canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Criar partículas/estrelas com velocidades variadas
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      group: number;
    }> = [];

    const particleCount = 80; // Aumentado para efeito mais dinâmico

    // Criar 3 grupos de partículas com velocidades diferentes
    for (let i = 0; i < particleCount; i++) {
      const group = i % 3; // Distribuir em 3 grupos
      let speedMultiplier;
      
      // Grupo 0: rápido (equivalente a ~25s)
      // Grupo 1: médio (equivalente a ~30s)
      // Grupo 2: lento (equivalente a ~40s)
      if (group === 0) {
        speedMultiplier = 2.5; // Partículas rápidas
      } else if (group === 1) {
        speedMultiplier = 1.5; // Partículas médias
      } else {
        speedMultiplier = 1.0; // Partículas lentas
      }

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5, // Tamanho entre 0.5 e 2.5
        speedX: (Math.random() - 0.5) * 0.8 * speedMultiplier, // Velocidade bem acelerada
        speedY: (Math.random() - 0.5) * 0.8 * speedMultiplier,
        opacity: Math.random() * 0.08 + 0.02, // Opacidade muito baixa (2-10%)
        group: group,
      });
    }

    // Adicionar algumas "estrelas cadentes" super rápidas
    const shootingStars = 8;
    for (let i = 0; i < shootingStars; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 1, // Tamanho menor
        speedX: (Math.random() * 2 - 1) * 3, // Muito rápidas
        speedY: (Math.random() * 2 - 1) * 3,
        opacity: Math.random() * 0.06 + 0.02, // Opacidade baixa
        group: 3, // Grupo especial para estrelas cadentes
      });
    }

    // Animação
    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      particles.forEach((particle) => {
        // Atualizar posição com movimento acelerado
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen com distâncias maiores
        if (particle.x < -100) particle.x = canvas.width + 100;
        if (particle.x > canvas.width + 100) particle.x = -100;
        if (particle.y < -100) particle.y = canvas.height + 100;
        if (particle.y > canvas.height + 100) particle.y = -100;

        // Opacidade pulsante sutil baseada no grupo
        const pulseFactor = Math.sin(time + particle.group) * 0.02;
        const currentOpacity = Math.min(0.1, particle.opacity + pulseFactor);

        // Estrelas cadentes (grupo 3) com rastro
        if (particle.group === 3) {
          // Desenhar rastro
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x - particle.speedX * 8, particle.y - particle.speedY * 8);
          
          const trailGradient = ctx.createLinearGradient(
            particle.x,
            particle.y,
            particle.x - particle.speedX * 8,
            particle.y - particle.speedY * 8
          );
          trailGradient.addColorStop(0, `rgba(147, 51, 234, ${currentOpacity * 0.8})`);
          trailGradient.addColorStop(1, "rgba(147, 51, 234, 0)");
          
          ctx.strokeStyle = trailGradient;
          ctx.lineWidth = particle.size * 0.5;
          ctx.stroke();
        }

        // Desenhar partícula com glow roxo
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Glow effect mais intenso para partículas rápidas e estrelas cadentes
        const glowRadius = particle.group === 0 || particle.group === 3 ? particle.size * 4 : particle.size * 3;
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          glowRadius
        );
        gradient.addColorStop(0, `rgba(147, 51, 234, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(168, 85, 247, ${currentOpacity * 0.5})`);
        gradient.addColorStop(1, "rgba(147, 51, 234, 0)");
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Núcleo da estrela
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.6})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
