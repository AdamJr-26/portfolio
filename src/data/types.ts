export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  technologies: string[];
  /** Cloudinary public IDs */
  images: string[];
}

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  achievements: Achievement[];
}

export interface RepoLink {
  label: string;
  url: string;
}

export interface SystemPart {
  name: string;
  stack: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  year: number;
  url: string;
}

export interface FeaturedProject {
  title: string;
  description: string;
  highlights: string[];
  clients: SystemPart[];
  server: SystemPart;
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
  /** Self-assessed, 0–100 */
  level: number;
  experience: string;
  repos: RepoLink[];
}
