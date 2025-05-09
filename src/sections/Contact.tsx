import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { contactInfo } from '../lib/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Ha ocurrido un error. Inténtalo de nuevo más tarde.');
      setTimeout(() => setSubmitError(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-secondary-900/20 to-transparent opacity-30"></div>
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Avatar + Socials */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-8"
          >
            <motion.img
              src="/assets/Contact/fox-avatar-contact.webp"
              alt="Avatar Zorro"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-2xl border-4 border-gradient-to-tr from-primary-400 to-secondary-500"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            />
            <h3 className="text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
              ¡Conectemos!
            </h3>
            <p className="text-gray-400 text-center max-w-sm">
              ¿Tienes un desafío o proyecto? Escríbeme y hagámoslo realidad juntos.
            </p>
            <div className="flex gap-5">
              {[contactInfo.github, contactInfo.linkedin, contactInfo.twitter].map((link, idx) =>
                link ? (
                  <motion.a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all"
                  >
                    {idx === 0 && <Github size={22} />}
                    {idx === 1 && <Linkedin size={22} />}
                    {idx === 2 && <Twitter size={22} />}
                  </motion.a>
                ) : null
              )}
            </div>
          </motion.div>

          {/* Formulario elegante */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="p-10 bg-dark-300/80 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-lg flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Envíame un mensaje</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre completo"
                required
                className="px-5 py-3 bg-white/10 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-primary-400 focus:outline-none backdrop-blur-md transition"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                required
                className="px-5 py-3 bg-white/10 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-primary-400 focus:outline-none backdrop-blur-md transition"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Asunto"
              required
              className="px-5 py-3 bg-white/10 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-primary-400 focus:outline-none backdrop-blur-md transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tu mensaje..."
              rows={5}
              required
              className="px-5 py-3 bg-white/10 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-primary-400 focus:outline-none backdrop-blur-md resize-none transition"
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-full shadow-md hover:opacity-90 transition"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </motion.button>
            {submitSuccess && <p className="text-green-400 text-sm">Mensaje enviado correctamente.</p>}
            {submitError && <p className="text-red-400 text-sm">{submitError}</p>}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
