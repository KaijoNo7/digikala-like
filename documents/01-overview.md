# 01 — Overview

## 1. Purpose

Azar Digital (آذر دیجیتال, "Azar" means *fire* in Persian, hence the flame logo) is a prototype of a Persian
e-commerce storefront for consumer electronics. It demonstrates:

- a complete **right-to-left (RTL) Persian UI** with Persian digits, Toman prices and the Solar Hijri year;
- the main pages and patterns of a large Iranian digital-goods store: home page with a hero slider, category
  tiles, a timed "amazing offers" strip, best sellers, category listings with filters and sorting, and a
  detailed product page;
- a clean **frontend/backend split**: the frontend works on its own and gets its catalog from a small API
  when one is running.

It is meant for learning, presentations and as a starting point. It is **not** a production shop.

## 2. Feature list

**Shopping experience**
- Home page: auto-rotating hero slider, "shop by category" circles, "amazing offers" strip with a live
  countdown to midnight, promo banners, product carousels per category and a ranked best-sellers board.
- Category pages (`#/category/<id>`): sidebar filters (category, brand, "in stock only", "discounted only"),
  five sort orders, result count, product grid.
- Live search from the header (name, brand or English name); the results use the category page layout.
- Product pages (`#/product/<id>`): large photo, brand and category links, Persian and English names,
  star rating, key specs, a seller/warranty/delivery box, price with discount and savings, quantity picker,
  "add to cart" and "buy now", service badges, tabs for intro / key features / specifications, and a
  similar-products carousel.
- Cart drawer: line items with photo, quantity +/− (trash icon at 1), subtotal and total. The cart is saved in
  `localStorage`.
- Demo login against the backend (`admin` / `admin`), shown as a user chip in the header.
- Light/dark theme toggle, saved in `localStorage`.
- Image credits page (`#/credits`) listing the source and license of every photo.

**Content**
- 31 products in 7 categories, each with a real photo, Persian description, key features, a spec table,
  warranty, rating and review count.
- 3 hero banners and 2 promo banners with real photos.

## 3. Technology stack

| Layer | Technology | Notes |
|---|---|---|
| UI | React 19 | Function components and hooks only; no state library |
| Build/dev server | Vite 8 (`@vitejs/plugin-react`) | Dev server on port 5173 |
| Lint | oxlint | `npm run lint` |
| Routing | Custom hash router (~20 lines in `App.jsx`) | No `react-router` dependency |
| Styling | One plain CSS file with CSS custom properties | No CSS framework |
| Font | Vazirmatn (Google Fonts), Tahoma fallback | Loaded in `index.html` |
| Backend | Python 3.9+, FastAPI, Uvicorn | No database: reads `products.json` at startup |
| Images | JPEG photos from Wikimedia Commons | See [09 — Image credits](09-image-credits.md) |

The frontend has only two runtime dependencies: `react` and `react-dom`.

## 4. Folder layout

```
parsa-sellweb/
├── README.md                  short project readme (points here)
├── documents/                 ← this documentation
├── start-backend.sh|.command|.bat    launchers for the API (port 8000)
├── start-frontend.sh|.command|.bat   launchers for the site (port 5173)
│
├── backend/
│   ├── main.py                FastAPI app (health, products, product by id, login)
│   ├── products.json          catalog served by the API (generated, see below)
│   └── requirements.txt       fastapi, uvicorn
│
└── frontend/
    ├── index.html             HTML shell: lang="fa" dir="rtl", font, title
    ├── package.json           scripts: dev, build, preview, lint, sync-products
    ├── vite.config.js
    ├── scripts/
    │   └── sync-products.mjs  writes src/data/products.js → backend/products.json
    ├── public/
    │   ├── favicon.svg        flame logo
    │   └── img/
    │       ├── products/      one 800×800 JPEG per product, named <product-id>.jpg
    │       └── banners/       hero-*.jpg (1280×400) and promo-*.jpg (800×400)
    └── src/
        ├── main.jsx           React entry point
        ├── App.jsx            router, global state, page composition
        ├── api.js             fetch helpers for the backend
        ├── styles.css         all styles: tokens, layout, components, responsive rules
        ├── data/
        │   ├── products.js    catalog (source of truth), categories, banners, helpers
        │   └── imageCredits.json  photo sources and licenses
        └── components/        20 React components (see document 05)
```

## 5. Single source of truth for products

`frontend/src/data/products.js` is the **only file you edit** for catalog changes.

- The frontend imports it directly and uses it whenever the backend isn't running.
- `npm run sync-products` (run in `frontend/`) writes the same list to `backend/products.json`,
  which the API serves.

So the site shows the same products whether or not the backend is running.
