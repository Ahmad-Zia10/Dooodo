# Design system: Nanhi AI Mindforge

Recorded from the built site (2026-10-09). Direction: a modernist transit-diagram identity in the Vignelli/Unimark tradition. The firm's two practices are drawn as two lines of one network, and work that needs both disciplines sits at **interchanges**. Tokens live in `src/app/globals.css` (`@theme`).

## Principles

- **The diagram is the identity.** Lines, stations, bullets and interchanges carry meaning, so use them where they inform (service lists, process steps, the legend) and never as decoration.
- **Restrained ground, committed lines.** Neutral paper and white plates; colour appears only as line colour.
- **Type does the work.** No eyebrows or kicker labels, no gradient text, and no icon-tile card grids. Headings stand alone.
- **Honest content.** Never fabricate clients, logos, testimonials or metrics (see PRODUCT.md).

## Colour

| Token | Value | Use |
|---|---|---|
| `paper` | `#f3f4f5` | Page ground, alternating sections |
| `surface` | `#ffffff` | Plates: hero, headers, alternating sections, inputs |
| `ink` | `#0e1116` | Text, station rings, primary buttons, footer and closing bands |
| `ink-2` | `#39404a` | Body copy |
| `ink-3` | `#5a626e` | Secondary/meta text (AA on paper and white) |
| `rule` | `#d3d8de` | Hairlines and dividers |
| `erp` | `#1f49c7` | The **E** line (Oracle ERP) |
| `erp-bright` | `#5b83ff` | The E line on dark grounds |
| `ai` | `#f2a20c` | The **A** line (AI). Not for text on light grounds |
| `ai-ink` | `#8a5300` | Saffron-family text, if needed |

The site uses a light theme only: buyers read it in office daylight.

## Type

Archivo variable font (weight and width axes), self-hosted via `next/font`.

- `.display`: width 88%, weight 680, tracking −0.032em, line-height 0.98. Used for page titles and closing bands.
- `.h-section`: width 90%, weight 660, `clamp(2rem, 3.6vw, 3.1rem)`.
- `.h-sub`: width 94%, weight 640, `clamp(1.25rem, 1.8vw, 1.5rem)`.
- `.lede`: 1.08 to 1.25rem, `ink-2`, max 62ch. `.prose-body`: line-height 1.65, max 68ch.
- Use tabular numerals for times and numbers.

## Components

- **Route bullet** (`LineBullet`): a filled circle with the line letter, **A** (saffron, ink letter) or **E** (cobalt, white letter). It is the smallest identity unit and doubles as a legend.
- **Station**: a white dot with a 3–3.5px ink ring. Hover or active fills it with ink.
- **Interchange**: a white capsule with an ink ring spanning two parallel lines.
- **Network map** (`NetworkMap`): 45°/90° geometry with labels angled at 45°. The lines draw in once on load, and hovering or focusing a station writes its summary into the caption rail. On mobile it is replaced by `CompactNetwork`, two parallel vertical lines with a station list.
- **Strip map** (`StripMap`): a vertical 8px line with ringed stations. Used for service catalogues, offers and the four delivery stages.
- **Rail** (`Rail`): a 9px band under the header naming the page's line. Saffron for AI pages, cobalt for ERP, both for cross-cutting pages, ink for neutral ones.
- **Buttons**: fully rounded, min-height 48px, with an arrow that slides 4px on hover. Variants: solid ink (hover cobalt), outline, inverse saffron on dark.
- **Text link**: underlined, with the underline darkening and the arrow sliding on hover.
- **Definition blocks**: a 3px ink top rule with `.h-sub` term and body. Use these instead of cards.
- **Closing band**: an ink section with a display headline and an inverse button.
- **Footer**: ink, with a saffron and cobalt double rail on top.

## Layout and spacing

- Container max 1240px; side padding 16 / 24 / 40px.
- Sections use 80px vertical padding on mobile and 112px from `sm` up. Paper and white sections alternate, separated by `rule` hairlines.
- Desktop layouts use a 12-column grid: headings in columns 1–4/5 and content in 6/7–12.

## Motion

- One authored moment per page: the network lines draw in (1.6s, expo-out), then the stations appear in a stagger. Strip-map lines grow from the top.
- All motion is gated by `prefers-reduced-motion: no-preference`, so content is visible by default.

## Accessibility

- Skip link, visible focus ring (2.5px cobalt), `aria-current` in navigation.
- The SVG network has a group label, focusable station links, an `aria-live` caption, and an sr-only list of stations.
- Form errors are linked with `aria-describedby`, and focus moves to the first invalid field.
- Bullets are labelled ("AI line", "Oracle ERP line") unless they are decorative.
