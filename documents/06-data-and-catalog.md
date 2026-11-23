# 06 — Data & Catalog

All storefront content (products, categories, banners) and the formatting helpers are in
**`frontend/src/data/products.js`**. Photo licensing metadata is in `frontend/src/data/imageCredits.json`.

## 1. Store identity

```js
export const STORE_NAME = 'آذر دیجیتال'
export const STORE_NAME_EN = 'Azar Digital'
```

`STORE_NAME` is used in the logo, footer, buy box, page titles and toasts. Also update the `<title>` and
meta description in `frontend/index.html` if you rename the store.

## 2. Categories

```js
export const categories = [
  { id: 'all', name: 'همه محصولات' },                                   // pseudo-category
  { id: 'mobile', name: 'گوشی موبایل', image: '/img/products/mb-nova-x12.jpg' },
  { id: 'tablet', name: 'تبلت', image: … },
  { id: 'laptop', name: 'لپ‌تاپ', image: … },
  { id: 'wearable', name: 'ساعت و مچ‌بند هوشمند', image: … },
  { id: 'audio', name: 'هدفون و اسپیکر', image: … },
  { id: 'accessory', name: 'لوازم جانبی', image: … },
  { id: 'gaming', name: 'گیمینگ', image: … },
]
export const realCategories = categories.filter((c) => c.id !== 'all')
```

- `id` appears in URLs (`#/category/mobile`) and in each product's `category` field.
- `image` is the thumbnail for the category circles and the mega-menu (reusing a product photo).

## 3. Product schema

Every product is a plain object:

| Field | Type | Required | Example | Used for |
|---|---|---|---|---|
| `id` | string | ✔ | `'mb-nova-x12'` | URL, cart, photo filename. Must be unique and URL-safe. |
| `enName` | string | – | `'Nova X12 Pro'` | English subtitle on the product page; searchable |
| `name` | string | ✔ | `'گوشی موبایل نووا X12 پرو'` | Title everywhere |
| `brand` | string | – | `'نووا'` | Brand filter, breadcrumb, search |
| `category` | string | ✔ | `'mobile'` | Must match a category `id` |
| `price` | integer | ✔ | `38900000` | Current price **in Toman** |
| `oldPrice` | integer \| null | – | `42500000` | Price before discount; `null` = no discount |
| `image` | string | ✔ | `'/img/products/mb-nova-x12.jpg'` | Photo path (from `public/`) |
| `stock` | enum | ✔ | `'in_stock'` | `in_stock`, `low_stock` or `out_of_stock` |
| `rating` | number | – | `4.6` | Stars on cards and the product page, "popular" sort |
| `reviews` | integer | – | `1284` | Rating count; drives "best sellers" |
| `warranty` | string | – | `'۱۸ ماه گارانتی'` | Buy box |
| `description` | string | – | Persian paragraph | «معرفی» section |
| `features` | string[] | – | 3–4 short lines | «ویژگی‌های کلیدی» checklist |
| `specs` | `[label, value][]` | – | `[['حافظه رم','۱۲ گیگابایت'], …]` | «مشخصات» table; the first 4 are shown as key specs |

**The discount percentage is computed**, never stored: `round((1 − price / oldPrice) × 100)`.

Stock labels (`stockLabels`):
`in_stock` → «موجود در انبار», `low_stock` → «تنها چند عدد باقی مانده», `out_of_stock` → «ناموجود».

## 4. Current catalog (31 products)

| Category | Products |
|---|---|
| گوشی موبایل (4) | Nova X12 Pro, Nova A54, Pixelon 8, Lumen Z Fold 2 |
| تبلت (3) | TabNova 11, TabNova Mini 8, TabPro 13 with Pen |
| لپ‌تاپ (3) | AirNova 14, Raptor 16 Gaming, Scholar 15 Student |
| ساعت و مچ‌بند (3) | Pulse 5, FitBand 4, Trail GPS |
| هدفون و اسپیکر (4) | Sonic Buds, Sonic Max ANC, BoomBox speaker, Sport neckband |
| لوازم جانبی (9) | Case, screen protector, 20 W charger, USB-C cable, power bank, wireless mouse, USB-C hub, laptop stand, cooling pad |
| گیمینگ (5) | Portal handheld, wireless gamepad, mechanical keyboard, XL mousepad, gaming headset (out of stock) |

