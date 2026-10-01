import type {
  Contribution,
  Experience,
  Post,
  Project,
  RecognitionItem,
  SocialLink,
  StackGroup,
} from "@/types/portfolio";

export const EMAIL = "nehaprasad27118@gmail.com";
export const X_HANDLE = "nehaaaa_6";
export const X_FOLLOWERS = "1.5K";
export const BLOG_URL = "https://nehacodes.hashnode.dev/";
export const RESUME_URL =
  "https://drive.google.com/file/d/1Rak8RH484u0fzxq2yG4pVK6VjL1Hckga/view?usp=drivesdk";

export const socials: SocialLink[] = [
  { label: "X", href: `https://x.com/${X_HANDLE}` },
  { label: "GitHub", href: "https://github.com/nehaaprasad" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/neha-prasad-92499821b/" },
  { label: "Resume", href: RESUME_URL },
  { label: "Instagram", href: "https://www.instagram.com/nehabytess/" },
];

export const projects: Project[] = [
  {
    title: "CompliScore",
    description:
      "A free 60-second health check for Indian startups. Type your company name, get a score out of 100, see what's overdue and what to fix. No login, no jargon.",
    image: "/compl.png",
    liveLink: "https://compliscore-nu.vercel.app/",
    repoLink: "https://github.com/nehaprasad-dev/compliscore",
    techStack: ["Next.js", "MongoDB", "Node.js", "Sentry"],
  },
  {
    title: "CodeTrust",
    description:
      "Reviews code and pull requests with a Safe, Risky or Block verdict, so issues get caught before they ship.",
    image: "/codetr.png",
    liveLink: "https://codetrust-lilac.vercel.app",
    repoLink: "https://github.com/nehaaprasad/codetrust",
    techStack: ["Next.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    title: "CareTalk",
    description:
      "An AI mental health agent with real-time therapy sessions, mood tracking and crisis support, built for privacy.",
    image: "/care.png",
    liveLink: "https://caretalk-agent.vercel.app/",
    repoLink: "https://github.com/nehaaprasad/caretalk-agent",
    techStack: ["Next.js", "MongoDB", "Node.js", "Sentry"],
  },
  {
    title: "Heariffy",
    description:
      "Real-time audio classification: a PyTorch CNN behind a FastAPI backend, with a React front end.",
    image: "/aud.png",
    liveLink: "https://heariffy-byu8.vercel.app/",
    repoLink: "https://github.com/nehaaprasad/heariffy",
    videoLink: "https://drive.google.com/file/d/1R4gZ1vKUudm5vOJcM3bDc1S_SnvH10k7/view",
    techStack: ["Next.js", "Python", "PyTorch", "FastAPI"],
  },
  {
    title: "Eonlogic",
    description: "An AI site builder that generates a business website from a short brief.",
    image: "/eon.png",
    liveLink: "https://eonlogic-mk8l.vercel.app/",
    repoLink: "https://github.com/nehaaprasad/eonlogic",
    videoLink: "https://drive.google.com/file/d/1R7eAZUVClgFQsG_9JoDlVecanAU14S9c/view",
    techStack: ["Next.js", "Express", "PostgreSQL"],
  },
  {
    title: "Eduno",
    description: "An AI tutoring platform with personalised voice tutors.",
    image: "/lms.png",
    liveLink: "https://lms-app-navy.vercel.app/",
    repoLink: "https://github.com/nehaaprasad/lms-app",
    videoLink: "https://drive.google.com/file/d/1R8pR242fn-edmDCJt7Jb3eboMBP5j-0R/view",
    techStack: ["Next.js", "Supabase", "Vapi", "Zod"],
  },
];

// Pull the latest numbers from x.com when you update this list.
// Ordered by reach, highest first.
export const posts: Post[] = [
  {
    url: `https://x.com/${X_HANDLE}/status/2103035505587958045`,
    date: "2026-09-24",
    text: "I gave an AI agent a job that required money. I didn't give it my credit card. So how did it pay? 👀",
    views: "62K",
    likes: "274",
    video: true,
  },
  {
    url: `https://x.com/${X_HANDLE}/status/2044769458162639151`,
    date: "2026-04-16",
    text: "Got to interview with xAI as a software engineer! Didn't make it through, but learned a lot, especially how important clear thinking and architecture are. Still feels crazy that building projects and open source got me there.",
    views: "35K",
    likes: "458",
  },
  {
    url: `https://x.com/${X_HANDLE}/status/2104869253551731046`,
    date: "2026-09-29",
    text: "Someone built this and I had to try it. You paste in a URL, and the entire webpage turns into a game you can destroy.",
    views: "23K",
    likes: "308",
    video: true,
  },
  {
    url: `https://x.com/${X_HANDLE}/status/2101978837697396837`,
    date: "2026-09-21",
    text: "Someone's dead in Room 12. Seven people are lying. The train leaves in 45 minutes. You can ask anyone anything; the hard part is asking the right question.",
    views: "18K",
    likes: "170",
    video: true,
  },
];

export const contributions: Contribution[] = [
  { repo: "vercel/next.js", number: 88653, title: "Make RedirectType constant properties literal types", url: "https://github.com/vercel/next.js/pull/88653" },
  { repo: "mastra-ai/mastra", number: 12400, title: "Support Anthropic programmatic tool calling", url: "https://github.com/mastra-ai/mastra/pull/12400" },
  { repo: "BerriAI/litellm", number: 19265, title: "Keep guardrail patterns on edit and mode toggle", url: "https://github.com/BerriAI/litellm/pull/19265" },
  { repo: "OpenHands/OpenHands", number: 12702, title: "Fix selected repo disappearing from the repository dropdown", url: "https://github.com/OpenHands/OpenHands/pull/12702" },
  { repo: "run-llama/LlamaIndexTS", number: 2106, title: "Multi-turn image generation support", url: "https://github.com/run-llama/LlamaIndexTS/pull/2106" },
  { repo: "shadcn-ui/ui", number: 8878, title: "Add the @ui-layouts registry to the directory", url: "https://github.com/shadcn-ui/ui/pull/8878" },
  { repo: "deepset-ai/haystack-core-integrations", number: 3016, title: "Add run_async to AstraEmbeddingRetriever", url: "https://github.com/deepset-ai/haystack-core-integrations/pull/3016" },
  { repo: "calcom/cal.com", number: 23784, title: "Fix dynamic adapter imports in self-hosted instances", url: "https://github.com/calcom/cal.com/pull/23784" },
  { repo: "PostHog/posthog", number: 34946, title: "Group property filtering for survey responses", url: "https://github.com/PostHog/posthog/pull/34946" },
  { repo: "tldraw/tldraw", number: 6987, title: "Custom relative snap points for handles", url: "https://github.com/tldraw/tldraw/pull/6987" },
  { repo: "PrefectHQ/prefect", number: 19548, title: "Speed up the task_runs count endpoint", url: "https://github.com/PrefectHQ/prefect/pull/19548" },
  { repo: "payloadcms/payload", number: 15454, title: "Ungenerated image sizes no longer store the original URL", url: "https://github.com/payloadcms/payload/pull/15454" },
  { repo: "Mintplex-Labs/anything-llm", number: 4258, title: "Add Exa as a search provider", url: "https://github.com/Mintplex-Labs/anything-llm/pull/4258" },
  { repo: "lancedb/lancedb", number: 2657, title: "Handle nulls in nullable boolean fields", url: "https://github.com/lancedb/lancedb/pull/2657" },
  { repo: "carbon-design-system/carbon", number: 20756, title: "Fix AI skeleton rendering in flex containers", url: "https://github.com/carbon-design-system/carbon/pull/20756" },
  { repo: "FlowiseAI/Flowise", number: 5486, title: "Sorting for the role-assigned users table", url: "https://github.com/FlowiseAI/Flowise/pull/5486" },
  { repo: "firecrawl/firecrawl", number: 2244, title: "Fix image search field mapping in the Python SDK", url: "https://github.com/firecrawl/firecrawl/pull/2244" },
  { repo: "Budibase/budibase", number: 16970, title: "Previous-step binding for automations", url: "https://github.com/Budibase/budibase/pull/16970" },
  { repo: "generalaction/emdash", number: 980, title: "Open chat and terminal links in the default browser", url: "https://github.com/generalaction/emdash/pull/980" },
];

export const recognition: RecognitionItem[] = [
  { src: "/mg5.png", alt: "PostHog maintainer comment on a merged pull request", prUrl: "https://github.com/PostHog/posthog/pull/34946", label: "PostHog #34946" },
  { src: "/mg3.png", alt: "Next.js maintainer comment on a merged pull request", prUrl: "https://github.com/vercel/next.js/pull/88653", label: "Next.js #88653" },
  { src: "/mg.png", alt: "OpenHands maintainer comment on a merged pull request", prUrl: "https://github.com/OpenHands/OpenHands/pull/12702", label: "OpenHands #12702" },
  { src: "/mg2.png", alt: "shadcn/ui maintainer comment on a merged pull request", prUrl: "https://github.com/shadcn-ui/ui/pull/8878", label: "shadcn/ui #8878" },
  { src: "/mg8.png", alt: "tldraw maintainer approving a pull request", prUrl: "https://github.com/tldraw/tldraw/pull/6987", label: "tldraw #6987" },
  { src: "/mg4.png", alt: "Haystack maintainer comment on a merged pull request", prUrl: "https://github.com/deepset-ai/haystack-core-integrations/pull/3016", label: "Haystack #3016" },
  { src: "/mg6.png", alt: "Prefect maintainer comment on a merged pull request", prUrl: "https://github.com/PrefectHQ/prefect/pull/19548", label: "Prefect #19548" },
  { src: "/mg7.png", alt: "OpenHands maintainer comment on a merged pull request", prUrl: "https://github.com/OpenHands/OpenHands/pull/13418", label: "OpenHands #13418" },
  { src: "/mg1.png", alt: "A founder's feedback on CompliScore, shared on LinkedIn", prUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7465349318556790784/", label: "CompliScore feedback" },
];

export const experience: Experience[] = [
  {
    role: "Summer Founder Fellow",
    company: "16VC",
    companyUrl: "https://16vc.com/",
    period: "Jun – Sep 2026",
    points: ["Summer Founder Fellowship 2026, San Francisco Bay Area (remote)."],
  },
  {
    role: "Open Source Community Growth",
    company: "Warestack",
    companyUrl: "https://www.warestack.com/",
    period: "Dec 2025 – May 2026",
    points: [
      "Onboarded 15+ GitHub organisations onto Watchflow.",
      "Reviewed 30+ pull requests, cutting average review time by about 25%.",
    ],
  },
  {
    role: "Software Engineer",
    company: "nFront Ventures",
    companyUrl: "https://nfrontventures.com/",
    period: "Aug 2025 – Jan 2026",
    points: [
      "Built features for nFront Academy, a white-label platform for VC funds and their portfolio companies.",
      "Shipped work used by 10+ funds and 2,000+ users.",
    ],
  },
  {
    role: "Intern",
    company: "Keploy",
    companyUrl: "https://keploy.io/",
    period: "May – Jul 2025",
    points: [
      "Worked on the open-source tool that generates tests from API traffic, with the core team on test generation, docs and adoption.",
    ],
  },
];

export const stack: StackGroup[] = [
  {
    label: "Daily",
    items: ["TypeScript", "React", "Next.js", "Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Tailwind", "Zustand", "System design"],
  },
  {
    label: "Comfortable",
    items: ["LLM agents", "AWS", "REST APIs", "Microservices", "Prisma", "Firebase", "shadcn/ui"],
  },
  { label: "Learning", items: ["Docker", "FastAPI", "PyTorch", "Cypress"] },
];
