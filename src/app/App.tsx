import { LanguageProvider } from "../i18n/LanguageContext";
import { SceneProvider } from "./lib/SceneContext";
import { AtmosphericBackground } from "./components/AtmosphericBackground";
import { IntroOverlay } from "./components/IntroOverlay";
import { MagneticCursor } from "./components/MagneticCursor";
import { SiteNav } from "./components/SiteNav";
import { Hero } from "./components/Hero";
import { TechRibbon } from "./components/TechRibbon";
import { SelectedWork } from "./components/SelectedWork";
import { GitHubStats } from "./components/GitHubStats";
import { Trajectory } from "./components/Trajectory";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <LanguageProvider>
      <SceneProvider>
        <div className="min-h-screen relative text-[var(--ka-text)]">
          <AtmosphericBackground />
          <MagneticCursor />
          <IntroOverlay />
          <SiteNav />
          <main className="relative z-10">
            <Hero />
            <TechRibbon />
            <SelectedWork />
            <GitHubStats />
            <Trajectory />
            <Certifications />
            <Contact />
          </main>
        </div>
      </SceneProvider>
    </LanguageProvider>
  );
}
