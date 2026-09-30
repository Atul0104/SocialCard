# Atul Ganesh Rathod — Personal website

Responsive personal site built with Next.js App Router, TypeScript, and custom CSS. Content lives in `src/data/profile.ts`.

## Run locally

Requires Node.js 20.9+. Copy `.env.example` to `.env.local`, set `NEXT_PUBLIC_SITE_URL`, run `npm install`, then `npm run dev` and open http://localhost:3000. Use `npm run typecheck`, `npm run lint`, and `npm run build` before deployment.

## Personalize

Edit `src/data/profile.ts` to update the public email, links, skills, experience, and projects. Experience and projects are blank until verified details are added. Put your actual PDF at `public/resume.pdf`; no resume is fabricated.

## Feedback inbox

The portfolio feedback form delivers messages through Resend. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and a verified `CONTACT_FROM_EMAIL` to `.env.local` (or your deployment's server environment) to enable it. The form remains disabled until all three values are set and offers an email fallback. Keep these credentials server-side.

Company profiles are generated from the records in `src/data/profile.ts`; organization descriptions and figures link to the relevant official company source. Keep employment facts and dates grounded in the resume.

## Deploy

Push to GitHub, import into Vercel, set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS domain, add `public/resume.pdf`, and deploy. No database is needed for the static profile.
