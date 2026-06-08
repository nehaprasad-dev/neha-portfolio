export type Project = {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  repoLink: string;
  techStack: string[];
};

export type TocItem = {
  num: string;
  label: string;
  href: string;
};

export type ContributionTab = "merged" | "open";

export type Contribution = {
  repo: string;
  title: string;
  description: string;
  type: string;
  date?: string;
  url: string;
};

export type RecognitionItem = {
  src: string;
  alt: string;
  prUrl: string;
  label: string;
};

export type SectionIcon =
  | "about"
  | "openSource"
  | "recognition"
  | "experience"
  | "projects"
  | "tech"
  | "chat";

export type ProjectCardSize = "small" | "medium";
