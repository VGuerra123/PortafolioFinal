import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '../lib/data';

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  // Get all unique technologies
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  );

  // Filter projects based on selected technology
  const filteredProjects = filter
    ? projects.filter((project) => project.technologies.includes(filter))
    : projects;

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary-900/20 to-transparent opacity-40"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title text-center">Proyectos</h2>
            <p className="section-subtitle text-center">
              Una selección de mi trabajo más reciente y destacado
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 text-sm rounded-full transition-all duration-300 
                ${!filter 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-glass-200 text-gray-300 hover:bg-glass-300'
                }`}
            >
              Todos
            </button>
            
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 
                  ${filter === tech 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-glass-200 text-gray-300 hover:bg-glass-300'
                  }`}
              >
                {tech}
              </button>
            ))}
          </motion.div>

          <AnimatePresence>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  custom={index}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="glass-panel overflow-hidden h-full flex flex-col glass-panel-hover">
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
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech) => (
                          <span
                            key={`${project.id}-${tech}`}
                            className="px-2 py-1 text-xs bg-dark-200 text-gray-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;