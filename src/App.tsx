// src/App.tsx

import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './ui/LoadingScreen';
import Header from './sections/Header';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Cursor from './ui/Cursor';
import ScrollProgress from './ui/ScrollProgress';
import ParticleBackground from './ui/ParticleBackground';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Para evitar mismatches SSR/CSR y detectar preferencia de tema
  useEffect(() => {
    setMounted(true);
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  // Aplicar clase y fondo según modo oscuro
  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', darkMode);
      document.body.style.backgroundColor = darkMode ? '#11111b' : '#ffffff';
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  // Hasta que hydration complete, nada
  if (!mounted) return null;
  // Mostrar LoadingScreen hasta que termine
  if (!loadingComplete) {
    return <LoadingScreen onComplete={() => setLoadingComplete(true)} />;
  }

  // Una vez cargado, el resto de la app
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col min-h-screen">
        <ParticleBackground />
        <Cursor />
        <ScrollProgress />
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">
          <Hero />
          <AboutMe />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default App;
