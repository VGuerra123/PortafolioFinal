import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { education } from '../lib/data';

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const timelineRef = useRef<HTMLDivElement>(null);

  // GSAP animation would be initialized here when added

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
    <section id="education" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-secondary-900/20 to-transparent opacity-40"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title text-center">Formación</h2>
            <p className="section-subtitle text-center">
              Mi trayectoria académica y certificaciones profesionales
            </p>
          </motion.div>

          <div 
            ref={timelineRef} 
            className="mt-20 relative"
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/70 via-secondary-500/70 to-accent-500/70"></div>
            
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`mb-16 relative flex flex-col ${
                  index % 2 === 0 
                    ? 'md:flex-row' 
                    : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-dark-200 border-2 border-primary-500 md:transform md:-translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${
                  index % 2 === 0 
                    ? 'md:pr-12' 
                    : 'md:pl-12'
                }`}>
                  <div 
                    className={`glass-panel glass-panel-hover p-6 ${
                      index % 2 === 0 
                        ? 'ml-8 md:ml-0' 
                        : 'ml-8 md:ml-0'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    
                    <h4 className="text-lg text-gradient font-medium mb-4">
                      {item.institution}
                    </h4>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-300 text-sm">
                        <Calendar size={16} className="mr-1" />
                        <span>{item.startDate} - {item.endDate}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-300 text-sm">
                        <MapPin size={16} className="mr-1" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">
                      {item.description}
                    </p>
                    
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
        </motion.div>
      </div>
    </section>
  );
};

export default Education;