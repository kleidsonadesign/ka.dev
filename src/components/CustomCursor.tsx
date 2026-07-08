import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Lerp factor para interpolação suave
    const CURSOR_LERP = 0.15; // Cursor principal
    const TRAIL_LERP = 0.08;  // Trilha com mais lag

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-interactive")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Função lerp (interpolação linear)
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    // Animação com requestAnimationFrame
    const animate = () => {
      // Interpolar posições
      cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, CURSOR_LERP);
      cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, CURSOR_LERP);
      
      trailPos.current.x = lerp(trailPos.current.x, mousePos.current.x, TRAIL_LERP);
      trailPos.current.y = lerp(trailPos.current.y, mousePos.current.y, TRAIL_LERP);

      // Aplicar transformações usando transform (hardware-accelerated)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - 10}px, ${cursorPos.current.y - 10}px, 0)`;
      }

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x - 4}px, ${trailPos.current.y - 4}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    
    const rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: "transform" }}
      >
        <div
          className={`w-5 h-5 rounded-full border-2 ${
            isHovering ? "border-primary bg-primary/30 shadow-[0_0_15px_rgba(147,51,234,0.6)]" : "border-white"
          }`}
          style={{
            transform: isHovering ? "scale(1.5)" : "scale(1)",
            transition: "transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease",
          }}
        />
      </div>

      {/* Trail cursor */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{ willChange: "transform" }}
      >
        <div
          className={`w-2 h-2 rounded-full ${
            isHovering ? "bg-primary shadow-[0_0_10px_rgba(147,51,234,0.8)]" : "bg-white/50"
          }`}
          style={{
            transform: isHovering ? "scale(1.5)" : "scale(1)",
            transition: "transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease",
          }}
        />
      </div>
    </>
  );
}
