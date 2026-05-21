"use client";
import { useState } from "react";
import Image from "next/image";
import RepositoryLink from "./RepositoryLink";
import SectionHeading from "@/components/SectionHeading";

export default function ProjectsSection({ projects }) {
  const [showAll, setShowAll] = useState(false);

  // Initially show only 4 projects
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  // Determine card size based on content
  const getCardSize = (project) => {
    // Make shorter content cards smaller
    if (
      project.title === "HealthPulse" ||
      project.title === "DineDash" ||
      project.description.length < 180
    ) {
      return "small";
    }
    return "medium";
  };

  return (
    <section className="projects-section" id="projects">
      <SectionHeading title="PROJECTS" icon="projects" />
      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          <div
            className="project-card"
            data-size={getCardSize(project)}
            key={index}
          >
            <a
              href={project.liveLink}
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-image-container">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  width={360}
                  height={220}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack-tags">
                  {project.techStack.map((tech, techIndex) => (
                    <span className="tech-stack-tag" key={techIndex}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
            <div className="repository-links">
              {project.repoLink && (
                <RepositoryLink href={project.repoLink}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </RepositoryLink>
              )}
              {index === 3 && (
                <RepositoryLink href="https://drive.google.com/file/d/1R4gZ1vKUudm5vOJcM3bDc1S_SnvH10k7/view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20m-7-7 7 7 7-7" />
                  </svg>
                  Video
                </RepositoryLink>
              )}
              {index === 4 && (
                <RepositoryLink href="https://drive.google.com/file/d/1R7eAZUVClgFQsG_9JoDlVecanAU14S9c/view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20m-7-7 7 7 7-7" />
                  </svg>
                  Video
                </RepositoryLink>
              )}
              {index === 5 && (
                <RepositoryLink href="https://drive.google.com/file/d/1R8pR242fn-edmDCJt7Jb3eboMBP5j-0R/view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20m-7-7 7 7 7-7" />
                  </svg>
                  Video
                </RepositoryLink>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Less button */}
      {projects.length > 4 && (
        <button
          className="show-more-button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less Projects" : "Browse 5 More Live Demos"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={showAll ? "rotate-up" : ""}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      )}
    </section>
  );
}
