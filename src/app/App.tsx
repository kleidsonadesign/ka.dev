import { LanguageProvider } from "../i18n/LanguageContext";
import { AtmosphericBackground } from "./components/AtmosphericBackground";
import { IntroOverlay } from "./components/IntroOverlay";
import { MagneticCursor } from "./components/MagneticCursor";
import { SiteNav } from "./components/SiteNav";
import { Hero } from "./components/Hero";
import { TechRibbon } from "./components/TechRibbon";
import { SelectedWork } from "./components/SelectedWork";
import { GitHubStats } from "./components/GitHubStats";
import { Toolkit } from "./components/Toolkit";
import { Trajectory } from "./components/Trajectory";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden relative text-[var(--ka-text)]">
        <AtmosphericBackground />
        <MagneticCursor />
        <IntroOverlay />
        <SiteNav />
        <main className="relative z-10">
          <Hero />
          <TechRibbon />
          <SelectedWork />
          <GitHubStats />
          <Toolkit />
          <Trajectory />
          <Certifications />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}
