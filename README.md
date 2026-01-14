# Portfolio

A production-ready personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Content updates

All content lives in a single source of truth:

- `src/data/profile.ts` — update your name, tagline, links, projects, experience, and skills.

The homepage and `/projects` page both pull from this file.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Create a new project in Vercel and import the repository.
3. Use the default build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
4. Deploy and set your production domain.

## Resume PDF

The `/resume` route redirects to `/resume-placeholder.pdf` in the `public/` directory.

To replace it:

1. Delete `public/resume-placeholder.pdf`.
2. Add your resume PDF with the exact same filename.
3. Redeploy.

## Tooling

- Lint: `npm run lint`
- Format: `npm run format`
- Production build: `npm run build`
