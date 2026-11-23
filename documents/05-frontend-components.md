# 05 — Frontend Components Reference

All components live in `frontend/src/components/`. They are plain function components; styling comes
from class names defined in `src/styles.css`. Labels are Persian; all prices and counts go through
`toFa()` / `formatPrice()` so they use Persian digits.

## Top level

### `App.jsx`
The application root. Responsibilities:
- **Router:** `parseHash()` + a `hashchange` listener (see [02 — Architecture](02-architecture.md#3-routing)).
- **Global state:** catalog, cart, user, theme, search query, open/closed drawers, toast.
- **Persistence:** cart (`azar.cart.v1`) and theme (`azar.theme`) in `localStorage`, guarded with try/catch.
- **Catalog loading** from the API, with the local fallback.
- **Document title:** product or category name + store name.
- **Page composition:** chooses Home / CategoryPage / ProductPage / CreditsPage and always renders Header,
  Footer, CartDrawer, LoginModal and Toast.
- **Actions passed down:** `addToCart`, `buyNow`, `changeQty`, `removeFromCart`, `handleLogin`,
  `handleQueryChange`, `setSort`.

### `main.jsx`
Mounts `<App/>` inside `React.StrictMode` and imports `styles.css`.

### `api.js`
| Export | Description |
|---|---|
| `fetchHealth()` | `GET /api/health` |
| `fetchProducts()` | `GET /api/products` → `{ count, products }` |
| `login(username, password)` | `POST /api/login` → `{ ok, status, data }` (never throws on 401) |

Base URL: `import.meta.env.VITE_API_URL ?? 'http://localhost:8000'`.

---

## Layout & chrome

### `Header.jsx`
| Prop | Type | Purpose |
|---|---|---|
| `query`, `onQueryChange` | string, fn | Controlled search input |
| `onLogoClick` | fn | Logo click (App clears the search and goes home) |
| `theme`, `onToggleTheme` | string, fn | Theme button |
| `cartCount`, `onOpenCart` | number, fn | Cart badge and button |
| `user`, `onOpenLogin`, `onLogout` | string\|null, fn, fn | Login button or user chip |

Internal state: `menuOpen` for the category mega-menu (opens on hover, toggles on click, closes after
clicking a category).

### `Logo.jsx`
Inline SVG flame mark in a red rounded square, plus the store name in red. Prop `onClick` is optional;
the footer uses it without a handler, so it is a plain link home.

### `Footer.jsx`
Static content plus live category links, `ServiceBadges`, a non-functional newsletter form, the Solar
Hijri year (`Intl.DateTimeFormat('fa-IR-u-ca-persian')`) and a link to `#/credits` with the photo count.

### `ServiceBadges.jsx`
Five icon + label badges (express delivery, 24/7 support, cash on delivery, 7-day return, authenticity).
Prop `small` gives a compact boxed variant, used on the product page.

### `CartDrawer.jsx`
| Prop | Purpose |
|---|---|
| `open` | Render or not |
| `items` | Cart lines |
| `onClose` | Close (button, overlay click, product link click) |
| `onChangeQty(id, delta)` | +1 / −1 |
| `onRemove(id)` | Trash button at quantity 1 |

### `LoginModal.jsx`
Props `open`, `onClose`, `onSubmit(username, password) → Promise<{ok, message?}>`. Manages field values,
a busy flag and the error message; clears the fields on success.

### `Toast.jsx`
Prop `message`; renders nothing when it is empty. `role="status"` makes screen readers announce it.

### `Icons.jsx`
A small inline-SVG icon set (stroke icons on a 24-pixel grid; each takes a `size` prop): Search, Cart, User,
Login, Menu, Moon, Sun, Percent, Fire, Star (`filled`), ChevronLeft/Right, Close, Trash, Truck, Headset,
Wallet, Return, Shield, Store, Check, ArrowUp. Icons use `currentColor`, so they follow the text color.

---

## Home page sections

### `HeroSlider.jsx`
Reads `heroSlides` from `products.js`. State: `index` and `paused`. It auto-advances every `INTERVAL`
(5000 ms) and pauses on hover. Slides sit side by side in a flex track that moves with
`translateX(index × 100%)`; in RTL a positive offset reveals the next slide. Inactive slides are
`aria-hidden` and taken out of the tab order.

### `CategoryCircles.jsx`
Maps `realCategories` (every category except "all") to round image tiles that link to `categoryUrl(id)`.

### `AmazingOffers.jsx`
Prop `products` (already filtered and sorted by `amazingOffers()`). Renders the red strip: an intro block
with `Countdown` and the ٪ sign, offer cards (`PriceBlock`), a final "see all" card and two scroll buttons.
Has `id="amazing"` so the `#/amazing` route can scroll to it.

### `Countdown.jsx`
Time remaining until local midnight, refreshed every second and shown as `hh:mm:ss` in Persian digits.
The container uses `dir="ltr"` so the clock reads correctly.

### `PromoBanners.jsx`
Reads `promoBanners` and renders two photo links with captions.

### `ProductCarousel.jsx`
| Prop | Purpose |
|---|---|
| `title` | Box heading |
| `link`, `linkLabel` | Optional "see all" link (default label «مشاهده همه») |
| `products` | Cards to show; renders nothing when empty |

A horizontal scroller with CSS scroll snapping. The arrow buttons call `scrollBy`; RTL scroll positions
are negative, so "forward" is a negative `left`.

### `BestSellers.jsx`
Prop `products` (from `bestSellers()`). An ordered list laid out as a three-row CSS grid that flows by
column on desktop and becomes a single list on phones.

---

## Product display

### `ProductCard.jsx`
- **Default export** `ProductCard({ product, compact })`: the whole card is one `<a>` to the product page.
  It shows the photo, two-line name, low-stock warning, rating and `PriceBlock`. `compact` is used inside
  carousels.
- **Named export** `PriceBlock({ product, size })`: discount pill + price + old price, or «ناموجود» when
  out of stock. Reused by `AmazingOffers`.

### `ProductGrid.jsx`
Props `products` and `emptyText`. A responsive grid with 1 px divider lines (made from the grid gap over a
border-colored background).

---

## Pages

### `CategoryPage.jsx`
| Prop | Purpose |
|---|---|
| `catalog` | All products |
| `categoryId` | `'all'` or a category id |
| `query` | Current search text (empty = plain category page) |
| `initialSort` | Sort id from the URL |
| `onSortChange(id)` | Updates the URL (`?sort=`) |

Local state: `onlyAvailable`, `onlyDiscounted`, `brands[]`.

Pipeline: category + search match → brand / stock / discount filters → `sortProducts()`.
The brand list is built from the matched products. `App` keys the component by category id, so the
filters reset when the category changes.

### `ProductPage.jsx`
| Prop | Purpose |
|---|---|
| `product` | The product, or `null` for "not found" |
| `catalog` | For similar products |
| `cartQty` | How many of this product are in the cart (for the green note) |
| `onAdd(product, qty)`, `onBuyNow(product, qty)` | Cart actions |

The outer component handles "not found" and renders `ProductDetails` keyed by product id, so the quantity
resets per product. Sections: gallery, info (key specs = first 4 specs), buy box, `ServiceBadges small`,
a sticky tab bar (smooth-scrolls without touching the hash, which the router uses), intro, features,
specs (`<dl>`) and a similar-products `ProductCarousel`.

### `CreditsPage.jsx`
Imports `src/data/imageCredits.json` and renders a card for each photo: thumbnail, file link, author and
license link. The captions are left-to-right because the metadata is in English.

---

## Conventions

- **Digits:** never print raw numbers; use `toFa(n)`, `formatPrice(n)` or `formatRating(r)`.
- **Links:** use `productUrl(id)` and `categoryUrl(id)` instead of building hash strings by hand.
- **Direction:** the page is RTL. Text that must stay LTR (codes, emails, English names, the clock,
  credentials) gets `dir="ltr"`.
- **Accessibility:** buttons with only an icon get Persian `aria-label`s, and decorative images use
  `alt=""`.
- **State:** shared state goes in `App`; anything that only matters to one page stays in that page.
