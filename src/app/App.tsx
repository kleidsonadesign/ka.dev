import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { TechMarquee } from "./components/TechMarquee";
import { TrajectorySection } from "./components/TrajectorySection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ContactSection } from "./components/ContactSection";
import { SpaceBackground } from "./components/SpaceBackground";
import { LanguageProvider } from "../i18n/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
    <div className="min-h-screen bg-black dark overflow-x-hidden relative">
      {/* Fundo estrelado dinâmico com paralaxe */}
      <SpaceBackground />
      
      {/* Vinheta suave — o fundo já traz profundidade e aurora */}
      <div className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" style={{ zIndex: 2 }} />
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" style={{ zIndex: 2 }} />
      
      <Navigation />
      <main className="relative" style={{ zIndex: 10 }}>
        <HeroSection />
        <TechMarquee />
        <TrajectorySection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
    </LanguageProvider>
  );
}