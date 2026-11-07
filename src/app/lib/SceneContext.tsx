import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_SCENE,
  SCENES,
  type SceneId,
  type SceneTheme,
} from "./scenes";

type SceneContextValue = {
  scene: SceneTheme;
  sceneId: SceneId;
  locked: boolean;
  setSceneId: (id: SceneId) => void;
  lockScene: (id: SceneId) => void;
  unlockScene: () => void;
};

const SceneContext = createContext<SceneContextValue | null>(null);

export function SceneProvider({ children }: { children: ReactNode }) {
  const [sceneId, setSceneIdState] = useState<SceneId>(DEFAULT_SCENE.id);
  const [lockedId, setLockedId] = useState<SceneId | null>(null);

  const setSceneId = useCallback((id: SceneId) => {
    setSceneIdState((current) => (current === id ? current : id));
  }, []);

  const lockScene = useCallback((id: SceneId) => {
    setLockedId((current) => (current === id ? current : id));
    setSceneIdState((current) => (current === id ? current : id));
  }, []);

  const unlockScene = useCallback(() => {
    setLockedId((current) => (current === null ? current : null));
  }, []);

  const effectiveId = lockedId ?? sceneId;
  const value = useMemo<SceneContextValue>(
    () => ({
      scene: SCENES[effectiveId],
      sceneId: effectiveId,
      locked: lockedId !== null,
      setSceneId,
      lockScene,
      unlockScene,
    }),
    [effectiveId, lockedId, setSceneId, lockScene, unlockScene],
  );

  return (
    <SceneContext.Provider value={value}>{children}</SceneContext.Provider>
  );
}

export function useScene() {
  const ctx = useContext(SceneContext);
  if (!ctx) {
    throw new Error("useScene must be used within SceneProvider");
  }
  return ctx;
}

/** Pick the closest [data-scene] section to the viewport center. */
export function pickNearestSceneId(
  excludeRail = true,
): SceneId | null {
  const nodes = Array.from(
    document.querySelectorAll<HTMLElement>("[data-scene]"),
  ).filter((node) => (excludeRail ? !node.closest("[data-scene-rail]") : true));

  if (!nodes.length) return null;

  const center = window.innerHeight * 0.42;
  let best: SceneId | null = null;
  let bestDist = Number.POSITIVE_INFINITY;

  for (const node of nodes) {
    const id = node.dataset.scene;
    if (!id || !(id in SCENES)) continue;
    const rect = node.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) continue;
    const mid = (rect.top + rect.bottom) / 2;
    const dist = Math.abs(mid - center);
    if (dist < bestDist) {
      bestDist = dist;
      best = id as SceneId;
    }
  }

  if (best) return best;
  if (window.scrollY < window.innerHeight * 0.4) return "hero";
  return null;
}
