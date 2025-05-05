// src/ui/LoadingScreen.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../public/assets/Contact/fox-avatar-contact.png';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete = () => {} }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let finished = false;
    const id = setInterval(() => {
      setProgress(prev => {
        const next = Math.min(100, prev + Math.random() * 15);
        if (next === 100 && !finished) {
          finished = true;
          clearInterval(id);
          onComplete();
        }
        return next;
      });
    }, 200);

    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#0e0e2a] to-[#00010f] z-50 flex flex-col items-center justify-center text-[#e0e0ff] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo con anillo pulsante */}
      <motion.div
        className="relative flex items-center justify-center mb-8"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-[#00e5ff]/50 animate-ping" />
        <motion.img
          src={logo}
          alt="Avatar"
          className="relative w-20 h-20 rounded-full shadow-lg"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
        />
      </motion.div>

      {/* Título con degradado */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00e5ff] to-[#ff00e5]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Bienvenid@
      </motion.h1>

      {/* Barra de progreso */}
      <div className="w-64 md:w-96 h-3 bg-[#151542] rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-gradient-to-r from-[#00e5ff] to-[#ff00e5]"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
      </div>

      {/* Texto de porcentaje */}
      <motion.p
        className="text-sm md:text-base text-[#a0a0d0] mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Inicializando Portafolio… {progress}%
      </motion.p>

      {/* Footer informativo */}
      <motion.div
        className="absolute bottom-4 text-xs text-center text-[#a0a0d0] w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.8 }}
      >
        <p>--Analista de Sistemas y Desarrollador Web--</p>
        <p>© 2025 Todos los derechos reservados</p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
