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
    setLockedId(id);
    setSceneIdState(id);
  }, []);

  const unlockScene = useCallback(() => {
    setLockedId(null);
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
