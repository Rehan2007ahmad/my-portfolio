import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Services from './sections/Services';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-luxury-black min-h-screen text-luxury-white font-body selection:bg-luxury-gold selection:text-luxury-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
