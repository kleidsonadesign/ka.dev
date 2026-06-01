import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { TechMarquee } from "./components/TechMarquee";
import { TrajectorySection } from "./components/TrajectorySection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ContactSection } from "./components/ContactSection";
import { SpaceBackground } from "./components/SpaceBackground";

export default function App() {
  return (
    <div className="min-h-screen bg-black dark overflow-x-hidden relative">
      {/* Fundo estrelado dinâmico com paralaxe */}
      <SpaceBackground />
      
      {/* Névoa/Gradiente atmosférico no topo */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" style={{ zIndex: 2 }}></div>
      
      {/* Névoa/Gradiente atmosférico na base */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" style={{ zIndex: 2 }}></div>
      
      <Navigation />
      <main className="relative" style={{ zIndex: 10 }}>
        <HeroSection />
        <TechMarquee />
        <TrajectorySection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
}