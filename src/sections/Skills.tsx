import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../lib/data';
import { Check, Code, Database, Server, Figma, Diamond } from 'lucide-react';

// Icon mapping
const ICON_SIZE = 20;
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'frontend': return <Code className="text-primary-400" size={ICON_SIZE} />;
    case 'backend': return <Database className="text-secondary-400" size={ICON_SIZE} />;
    case 'devops': return <Server className="text-accent-400" size={ICON_SIZE} />;
    case 'design': return <Figma className="text-primary-400" size={ICON_SIZE} />;
    default: return <Diamond className="text-gray-400" size={ICON_SIZE} />;
  }
};

const getCategoryName = (category: string) => ({
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'DevOps',
  design: 'Diseño',
}[category] || 'Otras');

// Extended skills including design
const extendedSkills = [
  ...skills,
  { id: 'sk-design1', name: 'Adobe XD', category: 'design' },
  { id: 'sk-design2', name: 'Sketch', category: 'design' },
  { id: 'sk-design3', name: 'Illustrator', category: 'design' },
  { id: 'sk-design4', name: 'Photoshop', category: 'design' },
  { id: 'sk-design5', name: 'InDesign', category: 'design' },
  { id: 'sk-design6', name: 'After Effects', category: 'design' },
  { id: 'sk-design7', name: 'Blender', category: 'design' },
];

const Skills: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  const grouped = extendedSkills.reduce((acc, s) => {
    const cat = s.category || 'other';
    acc[cat] = acc[cat] ?? [];
    acc[cat].push(s);
    return acc;
  }, {} as Record<string, typeof extendedSkills>);

  return (
    <section id="skills" className="relative py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-900/20 to-transparent opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Habilidades Técnicas</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300">Tecnologías y herramientas con las que trabajo</p>
          </motion.div>

          {/* Categories */}
          <div className="space-y-16">
            {Object.entries(grouped).map(([cat, items]) => (
              <motion.div key={cat} variants={itemVariants} className="">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 bg-glass-200 rounded-full p-3 mr-4 shadow-md">
                    {getCategoryIcon(cat)}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{getCategoryName(cat)}</h3>
                </div>

                <div
                  className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                >
                  {items.map(skill => (
                    <motion.div
                      key={skill.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.08, boxShadow: '0px 4px 14px rgba(0,0,0,0.3)' }}
                      className="bg-dark-800 glass-panel-hover rounded-lg p-5 flex flex-col items-center text-center transition-shadow"
                    >
                      <div className="bg-glass-300 rounded-full p-2 mb-3">
                        {getCategoryIcon(skill.category)}
                      </div>
                      <span className="mt-2 text-sm sm:text-base font-medium text-white">{skill.name}</span>
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