import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Philosophy } from "./components/Philosophy";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Thesis } from "./components/Thesis";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Philosophy />
        <Skills />
        <Thesis />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
