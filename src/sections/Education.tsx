import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';
import { education } from '../lib/data';

// Datos de experiencia profesional
const professionalExperience = [
  {
    id: 'exp1',
    title: 'Ayudante - Matemáticas & Ciencias de la Computación',
    institution: 'Universidad de Santiago de Chile',
    startDate: '2018',
    endDate: '2019',
    location: 'Santiago, Chile',
    description: 'Colaboré realizando clases prácticas, revisión de controles y diseño de ejercicios. En 2018 y 2019 mantuve activa una Web de Ayudantías, con resumenes, ejercicios resueltos y propuestos, modelos de controles y pruebas para practicar,etc. Fue reconocida por el DMCC y publicada en la web oficial http://calculo1.dmcc.usach.cl/ para ser utilizada como herramienta educativa para todas las secciones inscritas en las asignaturas de Cálculo en particular.',
  },
  {
    id: 'exp2',
    title: 'Ayudante - Facultad de Economía',
    institution: 'Universidad de Santiago de Chile',
    startDate: '2020',
    endDate: '2022',
    location: 'Santiago, Chile',
    description: 'Inicié realizando clases Online, preparando material didáctico de calidad, relizando reuniones, colaborando en revisión de controles y preparación de preguntas para controles y pruebas de las asignaturas matemáticas para estudiantes de pregrado.',
  },
  {
    id: 'exp3',
    title: 'Práctica Profesional - Desarrollador Web',
    institution: 'Neurona Global Services',
    startDate: '2022',
    endDate: '2022',
    location: 'Remoto',
    description: 'Desarrollé interfaces responsivas y componentes reutilizables usando React y Tailwind CSS, integrando APIs REST y optimizando performance.',
    certificationUrl: 'https://neurona.com/certificado',
  },
];

const Education: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  const timelineRef = useRef<HTMLDivElement>(null);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <section id="education" className="relative py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-radial from-secondary-900/20 to-transparent opacity-40" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12" ref={ref}>
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {/* Título y subtítulo */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="section-title text-3xl sm:text-4xl font-bold text-white">Formación</h2>
            <p className="section-subtitle mt-2 text-lg text-gray-300">Mi trayectoria académica y profesional</p>
          </motion.div>

          {/* Educación Académica */}
          <div ref={timelineRef} className="relative">
            <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/70 via-secondary-500/70 to-accent-500/70" />
            {education.map((item, idx) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`mb-16 relative flex flex-col md:flex-row ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Punto de la línea */}
                <div className="absolute left-2 md:left-1/2 top-0 w-6 h-6 rounded-full bg-dark-200 border-2 border-primary-500 transform md:-translate-x-1/2 z-10" />
                {/* Detalle académico */}
                <div className={`md:w-1/2 p-4 ${idx % 2 !== 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass-panel glass-panel-hover p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <h4 className="text-lg text-gradient font-medium mb-4">{item.institution}</h4>
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-300 text-sm">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>{item.startDate} - {item.endDate}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    {item.certificationUrl && (
                      <a
                        href={item.certificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-400 hover:text-primary-300 transition"
                      >
                        <span className="mr-1">Ver certificado</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experiencia Profesional */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">Experiencia Profesional</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {professionalExperience.map(exp => (
                <div key={exp.id} className="glass-panel p-6 hover:shadow-xl transition">
                  <div className="flex items-center mb-4">
                    <Briefcase className="text-accent-400 w-6 h-6 mr-2" />
                    <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-2"><strong>{exp.institution}</strong></p>
                  <p className="text-gray-300 text-xs mb-2">{exp.startDate} - {exp.endDate}</p>
                  <p className="text-gray-300 text-sm mb-4">{exp.location}</p>
                  <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                  {exp.certificationUrl && (
                    <a
                      href={exp.certificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 transition"
                    >
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
