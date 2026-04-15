export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  linkedin: string;
  phone: string;
  summary: string;
  initials: string;
}

export interface SkillCategory {
  label: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  severity: 'success' | 'info' | 'warn' | 'danger';
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  platform: string;
  name: string;
  date: string;
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  githubUrl: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education;
  certifications: Certification[];
  projects: Project[];
}
