import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Github, Linkedin, Twitter, MapPin, Thermometer } from 'lucide-react';
import { contactInfo } from '../lib/data';
import logo from '../../public/assets/logo.webp';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationTxt, setLocationTxt] = useState('');
  const [temperature, setTemperature] = useState('');
  const [time, setTime] = useState('');
  const route = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    (async () => {
      if (!navigator.geolocation) return;
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const apiKey = '3d893d4f3330e0cee6435072e81fad00';
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=metric`
        );
        const data = await res.json();
        setLocationTxt(data?.sys?.country ? `${data.name}, ${data.sys.country}` : 'Ubicación desconocida');
        setTemperature(data?.main?.temp ? `${Math.round(data.main.temp)}°C` : 'Temp desconocida');
      });
    })();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('es-ES', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 py-3 px-6 md:px-10 transition-all duration-300 ${
        isScrolled ? 'bg-dark-200/80 backdrop-blur-xl shadow-lg border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-3 p-1 rounded-full bg-glass-200 hover:scale-105 transition-transform shadow-xl"
          whileHover={{ rotate: -2 }}
        >
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        </motion.a>

        {/* Centered Nav */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {[
            ['#about', 'Sobre mí'],
            ['#education', 'Formación'],
            ['#skills', 'Habilidades'],
            ['#projects', 'Proyectos'],
            ['#contact', 'Contacto'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="relative text-gray-300 hover:text-white transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right Info */}
        <div className="flex items-center gap-3 text-xs text-cyan-200">
          <span className="hidden md:inline font-mono text-cyan-300">{time || '--:--'}</span>
          <div className="hidden xl:flex items-center gap-1"><MapPin size={14} /> {locationTxt}</div>
          <div className="hidden xl:flex items-center gap-1"><Thermometer size={14} /> {temperature}</div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-black/20 hover:bg-cyan-500/20 text-white transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          {[contactInfo.github, contactInfo.linkedin, contactInfo.twitter].map((link, i) =>
            link ? (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {i === 0 && <Github size={18} />}
                {i === 1 && <Linkedin size={18} />}
                {i === 2 && <Twitter size={18} />}
              </motion.a>
            ) : null
          )}

          <button onClick={toggleMobileMenu} className="lg:hidden p-2 text-gray-300 hover:text-white">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="lg:hidden mt-2 rounded-xl bg-dark-300/95 backdrop-blur-lg p-6 shadow-2xl border border-white/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4 text-center text-sm">
            {[
              ['#about', 'Sobre mí'],
              ['#education', 'Formación'],
              ['#skills', 'Habilidades'],
              ['#projects', 'Proyectos'],
              ['#contact', 'Contacto'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
