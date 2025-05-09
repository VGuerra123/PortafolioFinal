import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const customProjects = [
  // 1. YurForce
  {
    id: 'yurforce',
    title: 'YurForce',
    description: 'Emulador hub con catálogo de juegos desde Atari hasta PS5, con filtrado avanzado y detalles de sistema.',
    image: '/assets/projects/yurforce.webp',
    featured: true,
    demoUrl: 'https://yurforce.space/',
    githubUrl: 'https://github.com/VG123/YurForce',
    technologies: ['React', 'Tailwind CSS', 'Typescript','Photoshop','Figma','Api openweathermap'],
  },
  // 2. Unify
  {
    id: 'unify',
    title: 'Unify',
    description: 'Un espacio donde todos encajan: Demo de red social con interacciones y perfil de usuario.',
    image: '/assets/projects/unify.webp',
    featured: false,
    demoUrl: 'https://unifysocialmedia.fun/',
    githubUrl: null,
    technologies: ['React','Tailwind CSS', 'TypeScript', 'Photoshop','Figma'],
  },
  // 3. Howe
  {
    id: 'howe',
    title: 'Howe',
    description: 'Aplicación lúdica para niños que enseña emociones y coloreo interactivo.',
    image: '/assets/projects/howe.webp',
    featured: false,
    demoUrl: 'https://drive.google.com/drive/folders/your_video_link',
    githubUrl: 'https://github.com/Usuario/HoweApp',
    technologies: ['React', 'Tailwind CSS', 'Typescript', 'Photoshop','Bases de Datos','AWS','Figma'],
  },
];

const Projects: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-radial from-primary-900/20 to-transparent opacity-40" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12" ref={ref}>
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="section-title text-3xl sm:text-4xl font-bold text-white">Proyectos</h2>
            <p className="section-subtitle mt-2 text-lg text-gray-300">Una selección de mi trabajo más reciente y destacado</p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="glass-panel overflow-hidden flex flex-col glass-panel-hover transition-shadow"
              >
                <div className="relative group overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-accent-600 text-white text-xs px-2 py-1 rounded-md">
                      Destacado
                    </div>
                  )}
                  <div className="absolute inset-0 bg-dark-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                          aria-label={`Ver demo de ${project.title}`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                          aria-label={`Ver código de ${project.title}`}
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span key={`${project.id}-${tech}`} className="px-2 py-1 text-xs bg-dark-200 text-gray-300 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
