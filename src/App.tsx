import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Generator from './components/Generator';
import Examples from './components/Examples';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'FabricAI - Custom Brand Creation';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Generator />
        <Examples />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;