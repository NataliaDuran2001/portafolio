export type Locale = "en" | "es";
export type L = { en: string; es: string };

export interface Project {
  slug: string;
  title: L;
  subtitle: L;
  description: L;
  problem: L;
  solution: L;
  impact: L[];
  image: string;
  gallery: string[];
  technologies: string[];
  category: L;
  company: string;
  year: string;
  role: L;
  duration: L;
  featured: boolean;
}

export interface Experience {
  title: L;
  company: string;
  period: string;
  location: string;
  description: L;
  achievements: L[];
  technologies: string[];
}

export interface Education {
  title: L;
  subtitle: L;
  institution: string;
  year: string;
  type: L;
  status: L;
}

export interface Leadership {
  title: string;
  organization: string;
  period: string;
  description: L;
  achievements: L[];
  images?: string[];
}

export interface SkillCategory {
  title: L;
  skills: { name: string; years: L }[];
}

export interface Service {
  slug: string;
  title: L;
  description: L;
  features: L[];
  idealFor: L;
  deliverables: L[];
  timeline: L;
}
