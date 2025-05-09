// src/ui/LoadingScreen.tsx
import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, Variants, useCycle } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import logo from '../../public/assets/fox-avatar.webp';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const statusMessages = [
  'Iniciando motores…',
  'Preparando tu experiencia…',
  'Optimizando componentes…',
  'Cargando portafolio…',
];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete = () => {} }) => {
  const [progress, setProgress] = useState(0);
  const [msgIndex, cycleMsg] = useCycle(0, 1, 2, 3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax 3D
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [20, -20]);
  const rotateY = useTransform(x, [-50, 50], [-20, 20]);

  // Carga de partículas
  const particlesInit = async (main: any) => await loadSlim(main);

  // Ciclo de mensajes
  useEffect(() => {
    const t = setInterval(cycleMsg, 1600);
    return () => clearInterval(t);
  }, [cycleMsg]);

  // Progreso simulado
  useEffect(() => {
    let done = false;
    const id = setInterval(() => {
      setProgress(p => {
        const nxt = Math.min(100, p + Math.random() * 12);
        if (nxt === 100 && !done) {
          done = true;
          clearInterval(id);
          setTimeout(onComplete, 550);
        }
        return nxt;
      });
    }, 200);
    return () => clearInterval(id);
  }, [onComplete]);

  // Ring params
  const radius = 60;
  const circ   = 2 * Math.PI * radius;
  const offset = circ - (progress / 100) * circ;

  // Mouse move handler
  const handleMouse = (e: React.MouseEvent) => {
    const rect = containerRef.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set(e.clientX - cx);
    y.set(e.clientY - cy);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(circle at center, rgba(30,20,60,0.7), #000000 80%)`,
        animation: 'bgShift 10s infinite alternate',
      }}
      onMouseMove={handleMouse}
    >
      <style>{`
        @keyframes bgShift {
          0%   { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
      `}</style>

      {/* Partículas suaves */}
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 30 },
            color: { value: ['#00e5ff', '#ff00e5', '#7c3aed'] },
            opacity: {
              value: 0.2,
              animation: { enable: true, speed: 0.4, minimumValue: 0.1 },
            },
            size: { value: { min: 1, max: 4 } },
            move: { enable: true, speed: 0.7 },
            links: { enable: true, distance: 130, opacity: 0.12 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: 'grab' } },
            modes: { grab: { distance: 100, links: { opacity: 0.25 } } },
          },
        }}
        className="absolute inset-0"
      />

      <motion.div
        ref={containerRef}
        className="relative flex flex-col items-center gap-6 p-8 rounded-3xl
                   bg-[rgba(255,255,255,0.1)] backdrop-blur-lg border border-white/10
                   shadow-xl"
        style={{ perspective: 600 }}
      >
        <motion.div
          style={{ x, y, rotateX, rotateY }}
          className="relative flex items-center justify-center"
        >
          {/* Ring rotatorio con shimmer */}
          <motion.svg
            width={radius * 2 + 16}
            height={radius * 2 + 16}
            className="rotate-[-90deg]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <defs>
              <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00e5ff" />
                <stop offset="50%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#ff00e5" />
              </linearGradient>
            </defs>
            <circle
              cx="50%" cy="50%" r={radius}
              stroke="#2b2e5b" strokeWidth="8" fill="transparent"
            />
            <motion.circle
              cx="50%" cy="50%" r={radius}
              stroke="url(#glowGrad)" strokeWidth="8"
              strokeLinecap="round" fill="transparent"
              strokeDasharray={circ}
              strokeDashoffset={offset}
              style={{
                filter: 'drop-shadow(0 0 8px rgba(128,0,255,0.6))',
                strokeDashoffset: offset,
              }}
              animate={{ strokeDashoffset: [-circ, offset] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </motion.svg>

          {/* Avatar – solo tilt al hover */}
          <motion.img
            src={logo}
            alt="Avatar – zorro digital"
            className="absolute w-24 h-24 rounded-full object-cover
                       shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            whileHover={{ rotate: [0, 5, -5, 0], scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
          />
        </motion.div>

        {/* Título con ligero shimmer textual */}
        <motion.h1
          className="font-extrabold text-[clamp(2rem,5vw,3rem)]
                     bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500
                     bg-clip-text text-transparent tracking-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          transition={{ type: 'spring', stiffness: 85, damping: 14 }}
        >
          Bienvenid@
        </motion.h1>

        {/* Mensaje dinámico */}
        <div className="min-h-6 text-base md:text-lg text-slate-200" aria-live="polite">
          <Typewriter
            key={msgIndex}
            options={{
              strings: [statusMessages[msgIndex]],
              autoStart: true,
              loop: false,
              delay: 45,
              deleteSpeed: 28,
            }}
          />
        </div>

        {/* Porcentaje */}
        <motion.p
          className="text-xl font-medium text-white"
          key={progress}
          aria-live="polite"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1,   opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {Math.floor(progress)}%
        </motion.p>

        {/* Social bar con pulse */}
        {progress === 100 && (
          <motion.div
            className="flex gap-8 pt-2"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.3))' }}
          >
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                target="_blank" rel="noreferrer"
                aria-label="social"
                className="p-2 rounded-full bg-white/10"
                whileHover={{ scale: 1.2, backgroundColor: 'rgba(255,255,255,0.2)' }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <Icon size={26} className="text-white" />
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
