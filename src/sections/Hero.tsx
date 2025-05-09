import React from 'react';
import { motion } from 'framer-motion';
import { aboutMe } from '../lib/data';
import ParticleBackground from '../ui/ParticleBackground';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-primary-900/90 via-dark-900 to-dark-800"
    >
      <ParticleBackground />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-screen-xl px-6 sm:px-8 lg:px-16">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mb-6 p-1 rounded-full bg-gradient-to-tr from-primary-400 to-secondary-400 shadow-2xl"
          whileHover={{ rotate: 3, scale: 1.02 }}
        >
          <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white">
            <motion.img
              src={aboutMe.profileImage}
              alt={aboutMe.name}
              className="w-full h-full object-cover"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
          </div>
          <div className="absolute inset-0 rounded-full animate-pulse-slow bg-white opacity-10" />
        </motion.div>

        {/* Nombre */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {aboutMe.name}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-1 text-xs xs:text-sm sm:text-base md:text-lg text-primary-300"
        >
          {aboutMe.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg text-xs xs:text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed"
        >
          {aboutMe.tagline.before}
          <span className="text-secondary-400 font-medium"> {aboutMe.tagline.highlight} </span>
          {aboutMe.tagline.after}
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 px-5 py-2 xs:px-6 xs:py-2 sm:px-8 sm:py-3 rounded-full bg-secondary-500 text-white text-xs xs:text-sm sm:text-base font-semibold shadow-lg hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-500"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          Ver proyectos
        </motion.a>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs xs:text-sm"
      >
        <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
};

export default Hero;
