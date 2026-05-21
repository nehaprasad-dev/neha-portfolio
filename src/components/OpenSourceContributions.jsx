"use client";

import { useState } from "react";

export default function OpenSourceContributions() {
  const [activeTab, setActiveTab] = useState("merged"); // Changed from "open" to "merged"

  const contributions = {
    merged: [
      {
        repo: "deepset-ai/haystack-core-integrations",
        title: "feat(astra): add run_async to AstraEmbeddingRetriever",
        description:
          "Adds an async variant for AstraEmbeddingRetriever to avoid blocking the event loop.",
        type: "Feature",
        date: "Merged",
        url: "https://github.com/deepset-ai/haystack-core-integrations/pull/3016",
      },
      {
        repo: "shadcn-ui/ui",
        title: "feat: add @ui-layouts registry to directory",
        description:
          "Adds the @ui-layouts registry entry to the shadcn/ui directory registry.",
        type: "Feature",
        date: "Merged",
        url: "https://github.com/shadcn-ui/ui/pull/8878",
      },
      {
        repo: "lancedb/lancedb",
        title: "fix(node): handle null values in nullable boolean fields",
        description:
          "Fixes Node bindings to correctly handle boolean columns when all values are null.",
        type: "Bug Fix",
        date: "Merged",
        url: "https://github.com/lancedb/lancedb/pull/2657",
      },
      {
        repo: "Mintplex-Labs/anything-llm",
        title: "feat: Add Exa as a Search Provider",
        description:
          "Introduces Exa as a new search provider option for AnythingLLM agents.",
        type: "Feature",
        date: "Merged",
        url: "https://github.com/Mintplex-Labs/anything-llm/pull/4258",
      },
      {
        repo: "mastra-ai/mastra",
        title: "feat: support Anthropic programmatic tool calling (PTC)",
        description:
          "Adds support for Anthropic's programmatic tool calling flow.",
        type: "Feature",
        date: "Merged",
        url: "https://github.com/mastra-ai/mastra/pull/12400",
      },
      {
        repo: "run-llama/LlamaIndexTS",
        title: "feat: multi-turn image generation support",
        description:
          "Adds image_id support to image generation tools for multi-turn workflows.",
        type: "Feature",
        date: "Merged",
        url: "https://github.com/run-llama/LlamaIndexTS/pull/2106",
      },
      {
        repo: "calcom/cal.com",
        title: "fix: dynamic adapter imports not working in self-hosted instances",
        description:
          "Fixes adapter imports so integrations work correctly in self-hosted deployments.",
        type: "Bug Fix",
        date: "Merged",
        url: "https://github.com/calcom/cal.com/pull/23784",
      },
      {
        repo: "OpenHands/OpenHands",
        title: "fix selected repo disappearing in pen repository dropdown",
        description:
          "Fixes selection persistence so the chosen repo stays visible in the dropdown.",
        type: "Bug Fix",
        date: "Merged",
        url: "https://github.com/OpenHands/OpenHands/pull/12702",
      },

      {
        repo: "vercel/next.js",
        title: "fix: make RedirectType constant properties literal types",
        description:
          "Fixes RedirectType typing so constants are inferred as literal types, improving TS correctness.",
        type: "Bug Fix",
        date: "Merged",
        url: "https://github.com/vercel/next.js/pull/88653",
      },
    ],

    open: [
      {
        repo: "FlowiseAI/Flowise",
        title:
          "feat: Add sorting to role assigned users table (workspaces asc, users asc)",
        description:
          "Adds default sorting + sortable headers for role-assigned users (workspaces/users).",
        type: "Feature",
        date: "Merged",
        url: "https://github.com/FlowiseAI/Flowise/pull/5486",
      },

      {
        repo: "carbon-design-system/carbon",
        title:
          "fix(ai-skeleton): add display properties to fix flex container rendering",
        description:
          "Fixes AI skeleton components rendering incorrectly inside flex containers.",
        type: "Bug Fix",
        date: "Merged",
        url: "https://github.com/carbon-design-system/carbon/pull/20756",
      },
      {
        repo: "payloadcms/payload",
        title: "fix: ungenerated image sizes should not store original URL",
        description:
          "Ensures image size URL fields don’t fall back to the original URL when size generation fails.",
        type: "Bug Fix",
        date: "Merged",
        url: "https://github.com/payloadcms/payload/pull/15454",
      },

      {
        repo: "lancedb/lancedb",
        title: "fix(node): handle null values in nullable boolean fields",
        description:
          "Fixes Node bindings to correctly handle all-null boolean arrays.",
        type: "Bug Fix",
        date: "Merged",
        url: "https://github.com/lancedb/lancedb/pull/2657",
      },

      {
        repo: "PrefectHQ/prefect",
        title: "fix: optimize /api/task_runs/count endpoint performance",
        description:
          "Improves performance of the task_runs count endpoint for complex filters.",
        type: "Bug Fix",
        date: "Merged",
        url: "https://github.com/PrefectHQ/prefect/pull/19548",
      },

      {
        repo: "firecrawl/firecrawl",
        title: "fix: image search field mapping in Python SDK",
        description:
          "Fixes field mapping so image search results return expected fields in the Python SDK.",
        type: "Bug Fix",
        date: "Merged",
        url: "https://github.com/firecrawl/firecrawl/pull/2244",
      },

      {
        repo: "OpenHands/OpenHands",
        title: "fix: conversation tab state sync across browser tabs",
        description:
          "Keeps conversation tab state isolated per conversation, preventing cross-tab state clashes.",
        type: "Bug Fix",
        date: "Merged",
        url: "https://github.com/OpenHands/OpenHands/pull/11680",
      },

      {
        repo: "generalaction/emdash",
        title: "fix: make chat and terminal links open reliably in default browser",
        description:
          "Ensures markdown/terminal links open reliably using the system default browser.",
        type: "Bug Fix",
        date: "Merged",
        url: "https://github.com/generalaction/emdash/pull/980",
      },

      {
        repo: "Budibase/budibase",
        title: "feat: Add previous step binding for automations",
        description:
          "Adds a `previous` binding so automations can reference the prior step output more easily.",
        type: "Feature",
        date: "Merged",
        url: "https://github.com/Budibase/budibase/pull/16970",
      },

      {
        repo: "calcom/cal.com",
        title: "fix: dynamic adapter imports not working in self-hosted instances",
        description:
          "Fixes adapter imports so integrations work correctly in self-hosted deployments.",
        type: "Bug Fix",
        date: "Merged",
        url: "https://github.com/supabase/supabase/pull/37070",
      },

      {
        repo: "All PRs Open and Merged Here",
        title: "Click on the link to see all my PRs",
        description: "Click on the link to see all my PRs",
        type: "All PRs",
        url: "https://github.com/nehaaprasad",
      },
    ],
  };

  return (
    <div className="contributions-container">
      <div className="contributions-header">
        <div className="contributions-intro">
          <h3 className="contributions-title">
            Building the Future, One PR at a Time
          </h3>
          <p className="contributions-description">
            Contributing to open source projects that power the modern web. From
            bug fixes to new features, I believe in giving back to the developer
            community that has given so much to me.
          </p>
        </div>

        <div className="contributions-stats">
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">PR merged</div>
          </div>
        </div>
      </div>

      <div className="contributions-tabs">
        <button
          className={`tab-button ${activeTab === "merged" ? "active" : ""}`}
          onClick={() => setActiveTab("merged")}
        >
          <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          Merged Contributions
        </button>
        <button
          className={`tab-button ${activeTab === "open" ? "active" : ""}`}
          onClick={() => setActiveTab("open")}
        >
          <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          Open Pull Requests
        </button>
      </div>

      <div className="contributions-grid">
        {contributions[activeTab].map((contribution, index) => (
          <div key={index} className="contribution-card">
            <div className="contribution-header">
              <div className="contribution-repo">
                <svg
                  className="repo-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {contribution.repo}
              </div>
              <div
                className={`contribution-type ${contribution.type
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {contribution.type}
              </div>
            </div>

            <h4 className="contribution-title">{contribution.title}</h4>
            <p className="contribution-description">
              {contribution.description}
            </p>

            <div className="contribution-footer">
              <span className="contribution-date">{contribution.date}</span>
              <a
                href={contribution.url}
                className="contribution-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View PRs
                <svg
                  className="link-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="contributions-cta">
        <p className="cta-text">
          Want to see more of my contributions or collaborate on open source?
        </p>
        <div className="cta-buttons">
          <a
            href="https://github.com/nehaaprasad"
            className="cta-button primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="button-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub Profile
          </a>
          <a href="mailto:nehaaa06@gmail.com" className="cta-button secondary">
            <svg
              className="button-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
            </svg>
            Let's Collaborate
          </a>
        </div>
      </div>
    </div>
  );
}
