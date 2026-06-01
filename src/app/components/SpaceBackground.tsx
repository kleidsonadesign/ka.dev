import { useEffect, useRef, useMemo, useState, useCallback } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface Planet {
  id: string;
  x: number;
  y: number;
  size: number;
  scrollFactor: number;
  gradient: string;
  ring?: boolean;
  crater?: boolean;
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
      size: 1 + r3 * 1.2,
      opacity: 0.2 + r3 * 0.35,
      duration: 3 + r4 * 5,
      delay: r3 * 6,
    };
  });
}

const PLANETS: Planet[] = [
  {
    id: "p1",
    x: 78,
    y: 22,
    size: 36,
    scrollFactor: 0.15,
    gradient:
      "radial-gradient(circle at 32% 28%, rgba(220,220,220,0.9) 0%, rgba(120,120,120,0.6) 35%, rgba(40,40,40,0.95) 70%, rgba(0,0,0,1) 100%)",
    crater: true,
  },
  {
    id: "p2",
    x: 12,
    y: 55,
    size: 22,
    scrollFactor: 0.22,
    gradient:
      "radial-gradient(circle at 40% 35%, rgba(180,180,180,0.7) 0%, rgba(80,80,80,0.5) 45%, rgba(20,20,20,1) 100%)",
    ring: true,
  },
  {
    id: "p3",
    x: 88,
    y: 72,
    size: 14,
    scrollFactor: 0.28,
    gradient:
      "radial-gradient(circle at 35% 30%, rgba(200,200,200,0.8) 0%, rgba(100,100,100,0.4) 50%, rgba(30,30,30,1) 100%)",
  },
];

