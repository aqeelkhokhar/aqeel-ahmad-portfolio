import type { LucideIcon } from "lucide-react";

export type PersonalInfo = {
  name: string;
  title: string;
  tagline: string;
  summary: string[];
  email: string;
  countryCode: string;
  phone: string;
  location: string;
  availability: string;
  resumeLink: string;
  profileImage: string;
  bookingUrl: string;
};

export type Stat = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export type Service = {
  title: string;
  pitch: string;
  deliverables: string[];
  timeline: string;
  icon: LucideIcon;
  featured?: boolean;
};

export type Skill = {
  category: string;
  icon: LucideIcon;
  items: string[];
};

export type Job = {
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  current?: boolean;
  bullets: string[];
  logo?: string;
};

export type Project = {
  slug: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
  impacts: string[];
  technologies: string[];
  role: string;
  company: string;
  image?: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
};

export type Achievement = {
  metric: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Certificate = {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logo?: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  field?: string;
  period: string;
  logo?: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
  label: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  linkedinUrl?: string;
};

export type NavItem = {
  id: string;
  label: string;
};
