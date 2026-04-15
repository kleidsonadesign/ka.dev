import { useEffect, useRef, useMemo, useState } from "react";

export function SpaceBackground() {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Gerar estrelas apenas uma vez usando useMemo
  const stars1 = useMemo(() => {
    const stars = [];
    for (let i = 0; i < 120; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      stars.push(`${x}px ${y}px #FFF`);
    }
    return stars.join(", ");
  }, []);

  const stars2 = useMemo(() => {
    const stars = [];
    for (let i = 0; i < 60; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      stars.push(`${x}px ${y}px #FFF`);
    }
    return stars.join(", ");
  }, []);

  const stars3 = useMemo(() => {
    const stars = [];
    for (let i = 0; i < 15; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      stars.push(`${x}px ${y}px #FFF`);
    }
    return stars.join(", ");
  }, []);

  // Gerar posições para estrelas brilhantes
  const brightStars = useMemo(() => {
    return [...Array(5)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 2,
    }));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const { x, y } = mousePosition;

      // Calcular offset do mouse (normalizado de -1 a 1)
      const mouseXOffset = (x / window.innerWidth - 0.5) * 2;
      const mouseYOffset = (y / window.innerHeight - 0.5) * 2;

      // Efeito de paralaxe combinado: scroll + mouse
      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate(${mouseXOffset * -5}px, ${scrollY * 0.1 + mouseYOffset * -5}px)`;
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate(${mouseXOffset * -15}px, ${scrollY * 0.3 + mouseYOffset * -15}px)`;
      }
      if (layer3Ref.current) {
        layer3Ref.current.style.transform = `translate(${mouseXOffset * -30}px, ${scrollY * 0.5 + mouseYOffset * -30}px)`;
      }
    };

    handleScroll(); // Chama imediatamente para aplicar posição inicial
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mousePosition]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {/* Fundo preto base */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Nebulosas/Galáxias sutis */}
      <div className="absolute inset-0">
        {/* Nebulosa 1 - Roxo escuro */}
        <div
          className="absolute opacity-10"
          style={{
            top: "15%",
            right: "20%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(138, 43, 226, 0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        ></div>

        {/* Nebulosa 2 - Azul escuro */}
        <div
          className="absolute opacity-10"
          style={{
            bottom: "20%",
            left: "15%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(0, 191, 255, 0.2) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        ></div>

        {/* Galáxia espiral sutil */}
        <div
          className="absolute opacity-5"
          style={{
            top: "50%",
            left: "50%",
            width: "600px",
            height: "600px",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        ></div>
      </div>

      {/* Camada 1: Estrelas Distantes (pequenas, opacas, movimento lento) */}
      <div
        ref={layer1Ref}
        className="absolute inset-0 transition-transform duration-0"
        style={{
          width: "200%",
          height: "200%",
          top: "-50%",
          left: "-50%",
        }}
      >
        <div
          className="w-1 h-1 rounded-full"
          style={{
            boxShadow: stars1,
            opacity: 0.4,
          }}
        ></div>
      </div>

      {/* Camada 2: Estrelas Médias (médias, semi-brilhantes, movimento médio) */}
      <div
        ref={layer2Ref}
        className="absolute inset-0 transition-transform duration-0"
        style={{
          width: "200%",
          height: "200%",
          top: "-50%",
          left: "-50%",
        }}
      >
        <div
          className="w-[1.5px] h-[1.5px] rounded-full"
          style={{
            boxShadow: stars2,
            opacity: 0.6,
          }}
        ></div>
      </div>

      {/* Camada 3: Estrelas Próximas (grandes, brilhantes, movimento rápido) */}
      <div
        ref={layer3Ref}
        className="absolute inset-0 transition-transform duration-0"
        style={{
          width: "200%",
          height: "200%",
          top: "-50%",
          left: "-50%",
        }}
      >
        <div
          className="w-[2px] h-[2px] rounded-full"
          style={{
            boxShadow: stars3,
            opacity: 0.9,
            filter: "drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))",
          }}
        ></div>
      </div>

      {/* Algumas estrelas brilhantes com efeito pulsante */}
      <div className="absolute inset-0">
        {brightStars.map((star, i) => (
          <div
            key={i}
            className="absolute w-[3px] h-[3px] rounded-full bg-white animate-pulse"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              boxShadow: "0 0 4px 2px rgba(255, 255, 255, 0.5)",
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}