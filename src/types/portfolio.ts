export type Project = {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  repoLink: string;
  videoLink?: string;
  techStack: string[];
  /** Set both to show the project as a case study. */
  problem?: string;
  built?: string;
};

export type Highlight = {
  title: string;
  text: string;
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
  note?: string;
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
  about: string;
  location?: string;
  focus: string;
  glance?: Stat[];
  points: string[];
};

export type StackGroup = {
  label: string;
  items: string[];
};

export type Stat = {
  value: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
