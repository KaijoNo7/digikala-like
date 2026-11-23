# 02 — Architecture

## 1. Big picture

```
┌──────────────────────────── Browser ────────────────────────────┐
│                                                                  │
│  index.html (lang="fa", dir="rtl")                               │
│     └── main.jsx → <App/>                                        │
│            ├── hash router  (#/, #/category/x, #/product/x, …)  │
│            ├── global state (catalog, cart, user, theme, query)  │
│            └── page components → section components → cards     │
│                                                                  │
│  localStorage: azar.cart.v1 (cart), azar.theme (light/dark)      │
└───────────────┬──────────────────────────────────────────────────┘
                │ fetch (JSON)                  static files
                ▼                               ▼
┌──────── FastAPI :8000 ────────┐   ┌──── Vite dev server :5173 ────┐
│ GET  /api/health              │   │ /src/**  (JSX, CSS, data)      │
│ GET  /api/products            │   │ /img/products/*.jpg            │
│ GET  /api/products/{id}       │   │ /img/banners/*.jpg             │
│ POST /api/login               │   └────────────────────────────────┘
│   └── reads products.json     │
└───────────────────────────────┘
```

- The **frontend** is a single-page app. All pages are React components that `App.jsx` switches
  between based on the URL hash.
- The **backend** is stateless: it loads `products.json` into memory at startup and answers four endpoints.
- **Images** are static files in `frontend/public/img`, served by Vite in development and copied into
  `dist/` in a production build.

## 2. Startup and catalog loading

1. `App` starts with the **local catalog** (`products` from `src/data/products.js`), so the page renders
   immediately without waiting for the network.
2. In a `useEffect`, `fetchProducts()` (`src/api.js`) calls `GET /api/products`.
   - On success, the catalog in state is replaced with the API data and `apiOnline = true`.
   - On failure (backend not running), the local data stays and `apiOnline = false`.
3. A small status line at the bottom of every page shows which source is in use:
   green dot = backend, red dot = local fallback.

The API base URL defaults to `http://localhost:8000`. Override it with the `VITE_API_URL` environment
variable (for example in `frontend/.env.local`).

## 3. Routing

There is no router library. `parseHash()` in `App.jsx` turns `window.location.hash` into a route object:

| Hash | Route object | Page rendered |
|---|---|---|
| `#/` or empty | `{ page: 'home' }` | Home page sections |
| `#/amazing` | `{ page: 'home', anchor: 'amazing' }` | Home, then scrolls to the offers strip |
| `#/category/<id>` | `{ page: 'category', id, sort }` | `CategoryPage` (unknown id → `all`) |
| `#/category/<id>?sort=discount` | same, with `sort` | `CategoryPage` with that sort preselected |
| `#/product/<id>` | `{ page: 'product', id }` | `ProductPage` (unknown id → "not found" message) |
| `#/credits` | `{ page: 'credits' }` | `CreditsPage` |

- A `hashchange` listener updates the route. The page scrolls to the top **only when the page or id
  changes**, so changing the sort order doesn't jump.
- Links are plain `<a href="#/...">`, so the browser back/forward buttons, opening in a new tab and
  bookmarking all work.
- Hash routing needs no server configuration: any static host can serve the built `dist/` folder.
- Helper functions build the URLs: `productUrl(id)` and `categoryUrl(id)` in `products.js`.

**Search** is not a route. It is the `query` state:
- On the home page, a non-empty query shows the listing page for all products, filtered by the query.
- On a category page, the query filters within that category.
- Typing on a product or credits page first navigates home.
- Clicking the logo clears the query and goes home.

## 4. State management

All shared state lives in `App.jsx` (`useState`) and is passed down as props. There is no context or
external store; the app is small enough that prop drilling stays readable.

| State | Type | Persisted | Used by |
|---|---|---|---|
| `catalog` | product[] | no (local file or API) | all pages |
| `apiOnline` | `null` \| `true` \| `false` | no | status line |
| `route` | route object | URL hash | page switch |
| `query` | string | no | header search, listing |
| `cart` | `{id,name,price,image,qty}[]` | `localStorage['azar.cart.v1']` | header badge, drawer, product page |
| `cartOpen`, `loginOpen` | boolean | no | drawer, modal |
| `user` | string \| null | **no** (resets on reload) | header chip |
| `theme` | `'light'` \| `'dark'` | `localStorage['azar.theme']` | `<html data-theme>` |
| `toast` | string | no | toast (auto-hides after 2 s) |

Every `localStorage` read and write is wrapped in `try/catch`, so the site still works in private mode or
when storage is blocked.

Local, page-only state:
- `CategoryPage`: brand / in-stock / discounted filters. The component is keyed by category id, so the
  filters reset when you switch category.
- `ProductPage`: the selected quantity (keyed by product id).
- `HeroSlider`: current slide and paused-on-hover flag.
- `Countdown`: remaining time, ticking every second.
- `Header`: whether the category mega-menu is open.

## 5. Cart logic

- `addToCart(product, qty)`: increases the quantity if the item is already in the cart, otherwise adds a
  compact copy (`id, name, price, image, qty`), then shows a toast.
- `buyNow(product, qty)`: `addToCart` plus opening the drawer.
- `changeQty(id, ±1)`: removes the line when the quantity reaches 0.
- `removeFromCart(id)`.
- The cart keeps the price **at the moment of adding**. That is fine for a demo; a real shop would
  re-validate prices on the server at checkout.

## 6. Derived data

The `products.js` helpers compute these lists in `App` with `useMemo`:
- `amazingOffers(catalog)`: in-stock products with ≥ 10 % discount, biggest discount first.
- `bestSellers(catalog)`: the 9 products with the most reviews. The demo has no sales data, so review
  count stands in for it.
- Home carousels: products filtered by category.

## 7. Rendering tree (home page)

```
App
├── Header (Logo, search, login/user chip, cart button, mega-menu, nav links, theme toggle)
├── main
│   ├── HeroSlider
│   ├── CategoryCircles
│   ├── AmazingOffers (Countdown, PriceBlock)
│   ├── PromoBanners
│   ├── ProductCarousel ×4 (ProductCard → PriceBlock)
│   ├── BestSellers
│   └── api-status line
├── Footer (Logo, ServiceBadges, link columns, newsletter, about text, credits link)
├── CartDrawer
├── LoginModal
└── Toast
```

## 8. Backend design

- `main.py` reads `products.json` **once at import time**. After you regenerate the file, restart the
  backend (with `--reload`, saving `main.py` also triggers a reload).
- CORS allows only `http://localhost:5173` and `http://127.0.0.1:5173`. Add origins there if you serve
  the frontend from somewhere else.
- The login endpoint compares the input against hardcoded demo credentials. No token or session is created;
  the frontend only remembers the username in memory.

Endpoint details are in [07 — Backend API](07-backend-api.md).
