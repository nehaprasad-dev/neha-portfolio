"use client";

import Image from "next/image";
import type { RecognitionItem } from "@/types/portfolio";

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

const ITEMS: RecognitionItem[] = [
  {
    src: "/mg.png",
    alt: "OpenHands merged PR",
    prUrl: "https://github.com/OpenHands/OpenHands/pull/12702",
    label: "OpenHands #12702",
  },
  {
    src: "/mg1.png",
    alt: "VC-builder Post on LinkedIn",
    prUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7465349318556790784/",
    label: "LinkedIn #7465349318556790784",
  },
  {
    src: "/mg2.png",
    alt: "shadcn/ui merged PR",
    prUrl: "https://github.com/shadcn-ui/ui/pull/8878",
    label: "shadcn-ui/ui #8878",
  },
  {
    src: "/mg3.png",
    alt: "Next.js merged PR",
    prUrl: "https://github.com/vercel/next.js/pull/88653",
    label: "vercel/next.js #88653",
  },
  {
    src: "/mg4.png",
    alt: "OpenHands merged PR",
    prUrl: "https://github.com/deepset-ai/haystack-core-integrations/pull/3016",
    label: "haystack-core-integrations #3016",
  },
  {
    src: "/mg5.png",
    alt: "PostHog merged PR",
    prUrl: "https://github.com/PostHog/posthog/pull/34946",
    label: "PostHog/posthog #34946",
  },
  {
    src: "/mg6.png",
    alt: "PrefectHQ merged PR",
    prUrl: "https://github.com/PrefectHQ/prefect/pull/19548",
    label: "PrefectHQ/prefect #19548",
  },
  {
    src: "/mg7.png",
    alt: "OpenHands merged PR",
    prUrl:
      "https://github.com/OpenHands/OpenHands/pull/13418",
    label: "OpenHands #13418",
  },

  {
    src: "/mg7.png",
    alt: "tldraw Merged PR",
    prUrl:
      "https://github.com/tldraw/tldraw/pull/6987",
    label: "tldraw #6987",
  },
];

function Cell({ src, alt, prUrl, label }: RecognitionItem) {
  const overlay = (
    <div className="recognition-overlay" aria-hidden="true">
      <span className="recognition-badge">PR merged</span>
      {label ? (
        <span className="recognition-pr-label">{label}</span>
      ) : (
        <span className="recognition-pr-label recognition-pr-label--muted">
          Set link in PrRecognitionGallery.jsx
        </span>
      )}
      {prUrl ? (
        <span className="recognition-cta">Open PR →</span>
      ) : null}
    </div>
  );

  const body = (
    <div className="recognition-card-body">
      <div className="recognition-thumb">
        <Image
          src={src}
          alt={alt}
          width={440}
          height={248}
          sizes="(max-width: 520px) 88vw, 420px"
          className="recognition-img-inner"
        />
      </div>
      {overlay}
    </div>
  );

  const footer = prUrl ? (
    <div className="recognition-card-footer">
      <span className="recognition-footer-meta">
        <GitHubMark className="recognition-footer-icon" />
        GitHub
      </span>
      <span className="recognition-footer-action">
        View original
        <ExternalLinkIcon className="recognition-footer-external" />
      </span>
    </div>
  ) : null;

  const inner = (
    <>
      {body}
      {footer}
    </>
  );

  if (prUrl) {
    return (
      <a
        href={prUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="recognition-card recognition-card--link"
      >
        {inner}
      </a>
    );
  }

  return <div className="recognition-card recognition-card--static">{inner}</div>;
}

export default function PrRecognitionGallery() {
  const loopItems = [...ITEMS, ...ITEMS];

  return (
    <div className="recognition-wrap">
     
      <div
        className="recognition-train-mask"
        role="region"
        aria-label="Recognition screenshots, scrolling horizontally"
      >
        <div className="recognition-train-track">
          {loopItems.map((item, i) => (
            <Cell key={`${item.src}-${i}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
