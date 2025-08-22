## Syboh Solutions Website

Modern marketing site for Syboh Solutions LLC. Built with Next.js App Router, TypeScript, Tailwind.

### Local Development

- Node 18+
- Install deps: `npm install`
- Run dev: `npm run dev`
- Build: `npm run build` and `npm run start`

### Environment Variables

Set these in `.env.local` or in Vercel Project Settings:

- `NEXT_PUBLIC_SITE_URL` (e.g. https://sybohsolutions.com)
- `RESEND_API_KEY` (optional; if omitted, Formspree fallback is used if `FORMSPREE_URL` is set)
- `CONTACT_TO` (defaults to info@sybohsolutions.com)
- `CONTACT_FROM` (defaults to web@sybohsolutions.com)
- `CALENDLY_URL` (placeholder OK)
- `NEXT_PUBLIC_FEATURE_BOHBAR` (true/false)
- `FORMSPREE_URL` (optional fallback endpoint)

### Editing Content

All editable text lives in `content/` as JSON. Example: `content/home.json`.

### Routes

- `/` Home (hero, services intro, how-we-work, CTA)
- `/services` (overview)
  - `/services/hospitality-training`
  - `/services/operator-tech-installs`
  - `/services/vending`
  - `/services/site-creation`
  - `/services/bohbar` (hidden unless `NEXT_PUBLIC_FEATURE_BOHBAR=true`)
- `/roadmaps` (accordions + one-pager download)
- `/about`
- `/contact` (form → `/api/contact`)
- `/legal/privacy`, `/legal/terms`

### Contact Form

`/api/contact` uses Resend when `RESEND_API_KEY` is present; otherwise, posts to `FORMSPREE_URL` if provided.

### SEO

- Metadata is set in `app/layout.tsx`
- Sitemap: `npm run sitemap` (via `next-sitemap`) outputs to `public/`
- `public/robots.txt` included

### Deployment (Vercel)

1. Push this repo to GitHub
2. `vercel` → Import repo → Set env vars → Deploy
3. Point `sybohsolutions.com` to Vercel
4. Verify Vercel Analytics and contact form

### Where to Edit Copy

- Home: `content/home.json` and `app/page.tsx`
- Services pages: `app/services/*/page.tsx`
- Roadmaps: `app/roadmaps/page.tsx`
- About: `app/about/page.tsx`
- Contact: `app/contact/page.tsx`
