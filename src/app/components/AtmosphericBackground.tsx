import {
  AnimatePresence,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import { useEffect, useState } from "react";
import {
  DEFAULT_SCENE,
  SCENES,
  type SceneId,
  type SceneTheme,
} from "../lib/scenes";

function isSceneId(value: string | null): value is SceneId {
  return !!value && value in SCENES;
}

export function AtmosphericBackground() {
  const [scene, setScene] = useState<SceneTheme>(DEFAULT_SCENE);
  const bg = useMotionValue(DEFAULT_SCENE.bg);
  const glow = useMotionValue(DEFAULT_SCENE.glow);
  const glowAlt = useMotionValue(DEFAULT_SCENE.glowAlt);
  const wash = useMotionTemplate`radial-gradient(ellipse at 50% 18%, ${glow} 0%, transparent 52%), radial-gradient(ellipse at 82% 72%, ${glowAlt} 0%, transparent 48%), radial-gradient(ellipse at 12% 88%, ${glow} 0%, transparent 42%)`;

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scene]"),
    );
    if (!nodes.length) return;

    const ratios = new Map<Element, number>();

    const pick = () => {
      let best: Element | null = null;
      let bestRatio = 0;
      ratios.forEach((ratio, el) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = el;
        }
      });

      if (!best || bestRatio < 0.08) return;
      const id = (best as HTMLElement).dataset.scene ?? null;
      if (!isSceneId(id)) return;
      setScene((current) => (current.id === id ? current : SCENES[id]));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        pick();
      },
      {
        threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
        rootMargin: "-18% 0px -28% 0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));
    pick();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
    const controls = [
      animate(bg, scene.bg, { duration: 0.95, ease }),
      animate(glow, scene.glow, { duration: 1.05, ease }),
      animate(glowAlt, scene.glowAlt, { duration: 1.05, ease }),
    ];

    document.documentElement.style.setProperty("--ka-journey-bg", scene.bg);
    document.documentElement.style.setProperty("--ka-journey-ink", scene.ink);

    return () => controls.forEach((c) => c.stop());
  }, [scene, bg, glow, glowAlt]);

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-0 z-0"
        style={{ backgroundColor: bg }}
      />
      <motion.div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ backgroundImage: wash, opacity: 0.9 }}
      />

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="ka-aurora ka-aurora-a" />
        <div className="ka-aurora ka-aurora-b" />
        <div className="ka-aurora ka-aurora-c" />
        <div className="ka-neon-scan" />
      </div>

      <div className="ka-grid" />
      <div className="ka-grain" />

      <div
        aria-hidden
        className="fixed inset-0 z-[2] pointer-events-none overflow-hidden flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.id}
            className="ka-scene-name select-none"
            initial={{ opacity: 0, y: 36, scale: 0.96, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -28, scale: 1.03, filter: "blur(8px)" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {scene.name}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/70 to-transparent pointer-events-none z-[3]" />
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-[3]" />
    </>
  );
}
