import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certificates } from "./components/Certificates";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { AnimatedBackground } from "./components/AnimatedBackground";

export default function App() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden cursor-none relative" style={{ background: '#08030D' }}>
      {/* Gradiente radial sutil de fundo */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(147, 51, 234, 0.08) 0%, rgba(147, 51, 234, 0.02) 30%, transparent 70%)',
        }}
      />
      
      {/* Partículas animadas */}
      <AnimatedBackground />
      
      {/* Conteúdo do site */}
      <div className="relative z-10">
        <CustomCursor />
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
    </div>
  );
}
