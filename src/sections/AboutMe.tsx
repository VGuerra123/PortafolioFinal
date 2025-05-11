import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Briefcase, Award } from 'lucide-react';

interface LanguageBarProps {
  label: string;
  level: string;
  width: string;
}

const LanguageBar: React.FC<LanguageBarProps> = ({ label, level, width }) => (
  <div>
    <div className="flex justify-between mb-1 text-xs sm:text-sm text-gray-300">
      <span>{label}</span>
      <span>{level}</span>
    </div>
    <div className="h-2 bg-dark-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-primary-500 to-primary-400"
        style={{ width }}
      />
    </div>
  </div>
);

const AboutMe: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-radial from-primary-900/20 to-transparent opacity-40" />
      <div
        className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12"
        ref={ref}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="section-title text-center mb-12 text-3xl sm:text-4xl font-bold text-white"
          >
            Sobre mí
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Texto y datos */}
            <motion.div variants={itemVariants} className="flex-1 order-2 lg:order-1">
              <div className="glass-panel p-6 sm:p-8 md:p-10">
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                  Soy Víctor Guerra Zavala, Analista de Sistemas y Desarrollador Web con una trayectoria diversa en ámbitos académicos y profesionales.
                  <br /><br />
                  Entre 2018 y 2019 trabajé como ayudante en el Departamento de Matemáticas y Ciencias de la Computación de la Universidad de Santiago de Chile, donde preparé materiales didácticos, revisé controles y di tutorías personalizadas. Además, mantuve activa una plataforma web de apoyaturas en Cálculo (calculo1.dmcc.usach.cl), reconocida por el DMCC como recurso oficial para sus asignaturas.
                  <br /><br />
                  De 2020 a 2022 seguí mi labor como ayudante, esta vez en la Facultad de Economía, impartiendo clases online, elaborando contenido de calidad y diseñando evaluaciones para estudiantes de pregrado.
                  <br /><br />
                  En mi práctica profesional en Neurona Global Services, contribuí al desarrollo del frontend de su sitio web, obtuve certificaciones partner de AWS e IBM, y colaboré en la creación del MVP de “Howe”, una app lúdica para el aprendizaje emocional en niños.
                  <br /><br />
                  También trabajé como operador multifuncional en Pronto Copec, desempeñándome en caja, cocina y mantenimiento, donde fortalecí mis habilidades en atención al cliente, trabajo bajo presión y comunicación efectiva.
                  <br /><br />
                  Esta combinación de experiencia docente, desarrollo web y servicio al cliente me brinda una visión integral, fusionando rigor académico, buenas prácticas de ingeniería y sólidas competencias interpersonales. Soy un profesional versátil, comprometido con la excelencia en proyectos de educación, tecnología y servicio.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-3">
                      <MapPin className="text-primary-400 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white text-sm sm:text-base">Ubicación</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">Santiago, Chile</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary-500/20 flex items-center justify-center mr-3">
                      <Calendar className="text-secondary-400 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white text-sm sm:text-base">Años de Academia</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">2017 – 2024</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center mr-3">
                      <Briefcase className="text-accent-400 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white text-sm sm:text-base">Práctica Profesional</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">Neurona Global Services</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-3">
                      <Award className="text-primary-400 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white text-sm sm:text-base">Especialidad</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">Desarrollo Web</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Perfil */}
            <motion.div variants={itemVariants} className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="glass-panel p-4 sm:p-6 md:p-8 w-40 sm:w-48 md:w-56 lg:w-64 flex flex-col items-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 to-secondary-500 opacity-20 animate-pulse-slow" />
                  <img
                    src="assets/Hero/Profile2.png"
                    alt="Víctor Guerra"
                    className="w-full h-full object-cover rounded-full border-2 border-white"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">Víctor Guerra</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">Desarrollador Web</p>

                <div className="w-full border-t border-white/10 pt-4 mt-auto">
                  <h4 className="text-base font-medium text-white mb-3">Idiomas</h4>
                  <div className="space-y-3">
                    <LanguageBar label="Español" level="Nativo" width="100%" />
                    <LanguageBar label="Inglés" level="Intermedio" width="60%" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
