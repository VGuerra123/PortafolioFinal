import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Briefcase, Award } from 'lucide-react';
import { aboutMe, experience } from '../lib/data';

const AboutMe = () => {
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

  return (
    <section id="about" className="py-20 md:py-32 relative">
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
            <h2 className="section-title text-center">Sobre mí</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2 order-2 lg:order-1"
            >
              <div className="glass-panel p-8">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {aboutMe.description.split('\n\n').map((paragraph, i) => (
                    <span key={i}>
                      {paragraph}
                      {i < aboutMe.description.split('\n\n').length - 1 && (
                        <><br /><br /></>
                      )}
                    </span>
                  ))}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mr-4">
                      <MapPin className="text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Ubicación</h3>
                      <p className="text-gray-300">{aboutMe.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary-500/20 flex items-center justify-center mr-4">
                      <Calendar className="text-secondary-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Experiencia</h3>
                      <p className="text-gray-300">1 año</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center mr-4">
                      <Briefcase className="text-accent-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Rol Actual</h3>
                      <p className="text-gray-300">{experience[0].role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mr-4">
                      <Award className="text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Especialidad</h3>
                      <p className="text-gray-300">Desarrollo Web</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-1 order-1 lg:order-2"
            >
              <div className="glass-panel p-8 h-full flex flex-col justify-center">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-20 animate-pulse-slow"></div>
                  <img
                    src="public/assets/Profile_.png"
                    alt="Victor Guerra"
                    className="w-full h-full object-cover rounded-full p-1"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-center text-white mb-2">
                  {aboutMe.name}
                </h3>
                
                <p className="text-center text-gray-300 mb-6">
                  {aboutMe.title}
                </p>
                
                <div className="border-t border-white/10 pt-6 mt-auto">
                  <h4 className="text-lg font-medium text-white mb-3">
                    Idiomas
                  </h4>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Español</span>
                        <span className="text-gray-300">Nativo</span>
                      </div>
                      <div className="h-2 bg-dark-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary-500 to-primary-400 w-full"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">Inglés</span>
                        <span className="text-gray-300">Intermedio</span>
                      </div>
                      <div className="h-2 bg-dark-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-secondary-500 to-secondary-400 w-3/5"></div>
                      </div>
                    </div> 
                    <div>
                    </div>
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