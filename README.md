# 🧑‍💻 Darshan Agrawal — Portfolio

> Full-stack personal portfolio with a content admin dashboard. Built with **React + Vite** on the frontend and **Flask + PostgreSQL** on the backend. Everything you see on the portfolio — case studies, blog posts, homepage content — is managed through a protected admin panel.

<div align="center">

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-Visit%20Site-4f46e5?style=for-the-badge&logo=vercel)](https://dashanagrawal-portfolio-kappa-ten-93.vercel.app/)
[![Demo Admin](https://img.shields.io/badge/Demo%20Admin-Try%20Now-10b981?style=for-the-badge&logo=flask)](https://dashanagrawal-portfolio-kappa-ten-93.vercel.app/demo)

</div>

---

## 📸 Screenshots

### Public Portfolio

| Home Page | Case Studies | Blog |
|---|---|---|
| ![Home Page](./screenshots/home.png) | ![Case Studies](./screenshots/case-studies.png) | ![Blog](./screenshots/blog.png) |

> **Hero section** with typewriter animation, flip cards, skills marquee, and experience timeline.

### Admin Dashboard

| Admin Login | Dashboard — Blogs Tab | Modal Editor |
|---|---|---|
| ![Login](./screenshots/admin-login.png) | ![Dashboard](./screenshots/admin-dashboard.png) | ![Editor](./screenshots/admin-modal.png) |

> Full CRUD for case studies, blog posts, and messages — all managed from one panel.

### Demo Account

| Demo Landing | Demo Content Preview |
|---|---|
| ![Demo Landing](./screenshots/demo-landing.png) | ![Demo Preview](./screenshots/demo-preview.png) |

> Demo users get a sandboxed environment — everything they create is isolated from the live portfolio.

---

## ✨ Features

### 🌐 Public Portfolio
- **Animated Hero** — Typewriter effect cycling through roles/titles
- **About Flip Cards** — Interactive 3D card flip revealing more about each skill area
- **Skills Marquee** — Horizontally scrolling skill tags
- **Animated Counters** — Numbers count up on scroll into view
- **Experience Timeline** — Vertical timeline of work history
- **Featured Projects** — Highlights top case studies on the homepage
- **Case Studies** — Paginated list (6 per page) with load-more; each study has a full detail page with tech stack tags, thumbnail, and GitHub/live links
- **Blog** — Client-side search by title or category; supports `rich`, `text`, and `html` content types (rendered via TipTap)
- **Contact Form** — Saves to DB and sends transactional email via Resend; shows availability info

### 🔐 Admin Panel
- **JWT Authentication** — Access tokens (15 min) + refresh tokens (7 days); auto-refresh via Axios interceptor — no manual re-login
- **Three-tab Dashboard** — Manage Blogs, Case Studies, and Messages from one screen
- **Rich Text Editor** — TipTap-powered editor for blog posts and case studies
- **Image Uploads** — Upload directly to Cloudinary; Cloudinary URL stored in DB; images cleaned up on delete
- **Draft/Publish Toggle** — Content only appears publicly when `is_published = true`
- **Featured Toggle** — Mark case studies as featured to surface them on the homepage (requires both `is_featured` and `is_published`)
- **Modal-based Editor** — Modals rendered via `createPortal` into `document.body`, avoiding z-index conflicts

### 🧪 Demo Account
- **Sandboxed Environment** — Demo users get role `demo` instead of `admin`; every action is flagged `is_demo: true`
- **Full Admin UX** — Demo users can create, edit, delete, and upload — exploring the full panel without touching real data
- **Hard-enforced Isolation** — API returns `403` if a demo user attempts to access `is_demo: false` records; public routes always filter `is_demo: false`
- **Seeded Content** — Run `demo_seed.py` to populate the demo account with sample blogs and case studies out of the box

### ⚡ Frontend Performance
- **React Query Caching** — List pages cache for 5 min, detail pages for 10 min; instant back-navigation
- **Dark / Light Theme** — Styled-components `ThemeProvider` with tokens; persisted in `localStorage`
- **Framer Motion Animations** — Page transitions and scroll-triggered reveals
- **Vite Build** — Fast HMR in dev, optimised `dist/` for production

---

## 🗂 Project Structure

```
portfolio/
├── backend/                    Flask REST API
│   ├── models/                 SQLAlchemy models
│   │   ├── blog.py             Blog post model
│   │   ├── case_study.py       Case study model
│   │   ├── message.py          Contact message model
│   │   └── user.py             User model (admin / demo roles)
│   ├── routes/                 API blueprints
│   │   ├── auth.py             Login, refresh, /me
│   │   ├── blogs.py            Blog CRUD (public + admin + demo)
│   │   ├── case_studies.py     Case study CRUD
│   │   ├── contact.py          Contact form submission
│   │   └── upload.py           Cloudinary image upload
│   ├── services/
│   │   ├── seed.py             Seed real portfolio content
│   │   └── demo_seed.py        Seed demo account content
│   ├── utils/                  Helpers, JWT decorators, Cloudinary utils
│   ├── app.py                  App factory
│   ├── config.py               Environment config
│   ├── extensions.py           db, jwt, cors instances
│   ├── Procfile                Gunicorn entry point for Render
│   └── requirements.txt
└── frontend/
    └── my_portfolio/           Vite + React SPA
        ├── src/
        │   ├── components/
        │   │   ├── admin/      Dashboard tabs, modals, editor
        │   │   ├── cards/      Blog card, case study card
        │   │   ├── effects/    Typewriter, marquee, counters
        │   │   ├── home/       Hero, about, skills, timeline
        │   │   ├── layout/     Navbar, footer, page wrapper
        │   │   └── ui/         Shared buttons, inputs, tags
        │   ├── pages/          Route-level page components
        │   ├── hooks/          useApiData, useScroll, useTypewriter, etc.
        │   ├── contexts/       AuthContext, ThemeContext
        │   └── services/       Axios instance, React Query client
        ├── vercel.json         SPA rewrite rules
        └── vite.config.js
```

---

## 🔌 API Reference

### Public Endpoints

| Method | Route | Description |
|---|---|---|
| `GET` | `/portfolio/portfolio-data/data` | Portfolio JSON (bio, skills, experience, counters) |
| `GET` | `/portfolio/blogs` | Published blogs — paginated |
| `GET` | `/portfolio/blogs/:slug` | Single blog post |
| `GET` | `/portfolio/case-studies` | Published case studies |
| `GET` | `/portfolio/case-studies/:slug` | Single case study |
| `GET` | `/portfolio/case-studies/featured` | Featured case studies (max 4) |
| `POST` | `/portfolio/contact` | Submit contact form |
| `GET` | `/health` | Health check |

### Admin Endpoints *(JWT — role: `admin`)*

| Method | Route | Description |
|---|---|---|
| `POST` | `/portfolio/auth/login` | Login → access + refresh tokens |
| `POST` | `/portfolio/auth/refresh` | Refresh access token |
| `GET` | `/portfolio/auth/me` | Current user info |
| `GET` | `/portfolio/blogs/admin` | All real blogs (`is_demo=false`) |
| `POST/PUT/DELETE` | `/portfolio/blogs` / `/:id` | Create / update / delete blog |
| `GET` | `/portfolio/case-studies/admin` | All real case studies |
| `POST/PUT/DELETE` | `/portfolio/case-studies` / `/:id` | Create / update / delete case study |
| `GET` | `/portfolio/contact` | All real messages — paginated |
| `POST` | `/portfolio/upload` | Upload image to Cloudinary |

### Demo Endpoints *(JWT — role: `demo`)*

Same CRUD routes as admin, but all reads/writes are scoped to `is_demo=true` records automatically. Attempting to access real content returns `403`.

---

## 🗄 Database Schema

All tables live under the `app_schema` PostgreSQL schema.

<details>
<summary><strong>users</strong></summary>

| Column | Type | Notes |
|---|---|---|
| id | integer | primary key |
| name | varchar(100) | |
| email | varchar(150) | unique |
| password_hash | text | bcrypt |
| role | varchar(20) | `admin` or `demo` |
| created_at | datetime | |

</details>

<details>
<summary><strong>blog_posts</strong></summary>

| Column | Type | Notes |
|---|---|---|
| id | integer | primary key |
| title | varchar(200) | |
| slug | varchar(200) | unique, auto-generated |
| excerpt | text | card preview |
| content | text | TipTap HTML |
| category | varchar(100) | |
| content_type | varchar(20) | `rich`, `text`, or `html` |
| read_time | varchar(20) | auto-calculated on save |
| is_published | boolean | drafts hidden from public |
| is_demo | boolean | demo content, hidden from public |
| created_at / updated_at | datetime | |

</details>

<details>
<summary><strong>case_studies</strong></summary>

| Column | Type | Notes |
|---|---|---|
| id | integer | primary key |
| title | varchar(200) | |
| slug | varchar(200) | unique |
| summary | text | shown on cards |
| content | text | TipTap HTML |
| tech_stack | text | comma-separated |
| thumbnail | text | Cloudinary URL |
| github_url / live_url | text | optional |
| category | varchar(50) | |
| company_project | boolean | |
| is_featured | boolean | shown in homepage featured section |
| is_published | boolean | |
| is_demo | boolean | demo content, hidden from public |
| created_at | datetime | |

</details>

<details>
<summary><strong>messages</strong></summary>

| Column | Type | Notes |
|---|---|---|
| id | integer | primary key |
| name | varchar(100) | |
| email | varchar(150) | |
| message | text | |
| is_demo | boolean | submitted by demo user |
| created_at | datetime | |

</details>

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version |
|---|---|
| Python | 3.11 |
| Node.js | 18+ |
| PostgreSQL | local or Supabase |
| Cloudinary | free tier |
| Resend | free tier |

---

### Backend Setup

**1. Clone and set up a virtual environment**

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

**2. Create your `.env`**

```env
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio_db
SECRET_KEY=pick-something-long-and-random

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

CONTACT_SENDER_EMAIL=onboarding@resend.dev
CONTACT_RECEIVER_EMAIL=your@email.com
RESEND_API_KEY=re_xxxxxxxxx
```

> Using Supabase? Use the pooled connection string from your project dashboard on port `6543`.

**3. Create the database schema**

```sql
CREATE SCHEMA app_schema;
```

Then run migrations:

```bash
python -c "from app import create_app; from extensions import db; app = create_app(); app.app_context().__enter__(); db.create_all()"
```

**4. Create your admin user**

```python
from app import create_app
from extensions import db
from models import User
import bcrypt

app = create_app()
with app.app_context():
    hashed = bcrypt.hashpw(b"your_password", bcrypt.gensalt())
    user = User(
        name="Darshan",
        email="you@example.com",
        password_hash=hashed.decode(),
        role="admin"
    )
    db.session.add(user)
    db.session.commit()
    print("Admin created.")
```

**5. Create the demo user**

```python
from app import create_app
from extensions import db
from models import User
import bcrypt

app = create_app()
with app.app_context():
    hashed = bcrypt.hashpw(b"demo1234", bcrypt.gensalt())
    user = User(
        name="Demo User",
        email="demo@portfolio.com",
        password_hash=hashed.decode(),
        role="demo"
    )
    db.session.add(user)
    db.session.commit()
    print("Demo user created.")
```

**6. Seed content** *(optional)*

```bash
# Real portfolio data
python services/seed.py

# Demo account sample content
python services/demo_seed.py
```

**7. Run the dev server**

```bash
python app.py
```

API runs at `http://127.0.0.1:5000`. Confirm with `http://127.0.0.1:5000/health`.

---

### Frontend Setup

**1. Install dependencies**

```bash
cd frontend/my_portfolio
npm install
```

**2. Create your `.env`**

```env
VITE_API_URL=http://127.0.0.1:5000/portfolio
```

**3. Run the dev server**

```bash
npm run dev
```

Runs at `http://localhost:5173`.

**4. Build for production**

```bash
npm run build
```

Output goes to `dist/`. The `vercel.json` already handles client-side routing rewrites — Vercel deploys work out of the box.

---

## ☁️ Deploying

### Backend → Render

The `Procfile` is ready:

```
web: gunicorn app:app --workers 2 --bind 0.0.0.0:$PORT
```

Set all environment variables in Render's dashboard. Use the Supabase pooled connection string (port `6543`).

### Frontend → Vercel

1. Point Vercel at `frontend/my_portfolio`
2. Set `VITE_API_URL` to your Render backend URL
3. The `vercel.json` rewrite handles React Router — page refreshes on any route work correctly

---

## 🔑 Environment Variables Reference

| Variable | Where | What it does |
|---|---|---|
| `DATABASE_URL` | backend | PostgreSQL connection string |
| `SECRET_KEY` | backend | Flask session + JWT signing secret |
| `CLOUDINARY_CLOUD_NAME` | backend | Cloudinary project name |
| `CLOUDINARY_API_KEY` | backend | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | backend | Cloudinary API secret |
| `CONTACT_SENDER_EMAIL` | backend | From address for contact form emails |
| `CONTACT_RECEIVER_EMAIL` | backend | Where contact form emails land |
| `RESEND_API_KEY` | backend | Resend transactional email key |
| `VITE_API_URL` | frontend | Backend base URL |

---

## 🛠 Troubleshooting

<details>
<summary><code>relation "app_schema.users" does not exist</code></summary>

You skipped the schema creation step. Run `CREATE SCHEMA app_schema;` in your database before running `db.create_all()`.

</details>

<details>
<summary>401 on every admin request after logging in</summary>

Check that `VITE_API_URL` has no trailing slash and matches the Flask route prefix exactly. Axios base URL and Flask blueprints must align.

</details>

<details>
<summary>Contact form submits but no email arrives</summary>

Resend's free tier only sends from `onboarding@resend.dev` to verified addresses. Add your email as a verified sender in your Resend dashboard, or use a custom domain.

</details>

<details>
<summary>Images not uploading or showing after upload</summary>

The upload route requires a valid JWT. If you're getting 401s mid-session, your access token may have expired. The auto-refresh interceptor should catch this — if it doesn't, log out and back in.

</details>

<details>
<summary><code>is_featured</code> not showing on the home page</summary>

Both `is_featured` and `is_published` must be `true`. They're separate toggles in the admin — check both.

</details>

<details>
<summary>Demo content appearing on the live portfolio</summary>

Check that public routes (`GET /portfolio/blogs`, `GET /portfolio/case-studies`) are filtering `is_demo=False`. The public API intentionally excludes all demo-flagged records.

</details>

---

## 🧱 Tech Stack

| Layer | Stack |
|---|---|
| **Frontend** | React 18, Vite, styled-components, React Query, React Router v6, Framer Motion |
| **Backend** | Python 3.11, Flask, Flask-JWT-Extended, Flask-SQLAlchemy, bcrypt |
| **Database** | PostgreSQL (Supabase in production) |
| **Media** | Cloudinary |
| **Email** | Resend |
| **Deployment** | Vercel (frontend) + Render (backend) |

---

## 🧪 Try the Demo

The demo account lets you explore the full admin panel — create, edit, and delete content — without touching any live portfolio data.

```
URL:      https://dashanagrawal-portfolio.vercel.app/demo
Email:    demo@portfoliolab.dev
Password: demo1234
```

Everything the demo user touches is flagged `is_demo: true` and stays completely separate from the live site.

---

## 📄 License

This project is for personal portfolio use. Feel free to use it as inspiration or a reference for your own portfolio.
