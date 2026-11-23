# 03 — Getting Started & Usage

## 1. Requirements

| Tool | Version | Used for |
|---|---|---|
| Python | 3.9 or newer | Backend API |
| Node.js | 20.19+ or 22.12+ (required by Vite 8) | Frontend dev server and build |
| Internet | first run only, plus the web font | `pip install`, `npm install`, Google Fonts |

Without internet, the site still works after installation; text falls back to the Tahoma font.

## 2. Running with the launcher scripts (recommended)

Start the backend and the frontend in **two separate terminals**.

| OS | Backend (port 8000) | Frontend (port 5173) |
|---|---|---|
| Windows | double-click `start-backend.bat` | double-click `start-frontend.bat` |
| macOS | double-click `start-backend.command` | double-click `start-frontend.command` |
| macOS / Linux terminal | `./start-backend.sh` | `./start-frontend.sh` |

What the scripts do:
- **Backend**: finds Python, creates `backend/.venv` if it is missing (or was copied from another OS),
  installs `requirements.txt` if FastAPI/Uvicorn aren't installed, then runs
  `uvicorn main:app --port 8000`.
- **Frontend**: checks the Node.js version, runs `npm install` if `node_modules` is missing, then runs
  `npm run dev -- --port 5173 --strictPort`.

Open <http://localhost:5173>.

Notes:
- If you copy the project to another computer or OS, delete `backend/.venv` and `frontend/node_modules`
  first; they contain platform-specific files. The Windows scripts detect and replace them automatically.
- macOS Gatekeeper may block the first double-click: right-click → **Open** → confirm.
- If a zip download lost the execute bit: `chmod +x start-*.sh start-*.command`.

## 3. Running manually

**Backend**

```bash
cd backend
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt          # Windows: .venv\Scripts\pip ...
.venv/bin/uvicorn main:app --reload --port 8000
```

**Frontend**

```bash
cd frontend
npm install
npm run dev            # http://localhost:5173
```

The frontend also works **without** the backend: it falls back to the local catalog. In that case the
status line at the bottom of the page turns red, and login shows "server unreachable".

## 4. npm scripts (in `frontend/`)

| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Production build into `frontend/dist/` |
| `npm run preview` | Serve the built `dist/` locally to check it |
| `npm run lint` | Run oxlint on the source |
| `npm run sync-products` | Write `src/data/products.js` → `backend/products.json` |

## 5. Using the site

1. **Browse** the home page: hero slider, category circles, amazing offers, carousels, best sellers.
2. **Open a category** from the circles, the «دسته‌بندی کالاها» menu, the footer, or the "see all" links.
3. **Filter and sort** on the category page: brand checkboxes, "in stock only", "discounted only",
   and the sort bar (relevant, popular, cheapest, most expensive, biggest discount).
4. **Search** in the header. Results update while you type (Persian name, brand, or English name).
5. **Open a product** by clicking any card. Choose a quantity, then «افزودن به سبد خرید» (add to cart)
   or «خرید فوری» (buy now, which also opens the cart).
6. **Manage the cart** from the cart icon: change quantities, remove items, see the total.
   Checkout is intentionally not implemented.
7. **Log in** with `admin` / `admin`. The username replaces the login button until you log out or reload.
8. **Toggle dark mode** with the moon/sun button at the end of the navigation bar.
9. **Image credits**: the «منابع تصاویر» link in the footer.

Direct links you can share or bookmark:
- `http://localhost:5173/#/product/mb-nova-x12`
- `http://localhost:5173/#/category/laptop`
- `http://localhost:5173/#/category/all?sort=discount`

## 6. Everyday tasks

| Task | How |
|---|---|
| Change a price, description or spec | Edit `frontend/src/data/products.js`, run `npm run sync-products`, restart the backend |
| Add a product | See [06 — Data & catalog](06-data-and-catalog.md#5-adding-a-product) |
| Change banners | Edit `heroSlides` / `promoBanners` in `products.js`; put images in `public/img/banners/` |
| Change the store name | `STORE_NAME` / `STORE_NAME_EN` in `products.js`, plus `<title>` in `index.html` |
| Change brand colors | `--primary` and related tokens at the top of `src/styles.css` |
| Change demo credentials | `DEMO_USERNAME` / `DEMO_PASSWORD` in `backend/main.py` |
| Point the frontend at another API | Set `VITE_API_URL` (e.g. in `frontend/.env.local`) and update CORS in `main.py` |

## 7. Production build & deployment

```bash
cd frontend
npm run build          # outputs dist/
```

`dist/` is a fully static site. Because of hash routing, it can be served by any static host (Nginx,
GitHub Pages, Netlify, …) with no rewrite rules. To use the API in production:
1. host `backend/` (for example `uvicorn main:app --host 0.0.0.0 --port 8000` behind a reverse proxy),
2. build the frontend with `VITE_API_URL=https://your-api.example npm run build`,
3. add the frontend's origin to `allow_origins` in `main.py`.

## 8. Troubleshooting

| Symptom | Cause / fix |
|---|---|
| Red dot: "بک‌اند در دسترس نیست" | Backend isn't running on port 8000. Start it; the page picks it up on reload. |
| Login says the server is unreachable | Same as above, or a CORS origin mismatch (e.g. you opened `127.0.0.1:5174`). |
| `Port 5173 is in use` | Another dev server is running. Stop it, or run `npm run dev -- --port 5174` and add that origin to CORS. |
| Product edits don't appear when the backend is running | You forgot `npm run sync-products`, or the backend wasn't restarted (it reads the JSON once at startup). |
| Text shows in Tahoma instead of Vazirmatn | No internet access to Google Fonts. Self-host the font if needed (document 10). |
| Old cart contents with wrong prices | The cart key is versioned (`azar.cart.v1`). Clear site data, or bump the key in `App.jsx`. |
| `node: version too old` | Install Node.js 20.19+ or 22.12+. |
