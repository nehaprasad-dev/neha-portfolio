export type Project = {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  repoLink: string;
  videoLink?: string;
  techStack: string[];
};

export type Post = {
  url: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  text: string;
  views: string;
  likes: string;
  video?: boolean;
};

export type Contribution = {
  repo: string;
  number: number;
  title: string;
  url: string;
};

export type RecognitionItem = {
  src: string;
  alt: string;
  prUrl: string;
  label: string;
};

export type Experience = {
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  points: string[];
};

export type StackGroup = {
  label: string;
  items: string[];
};

export type SocialLink = {
  label: string;
  href: string;
};
