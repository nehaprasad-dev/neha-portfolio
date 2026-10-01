# Neha Prasad - Portfolio

Personal portfolio site for **Neha Prasad**, full-stack engineer focused on LLM agents, production web apps, and open source.

<img width="1353" height="607" alt="image" src="https://github.com/user-attachments/assets/6133c85b-4811-4ca3-8f14-1cbfa1a37a8a" />


Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

## Live site

Deploy your latest build to Vercel (or your host of choice). Example:

`https://neha-portfoliooo.vercel.app`

## Features

- **Hero**: portrait, one-line pitch, availability and links
- **Selected work**: a featured project plus the rest (compact rows on phones)
- **Lately on X**: her best-performing posts by reach, linking to each post
- **Open source**: notable merged PRs (more behind a native disclosure) and maintainer feedback screenshots in a swipeable row
- **Experience** and **Stack**
- **Contact**: email, plus a Cal.com calendar that loads only when "Book a call" is tapped
- **Mobile first**, light and dark themes from the OS setting, no sticky chrome

## Tech stack

| Layer | Tools |
|-------|--------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| UI | [React 19](https://react.dev) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com), custom CSS |
| Fonts | Schibsted Grotesk via `next/font` |
| Deploy | [Vercel](https://vercel.com) (recommended) |

## Project structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, metadata, font
│   ├── page.tsx        # The page (server component)
│   └── globals.css     # Tokens and styles, mobile first
├── components/
│   ├── ContactSection.tsx  # Book-a-call + Cal.com embed
│   └── LocalTime.tsx       # IST clock in the footer
├── data/
│   └── portfolio.ts    # All content: projects, X posts, PRs, experience, stack
└── types/
    └── portfolio.ts    # Shared types
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
| Projects, X posts, PRs, recognition, experience, stack, links | `src/data/portfolio.ts` |
| X posts | `posts` in `src/data/portfolio.ts` (keep ordered by views; refresh the numbers from x.com) |
| Site metadata | `metadata` in `src/app/layout.tsx` |
| Colors, type and layout | tokens at the top of `src/app/globals.css` |

Shared types live in `src/types/portfolio.ts`; update these when adding new data shapes.

## Deploy

### Vercel (recommended)

1. Push the repo to GitHub.
2. Import the project on [Vercel](https://vercel.com/new).
3. Deploy. No extra config required for a standard Next.js app.

Build command: `npm run build`  
Output: Next.js default

## License

Private portfolio project. All rights reserved unless otherwise noted.

## Contact

- **GitHub:** [@nehaaprasad](https://github.com/nehaaprasad)
- **Email:** nehaprasad27118@gmail.com
- **LinkedIn:** [Neha Prasad](https://www.linkedin.com/in/neha-prasad-92499821b/)
