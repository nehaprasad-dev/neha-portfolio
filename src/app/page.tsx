import Image from "next/image";
import type { ReactNode } from "react";

import ContactSection from "@/components/ContactSection";
import LocalTime from "@/components/LocalTime";
import ThemeToggle from "@/components/ThemeToggle";
import {
  BLOG_URL,
  EMAIL,
  RESUME_URL,
  X_FOLLOWERS,
  X_HANDLE,
  about,
  contributions,
  experience,
  highlights,
  posts,
  projects,
  recognition,
  services,
  socials,
  stack,
  stats,
} from "@/data/portfolio";

const VISIBLE_PRS = 6;

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
      <div className="section-body">{children}</div>
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
        <a href="#top" className="wordmark">
          Neha Prasad
        </a>
        <div className="topbar-end">
          <nav aria-label="Sections" className="topnav">
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-portrait">
            <Image
              src="/portner.png"
              alt="Neha Prasad, smiling, in a cap on a wooden bridge"
              width={360}
              height={360}
              priority
              sizes="(min-width: 900px) 132px, 88px"
            />
          </div>
          <div className="hero-copy">
            <h1 className="hero-title">
              I ship AI products, and get developers to use them.
            </h1>
            <p className="hero-lead">
              Full-stack engineer in Mumbai. 150+ merged pull requests to
              Next.js, Mastra, LiteLLM, OpenHands and LlamaIndex. I build with
              TypeScript, React, Node and Python, and I make the demos that get
              products seen.
            </p>
            <p className="hero-status">
              <span className="dot" aria-hidden="true" />
              Looking for a full-time Software Engineer or DevRel role · Mumbai
              or remote
            </p>
            <div className="hero-actions">
              <External href={RESUME_URL} className="button button--primary">
                View resume
              </External>
              <a className="button" href={`mailto:${EMAIL}`}>
                Email me
              </a>
            </div>
            <ul className="stats" aria-label="Highlights">
              {stats.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
            <ul className="hero-links">
              {socials.map((s) => (
                <li key={s.label}>
                  <External href={s.href}>{s.label}</External>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Section id="what-i-do" title="What I do">
          <ul className="cards">
            {services.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="about" title="About">
          <div className="about">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="jobs">
            {experience.map((job) => (
              <li key={job.company} className="job">
                <div className="job-head">
                  <h3>
                    <External href={job.companyUrl}>{job.company}</External>
                  </h3>
                  <span className="job-period">{job.period}</span>
                </div>
                <p className="job-about">{job.about}</p>

                <dl className="job-meta">
                  <div>
                    <dt>Role</dt>
                    <dd>{job.role}</dd>
                  </div>
                  {job.location && (
                    <div>
                      <dt>Location</dt>
                      <dd>{job.location}</dd>
                    </div>
                  )}
                  <div>
                    <dt>Focus</dt>
                    <dd>{job.focus}</dd>
                  </div>
                </dl>

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

                <h4 className="job-owned">What I owned</h4>
                <ul className="job-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="open-source"
          title="Open source"
          aside={
            <External href="https://github.com/nehaaprasad" className="section-aside">
              150+ merged PRs
            </External>
          }
        >
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
        </Section>

        <Section id="feedback" title="What maintainers said">
          <ul className="shots" aria-label="Maintainer feedback, scrolls sideways">
            {recognition.map((item) => (
              <li key={item.label}>
                <External href={item.prUrl} className="shot">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={520}
                    height={320}
                    sizes="280px"
                  />
                  <span>{item.label}</span>
                </External>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="work" title="Selected work">
          {caseStudies.map((project) => (
            <article className="project project--featured" key={project.title}>
              <External href={project.liveLink} className="project-shot">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={1200}
                  height={750}
                  sizes="(min-width: 900px) 640px, 100vw"
                />
              </External>
              <ProjectText project={project} />
            </article>
          ))}
          <div className="project-grid">
            {rest.map((project) => (
              <article className="project" key={project.title}>
                <External href={project.liveLink} className="project-shot">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={720}
                    height={450}
                    sizes="(min-width: 640px) 320px, 100vw"
                  />
                </External>
                <ProjectText project={project} />
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="x"
          title="On X"
          aside={
            <External href={`https://x.com/${X_HANDLE}`} className="section-aside">
              @{X_HANDLE} · {X_FOLLOWERS} followers
            </External>
          }
        >
          <ol className="posts">
            {posts.map((post) => (
              <li key={post.url}>
                <External href={post.url} className="post">
                  <p className="post-text">{post.text}</p>
                  <p className="post-meta">
                    <span className="post-views">{post.views} views</span>
                    <span>{post.likes} likes</span>
                    {post.video && <span>Video</span>}
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </p>
                </External>
              </li>
            ))}
          </ol>
          <External href={`https://x.com/${X_HANDLE}`} className="text-link">
            Follow along on X
          </External>
        </Section>

        <Section id="stack" title="Stack">
          <dl className="stack">
            {stack.map((group) => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="highlights" title="Education and awards">
          <ul className="cards">
            {highlights.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <ContactSection />
      </main>

      <footer className="footer">
        <p>
          <LocalTime />
        </p>
        <p>
          <External href={BLOG_URL}>Blog</External>
          <span aria-hidden="true"> · </span>
          <External href="https://github.com/nehaprasad-dev/neha-portfolio">
            Source
          </External>
        </p>
      </footer>
    </>
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
        <dl className="stack project-case">
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
      <p className="project-meta">{project.techStack.join(" · ")}</p>
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
        <span className="pr-repo">
          {repo} <span className="pr-num">#{number}</span>
        </span>
        <span className="pr-main">
          <span className="pr-title">{title}</span>
          {note && <span className="pr-note">{note}</span>}
        </span>
      </External>
    </li>
  );
}
