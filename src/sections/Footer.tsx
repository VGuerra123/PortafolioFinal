import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import ParticleBackground from '../ui/ParticleBackground';

const Footer: React.FC = () => (
  <motion.footer
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative overflow-hidden text-gray-300 pt-16 pb-10 px-6"
  >
    {/* Fondo con partículas */}
    <ParticleBackground />

    {/* Fusión con la sección anterior */}
    <div className="absolute -top-16 left-0 w-full h-16 bg-gradient-to-b from-transparent to-[#0f172a]" />

    {/* Gradiente base */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-[#0e131f] -z-20" />

    {/* -------------------- Contenido -------------------- */}
    <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl mx-auto">
      {/* Social + back-to-top */}
      <div className="flex flex-wrap justify-center gap-4">
        {[
          { href: 'https://github.com/VGuerra123', Icon: Github, label: 'GitHub' },
          { href: 'https://www.linkedin.com/in/víctor-guerra', Icon: Linkedin, label: 'LinkedIn' },
          { href: 'mailto:v.guerra.dev@gmail.com', Icon: Mail, label: 'Email' },
        ].map(({ href, Icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500 hover:text-white transition-colors backdrop-blur-md shadow-sm"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            aria-label={label}
          >
            <Icon size={20} />
          </motion.a>
        ))}

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-2 rounded-full bg-cyan-600 text-white hover:bg-cyan-500 transition-colors shadow-lg"
          aria-label="Volver arriba"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>

      {/* Leyenda profesional */}
      <motion.p
        className="text-center text-sm md:text-base font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
      -- Analista de Sistemas & Desarrollador Web --
        <br className="hidden sm:block" />
        <span className="block mt-1 text-xs md:text-sm font-normal text-gray-400">
        Víctor Guerra Zavala  
        </span>
      </motion.p>
    </div>
  </motion.footer>
);

export default Footer;
