import { useEffect, useRef } from "react";

type AuroraCanvasProps = {
  reducedMotion: boolean;
  mouseX: number;
  mouseY: number;
};

export function AuroraCanvas({ reducedMotion, mouseX, mouseY }: AuroraCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const bands = [
      { color: "rgba(255, 255, 255, 0.07)", speed: 0.00035, amp: 90, freq: 0.0028, y: 0.28 },
      { color: "rgba(255, 255, 255, 0.05)", speed: 0.00028, amp: 70, freq: 0.0035, y: 0.38 },
      { color: "rgba(255, 255, 255, 0.09)", speed: 0.00042, amp: 55, freq: 0.0042, y: 0.48 },
      { color: "rgba(255, 255, 255, 0.04)", speed: 0.00031, amp: 110, freq: 0.0022, y: 0.58 },
      { color: "rgba(255, 255, 255, 0.06)", speed: 0.00025, amp: 65, freq: 0.0031, y: 0.68 },
    ];

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      timeRef.current += 16;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "screen";

      const parallaxX = (mouseX - w / 2) * 0.02;
      const parallaxY = (mouseY - h / 2) * 0.02;

      for (const band of bands) {
        const baseY = h * band.y + parallaxY;
        const t = timeRef.current * band.speed;

        const gradient = ctx.createLinearGradient(0, baseY - band.amp, 0, baseY + band.amp * 2);
        gradient.addColorStop(0, "rgba(0,0,0,0)");
        gradient.addColorStop(0.35, band.color);
        gradient.addColorStop(0.65, band.color);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.beginPath();
        ctx.moveTo(0, h);

        for (let x = 0; x <= w; x += 8) {
          const wave =
            Math.sin(x * band.freq + t * 6) * band.amp +
            Math.sin(x * band.freq * 1.7 + t * 4) * (band.amp * 0.35) +
            Math.cos(x * band.freq * 0.6 + t * 3) * (band.amp * 0.2);
          ctx.lineTo(x + parallaxX, baseY + wave);
        }

        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion, mouseX, mouseY]);

  if (reducedMotion) return null;

  return <canvas ref={canvasRef} className="absolute inset-0" style={{ zIndex: 1 }} aria-hidden />;
}
