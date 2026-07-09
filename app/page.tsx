import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Certificates } from "@/components/sections/Certificates";
import { Education } from "@/components/sections/Education";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <RevealObserver />
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* cv-auto defers layout/paint of below-fold sections until scrolled near */}
        <div className="cv-auto">
          <Services />
        </div>
        <div className="cv-auto">
          <Skills />
        </div>
        <div className="cv-auto">
          <Projects />
        </div>
        <div className="cv-auto">
          <Experience />
        </div>
        <div className="cv-auto">
          <Achievements />
        </div>
        <div className="cv-auto">
          <Certificates />
        </div>
        <div className="cv-auto">
          <Education />
        </div>
        <div className="cv-auto">
          <Testimonials />
        </div>
        <div className="cv-auto">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
