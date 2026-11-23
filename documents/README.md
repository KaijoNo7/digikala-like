# Azar Digital (آذر دیجیتال) — Project Documentation

Azar Digital is a **Persian-language (RTL) online store prototype for digital products**:
mobile phones, tablets, laptops, smartwatches, headphones and speakers, accessories and gaming gear.
It has a React + Vite frontend and a small Python FastAPI backend. Its look is modeled on the large
Iranian e-commerce sites: white surfaces, a red brand accent, a red "amazing offers" (پیشنهاد شگفت‌انگیز)
strip, round category tiles and a three-column product page.

> This is a **demonstration / student project**. There is no real checkout, payment, user
> database or secure authentication. The product names and brands are fictional.

## Documents in this folder

| # | Document | What it covers |
|---|---|---|
| 01 | [Overview](01-overview.md) | Goals, feature list, technology stack, folder layout |
| 02 | [Architecture](02-architecture.md) | How the frontend, backend and data fit together; routing; state; data flow |
| 03 | [Getting started & usage](03-getting-started.md) | Requirements, installing, running, building, everyday tasks, troubleshooting |
| 04 | [Site sections (user guide)](04-site-sections.md) | Every page and section of the site, as a visitor experiences it |
| 05 | [Frontend components](05-frontend-components.md) | Reference for every React component: purpose, props, behavior |
| 06 | [Data & catalog](06-data-and-catalog.md) | Product schema, categories, banners, helpers, adding/editing products |
| 07 | [Backend API](07-backend-api.md) | FastAPI endpoints, request/response formats, CORS, demo login |
| 08 | [Styling & theming](08-styling-and-theming.md) | Design tokens, dark mode, RTL rules, layout, responsive breakpoints |
| 09 | [Image credits](09-image-credits.md) | Source, author and license of every photo |
| 10 | [Limitations & roadmap](10-limitations-and-roadmap.md) | What is intentionally missing and how to extend it |

## Quick start

```bash
# Terminal 1 — backend (http://localhost:8000)
./start-backend.sh          # Windows: start-backend.bat · macOS: start-backend.command

# Terminal 2 — frontend (http://localhost:5173)
./start-frontend.sh         # Windows: start-frontend.bat · macOS: start-frontend.command
```

Then open <http://localhost:5173>. Demo login: `admin` / `admin`.
See [03 — Getting started](03-getting-started.md) for details.
