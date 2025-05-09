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
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Soy Víctor Guerra Zavala. Analista de Sistemas y Desarrollador Web con una trayectoria académica y profesional diversa. Entre 2018 y 2019 me desempeñé como ayudante en el Departamento de Matemáticas y Ciencias de la Computación de la Universidad de Santiago de Chile, colaborando en la preparación de materiales didácticos, revisión de controles, clases teóricas y prácticas, y tutorías personalizadas para estudiantes de pregrado. En 2018 y 2019 mantuve activa una Web de Ayudantías, con resumenes, ejercicios resueltos y propuestos, modelos de controles y pruebas para practicar,etc. Fue reconocida por el DMCC y publicada en la web oficial http://calculo1.dmcc.usach.cl/ para ser utilizada como herramienta educativa para todas las secciones inscritas en las asignaturas de Cálculo en particular. 
                  <br /><br />
                  Posteriormente, desde 2020 hasta 2022, amplié mi labor como ayudante en la Facultad de Economía de la misma universidad, donde inicié realizando clases Online, preparando material didáctico de calidad, relizando reuniones, colaborando en revisión de controles y preparación de preguntas para controles y pruebas de las asignaturas matemáticas para estudiantes de pregrado.  
                  <br /><br />
                  Realicé mi práctica profesional como desarrollador web en Neurona Global Services, donde colaboré en la creación de la página web oficial de Neurona y realicé cursos de certificación partner de AWS y de IBM. Construimos en equipo un MVP de la app Howe, una aplicación lúdica para niños que enseña emociones y ofrece un coloreo interactivo; en este proyecto me desempeñé principalmente en el desarrollo del frontend y colaboré en algunas de las demás funcionalidades.
                  <br /><br />
                  Además, trabajé como operador multifuncional en un Pronto Copec, desempeñándome como cajero, en cocina y en el mantenimiento de espacios. Esta experiencia me permitió desarrollar habilidades esenciales en atención al cliente, trabajo bajo presión, comunicación efectiva, trabajo en equipo, resiliencia y compromiso.
                  <br /><br />
                  La combinación de mi experiencia docente, mi formación en desarrollo web y mi trabajo en atención al cliente me ha brindado una visión integral que fusiona rigor académico, prácticas de ingeniería de software y sólidas habilidades interpersonales. Me considero un profesional versátil y comprometido con la excelencia en proyectos de educación, tecnología y servicio.
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
                      <p className="text-gray-300 text-xs sm:text-sm">2017 - 2024</p>
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
                    src="public/assets/aboutMe/Profile_.webp"
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
