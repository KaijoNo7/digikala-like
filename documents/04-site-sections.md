# 04 — Site Sections (User Guide)

This document walks through every page and section of Azar Digital **as a visitor sees it**, with the
Persian label shown on screen and the component that renders it.

The whole site is right-to-left: the logo sits at the top right, reading flows from right to left, and
"next" arrows point left.

---

## 1. Header (every page) — `Header.jsx`

The header sticks to the top while you scroll. It has two rows.

**Top row (right → left)**
| Element | Label | Behavior |
|---|---|---|
| Logo | آذر دیجیتال + flame mark | Goes to the home page and clears the search |
| Search box | «جستجو در آذر دیجیتال» | Filters while you type, by Persian name, brand or English name. Results appear in the listing layout. |
| Login button | «ورود \| ثبت‌نام» | Opens the login dialog. After login it becomes a chip with the username and «خروج» (log out). |
| Cart button | cart icon + red count badge | Opens the cart drawer. The badge shows the total quantity in Persian digits. |

**Navigation row**
| Element | Label | Behavior |
|---|---|---|
| Category menu | «دسته‌بندی کالاها» | Opens on hover (desktop) or click (touch): a panel with all 7 categories, each with a thumbnail, plus «مشاهده همه کالاها» (see all) |
| Amazing offers | «شگفت‌انگیزها» | Goes home and scrolls to the red offers strip |
| Most popular | «محبوب‌ترین‌ها» | All products sorted by rating |
| Biggest discount | «بیشترین تخفیف» | All products sorted by discount |
| Shortcuts | «گوشی موبایل»، «لپ‌تاپ» | Category pages (hidden on small screens) |
| Theme toggle | moon / sun icon | Switches light/dark mode and remembers the choice |

On phones the search box moves to its own full-width row and the navigation row scrolls sideways.

---

## 2. Home page — `#/`

Sections from top to bottom:

### 2.1 Hero slider — `HeroSlider.jsx`
- Three wide photo banners: mobile phones, laptops, audio. Each has a title, a subtitle and a red button
  that opens the matching category.
- Advances every 5 seconds and **pauses while the mouse is over it**.
- Arrow buttons (bottom left) and dot indicators. The active dot is wider.

### 2.2 Shop by category — «خرید بر اساس دسته‌بندی» — `CategoryCircles.jsx`
- Seven round tiles with a product photo and the category name: phones, tablets, laptops, smartwatches,
  headphones & speakers, accessories, gaming.
- Hovering lifts the tile. Clicking opens the category page.

### 2.3 Amazing offers — «پیشنهاد شگفت‌انگیز» — `AmazingOffers.jsx`
- A red rounded strip that scrolls sideways.
- The first block holds the title, a **live countdown to midnight** (hours:minutes:seconds), a large ٪ sign
  and «مشاهده همه» (see all, which links to all products sorted by discount).
- White cards follow for every in-stock product with **at least 10 % off**, biggest discount first. Each
  shows the photo, name, red discount pill, price and struck-through old price.
- The strip ends with a "see all" card. Arrow buttons appear on hover (desktop).

### 2.4 Promo banners — `PromoBanners.jsx`
- Two side-by-side photo banners: smartwatches and gaming. Each has a title and a tagline over a dark
  gradient. The photo zooms slightly on hover. They stack on phones.

### 2.5 Product carousels — `ProductCarousel.jsx`
Four bordered boxes, each a sideways-scrolling row of product cards with a «مشاهده همه» link:
1. «گوشی‌های موبایل» — mobile phones
2. «لپ‌تاپ و تبلت» — laptops and tablets
3. «هدفون، اسپیکر و ساعت هوشمند» — audio and wearables
4. «لوازم جانبی و گیمینگ» — accessories and gaming

(The best-sellers board sits between carousels 1 and 2.)

### 2.6 Best sellers — «پرفروش‌ترین کالاها» — `BestSellers.jsx`
- A ranked board of the 9 most-reviewed products in three columns of three. Each row shows a thumbnail,
  a large red rank number (۱–۹) and the name.
- On phones it becomes a single list.

### 2.7 Backend status line
A small line under every page: green dot «فهرست محصولات از بک‌اند پایتون بارگذاری شد» (catalog loaded
from the backend) or red dot «بک‌اند در دسترس نیست…» (backend offline, showing local data).

---

## 3. Product card (used everywhere) — `ProductCard.jsx`

| Part | Content |
|---|---|
| Photo | Square product photo on white |
| Name | Up to two lines, then truncated |
| Meta row | «تنها چند عدد باقی مانده» (only a few left) in red when stock is low · star rating on the left |
| Price | Red discount pill (e.g. ۱۲٪) + price in Toman; the old price struck through underneath |
| Out of stock | Shows «ناموجود» instead of the price |

The whole card is one link to the product page. Hovering adds a shadow.

---

## 4. Category / listing page — `#/category/<id>` — `CategoryPage.jsx`

Also used for search results («نتایج جستجو برای …») and for "all products".

