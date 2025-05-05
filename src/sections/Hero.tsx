import React from 'react';
import { motion } from 'framer-motion';
import { aboutMe } from '../lib/data';
import ParticleBackground from '../ui/ParticleBackground';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-primary-900/80 via-dark-900 to-dark-800"
    >
      <ParticleBackground />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-block mb-8 p-1 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 shadow-lg"
        >
          <motion.img
            src={aboutMe.profileImage}
            alt={aboutMe.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Nombre */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 drop-shadow"
        >
          {aboutMe.name}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-2 text-base md:text-xl text-gray-300 opacity-80"
        >
          -- {aboutMe.title} --
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-6 max-w-xl mx-auto text-white text-base md:text-lg leading-relaxed"
        >
          {aboutMe.tagline.before}
          <span className="text-primary-400 font-semibold">{aboutMe.tagline.highlight}</span>
          {aboutMe.tagline.after}
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-8 inline-block px-8 py-3 md:px-10 md:py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-base md:text-lg font-semibold shadow-lg hover:opacity-90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver proyectos
        </motion.a>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm opacity-60"
      >
        Scroll Down ↓
      </motion.div>
    </section>
  );
};

export default Hero;
