export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type EducationItem = {
  year: string;
  school: string;
  degree: string;
  description: string;
};

export type SkillCategory = {
  icon: string;
  title: string;
  items: string[];
};

export type SkillNode = {
  id: string;
  index: string;
  title: string;
  description: string;
};

export type Project = {
  id: string;
  sequence: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
  tags: string[];
  overlayTags: string[];
  badges: string[];
  skillKeys: string[];
};

export type InspirationItem = {
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
};

export type ContactLink = {
  label: string;
  href: string;
};
