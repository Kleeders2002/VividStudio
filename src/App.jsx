import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Projects from "./components/Projects.jsx";
import Timeline from "./components/Timeline.jsx";
import Testimonials from "./components/Testimonials.jsx";
import TechStack from "./components/TechStack.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 font-sans text-slate-200 antialiased">
        {/* Grano sutil sobre toda la página */}
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Process />
          <Projects />
          <Timeline />
          <Testimonials />
          <TechStack />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
