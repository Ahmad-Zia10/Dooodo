# Nanhi AI Mindforge: company website

A multi-page marketing site for Nanhi AI Mindforge, built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and TypeScript.

- Product facts and constraints: [PRODUCT.md](PRODUCT.md)
- Visual system: [DESIGN.md](DESIGN.md)
- Original brief and open items: [SITE-BRIEF.md](SITE-BRIEF.md)

## Run locally

```bash
npm install
npm run dev
```

## Content

All copy lives in `src/content/`:

| File | What it holds |
|---|---|
| `site.ts` | Company facts: name, legal name, address, emails, CIN/GSTIN. Items marked `TODO(owner)` must be confirmed before launch. |
| `services.ts` | The two service lines (AI and Oracle ERP), their stations and the interchanges. Drives the home network map and the service pages. |
| `industries.ts` | Example use cases by sector. These are capabilities, not client work. |
| `approach.ts` | Delivery stages, principles, engagement models and security commitments. |

## Contact form

`POST /api/contact` validates with Zod and sends through Resend. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL`. Without them, submissions are logged in development and return a "please email us" error in production.

## Deploy

Deploy on Vercel and set the same environment variables there, plus `NEXT_PUBLIC_SITE_URL`.
