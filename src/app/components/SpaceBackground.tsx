import { useEffect, useRef, useMemo, useState, useCallback } from "react";
import { AuroraCanvas } from "./background/AuroraCanvas";
import { ParticleConstellation } from "./background/ParticleConstellation";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  active: boolean;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

function generateStars(count: number, seedOffset: number): Star[] {
  return Array.from({ length: count }, (_, i) => {
    const r = seededRandom(seedOffset + i);
    const r2 = seededRandom(seedOffset + i * 2);
    const r3 = seededRandom(seedOffset + i * 3);
    const r4 = seededRandom(seedOffset + i * 4);
    return {
      id: i,
      x: r * 100,
      y: r2 * 110,
      size: 1 + r3 * 2,
      opacity: 0.3 + r3 * 0.6,
      duration: 2.5 + r4 * 4,
      delay: r3 * 5,
    };
  });
}

const GLOW_ORBS = [
  { top: "8%", left: "15%", size: 420, opacity: 0.06, delay: "0s" },
  { top: "55%", right: "5%", size: 360, opacity: 0.05, delay: "-4s" },
  { top: "72%", left: "40%", size: 280, opacity: 0.04, delay: "-8s" },
  { top: "25%", right: "22%", size: 220, opacity: 0.07, delay: "-2s" },
];

const SKY_BASE = `
  radial-gradient(ellipse 100% 70% at 50% 18%, rgba(255,255,255,0.04) 0%, transparent 55%),
  radial-gradient(ellipse 60% 40% at 85% 65%, rgba(255,255,255,0.03) 0%, transparent 50%),
  linear-gradient(180deg, #000000 0%, #050505 35%, #000000 100%)
`;

export function SpaceBackground() {
  const skyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const meteorRef = useRef<Meteor | null>(null);
  const rafRef = useRef<number>(0);
  const meteorTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const twinkleStars = useMemo(() => generateStars(55, 1), []);

  const spawnMeteor = useCallback(() => {
    const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.35;
    const speed = 12 + Math.random() * 8;
    meteorRef.current = {
      x: Math.random() * window.innerWidth * 0.8,
      y: -40,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      length: 80 + Math.random() * 100,
      opacity: 0.7 + Math.random() * 0.25,
      active: true,
    };
  }, []);

  const scheduleMeteor = useCallback(() => {
    const delay = 6000 + Math.random() * 8000;
    meteorTimerRef.current = setTimeout(() => {
      if (!reducedMotion) spawnMeteor();
      scheduleMeteor();
    }, delay);
  }, [reducedMotion, spawnMeteor]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      setScrollProgress(progress);

      if (skyRef.current) {
        const glow = 0.03 + progress * 0.02;
        skyRef.current.style.background = `
          radial-gradient(ellipse 100% 70% at 50% ${18 - progress * 10}%,
            rgba(255,255,255,${glow}) 0%, transparent 55%),
          radial-gradient(ellipse 60% 40% at 85% 65%,
            rgba(255,255,255,${glow * 0.7}) 0%, transparent 50%),
          linear-gradient(180deg, #000000 0%, #080808 ${35 + progress * 8}%, #000000 100%)
        `;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const meteor = meteorRef.current;
      if (meteor?.active) {
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;

        const tailX = meteor.x - meteor.vx * meteor.length * 0.09;
        const tailY = meteor.y - meteor.vy * meteor.length * 0.09;

        const grad = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255,255,255,${meteor.opacity})`);
        grad.addColorStop(0.25, `rgba(255,255,255,${meteor.opacity * 0.45})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.shadowBlur = 14;
        ctx.shadowColor = "rgba(255,255,255,0.9)";
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${meteor.opacity})`;
        ctx.fill();

        if (meteor.y > h + 60 || meteor.x > w + 120) {
          meteor.active = false;
          meteorRef.current = null;
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    scheduleMeteor();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
      if (meteorTimerRef.current) clearTimeout(meteorTimerRef.current);
    };
  }, [reducedMotion, scheduleMeteor]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }} aria-hidden>
      <style>{`
        @keyframes star-twinkle {
          0%, 100% { opacity: var(--star-opacity); transform: scale(1); box-shadow: 0 0 6px rgba(255,255,255,0.8); }
          50% { opacity: calc(var(--star-opacity) * 0.15); transform: scale(0.85); box-shadow: 0 0 2px rgba(255,255,255,0.3); }
        }
        @keyframes orb-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(18px, -24px) scale(1.06); }
          66% { transform: translate(-14px, 12px) scale(0.96); }
        }
        @keyframes moon-glow {
          0%, 100% { box-shadow: 0 0 35px rgba(255,255,255,0.2), 0 0 70px rgba(255,255,255,0.08), inset -10px -6px 20px rgba(0,0,0,0.5); }
          50% { box-shadow: 0 0 50px rgba(255,255,255,0.35), 0 0 90px rgba(255,255,255,0.12), inset -10px -6px 20px rgba(0,0,0,0.5); }
        }
        @keyframes moon-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8px, -6px); }
        }
        .space-star {
          position: absolute;
          border-radius: 50%;
          background: #ffffff;
          animation: star-twinkle ease-in-out infinite;
        }
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          background: #ffffff;
          filter: blur(80px);
          animation: orb-float 18s ease-in-out infinite;
        }
      `}</style>

      <div ref={skyRef} className="absolute inset-0" style={{ background: SKY_BASE }} />

      {GLOW_ORBS.map((orb, i) => (
        <div
          key={i}
          className="glow-orb"
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            width: orb.size,
            height: orb.size,
            opacity: orb.opacity,
            animationDelay: orb.delay,
            zIndex: 1,
          }}
        />
      ))}

      <AuroraCanvas reducedMotion={reducedMotion} mouseX={mouse.x} mouseY={mouse.y} />

      <ParticleConstellation reducedMotion={reducedMotion} />

      {!reducedMotion && (
        <canvas ref={canvasRef} className="absolute inset-0" style={{ zIndex: 3 }} />
      )}

      <div className="absolute inset-0" style={{ zIndex: 3 }}>
        {twinkleStars.map((star) => (
          <div
            key={star.id}
            className="space-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y + scrollProgress * 3}%`,
              width: star.size,
              height: star.size,
              ["--star-opacity" as string]: star.opacity,
              animationDuration: reducedMotion ? "0s" : `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute"
        style={{
          top: "10%",
          right: "8%",
          zIndex: 4,
          animation: reducedMotion ? undefined : "moon-drift 20s ease-in-out infinite",
        }}
      >
        <div
          className="relative rounded-full"
          style={{
            width: 72,
            height: 72,
            background:
              "radial-gradient(circle at 38% 32%, #ffffff 0%, #d4d4d4 30%, #525252 72%, #0a0a0a 100%)",
            animation: reducedMotion ? undefined : "moon-glow 6s ease-in-out infinite",
          }}
        >
          <div className="absolute rounded-full bg-black/30" style={{ width: 14, height: 14, top: "22%", left: "28%" }} />
          <div className="absolute rounded-full bg-black/25" style={{ width: 9, height: 9, top: "48%", left: "52%" }} />
          <div className="absolute rounded-full bg-black/20" style={{ width: 6, height: 6, top: "62%", left: "35%" }} />
        </div>
      </div>

      <div
        className="absolute inset-0"
        style={{
          zIndex: 5,
          background: `
            radial-gradient(ellipse at center, transparent 42%, rgba(0,0,0,0.55) 100%),
            linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 14%, transparent 86%, rgba(0,0,0,0.45) 100%)
          `,
        }}
      />
    </div>
  );
}