All brand and model names are fictional. Prices are realistic Toman values for a demo.

## 5. Adding a product

1. **Photo:** save an 800×800 JPEG with the product on white as `frontend/public/img/products/<id>.jpg`.
   With ImageMagick:
   ```bash
   magick input.jpg -auto-orient -resize 760x760 -background white -gravity center \
          -extent 800x800 -strip -quality 82 frontend/public/img/products/<id>.jpg
   ```
2. **Credit:** add an entry to `frontend/src/data/imageCredits.json`
   (`image`, `file`, `source`, `author`, `license`, `license_url`).
3. **Data:** add an object to the `products` array in `products.js`, in the block for its category:
   ```js
   {
     id: 'mb-nova-x13',
     enName: 'Nova X13',
     name: 'گوشی موبایل نووا X13',
     brand: 'نووا',
     category: 'mobile',
     price: 41000000,
     oldPrice: null,
     image: '/img/products/mb-nova-x13.jpg',
     stock: 'in_stock',
     rating: 4.5,
     reviews: 120,
     warranty: '۱۸ ماه گارانتی',
     description: '…',
     features: ['…', '…'],
     specs: [['صفحه نمایش', '۶٫۸ اینچ'], ['حافظه داخلی', '۲۵۶ گیگابایت']],
   },
   ```
4. **Sync to the backend:** `cd frontend && npm run sync-products`, then restart the backend.
5. Open `http://localhost:5173/#/product/mb-nova-x13`.

The product then appears automatically in its category page, the home carousel for its category, search,
"similar products", and (when applicable) amazing offers and best sellers.

## 6. Adding a category

1. Add `{ id, name, image }` to `categories`.
2. Give some products that `category` id.
3. Optionally add a home carousel for it in `App.jsx` (the home `page` block) and a shortcut link in
   `Header.jsx`. The category circles, mega-menu, footer and filters pick it up automatically.

## 7. Banners

```js
export const heroSlides = [
  { id, image: '/img/banners/hero-*.jpg', title, text, cta, link: '#/category/…' }, …
]
export const promoBanners = [
  { id, image: '/img/banners/promo-*.jpg', title, text, link }, …
]
```

- Hero images: **1280×400** (shown at 1280:400 on desktop, cropped to 16:9 on phones; keep the subject
  near the center and leave the right third calm, because the text sits there).
- Promo images: **800×400**; the caption sits at the bottom right.

## 8. Helper functions

| Function | Returns |
|---|---|
| `toFa(n)` | Number with Persian digits and separators: `38900000` → `۳۸٬۹۰۰٬۰۰۰` |
| `formatPrice(n)` | `toFa(n) + ' تومان'` |
| `formatRating(r)` | `4.6` → `۴٫۶` |
| `discountPercent(p)` | Integer percent, or 0 |
| `categoryName(id)` | Persian category name |
| `productUrl(id)` / `categoryUrl(id)` | Hash URLs |
| `amazingOffers(list, min = 10)` | In-stock products with ≥ `min` % off, sorted by discount |
| `bestSellers(list, count = 9)` | Top products by `reviews` |
| `sortOptions` | Sort ids and Persian labels for the sort bar |
| `sortProducts(list, sort)` | Sorted copy: `relevant` (catalog order), `popular`, `cheap`, `expensive`, `discount` |

## 9. Sync script

`frontend/scripts/sync-products.mjs` imports `products` from `products.js` and writes
`backend/products.json` (pretty-printed UTF-8). Only the `products` array goes to the backend;
categories, banners and helpers are frontend-only.
