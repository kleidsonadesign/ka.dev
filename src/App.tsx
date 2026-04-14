import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certificates } from "./components/Certificates";
import { Experience } from "./components/Experience";

import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


export default function App() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative" style={{ background: '#0A0A0A' }}>
      {/* Conteúdo do site */}
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
