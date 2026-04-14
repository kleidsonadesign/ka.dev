import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particulas
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      group: number;
    }

    const particles: Particle[] = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      const group = i % 3;
      let speedMultiplier = group === 0 ? 2.0 : group === 1 ? 1.2 : 0.6;

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.6 * speedMultiplier,
        speedY: (Math.random() - 0.5) * 0.6 * speedMultiplier,
        opacity: Math.random() * 0.06 + 0.02,
        group: group,
      });
    }

    // Estrelas cadentes
    for (let i = 0; i < 5; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 1,
        speedX: (Math.random() * 2 - 1) * 2.5,
        speedY: (Math.random() * 2 - 1) * 2.5,
        opacity: Math.random() * 0.05 + 0.02,
        group: 3,
      });
    }

    let time = 0;
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        const pulseFactor = Math.sin(time * 2 + particle.group) * 0.015;
        const currentOpacity = Math.min(0.08, particle.opacity + pulseFactor);

        // Rastro para estrelas cadentes
        if (particle.group === 3) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(
            particle.x - particle.speedX * 6,
            particle.y - particle.speedY * 6
          );

          const trailGradient = ctx.createLinearGradient(
            particle.x,
            particle.y,
            particle.x - particle.speedX * 6,
            particle.y - particle.speedY * 6
          );
          trailGradient.addColorStop(0, `rgba(147, 51, 234, ${currentOpacity * 0.7})`);
          trailGradient.addColorStop(1, "rgba(147, 51, 234, 0)");

          ctx.strokeStyle = trailGradient;
          ctx.lineWidth = particle.size * 0.4;
          ctx.stroke();
        }

        // Particula com glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        const glowRadius = particle.group === 3 ? particle.size * 4 : particle.size * 3;
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          glowRadius
        );
        gradient.addColorStop(0, `rgba(147, 51, 234, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(168, 85, 247, ${currentOpacity * 0.4})`);
        gradient.addColorStop(1, "rgba(147, 51, 234, 0)");

        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.5})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Gradiente radial estático no centro */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(
              ellipse 800px 600px at 50% 30%, 
              rgba(147, 51, 234, 0.12) 0%, 
              rgba(147, 51, 234, 0.04) 40%, 
              transparent 70%
            )
          `,
        }}
      />
      
      {/* Canvas com particulas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.5 }}
      />
    </>
  );
}
