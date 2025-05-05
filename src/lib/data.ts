// src/lib/data.ts

import { Project, Skill, EducationItem, Experience, ContactInfo } from '../types';

// ----------------------------------
// Habilidades Técnicas
// ----------------------------------
export const skills: Skill[] = [
  { id: '1',  name: 'JavaScript',    icon: 'code',         level: 5, category: 'frontend' },
  { id: '2',  name: 'React',         icon: 'component',    level: 5, category: 'frontend' },
  { id: '3',  name: 'TypeScript',    icon: 'file-type',    level: 5, category: 'frontend' },
  { id: '4',  name: 'Node.js',       icon: 'server',       level: 4, category: 'backend' },
  { id: '5',  name: 'CSS/SCSS',      icon: 'paintbrush',   level: 5, category: 'frontend' },
  { id: '6',  name: 'Tailwind CSS',  icon: 'wind',         level: 5, category: 'frontend' },
  { id: '7',  name: 'GraphQL',       icon: 'git-branch',   level: 3, category: 'backend' },
  { id: '8',  name: 'AWS',           icon: 'cloud',        level: 4, category: 'devops'   },
  { id: '9',  name: 'Docker',        icon: 'container',    level: 4, category: 'devops'   },
  { id: '10', name: 'Git',           icon: 'git-branch',   level: 5, category: 'devops'   },
  { id: '11', name: 'Github',           icon: 'git-branch',   level: 5, category: 'devops'   },
  { id: '12', name: 'Hostinger',           icon: 'git-branch',   level: 5, category: 'devops'   },
  { id: '13', name: 'UI/UX Design Figma',  icon: 'figma',        level: 4, category: 'design'   },
  { id: '14', name: 'MongoDB',       icon: 'database',     level: 4, category: 'backend'  },
]; // :contentReference[oaicite:0]{index=0}&#8203;:contentReference[oaicite:1]{index=1}

// ----------------------------------
// Proyectos Destacados
// ----------------------------------
export const projects: Project[] = [
  {
    id: '1',
    title: 'YurForce -Multiemulator-',
    description: 'Sistema de emulación de consolas de videojuegos. Es un tema inspirado en PS5 y Nintendo Switch, creado especialmente para ser utilizado en Launchbox Bigbox.',
    image: 'public/assets/projects/YurForce.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    demoUrl: 'https://yurforce.space',
    githubUrl: 'https://github.com/username/project',
    featured: true,
  },
  {
    id: '2',
    title: 'Dashboard Analítico',
    description: 'Panel de control para visualización de datos con gráficos interactivos y reportes exportables.',
    image: 'https://images.pexels.com/photos/7532318/pexels-photo-7532318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'D3.js', 'Firebase', 'Tailwind CSS'],
    demoUrl: 'https://demo-dashboard.com',
    githubUrl: 'https://github.com/username/dashboard',
    featured: true,
  },
  {
    id: '3',
    title: 'API RESTful',
    description: 'API robusta con autenticación, autorización y documentación automática.',
    image: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Swagger', 'Jest'],
    githubUrl: 'https://github.com/username/api',
    featured: false,
  },
  {
    id: '4',
    title: 'Sitio E-commerce',
    description: 'Tienda online con carrito de compras, pasarela de pagos y sistema de inventario.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Redux', 'Node.js', 'Stripe', 'MongoDB'],
    demoUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/username/ecommerce',
    featured: true,
  },
  {
    id: '5',
    title: 'Aplicación de Clima',
    description: 'App de pronóstico del tiempo con geolocalización y alertas personalizadas.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React Native', 'OpenWeather API', 'Redux', 'Geolocation'],
    demoUrl: 'https://weather-app-demo.com',
    githubUrl: 'https://github.com/username/weather-app',
    featured: false,
  },
  {
    id: '6',
    title: 'Chat en Tiempo Real',
    description: 'Aplicación de mensajería instantánea con salas de chat y envío de archivos.',
    image: 'https://images.pexels.com/photos/6693952/pexels-photo-6693952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'AWS S3'],
    githubUrl: 'https://github.com/username/chat-app',
    featured: false,
  },
]; // :contentReference[oaicite:2]{index=2}&#8203;:contentReference[oaicite:3]{index=3}