**Breadcrumb:** آذر دیجیتال / category name.

**Filter sidebar** (right side; moves above the results on small screens)
| Filter | Label | Behavior |
|---|---|---|
| Category list | «دسته‌بندی» | Links to every category. The current one is highlighted in red. |
| Brand | «برند» | Checkboxes for the brands in the current results (shown only when there are 2+ brands) |
| In stock only | «فقط کالاهای موجود» | Toggle switch that hides out-of-stock items |
| Discounted only | «فقط کالاهای تخفیف‌دار» | Toggle switch that hides full-price items |
| Clear | «حذف فیلترها» | Appears when any filter is on; resets them |

**Results area**
- Title plus a count (e.g. «۴ کالا»).
- Sort bar «مرتب‌سازی:» — «مرتبط‌ترین» (relevant), «محبوب‌ترین» (highest rated), «ارزان‌ترین» (cheapest),
  «گران‌ترین» (most expensive), «بیشترین تخفیف» (biggest discount). The choice is stored in the URL
  (`?sort=`), so it survives reloads and can be shared.
- A product grid with hairline dividers between cells (2 columns on phones).
- An empty-state message if nothing matches.

---

## 5. Product page — `#/product/<id>` — `ProductPage.jsx`

**Breadcrumb:** آذر دیجیتال / category / brand.

**Three columns on desktop** (two on tablets, one on phones):

1. **Gallery (right):** large product photo. A red «پیشنهاد ویژه · ۱۲٪ تخفیف» (special offer) ribbon when
   the item is discounted.
2. **Info (middle):**
   - brand / category link (teal), the Persian name as the page title, and the English name;
   - star rating with the number of buyer ratings;
   - «ویژگی‌ها»: the first four specs as grey tiles;
   - a return-policy notice.
3. **Buy box (left):**
   - «فروشنده»: seller (Azar Digital, "excellent performance");
   - warranty line (e.g. «۱۸ ماه گارانتی»);
   - stock and delivery line (green "in stock in the Azar Digital warehouse", ships in 1 business day);
   - old price + discount pill, the price in large type, «سود شما» (your savings);
   - quantity picker «تعداد» (1–10);
   - red «افزودن به سبد خرید» (add to cart) and outlined «خرید فوری» (buy now, which adds and opens the cart);
   - a green note when this product is already in the cart («… عدد از این کالا در سبد خرید شماست»);
   - for out-of-stock items, a «ناموجود» box replaces the purchase controls.

**Below the columns**
- **Service badges:** express delivery, 24/7 support, cash on delivery, 7-day returns, authenticity guarantee.
- **Sticky tab bar:** «معرفی» · «ویژگی‌های کلیدی» · «مشخصات». Clicking smoothly scrolls to the section.
- «معرفی» (intro): the product description.
- «ویژگی‌های کلیدی» (key features): checklist with green check marks.
- «مشخصات» (specifications): label/value rows.
- «کالاهای مشابه» (similar products): a carousel of the other products in the same category.

The browser tab title becomes «<product name> | آذر دیجیتال».

---

## 6. Cart drawer — `CartDrawer.jsx`

Slides in from the left edge (the end side in RTL) over a dimmed page.
- Header: «سبد خرید (n کالا)» and a close button. Clicking the dimmed area also closes it.
- Each line: photo, name (links to the product page and closes the drawer), line total, and a quantity
  control. At quantity 1 the "−" button becomes a **trash icon**.
- An empty cart shows an illustration and «سبد خرید شما خالی است!».
- Footer: «جمع سبد خرید» (cart total), the «تایید و تکمیل سفارش» (confirm order) button, and a note that
  payment is not implemented in this demo.

---

## 7. Login dialog — `LoginModal.jsx`

- Title «ورود به حساب کاربری», fields «نام کاربری» (username) and «رمز عبور» (password); both are typed
  left-to-right.
- A note with the demo credentials `admin / admin`.
- Errors show in a red box: wrong credentials, or server unreachable.
- On success: the dialog closes, a toast says «با نام admin وارد شدید», and the header shows the user chip.

---

## 8. Image credits — `#/credits` — `CreditsPage.jsx`

A grid listing all 36 photos: thumbnail, original file name (linked to Wikimedia Commons), author and
license (linked). Reached from «منابع تصاویر» in the footer.

---

## 9. Footer (every page) — `Footer.jsx`

1. Logo, support phone number and opening hours, and a «بازگشت به بالا» (back to top) button.
2. Five service badges with icons.
3. Four columns: «با آذر دیجیتال» (about), «خدمات مشتریان» (customer service), «دسته‌بندی‌ها» (live
   category links) and «همراه ما باشید!» (newsletter email box; demo only, it doesn't submit anywhere).
4. An "about the store" paragraph.
5. Bottom bar: copyright with the Solar Hijri year, the demo disclaimer, and the image-credits link.

---

## 10. Toast notifications — `Toast.jsx`

A small dark pill at the bottom center confirms actions («… به سبد خرید اضافه شد», login, logout) and
disappears after 2 seconds.
