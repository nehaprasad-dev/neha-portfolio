import Image from "next/image";
import type { ReactNode } from "react";

import ContactSection from "@/components/ContactSection";
import GardenFooter from "@/components/GardenFooter";
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

const repos = [...new Set(contributions.map((pr) => pr.repo))];
const reach = (views: string) => parseFloat(views);
const topReach = Math.max(...posts.map((post) => reach(post.views)));

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
  tint,
  children,
}: {
  id: string;
  title: string;
  aside?: ReactNode;
  tint?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={tint ? "section section--tint" : "section"}
      aria-labelledby={`${id}-title`}
    >
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

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function Home() {
  const caseStudies = projects.filter((p) => p.problem && p.built);
  const rest = projects.filter((p) => !(p.problem && p.built));

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
              I ship AI products, and <em>get developers to use them.</em>
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

        <div className="marquee" aria-hidden="true">
          <ul>
            {[...repos, ...repos].map((repo, i) => (
              <li key={i}>
                <MergedIcon className="merged" />
                {repo}
              </li>
            ))}
          </ul>
        </div>

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
            <div className="card about-card">
              {about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <dl className="card facts">
              {facts.map((fact) => (
                <div key={fact.title}>
                  <dt>{fact.title}</dt>
                  <dd>{fact.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        <Section id="experience" title="Experience" tint>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company} className="tl-item">
                <p className="tl-when">{job.period}</p>
                <article className="card job">
                  <header className="job-head">
                    <h3 className="job-company">
                      <External href={job.companyUrl}>{job.company}</External>
                    </h3>
                    <p className="job-role">{job.role}</p>
                  </header>
                  <p className="job-about">{job.about}</p>
                  <p className="job-tags">
                    {[job.location, job.focus].filter(Boolean).join(" · ")}
                  </p>

                  {job.glance && (
                    <ul className="stats stats--job" aria-label="At a glance">
                      {job.glance.map((s) => (
                        <li key={s.label}>
                          <strong>{s.value}</strong>
                          <span>{s.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="label">What I owned</p>
                  <ul className="job-points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
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
          <div className="card prs-card">
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

        <Section id="work" title="Projects" tint>
          <div className="cases">
            {caseStudies.map((project) => (
              <article className="card case" key={project.title}>
                <Browser project={project} sizes="(min-width: 900px) 540px, 100vw" />
                <ProjectText project={project} />
              </article>
            ))}
          </div>
          <div className="project-grid">
            {rest.map((project) => (
              <article className="card project" key={project.title}>
                <Browser project={project} sizes="(min-width: 640px) 520px, 100vw" />
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
                <External href={post.url} className="card post">
                  <p className="post-views">
                    <strong>{post.views}</strong> views
                  </p>
                  <span className="reach">
                    <span style={{ width: `${(reach(post.views) / topReach) * 100}%` }} />
                  </span>
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

        <Section id="stack" title="Stack">
          <dl className="rows">
            {stack.map((group) => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="highlights" title="Education and awards" tint>
          <dl className="rows">
            {highlights.map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <ContactSection />
      </main>

      <GardenFooter />
    </>
  );
}

function Browser({ project, sizes }: { project: (typeof projects)[number]; sizes: string }) {
  return (
    <External href={project.liveLink} className="browser">
      <span className="browser-bar">
        <i />
        <i />
        <i />
        <span className="browser-url">{new URL(project.liveLink).host}</span>
      </span>
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
      {project.problem && project.built && (
        <dl className="project-case">
          <div>
            <dt>Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>What I built</dt>
            <dd>{project.built}</dd>
          </div>
        </dl>
      )}
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
        <span className="pr-badge">Merged</span>
      </External>
    </li>
  );
}
