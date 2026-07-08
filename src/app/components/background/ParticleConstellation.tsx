import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

type ParticleConstellationProps = {
  reducedMotion: boolean;
};

export function ParticleConstellation({ reducedMotion }: ParticleConstellationProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      background: { color: { value: "transparent" } },
      particles: {
        number: {
          value: reducedMotion ? 40 : 95,
          density: { enable: true, width: 1200, height: 800 },
        },
        color: {
          value: ["#ffffff", "#f5f5f5", "#e5e5e5", "#fafafa"],
        },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.2, max: 0.85 },
          animation: {
            enable: !reducedMotion,
            speed: 0.6,
            sync: false,
          },
        },
        size: {
          value: { min: 0.6, max: 2.5 },
          animation: {
            enable: !reducedMotion,
            speed: 1.5,
            sync: false,
          },
        },
        links: {
          enable: !reducedMotion,
          distance: 145,
          color: "#ffffff",
          opacity: 0.18,
          width: 1,
        },
        move: {
          enable: !reducedMotion,
          speed: { min: 0.12, max: 0.5 },
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: !reducedMotion,
            mode: "grab",
          },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 170,
            links: { opacity: 0.55, blink: true },
          },
        },
      },
    }),
    [reducedMotion],
  );

  if (!ready) return null;

  return (
    <Particles
      id="portfolio-particles"
      className="absolute inset-0"
      style={{ zIndex: 2 }}
      options={options}
    />
  );
}
