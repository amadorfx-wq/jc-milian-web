# Design System: JC Milian Construction
**Project ID:** amadorfx-wq/jc-milian-web (GitHub Repository)

---

## 1. Visual Theme & Atmosphere

The JC Milian Construction website embodies **"Silent Elegance"** — a philosophy of understated power. The aesthetic is editorial, architectural, and intensely minimal. Inspired by luxury hospitality and Swiss minimalism, the design communicates premium quality without ostentation. 

The atmosphere is **dense but breathable**: bold typographic statements create visual tension, while generous whitespace ensures the page never feels cluttered. The overall mood is sophisticated, masculine, and authoritative — like stepping into a high-end architectural firm.

---

## 2. Color Palette & Roles

| Name | Hex | Role |
|------|-----|------|
| **Obsidian Black** | `#1C1917` | Primary background, dominant text |
| **Warm Cream** | `#FAFAF9` | Page background, light section backgrounds |
| **Smoke Gray** | `#78716C` | Secondary text, labels, captions |
| **Deep Crimson** | `#C0392B` | Primary accent — all CTAs, accent headings, active states, borders |
| **Crimson Light** | `#E74C3C` | Hover states, lighter crimson moments |
| **Steel Gray** | `#D6D3D1` | Borders, subtle surfaces, input underlines |

**Accent Philosophy:** The Deep Crimson is reserved for high-impact moments: active portfolio buttons, section subtitles, CTA text, border-left on hover cards, and guarantee banner headings. It reads as a "power mark" — used sparingly for maximum impact.

---

## 3. Typography Rules

- **Headings:** `Playfair Display` — serif with elegant contrast between thick and thin strokes. Weight 400. Letter-spacing: -0.05em. Line-height: 0.95 for hero, 1.1 for section titles.
- **Body / UI Text:** `Inter` — geometric sans-serif for supreme readability. Weights 300 (subtitle), 400 (body), 500 (labels), 600 (step numbers, button uppercase).
- **CTA Buttons:** Inter 500, letter-spacing: 0.10em, ALL CAPS — commanding and formal.
- **Step Numbers:** Inter 600, letter-spacing: 0.15em, ALL CAPS — "01", "02", "03" formatted as badges.
- **Hero Title:** Clamp-responsive — `clamp(4rem, 8vw, 8.5rem)`, line-height: 0.95. Feels exaggerated and editorial.

---

## 4. Component Stylings

- **Primary Buttons:** Sharp squared-off edges (0px border-radius). Obsidian Black background, Deep Crimson text, thin Crimson border. On hover: Deep Crimson fills entirely via `scaleX` animation, text turns Cream White. Subtle pulsing shadow animation keeps it alive at rest (`magnetic-pulse`).

- **Navigation:** Fixed, transparent on top. On scroll: Warm Cream background with 20px backdrop blur (glassmorphism frosted effect) and soft border. Links are uppercase, small caps, with animated underline on hover.

- **Service Cards:** Sharp edges, no border-radius. Grayscale photography at rest (80% grayscale). On hover: color erupts, card lifts 15px, deep shadow appears, and images scales up. A shimmer light sweep crosses the card on hover.

- **Portfolio Selector Buttons:** Pill-shaped (4px radius), transparent at rest, Crimson fill when active. Tab-style switcher for Kitchen / Bathroom / Basement.

- **Before/After Slider Handle:** Thin 2px Crimson vertical line with a circular Crimson button showing "◄ ►". Interactive drag gesture.

- **Process Steps:** Accordion-style on mobile, 3-column grid on desktop. Active step has Steel Gray background. Step numbers in Crimson, bold uppercase Inter.

- **Guarantee Banner:** Glassmorphism panel — Obsidian translucent background, blur(20px), Cream White text, Crimson accent heading.

- **Trust Signals Box:** Same glassmorphism treatment — dark frosted glass on a light cream background.

- **Form Inputs:** Flat, no background, only a bottom border `2px solid Steel Gray`. On focus: border color shifts to Crimson. Floating label animates above the input on focus.

- **Blog Cards:** No border-radius. On hover: lifts 10px with deep shadow (`0 30px 60px`).

---

## 5. Layout Principles

- **Padding:** Generous — sections use `8rem 0` to `10rem 0` vertical padding. The breathing room signals premium positioning.
- **Container:** Max 1440px, 5% horizontal padding.
- **Service Grid:** A 12-column asymmetric grid — one large card (8-col × 600px), one medium (4-col × 600px), one narrow (5-col × 450px), one wide (7-col × 450px).
- **Hero Split:** 50/50 split. Text occupies left 50%, full-height architecture photo fills right 50%. On mobile: photo disappears, text expands full width.
- **Whitespace as Content:** Large empty spaces between sections are intentional. They force the user to breathe and focus on each section in isolation.
- **Mobile:** Portfolio converts from a drag-slider to a vertical stack of image cards with Crimson left-border accent on hover.

---

## 6. Design System Notes for Stitch Generation

When generating new screens for this project, use the following prompt prefix:

```
Ultra-luxury Atlanta remodeling company website screen. Silent Elegance aesthetic — Swiss minimalist tension with editorial typography.

DESIGN SYSTEM (REQUIRED):
- Platform: Web, Desktop-first (Mobile Responsive)
- Theme: Light/Dark split — Warm Cream (#FAFAF9) sections alternate with Obsidian Black (#1C1917) sections
- Background: Warm Cream (#FAFAF9)
- Dark Surface: Obsidian Black (#1C1917) for portfolio, contact dark panels
- Primary Accent: Deep Crimson (#C0392B) for CTAs, headings, active states
- Text Primary: Obsidian Black (#1C1917)
- Text Secondary: Smoke Gray (#78716C)
- Borders: Steel Gray (#D6D3D1)
- Buttons: Sharp, squared-off edges (0px radius), Crimson border, animated Crimson fill on hover
- Cards: No border-radius (0px), grayscale images that colorize on hover
- Inputs: Flat underline-only style with floating labels
- Typography: Playfair Display for headings (editorial, serene), Inter for body (precise, modern)
- Hero title: Exaggeratedly large (8rem+), tight line-height, nearly overlapping
- Glassmorphism: On dark panels floating over light backgrounds (blur 20px, translucent obsidian)
```
