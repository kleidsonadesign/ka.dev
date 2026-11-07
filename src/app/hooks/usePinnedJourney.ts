import { useMotionValue } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useScene } from "../lib/SceneContext";
import type { SceneId } from "../lib/scenes";

export function useDesktopJourney(minWidth = 1024) {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia(`(min-width: ${minWidth}px)`).matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  });

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(mq.matches && !reduced.matches);
    sync();
    mq.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
    };
  }, [minWidth]);

  return enabled;
}

type Options = {
  enabled: boolean;
  count: number;
  sceneForIndex?: (index: number) => SceneId | null | undefined;
};

export function usePinnedJourney({ enabled, count, sceneForIndex }: Options) {
  const { lockScene, unlockScene } = useScene();
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const safeCount = Math.max(count, 1);

  useLayoutEffect(() => {
    const measure = () => setViewportWidth(window.innerWidth);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!enabled) {
      x.set(0);
      setActiveIndex(0);
      unlockScene();
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let frame = 0;
    let pinned = false;

    const update = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = Math.max(container.offsetHeight - vh, 1);
      const rawPassed = -rect.top;
      const width = window.innerWidth;

      if (rawPassed < 0 || rawPassed > total) {
        x.set(rawPassed < 0 ? 0 : -(safeCount - 1) * width);
        setActiveIndex(rawPassed < 0 ? 0 : safeCount - 1);
        if (pinned) {
          pinned = false;
          unlockScene();
        }
        return;
      }

      const p = rawPassed / total;
      const translate = -p * (safeCount - 1) * width;
      const idx = Math.min(
        safeCount - 1,
        Math.max(0, Math.round(p * (safeCount - 1))),
      );

      x.set(translate);
      setActiveIndex((current) => (current === idx ? current : idx));
      pinned = true;

      const sceneId = sceneForIndex?.(idx);
      if (sceneId) lockScene(sceneId);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      unlockScene();
    };
  }, [enabled, safeCount, sceneForIndex, lockScene, unlockScene, x]);

  return {
    containerRef,
    x,
    activeIndex,
    slideWidth: viewportWidth || 1200,
  };
}