export function SpaceBackground() {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const meteorRef = useRef<Meteor | null>(null);
  const rafRef = useRef<number>(0);
  const meteorTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const twinkleStars = useMemo(() => generateStars(70, 1), []);

  const dustStars = useMemo(() => {
    const stars: string[] = [];
    for (let i = 0; i < 100; i++) {
      const x = Math.floor(seededRandom(i) * 2000);
      const y = Math.floor(seededRandom(i + 300) * 2800);
      const alpha = 0.1 + seededRandom(i + 600) * 0.2;
      stars.push(`${x}px ${y}px rgba(255,255,255,${alpha})`);
    }
    return stars.join(", ");
  }, []);

  const spawnMeteor = useCallback(() => {
    const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
    const speed = 10 + Math.random() * 6;
    meteorRef.current = {
      x: Math.random() * window.innerWidth,
      y: -30,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      length: 60 + Math.random() * 80,
      opacity: 0.5,
      active: true,
    };
  }, []);

  const scheduleMeteor = useCallback(() => {
    const delay = 12000 + Math.random() * 10000;
    meteorTimerRef.current = setTimeout(() => {
      if (!reducedMotion) spawnMeteor();
      scheduleMeteor();
    }, delay);
  }, [reducedMotion, spawnMeteor]);

  const applyParallax = useCallback((sy: number) => {
    if (layer1Ref.current) {
      layer1Ref.current.style.transform = `translate3d(0, ${sy * 0.04}px, 0)`;
    }
    if (layer2Ref.current) {
      layer2Ref.current.style.transform = `translate3d(0, ${sy * 0.1}px, 0)`;
    }
    if (moonRef.current) {
      moonRef.current.style.transform = `translate3d(0, ${sy * 0.08}px, 0)`;
    }
    if (nebulaRef.current) {
      nebulaRef.current.style.transform = `translate3d(0, ${sy * 0.06}px, 0)`;
    }
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

        const grad = ctx.createLinearGradient(
          meteor.x,
          meteor.y,
          meteor.x - meteor.vx * meteor.length * 0.1,
          meteor.y - meteor.vy * meteor.length * 0.1,
        );
        grad.addColorStop(0, `rgba(255,255,255,${meteor.opacity})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(
          meteor.x - meteor.vx * meteor.length * 0.08,
          meteor.y - meteor.vy * meteor.length * 0.08,
        );
        ctx.stroke();

        if (meteor.y > h + 50 || meteor.x > w + 100) {
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

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sy = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(sy / maxScroll, 1) : 0;

      setScrollY(sy);
      setScrollProgress(progress);
      applyParallax(sy);

      if (skyRef.current) {
        const deep = progress;
        skyRef.current.style.background = `
          radial-gradient(ellipse 100% 60% at 50% ${15 - deep * 10}%,
            rgba(255,255,255,${0.02 + deep * 0.02}) 0%, transparent 50%),
          linear-gradient(180deg,
            #000000 0%,
            rgb(${Math.round(2 + deep * 5)}, ${Math.round(2 + deep * 5)}, ${Math.round(3 + deep * 8)}) 100%)
        `;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [applyParallax]);

  const nebulaOpacity = 0.04 + scrollProgress * 0.05;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }} aria-hidden>
      <style>{`
        @keyframes star-twinkle {
          0%, 100% { opacity: var(--star-opacity); }
          50% { opacity: calc(var(--star-opacity) * 0.25); }
        }
        @keyframes moon-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(6px, -4px); }
        }
        .space-star {
          position: absolute;
          border-radius: 50%;
          background: #fff;
          animation: star-twinkle ease-in-out infinite;
        }
      `}</style>

      <div ref={skyRef} className="absolute inset-0 bg-black" />

      <div ref={nebulaRef} className="absolute inset-0" style={{ opacity: nebulaOpacity }}>
        <div
          className="absolute"
          style={{
            top: "20%",
            right: "10%",
            width: "min(400px, 50vw)",
            height: "min(400px, 50vw)",
            background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div
        ref={layer1Ref}
        className="absolute"
        style={{ width: "200%", height: "220%", top: "-60%", left: "-50%" }}
      >
        <div className="w-px h-px rounded-full" style={{ boxShadow: dustStars }} />
      </div>

      {!reducedMotion && (
        <canvas ref={canvasRef} className="absolute inset-0" style={{ zIndex: 2 }} />
      )}

      <div ref={layer2Ref} className="absolute inset-0" style={{ zIndex: 2 }}>
        {twinkleStars.map((star) => (
          <div
            key={star.id}
            className="space-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
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
        ref={moonRef}
        className="absolute"
        style={{
          top: "12%",
          right: "10%",
          zIndex: 3,
          animation: reducedMotion ? undefined : "moon-drift 24s ease-in-out infinite",
        }}
      >
        <div
          className="relative rounded-full"
          style={{
            width: 64,
            height: 64,
            background:
              "radial-gradient(circle at 38% 32%, #e8e8e8 0%, #aaa 40%, #555 75%, #1a1a1a 100%)",
            boxShadow: "inset -10px -6px 20px rgba(0,0,0,0.45)",
          }}
        >
          <div className="absolute rounded-full bg-black/20" style={{ width: 12, height: 12, top: "24%", left: "30%" }} />
          <div className="absolute rounded-full bg-black/15" style={{ width: 8, height: 8, top: "50%", left: "55%" }} />
        </div>
      </div>

      <div className="absolute inset-0" style={{ zIndex: 3 }}>
        {PLANETS.map((planet) => (
          <div
            key={planet.id}
            className="absolute"
            style={{
              left: `${planet.x}%`,
              top: `${planet.y + scrollProgress * 2}%`,
              transform: `translate3d(0, ${scrollY * planet.scrollFactor}px, 0)`,
            }}
          >
            {planet.ring && (
              <div
                className="absolute rounded-full border border-white/15"
                style={{
                  width: planet.size * 2,
                  height: planet.size * 0.45,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%) rotate(-18deg)",
                }}
              />
            )}
            <div
              className="relative rounded-full"
              style={{
                width: planet.size,
                height: planet.size,
                background: planet.gradient,
                boxShadow: `inset -${planet.size * 0.18}px -${planet.size * 0.12}px ${planet.size * 0.35}px rgba(0,0,0,0.55)`,
              }}
            >
              {planet.crater && (
                <div
                  className="absolute rounded-full bg-black/25"
                  style={{ width: "18%", height: "18%", top: "32%", left: "28%" }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{
          zIndex: 4,
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%)",
        }}
      />
    </div>
  );
}
