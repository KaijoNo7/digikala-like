# 10 — Limitations & Roadmap

## 1. Intentional limitations (demo scope)

| Area | Current state | Why |
|---|---|---|
| Checkout & payment | The "confirm order" button does nothing | Out of scope for a prototype; no payment gateway |
| Authentication | Hardcoded `admin/admin`, no token or session, resets on reload | Demo only; must not be used for real accounts |
| Orders & users | Not stored anywhere | No database |
| Cart | Browser `localStorage`; prices copied when the item is added | A real shop re-checks prices on the server |
| Catalog management | Edit `products.js` by hand, then sync | No admin panel |
| Product data | Fictional brands/models; ratings and review counts are sample numbers | Demo content |
| Product photos | Real photos of similar devices from Wikimedia Commons | Free licenses; see [09](09-image-credits.md) |
| One image per product | No gallery thumbnails or zoom | Kept simple |
| Reviews | Only a rating number, no review text | Would need user accounts and moderation |
| Newsletter, support links, footer links | Visual only | Static content |
| SEO | Hash routing; content is rendered on the client | Fine for a demo; a real shop needs SSR/SSG and real URLs |
| Web font | Loaded from Google Fonts | Needs internet; falls back to Tahoma |

## 2. Known behaviors

- The amazing-offers countdown resets at local midnight. It is a visual timer only; offers don't expire.
- "Best sellers" are ranked by review count, because there is no sales data.
- Search is a simple case-insensitive substring match. It doesn't normalize Persian/Arabic letter
  variants (ي/ی, ك/ک) or Persian vs Latin digits.
- The backend reads `products.json` only at startup.

## 3. Suggested roadmap

**Short term**
1. Normalize Persian text in search (ی/ي, ک/ك, half-spaces, digits).
2. Product image gallery (several photos, thumbnails, zoom on hover).
3. Price-range filter and a "free shipping" badge.
4. Self-host Vazirmatn (`@font-face` with files in `public/fonts`) for offline use.
5. A dedicated cart page (`#/cart`) with a shipping-address step.

**Medium term**
6. SQLite database (SQLModel/SQLAlchemy) for products, users and orders; move filtering and sorting to
   `GET /api/products?q=&category=&sort=&brand=`.
7. Real authentication: registration, hashed passwords, JWT or session cookies, order history.
8. An admin panel to add and edit products and upload photos.
9. Product comparison («مقایسه») and a wishlist («لیست علاقه‌مندی»).
10. Text reviews with ratings.

**Long term**
11. Real URLs (history routing) plus server-side rendering or pre-rendering for SEO.
12. A payment gateway sandbox (an Iranian IPG) for checkout.
13. Tests: unit tests for helpers (`sortProducts`, `discountPercent`, `toFa`), component tests with
    Vitest + Testing Library, and API tests with `pytest` + FastAPI's `TestClient`.
14. CI (lint + build + tests) and deployment of `dist/` and the API.

## 4. Before publishing publicly

- Keep the image credits page and the footer disclaimer.
- Don't use the demo login, or replace it with real authentication.
- Don't present the photos as official images of the fictional brands.
- Replace the placeholder phone number and footer text with real information, or keep them clearly
  marked as a demo.
