export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'devops' | 'design' | 'other';
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  certificationUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null; // null means "Present"
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
}