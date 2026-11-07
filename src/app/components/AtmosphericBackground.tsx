import {
  AnimatePresence,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import { useEffect, useRef } from "react";
import { pickNearestSceneId, useScene } from "../lib/SceneContext";

export function AtmosphericBackground() {
  const { scene, locked, setSceneId } = useScene();
  const lockedRef = useRef(locked);
  const bg = useMotionValue(scene.bg);
  const glow = useMotionValue(scene.glow);
  const glowAlt = useMotionValue(scene.glowAlt);
  const wash = useMotionTemplate`radial-gradient(ellipse at 50% 18%, ${glow} 0%, transparent 52%), radial-gradient(ellipse at 82% 72%, ${glowAlt} 0%, transparent 48%), radial-gradient(ellipse at 12% 88%, ${glow} 0%, transparent 42%)`;

  lockedRef.current = locked;

  useEffect(() => {
    const syncFromDom = () => {
      if (lockedRef.current) return;
      const next = pickNearestSceneId();
      if (next) setSceneId(next);
    };

    syncFromDom();
    window.addEventListener("scroll", syncFromDom, { passive: true });
    window.addEventListener("resize", syncFromDom);

    return () => {
      window.removeEventListener("scroll", syncFromDom);
      window.removeEventListener("resize", syncFromDom);
    };
  }, [setSceneId]);

  useEffect(() => {
    if (!locked) {
      const next = pickNearestSceneId();
      if (next) setSceneId(next);
    }
  }, [locked, setSceneId]);

  useEffect(() => {
    const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
    const controls = [
      animate(bg, scene.bg, { duration: 0.65, ease }),
      animate(glow, scene.glow, { duration: 0.75, ease }),
      animate(glowAlt, scene.glowAlt, { duration: 0.75, ease }),
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
        <AnimatePresence initial={false}>
          <motion.div
            key={scene.id}
            className="ka-scene-name select-none absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
