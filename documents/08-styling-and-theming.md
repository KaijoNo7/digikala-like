# 08 — Styling & Theming

All styles are in **`frontend/src/styles.css`**: one plain CSS file, no preprocessor, no framework.
It is organized in commented blocks:

```
Theme tokens → Base → Buttons → Header → Sections → Hero slider → Category circles →
Amazing offers strip → Price block → Product cards → Promo banners → Best sellers →
Service badges → Breadcrumb → Listing (category/search) → Product page → Credits page →
Footer → Overlay/drawer/modal → Misc → Responsive
```

## 1. Visual language

The design follows the common pattern of large Iranian e-commerce sites:
- **White surfaces** with thin grey (`--border`) dividers instead of heavy cards.
- **A single red brand color** (`--primary: #ef4056`) for calls to action, the logo, active states,
  rank numbers and section underlines.
- **A red "amazing offers" strip** (`--amazing`) with white cards.
- **Round category tiles**, a sticky two-row header, a three-column product page, and a hairline product
  grid.
- **Discount pills** in deep red (`--sale`) next to the price; old prices struck through in grey.
- **Typography:** Vazirmatn at weights 400–900; 14 px base size; generous line height (1.7–2.1) for Persian.

## 2. Design tokens

Colors and shared values are CSS custom properties on `:root`. Components never use raw hex values
(the only exceptions are pure white behind product photos and the text on the photo banners).

| Token | Light | Purpose |
|---|---|---|
| `--primary` / `--primary-hover` | `#ef4056` / `#d93248` | Brand red: buttons, logo, active states |
| `--primary-soft` | `#fdecee` | Tinted backgrounds (active filter, qty hover, error box) |
| `--on-primary` | `#fff` | Text on red |
| `--amazing` | `#ef394e` | Offers strip background |
| `--bg`, `--surface` | `#fff` | Page and panels |
| `--surface-alt` | `#f0f0f1` | Search box, key-spec tiles, inputs |
| `--surface-sunken` | `#f7f7f8` | Buy box, footer bar, hover rows |
| `--text`, `--text-2`, `--text-muted` | `#0c0c0c`, `#3f4064`, `#81858b` | Primary, secondary and tertiary text |
| `--border`, `--border-strong` | `#e0e0e2`, `#c0c2c5` | Dividers, outlines |
| `--sale` | `#d32f2f` | Discount pill, savings text |
| `--ok`, `--warn` | `#00a049`, `#e6123d` | In stock / low stock |
| `--link` | `#19bfd3` | "See all" links, brand links |
| `--radius`, `--radius-lg` | `8px`, `16px` | Corners |
| `--shadow`, `--shadow-lg` | | Hover elevation, drawers, menus |
| `--header-h` | `112px` (`156px` under 860 px) | Offset for the sticky filter sidebar and product tabs |

## 3. Dark mode

- `App` sets `<html data-theme="light|dark">` and saves the choice in `localStorage['azar.theme']`.
  The default is light.
- `[data-theme='dark']` only **redefines the tokens**, so no component needs dark-specific rules.
- Product photos keep a white background in dark mode on purpose: the photos have white backgrounds and
  look like product cut-outs on a light tile.

To change the brand color, edit `--primary`, `--primary-hover`, `--primary-soft` and `--amazing` in both
theme blocks. Also update the two `#ef4056` fills in `public/favicon.svg`.

## 4. Right-to-left rules

The document is `dir="rtl"` (`index.html`). To keep the layout correct:
- Use **logical properties**: `margin-inline-start`, `padding-inline`, `inset-inline-start/end`,
  `border-inline-start`, `border-start-start-radius`, `text-align: start`. `left`/`right` appear only for
  true centering (`left: 50%` + `translateX(-50%)`).
- **Never use `letter-spacing`** on Persian text: it breaks the joins between letters. (The only exception
  is the Latin `GEAR30`-style text.)
- `text-transform: uppercase` is pointless for Persian and isn't used.
- Arrow icons are mirrored by meaning: "next / see all" uses `ChevronLeft`.
- Horizontal scrollers: in RTL, `scrollLeft` is 0 at the start and negative toward the end, so carousel
  buttons scroll by a negative amount to go forward.
- LTR islands (`dir="ltr"`): English product names, the countdown clock, phone and email, login inputs,
  the image-credit captions.

## 5. Layout system

- `.wrap`: centered container, max width **1336 px**, 16 px side gutters.
- Product grids use `grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))` with `gap: 1px` over a
  border-colored background, which draws the hairline dividers.
- The listing page uses a `280px | 1fr` grid (sidebar + results). The sidebar is `position: sticky` below
  the header.
- The product page uses a `0.95fr | 1.2fr | 340px` grid (gallery | info | buy box).

## 6. Responsive breakpoints

| Width | Changes |
|---|---|
| ≤ 1100 px | Product page becomes 2 columns, with the buy box full width below; footer columns 2×2 |
| ≤ 860 px | Header wraps (search on its own row); nav shortcuts hidden; filters above results; service badges 3 per row |
| ≤ 640 px | Hero 16:9 with smaller text and no arrows; category circles 4 per row at 68 px; offers strip full-bleed; carousel arrows hidden (swipe instead); promo banners stacked; product grid 2 columns; product page 1 column; best sellers single list; footer 1 column; mega-menu becomes a full-width panel |

## 7. Motion

Short transitions only: hover elevation (0.15 s), hero slide (0.6 s ease), promo zoom (0.4 s), dot width,
switch knob. Smooth scrolling is used for "back to top", the product tabs and `#/amazing`.

## 8. Adding styles

- Reuse the tokens; if you need a new color, add a token to **both** theme blocks.
- Put new blocks in the matching section, and their small-screen overrides in the existing
  `@media` blocks at the end of the file.
- Check new UI in both themes and at 390 px width.
