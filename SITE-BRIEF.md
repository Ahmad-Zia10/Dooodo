# Nanhi AI Mindforge — Website Brief (v1)

Agreed in the discovery interview, 2026-10-09. This is the source of truth for the rebuild.

## Goal
Replace the 5-minute prototype with a professional, industry-standard company website that
positions Nanhi AI Mindforge as a credible, globally-minded technology consultancy —
**without fabricating a track record.**

## Facts
| | |
|---|---|
| Name | **Nanhi AI Mindforge** (legal: Nanhi AI Mindforge Pvt. Ltd. — confirm) |
| Stage | New firm, no public clients yet |
| HQ | Delhi NCR, India — serving clients globally |
| Service lines | (1) AI agents, automation & conversational AI · (2) Oracle ERP implementation & intelligence |
| Audience | Both equally: enterprise ERP buyers (CFO/CIO) and mid-market/startup AI buyers |
| People on site | None — company voice only |
| Logo | None — design a typographic wordmark + monogram favicon |

## Credibility rules (non-negotiable)
- **Remove** fake testimonials and the vendor-logo strip (implies partnerships we don't have).
- No invented metrics, client counts, or "trusted by" claims.
- Replace with honest trust signals: clear methodology, engagement models, explicit
  security/data-handling stance, technology expertise (framed as "we build with", not "partners"),
  concrete example use-cases per industry, a real address, and a working contact path.
- Placeholders for anything we don't know yet are marked `TODO(owner)` in code.

## Sitemap
- `/` Home — positioning, two service lines, how we work, industries, CTA
- `/services/ai` — AI agents, automation, chatbots, GenAI/copilots, ML, document AI
- `/services/oracle-erp` — implementation, migration, extensions, integrations, AI on ERP, managed support
- `/services/app-development`, `/services/consulting` (lighter pages)
- `/industries` — use-case driven, per industry
- `/approach` — process, engagement models, security & data handling
- `/about` — mission, values, how we operate, Delhi NCR HQ
- `/careers` — culture + "always looking for…" + apply by email
- `/contact` — working form (Zod-validated, sent via Resend), email, address
- `/privacy`, `/terms`

## Design direction
Refined enterprise: restrained, editorial, generous white space, deep ink + one accent,
serious typography, subtle motion only. Light theme primary. Fully responsive, WCAG AA.

## Tech
Next.js (App Router) + TypeScript + Tailwind, deployed to Vercel. Per-page metadata,
Open Graph images, sitemap.xml, robots.txt, Organization JSON-LD. Prototype `index.html`
is replaced (remains in git history).

## Out of scope for v1
Chatbot, blog/insights, team page, CMS. Revisit once there is real content.

## Open items for the owner
- Legal entity name, registered address, CIN/GST (footer)
- Contact inbox address and the domain the site will use
- Resend API key (or alternative) for the contact form
