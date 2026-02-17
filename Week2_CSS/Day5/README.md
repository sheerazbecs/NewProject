# The Literary Catalog

A static front-end book catalog website built with HTML and CSS. Features a curated collection of classic literature with a warm, editorial aesthetic.

## Structure
```
project/
├── index.html
└── styles.css
```
## Sections
| Section | Key Elements |
|---|---|
| Header | Site title, tagline |
| Navigation | Anchor links to all sections |
| Featured Book | Book cover, quote, CTA buttons |
| Catalog | 3-column book card grid |
| Best Sellers | Ranked table with trend indicators |
| Genres & Reading List | Two-column layout (ul + ol) |
| Newsletter | Sign-up form with inputs, select, checkboxes, radio buttons |
| Footer | Links, copyright |

## Styling Highlights
- **Typography** — `Playfair Display` (Google Fonts) for headings, `Georgia` for body
- **Color Palette** — Warm parchment tones (`#faf6ef`, `#f0e6d3`), deep brown (`#1a110a`), terracotta (`#8b3a1e`), gold (`#c9993a`)
- **Layout** — Flexbox (nav, featured section, radio groups) + CSS Grid (book catalog, two-column, form rows)
- **CSS Methods** — External stylesheet (`styles.css`) with selective inline styles for one-off overrides

## No Dependencies
Plain HTML5 and CSS3 — no frameworks, no JavaScript. Google Fonts loaded via CDN. Book covers via [Open Library Covers API](https://covers.openlibrary.org).