// ----------------------------------
// Formación Académica & Certificaciones
// ----------------------------------
export const education: EducationItem[] = [
  {
    id: '1',
    title: 'Ingeniería civil en electricidad (incompleta)',
    institution: 'Universidad de Santiago de Chile',
    location: 'Santiago de Chile, Chile',
    startDate: '2017',
    endDate: '2022',
    description: '',
    certificationUrl: '',
  },
  {
    id: '2',
    title: 'Analista de Sistemas',
    institution: 'Instituto Profesional de Providencia (IPP)',
    location: 'Santiago de Chile, Chile',
    startDate: '2023',
    endDate: '2024',
    description: '',
    certificationUrl: '',
  },
  {
    id: '3',
    title: 'Certificación AWS Technical Essentials',
    institution: 'Amazon Web Services',
    location: 'Online',
    startDate: '2024',
    endDate: '2024',
    description: '',
    certificationUrl: 'https://drive.google.com/file/d/1pQNw3RBYPRak7DdvIX4AoxqorTTiSAFz/view?usp=sharing',
  },
  {
    id: '4',
    title: 'Certificación AWS Partner: Acreditation (Technical)',
    institution: 'Amazon Web Services',
    location: 'Online',
    startDate: '2025',
    endDate: '2025',
    description: '',
    certificationUrl: 'https://drive.google.com/file/d/1gArxUPpuGAPP9w8Si4qsoLEc9IxoqdoY/view?usp=sharing',
  },
  {
    id: '5',
    title: 'Certificación AWS Partner: Sales Accreditation (Business)',
    institution: 'Amazon Web Services',
    location: 'Online',
    startDate: '2025',
    endDate: '2025',
    description: '',
    certificationUrl: 'https://drive.google.com/file/d/1g4F6YlkIbd4fZ3d2a1BASjL_1nDvxqYx/view?usp=sharing',
  },
  {
    id: '6',
    title: 'Certificación AWS Partner: Cloud Economics',
    institution: 'Amazon Web Services',
    location: 'Online',
    startDate: '2025',
    endDate: '2025',
    description: '',
    certificationUrl: 'https://drive.google.com/file/d/13PSL2Oy-CfJPZDrfAqTP9PYKXAcksXxB/view?usp=sharing',
  },
  {
    id: '7',
    title: 'Insignias en Credly',
    institution: 'Credly',
    location: 'Online',
    startDate: '2025',
    endDate: '2025',
    description: 'Seleccionar "ver certificado" para redirigir a la web credly',
    certificationUrl: 'https://www.credly.com/users/vgz',
  },
]; // :contentReference[oaicite:4]{index=4}&#8203;:contentReference[oaicite:5]{index=5}

// ----------------------------------
// Experiencia Laboral
// ----------------------------------
export const experience: Experience[] = [
  {
    id: '1',
    role: 'Desarrollador Web',
    company: 'Neurona Global Services',
    location: 'Online',
    startDate: 'Diciembre 2024',
    endDate: null, // Presente
    description: 'Desarrollo de interfaces de usuario modernas y responsivas para aplicaciones web.',
    achievements: [
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'Styled Components', 'Jest','Tailwind css','Javascript','Jira','Slack','AWS'],
  },
  {
    id: '2',
    role: 'Desarrollador Fullstack',
    company: 'Digital Systems',
    location: 'Barcelona, España',
    startDate: 'Marzo 2020',
    endDate: 'Diciembre 2021',
    description: 'Desarrollo integral de aplicaciones web con arquitectura orientada a microservicios.',
    achievements: [
      'Desarrollo de API RESTful para sistema de gestión de inventarios',
      'Implementación de autenticación y autorización basada en roles',
      'Migración de arquitectura monolítica a microservicios',
    ],
    technologies: ['Node.js', 'Express', 'React', 'MongoDB', 'Docker', 'AWS'],
  },
  {
    id: '3',
    role: 'Desarrollador Web Junior',
    company: 'WebCreators',
    location: 'Valencia, España',
    startDate: 'Junio 2018',
    endDate: 'Febrero 2020',
    description: 'Desarrollo y mantenimiento de sitios web para clientes de diversos sectores.',
    achievements: [
      'Desarrollo de más de 15 sitios web corporativos',
      'Implementación de estrategias SEO que mejoraron el posicionamiento',
      'Integración con múltiples APIs de terceros',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'WordPress', 'MySQL'],
  },
]; // :contentReference[oaicite:6]{index=6}&#8203;:contentReference[oaicite:7]{index=7}

// ----------------------------------
// Información de Contacto
// ----------------------------------
export const contactInfo: ContactInfo = {
  email:   'victor@vguerradev.org',
  linkedin:'https://linkedin.com/in/víctor-guerra',
  github:  'https://github.com/VGuerra123',
  twitter: 'https://twitter.com/vguerradev',
}; // :contentReference[oaicite:8]{index=8}

// ----------------------------------
// Sobre Mí (Hero Section Data)
// ----------------------------------
export const aboutMe = {
  name:         'Víctor Guerra Zavala',
  title:        'Analista de Sistemas & Desarrollador Web',
  profileImage: '/assets/Hero/Profile.png',
  tagline: {
    before:    'Transformo ideas en experiencias digitales impactantes mediante código limpio, diseño funcional y un enfoque ',
    highlight: '100 % creativo',
    after:     '.',
  },
  intro: `Soy un apasionado desarrollador web con más de 5 años de experiencia creando soluciones digitales modernas y eficientes. Me especializo en el desarrollo de aplicaciones web de alto rendimiento utilizando las últimas tecnologías y mejores prácticas.`,
  description: `Mi enfoque combina la excelencia técnica con una perspectiva orientada al usuario final. Disfruto resolviendo problemas complejos y transformando ideas en productos digitales impactantes.

Mi experiencia abarca desde startups hasta grandes empresas, donde he trabajado en proyectos desafiantes que me han permitido ampliar constantemente mis habilidades y conocimientos.`,
  location:     'Santiago de Chile',
  availability: 'Disponible para trabajar',
}; // :contentReference[oaicite:9]{index=9}
