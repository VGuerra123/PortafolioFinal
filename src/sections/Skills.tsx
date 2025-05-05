import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../lib/data';
import { Check, AlertCircle, Code, Database, Server, Figma, PenTool } from 'lucide-react';

// Map category to icon
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'frontend':
      return <Code className="text-primary-400" size={18} />;
    case 'backend':
      return <Database className="text-secondary-400" size={18} />;
    case 'devops':
      return <Server className="text-accent-400" size={18} />;
    case 'design':
      return <PenTool className="text-primary-400" size={18} />;
    default:
      return <Check className="text-gray-400" size={18} />;
  }
};

// Get human-readable category name
const getCategoryName = (category: string) => {
  switch (category) {
    case 'frontend':
      return 'Frontend';
    case 'backend':
      return 'Backend';
    case 'devops':
      return 'DevOps';
    case 'design':
      return 'Diseño';
    default:
      return 'Otro';
  }
};

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categories = Object.keys(groupedSkills);

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent-900/20 to-transparent opacity-40"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title text-center">Habilidades Técnicas</h2>
            <p className="section-subtitle text-center">
              Tecnologías y herramientas con las que trabajo
            </p>
          </motion.div>

          <div className="mt-16">
            {categories.map((category) => (
              <motion.div 
                key={category} 
                variants={itemVariants}
                className="mb-16 last:mb-0"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-glass-200 flex items-center justify-center mr-3">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {getCategoryName(category)}
                  </h3>
                </div>
                
                <div 
                  ref={scrollRef}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                >
                  {groupedSkills[category].map((skill) => (
                    <motion.div
                      key={skill.id}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { 
                          opacity: 1, 
                          scale: 1,
                          transition: { duration: 0.5 }
                        }
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="glass-panel p-6 glass-panel-hover"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-glass-300 flex items-center justify-center mr-3">
                          {getCategoryIcon(skill.category)}
                        </div>
                        <h4 className="font-bold text-white">{skill.name}</h4>
                      </div>
                      
                      <div className="mt-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-400">Nivel</span>
                          <span className="text-xs text-gray-400">{skill.level}/5</span>
                        </div>
                        <div className="h-2 bg-dark-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full 
                              ${skill.category === 'frontend' 
                                ? 'bg-gradient-to-r from-primary-600 to-primary-400' 
                                : skill.category === 'backend'
                                  ? 'bg-gradient-to-r from-secondary-600 to-secondary-400'
                                  : skill.category === 'devops'
                                    ? 'bg-gradient-to-r from-accent-600 to-accent-400'
                                    : 'bg-gradient-to-r from-primary-600 to-secondary-400'
                              }`}
                            style={{ width: `${skill.level * 20}%` }}
                          ></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;