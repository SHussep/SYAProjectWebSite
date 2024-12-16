import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Pricing />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;