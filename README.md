# Neha Prasad - Portfolio

Personal portfolio site for **Neha Prasad**, full-stack engineer focused on LLM agents, production web apps, and open source.

<img width="1353" height="607" alt="image" src="https://github.com/user-attachments/assets/6133c85b-4811-4ca3-8f14-1cbfa1a37a8a" />


Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

## Live site

Deploy your latest build to Vercel (or your host of choice). Example:

`https://neha-portfoliooo.vercel.app`

## Features

- **Hero** — intro, portrait, live IST timer, and social links
- **About** — structured highlights (built projects, open source)
- **Open Source Contributions** — merged / open PR tabs with contribution list
- **Recognition** — scrolling gallery of maintainer praise and merged PRs
- **Experience** — timeline-style work history
- **Projects** — project cards with live demos, GitHub links, and tech tags
- **Tech Stack** — skills grouped by experience level
- **Contact** — Cal.com booking links
- **Responsive layout** — sticky sidebar + editorial layout on desktop; simplified mobile nav

## Tech stack

| Layer | Tools |
|-------|--------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| UI | [React 19](https://react.dev) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com), custom CSS |
| Fonts | Inter, Fraunces, JetBrains Mono (Google Fonts) |
| Deploy | [Vercel](https://vercel.com) (recommended) |

## Project structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, metadata, fonts
│   ├── page.tsx        # Main portfolio page
│   └── globals.css     # Global styles and section theming
├── components/
│   ├── OpenSourceContributions.tsx
│   ├── PrRecognitionGallery.tsx
│   ├── ProjectsSection.tsx
│   ├── SectionHeading.tsx
│   ├── StatusIndicator.tsx
│   ├── Timer.tsx
│   └── ...
└── types/
    └── portfolio.ts      # Shared TypeScript types (Project, Contribution, etc.)
```

## Getting started

### Prerequisites

- **Node.js** 18.18+ (20+ recommended)
- **npm** (or yarn / pnpm / bun)

### Install

```bash
git clone <your-repo-url>
cd neha-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If the dev server fails with a stale lock, stop other Next processes and retry:

```bash
pkill -f "next dev"
rm -f .next/dev/lock
npm run dev
```

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Customization

| What to change | Where |
|----------------|--------|
| Projects | `projects` array in `src/app/page.tsx` |
| Open source PRs | `src/components/OpenSourceContributions.tsx` |
| Recognition screenshots | `ITEMS` in `src/components/PrRecognitionGallery.tsx` |
| Experience | Experience section in `src/app/page.tsx` |
| Tech stack | Tech stack section in `src/app/page.tsx` |
| Site metadata | `metadata` in `src/app/layout.tsx` |
| Colors & layout | `src/app/globals.css` |

Shared types live in `src/types/portfolio.ts` — update these when adding new data shapes.

## Deploy

### Vercel (recommended)

1. Push the repo to GitHub.
2. Import the project on [Vercel](https://vercel.com/new).
3. Deploy — no extra config required for a standard Next.js app.

Build command: `npm run build`  
Output: Next.js default

## License

Private portfolio project. All rights reserved unless otherwise noted.

## Contact

- **GitHub:** [@nehaaprasad](https://github.com/nehaaprasad)
- **Email:** nehaprasad27118@gmail.com
- **LinkedIn:** [Neha Prasad](https://www.linkedin.com/in/neha-prasad-92499821b/)
