import Image from "next/image";
import type { ReactNode } from "react";

import ContactSection from "@/components/ContactSection";
import GardenFooter from "@/components/GardenFooter";
import IntroVideo from "@/components/IntroVideo";
import ThemeToggle from "@/components/ThemeToggle";
import {
  EMAIL,
  RESUME_URL,
  X_FOLLOWERS,
  X_HANDLE,
  about,
  contributions,
  experience,
  facts,
  highlights,
  posts,
  projects,
  recognition,
  socials,
  stack,
  stats,
} from "@/data/portfolio";

const VISIBLE_PRS = 6;


function MergedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z" />
    </svg>
  );
}

function Section({
  id,
  title,
  aside,
  children,
}: {
  id: string;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <header className="section-head">
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
        {aside}
      </header>
      {children}
    </section>
  );
}

function External({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

/** Turns **phrase** into bold text. */
function emphasise(text: string) {
  return text
    .split("**")
    .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#top" className="brand">
            <span className="brand-mark" aria-hidden="true">
              N
            </span>
            <span className="brand-name">Neha Prasad</span>
          </a>
          <nav aria-label="Sections" className="topnav">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#open-source">Open source</a>
            <a href="#work">Work</a>
            <a href="#x">On X</a>
          </nav>
          <div className="topbar-end">
            <ThemeToggle />
            <a href="#contact" className="button button--primary">
              Contact
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="kicker">Neha Prasad · Full-stack engineer · Mumbai</p>
            <h1 className="hero-title">
              I ship AI products, and get developers to use them.
            </h1>
            <p className="hero-lead">
              150+ merged pull requests to Next.js, Mastra, LiteLLM and
              OpenHands. I build with TypeScript, React, Node and Python, and I
              make the demos that get products seen.
            </p>
            <p className="hero-status">
              <span className="dot" aria-hidden="true" />
              Looking for a full-time Software Engineer or DevRel role
            </p>
            <div className="hero-actions">
              <External href={RESUME_URL} className="button button--primary">
                View resume
              </External>
              <a className="button" href={`mailto:${EMAIL}`}>
                Email me
              </a>
            </div>
            <ul className="hero-links">
              {socials.map((s) => (
                <li key={s.label}>
                  <External href={s.href}>{s.label}</External>
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-visual">
            <div className="hero-portrait">
              <Image
                src="/portner.png"
                alt="Neha Prasad, smiling, in a cap on a wooden bridge"
                width={840}
                height={1050}
                priority
                sizes="(min-width: 900px) 400px, 96px"
              />
            </div>
          </div>
        </section>

        <ul className="stats stats--band" aria-label="Highlights">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>

        <Section id="about" title="About">
          <div className="about">
            <div className="about-text">
              {about.map((paragraph) => (
                <p key={paragraph}>{emphasise(paragraph)}</p>
              ))}
            </div>
            <dl className="facts">
              {facts.map((fact) => (
                <div key={fact.title}>
                  <dt>{fact.title}</dt>
                  <dd>{fact.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="jobs">
            {experience.map((job) => (
              <li key={job.company} className="job">
                <p className="job-when">{job.period}</p>
                <div>
                  <h3 className="job-title">
                    <External href={job.companyUrl}>{job.company}</External>
                    <span className="job-role"> · {job.role}</span>
                  </h3>
                  <p className="job-about">{job.about}</p>
                  {job.glance && (
                    <p className="job-glance">
                      {job.glance.map((s) => (
                        <span key={s.label}>
                          <strong>{s.value}</strong> {s.label}
                        </span>
                      ))}
                    </p>
                  )}
                  <ul className="job-points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="open-source"
          title="Open source"
          aside={
            <External href="https://github.com/nehaaprasad" className="pill pill--link">
              150+ merged PRs on GitHub
            </External>
          }
        >
          <div className="prs-card">
            <ul className="prs">
              {contributions.slice(0, VISIBLE_PRS).map((pr) => (
                <PrRow key={pr.url} {...pr} />
              ))}
            </ul>
            <details className="more">
              <summary>
                {contributions.length - VISIBLE_PRS} more pull requests
              </summary>
              <ul className="prs">
                {contributions.slice(VISIBLE_PRS).map((pr) => (
                  <PrRow key={pr.url} {...pr} />
                ))}
              </ul>
            </details>
          </div>

          <h3 className="subhead">
            What maintainers said
          </h3>
          <ul className="shots" aria-label="Maintainer feedback, scrolls sideways">
            {recognition.map((item) => (
              <li key={item.label}>
                <External href={item.prUrl} className="shot">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={520}
                    height={320}
                    sizes="340px"
                  />
                  <span>{item.label}</span>
                </External>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="work" title="Projects">
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <Browser project={project} sizes="(min-width: 900px) 360px, (min-width: 640px) 50vw, 100vw" />
                <ProjectText project={project} />
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="x"
          title="On X"
          aside={
            <External href={`https://x.com/${X_HANDLE}`} className="pill pill--link">
              @{X_HANDLE} · {X_FOLLOWERS} followers
            </External>
          }
        >
          <ol className="posts">
            {posts.map((post) => (
              <li key={post.url}>
                <External href={post.url} className="post">
                  <p className="post-views">
                    <strong>{post.views}</strong> views
                  </p>
                  <p className="post-text">{post.text}</p>
                  <p className="post-meta">
                    <span>{post.likes} likes</span>
                    {post.video && <span>Video</span>}
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </p>
                </External>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="stack" title="Stack and education">
          <div className="split">
            <dl className="rows">
              {stack.map((group) => (
                <div key={group.label}>
                  <dt>{group.label}</dt>
                  <dd>{group.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
            <dl className="rows rows--stacked">
              {highlights.map((item) => (
                <div key={item.title}>
                  <dt>{item.title}</dt>
                  <dd>{item.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        <ContactSection />
      </main>

      <GardenFooter />
      <IntroVideo />
    </>
  );
}

function Browser({ project, sizes }: { project: (typeof projects)[number]; sizes: string }) {
  return (
    <External href={project.liveLink} className="browser">
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        width={1200}
        height={750}
        sizes={sizes}
      />
    </External>
  );
}

function ProjectText({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="project-text">
      <h3 className="project-title">
        <External href={project.liveLink}>{project.title}</External>
      </h3>
      <p>{project.description}</p>
      <ul className="chips chips--small">
        {project.techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <p className="project-links">
        <External href={project.liveLink}>Live</External>
        <External href={project.repoLink}>Code</External>
        {project.videoLink && <External href={project.videoLink}>Demo video</External>}
      </p>
    </div>
  );
}

function PrRow({ repo, number, title, url, note }: (typeof contributions)[number]) {
  return (
    <li>
      <External href={url} className="pr">
        <MergedIcon className="merged" />
        <span className="pr-main">
          <span className="pr-title">{title}</span>
          {note && <span className="pr-note">{note}</span>}
          <span className="pr-repo">
            {repo} <span className="pr-num">#{number}</span>
          </span>
        </span>
      </External>
    </li>
  );
}
