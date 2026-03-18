## Project Structure

|-- backend/
|   |-- data/
|   |   |-- portfolio_data.json
|   |-- models/
|   |   |-- blog.py
|   |   |-- case_study.py
|   |   |-- message.py
|   |   |-- user.py
|   |   |-- __init__.py
|   |-- routes/
|   |   |-- auth.py
|   |   |-- blogs.py
|   |   |-- case_studies.py
|   |   |-- contact.py
|   |   |-- information.py
|   |   |-- upload.py
|   |   |-- __init__.py
|   |-- services/
|   |   |-- demo_seed.py
|   |   |-- email_service.py
|   |   |-- seed.py
|   |-- uploads/
|   |-- utils/
|   |   |-- cloudinary_helpers.py
|   |   |-- decorators.py
|   |   |-- helpers.py
|   |-- .env
|   |-- app.py
|   |-- config.py
|   |-- extensions.py
|   |-- Procfile
|   |-- requirements.txt
|   |-- runtime.txt
|-- frontend/
|   |-- my_portfolio/
|   |   |-- public/
|   |   |-- src/
|   |   |   |-- assets/
|   |   |   |-- components/
|   |   |   |   |-- admin/
|   |   |   |   |   |-- AdminContentCard.jsx
|   |   |   |   |   |-- AdminFormFields.jsx
|   |   |   |   |   |-- AdminLogin.jsx
|   |   |   |   |   |-- adminStyles.js
|   |   |   |   |   |-- ContentModal.jsx
|   |   |   |   |   |-- DemoBanner.jsx
|   |   |   |   |   |-- MessageModal.jsx
|   |   |   |   |   |-- PreviewModal.jsx
|   |   |   |   |-- cards/
|   |   |   |   |   |-- BlogCard.jsx
|   |   |   |   |   |-- ProjectCard.jsx
|   |   |   |   |-- effects/
|   |   |   |   |   |-- ComicGrid.jsx
|   |   |   |   |   |-- FloatingShapes.jsx
|   |   |   |   |   |-- ParallaxWrapper.jsx
|   |   |   |   |   |-- SectionWave.jsx
|   |   |   |   |   |-- WaterWaves.jsx
|   |   |   |   |-- home/
|   |   |   |   |   |-- About.jsx
|   |   |   |   |   |-- Counters.jsx
|   |   |   |   |   |-- FeaturedProjects.jsx
|   |   |   |   |   |-- Hero.jsx
|   |   |   |   |   |-- SkillsMarquee.jsx
|   |   |   |   |   |-- Timeline.jsx
|   |   |   |   |-- layout/
|   |   |   |   |   |-- Footer.jsx
|   |   |   |   |   |-- Navbar.jsx
|   |   |   |   |   |-- NoiseOverlay.jsx
|   |   |   |   |   |-- PageTransition.jsx
|   |   |   |   |   |-- ScrollProgress.jsx
|   |   |   |   |   |-- ScrollToTop.jsx
|   |   |   |   |-- ui/
|   |   |   |   |   |-- BackButton.jsx
|   |   |   |   |   |-- CardSkeleton.jsx
|   |   |   |   |   |-- CategoryBadge.jsx
|   |   |   |   |   |-- CustomCursor.jsx
|   |   |   |   |   |-- EmptyState.jsx
|   |   |   |   |   |-- FilterTab.jsx
|   |   |   |   |   |-- FloatingInput.jsx
|   |   |   |   |   |-- LoadingScreen.jsx
|   |   |   |   |   |-- LoadMoreButton.jsx
|   |   |   |   |   |-- MagneticButton.jsx
|   |   |   |   |   |-- NotFound.jsx
|   |   |   |   |   |-- PageHero.jsx
|   |   |   |   |   |-- PageLoader.jsx
|   |   |   |   |   |-- ProseContent.jsx
|   |   |   |   |   |-- RichEditor.jsx
|   |   |   |   |   |-- SectionHeader.jsx
|   |   |   |   |   |-- Tag.jsx
|   |   |   |   |   |-- TagList.jsx
|   |   |   |   |   |-- ThemeToggle.jsx
|   |   |   |   |   |-- Toast.jsx
|   |   |   |-- contexts/
|   |   |   |   |-- AuthContext.jsx
|   |   |   |   |-- ThemeContext.jsx
|   |   |   |-- data/
|   |   |   |   |-- siteData.jsx
|   |   |   |-- hooks/
|   |   |   |   |-- useApiData.jsx
|   |   |   |   |-- useCountUp.jsx
|   |   |   |   |-- useFetch.jsx
|   |   |   |   |-- useMousePosition.jsx
|   |   |   |   |-- usePost.jsx
|   |   |   |   |-- useScrollProgress.jsx
|   |   |   |   |-- useScrollReveal.jsx
|   |   |   |   |-- useTypewriter.jsx
|   |   |   |-- pages/
|   |   |   |   |-- Admin.jsx
|   |   |   |   |-- Blog.jsx
|   |   |   |   |-- BlogDetails.jsx
|   |   |   |   |-- CaseStudies.jsx
|   |   |   |   |-- CaseStudyDetails.jsx
|   |   |   |   |-- Contact.jsx
|   |   |   |   |-- DemoLanding.jsx
|   |   |   |   |-- Home.jsx
|   |   |   |-- services/
|   |   |   |   |-- apis.jsx
|   |   |   |   |-- queryClient.jsx
|   |   |   |-- styles/
|   |   |   |   |-- globalStyles.jsx
|   |   |   |   |-- theme.js
|   |   |   |-- utils/
|   |   |   |   |-- categoryColors.js
|   |   |   |   |-- helpers.js
|   |   |   |-- App.css
|   |   |   |-- App.jsx
|   |   |   |-- index.css
|   |   |   |-- main.jsx
|   |   |-- .env
|   |   |-- .env.production
|   |   |-- .gitignore
|   |   |-- eslint.config.js
|   |   |-- index.html
|   |   |-- media.js
|   |   |-- package.json
|   |   |-- README.md
|   |   |-- vercel.json
|   |   |-- vite.config.js
|-- .gitignore
|-- README.md

## File Contents


### .gitignore

```
# ========================
# FRONTEND (React/Vite)
# ========================
frontend/my_portfolio/node_modules/
frontend/my_portfolio/dist/
frontend/my_portfolio/build/
frontend/my_portfolio/.env
frontend/my_portfolio/.env.local
frontend/my_portfolio/.env.production
frontend/my_portfolio/project_structure.md

# ========================
# BACKEND (Flask/Python)
# ========================
backend/venv/
backend/__pycache__/
backend/**/__pycache__/
backend/*.pyc
backend/*.pyo
backend/.env
backend/instance/
backend/migrations/versions/*.pyc
backend/project_structure.md
# ========================
# GENERAL
# ========================
.DS_Store
Thumbs.db
*.log
.vscode/settings.json
```


### README.md

```
# Darshan Agrawal — Portfolio

Full-stack personal portfolio with a content admin dashboard. Built with React + Vite on the frontend and Flask + PostgreSQL on the backend. Everything you see on the portfolio — case studies, blog posts, homepage content — is managed through a protected admin panel.

**Live portfolio →** `https://dashanagrawal-portfolio-kappa-ten-93.vercel.app/`
**Demo admin →** `https://dashanagrawal-portfolio-kappa-ten-93.vercel.app/demo`

```
Email:    demo@portfolio.com
Password: demo1234
```

The demo account lets you explore the admin panel fully — create, edit, and delete content — without touching any real portfolio data. Everything the demo user touches is flagged `is_demo: true` and stays completely separate from the live site.

---

## What's in here

```
portfolio/
├── backend/              Flask REST API
│   ├── models/           SQLAlchemy models (Blog, CaseStudy, Message, User)
│   ├── routes/           API blueprints (auth, blogs, case_studies, contact, upload)
│   ├── services/         Seed scripts (real data + demo data)
│   ├── utils/            Helpers, decorators, Cloudinary utilities
│   ├── app.py            App factory
│   ├── config.py         Environment config
│   └── requirements.txt
└── frontend/
    └── my_portfolio/     Vite + React SPA
        ├── src/
        │   ├── components/   UI components (admin, cards, effects, home, layout, ui)
        │   ├── pages/        Route-level pages
        │   ├── hooks/        Custom hooks (data fetching, scroll, typewriter, etc.)
        │   ├── contexts/     Auth + Theme context
        │   └── services/     Axios API layer + React Query client
        └── vite.config.js
```

---

## Pages

### Public

| Page | Route | What it does |
|---|---|---|
| Home | `/` | Hero with typewriter animation, About flip cards, Skills marquee, Counters, Experience timeline, Featured Projects |
| Case Studies | `/case-studies` | All published case studies — 6 per page, load more on demand |
| Case Study Detail | `/case-studies/:slug` | Full case study with content, tech stack tags, thumbnail, GitHub/live links |
| Blog | `/blog` | Published blog posts with client-side search by title or category |
| Blog Detail | `/blog/:slug` | Single blog post — supports `rich`, `text`, and `html` content types |
| Contact | `/contact` | Contact form (saves to DB + sends email via Resend) + availability info |

### Admin (JWT protected)

| Page | Route | What it does |
|---|---|---|
| Admin Login | `/admin/login` | Email + password login, stores JWT tokens in localStorage |
| Admin Dashboard | `/admin` | Three tabs: Blogs, Cases, Messages — full CRUD with modal editor |
| Demo Landing | `/demo` | Entry point shown to demo users after login |

---

## How the demo account works

The demo user has role `demo` instead of `admin`. Every piece of content the demo user creates, edits, or deletes is flagged `is_demo: true` in the database. Real portfolio content (your actual case studies and blog posts) has `is_demo: false`.

The backend enforces this at every route:

- Demo users can only see, edit, and delete `is_demo: true` records
- Demo users cannot touch `is_demo: false` content — the API returns `403`
- The public portfolio (`/case-studies`, `/blog`) only ever shows `is_demo: false` content

This means a demo user can click through every part of the admin panel — create a case study, upload a thumbnail, write a blog post, delete it — and none of it affects what visitors see on the live portfolio.

To seed the demo data so the demo account has something to work with:

```bash
cd backend
python services/demo_seed.py
```

---

## Requirements

**Backend**
- Python 3.11
- PostgreSQL (local or Supabase)
- Cloudinary account (free tier works)
- Resend account for contact form emails

**Frontend**
- Node.js 18+
- npm

---

## Backend setup

### 1. Clone and create a virtual environment

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Create your `.env`

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

Using Supabase? Grab the pooled connection string from your project dashboard and use port `6543`.

### 3. Create the database schema

The app uses a custom `app_schema` schema — not the default `public`. Create it first:

```sql
CREATE SCHEMA app_schema;
```

Then run the migrations:

```bash
python -c "from app import create_app; from extensions import db; app = create_app(); app.app_context().__enter__(); db.create_all()"
```

### 4. Create your admin user

There's no registration UI. Drop into a Python shell:

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

### 5. Create the demo user

Same process, but with `role="demo"`:

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

### 6. Seed data (optional)

Real portfolio data:
```bash
python services/seed.py
```

Demo data (for the demo account to have content to work with):
```bash
python services/demo_seed.py
```

### 7. Run the dev server

```bash
python app.py
```

API runs on `http://127.0.0.1:5000`. Confirm with `http://127.0.0.1:5000/health`.

---

## Frontend setup

### 1. Install dependencies

```bash
cd frontend/my_portfolio
npm install
```

### 2. Create your `.env`

```env
VITE_API_URL=http://127.0.0.1:5000/portfolio
```

Swap for your deployed backend URL in production.

### 3. Run the dev server

```bash
npm run dev
```

Runs at `http://localhost:5173`.

### 4. Build for production

```bash
npm run build
```

Output goes to `dist/`. The `vercel.json` already handles client-side routing rewrites — Vercel deploys work out of the box.

---

## Environment variables reference

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

## Database schema

All tables live under the `app_schema` schema.

**users**

| Column | Type | Notes |
|---|---|---|
| id | integer | primary key |
| name | varchar(100) | |
| email | varchar(150) | unique |
| password_hash | text | bcrypt |
| role | varchar(20) | `admin` or `demo` |
| created_at | datetime | |

**blog_posts**

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
| is_demo | boolean | `true` = demo content, hidden from public |
| created_at / updated_at | datetime | |

**case_studies**

| Column | Type | Notes |
|---|---|---|
| id | integer | primary key |
| title | varchar(200) | |
| slug | varchar(200) | unique |
| summary | text | shown on cards |
| content | text | TipTap HTML |
| tech_stack | text | comma-separated |
| thumbnail | text | Cloudinary URL |
| github_url | text | optional |
| live_url | text | optional |
| category | varchar(50) | |
| company_project | boolean | |
| is_featured | boolean | shown in home page featured section |
| is_published | boolean | |
| is_demo | boolean | `true` = demo content, hidden from public |
| created_at | datetime | |

**messages**

| Column | Type | Notes |
|---|---|---|
| id | integer | primary key |
| name | varchar(100) | |
| email | varchar(150) | |
| message | text | |
| is_demo | boolean | `true` = submitted by demo user |
| created_at | datetime | |

---

## API routes

### Public

```
GET  /portfolio/portfolio-data/data     Portfolio JSON (skills, experience, counters, bio)
GET  /portfolio/blogs                   Published blog posts — paginated
GET  /portfolio/blogs/:slug             Single blog post by slug
GET  /portfolio/case-studies            Published case studies
GET  /portfolio/case-studies/:slug      Single case study by slug
GET  /portfolio/case-studies/featured   Featured case studies (max 4)
POST /portfolio/contact                 Submit contact form
GET  /health                            Health check
```

### Admin (JWT required — role: admin)

```
POST   /portfolio/auth/login            Login → access + refresh tokens
POST   /portfolio/auth/refresh          Refresh access token
GET    /portfolio/auth/me               Current user info

GET    /portfolio/blogs/admin           All real blogs (is_demo=false)
POST   /portfolio/blogs                 Create blog post
PUT    /portfolio/blogs/:id             Update blog post
DELETE /portfolio/blogs/:id             Delete blog post

GET    /portfolio/case-studies/admin    All real case studies (is_demo=false)
POST   /portfolio/case-studies          Create case study
PUT    /portfolio/case-studies/:id      Update case study
DELETE /portfolio/case-studies/:id      Delete case study

GET    /portfolio/contact               All real messages — paginated
POST   /portfolio/upload                Upload image to Cloudinary
```

### Demo (JWT required — role: demo)

```
GET    /portfolio/blogs/admin           Demo blogs only (is_demo=true)
POST   /portfolio/blogs                 Create blog — auto-flagged is_demo=true
PUT    /portfolio/blogs/:id             Edit demo blogs only
DELETE /portfolio/blogs/:id             Delete demo blogs only

GET    /portfolio/case-studies/admin    Demo case studies only
POST   /portfolio/case-studies          Create case study — auto-flagged is_demo=true
PUT    /portfolio/case-studies/:id      Edit demo case studies only
DELETE /portfolio/case-studies/:id      Delete demo case studies only

GET    /portfolio/blogs/demo-preview    Preview demo blog posts
GET    /portfolio/case-studies/demo-preview  Preview demo case studies
POST   /portfolio/upload                Upload image to Cloudinary
```

JWT access tokens expire after **15 minutes**. Refresh tokens last **7 days**. The frontend axios interceptor auto-refreshes on 401 responses — you won't notice this in normal use.

---

## Key frontend decisions

**React Query for data fetching.** Every public API call goes through a React Query hook (`useApiData.jsx`). Data caches for 5 minutes on list pages, 10 minutes on detail pages. Navigating back to a visited page is instant — no re-fetch.

**Styled-components for theming.** No CSS files for component styles. Dark/light tokens run through a `ThemeProvider`. The active theme persists in `localStorage` under `portfolio-theme`.

**Admin state is local.** The admin panel manages its data in local `useState` rather than React Query — mutations need an immediate refetch anyway, so caching adds no benefit there.

**Cloudinary for image uploads.** The admin modal uploads directly to Cloudinary via the backend. The backend returns the `secure_url`, which is stored as plain text in the database. On delete, the backend also cleans up associated Cloudinary images.

**`createPortal` for modals.** Admin modals render into `document.body` via `createPortal`, keeping them outside the main layout stacking context and avoiding z-index issues.

---

## Deploying

**Backend → Render**

The `Procfile` is ready:
```
web: gunicorn app:app --workers 2 --bind 0.0.0.0:$PORT
```
Set all environment variables in Render's dashboard. Use the Supabase pooled connection string (port `6543`).

**Frontend → Vercel**

Point Vercel at `frontend/my_portfolio`. Set `VITE_API_URL` to your Render backend URL. The `vercel.json` rewrite handles React Router — page refreshes on any route work correctly.

---

## Troubleshooting

**`relation "app_schema.users" does not exist`**
You skipped the schema creation step. Run `CREATE SCHEMA app_schema;` in your database before running `db.create_all()`.

**401 on every admin request after logging in**
Check that `VITE_API_URL` has no trailing slash and matches exactly what the Flask route prefix expects. Axios base URL and Flask blueprints need to align.

**Contact form submits but no email arrives**
Resend's free tier only sends from `onboarding@resend.dev` to verified addresses. Add your email as a verified sender in your Resend dashboard, or use a custom domain.

**Images not uploading or showing after upload**
The upload route requires a valid JWT. If you're getting 401s mid-session, your access token may have expired. The auto-refresh interceptor should catch this — if it doesn't, log out and back in.

**`is_featured` not showing on the home page**
Both `is_featured` and `is_published` must be `true`. They're separate toggles in the admin — check both.

**Demo content appearing on the live portfolio**
Shouldn't happen — but if it does, check that the public routes (`GET /portfolio/blogs`, `GET /portfolio/case-studies`) are filtering `is_demo=False`. The public API intentionally excludes all demo-flagged records.

---

## Tech stack summary

| Layer | Stack |
|---|---|
| Frontend | React 18, Vite, styled-components, React Query, React Router v6, Framer Motion |
| Backend | Python 3.11, Flask, Flask-JWT-Extended, Flask-SQLAlchemy, bcrypt |
| Database | PostgreSQL (Supabase in production) |
| Media | Cloudinary |
| Email | Resend |
| Deployment | Vercel (frontend) + Render (backend) |
```


### backend\.env

```
# DATABASE_URL=postgresql://postgres:1234@localhost:5432/portfolio_db
DATABASE_URL=postgresql://postgres.tkzejgpedeycvlopdoqy:Portfolio2024Dx@aws-1-ap-south-1.pooler.supabase.com:6543/postgres


# DATABASE_URL=postgresql://postgres:Portfolio2024Dx@aws-0-ap-south-1.pooler.supabase.com:6543/postgres
SECRET_KEY=supersecretkey
FLASK_ENV=development


CLOUDINARY_CLOUD_NAME=dsihbznoc
CLOUDINARY_API_KEY=111695531584429
CLOUDINARY_API_SECRET=IiYLmYnj77mVQ9lbsC0kSIpxgrE

CONTACT_SENDER_EMAIL=onboarding@resend.dev
CONTACT_RECEIVER_EMAIL=darshanagrawal007@gmail.com
RESEND_API_KEY=re_jifFrKiA_BRg4PfDifsZ8jVgzDBVMG9Kg
```


### backend\app.py

```
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
from config import Config
from extensions import db, jwt
from routes import register_routes
import os
import cloudinary

def create_app():

    app = Flask(__name__)
    app.config.from_object(Config)

    # Configure Cloudinary
    cloudinary.config(
        cloud_name=app.config["CLOUDINARY_CLOUD_NAME"],
        api_key=app.config["CLOUDINARY_API_KEY"],
        api_secret=app.config["CLOUDINARY_API_SECRET"]
    )


    # Enable CORS
    CORS(app)

    # Initialize extensions
    db.init_app(app)
    jwt.init_app(app)

    # Register routes
    register_routes(app)
    
    @app.route('/health')
    def health():
        return {'status': 'ok'}, 200
    
    # # Serve uploaded images
    # @app.route("/uploads/<path:filename>")
    # def uploaded_file(filename):
    #     return send_from_directory(app.config["UPLOAD_FOLDER"], filename)

    # Error handlers
    @app.errorhandler(404)
    def not_found(e):
        return jsonify({"error": "Resource not found"}), 404

    @app.errorhandler(500)
    def server_error(e):
        return jsonify({"error": "Internal server error"}), 500

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
```


### backend\config.py

```
import os
from dotenv import load_dotenv

load_dotenv()

from datetime import timedelta

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CLOUDINARY_CLOUD_NAME = os.environ.get("CLOUDINARY_CLOUD_NAME")
    CLOUDINARY_API_KEY = os.environ.get("CLOUDINARY_API_KEY")
    CLOUDINARY_API_SECRET = os.environ.get("CLOUDINARY_API_SECRET")
    JWT_SECRET_KEY = os.getenv("SECRET_KEY")

    JWT_ACCESS_TOKEN_EXPIRES = timedelta(minutes=15)
    JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=7)
```


### backend\extensions.py

```
# extensions.py
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
jwt = JWTManager()
```


### backend\Procfile

```
web: gunicorn app:app --workers 2 --bind 0.0.0.0:$PORT
```


### backend\requirements.txt

```
bcrypt==5.0.0
beautifulsoup4==4.14.3
blinker==1.9.0
certifi==2026.2.25
charset-normalizer==3.4.5
click==8.3.1
cloudinary==1.44.1
colorama==0.4.6
Flask==3.1.3
flask-cors==6.0.2
Flask-JWT-Extended==4.7.1
Flask-SQLAlchemy==3.1.1
greenlet==3.3.2
gunicorn==25.1.0
idna==3.11
itsdangerous==2.2.0
Jinja2==3.1.6
lxml==6.0.2
MarkupSafe==3.0.3
packaging==26.0
psycopg2-binary==2.9.11
PyJWT==2.11.0
python-dotenv==1.2.2
requests==2.32.5
resend==2.23.0
six==1.17.0
soupsieve==2.8.3
SQLAlchemy==2.0.47
typing_extensions==4.15.0
urllib3==2.6.3
Werkzeug==3.1.6
```


### backend\runtime.txt

```
python-3.11.0
```


### backend\data\portfolio_data.json

```
{
  "personalInfo": {
    "name": "Darshan",
    "lastName": "Agrawal",
    "roles": [
      "Full Stack Engineer",
      "React + Python Developer",
      "Remote-First Builder"
    ],
    "bio": "Full Stack Engineer with 4+ years building performant, data-driven web apps. I specialize in React ecosystems and Python backends - from real-time KPI dashboards to automated data pipelines - with a sharp eye for clean code and intuitive design.",
    "email": "darshanagrawal007@gmail.com",
    "location": "India (Remote Worldwide)",
    "resumeUrl": "/Darshan_Agrawal_Resume.pdf",
    "socials": {
      "github": "https://github.com/darshan12-code/",
      "linkedin": "https://www.linkedin.com/in/darshan-agrawal-012/",
      "twitter": "https://twitter.com"
    }
  },

  "navLinks": [
    { "label": "Home", "path": "/" },
    { "label": "Case Studies", "path": "/case-studies" },
    { "label": "Blog", "path": "/blog" },
    { "label": "Contact", "path": "/contact" }
  ],

  "skills": [
    { "name": "React.js", "icon": "SiReact" },
    { "name": "TypeScript", "icon": "SiTypescript" },
    { "name": "JavaScript", "icon": "SiJavascript" },
    { "name": "Python", "icon": "SiPython" },
    { "name": "Flask", "icon": "SiFlask" },
    { "name": "Node.js", "icon": "SiNodedotjs" },
    { "name": "Express.js", "icon": "SiExpress" },
    { "name": "Angular", "icon": "SiAngular" },
    { "name": "GraphQL", "icon": "SiGraphql" },
    { "name": "D3.js", "icon": "SiD3Dotjs" },
    { "name": "SCSS", "icon": "SiSass" },
    { "name": "PostgreSQL", "icon": "SiPostgresql" },
    { "name": "MySQL", "icon": "SiMysql" },
    { "name": "MongoDB", "icon": "SiMongodb" },
    { "name": "Azure Databricks", "icon": "SiDatabricks" },
    { "name": "Azure Data Factory", "icon": "SiMicrosoftazure" },
    { "name": "Docker", "icon": "SiDocker" },
    { "name": "Git", "icon": "SiGit" },
    { "name": "Jira", "icon": "SiJira" },
    { "name": "Pandas", "icon": "SiPandas" }
  ],

  "experience": [
    {
      "id": 1,
      "role": "Full Stack Engineer",
      "company": "Rhombuz",
      "location": "Remote — Seattle, USA",
      "period": "Feb 2023 – Present",
      "description": "Led full-stack delivery of a real-time KPI dashboard visualizing 26 metrics with D3.js graphs. Automated telecom data workflows processing 16+ public records, cutting PDF processing time by 70%. Optimized API performance, reduced query latency, and mentored junior developers.",
      "tech": [
        "React",
        "Python",
        "Flask",
        "Azure Databricks",
        "Azure Data Factory",
        "D3.js",
        "PostgreSQL",
        "MySQL"
      ]
    },
    {
      "id": 2,
      "role": "Frontend Engineer",
      "company": "Rhombuz",
      "location": "Remote — Seattle, USA",
      "period": "Dec 2021 – Jan 2023",
      "description": "Reduced dashboard load times by 45% through architecture optimization and code splitting. Redesigned UI components for cross-platform compatibility. Delivered 3+ key frontend projects and improved feature rollout speed by 30%.",
      "tech": [
        "React",
        "TypeScript",
        "Angular",
        "SCSS",
        "D3.js",
        "GraphQL"
      ]
    },
    {
      "id": 3,
      "role": "System Engineer Intern",
      "company": "Western Coalfields Ltd.",
      "location": "Chandrapur, India",
      "period": "Jun 2021 – Sep 2021",
      "description": "Built a full-stack PHP tool to monitor equipment breakdown and system status for the GM Office, digitizing manual paper-based workflows.",
      "tech": ["PHP", "MySQL"]
    }
  ],

  "counters": [
    { "value": 4, "suffix": "+", "label": "Years Experience" },
    { "value": 45, "suffix": "%", "label": "Load Time Reduced" },
    { "value": 8, "suffix": "+", "label": "Projects Delivered" },
    { "value": 70, "suffix": "%", "label": "Faster PDF Processing" }
  ],

  "aboutTraits": [
    {
      "emoji": "🎨",
      "label": "Creative",
      "description": "Clay, paint & digital art — design thinking runs deep."
    },
    {
      "emoji": "🧠",
      "label": "Strategic",
      "description": "Architecture first, syntax second. Systems that scale."
    },
    {
      "emoji": "🛠",
      "label": "Builder",
      "description": "Ship fast, iterate faster."
    }
  ],

  "filterCategories": [
    { "key": "all", "label": "All" },
    { "key": "fullstack", "label": "Full Stack" },
    { "key": "frontend", "label": "Frontend" },
    { "key": "backend", "label": "Backend" }
  ]
}
```


### backend\models\blog.py

```
from datetime import datetime,timezone
from extensions import db

class Blog(db.Model):
    __tablename__ = "blog_posts"
    __table_args__ = {"schema": "app_schema"}

    id            = db.Column(db.Integer, primary_key=True)
    title         = db.Column(db.String(200), nullable=False)
    slug          = db.Column(db.String(200), unique=True, nullable=False)
    excerpt       = db.Column(db.Text)
    content       = db.Column(db.Text)
    category      = db.Column(db.String(100))
    content_type  = db.Column(db.String(20), default="rich")
    read_time     = db.Column(db.String(20))
    is_published  = db.Column(db.Boolean, default=True)
    is_demo       = db.Column(db.Boolean, default=False, nullable=False)  # ← new
    created_at = db.Column(
        db.DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc)
    )
    updated_at = db.Column(
        db.DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc)
    )

    def __repr__(self):
        return f"<Blog {self.slug}>"
```


### backend\models\case_study.py

```
from datetime import datetime, timezone
from extensions import db

class CaseStudy(db.Model):
    __tablename__ = "case_studies"
    __table_args__ = {"schema": "app_schema"}

    id              = db.Column(db.Integer, primary_key=True)
    title           = db.Column(db.String(200), nullable=False)
    slug            = db.Column(db.String(200), unique=True, nullable=False)
    summary         = db.Column(db.Text)
    content         = db.Column(db.Text)
    tech_stack      = db.Column(db.Text)
    thumbnail       = db.Column(db.Text)
    github_url      = db.Column(db.Text)
    live_url        = db.Column(db.Text)
    category        = db.Column(db.String(50))
    company_project = db.Column(db.Boolean, default=False)
    is_featured     = db.Column(db.Boolean, default=False, nullable=False)
    is_published    = db.Column(db.Boolean, default=True)
    is_demo         = db.Column(db.Boolean, default=False, nullable=False)  # ← new
    created_at = db.Column(
        db.DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc)
    )


    def to_dict(self):
        return {
            "id":             self.id,
            "title":          self.title,
            "slug":           self.slug,
            "summary":        self.summary,
            "content":        self.content,
            "techStack":      self.tech_stack,
            "thumbnail":      self.thumbnail,
            "githubUrl":      self.github_url,
            "liveUrl":        self.live_url,
            "category":       self.category,
            "companyProject": self.company_project,
            "isFeatured":     self.is_featured,
            "isPublished":    self.is_published,
            "isDemo":         self.is_demo,
            "createdAt":      self.created_at.isoformat() if self.created_at else None,
        }
```


### backend\models\message.py

```
from datetime import datetime,timezone
from extensions import db

class Message(db.Model):
    __tablename__ = "messages"
    __table_args__ = {"schema": "app_schema"}

    id         = db.Column(db.Integer, primary_key=True)
    name       = db.Column(db.String(100))
    email      = db.Column(db.String(150))
    message    = db.Column(db.Text, nullable=False)
    is_demo    = db.Column(db.Boolean, default=False, nullable=False)  # ← new
    created_at = db.Column(
        db.DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc)  # ← timezone-aware
    )

    def __repr__(self):
        return f"<Message {self.email}>"
```


### backend\models\user.py

```
from datetime import datetime
from extensions import db

class User(db.Model):
    __tablename__ = "users"
    __table_args__ = {"schema": "app_schema"}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password_hash = db.Column(db.Text, nullable=False)
    role = db.Column(db.String(20), default="admin")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<User {self.email}>"
```


### backend\models\__init__.py

```
from .user import User
from .case_study import CaseStudy
from .blog import Blog
from .message import Message
```


### backend\routes\auth.py

```
from flask import Blueprint, request, jsonify
from extensions import db
from models import User
from flask_jwt_extended import create_refresh_token,create_access_token, jwt_required, get_jwt_identity
import bcrypt


auth_bp = Blueprint(
    "auth",
    __name__,
    url_prefix="/portfolio/auth"
)

#REGISTER
@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.json

    hashed = bcrypt.hashpw(data["password"].encode("utf-8"),
                           bcrypt.gensalt()
                           )
    user = User(
        name=data["name"],
        email=data["email"],
        password_hash=hashed.decode("utf-8")
    )

    return jsonify({"message": "User registered successfully"}),201

# LOGIN
# LOGIN
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json

    user = User.query.filter_by(email=data["email"]).first()
    hashed = bcrypt.hashpw(data["password"].encode("utf-8"), bcrypt.gensalt())

    print(hashed.decode())
    if not user:
        return {"error": "Invalid credentials"}, 401

    if not bcrypt.checkpw(
        data["password"].encode("utf-8"),
        user.password_hash.encode("utf-8")
    ):
        return {"error": "Invalid credentials"}, 401

    access_token = create_access_token(
        identity=str(user.id),   # ✅ FIX
        additional_claims={"role": user.role}
    )

    refresh_token = create_refresh_token(
        identity=str(user.id)    # ✅ FIX
    )

    return {
        "access_token": access_token,
        "refresh_token": refresh_token
    }, 200



@auth_bp.route("/refresh", methods=["POST"])
@jwt_required(refresh=True)
def refresh():
    user_id = get_jwt_identity()

    # fetch user to get role
    user = User.query.get(user_id)
   
    new_access_token = create_access_token(
        identity=str(user.id),
        additional_claims={"role": user.role}
    )

    return {
        "access_token": new_access_token
    }, 200
# GET CURRENT USER
@auth_bp.route("/me", methods=["GET"])
@jwt_required()
def me():
    user_id = get_jwt_identity()
    user = User.query.get(int(user_id))
    return jsonify({
        "id":    user.id,
        "name":  user.name,
        "email": user.email,
        "role":  user.role
    })
```


### backend\routes\blogs.py

```
from flask import Blueprint, request, jsonify
from extensions import db
from models import Blog
from flask_jwt_extended import jwt_required, get_jwt
from utils.decorators import admin_required, demo_or_admin_required
from utils.helpers import generate_slug
from utils.cloudinary_helpers import collect_all_images_for_record, delete_cloudinary_images

blog_bp = Blueprint("blogs", __name__, url_prefix="/portfolio/blogs")


def calculate_read_time(text):
    if not text:
        return "1 min read"
    words = len(text.split())
    minutes = max(1, round(words / 200))
    return f"{minutes} min read"


def serialize_blog(blog):
    return {
        "id":           blog.id,
        "title":        blog.title,
        "slug":         blog.slug,
        "excerpt":      blog.excerpt,
        "content":      blog.content,
        "content_type": blog.content_type,
        "category":     blog.category,
        "read_time":    blog.read_time,
        "is_published": blog.is_published,
        "is_demo":      blog.is_demo,
        "created_at":   blog.created_at.isoformat() if blog.created_at else None,
        "updated_at":   blog.updated_at.isoformat() if blog.updated_at else None,
    }


# ── Public: real posts only ────────────────────────────────────
@blog_bp.route("", methods=["GET"])
def get_all():
    page  = request.args.get("page", 1, type=int)
    limit = request.args.get("limit", 10, type=int)
    pagination = (
        Blog.query
        .filter_by(is_published=True, is_demo=False)
        .order_by(Blog.created_at.desc())
        .paginate(page=page, per_page=limit, error_out=False)
    )
    return jsonify({
        "total":        pagination.total,
        "pages":        pagination.pages,
        "current_page": pagination.page,
        "data":         [serialize_blog(b) for b in pagination.items],
    })


# ── Public: real post by slug ──────────────────────────────────
@blog_bp.route("/<slug>", methods=["GET"])
def get_by_slug(slug):
    blog = Blog.query.filter_by(
        slug=slug, is_published=True, is_demo=False
    ).first_or_404()
    return jsonify(serialize_blog(blog))


# ── Demo preview: published demo posts ────────────────────────
@blog_bp.route("/demo-preview", methods=["GET"])
@jwt_required()
@demo_or_admin_required
def demo_preview_all():
    page  = request.args.get("page", 1, type=int)
    limit = request.args.get("limit", 10, type=int)
    pagination = (
        Blog.query
        .filter_by(is_published=True, is_demo=True)
        .order_by(Blog.created_at.desc())
        .paginate(page=page, per_page=limit, error_out=False)
    )
    return jsonify({
        "total":        pagination.total,
        "pages":        pagination.pages,
        "current_page": pagination.page,
        "data":         [serialize_blog(b) for b in pagination.items],
    })


# ── Demo preview: single post by slug ─────────────────────────
@blog_bp.route("/demo-preview/<slug>", methods=["GET"])
@jwt_required()
@demo_or_admin_required
def demo_preview_slug(slug):
    blog = Blog.query.filter_by(slug=slug, is_demo=True).first_or_404()
    return jsonify(serialize_blog(blog))


# ── Admin list ─────────────────────────────────────────────────
# admin → only real (is_demo=False)
# demo  → only demo (is_demo=True)
@blog_bp.route("/admin", methods=["GET"])
@jwt_required()
@demo_or_admin_required
def admin_get_all():
    claims = get_jwt()
    role   = claims.get("role")
    flag   = False if role == "admin" else True
    blogs  = Blog.query.filter_by(is_demo=flag).order_by(Blog.created_at.desc()).all()
    return jsonify({"total": len(blogs), "data": [serialize_blog(b) for b in blogs]})


# ── Create ─────────────────────────────────────────────────────
@blog_bp.route("", methods=["POST"])
@jwt_required()
@demo_or_admin_required
def create_blog():
    claims  = get_jwt()
    role    = claims.get("role")
    data    = request.json

    # ── server-side validation ─────────────────────────────────
    title = (data.get("title") or "").strip()
    if not title:
        return jsonify({"error": "Title is required"}), 400
    if len(title) > 200:
        return jsonify({"error": "Title too long (max 200 chars)"}), 400
    if not (data.get("excerpt") or "").strip():
        return jsonify({"error": "Excerpt is required"}), 400
    if not (data.get("category") or "").strip():
        return jsonify({"error": "Category is required"}), 400

    slug    = generate_slug(title)
    content = data.get("content", "")

    blog = Blog(
        title        = title,
        slug         = slug,
        excerpt      = data.get("excerpt").strip(),
        content      = content,
        category     = data.get("category").strip(),
        content_type = data.get("content_type", "rich"),
        read_time    = calculate_read_time(content),
        is_published = data.get("is_published", True),
        is_demo      = (role == "demo"),
    )
    db.session.add(blog)
    db.session.commit()
    return jsonify({"message": "Blog Created", "data": serialize_blog(blog)}), 201


@blog_bp.route("/<int:id>", methods=["PUT"])
@jwt_required()
@demo_or_admin_required
def update_blog(id):
    claims = get_jwt()
    role   = claims.get("role")
    blog   = Blog.query.get_or_404(id)

    if role == "demo" and not blog.is_demo:
        return jsonify({"error": "Cannot edit real content"}), 403

    data  = request.json
    title = (data.get("title") or "").strip()

    # ── server-side validation ─────────────────────────────────
    if "title" in data:
        if not title:
            return jsonify({"error": "Title is required"}), 400
        if len(title) > 200:
            return jsonify({"error": "Title too long (max 200 chars)"}), 400
        blog.title = title
        blog.slug  = generate_slug(title)

    blog.excerpt      = data.get("excerpt",      blog.excerpt)
    blog.content      = data.get("content",      blog.content)
    blog.category     = data.get("category",     blog.category)
    blog.content_type = data.get("content_type", blog.content_type)
    blog.read_time    = calculate_read_time(blog.content)
    blog.is_published = data.get("is_published", blog.is_published)

    db.session.commit()
    return jsonify({"message": "Blog Updated", "data": serialize_blog(blog)})


# ── Delete ─────────────────────────────────────────────────────
@blog_bp.route("/<int:id>", methods=["DELETE"])
@jwt_required()
@demo_or_admin_required
def delete_blog(id):
    claims = get_jwt()
    role   = claims.get("role")
    blog   = Blog.query.get_or_404(id)

    if role == "demo" and not blog.is_demo:
        return jsonify({"error": "Cannot delete real content"}), 403

    # ── Collect and delete all associated Cloudinary images ────
    # Blogs don't have a thumbnail field but content may have editor-uploaded images
    urls_to_delete = collect_all_images_for_record(
        thumbnail=None,       # blogs have no thumbnail
        content=blog.content,
    )
    delete_cloudinary_images(urls_to_delete)

    db.session.delete(blog)
    db.session.commit()
    return jsonify({"message": "Blog Deleted"})
```


### backend\routes\case_studies.py

```
from flask import Blueprint, request, jsonify
from extensions import db
from models import CaseStudy
from flask_jwt_extended import jwt_required, get_jwt
from utils.decorators import admin_required, demo_or_admin_required
from utils.helpers import generate_slug
from utils.cloudinary_helpers import (
    collect_all_images_for_record,
    delete_cloudinary_images,
    extract_content_image_urls,
)
import time

case_bp = Blueprint("case_studies", __name__, url_prefix="/portfolio/case-studies")


def serialize_case(case):
    return {
        "id":              case.id,
        "title":           case.title,
        "slug":            case.slug,
        "summary":         case.summary,
        "content":         case.content,
        "tech_stack":      case.tech_stack,
        "thumbnail":       case.thumbnail,
        "github_url":      case.github_url,
        "live_url":        case.live_url,
        "category":        case.category,
        "company_project": case.company_project,
        "is_published":    case.is_published,
        "is_demo":         case.is_demo,
        "created_at":      case.created_at.isoformat() if case.created_at else None,
    }


# ── Public: real cases only ────────────────────────────────────
@case_bp.route("", methods=["GET"])
def get_all():
    cases = CaseStudy.query.filter_by(is_published=True, is_demo=False)\
        .order_by(CaseStudy.created_at.desc()).all()
    return jsonify({"data": [serialize_case(c) for c in cases]})


@case_bp.route("/<slug>", methods=["GET"])
def get_by_slug(slug):
    case = CaseStudy.query.filter_by(
        slug=slug, is_published=True, is_demo=False
    ).first_or_404()
    return jsonify(serialize_case(case))


@case_bp.route("/featured", methods=["GET"])
def get_featured():
    cases = CaseStudy.query.filter_by(is_featured=True, is_demo=False)\
        .order_by(CaseStudy.created_at.desc()).limit(4).all()
    return jsonify({"data": [c.to_dict() for c in cases]})


# ── Demo preview ───────────────────────────────────────────────
@case_bp.route("/demo-preview", methods=["GET"])
@jwt_required()
@demo_or_admin_required
def demo_preview_all():
    cases = CaseStudy.query.filter_by(is_published=True, is_demo=True)\
        .order_by(CaseStudy.created_at.desc()).all()
    return jsonify({"data": [serialize_case(c) for c in cases]})


@case_bp.route("/demo-preview/<slug>", methods=["GET"])
@jwt_required()
@demo_or_admin_required
def demo_preview_slug(slug):
    case = CaseStudy.query.filter_by(slug=slug, is_demo=True).first_or_404()
    return jsonify(serialize_case(case))


# ── Admin list ─────────────────────────────────────────────────
# admin → only real (is_demo=False)
# demo  → only demo (is_demo=True)
@case_bp.route("/admin", methods=["GET"])
@jwt_required()
@demo_or_admin_required
def admin_get_all():
    claims = get_jwt()
    role   = claims.get("role")
    flag   = False if role == "admin" else True
    cases  = CaseStudy.query.filter_by(is_demo=flag).order_by(CaseStudy.created_at.desc()).all()
    return jsonify({"total": len(cases), "data": [serialize_case(c) for c in cases]})


# ── Create ─────────────────────────────────────────────────────
@case_bp.route("", methods=["POST"])
@jwt_required()
@demo_or_admin_required
def create_case():
    try:
        claims = get_jwt()
        role   = claims.get("role")
        data   = request.form

        # ── server-side validation ─────────────────────────────
        title = (data.get("title") or "").strip()
        if not title:
            return jsonify({"error": "Title is required"}), 400
        if len(title) > 200:
            return jsonify({"error": "Title too long (max 200 chars)"}), 400
        if not (data.get("summary") or "").strip():
            return jsonify({"error": "Summary is required"}), 400
        if not (data.get("category") or "").strip():
            return jsonify({"error": "Category is required"}), 400
        if not (data.get("tech_stack") or "").strip():
            return jsonify({"error": "Tech stack is required"}), 400

        slug = generate_slug(title)
        if CaseStudy.query.filter_by(slug=slug).first():
            slug = f"{slug}-{int(time.time())}"

        case = CaseStudy(
            title           = title,
            slug            = slug,
            summary         = data.get("summary").strip(),
            content         = data.get("content"),
            tech_stack      = data.get("tech_stack").strip(),
            thumbnail       = data.get("thumbnail") or None,
            github_url      = data.get("github_url") or None,
            live_url        = data.get("live_url")   or None,
            category        = data.get("category").strip(),
            company_project = data.get("company_project") == "true",
            is_published    = data.get("is_published", "true") == "true",
            is_demo         = (role == "demo"),
        )
        db.session.add(case)
        db.session.commit()
        return jsonify({"message": "Case Study Created", "data": serialize_case(case)})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

# ── Update ─────────────────────────────────────────────────────
@case_bp.route("/<int:id>", methods=["PUT"])
@jwt_required()
@demo_or_admin_required
def update_case(id):
    claims = get_jwt()
    role   = claims.get("role")
    case   = CaseStudy.query.get_or_404(id)

    if role == "demo" and not case.is_demo:
        return jsonify({"error": "Cannot edit real content"}), 403

    data = request.form

    # ── Cloudinary cleanup for replaced thumbnail ──────────────
    new_thumbnail = data.get("thumbnail")
    if new_thumbnail and new_thumbnail != case.thumbnail and case.thumbnail:
        delete_cloudinary_images([case.thumbnail])

    # ── Cloudinary cleanup for removed content images ──────────
    new_content = data.get("content")
    if new_content and new_content != case.content:
        old_urls = set(extract_content_image_urls(case.content or ""))
        new_urls = set(extract_content_image_urls(new_content))
        removed  = old_urls - new_urls
        if removed:
            delete_cloudinary_images(list(removed))

    case.title           = data.get("title",      case.title)
    case.summary         = data.get("summary",    case.summary)
    case.content         = new_content if new_content is not None else case.content
    case.tech_stack      = data.get("tech_stack", case.tech_stack)
    case.github_url      = data.get("github_url") or None
    case.live_url        = data.get("live_url")   or None
    case.category        = data.get("category")   or None
    case.company_project = data.get("company_project") == "true"
    case.is_published    = data.get("is_published", "true") == "true"
    if new_thumbnail:
        case.thumbnail = new_thumbnail

    db.session.commit()
    return jsonify({"message": "Case Study Updated", "data": serialize_case(case)})


# ── Delete ─────────────────────────────────────────────────────
@case_bp.route("/<int:id>", methods=["DELETE"])
@jwt_required()
@demo_or_admin_required
def delete_case(id):
    claims = get_jwt()
    role   = claims.get("role")
    case   = CaseStudy.query.get_or_404(id)

    if role == "demo" and not case.is_demo:
        return jsonify({"error": "Cannot delete real content"}), 403

    # ── Delete thumbnail + all content images from Cloudinary ──
    urls_to_delete = collect_all_images_for_record(
        thumbnail=case.thumbnail,
        content=case.content,
    )
    delete_cloudinary_images(urls_to_delete)

    db.session.delete(case)
    db.session.commit()
    return jsonify({"message": "Case Study Deleted"})
```


### backend\routes\contact.py

```
from flask import Blueprint, request, jsonify
from extensions import db
from models import Message
from flask_jwt_extended import jwt_required, get_jwt
from utils.decorators import demo_or_admin_required
from services.email_service import send_contact_notification

contact_bp = Blueprint("contact", __name__, url_prefix="/portfolio/contact")


@contact_bp.route("", methods=["POST"])
def contact():
    data = request.json
    if not all(k in data for k in ["name", "email", "message"]):
        return jsonify({"error": "Missing required fields"}), 400

    message = Message(
        name    = data["name"],
        email   = data["email"],
        message = data["message"],
        is_demo = False,
    )
    db.session.add(message)
    db.session.commit()

    try:
        send_contact_notification(
            data["name"], data["email"],
            data.get("subject", "Portfolio Contact"),
            data["message"],
        )
    except Exception as e:
        print(f"Email notification failed: {e}")

    return jsonify({"message": "Message sent successfully"}), 201


@contact_bp.route("", methods=["GET"])
@jwt_required()
@demo_or_admin_required
def get_all():
    claims   = get_jwt()
    role     = claims.get("role")
    page     = request.args.get("page", 1, type=int)
    per_page = request.args.get("limit", 5, type=int)

    # admin → real messages only (is_demo=False)
    # demo  → demo messages only (is_demo=True)
    flag  = False if role == "admin" else True
    query = Message.query.filter_by(is_demo=flag)

    pagination = query.order_by(Message.created_at.desc()).paginate(
        page=page, per_page=per_page, error_out=False
    )
    return jsonify({
        "total":        pagination.total,
        "pages":        pagination.pages,
        "current_page": pagination.page,
        "data": [{
            "id":         c.id,
            "name":       c.name,
            "email":      c.email,
            "message":    c.message,
            "created_at": c.created_at.isoformat() if c.created_at else None,
        } for c in pagination.items],
    })
```


### backend\routes\information.py

```
from flask import Blueprint, jsonify
import json
import os

portfolio_bp = Blueprint(
    "portfolio",
    __name__,
    url_prefix="/portfolio/portfolio-data"
)
@portfolio_bp.route("/data", methods=["GET"])
def get_portfolio_data():
    file_path = os.path.join("data", "portfolio_data.json")

    with open(file_path, "r") as f:
        data = json.load(f)

    return jsonify(data)

@portfolio_bp.route("/personalInfo", methods=["GET"])
def get_personalInfo():
    file_path = os.path.join("data", "portfolio_data.json")

    with open(file_path) as f:
        data = json.load(f)

    return jsonify(data["personalInfo"])

@portfolio_bp.route("/experience", methods=["GET"])
def get_experience():
    file_path = os.path.join("data", "portfolio_data.json")

    with open(file_path) as f:
        data = json.load(f)

    return jsonify(data["experience"])
@portfolio_bp.route("/counters", methods=["GET"])
def get_counters():
    file_path = os.path.join("data", "portfolio_data.json")

    with open(file_path) as f:
        data = json.load(f)

    return jsonify(data["counters"])
# @portfolio_bp.route("/aboutTraits", methods=["GET"])
# def get_aboutTraits():
#     file_path = os.path.join("data", "portfolio_data.json")

#     with open(file_path) as f:
#         data = json.load(f)

#     return jsonify(data["aboutTraits"])
@portfolio_bp.route("/skills", methods=["GET"])
def get_skills():
    file_path = os.path.join("data", "portfolio_data.json")

    with open(file_path) as f:
        data = json.load(f)

    return jsonify(data["skills"])
```


### backend\routes\upload.py

```
import cloudinary
import cloudinary.uploader
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt
from utils.decorators import demo_or_admin_required

upload_bp = Blueprint("upload", __name__, url_prefix="/portfolio")

ALLOWED_IMAGES = {"png", "jpg", "jpeg", "gif", "webp", "svg"}
ALLOWED_VIDEOS = {"mp4", "mov", "avi", "webm"}


def allowed_file(filename, allowed):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in allowed


@upload_bp.route("/upload", methods=["POST"])
@jwt_required()
@demo_or_admin_required
def upload_media():
    claims = get_jwt()
    role   = claims.get("role")
    # demo uploads go to a separate Cloudinary folder — keeps your real media clean
    folder = "portfolio/demo-content" if role == "demo" else "portfolio/content"

    uploaded_urls = []

    if "images" in request.files:
        for file in request.files.getlist("images"):
            if allowed_file(file.filename, ALLOWED_IMAGES):
                result = cloudinary.uploader.upload(
                    file, folder=folder, resource_type="image"
                )
                uploaded_urls.append({"url": result["secure_url"], "type": "image"})

    if "videos" in request.files:
        for file in request.files.getlist("videos"):
            if allowed_file(file.filename, ALLOWED_VIDEOS):
                result = cloudinary.uploader.upload(
                    file, folder=folder, resource_type="video"
                )
                uploaded_urls.append({"url": result["secure_url"], "type": "video"})

    if not uploaded_urls:
        return jsonify({"error": "No valid files provided"}), 400

    return jsonify({"success": True, "files": uploaded_urls}), 200
```


### backend\routes\__init__.py

```
from .auth import auth_bp
from .case_studies import case_bp
from .blogs import blog_bp
from .contact import contact_bp
from .upload import upload_bp 
from .information import portfolio_bp 
def register_routes(app):
    app.register_blueprint(auth_bp)
    app.register_blueprint(case_bp)
    app.register_blueprint(blog_bp)
    app.register_blueprint(contact_bp)
    app.register_blueprint(upload_bp)
    app.register_blueprint(portfolio_bp)    
```


### backend\services\demo_seed.py

```
"""
python -m services.demo_seed
Creates the demo user + seeds demo data (blogs, case studies, messages).
Safe to re-run — skips anything that already exists.
"""
from app import create_app
from extensions import db
from models import User, Blog, CaseStudy, Message
from utils.helpers import generate_slug
import bcrypt

app = create_app()

with app.app_context():

    # ── Demo user ──────────────────────────────────────────────
    if not User.query.filter_by(email="demo@portfoliolab.dev").first():
        hashed = bcrypt.hashpw("demo1234".encode(), bcrypt.gensalt())
        db.session.add(User(
            name          = "Demo Explorer",
            email         = "demo@portfoliolab.dev",
            password_hash = hashed.decode(),
            role          = "demo",
        ))
        print("✓ Demo user created")
    else:
        print("· Demo user already exists")

    # ── Demo case studies ──────────────────────────────────────
    demo_cases = [
        {
            "title":           "ShopStream — Real-Time E-Commerce Dashboard",
            "summary":         "Built a live order/revenue dashboard using WebSockets and React for an e-commerce startup that needed instant pipeline visibility.",
            "content":         "<h2>Overview</h2><p>ShopStream needed real-time visibility into their order pipeline. We built a React frontend connected to a Flask backend via Socket.IO, backed by PostgreSQL.</p><h2>Challenge</h2><p>Handling 500+ concurrent WebSocket connections on a constrained server. Solved with Redis pub/sub to fan out events across worker processes.</p><h2>Outcome</h2><p>Reduced time-to-awareness for order anomalies from 8 minutes to under 30 seconds.</p>",
            "tech_stack":      "React, Flask, Socket.IO, PostgreSQL, Redis, Chart.js",
            "category":        "fullstack",
            "github_url":      "https://github.com/demo/shopstream",
            "live_url":        "https://shopstream-demo.vercel.app",
            "company_project": False,
            "is_featured":     True,
        },
        {
            "title":           "MediNote — AI-Assisted Clinical Notes",
            "summary":         "A web app for clinicians to dictate patient notes and have them structured automatically via LLM, exported as FHIR-compliant JSON.",
            "content":         "<h2>Problem</h2><p>Clinicians spend up to 2 hours daily writing notes. MediNote converts voice recordings into structured SOAP notes via OpenAI Whisper + GPT-4.</p><h2>Architecture</h2><p>React frontend with a custom audio recorder. FastAPI transcription pipeline feeds a GPT-4 prompt chain that outputs FHIR-formatted JSON.</p><h2>Results</h2><p>Alpha users reported a 60% reduction in note-writing time over a 4-week trial.</p>",
            "tech_stack":      "React, FastAPI, OpenAI Whisper, GPT-4, PostgreSQL",
            "category":        "fullstack",
            "github_url":      None,
            "live_url":        None,
            "company_project": True,
            "is_featured":     True,
        },
        {
            "title":           "Trekly — Offline-First Travel Planner",
            "summary":         "A PWA that caches maps and itineraries locally using IndexedDB and syncs changes when connectivity is restored via Background Sync API.",
            "content":         "<h2>Motivation</h2><p>Travelers constantly lose connectivity. Trekly caches all trip data including tile maps locally and uses the Background Sync API to push updates when back online.</p><h2>Tech Decisions</h2><p>Workbox for service worker orchestration. Dexie.js for IndexedDB. Mapbox GL JS for map rendering.</p>",
            "tech_stack":      "React, PWA, Workbox, Mapbox GL JS, Dexie.js, Node.js",
            "category":        "frontend",
            "github_url":      "https://github.com/demo/trekly",
            "live_url":        "https://trekly.app",
            "company_project": False,
            "is_featured":     False,
        },
    ]

    for c in demo_cases:
        slug = generate_slug(c["title"])
        if not CaseStudy.query.filter_by(slug=slug).first():
            db.session.add(CaseStudy(is_demo=True, slug=slug, **c))
    print("✓ Demo case studies seeded")

    # ── Demo blogs ─────────────────────────────────────────────
    demo_blogs = [
        {
            "title":       "Why I Stopped Using useEffect for Data Fetching",
            "slug":        "demo-stop-useeffect-data-fetching",
            "excerpt":     "useEffect works, but it's not the right abstraction for server state. Here's what TanStack Query changed for me.",
            "content":     "<h2>The Problem</h2><p>Fetching inside useEffect means wrestling with race conditions, stale closures, and manual loading states. It's not that useEffect is wrong — it's the wrong tool for remote data.</p><h2>Enter TanStack Query</h2><p>It separates server state from UI state. Caching, background refetching, deduplication, and error boundaries come for free. Your components just consume data.</p><h2>Example</h2><p>Instead of 30 lines of useEffect with cleanup, you write: <code>const { data } = useQuery(['user', id], () => fetchUser(id))</code>. One line. Cached. Refetched on window focus automatically.</p>",
            "category":    "tutorial",
            "is_published": True,
        },
        {
            "title":       "Design System From Scratch vs Adopting One",
            "slug":        "demo-design-system-scratch-vs-adopt",
            "excerpt":     "After building with Tailwind, Chakra, and a fully custom styled-components system, here are the real trade-offs.",
            "content":     "<h2>Context</h2><p>Three projects, three different styling approaches. Here's an honest comparison.</p><h2>Tailwind</h2><p>Fast to prototype, near-zero overhead. Downside: JSX fills with class strings that are hard to scan.</p><h2>Chakra UI</h2><p>Great accessibility defaults and a clean component API. Adds significant bundle weight and theme tokens feel constraining for highly custom UIs.</p><h2>Custom styled-components</h2><p>Maximum control. You design exactly what you need. The cost: you build everything yourself — spacing, typography, color scales.</p>",
            "category":    "opinion",
            "is_published": True,
        },
        {
            "title":       "PostgreSQL Full-Text Search: A Practical Guide",
            "slug":        "demo-postgres-full-text-search",
            "excerpt":     "Elasticsearch is overkill for most apps. Here's how to get 80% of the capability using only what's already in your Postgres database.",
            "content":     "<h2>What Postgres Gives You</h2><p>Built-in full-text search since v8. You get tsvector columns, GIN indexes, ranked results, and phrase matching — no new service needed.</p><h2>Setup</h2><p><code>ALTER TABLE posts ADD COLUMN search_vector tsvector GENERATED ALWAYS AS (to_tsvector('english', title || ' ' || coalesce(body,''))) STORED;</code><br/>Then: <code>CREATE INDEX idx_posts_search ON posts USING GIN(search_vector);</code></p><h2>Querying</h2><p>Use <code>to_tsquery</code> with the <code>@@</code> operator for matching, and <code>ts_rank</code> to sort by relevance.</p>",
            "category":    "deep-dive",
            "is_published": True,
        },
        {
            "title":       "From Imposter Syndrome to Confident Dev",
            "slug":        "demo-imposter-syndrome-to-confident-dev",
            "excerpt":     "Not a motivational post — a concrete list of what actually moved the needle when I felt like I didn't belong.",
            "content":     "<h2>The Real Problem</h2><p>Imposter syndrome isn't solved by telling yourself you're good enough. It's solved by accumulating evidence that you are.</p><h2>What Actually Helped</h2><p>1. Shipping things publicly — even small, imperfect things.<br/>2. Reviewing others' code and noticing when I had useful feedback.<br/>3. Helping juniors, which forced me to articulate things I only half-understood.<br/>4. Keeping a wins file — a running doc of problems solved, bugs fixed, PRs merged.</p>",
            "category":    "career",
            "is_published": True,
        },
    ]

    for b in demo_blogs:
        if not Blog.query.filter_by(slug=b["slug"]).first():
            db.session.add(Blog(
                is_demo      = True,
                read_time    = f"{max(1, len(b['content'].split()) // 200)} min read",
                content_type = "rich",
                **b,
            ))
    print("✓ Demo blogs seeded")

    # ── Demo messages ──────────────────────────────────────────
    demo_messages = [
        {
            "name":    "Priya Mehta",
            "email":   "priya.mehta@startupco.in",
            "message": "Hi! I came across your portfolio and I'm impressed with the ShopStream case study. We're building something similar for our logistics startup — would you be open to a quick call about freelancing?",
        },
        {
            "name":    "Alex Rivera",
            "email":   "alex.r@devagency.io",
            "message": "Your MediNote write-up is incredibly detailed — the FHIR integration especially. I'm a recruiter at a health-tech company with a senior full-stack opening. Do you have time to chat this week?",
        },
        {
            "name":    "Neha Sharma",
            "email":   "neha@techblog.dev",
            "message": "The Postgres full-text search article was exactly what I needed. Quick question: does ts_rank behave differently with non-English content? Would love your thoughts.",
        },
        {
            "name":    "James O'Brien",
            "email":   "james.obrien@vc.fund",
            "message": "We invest in developer tools. Your portfolio builder project caught our eye — would you be open to a 20-minute intro call?",
        },
        {
            "name":    "Tanvi Kulkarni",
            "email":   "tanvi.k@college.edu",
            "message": "Hi, I'm a final-year CS student. Your imposter syndrome post really resonated. Would it be okay to ask a few questions about transitioning from college to a full-stack role?",
        },
    ]

    for m in demo_messages:
        db.session.add(Message(is_demo=True, **m))
    print("✓ Demo messages seeded")

    db.session.commit()
    print("\n✅ Done. Login: demo@portfoliolab.dev / demo1234")
```


### backend\services\email_service.py

```
import resend
import os
from datetime import datetime

resend.api_key = os.environ.get("RESEND_API_KEY")

RECEIVER_EMAIL = os.environ.get("CONTACT_RECEIVER_EMAIL")
SENDER_EMAIL = os.environ.get("CONTACT_SENDER_EMAIL", "onboarding@resend.dev")


def send_contact_notification(name, email, subject, message):
    """Send notification to you when someone contacts you."""
    html = build_notification_email(name, email, subject, message)

    params = {
        "from": f"Portfolio Contact <{SENDER_EMAIL}>",
        "to": [RECEIVER_EMAIL],
        "subject": f"📬 New Contact: {subject}",
        "html": html,
    }

    response = resend.Emails.send(params)
    return response


def build_notification_email(name, email, subject, message):
    timestamp = datetime.now().strftime("%B %d, %Y at %I:%M %p")
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;padding:0;background-color:#0f0f0f;font-family:'Segoe UI',Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f0f0f;padding:40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:40px;border-radius:16px 16px 0 0;text-align:center;">
                  <p style="margin:0 0 8px 0;color:rgba(255,255,255,0.7);font-size:13px;letter-spacing:3px;text-transform:uppercase;">Portfolio Contact Form</p>
                  <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">Someone reached out! 👋</h1>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="background-color:#1a1a1a;padding:40px;border-radius:0 0 16px 16px;">

                  <!-- Sender Info -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:30px;">
                    <tr>
                      <td style="background-color:#252525;border-radius:12px;padding:24px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-bottom:16px;border-bottom:1px solid #333;">
                              <p style="margin:0 0 4px 0;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">From</p>
                              <p style="margin:0;color:#ffffff;font-size:18px;font-weight:600;">{name}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top:16px;padding-bottom:16px;border-bottom:1px solid #333;">
                              <p style="margin:0 0 4px 0;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Email</p>
                              <a href="mailto:{email}" style="color:#6366f1;font-size:15px;text-decoration:none;">{email}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top:16px;padding-bottom:16px;border-bottom:1px solid #333;">
                              <p style="margin:0 0 4px 0;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Subject</p>
                              <p style="margin:0;color:#ffffff;font-size:15px;">{subject}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top:16px;">
                              <p style="margin:0 0 4px 0;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Received</p>
                              <p style="margin:0;color:#ffffff;font-size:15px;">{timestamp}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Message -->
                  <p style="margin:0 0 12px 0;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Message</p>
                  <div style="background-color:#252525;border-left:4px solid #6366f1;border-radius:0 12px 12px 0;padding:24px;margin-bottom:30px;">
                    <p style="margin:0;color:#e0e0e0;font-size:15px;line-height:1.8;">{message}</p>
                  </div>

                  <!-- Reply Button -->
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center">
                        <a href="mailto:{email}?subject=Re: {subject}"
                           style="display:inline-block;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#ffffff;text-decoration:none;padding:14px 40px;border-radius:8px;font-size:15px;font-weight:600;letter-spacing:0.5px;">
                          Reply to {name}
                        </a>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:24px;text-align:center;">
                  <p style="margin:0;color:#555;font-size:12px;">Sent via your portfolio contact form</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    """
```


### backend\services\seed.py

```
# from app import create_app
# from extensions import db
# from models import User, CaseStudy, Blog
# import bcrypt

# app = create_app()

# with app.app_context():

#     # Create Admin
#     hashed = bcrypt.hashpw("admin123".encode("utf-8"), bcrypt.gensalt())

#     admin = User(
#         name="Darshan",
#         email="admin@test.com",
#         password_hash=hashed.decode("utf-8"),
#         role="admin"
#     )

#     db.session.add(admin)

#     # Dummy Case Studies
#     for i in range(1, 6):
#         case = CaseStudy(
#             title=f"Project {i}",
#             slug=f"project-{i}",
#             summary="Sample summary",
#             content="Full content here",
#             tech_stack="React, Flask",
#             is_published=True
#         )
#         db.session.add(case)

#     db.session.commit()

# print("Dummy data added.")

from app import create_app
from extensions import db
from models import CaseStudy, Blog, Message
from utils.helpers import generate_slug

app = create_app()

with app.app_context():

    # -------- CASE STUDIES --------
    case_titles = [
        "React Dashboard Analytics",
        "E-commerce MERN Platform",
        "AI Resume Screening System",
        "Real-Time Chat Application",
        "Portfolio SaaS Builder"
    ]

    for title in case_titles:
        case = CaseStudy(
            title=title,
            slug=generate_slug(title),
            summary="This is a sample summary for " + title,
            content="Detailed content about " + title,
            tech_stack="React, Flask, PostgreSQL",
            github_url="https://github.com/example",
            live_url="https://example.com",
            is_published=True
        )
        db.session.add(case)

    # -------- BLOG POSTS --------
    blog_titles = [
        "Understanding JWT Authentication",
        "Scaling Flask Applications",
        "React Performance Optimization",
        "Database Indexing Explained",
        "Building Secure REST APIs"
    ]

    for title in blog_titles:
        blog = Blog(
            title=title,
            slug=generate_slug(title),
            excerpt="Short excerpt for " + title,
            content="Full blog content about " + title,
            is_published=True
        )
        db.session.add(blog)

    # -------- CONTACT MESSAGES --------
    contacts = [
        {"name": "Amit", "email": "amit@test.com", "message": "Interested in collaboration."},
        {"name": "Sneha", "email": "sneha@test.com", "message": "Loved your portfolio!"},
        {"name": "Rohan", "email": "rohan@test.com", "message": "Can we schedule a call?"}
    ]

    for c in contacts:
        message = Message(
            name=c["name"],
            email=c["email"],
            message=c["message"]
        )
        db.session.add(message)

    db.session.commit()

print("Dummy data inserted successfully.")
```


### backend\utils\cloudinary_helpers.py

```
import re
import cloudinary.uploader
from bs4 import BeautifulSoup


def extract_public_id(url: str) -> str | None:
    """
    Extracts Cloudinary public_id from a secure URL.
    e.g. https://res.cloudinary.com/mycloud/image/upload/v1234/portfolio/content/abc123.jpg
    → portfolio/content/abc123
    """
    if not url or "cloudinary.com" not in url:
        return None
    try:
        # Strip query params
        url = url.split("?")[0]
        # Pattern: everything after /upload/v{digits}/ or /upload/
        match = re.search(r'/upload/(?:v\d+/)?(.+?)(?:\.\w+)?$', url)
        if match:
            return match.group(1)
    except Exception:
        pass
    return None


def extract_content_image_urls(html_content: str) -> list[str]:
    """
    Parses TipTap HTML and returns all Cloudinary img src URLs found in the content.
    """
    if not html_content:
        return []
    try:
        soup = BeautifulSoup(html_content, "html.parser")
        return [
            img["src"]
            for img in soup.find_all("img")
            if img.get("src") and "cloudinary.com" in img.get("src", "")
        ]
    except Exception:
        return []


def delete_cloudinary_image(url: str) -> bool:
    """Delete a single image from Cloudinary by URL. Returns True if deleted."""
    public_id = extract_public_id(url)
    if not public_id:
        return False
    try:
        result = cloudinary.uploader.destroy(public_id)
        return result.get("result") == "ok"
    except Exception as e:
        print(f"Cloudinary delete failed for {public_id}: {e}")
        return False


def delete_cloudinary_images(urls: list[str]) -> None:
    """Delete multiple images from Cloudinary. Silently skips failures."""
    for url in urls:
        if url:
            delete_cloudinary_image(url)


def collect_all_images_for_record(thumbnail: str | None, content: str | None) -> list[str]:
    """
    Collects all Cloudinary URLs associated with a record:
    - thumbnail URL
    - all <img> srcs inside TipTap HTML content
    """
    urls = []
    if thumbnail:
        urls.append(thumbnail)
    if content:
        urls.extend(extract_content_image_urls(content))
    # Deduplicate
    return list(dict.fromkeys(filter(None, urls)))
```


### backend\utils\decorators.py

```
from functools import wraps
from flask import jsonify
from flask_jwt_extended import get_jwt, verify_jwt_in_request


def admin_required(fn):
    """Only real admin."""
    @wraps(fn)
    def wrapper(*args, **kwargs):
        verify_jwt_in_request()
        claims = get_jwt()
        if claims.get("role") != "admin":
            return jsonify({"error": "Admin access required"}), 403
        return fn(*args, **kwargs)
    return wrapper


def demo_or_admin_required(fn):
    """Admin or demo role."""
    @wraps(fn)
    def wrapper(*args, **kwargs):
        verify_jwt_in_request()
        claims = get_jwt()
        if claims.get("role") not in ("admin", "demo"):
            return jsonify({"error": "Access required"}), 403
        return fn(*args, **kwargs)
    return wrapper
```


### backend\utils\helpers.py

```
import re


def generate_slug(title):
    slug = title.lower()
    slug = re.sub(r'[^a-z0-9]+', '-', slug)
    return slug.strip("-")
```


### frontend\my_portfolio\.env

```
VITE_API_URL=http://127.0.0.1:5000/portfolio
# VITE_API_URL=https://portfolio-backend-x9am.onrender.com/portfolio
```


### frontend\my_portfolio\.env.production

```
VITE_API_URL=https://portfolio-backend-x9am.onrender.com/portfolio
```


### frontend\my_portfolio\.gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
project_structure.md
```


### frontend\my_portfolio\eslint.config.js

```
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```


### frontend\my_portfolio\index.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Darshan Agrawal — Full Stack Engineer</title>
    <meta name="description" content="Portfolio of Darshan Agrawal — Full Stack Engineer specializing in React, Python, and cloud-native applications." />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```


### frontend\my_portfolio\media.js

```
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
};

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  laptop: `@media (max-width: ${breakpoints.laptop})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`,
}; 

export const media2 = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  laptop: `@media (max-width: ${breakpoints.laptop})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`,
}; 
```


### frontend\my_portfolio\package.json

```
{
  "name": "my_portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@react-spring/web": "^10.0.3",
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.5.0",
    "@tanstack/react-query": "^5.90.21",
    "@tiptap/extension-code-block-lowlight": "^3.20.1",
    "@tiptap/extension-image": "^3.20.1",
    "@tiptap/extension-link": "^3.20.1",
    "@tiptap/extension-placeholder": "^3.20.1",
    "@tiptap/extension-text-align": "^3.20.1",
    "@tiptap/extension-underline": "^3.20.1",
    "@tiptap/extension-youtube": "^3.20.1",
    "@tiptap/react": "^3.20.1",
    "@tiptap/starter-kit": "^3.20.1",
    "axios": "^1.13.6",
    "framer-motion": "^12.34.5",
    "lottie-react": "^2.4.1",
    "lowlight": "^3.3.0",
    "lucide-react": "^0.577.0",
    "quill": "^2.0.3",
    "react": "^19.2.0",
    "react-countup": "^6.5.3",
    "react-dom": "^19.2.0",
    "react-flip-toolkit": "^7.2.4",
    "react-icons": "^5.6.0",
    "react-intersection-observer": "^10.0.3",
    "react-parallax-tilt": "^1.7.320",
    "react-router-dom": "^7.13.1",
    "react-spring": "^10.0.3",
    "react-use": "^17.6.0",
    "styled-components": "^6.3.11",
    "swr": "^2.4.1",
    "three": "^0.183.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "@types/styled-components": "^5.1.36",
    "@vitejs/plugin-react": "^5.1.1",
    "babel-plugin-react-compiler": "^1.0.0",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "vite": "^8.0.0-beta.13"
  },
  "overrides": {
    "vite": "^8.0.0-beta.13"
  }
}
```


### frontend\my_portfolio\README.md

```
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
```


### frontend\my_portfolio\vercel.json

```
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```


### frontend\my_portfolio\vite.config.js

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
```


### frontend\my_portfolio\src\App.css

```
/* App.css
   FIXED: Removed max-width and padding from #root — these were causing
   extra right-side space on mobile because they conflicted with full-width
   fixed/absolute positioned elements (navbar, waves, floating shapes).
   Layout padding is now handled per-section in individual components. */

#root {
  /* max-width: 1280px; ← REMOVED */
  /* padding: 2rem;     ← REMOVED */
  /* text-align: center;← REMOVED */
  width: 100%;
  overflow-x: hidden;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

@keyframes float-drift {
  0%, 100% { transform: translateY(0) rotate(var(--start-rotation)); }
  25%      { transform: translateY(-20px) rotate(calc(var(--start-rotation) + 5deg)); }
  50%      { transform: translateY(-10px) rotate(calc(var(--start-rotation) + 10deg)); }
  75%      { transform: translateY(-25px) rotate(calc(var(--start-rotation) + 3deg)); }
}
@keyframes slow-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.floating-shape {
  position: absolute;
  animation: float-drift var(--duration, 25s) ease-in-out infinite,
             slow-spin var(--spin-duration, 60s) linear infinite;
  will-change: transform;
  filter: blur(0.5px);
}
```


### frontend\my_portfolio\src\App.jsx

```
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider, useAuth } from "./contexts/AuthContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/layout/ScrollProgress";
import NoiseOverlay from "./components/layout/NoiseOverlay";
import FloatingShapes from "./components/effects/FloatingShapes";
import WaterWaves from "./components/effects/WaterWaves";
import PageTransition from "./components/layout/PageTransition";
import ScrollToTop from "./components/layout/ScrollToTop";
import LoadingScreen from "./components/ui/LoadingScreen";

import { ThemeProvider as StyledProvider } from "styled-components";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { darkTheme, lightTheme } from "./styles/theme";

import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AdminLogin from "./components/admin/AdminLogin";
import Admin from "./pages/Admin";
import NotFound from "./components/ui/NotFound";
import BlogDetail from "./pages/BlogDetails";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import CustomCursor from "./components/ui/CustomCursor";
import ComicGrid from "./components/effects/ComicGrid";
import queryClient from "./services/queryClient";
import GlobalStyles from "./styles/globalStyles";
import DemoLanding from "./pages/DemoLanding";
import { ToastProvider } from './components/ui/Toast';
import DemoBanner from "./components/admin/DemoBanner";

const DemoGuard = ({ children, fallback = "/admin" }) => {
  const { isDemo, demoSession } = useAuth();
  if (isDemo && demoSession) return <Navigate to={fallback} replace />;
  return children;
};
// Real admin only
const ProtectedRoute = ({ children }) => {
  const { isAdmin, isDemo, demoSession, loading } = useAuth();
  if (loading) return <LoadingScreen />;
  // Admin always allowed. Demo only allowed if they came through /demo flow.
  return (isAdmin || (isDemo && demoSession))
    ? children
    : <Navigate to="/admin/login" replace />;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={location.pathname}>
          <Routes location={location} key={location.pathname}>
            <Route path="/"        element={<DemoGuard><Home /></DemoGuard>} />
            <Route path="/contact" element={<DemoGuard><Contact /></DemoGuard>} />
            <Route path="/case-studies"       element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetails />} />
            <Route path="/blog"               element={<Blog />} />
            <Route path="/blog/:slug"         element={<BlogDetail />} />

            {/* Your real admin — only you */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin"
              element={<ProtectedRoute><Admin /></ProtectedRoute>}
            />

            {/* Demo flow — visitors from your case study live link */}
            <Route path="/demo" element={<DemoLanding />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
    </>
  );
};

const ThemedApp = () => {
  const { isDark } = useTheme();
  return (
    <StyledProvider theme={isDark ? darkTheme : lightTheme}>
      <ToastProvider>                    
        <GlobalStyles />
        <CustomCursor />
        <NoiseOverlay />
        <ComicGrid />
        <FloatingShapes
          mobileMode="gyro"
          gyroSensitivity={30}
          desktopSpin={false}
          desktopParallax={true}
        />
        <WaterWaves />
        <ScrollProgress />
        <Navbar />
         <DemoBanner variant="public" />
        <AnimatedRoutes />
        <Footer />
      </ToastProvider>
    </StyledProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ThemedApp />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
```


### frontend\my_portfolio\src\index.css

```
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  /* FIXED: removed "place-items: center" and "display: flex" which caused 
     horizontal overflow / extra right-side space on mobile */
  min-width: 20rem;
  min-height: 100vh;
  /* Prevent horizontal scroll globally */
  overflow-x: hidden;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 0.5rem;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 0.25rem auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

/* globalStyles.js using createGlobalStyle */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Prevent horizontal overflow at root */
  overflow-x: hidden;
}
body {
  font-family: 'DM Sans', sans-serif;
  background-color: #0D0F14;
  color: #EAEDF3;
  overflow-x: hidden;
  line-height: 1.6;
}
::selection {
  background: rgba(255, 45, 107, 0.3);
  color: #fff;
}
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 0.375rem;
}
::-webkit-scrollbar-track {
  background: #0D0F14;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.1875rem;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
a {
  color: inherit;
  text-decoration: none;
}
img {
  max-width: 100%;
  display: block;
}
```


### frontend\my_portfolio\src\main.jsx

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```


### frontend\my_portfolio\src\components\admin\AdminContentCard.jsx

```
import styled, { keyframes } from 'styled-components';
import { Pencil, Trash2 } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import CategoryBadge from '../ui/CategoryBadge';

const AdminContentCard = ({ item, tab, onEdit, onDelete ,onMessageClick}) => {
  const previewText = (text = '') =>
    text.replace(/<[^>]+>/g, '').slice(0, 130) + (text.length > 130 ? '…' : '');

  const categories = (item.category || '')
    .split(',').map(c => c.trim()).filter(Boolean);

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable
      glareMaxOpacity={0.07}
      glareColor="#3B82F6"
      scale={1.02}
      transitionSpeed={500}
      style={{ borderRadius: '14px', transformStyle: 'preserve-3d', height: '100%' }}
    >
      <Card  $clickable={tab === 'messages'}
  onClick={tab === 'messages' ? () => onMessageClick(item) : undefined}>
        <CardShimmerBar />

        <CardHeader>
          <CardTitle>{item.title || item.name || '(no title)'}</CardTitle>
          {tab !== 'messages' && (
            <CardActions>
              <IconBtn type="button" onClick={() => onEdit(item)} title="Edit">
                <Pencil size={13} />
              </IconBtn>
              <IconBtn type="button" $danger onClick={() => onDelete(item.id)} title="Delete">
                <Trash2 size={13} />
              </IconBtn>
            </CardActions>
          )}
        </CardHeader>

        <CardBody>
          {(tab === 'blogs' || tab === 'cases') && (
            <>
              <ChipsRow>
                {categories.slice(0, 2).map((cat, i) => (
                  <CategoryBadge key={i} category={cat} size="sm" />
                ))}
                {categories.length > 2 && (
                  <CategoryBadge category={`+${categories.length - 2}`} size="sm" />
                )}
              </ChipsRow>
              <CardPreview>
                {tab === 'blogs'
                  ? previewText(item.excerpt || item.content)
                  : previewText(item.summary)
                }
              </CardPreview>
            </>
          )}

          {tab === 'messages' && (
            <>
              <EmailChip>{item.email}</EmailChip>
              <CardPreview>{previewText(item.message)}</CardPreview>
            </>
          )}
        </CardBody>

        {tab !== 'messages' && (
          <CardStatusRow>
            <StatusDot $on={item.is_published} />
            <span>{item.is_published ? 'Published' : 'Draft'}</span>
          </CardStatusRow>
        )}
      </Card>
    </Tilt>
  );
};

export default AdminContentCard;

/* ── Styles ── */

const shimmerMove = keyframes`
  0%   { background-position: -200% 0 }
  100% { background-position:  200% 0 }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;

  display: flex;
  flex-direction: column;
  height: 100%;

  /* ── fixed minimum height so short cards don't look tiny ── */
  min-height: 200px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: ${({ theme }) => theme.colors.shadowCardHover};
    transform: translateY(-2px);
  }
  cursor: ${({ $clickable }) => $clickable ? 'pointer' : 'default'};

  ${({ $clickable, theme }) => $clickable && `
    &:hover {
      border-color: ${theme.colors.accentBlueBorder};
      box-shadow: 0 8px 32px rgba(59, 130, 246, 0.12);
    }
  `}
`;

const CardBody = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
`;

const CardTitle = styled.h3`
  font-size: 0.93rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.3;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
 
  min-height: calc(1.3em * 1);
`;

const CardPreview = styled.p`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 0.82rem;
  line-height: 1.5;
  margin: 0.5rem 0 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;

  min-height: calc(1.5em * 2);
  & * { display: inline; }
`;

const CardShimmerBar = styled.div`
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: ${({ theme }) => theme.colors.gradientShimmer};
  background-size: 200% 100%;
  opacity: 0;
  transition: opacity 0.3s;
  animation: ${shimmerMove} 2.5s linear infinite;
  ${Card}:hover & { opacity: 1; }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;



const CardActions = styled.div`
  display: flex;
  gap: 5px;
  flex-shrink: 0;
`;

const IconBtn = styled.button`
  border: none;
  background: ${({ $danger, theme }) =>
    $danger ? theme.colors.accentDangerBg : theme.colors.bgGlassLight};
  color: ${({ $danger, theme }) =>
    $danger ? theme.colors.accentDanger : theme.colors.textSecondary};
  padding: 6px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  &:hover {
    background: ${({ $danger, theme }) =>
      $danger ? theme.colors.accentDangerBgHover : theme.colors.borderHover};
    color: ${({ $danger, theme }) =>
      $danger ? theme.colors.accentDangerLight : '#fff'};
    transform: scale(1.1);
  }
`;



const ChipsRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
  margin-bottom: 6px;
  overflow: hidden;
`;

const EmailChip = styled.span`
  display: inline-block;
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  margin-bottom: 6px;
  background: ${({ theme }) => theme.colors.accentBlueBg};
  border: 1px solid ${({ theme }) => theme.colors.accentBlueBorder};
  color: ${({ theme }) => theme.colors.accentBlue};

  /* ── prevent long emails from breaking layout ── */
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;



const blinkAnim = keyframes`0%,100%{opacity:1}50%{opacity:0.3}`;

const CardStatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 0.85rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const StatusDot = styled.span`
  width: 6px; height: 6px;
  border-radius: 50%;
  background: ${({ $on, theme }) => $on ? theme.colors.accentGreen : theme.colors.textTertiary};
  animation: ${({ $on }) => $on ? blinkAnim : 'none'} 2.5s ease-in-out infinite;
`;

const TiltWrap = styled(Tilt)`
  height: 100%;
  display: block;
  border-radius: 14px;
  transform-style: preserve-3d;
`;
```


### frontend\my_portfolio\src\components\admin\AdminFormFields.jsx

```
import { useState } from 'react';
import styled from 'styled-components';
import RichEditor from '../ui/RichEditor';

/* ── validation rules per field ─────────────────────────────── */
const VALIDATORS = {
  title: (v) => {
    if (!v?.trim()) return 'Title is required';
    if (v.length > 200) return `Too long — ${v.length}/200 chars`;
    return null;
  },
  excerpt: (v) => {
    if (!v?.trim()) return 'Excerpt is required';
    if (v.length > 500) return `Too long — ${v.length}/500 chars`;
    return null;
  },
  summary: (v) => {
    if (!v?.trim()) return 'Summary is required';
    if (v.length > 500) return `Too long — ${v.length}/500 chars`;
    return null;
  },
  category: (v) => {
    if (!v?.trim()) return 'Category is required';
    return null;
  },
  tech_stack: (v) => {
    if (!v?.trim()) return 'Tech stack is required';
    return null;
  },
  github_url: (v) => {
    if (!v) return null; // optional
    if (!v.startsWith('https://')) return 'Must start with https://';
    return null;
  },
  live_url: (v) => {
    if (!v) return null; // optional
    if (!v.startsWith('https://')) return 'Must start with https://';
    return null;
  },
};
export const validateForm = (formData, tab) => {
  const errors = {};

  if (tab === 'blogs') {
    if (!formData.title?.trim())
      errors.title = 'Title is required';
    else if (formData.title.trim().length > 200)
      errors.title = `Too long — ${formData.title.length}/200 chars`;

    if (!formData.excerpt?.trim())
      errors.excerpt = 'Excerpt is required';
    else if (formData.excerpt.trim().length > 500)
      errors.excerpt = `Too long — ${formData.excerpt.length}/500 chars`;

    if (!formData.category?.trim())
      errors.category = 'Category is required';
  }

  if (tab === 'cases') {
    if (!formData.title?.trim())
      errors.title = 'Title is required';
    else if (formData.title.trim().length > 200)
      errors.title = `Too long — ${formData.title.length}/200 chars`;

    if (!formData.summary?.trim())
      errors.summary = 'Summary is required';
    else if (formData.summary.trim().length > 500)
      errors.summary = `Too long — ${formData.summary.length}/500 chars`;

    if (!formData.category?.trim())
      errors.category = 'Category is required';

    if (!formData.tech_stack?.trim())
      errors.tech_stack = 'Tech stack is required';

    if (formData.github_url && !formData.github_url.startsWith('https://'))
      errors.github_url = 'Must start with https://';

    if (formData.live_url && !formData.live_url.startsWith('https://'))
      errors.live_url = 'Must start with https://';
  }

  return errors;
};
const AdminFormFields = ({ fieldKey: key, value, formData, setFormData, tab, uploadMedia }) => {
  const [touched, setTouched] = useState(false);

  const validate = (k, v) => VALIDATORS[k]?.(v) ?? null;
  const error    = touched ? validate(key, value) : null;
  const onBlur   = () => setTouched(true);

  /* ── Rich / plain content editor ──────────────────────────── */
  if (key === 'content' && (tab === 'blogs' || tab === 'cases')) {
    if (tab === 'cases' || formData.content_type === 'rich') {
      return (
        <EditorBlock>
          <FLabel>Content</FLabel>
          <RichEditor
            value={value || ''}
            onChange={(html) => setFormData(p => ({ ...p, content: html }))}
            uploadMediaToCloudinary={uploadMedia}
          />
        </EditorBlock>
      );
    }
    return (
      <FGroup $full>
        <FLabel>{formData.content_type === 'html' ? 'HTML Content' : 'Plain Text'}</FLabel>
        <FTextarea
          value={value || ''}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        />
      </FGroup>
    );
  }

  /* ── Thumbnail upload ──────────────────────────────────────── */
  if (key === 'thumbnail') {
    return (
      <FGroup>
        <FLabel>Thumbnail</FLabel>
        <FFileInput
          type="file"
          accept="image/*"
          onChange={async (e) => {
            const file = e.target.files[0]; if (!file) return;
            setFormData(p => ({ ...p, thumbnail: URL.createObjectURL(file) }));
            const url = await uploadMedia(file, 'image');
            if (url) setFormData(p => ({ ...p, thumbnail: url }));
          }}
        />
        {formData.thumbnail && (
          <ThumbPreview>
            <img
              src={formData.thumbnail}
              alt="thumb"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </ThumbPreview>
        )}
      </FGroup>
    );
  }

  /* ── Content type radio ────────────────────────────────────── */
  if (key === 'content_type') {
    if (tab !== 'blogs') return null;
    return (
      <RadioBlock>
        <FLabel>Editor Type</FLabel>
        <RadioRow>
          {[['text', 'Plain Text'], ['rich', 'Rich Editor'], ['html', 'HTML']].map(([opt, lbl]) => (
            <RadioChip
              key={opt}
              type="button"
              $active={value === opt}
              onClick={() => setFormData({ ...formData, content_type: opt })}
            >
              {lbl}
            </RadioChip>
          ))}
        </RadioRow>
      </RadioBlock>
    );
  }

  /* ── Boolean toggle ────────────────────────────────────────── */
  if (typeof value === 'boolean') {
    return (
      <ToggleRow>
        <FLabel style={{ marginBottom: 0 }}>{key.replaceAll('_', ' ')}</FLabel>
        <Toggle>
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => setFormData({ ...formData, [key]: e.target.checked })}
          />
          <ToggleTrack />
        </Toggle>
      </ToggleRow>
    );
  }

  /* ── Textarea fields ───────────────────────────────────────── */
  if (key === 'summary' || key === 'excerpt') {
    return (
      <FGroup $full>
        <FLabelRow>
          <FLabel>{key.replace('_', ' ')}</FLabel>
          {value?.length > 0 && (
            <CharCount $warn={value.length > 450}>
              {value.length}/500
            </CharCount>
          )}
        </FLabelRow>
        <FTextarea
          value={value || ''}
          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
          onBlur={onBlur}
          $error={!!error}
        />
        {error && <FieldError>{error}</FieldError>}
      </FGroup>
    );
  }

  /* ── Default input ─────────────────────────────────────────── */
  const isUrlField = key === 'github_url' || key === 'live_url';
  const isRequired = ['title', 'category', 'tech_stack'].includes(key);

  return (
    <FGroup>
      <FLabelRow>
        <FLabel>
          {key.replace(/_/g, ' ')}
          {isRequired && <Required>*</Required>}
        </FLabel>
        {key === 'title' && value?.length > 0 && (
          <CharCount $warn={value.length > 180}>
            {value.length}/200
          </CharCount>
        )}
      </FLabelRow>

      <InputWrap>
        {isUrlField && value && (
          <UrlPrefix>https://</UrlPrefix>
        )}
        <FInput
          value={value || ''}
          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
          onBlur={onBlur}
          $error={!!error}
          placeholder={
            key === 'tech_stack'  ? 'React, Flask, PostgreSQL' :
            key === 'category'    ? 'frontend / backend / fullstack' :
            key === 'github_url'  ? 'https://github.com/...' :
            key === 'live_url'    ? 'https://...' :
            ''
          }
        />
      </InputWrap>
      {error && <FieldError>{error}</FieldError>}
    </FGroup>
  );
};

export default AdminFormFields;


/* ── Styles ── */
export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const FGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  grid-column: ${({ $full }) => $full ? '1 / -1' : 'auto'};
`;

const FLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FLabel = styled.label`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const Required = styled.span`
  color: ${({ theme }) => theme.colors.accentPink};
  margin-left: 2px;
`;

const CharCount = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  color: ${({ $warn, theme }) =>
    $warn ? theme.colors.accentCoral : theme.colors.textTertiary};
  transition: color 0.2s;
`;

const FieldError = styled.span`
  font-size: 0.68rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accentDanger};
  display: flex;
  align-items: center;
  gap: 4px;
  &::before { content: '⚠'; font-size: 0.6rem; }
`;

const InputWrap = styled.div`position: relative;`;

const UrlPrefix = styled.span`
  position: absolute;
  left: 10px; top: 50%;
  transform: translateY(-50%);
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  pointer-events: none;
  display: none; /* only show as placeholder, not overlay */
`;

const FInput = styled.input`
  width: 100%;
  padding: 9px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ $error, theme }) =>
    $error ? theme.colors.accentDanger : theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ $error, theme }) =>
      $error ? theme.colors.accentDanger : theme.colors.accentPink};
    outline: none;
    box-shadow: 0 0 0 3px ${({ $error, theme }) =>
      $error ? theme.colors.accentDangerBg : theme.colors.accentPinkFocus};
  }
`;

const FTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 9px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ $error, theme }) =>
    $error ? theme.colors.accentDanger : theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ $error, theme }) =>
      $error ? theme.colors.accentDanger : theme.colors.accentPink};
    outline: none;
    box-shadow: 0 0 0 3px ${({ $error, theme }) =>
      $error ? theme.colors.accentDangerBg : theme.colors.accentPinkFocus};
  }
`;

const FFileInput = styled.input`
  padding: 9px 12px;
  border: 2px dashed ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  width: 100%;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  background: ${({ theme }) => theme.colors.bgPrimary};
  transition: border-color 0.2s;
  box-sizing: border-box;
  &:hover { border-color: ${({ theme }) => theme.colors.accentPink}; }
`;

const ThumbPreview = styled.div`
  margin-top: 8px;
  img {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  }
`;

const RadioBlock = styled.div`grid-column: 1 / -1;`;
const RadioRow   = styled.div`display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px;`;

const RadioChip = styled.button`
  padding: 7px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  font-size: 0.82rem;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.codeGhostBg : theme.colors.bgTertiary};
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.codeGhostBorder : theme.colors.borderDefault};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.codeText : theme.colors.textSecondary};
  transition: all 0.15s;
  &:hover { border-color: ${({ theme }) => theme.colors.accentBlue}; }
`;

const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 42px; height: 24px;
  cursor: pointer;
  input { opacity: 0; width: 0; height: 0; position: absolute; }
  input:checked + span { background: ${({ theme }) => theme.colors.gradientPinkBlue}; }
  input:checked + span::before { transform: translateY(-50%) translateX(18px); }
`;

const ToggleTrack = styled.span`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.surfaceLight};
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  transition: background 0.3s;
  &::before {
    content: '';
    position: absolute;
    width: 18px; height: 18px;
    left: 2px; top: 50%;
    transform: translateY(-50%);
    background: #fff;
    border-radius: 50%;
    transition: transform 0.3s;
    box-shadow: 0 1px 4px ${({ theme }) => theme.colors.overlayBg};
  }
`;

const EditorBlock = styled.div`grid-column: 1 / -1;`;
```


### frontend\my_portfolio\src\components\admin\AdminLogin.jsx

```
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FlaskConical} from 'lucide-react';
import { useAuth } from "../../contexts/AuthContext";
import MagneticButton from "../ui/MagneticButton";


const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

background: ${({ theme }) => theme.colors.gradientHero};
`;
const ScanLine = styled(motion.div)`
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;

  height: 2px;

  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.accentCoral},
    transparent
  );

  box-shadow: 
  0 0 8px ${({ theme }) => theme.colors.accentCoral},
  0 0 16px ${({ theme }) => theme.colors.gradientPinkBlue};
  pointer-events: none;
`;
const Card = styled(motion.div)`
  position: relative;
  overflow: hidden;   /* important */

  width: 100%;
  max-width: 420px;
  padding: 2.5rem;

  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};

  background: ${({ theme }) => theme.colors.bgSecondary};
  backdrop-filter: blur(20px);
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
`;

const IconBox = styled.div`
  width: 64px;
  height: 64px;

  margin: 0 auto 1rem;

  border-radius: ${({ theme }) => theme.borderRadius.md};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  border: 1px solid ${({ theme }) => theme.colors.accentBlue};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.6rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Subtitle = styled.p`
  font-size: 0.85rem;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const ErrorBox = styled(motion.div)`
  margin-bottom: 1rem;
  padding: 0.75rem;

  border-radius: ${({ theme }) => theme.borderRadius.sm};

  background: rgba(255, 60, 60, 0.1);
  border: 1px solid rgba(255, 60, 60, 0.2);

  color: #ff6b6b;
  font-size: 0.85rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Field = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.75rem;
  margin-bottom: 4px;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Input = styled.input`
  padding: 0.75rem 1rem;

  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};

  background: ${({ theme }) => theme.colors.bgPrimary};

  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textPrimary};

  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.borderSubtle};
  }
`;
const GlitchTitle = styled(motion.h1)`
  /* same as Title */
  position: relative;

  &::before, &::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    opacity: 0.08;
  }
  &::before { color: #FF2D6B; transform: translate(-2px, 0); }
  &::after  { color: #3B82F6; transform: translate(2px, 0); }

  &:hover::before { animation: glitch-clip 0.3s steps(5) infinite; }
  &:hover::after  { animation: glitch-clip 0.3s steps(5) infinite reverse; }

  @keyframes glitch-clip {
    0%  { clip-path: inset(0 0 95% 0); }
    20% { clip-path: inset(30% 0 50% 0); }
    40% { clip-path: inset(60% 0 20% 0); }
    60% { clip-path: inset(10% 0 80% 0); }
    80% { clip-path: inset(80% 0 5% 0); }
    100%{ clip-path: inset(0 0 95% 0); }
  }
`;

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [demoFilling, setDemoFilling] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const fillDemo = () => {
  setEmail("demo@portfoliolab.dev");
  setPassword("demo1234");
  setDemoFilling(true);
  setTimeout(() => setDemoFilling(false), 700);
};
  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setIsLoading(true);

  try {
    const role = await login(email, password);

    if (role === "demo") {
      // Demo user tried the real admin login — send them to the demo entry point
      navigate("/demo");
      return;
    }

    navigate("/admin");
  } catch {
    setError("Invalid credentials. Please try again.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <Page>
    <Card
  initial={{ scale: 0.85, opacity: 0, rotateX: 15 }}
  animate={{ scale: 1, opacity: 1, rotateX: 0 }}
  transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
  style={{ perspective: 1000 }}
>
   <ScanLine
    initial={{ top: '0%' }}
    animate={{ top: ['0%', '100%', '0%'] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
  />
 <Header initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <IconBox>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#EDE8DC" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </IconBox>

          <GlitchTitle data-text="Admin Access">Admin Access</GlitchTitle>
          <Subtitle>Sign in to manage your portfolio</Subtitle>
        </Header>

        {error && (
          <ErrorBox initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {error}
          </ErrorBox>
        )}

        <Form onSubmit={handleSubmit}>
          <Field>
            <Label>Email</Label>

            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@example.com"
            />
          </Field>

          <Field>
            <Label>Password</Label>

            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </Field>

          <MagneticButton type="submit">
            {isLoading ? "Signing in..." : "Sign In →"}
          </MagneticButton>
        </Form>
</Card>
    </Page>
  );
};

export default AdminLogin;
```


### frontend\my_portfolio\src\components\admin\adminStyles.js

```
import styled, { keyframes } from 'styled-components';

// ── Page layout ────────────────────────────────────────
export const Page = styled.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 4.5rem;
  }
`;

export const Sidebar = styled.aside`
  width: 15rem;
  flex-shrink: 0;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-right: 1px solid ${({ theme }) => theme.colors.borderDefault};
  padding: 4rem 1.25rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) { width: 200px; }
  @media (max-width: 768px) { display: none; }
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SideLink = styled.button`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: 100%;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.accentPinkSidebarBorder : 'transparent'};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accentPinkSidebarBg : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.textPrimary : theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.18s ease;
  text-align: left;
  &:hover {
    background: ${({ theme }) => theme.colors.bgGlassLight};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const SideDot = styled.span`
  width: 7px; height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  transition: opacity 0.2s;
`;

export const SideLabelText = styled.span`
  flex: 1;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const CountPill = styled.span`
  font-size: 0.68rem;
  padding: 2px 7px;
  border-radius: 999px;
  background: ${({ $active, theme }) => $active ? '' : theme.colors.bgGlassLight};
  color: ${({ $active }) => $active ? '#fff' : 'inherit'};
  font-weight: 700;
  min-width: 20px;
  text-align: center;
`;

export const MainContent = styled.main`
  flex: 1;
  min-width: 0;
  padding: 4rem 2.5rem 5rem;
  @media (max-width: 1024px) { padding: 2rem 1.5rem 4rem; }
  @media (max-width: 768px) {
    padding: calc(64px + 1.5rem) 1rem calc(64px + 1rem);
  }
`;

export const PageTitleBlock = styled.div`
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.6rem;
`;

export const TitleAccent = styled.span`
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const TitleSub = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  strong { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

export const ActionRow = styled.div`margin-bottom: 1.75rem;`;

export const CreateBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.62rem 1.4rem;
  border-radius: 999px;
  border: none;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.colors.shadowPinkHover};
  }
`;

export const GridWrap = styled.div`position: relative;`;
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.2rem;
  padding-bottom: 0.5rem;

  /* ← remove grid-auto-rows: 1fr — it fights with auto-fill */
  /* stretch makes each cell fill the tallest in its row */
  align-items: stretch;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
export const GridFog = styled.div`
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 90px;
  background: linear-gradient(to bottom, transparent 0%, ${({ theme }) => theme.colors.bgPrimary} 100%);
  pointer-events: none;
  z-index: 2;
`;

export const EmptyStateWrap = styled.div`grid-column: 1 / -1;`;

export const Pagination = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PageInfo = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  strong { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

export const PaginationSep = styled.span`
  opacity: 0.35;
  margin: 0 0.3rem;
`;

// ── Modal shared ───────────────────────────────────────
export const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  height: 100dvh;
  background: ${({ theme }) => theme.colors.overlayBg};
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  padding: 20px;
  @media (max-width: 480px) { padding: 0; align-items: flex-end; }
`;

export const ModalHeader = styled.div`
  flex-shrink: 0;
  padding: 18px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.bgTertiary};
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 0.97rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: capitalize;
`;

export const ModalCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px; height: 28px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    background: ${({ theme }) => theme.colors.accentPinkFocus};
    border-color: ${({ theme }) => theme.colors.accentPink};
    color: ${({ theme }) => theme.colors.accentPink};
  }
`;

// ── Mobile tab bar ─────────────────────────────────────
export const MobileTabBar = styled.nav`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 0; left: 0; right: 0;
    z-index: ${({ theme }) => theme.zIndex.modal};
    background: ${({ theme }) => theme.colors.bgTertiary};
    border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
    height: 64px;
    padding: 0 8px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }
`;

export const MobileTab = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 8px 4px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background ${({ theme }) => theme.transitions.fast};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20%; right: 20%;
    height: 2px;
    border-radius: 0 0 3px 3px;
    background: ${({ $color }) => $color || '#FF2D6B'};
    opacity: ${({ $active }) => $active ? 1 : 0};
    transition: opacity 0.18s;
  }
  &:active { background: ${({ theme }) => theme.colors.surfaceSubtle}; }
`;

export const MobileTabLabel = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.textPrimary : theme.colors.textTertiary};
  transition: color 0.18s;
`;

export const MobileTabCount = styled.span`
  position: absolute;
  top: 6px;
  right: calc(50% - 18px);
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: ${({ $color }) => $color || '#FF2D6B'};
  color: #fff;
  font-size: 0.6rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

export const MobileTabIcon = styled.span`
  font-size: 18px;
  line-height: 1;
  color: ${({ $active, $color, theme }) =>
    $active ? ($color || theme.colors.accentPink) : theme.colors.textTertiary};
  transition: color 0.18s;
`;
```


### frontend\my_portfolio\src\components\admin\ContentModal.jsx

```
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Save, X } from 'lucide-react';
import AdminFormFields, { FormGrid } from './AdminFormFields';
import { Overlay, ModalHeader, ModalTitle, ModalCloseBtn } from './adminStyles';

const ContentModal = ({
  isOpen,
  editItem,
  tab,
  formData,
  setFormData,
  saving,
  onSave,
  onClose,
  onPreview,
  uploadMedia,
}) => (
  <AnimatePresence>
    {isOpen && (
      <Overlay
        as={motion.div}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
      >
        <ModalCard
          as={motion.div}
          initial={{ scale: 0.94, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 30 }}
          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader>
            <ModalTitle>{editItem ? `✏️ Edit ${tab}` : `✨ New ${tab}`}</ModalTitle>
            <ModalCloseBtn type="button" onClick={onClose}><X size={15} /></ModalCloseBtn>
          </ModalHeader>

          <FormBody>
            <FormGrid>
              {Object.entries(formData).map(([key, value]) => (
                <AdminFormFields
                  key={key}
                  fieldKey={key}
                  value={value}
                  formData={formData}
                  setFormData={setFormData}
                  tab={tab}
                  uploadMedia={uploadMedia}
                />
              ))}
            </FormGrid>
          </FormBody>

          <ModalFooter>
            <ModalBtn type="button" $v="preview" onClick={onPreview}>
              <Eye size={14} /> Preview
            </ModalBtn>
            <ModalBtn type="button" $v="save" onClick={onSave} disabled={saving}>
              <Save size={14} /> {saving ? 'Saving…' : 'Save'}
            </ModalBtn>
            <ModalBtn type="button" $v="cancel" onClick={onClose}>
              <X size={14} /> Cancel
            </ModalBtn>
          </ModalFooter>
        </ModalCard>
      </Overlay>
    )}
  </AnimatePresence>
);

export default ContentModal;

/* ── Styles ── */

const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 92vw;
  max-width: 880px;
  max-height: 88vh;
  max-height: 88dvh;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadowModal},
              0 0 0 1px ${({ theme }) => theme.colors.accentPinkRingShadow};

  @media (max-width: 480px) {
    width: 100vw;
    height: 92dvh;
    max-height: 92dvh;
    border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
  }
`;

const FormBody = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 22px 24px;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.borderDefault};
    border-radius: 3px;
  }
  @media (max-width: 480px) { padding: 16px; }
`;

const ModalFooter = styled.div`
  flex-shrink: 0;
  padding: 14px 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgTertiary};
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    padding: 12px 16px;
    padding-bottom: calc(12px + env(safe-area-inset-bottom));
    & > * { flex: 1; min-width: 80px; }
  }
`;

const ModalBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.83rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;

  ${({ $v, theme }) => $v === 'save' && `
    background: ${theme.colors.gradientPinkBlue};
    color: #fff;
    &:hover { box-shadow: ${theme.colors.shadowBlueBtnHover}; transform: translateY(-1px); }
  `}
  ${({ $v, theme }) => $v === 'preview' && `
    background: ${theme.colors.accentBlueBg};
    color: ${theme.colors.accentBlue};
    border: 1px solid ${theme.colors.accentBlueBorder};
    &:hover { background: ${theme.colors.accentBlueBgHover}; }
  `}
  ${({ $v, theme }) => $v === 'cancel' && `
    background: ${theme.colors.surfaceSubtle};
    color: ${theme.colors.textSecondary};
    border: 1px solid ${theme.colors.borderSubtle};
    &:hover { background: ${theme.colors.bgGlassLight}; color: ${theme.colors.textPrimary}; }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }
`;
```


### frontend\my_portfolio\src\components\admin\DemoBanner.jsx

```
import { useLocation, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FlaskConical } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const blink = keyframes`
  0%, 100% { opacity: 1;   }
  50%       { opacity: 0.4; }
`;

const shimmer = keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
`;

const Banner = styled.div`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.navbar - 1};
  display: flex;
  align-items: center;
  gap: 0.4rem 0.65rem;
  padding: 0.5rem 1.5rem;
  background: ${({ theme }) => theme.colors.demoAccentBg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.demoAccentBorder2};
  flex-wrap: wrap;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.demoGradient};
    background-size: 200% 100%;
    animation: ${shimmer} 3s linear infinite;
  }
`;

const Dot = styled.span`
  width: 7px; height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.demoAccent};
  animation: ${blink} 2.4s ease-in-out infinite;
`;

const Label = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.demoAccent};
  white-space: nowrap;
`;

const Sub = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  flex: 1;
`;

const RealLink = styled(Link)`
  font-size: 0.72rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.demoAccent};
  text-decoration: underline;
  text-underline-offset: 2px;
  white-space: nowrap;
  opacity: 0.8;
  &:hover { opacity: 1; }
`;


const DemoBanner = ({ variant = 'public' }) => {
  const { isDemo, demoSession } = useAuth();
  const location = useLocation();

  if (!isDemo || !demoSession) return null;

  // Public variant hides itself on /admin — admin variant handles it there
  if (variant === 'public' && location.pathname.startsWith('/admin')) return null;

  return (
    <Banner>
      <FlaskConical size={13} style={{ opacity: 0.8, flexShrink: 0 }} />
      <Dot />
      <Label>Demo Mode</Label>
      {variant === 'admin' ? (
        <Sub>
          You're managing sandbox data only — changes here won't affect the real portfolio.
        </Sub>
      ) : (
        <Sub>
          You're browsing demo content. Visit{' '}
          <RealLink to="https://dashanagrawal-portfolio-kappa-ten-93.vercel.app/" target="_blank" rel="noopener noreferrer">
            the real portfolio
          </RealLink>
          {' '}to see the actual work.
        </Sub>
      )}
    </Banner>
  );
};

export default DemoBanner;
```


### frontend\my_portfolio\src\components\admin\MessageModal.jsx

```
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, Clock } from 'lucide-react';
import { Overlay, ModalHeader, ModalTitle, ModalCloseBtn } from './adminStyles';
import { formatDateTime } from '../../utils/helpers';
const MessageModal = ({ message, onClose }) => (
  <AnimatePresence>
    {message && (
      <Overlay
        as={motion.div}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        onClick={onClose}
      >
        <Card
          as={motion.div}
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader>
            <ModalTitle>Message</ModalTitle>
            <ModalCloseBtn type="button" onClick={onClose}><X size={15} /></ModalCloseBtn>
          </ModalHeader>

          <Body>
            {/* Sender info row */}
            <MetaGrid>
              <MetaItem>
                <MetaIcon><User size={13} /></MetaIcon>
                <MetaContent>
                  <MetaLabel>From</MetaLabel>
                  <MetaValue>{message.name || '—'}</MetaValue>
                </MetaContent>
              </MetaItem>

              <MetaItem>
                <MetaIcon><Mail size={13} /></MetaIcon>
                <MetaContent>
                  <MetaLabel>Email</MetaLabel>
                  <MetaValue>
                    <a href={`mailto:${message.email}`}>{message.email}</a>
                  </MetaValue>
                </MetaContent>
              </MetaItem>

              <MetaItem $full>
                <MetaIcon><Clock size={13} /></MetaIcon>
                <MetaContent>
                  <MetaLabel>Received</MetaLabel>
                  <MetaValue>
                   {formatDateTime(message.created_at)}
                  </MetaValue>
                </MetaContent>
              </MetaItem>
            </MetaGrid>

            <Divider />

            {/* Full message */}
            <MessageLabel>Message</MessageLabel>
            <MessageText>{message.message}</MessageText>
          </Body>

          <Footer>
            <ReplyBtn href={`mailto:${message.email}?subject=Re: Your message`}>
              Reply via Email ↗
            </ReplyBtn>
            <CloseBtn type="button" onClick={onClose}>Close</CloseBtn>
          </Footer>
        </Card>
      </Overlay>
    )}
  </AnimatePresence>
);

export default MessageModal;

/* ── Styles ── */

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: min(560px, 92vw);
  max-height: 88dvh;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadowModal},
              0 0 0 1px ${({ theme }) => theme.colors.accentPinkRingShadow};

  @media (max-width: 480px) {
    width: 100vw;
    max-height: 92dvh;
    border-radius: ${({ theme }) => theme.borderRadius.xl}
                   ${({ theme }) => theme.borderRadius.xl} 0 0;
  }
`;

const Body = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 24px;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.borderDefault};
    border-radius: 2px;
  }

  @media (max-width: 480px) { padding: 16px; }
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;

  @media (max-width: 420px) { grid-template-columns: 1fr; }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 14px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  grid-column: ${({ $full }) => $full ? '1 / -1' : 'auto'};
`;

const MetaIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.accentBlueBg};
  border: 1px solid ${({ theme }) => theme.colors.accentBlueBorder};
  color: ${({ theme }) => theme.colors.accentBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
`;

const MetaContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

const MetaLabel = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const MetaValue = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  word-break: break-all;

  a {
    color: ${({ theme }) => theme.colors.accentBlue};
    text-decoration: underline;
    text-underline-offset: 3px;
    &:hover { opacity: 0.8; }
  }
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.borderDefault};
  margin-bottom: 20px;
`;

const MessageLabel = styled.p`
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: 10px;
`;

const MessageText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
  white-space: pre-wrap;    /* preserves line breaks the user typed */
  word-break: break-word;
`;

const Footer = styled.div`
  flex-shrink: 0;
  padding: 14px 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgTertiary};
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    padding: 12px 16px;
    padding-bottom: calc(12px + env(safe-area-inset-bottom));
    & > * { flex: 1; }
  }
`;

const ReplyBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.83rem;
  font-weight: 600;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    box-shadow: ${({ theme }) => theme.colors.shadowBlueBtnHover};
    transform: translateY(-1px);
  }
`;

const CloseBtn = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.83rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.borderSubtle};
  background: ${({ theme }) => theme.colors.surfaceSubtle};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.bgGlassLight};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
```


### frontend\my_portfolio\src\components\admin\PreviewModal.jsx

```
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import CategoryBadge from '../ui/CategoryBadge';
import TagList from '../ui/TagList';
import { Overlay, ModalHeader, ModalTitle, ModalCloseBtn } from './adminStyles';

const PreviewModal = ({ isOpen, onClose, formData }) => (
  <AnimatePresence>
    {isOpen && (
      <Overlay
        as={motion.div}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        onClick={onClose}
      >
        <PreviewCard
          as={motion.div}
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader>
            <ModalTitle>Preview</ModalTitle>
            <ModalCloseBtn type="button" onClick={onClose}><X size={15} /></ModalCloseBtn>
          </ModalHeader>

          <PreviewBody>
            <PreviewTitle>{formData.title}</PreviewTitle>

            {formData.category && (
              <PreviewBadgeRow>
                {formData.category.split(',').map(c => c.trim()).filter(Boolean).map((cat, i) => (
                  <CategoryBadge key={i} category={cat} size="md" />
                ))}
              </PreviewBadgeRow>
            )}

            {formData.tech_stack && (
              <PreviewTagsRow>
                {/* TagList handles the CSV split internally */}
                <TagList tags={formData.tech_stack} />
              </PreviewTagsRow>
            )}

            <PreviewContent dangerouslySetInnerHTML={{ __html: formData.content }} />
          </PreviewBody>
        </PreviewCard>
      </Overlay>
    )}
  </AnimatePresence>
);

export default PreviewModal;

/* ── Styles ── */

const PreviewCard = styled.div`
  display: flex;
  flex-direction: column;
  width: min(880px, 92vw);
  max-height: 88vh;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadowModalPreview};

  @media (max-width: 480px) {
    width: 100vw;
    max-height: 96vh;
    border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
  }
`;

const PreviewBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2.5rem 3rem;
  @media (max-width: 480px) { padding: 1.25rem; }
`;

const PreviewTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const PreviewBadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1rem;
`;

const PreviewTagsRow = styled.div`
  margin-bottom: 1.75rem;
`;

const PreviewContent = styled.div`
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};

  img { max-width: 100%; border-radius: ${({ theme }) => theme.borderRadius.sm}; margin: 1rem 0; }
  h2, h3 { color: ${({ theme }) => theme.colors.textPrimary}; margin: 1.5rem 0 0.75rem; }
  p { margin-bottom: 1.2rem; }
  pre {
    background: ${({ theme }) => theme.colors.codeGhostBg};
    border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
    padding: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    overflow-x: auto;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.preText};
  }
  code {
    background: ${({ theme }) => theme.colors.codeGradientBg};
    border: 1px solid ${({ theme }) => theme.colors.codeGradientBorder};
     color:${({ theme }) => theme.colors.preText};
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.875em;
  }
  /* ── code inside pre — no gradient, inherits pre color ───── */
  pre code {
    background: none;
    background-image: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.preText};
    color: ${({ theme }) => theme.colors.preText};
    box-shadow: none;
    border: none;
    padding: 0;
    font-size: inherit;
  }
  blockquote {
    border-left: 3px solid ${({ theme }) => theme.colors.accentPink};
    padding: 0.5rem 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;
```


### frontend\my_portfolio\src\components\cards\BlogCard.jsx

```
import { styled, useTheme } from "styled-components";
import { motion } from "framer-motion";
import React from "react";
import { getCategoryColor } from "../../utils/categoryColors";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
/* ---------- Badge ---------- */

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: ${({ $c }) => $c.bg};
  border: 1px solid ${({ $c }) => $c.border};
  color: ${({ $c }) => $c.text};
  /* truncate long single category */
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MoreBadge = styled.span`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  color: ${({ theme }) => theme.colors.textTertiary};
  white-space: nowrap;
  flex-shrink: 0;
`;

const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: nowrap;
  overflow: hidden;
  max-width: 100%;
`;



/* ---------- Meta ---------- */

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};

  margin-bottom: 0.75rem;
`;



/* ---------- Date ---------- */

const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
`;

/* ---------- Bottom Row ---------- */

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* ---------- Arrow ---------- */

const ArrowChip = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  padding: 0.35rem 0.85rem;

  border-radius: 999px;

  font-size: 0.78rem;
  font-weight: 600;

  background: linear-gradient(
    90deg,
    rgba(255, 45, 107, 0.12),
    rgba(59, 130, 246, 0.12)
  );

  border: 1px solid rgba(255, 45, 107, 0.2);

  color: ${({ theme }) => theme.colors.gradientPinkBlue};
`;




const CardLink = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;

  /* ── fixed height across all screen sizes ── */
  height: 280px;

  @media (max-width: 768px) { height: 260px; }
  @media (max-width: 480px) { height: auto; min-height: 220px; }

  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #ff2d6b 0%, #3b82f6 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.35);
    &::before { transform: scaleX(1); }
  }
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.4rem;
  /* ── always 2 lines ── */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(1.3em * 2);
  line-height: 1.3;
`;

const Excerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin-bottom: 0.75rem;
  /* ── always 3 lines ── */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(1.5em * 3);
`;
/* ---------- Component ---------- */

const BlogCard = ({ post }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  // split on comma, trim, filter empty
  const categories = (post.category || "")
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);

  const shown     = categories.slice(0, 2);
  const extraCount = categories.length - 2;

  return (
     <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable
      glareMaxOpacity={0.07}
      glareColor="#3B82F6"
      scale={1.02}
      transitionSpeed={500}
      style={{ borderRadius: "14px", transformStyle: "preserve-3d", height: "100%" }}
    >
    <CardLink
      onClick={() => navigate(post.link)}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <div>
        <Meta>
          <BadgeRow>
            {shown.map((cat, i) => (
              <CategoryBadge key={i} $c={getCategoryColor(cat, theme.mode)}>
                {cat}
              </CategoryBadge>
            ))}
            {extraCount > 0 && <MoreBadge>+{extraCount}</MoreBadge>}
          </BadgeRow>
          <span>·</span>
          <span>{post.readTime}</span>
        </Meta>

        <Title>{post.title}</Title>
        <Excerpt>{post.excerpt}</Excerpt>
      </div>

      <Footer>
        <Date>{post.date}</Date>
        <ArrowChip whileHover={{ x: 4 }}>Read more →</ArrowChip>
      </Footer>
    </CardLink>
    </Tilt>
  );
};

export default React.memo(BlogCard);
```


### frontend\my_portfolio\src\components\cards\ProjectCard.jsx

```
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Tag from "../ui/Tag";
import Tilt from "react-parallax-tilt";
import { getCategoryColor } from "../../utils/categoryColors";
import ProjectThumbnail from "../../assets/project_thumbnail.png";
import { useTheme } from "styled-components";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const categories = (project.category || "")
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);

  const shownCats  = categories.slice(0, 2);
  const extraCount = categories.length - 2;

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable
      glareMaxOpacity={0.07}
      glareColor="#3B82F6"
      scale={1.02}
      transitionSpeed={500}
      style={{ borderRadius: "14px", transformStyle: "preserve-3d", height: "100%" }}
    >
      <CardLink
        onClick={() => navigate(project.link)}
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.42 }}
      >
        <ImageWrap>
          <ProjectImage
            src={project.image || ProjectThumbnail}
            alt={project.title || "Project thumbnail"}
            loading="lazy"
          />
          <ImageOverlay />
          {categories.length > 0 && (
            <CategoryBadge>
              {shownCats.map((cat, i) => (
                <CategoryPill key={i} $c={getCategoryColor(cat, theme.mode)}>
                  {cat}
                </CategoryPill>
              ))}
              {extraCount > 0 && <MorePill>+{extraCount}</MorePill>}
            </CategoryBadge>
          )}
        </ImageWrap>

        <CardBody>
          <Title>{project.title}</Title>
          <Desc>{project.description}</Desc>

          {project.tags && project.tags.length > 0 && (
            <Tags>
              {project.tags.slice(0, 4).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
              {project.tags.length > 4 && (
                <MoreTags>+{project.tags.length - 4}</MoreTags>
              )}
            </Tags>
          )}

          <ArrowChip
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            View Case Study →
          </ArrowChip>
        </CardBody>

        <TopBar />
      </CardLink>
    </Tilt>
  );
};

export default ProjectCard;

/* ─── STYLES ─────────────────────────────────────────── */

const CardLink = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;

  /* responsive fixed heights — enough room for all content at each breakpoint */
  height: 460px;
  @media (max-width: 1024px) { height: 460px; }
  @media (max-width: 768px)  { height: 450px; }
  @media (max-width: 480px)  { height: 440px; }

  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: 14px;
  cursor: pointer;

  /* clip only the image zoom — NOT the card body content */
  overflow: hidden;

  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35),
                0 0 0 1px rgba(255, 45, 107, 0.08);
  }
`;

const TopBar = styled.span`
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
  pointer-events: none;
  z-index: 2;

  ${CardLink}:hover & {
    transform: scaleX(1);
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  flex-shrink: 0;        /* image height never shrinks */
  overflow: hidden;      /* image zoom stays clipped to this box */
  background: ${({ theme }) => theme.colors.bgTertiary};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;

  ${CardLink}:hover & {
    transform: scale(1.08);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(13, 15, 20, 0.55) 100%
  );
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${CardLink}:hover & {
    opacity: 0.8;
  }
`;

const CategoryBadge = styled.span`
  position: absolute;
  bottom: 0.65rem;
  left: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-wrap: nowrap;
  max-width: calc(100% - 1.5rem);
  overflow: hidden;
  backdrop-filter: blur(8px);
`;

const CategoryPill = styled.span`
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: ${({ $c }) => $c.bg};
  border: 1px solid ${({ $c }) => $c.border};
  color: ${({ $c }) => $c.text};
  white-space: nowrap;
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  backdrop-filter: blur(8px);
`;

const MorePill = styled.span`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 700;
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
  flex-shrink: 0;
  backdrop-filter: blur(8px);
`;

const CardBody = styled.div`
  /* takes all remaining height after ImageWrap */
  flex: 1;
  min-height: 0;          /* prevents flex blowout */
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.25rem 1.25rem;

  /* NO overflow hidden — nothing inside should be clipped */
  overflow: visible;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
  line-height: 1.3;
  flex-shrink: 0;

  /* exactly 1 line, ellipsis if longer */
  min-height: calc(1.3em + 0.1em);
  max-height: calc(1.3em + 0.1em);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  padding-bottom: 0.1em;
  box-sizing: content-box;

  transition: color 0.2s ease;

  ${CardLink}:hover & {
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const Desc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 0.85rem;
  flex-shrink: 0;

  /* exactly 2 lines, ellipsis if longer */
  min-height: calc(1.6em * 2 + 0.15em);
  max-height: calc(1.6em * 2 + 0.15em);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  padding-bottom: 0.15em;
  box-sizing: content-box;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
  flex-shrink: 0;
`;

const MoreTags = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const ArrowChip = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: auto;      /* pushes to bottom of CardBody */
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  align-self: flex-start;
  flex-shrink: 0;        /* never squished by siblings above */
  white-space: nowrap;   /* text never wraps mid-chip */

  background: linear-gradient(
    90deg,
    rgba(255, 45, 107, 0.1),
    rgba(59, 130, 246, 0.1)
  );
  border: 1px solid rgba(255, 45, 107, 0.2);
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
  transition: border-color 0.2s ease;

  ${CardLink}:hover & {
    border-color: rgba(255, 45, 107, 0.45);
    background: linear-gradient(
      90deg,
      rgba(255, 45, 107, 0.15),
      rgba(59, 130, 246, 0.15)
    );
  }
`;
```


### frontend\my_portfolio\src\components\effects\ComicGrid.jsx

```
// src/components/effects/ComicGrid.jsx
import styled from 'styled-components';

const Grid = styled.div`
  position: fixed;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  background-image:
    linear-gradient(${({ theme }) => theme.colors.inkStroke} 1px, transparent 1px),
    linear-gradient(90deg, ${({ theme }) => theme.colors.inkStroke} 1px, transparent 1px);
  background-size: 60px 60px;
  background-position: center center;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
`;

/* Larger panel divider lines — like actual comic panel borders */
const PanelLines = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    linear-gradient(${({ theme }) => theme.colors.comicPanel} 2px, transparent 2px),
    linear-gradient(90deg, ${({ theme }) => theme.colors.comicPanel} 2px, transparent 2px);
  background-size: 320px 320px;
`;

const ComicGrid = () => (
  <>
    <Grid />
    <PanelLines />
  </>
);

export default ComicGrid;
```


### frontend\my_portfolio\src\components\effects\FloatingShapes.jsx

```
// src/components/effects/FloatingShapes.jsx
//
// ROOT CAUSE FIX (desktop parallax + spin conflict):
// The RAF loop wrote `el.style.transform = translate(x,y)` which overwrote the
// CSS `animation: rotate()` on the same element every frame — killing the spin,
// and the spin's rotate() overwrote the translate — killing the parallax.
//
// Fix: two-layer DOM structure.
//   • ShapeEl (outer div) → RAF writes translate(x,y)   — parallax only
//   • SpinEl  (inner div) → CSS animation rotate()      — spin only
// The two transforms live on separate elements and can NEVER conflict.
//
// PROPS (all optional):
//   mobileMode       'hide' | 'spin' | 'gyro'    default 'gyro'
//   desktopSpin      boolean                       default true
//   desktopParallax  boolean                       default true
//   gyroSensitivity  number (degrees)              default 18

import { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

/* ─── Touch detection ────────────────────────────────────────────────────── */
const IS_TOUCH =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

/* ─── Keyframe ───────────────────────────────────────────────────────────── */
const spinSlow = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

/* ─── Styled components ──────────────────────────────────────────────────── */

/**
 * OUTER wrapper — RAF writes translate(x, y) here for parallax.
 * position:fixed so scroll never repositions it.
 * will-change:transform reserves a GPU compositing layer permanently.
 */
const ShapeEl = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 3;
  opacity: ${({ $opacity }) => $opacity};
  will-change: transform;   /* GPU layer always ready — safe because it's already composited */
`;

/**
 * INNER wrapper — CSS animation rotate() lives here exclusively.
 * RAF never touches this element, so rotate is never clobbered.
 */
const SpinEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center;

  ${({ $spin, $dur }) =>
    $spin &&
    css`
      animation: ${spinSlow} ${$dur} linear infinite;
      will-change: transform;
    `}
`;

/* ─── Shape data ─────────────────────────────────────────────────────────── */
const shapes = [
  {
    svg: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" overflow="visible">
        <defs>
          <filter id="ds0" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>
        <g filter="url(#ds0)">
          <polygon points="45,5 85,30 85,60 45,85 5,60 5,30"
            stroke="rgba(255,45,107,0.5)" strokeWidth="1.5" fill="rgba(255,45,107,0.06)" />
          <polygon points="45,15 75,32 75,58 45,75 15,58 15,32"
            stroke="rgba(255,45,107,0.2)" strokeWidth="1" fill="none" />
        </g>
      </svg>
    ),
    x: '4%', y: '18%', depth: 0.018, opacity: 0.85, spinDur: '14s',
  },
  {
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" overflow="visible">
        <defs>
          <filter id="ds1" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.45" />
          </filter>
        </defs>
        <g filter="url(#ds1)">
          <circle cx="30" cy="30" r="28" stroke="rgba(0,232,157,0.4)" strokeWidth="1.5" fill="rgba(0,232,157,0.05)" />
          <circle cx="30" cy="30" r="20" stroke="rgba(0,232,157,0.2)" strokeWidth="1" fill="none" />
          <line x1="30" y1="2" x2="30" y2="58" stroke="rgba(0,232,157,0.15)" strokeWidth="0.8" />
          <line x1="2" y1="30" x2="58" y2="30" stroke="rgba(0,232,157,0.15)" strokeWidth="0.8" />
        </g>
      </svg>
    ),
    x: '88%', y: '20%', depth: 0.025, opacity: 0.9, spinDur: '10s',
  },
  {
    svg: (
      <svg width="80" height="70" viewBox="0 0 80 70" fill="none" overflow="visible">
        <defs>
          <filter id="ds2" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>
        <g filter="url(#ds2)">
          <polygon points="40,5 75,65 5,65"
            stroke="rgba(59,130,246,0.45)" strokeWidth="1.5" fill="rgba(59,130,246,0.06)" />
          <polygon points="40,18 64,60 16,60"
            stroke="rgba(59,130,246,0.2)" strokeWidth="0.8" fill="none" />
        </g>
      </svg>
    ),
    x: '82%', y: '62%', depth: 0.012, opacity: 0.8, spinDur: '18s',
  },
  {
    svg: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" overflow="visible">
        <defs>
          <filter id="ds3" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.45" />
          </filter>
        </defs>
        <g filter="url(#ds3)">
          <rect x="5" y="5" width="40" height="40" rx="4"
            stroke="rgba(255,107,74,0.4)" strokeWidth="1.5" fill="rgba(255,107,74,0.05)"
            transform="rotate(20 25 25)" />
          <rect x="12" y="12" width="26" height="26" rx="3"
            stroke="rgba(255,107,74,0.2)" strokeWidth="0.8" fill="none"
            transform="rotate(20 25 25)" />
        </g>
      </svg>
    ),
    x: '6%', y: '75%', depth: 0.02, opacity: 0.85, spinDur: '8s',
  },
  {
    svg: (
      <svg width="100" height="60" viewBox="0 0 100 60" fill="none" overflow="visible">
        <defs>
          <filter id="ds4" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>
        <g filter="url(#ds4)">
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
            <line key={i}
              x1="50" y1="30"
              x2={50 + 44 * Math.cos(deg * Math.PI / 180)}
              y2={30 + 28 * Math.sin(deg * Math.PI / 180)}
              stroke="rgba(255,45,107,0.15)"
              strokeWidth="0.8"
            />
          ))}
          <circle cx="50" cy="30" r="8"
            stroke="rgba(255,45,107,0.4)" strokeWidth="1.5" fill="rgba(255,45,107,0.08)" />
        </g>
      </svg>
    ),
    x: '48%', y: '85%', depth: 0.008, opacity: 0.6, spinDur: '20s',
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */

const FloatingShapes = ({
  mobileMode       = 'gyro',  // 'hide' | 'spin' | 'gyro'
  desktopSpin      = true,    // spin shapes on desktop
  desktopParallax  = true,    // mouse parallax on desktop
  gyroSensitivity  = 18,      // tilt degrees for full travel (lower = more sensitive)
}) => {
  const elRefs     = useRef([]);
  const targetRef  = useRef({ x: 0, y: 0 });
  const currentRef = useRef(shapes.map(() => ({ x: 0, y: 0 })));
  const frameRef   = useRef(null);

  const hidden      = IS_TOUCH && mobileMode === 'hide';
  const spinOnly    = IS_TOUCH && mobileMode === 'spin';
  const gyroEnabled = IS_TOUCH && mobileMode === 'gyro';

  // Should SpinEl rotate?
  const shouldSpin = IS_TOUCH
    ? mobileMode === 'spin' || mobileMode === 'gyro'
    : desktopSpin;

  // Should RAF parallax loop run?
  const needsRAF = !hidden && !spinOnly && (gyroEnabled || (!IS_TOUCH && desktopParallax));

  /* ── Desktop mouse parallax ─────────────────────────────────────────── */
  useEffect(() => {
    if (IS_TOUCH || !desktopParallax) return;

    const onMouseMove = (e) => {
      targetRef.current = {
        x: e.clientX / window.innerWidth  - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      };
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [desktopParallax]);

  /* ── Gyroscope (mobile gyro mode only) ──────────────────────────────── */
  useEffect(() => {
    if (!gyroEnabled) return;

    const gyroHandler = (e) => {
      const gx = Math.max(-1, Math.min(1, (e.gamma || 0) / gyroSensitivity));
      const gy = Math.max(-1, Math.min(1, ((e.beta  || 0) - 45) / gyroSensitivity));
      targetRef.current = { x: gx, y: gy };
    };

    const attachGyro = () =>
      window.addEventListener('deviceorientation', gyroHandler, { passive: true });

    // iOS 13+: must call requestPermission synchronously inside a user gesture.
    // .then() keeps execution in the synchronous gesture flush; async/await does not.
    const onTouchStart = () => {
      if (typeof DeviceOrientationEvent?.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
          .then((result) => { if (result === 'granted') attachGyro(); })
          .catch(() => { /* denied — silently stays as spin */ });
      } else {
        attachGyro(); // Android + non-iOS
      }
    };

    window.addEventListener('touchstart', onTouchStart, { once: true, passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('deviceorientation', gyroHandler);
    };
  }, [gyroEnabled, gyroSensitivity]);

  /* ── RAF spring loop ────────────────────────────────────────────────── */
  useEffect(() => {
    if (!needsRAF) return;

    const STIFFNESS   = IS_TOUCH ? 0.10 : 0.08;
    const DAMPING     = IS_TOUCH ? 0.80 : 0.82;
    const DEPTH_SCALE = IS_TOUCH ? 500  : 350;

    const velocity = shapes.map(() => ({ x: 0, y: 0 }));

    const tick = () => {
      const tx = targetRef.current.x;
      const ty = targetRef.current.y;

      shapes.forEach((shape, i) => {
        const el = elRefs.current[i];
        if (!el) return;

        const targetX = tx * shape.depth * DEPTH_SCALE;
        const targetY = ty * shape.depth * DEPTH_SCALE;

        velocity[i].x += (targetX - currentRef.current[i].x) * STIFFNESS;
        velocity[i].y += (targetY - currentRef.current[i].y) * STIFFNESS;
        velocity[i].x *= DAMPING;
        velocity[i].y *= DAMPING;
        currentRef.current[i].x += velocity[i].x;
        currentRef.current[i].y += velocity[i].y;

        // Write guard: skip style mutation when shapes are at rest
        if (Math.abs(velocity[i].x) > 0.001 || Math.abs(velocity[i].y) > 0.001) {
          // Writes ONLY to ShapeEl (outer). SpinEl (inner) is untouched → spin preserved.
          el.style.transform = `translate(${currentRef.current[i].x.toFixed(2)}px, ${currentRef.current[i].y.toFixed(2)}px)`;
        }
      });

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [needsRAF]);

  /* ── Render ─────────────────────────────────────────────────────────── */
  if (hidden) return null;

  return (
    <>
      {shapes.map((s, i) => (
        <ShapeEl
          key={i}
          ref={(el) => (elRefs.current[i] = el)}
          $opacity={s.opacity}
          style={{ left: s.x, top: s.y }}
        >
          <SpinEl $spin={shouldSpin} $dur={s.spinDur}>
            {s.svg}
          </SpinEl>
        </ShapeEl>
      ))}
    </>
  );
};

export default FloatingShapes;
```


### frontend\my_portfolio\src\components\effects\ParallaxWrapper.jsx

```
// // components/effects/FloatingShapes.jsx

// import { motion } from "framer-motion";
// import styled from "styled-components";

// const FloatingShape = styled(motion.div)`
//   position: absolute;
//   will-change: transform;
//   filter: blur(0.5px);
// `;

// const FloatingShapes = () => {
//   return (
//     <>
//       <FloatingShape
//         animate={{
//           y: [0, -20, -10, -25, 0],
//           rotate: [0, 5, 10, 3, 0],
//         }}
//         transition={{
//           duration: 25,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//     </>
//   );
// };

// export default FloatingShapes;
```


### frontend\my_portfolio\src\components\effects\SectionWave.jsx

```
// src/components/effects/SectionWave.jsx — NEW FILE
import styled, { keyframes } from 'styled-components';

const drift = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-40px); }
  100% { transform: translateX(0); }
`;

const WaveTop = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0;
  pointer-events: none;

  svg {
    display: block;
    width: 200%;
    animation: ${drift} 10s ease-in-out infinite;
  }
`;

const SectionWave = ({ color = 'rgba(30,58,95,0.3)', flip = false }) => (
  <WaveTop style={{ transform: flip ? 'rotateX(180deg)' : 'none' }}>
    <svg viewBox="0 0 1440 40" preserveAspectRatio="none" height="40">
      <path
        d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,15 1440,20 L1440,40 L0,40 Z"
        fill={color}
      />
    </svg>
  </WaveTop>
);

export default SectionWave;
```


### frontend\my_portfolio\src\components\effects\WaterWaves.jsx

```
// src/components/effects/WaterWaves.jsx
//
// PERFORMANCE FIXES vs previous version:
// 1. Removed will-change:transform from Wave SVG elements — will-change only accelerates
//    CSS transform/opacity. These elements change via setAttribute('d') on the inner path,
//    so will-change:transform was promoting 3 GPU layers for zero benefit and wasting VRAM.
// 2. Added mobile RAF throttle — runs at 30fps on touch devices instead of 60fps.
//    Waves are subtle background elements; 30fps is imperceptible but halves GPU work.
// 3. Path point reduction kept from previous version (80 points, was 120).
// 4. 3 layers kept from previous version (was 5).

import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const IS_TOUCH = typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

const WaveWrap = styled.div`
  position: fixed;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 120px;
  pointer-events: none;
  z-index: 10;
  overflow: hidden;
`;

// will-change removed — SVG path 'd' changes are NOT accelerated by will-change:transform
const Wave = styled.svg`
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 100%;
  opacity: ${({ $opacity }) => $opacity};
`;

function buildWavePath(amp, phase, freq, baseline = 40, height = 80) {
  const W   = 1440;
  const pts = IS_TOUCH ? 50 : 80; // fewer points on mobile — visually identical
  let d = `M0,${(baseline + amp * Math.sin(phase * Math.PI * 2)).toFixed(1)} `;
  for (let i = 1; i <= pts; i++) {
    const x = (i / pts) * W;
    const y = baseline + amp * Math.sin((i / pts) * freq * Math.PI * 2 + phase * Math.PI * 2);
    d += `L${x.toFixed(1)},${y.toFixed(1)} `;
  }
  d += `L${W},${height} L0,${height} Z`;
  return d;
}

const LAYERS = [
  { speed: 0.055, opacity: 0.13, fill: 'url(#wg1)', amp: 16, freq: 1.8, baseline: 32, influence: 0.6 },
  { speed: 0.045, opacity: 0.18, fill: 'url(#wg2)', amp: 12, freq: 2.4, baseline: 38, influence: 1.0 },
  { speed: 0.035, opacity: 0.22, fill: 'url(#wg3)', amp:  8, freq: 3.0, baseline: 44, influence: 1.4 },
];

const GRADIENTS = [
  ['#FF2D6B', '#0D0F14'],
  ['#0F2A4A', '#0D0F14'],
  ['#FF2D6B', '#0D0F14'],
];

// Mobile: throttle to ~30fps to halve GPU work on subtle background element
const FRAME_INTERVAL = IS_TOUCH ? 1000 / 30 : 0;

const WaterWaves = () => {
  const pathRefs  = useRef([]);
  const phaseRefs = useRef(LAYERS.map(() => 0));
  const cursorRef = useRef({ x: 0.5, vy: 0 });
  const frameRef  = useRef(null);
  const lastY     = useRef(null);
  const lastFrameTimeRef = useRef(0);

  useEffect(() => {
    // Desktop: mouse moves influence waves
    if (!IS_TOUCH) {
      const onMouseMove = (e) => {
        const nx = e.clientX / window.innerWidth;
        const ny = e.clientY / window.innerHeight;
        const prevY = lastY.current ?? ny;
        cursorRef.current = { x: nx, vy: (ny - prevY) * 60 };
        lastY.current = ny;
      };
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', onMouseMove);
    }
    // Mobile: no touch input for waves — they just animate autonomously
  }, []);

  useEffect(() => {
    let lastTime = performance.now();

    const tick = (now) => {
      // Throttle on mobile
      if (IS_TOUCH && now - lastFrameTimeRef.current < FRAME_INTERVAL) {
        frameRef.current = requestAnimationFrame(tick);
        return;
      }
      lastFrameTimeRef.current = now;

      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      const { x: cx, vy } = cursorRef.current;

      LAYERS.forEach((layer, i) => {
        const nudge = (cx - 0.5) * layer.influence * 0.3;
        phaseRefs.current[i] += dt * (layer.speed + Math.abs(nudge) * 0.06) + nudge * dt;

        const dynAmp = layer.amp + vy * layer.influence * 0.8;
        const d = buildWavePath(dynAmp, phaseRefs.current[i], layer.freq, layer.baseline);

        const el = pathRefs.current[i];
        if (el) el.setAttribute('d', d);
      });

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <WaveWrap>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          {GRADIENTS.map(([top, bot], i) => (
            <linearGradient key={i} id={`wg${i + 1}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor={top} stopOpacity="0.55" />
              <stop offset="100%" stopColor={bot} stopOpacity="1" />
            </linearGradient>
          ))}
        </defs>
      </svg>

      {LAYERS.map((layer, i) => (
        <Wave key={i} $opacity={layer.opacity} viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            ref={(el) => (pathRefs.current[i] = el)}
            d={buildWavePath(layer.amp, 0, layer.freq, layer.baseline)}
            fill={layer.fill}
          />
        </Wave>
      ))}
    </WaveWrap>
  );
};

export default WaterWaves;
```


### frontend\my_portfolio\src\components\home\About.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import {  aboutTraits } from '../../data/siteData';
import { media } from '../../../media';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionWave from '../effects/SectionWave';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} clamp(1.25rem, 5vw, 4rem);;
  max-width: 1100px;
  margin: 0 auto;
  ${media.tablet} { padding: ${({ theme }) => theme.spacing.section} 2rem; }
`;

const Bio = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  max-width: 700px;
  margin-bottom: 2rem;
`;

const Traits = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// FlipCardWrapper height fix on mobile:
const FlipCardWrapper = styled.div`
  perspective: 800px;
  height: 180px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 150px;
  }
`;
const TraitCard = styled(motion.div)`
  flex: 1;
  text-align: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const Emoji = styled.div`font-size: 2rem; margin-bottom: 0.5rem;`;
const TraitLabel = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.h3};
`;
const TraitDesc = styled.p`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: 0.25rem;
`;

// const FlipCardWrapper = styled.div`
//   flex: 1;
//   perspective: 800px;
//   height: 180px;
//   cursor: pointer;
// `;

const FlipCardInner = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);

  ${FlipCardWrapper}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
  
`;

// Extra facts to show on card back:
const traitBackContent = {
  Creative: "Designing experiences that feel intuitive and alive.",
  Strategic: "Thinking in systems before writing code.",
  Builder: "Learning fastest by building real products.",
};

const About = ({personalInfo}) => {
const { ref, inView } = useScrollReveal();
return (<Section  ref={ref}>
{/* <SectionWave /> */}
    <SectionHeader number="01" title="ABOUT ME" />
    <Bio
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {personalInfo.bio}
    </Bio>
    <Traits>
      {aboutTraits.map((t, i) => (
  <FlipCardWrapper key={t.label}>
    <FlipCardInner>
      <CardFace>
        <Emoji>{t.emoji}</Emoji>
        <TraitLabel>{t.label}</TraitLabel>
        <TraitDesc>{t.description}</TraitDesc>
      </CardFace>
      <CardBack>
        <TraitDesc style={{color:"#fff"}}>{traitBackContent[t.label]}</TraitDesc>
      </CardBack>
    </FlipCardInner>
  </FlipCardWrapper>
))}
    </Traits>
  </Section>
)};

export default About;
```


### frontend\my_portfolio\src\components\home\Counters.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
// import { counters } from '../../data/siteData';
import { media } from '../../../media';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} clamp(1.25rem, 5vw, 4rem);;
  max-width: 1100px;
  margin: 0 auto;
  ${media.tablet} { padding: ${({ theme }) => theme.spacing.section} 2rem; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  ${media.tablet} { grid-template-columns: repeat(2, 1fr); }
  ${media.mobile} { grid-template-columns: 1fr; }
`;

const CounterCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const Value = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Label = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
`;

const Counter = ({ target, suffix, label }) => {
  const { count, ref } = useCountUp(target);
  
  return (
    <CounterCard ref={ref} >
      <Value>{count}{suffix}</Value>
      <Label>{label}</Label>
    </CounterCard>
  );
};
// animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}

const Counters = ({counters}) => {
  const { ref, inView } = useScrollReveal();
  return (<Section ref={ref}>
    <Grid>
      {counters.map((c) => (
        <Counter key={c.label} target={c.value} suffix={c.suffix} label={c.label} />
      ))}
    </Grid>
  </Section>
)};

export default Counters;
```


### frontend\my_portfolio\src\components\home\FeaturedProjects.jsx

```
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../cards/ProjectCard';
import { caseStudyAPI } from '../../services/apis';
import { media } from '../../../media';
import SectionWave from '../effects/SectionWave';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} clamp(1.25rem, 5vw, 4rem);;
  max-width: 1100px;
  margin: 0 auto;
  ${media.tablet} { padding: ${({ theme }) => theme.spacing.section} 2rem; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accentGreen};
  border: 1px solid rgba(0, 232, 157, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 232, 157, 0.08);
    border-color: rgba(0, 232, 157, 0.6);
    gap: 0.75rem;
  }
`;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const { ref, inView } = useScrollReveal();
  useEffect(() => {
    fetchFeatured();
  }, []);

  const fetchFeatured = async () => {
    try {
      const res = await caseStudyAPI.getFeatured();
      const formatted = res.data.data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.summary,
        image: item.thumbnail || null,
        tags: item.tech_stack ? item.tech_stack.split(",") : [],
        link: `/case-studies/${item.slug}`
      }));
      setProjects(formatted);
    } catch (err) {
      console.error("Failed to fetch featured projects:", err);
    }
  };

  if (!projects.length) return null;

  return (
    <Section  ref={ref}>
    {/* <SectionWave /> */}
      <SectionHeader number="04" title="FEATURED WORK" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
         animate={inView ? "show" : "hidden"}
        viewport={{ once: true }}
      >
        <Grid>
          {projects.map(p => (
            <motion.div key={p.id} variants={itemVariants}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </Grid>
      </motion.div>

      <Footer>
        <ViewAllLink to="/case-studies">View All Work →</ViewAllLink>
      </Footer>
    </Section>
  );
};

export default FeaturedProjects;
```


### frontend\my_portfolio\src\components\home\Hero.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTypewriter } from '../../hooks/useTypewriter';
// import { personalInfo } from '../../data/siteData';
import MagneticButton from '../ui/MagneticButton';
import { media } from '../../../media';
import photo from '../../assets/myphoto_cutout2.png';
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem clamp(1.25rem, 5vw, 4rem) 4rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;  /* photo on top on mobile */
    text-align: center;
    gap: 2rem;
    padding-top: 5rem;
  }
`;
const Left = styled.div`
  flex: 1;
  max-width: 600px;
`;

const Name = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.heroName};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textWhite};
  line-height: 0.95;
  letter-spacing: -0.03em;
  text-transform: uppercase;
   ${'' /* font-size: clamp(2.8rem, 7vw, 5rem);  */}
    font-weight: 800; 
    line-height: 1.0;
  letter-spacing: -0.04em;  
  margin-bottom: 1.1rem;
  &:nth-of-type(2) {
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const RoleText = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.heroRole};
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
  font-weight: 500;
  display: block;
  margin: 1.5rem 0 2rem;
  min-height: 2rem;

  &::after {
    content: '▌';
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    50% { opacity: 0; }
  }
`;


const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  ${media.tablet} {
    justify-content: center;
    gap: 0.65rem;
  }

  ${media.mobile} {
    /* Stack vertically on very small screens, full-width buttons */
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
  }
`;
const Right = styled.div`
  flex-shrink: 0;
`;

// const PhotoWrapper = styled(motion.div)`
//   position: relative;
//   width: clamp(280px, 30vw, 400px);
//   height: clamp(350px, 38vw, 500px);
// `;

const GlowRing = styled.div`
  position: absolute;
  inset: -4px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 3px;
  background: ${({ theme }) => theme.colors.gradientRing};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: ring-hue 4s linear infinite;

  @keyframes ring-hue {
    to { filter: hue-rotate(360deg); }
  }
`;

const PhotoCutout = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    filter: brightness(1.05) contrast(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 40%;
    background: linear-gradient(to top, ${({ theme }) => theme.colors.bgPrimary} 0%, transparent 100%);
    pointer-events: none;
  }
`;

const ScrollArrow = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.textTertiary};

  svg {
    width: 24px;
    height: 24px;
    animation: bounce-down 2s ease-in-out infinite;
  }

  @keyframes bounce-down {
    0%, 100% { transform: translateY(0); opacity: 0.4; }
    50% { transform: translateY(10px); opacity: 1; }
  }
`;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const PhotoWrapper = styled(motion.div)`
  position: relative;
  width: clamp(280px, 28vw, 380px);
  height: clamp(340px, 36vw, 480px);

  @media (max-width: 768px) {
    width: clamp(180px, 60vw, 280px);
    height: clamp(220px, 75vw, 340px);
  }

  /* Comic cutout effect */
  filter:
    drop-shadow(-4px 8px 0px rgba(255,45,107,0.4))
    drop-shadow(4px -4px 0px rgba(59,130,246,0.3))
    drop-shadow(0 20px 40px rgba(0,0,0,0.6));
`;

// PhotoCutout stays the same but add:
const InkFrame = styled.div`
  position: absolute;
  inset: 0;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: transparent;
  z-index: 2;
  pointer-events: none;

  /* Comic panel corner marks */
  &::before, &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
    border-style: solid;
    opacity: 0.6;
  }
  &::before {
    top: 8px; left: 8px;
    border-width: 2px 0 0 2px;
    border-radius: 4px 0 0 0;
  }
  &::after {
    bottom: 8px; right: 8px;
    border-width: 0 2px 2px 0;
    border-radius: 0 0 4px 0;
  }
`;

// Add link to your resume PDF (put resume.pdf in /public folder)
const ResumeBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textWhite};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderAccent};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  & span { position: relative; z-index: 1; }

  &:hover {
    border-color: transparent;
    box-shadow: 0 0 30px rgba(255, 45, 107, 0.3), 0 0 60px rgba(59, 130, 246, 0.15);
    &::before { opacity: 1; }
  }

  /* On touch: show gradient immediately since there's no hover */
  @media (hover: none) {
    border-color: rgba(255, 45, 107, 0.5);
    &::before { opacity: 0.15; }
    &:active {
      border-color: transparent;
      &::before { opacity: 1; }
    }
  }

  ${media.mobile} {
    padding: 0.8rem 1.5rem;
    width: 100%;
    justify-content: center;
  }
`;
const Hero = ({personalInfo}) => {
  const role = useTypewriter(personalInfo.roles);

  return (
    <Section>
      <Left>
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <Name variants={fadeUp}>{personalInfo.name}</Name>
          <Name variants={fadeUp}>{personalInfo.lastName}</Name>
          <motion.div variants={fadeUp}>
            <RoleText>{role}</RoleText>
          </motion.div>
          <motion.div variants={fadeUp}>
         <Buttons>
            <MagneticButton as="a" href="/case-studies" style={{ whiteSpace: 'nowrap' }}>
              View Work →
            </MagneticButton>
            <ResumeBtn
              href="/Darshan_Agrawal_Resume.pdf"
              download="Darshan_Agrawal_Resume.pdf"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>↓ Resume</span>
            </ResumeBtn>
            <MagneticButton variant="outline" as="a" href="/contact" style={{ whiteSpace: 'nowrap' }}>
              Contact
            </MagneticButton>
          </Buttons>
          </motion.div>
        </motion.div>
      </Left>
      <Right>
        <PhotoWrapper
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* <GlowRing /> */}
          <InkFrame />
          <PhotoCutout>
            {/* Replace with your transparent PNG */}
            <img src={photo} alt="Darshan Agrawal" />
          </PhotoCutout>
        </PhotoWrapper>
      </Right>
      <ScrollArrow>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </ScrollArrow>
    </Section>
  );
};

export default Hero;
```


### frontend\my_portfolio\src\components\home\SkillsMarquee.jsx

```
import styled, { keyframes } from 'styled-components';
// import { skills } from '../../data/siteData';

import Tilt from 'react-parallax-tilt';
import * as SiIcons from "react-icons/si";
const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Wrapper = styled.section`
  padding: 3rem 0;
  overflow: hidden;
`;

const Track = styled.div`
  display: flex;
  gap: 2rem;
  width: max-content;
  animation: ${scroll} 30s linear infinite;
  &:hover { animation-play-state: paused; }
`;
const Pill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: nowrap;
  transition: ${({ theme }) => theme.transitions.fast};
  cursor: default;

  svg {
    font-size: 1rem;
    opacity: 0.9;
  }
&:hover svg {
  transform: scale(1.1);
}
  &:hover {
    border-color: ${({ theme }) => theme.colors.borderAccent};
    color: ${({ theme }) => theme.colors.textPrimary};
    background: rgba(255, 45, 107, 0.06);
  }
`;

const SkillDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  flex-shrink: 0;
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.gradientPinkBlue};
`;
const SkillsMarquee = ({skills}) => {
  const doubled = [...skills, ...skills];
  return (
    <Wrapper>
      <Track>
        {doubled.map((skill, i) => {
  const Icon = SiIcons[skill.icon];

  return (
    <Tilt
      key={`${skill.name}-${i}`}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      glareEnable={true}
      glareMaxOpacity={0.08}
      glareColor="#FF2D6B"
      scale={1.05}
      transitionSpeed={400}
    >
      <Pill>
        <SkillDot/>
        {Icon && <Icon size={16} />}
        {skill.name}
      </Pill>
    </Tilt>
  );
})}
      </Track>
    </Wrapper>
  );
};

export default SkillsMarquee;
```


### frontend\my_portfolio\src\components\home\Timeline.jsx

```
// src/components/sections/Timeline.jsx
import styled, { keyframes } from 'styled-components';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';
// import { experience } from '../../data/siteData';
import { media } from '../../../media';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ── Animated line draw ─────────────────────────────── */
const linePulse = keyframes`
  0%, 100% { box-shadow: 0 0 6px rgba(74,222,128,0.6),  0 0 20px rgba(74,222,128,0.2); }
  50%       { box-shadow: 0 0 12px rgba(74,222,128,0.9), 0 0 36px rgba(74,222,128,0.4); }
`;

const dotPop = keyframes`
  0%   { transform: translateX(-50%) scale(0); opacity: 0; }
  60%  { transform: translateX(-50%) scale(1.3); opacity: 1; }
  100% { transform: translateX(-50%) scale(1); opacity: 1; }
`;

/* ── Layout ─────────────────────────────────────────── */
const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} clamp(1.25rem, 5vw, 4rem);
  max-width: 1100px;
  margin: 0 auto;
  ${media.tablet} {
    padding: ${({ theme }) => theme.spacing.section} 1.25rem;
  }
`;

const ListOuter = styled.div`
  position: relative;
`;

/* Static background track line */
const TrackLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: ${({ theme }) => theme.colors.borderDefault};
  pointer-events: none;

  /* Desktop: centred */
  left: 50%;
  transform: translateX(-50%);

  /* Mobile: left gutter */
  ${media.tablet} {
    left: 18px;
    transform: none;
  }
`;

/* Animated green progress line — height driven by scroll */
const ProgressLine = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    #4ade80 0%,
    #22c55e 60%,
    rgba(74,222,128,0.3) 100%
  );
  animation: ${linePulse} 2s ease-in-out infinite;
  pointer-events: none;
  transform-origin: top center;
  border-radius: 2px;

  /* Desktop: centred */
  left: 50%;
  transform-origin: top left;
  margin-left: -1px;

  /* Mobile: left gutter */
  ${media.tablet} {
    left: 18px;
    margin-left: 0;
  }
`;

/* Glowing tip of the progress line */
const LineTip = styled(motion.div)`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 12px rgba(74,222,128,0.9), 0 0 28px rgba(74,222,128,0.5);
`;

/* ── Timeline items ─────────────────────────────────── */
const List = styled.div`
  position: relative;
`;

const Item = styled(motion.div)`
  display: grid;
  position: relative;
  padding: 2rem 0;

  /* Desktop: two-column alternating */
  grid-template-columns: 1fr 2rem 1fr;
  align-items: start;

  /* Mobile: single column with left offset */
  ${media.tablet} {
    grid-template-columns: 1fr;
    padding-left: 3rem;
    padding-right: 0;
  }
`;

/* Puts card in left or right column */
const CardSlot = styled.div`
  /* Even items: card on LEFT, spacer on RIGHT */
  /* Odd items:  spacer on LEFT, card on RIGHT */
  grid-column: ${({ $side }) => $side === 'left' ? '1' : '3'};
  grid-row: 1;

  ${media.tablet} {
    grid-column: 1;
    grid-row: 1;
  }
`;

const Dot = styled(motion.div)`
  position: absolute;
  top: 2.75rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentCoral};
  box-shadow: ${({ theme }) => theme.colors.shadowGlowPink};
  z-index: 2;

  /* Desktop: centred on line */
  left: 50%;
  transform: translateX(-50%);

  /* Mobile: on left-gutter line */
  ${media.tablet} {
    left: 12px;
    transform: none;
  }
`;

const Card = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  position: relative;
  width: 100%;
`;

const Role = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  margin: 0 0 0.2rem;
`;

const Company = styled.span`
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
  font-weight: 600;
`;

const Period = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
  margin: 0.25rem 0 0.75rem;
`;

const PanelCorner = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: ${({ theme }) => theme.colors.gradientPinkBlue};
  border-style: solid;
  opacity: 0.5;

  ${({ $pos }) => $pos === 'tl' && `
    top: 6px; left: 6px;
    border-width: 2px 0 0 2px;
    border-radius: 3px 0 0 0;
  `}
  ${({ $pos }) => $pos === 'br' && `
    bottom: 6px; right: 6px;
    border-width: 0 2px 2px 0;
    border-radius: 0 0 3px 0;
  `}
`;

const Desc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 0.75rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

/* ── Component ──────────────────────────────────────── */
const Timeline = ({experience}) => {
  const sectionRef = useRef(null);
  const { ref: revealRef, inView } = useScrollReveal({ once: false, threshold: 0.05 });

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 60%'],
  });

  // Smooth out the scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Height of the green line: 0% → 100% of the container
  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <Section ref={sectionRef}>
      <SectionHeader number="03" title="EXPERIENCE" />

      <ListOuter>
        {/* Static grey track */}
        <TrackLine />

        {/* Animated green progress line */}
        <ProgressLine style={{ height: lineHeight }}>
          <LineTip />
        </ProgressLine>

        <List ref={revealRef}>
          {experience.map((exp, i) => {
            // Desktop: even → card left, odd → card right
            // Mobile: always left (CSS handles it)
            const side = i % 2 === 0 ? 'left' : 'right';

            return (
              <Item
                key={exp.id}
                initial={{
                  opacity: 0,
                  x: side === 'left' ? -48 : 48,
                  filter: 'blur(4px)',
                }}
                animate={
                  inView
                    ? { opacity: 1, x: 0, filter: 'blur(0px)' }
                    : {
                        opacity: 0,
                        x: side === 'left' ? -48 : 48,
                        filter: 'blur(4px)',
                      }
                }
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.34, 1.2, 0.64, 1],
                }}
              >
                <Dot
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.1 + 0.2 }}
                />

                <CardSlot $side={side}>
                  <Card>
                    <PanelCorner $pos="tl" />
                    <PanelCorner $pos="br" />
                    <Role>{exp.role}</Role>
                    <Company>{exp.company}</Company> · {exp.location}
                    <Period>{exp.period}</Period>
                    <Desc>{exp.description}</Desc>
                    <Tags>
                      {exp.tech.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </Tags>
                  </Card>
                </CardSlot>
              </Item>
            );
          })}
        </List>
      </ListOuter>
    </Section>
  );
};

export default Timeline;
```


### frontend\my_portfolio\src\components\layout\Footer.jsx

```
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { personalInfo } from "../../data/siteData";

const NAV = [
  { label: "Home",          to: "/" },
  { label: "Case Studies",  to: "/case-studies" },
  { label: "Blog",          to: "/blog" },
  { label: "Contact",       to: "/contact" },
];

const SOCIALS = [
  { icon: Github,   href: `${personalInfo.socials.github}`,       label: "GitHub" },
  { icon: Linkedin, href: `${personalInfo.socials.linkedin}`,   label: "LinkedIn" },
  { icon: Twitter,  href: `${personalInfo.socials.twitter}`,       label: "Twitter" },
  { icon: Mail,     href: `mailto:${personalInfo.email}`,           label: "Email" },
];

const Footer = () => (
  <FooterWrap>
    {/* Gradient divider line */}
    <TopRule />

    <Inner>
      {/* Brand */}
      <Brand>
        <BrandName>{personalInfo.name} {personalInfo.lastName}</BrandName>
        <BrandSub>Full Stack Engineer ¦ 4 Years Building the Future</BrandSub>
        <AvailBadge>
          <PulseDot />
          Open to opportunities
        </AvailBadge>
      </Brand>

      {/* Nav */}
      <NavBlock>
        <BlockLabel>Pages</BlockLabel>
        <NavList>
          {NAV.map(({ label, to }) => (
            <NavItem key={to}>
              <FooterLink to={to}>{label}</FooterLink>
            </NavItem>
          ))}
        </NavList>
      </NavBlock>

      {/* Socials */}
      <SocialsBlock>
        <BlockLabel>Elsewhere</BlockLabel>
        <SocialRow>
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <SocialBtn
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
              aria-label={label}
            >
              <Icon size={16} />
            </SocialBtn>
          ))}
        </SocialRow>
        <EmailText href={`mailto:${personalInfo.email}`}>
          {personalInfo.email}
        </EmailText>
      </SocialsBlock>
    </Inner>

    {/* Bottom strip */}
    <BottomStrip>
      <Copyright>© {new Date().getFullYear()} {personalInfo.name} {personalInfo.lastName}. Built with React + Flask.</Copyright>
      <MadeWith>
        Made with <Heart>♥</Heart> and too much coffee
      </MadeWith>
    </BottomStrip>
  </FooterWrap>
);

export default Footer;

/* ─────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────── */

const FooterWrap = styled.footer`
  margin-top: auto;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgTertiary};
  position: relative;
`;

const TopRule = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #FF2D6B 30%, #3B82F6 70%, transparent 100%);
  opacity: 0.4;
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr;
  gap: 3rem;
  padding: clamp(3rem, 6vh, 4.5rem) clamp(1.5rem, 6vw, 5rem);

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

/* Brand block */
const Brand = styled.div``;

const BrandName = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.4rem;
`;

const BrandSub = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  line-height: 1.5;
  margin-bottom: 1.1rem;
  max-width: 280px;
`;

const pulseDot = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.4); }
`;

const AvailBadge = styled.div`
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  font-size: 0.72rem; font-weight: 600;
  color: ${({ theme }) => theme.colors.accentGreen};
  background: rgba(0,232,157,0.06);
  border: 1px solid rgba(0,232,157,0.2);
  border-radius: 999px;
`;

const PulseDot = styled.span`
  width: 6px; height: 6px; border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentGreen};
  animation: ${pulseDot} 2s ease-in-out infinite;
`;

/* Nav block */
const BlockLabel = styled.p`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: 1rem;
`;

const NavBlock = styled.div``;
const NavList = styled.ul`list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.6rem;`;
const NavItem = styled.li``;

const FooterLink = styled(Link)`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 1px;
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    transition: width 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    &::after { width: 100%; }
  }
`;

/* Socials block */
const SocialsBlock = styled.div``;

const SocialRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const SocialBtn = styled.a`
  width: 34px; height: 34px; border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255,45,107,0.1);
    border-color: rgba(255,45,107,0.3);
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255,45,107,0.2);
  }
`;

const EmailText = styled.a`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  text-decoration: none;
  transition: color 0.2s;
  &:hover { color: ${({ theme }) => theme.colors.gradientPinkBlue}; }
`;

/* Bottom strip */
const BottomStrip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 1.25rem clamp(1.5rem, 6vw, 5rem);
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const Copyright = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const MadeWith = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  display: flex; align-items: center; gap: 0.35rem;
`;

const heartBeat = keyframes`0%,100%{transform:scale(1)}50%{transform:scale(1.25)}`;
const Heart = styled.span`
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
  animation: ${heartBeat} 1.6s ease-in-out infinite;
`;
```


### frontend\my_portfolio\src\components\layout\Navbar.jsx

```
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // ← add useNavigate
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../data/siteData";
import { useAuth } from "../../contexts/AuthContext";
import { media } from "../../../media";
import ThemeToggle from "../ui/ThemeToggle";

const Nav = styled.nav`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: ${({ theme }) => theme.zIndex.navbar};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.4s ease, backdrop-filter 0.3s ease, border-color 0.3s ease;

  background: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.bgGlass : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(20px)' : 'none'};
  border-bottom: 1px solid ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.borderDefault : 'transparent'};
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.02em;
`;

const DesktopLinks = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) { display: none; }
`;

const NavAnchor = styled(Link)`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.gradientPinkBlue : theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transitions.fast};

  &::after {
    content: "";
    position: absolute;
    bottom: 0; left: 0;
    width: 100%; height: 2px;
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: ${({ $active }) => ($active ? "left" : "right")};
    transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    &::after { transform: scaleX(1); transform-origin: left; }
  }
`;

const LogoutButton = styled.button`
  padding: 0.35rem 0.8rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.textWhite};
  color: ${({ theme }) => theme.colors.textWhite};
  background: transparent;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  &:hover { 
  background: ${({ theme }) => theme.colors.gradientPinkBlue}; 
  color:#fff;
  
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 201;
  ${media.tablet} { display: flex; }
`;

const Line = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:nth-child(1) {
    transform: ${({ $open }) => $open ? 'translateY(7px) rotate(45deg)' : 'none'};
  }
  &:nth-child(2) {
    opacity: ${({ $open }) => $open ? '0' : '1'};
    transform: ${({ $open }) => $open ? 'scaleX(0)' : 'none'};
  }
  &:nth-child(3) {
    transform: ${({ $open }) => $open ? 'translateY(-7px) rotate(-45deg)' : 'none'};
  }
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 198;
  background: rgba(0, 0, 0, 0.5);
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0; right: 0;
  width: min(320px, 85vw);
  height: 100vh;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-left: 1px solid ${({ theme }) => theme.colors.borderDefault};
  display: flex;
  flex-direction: column;
  padding: 5rem 1.5rem 2rem;
  gap: 0.25rem;
  z-index: 200;
  backdrop-filter: blur(20px);
  overflow-y: auto;
`;

const MobileLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.gradientPinkBlue : theme.colors.textSecondary};
  padding: 0.85rem 1rem;
  border-radius: 10px;
  border: 1px solid ${({ $active, theme }) =>
    $active ? 'rgba(255,45,107,0.2)' : 'transparent'};
  background: ${({ $active }) => $active ? 'rgba(255,45,107,0.06)' : 'transparent'};
  transition: all 0.2s ease;
  display: block;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.bgGlassLight};
  }
`;

const MobileDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.borderDefault};
  margin: 0.5rem 0;
`;

const linksContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
};

const linkVariants = {
  hidden: { x: 20, opacity: 0 },
  show:   { x: 0,  opacity: 1, transition: { duration: 0.28 } }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin, isDemo, demoSession, logout } = useAuth();
  const showAdminControls = isAdmin || (isDemo && demoSession);
  
  

  // ← demo users go back to /demo on logout, admin goes to /admin/login
  const handleLogout = () => {
    const wasDemo = isDemo && demoSession;
    logout();
    navigate(wasDemo ? "/demo" : "/admin/login");
  };



  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMobileLinkClick = (path) => {
    setMobileOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const visibleLinks = (isDemo && demoSession)
    ? navLinks.filter(link => ['/blog', '/case-studies'].includes(link.path))
    : navLinks;
  return (
    <Nav $scrolled={scrolled}>
     <Logo
        to={isDemo && demoSession ? "/admin" : "/"}
        onClick={() => setMobileOpen(false)}
      >
        DARSHAN.DEV
      </Logo>

      <DesktopLinks variants={linksContainerVariants} initial="hidden" animate="show">
        {visibleLinks.map((link) => (
          <NavAnchor key={link.path} to={link.path} $active={location.pathname === link.path}>
            {link.label}
          </NavAnchor>
        ))}

        
        {showAdminControls && (
          <>
            <NavAnchor to="/admin" $active={location.pathname === "/admin"}>
              {/* ← label differs so demo user knows they're in sandbox */}
              {isDemo ? "Demo Dashboard" : "Dashboard"}
            </NavAnchor>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </>
        )}
        <ThemeToggle />
      </DesktopLinks>

      <Hamburger onClick={() => setMobileOpen((p) => !p)} aria-label="Toggle menu">
        <Line $open={mobileOpen} />
        <Line $open={mobileOpen} />
        <Line $open={mobileOpen} />
      </Hamburger>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <Backdrop
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />
            <MobileMenu
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.div variants={linksContainerVariants} initial="hidden" animate="show">
                {visibleLinks.map((link) => (
                    <motion.div key={link.path} variants={linkVariants}>
                    <MobileLink
                      to={link.path}
                      $active={location.pathname === link.path}
                      onClick={() => handleMobileLinkClick(link.path)}
                    >
                      {link.label}
                    </MobileLink>
                  </motion.div>
                ))}

                {/* ← was isAdmin, now showAdminControls */}
                {showAdminControls && (
                  <>
                    <MobileDivider />
                    <motion.div variants={linkVariants}>
                      <MobileLink
                        to="/admin"
                        $active={location.pathname === "/admin"}
                        onClick={() => handleMobileLinkClick("/admin")}
                      >
                        {isDemo ? "Demo Dashboard" : "Dashboard"}
                      </MobileLink>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                      <LogoutButton
                        style={{ marginLeft: "1rem", marginTop: "0.5rem" }}
                        onClick={() => { handleLogout(); setMobileOpen(false); }}
                      >
                        Logout
                      </LogoutButton>
                    </motion.div>
                  </>
                )}

                <MobileDivider />
                <motion.div variants={linkVariants} style={{ paddingLeft: "1rem", paddingTop: "0.5rem" }}>
                  <ThemeToggle />
                </motion.div>
              </motion.div>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
```


### frontend\my_portfolio\src\components\layout\NoiseOverlay.jsx

```
import styled from 'styled-components';

const Overlay = styled.div`
  &::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    opacity: 0.035;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 128px 128px;
  }
`;

const NoiseOverlay = () => <Overlay />;
export default NoiseOverlay;
```


### frontend\my_portfolio\src\components\layout\PageTransition.jsx

```
// src/components/layout/PageTransition.jsx
//
// PERF FIX: Exit cut to 150ms and App.jsx should use mode="wait" not mode="sync".
// mode="sync" renders both old + new page simultaneously = double render cost on low-end devices.
// mode="wait" exits old page fully before mounting new one — one page in DOM at a time.

import { motion } from 'framer-motion';

const fadeUpVariants = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const PageTransition = ({ children }) => (
  <motion.div
    variants={fadeUpVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    style={{ willChange: 'opacity, transform' }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
```


### frontend\my_portfolio\src\components\layout\ScrollProgress.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const Bar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ theme }) => theme.colors.gradientPinkBlue};
  transform-origin: 0%;
  z-index: ${({ theme }) => theme.zIndex.scrollbar};
`;

const ScrollProgress = () => {
  const progress = useScrollProgress();
  return <Bar style={{ scaleX: progress }} />;
};

export default ScrollProgress;
```


### frontend\my_portfolio\src\components\layout\ScrollToTop.jsx

```
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
```


### frontend\my_portfolio\src\components\ui\BackButton.jsx

```
import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentPink};
    color: ${({ theme }) => theme.colors.accentPink};
    transform: translateX(-3px);
  }
`;

// to   — navigate to this path on click
// label — button text
// onClick — override if you need custom behavior
const BackButton = ({ to, label = 'Back', onClick }) => {
  const navigate = useNavigate();
  const handleClick = onClick || (() => navigate(to));
  return (
    <Btn onClick={handleClick}>
      <ArrowLeft size={14} /> {label}
    </Btn>
  );
};

export default BackButton;
```


### frontend\my_portfolio\src\components\ui\CardSkeleton.jsx

```
// src/components/ui/CardSkeleton.jsx
import styled, { keyframes,css  } from "styled-components";

/**
 * Props
 * ─────
 * count   number   how many skeleton cards to render   default 6
 */
const CardSkeleton = ({ count = 6 }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i}>
        {/* shimmer top bar */}
        <SkeletonBar style={{ width: "35%", height: "10px", marginBottom: "1rem" }} />
        {/* title */}
        <SkeletonBar style={{ width: "85%", height: "14px", marginBottom: "6px" }} />
        <SkeletonBar style={{ width: "60%", height: "14px", marginBottom: "1.1rem" }} />
        {/* chip */}
        <SkeletonChip />
        {/* body lines */}
        <SkeletonBar style={{ width: "100%", height: "10px", marginBottom: "5px" }} />
        <SkeletonBar style={{ width: "90%",  height: "10px", marginBottom: "5px" }} />
        <SkeletonBar style={{ width: "70%",  height: "10px", marginBottom: "1.25rem" }} />
        {/* status row */}
        <SkeletonStatusRow>
          <SkeletonDot />
          <SkeletonBar style={{ width: "50px", height: "9px" }} />
        </SkeletonStatusRow>
      </SkeletonCard>
    ))}
  </>
);

export default CardSkeleton;

/* ── styles ── */

const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`;

const shimmerBg = ({ theme }) => css`
  background: linear-gradient(
    90deg,
    ${theme.colors.bgTertiary}        0%,
    ${theme.colors.borderHover}       40%,
    ${theme.colors.bgTertiary}        80%
  );
  background-size: 600px 100%;
  animation: ${shimmer} 1.6s linear infinite;
`;

const SkeletonCard = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
`;

const SkeletonBar = styled.div`
  border-radius: 6px;
  ${shimmerBg}
`;

const SkeletonChip = styled.div`
  width: 68px;
  height: 18px;
  border-radius: 999px;
  margin-bottom: 0.65rem;
  ${shimmerBg}
`;

const SkeletonStatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 0.85rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const SkeletonDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  ${shimmerBg}
`;
```


### frontend\my_portfolio\src\components\ui\CategoryBadge.jsx

```
import styled from 'styled-components';
import { getCategoryColor } from '../../utils/categoryColors';
import { useTheme } from 'styled-components';

const Pill = styled.span`
  display: inline-block;
  padding: ${({ $size }) => $size === 'sm' ? '2px 9px' : '4px 12px'};
  border-radius: 999px;
  font-size: ${({ $size }) => $size === 'sm' ? '0.68rem' : '0.72rem'};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  flex-shrink: 0;
  background: ${({ $c }) => $c?.bg || 'rgba(255,255,255,0.06)'};
  border: 1px solid ${({ $c }) => $c?.border || 'rgba(255,255,255,0.12)'};
  color: ${({ $c }) => $c?.text || '#9BA1B0'};
`;

const CategoryBadge = ({ category, size = 'md', className }) => {
  const theme = useTheme();
  const colors = getCategoryColor(category, theme.mode);
  return (
    <Pill $c={colors} $size={size} className={className}>
      {category}
    </Pill>
  );
};

export default CategoryBadge;
```


### frontend\my_portfolio\src\components\ui\CustomCursor.jsx

```
// src/components/ui/CustomCursor.jsx
import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.7; transform: translate(-50%, -50%) scale(0.85); }
`;

const Dot = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentCoral};
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  transition: width 0.2s ease, height 0.2s ease, background 0.2s ease, opacity 0.2s ease;
  will-change: transform;

  &.hovering {
    width: 32px;
    height: 32px;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.accentCoral};
    mix-blend-mode: normal;
    animation: ${pulse} 1.2s ease-in-out infinite;
  }

  &.clicking {
    width: 14px; height: 14px;
    background: ${({ theme }) => theme.colors.accentCoral};
  }
`;

const Ring = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 45, 107, 0.35);
  pointer-events: none;
  z-index: 99998;
  transform: translate(-50%, -50%);
  transition: transform 0.08s linear;
  will-change: transform;
  transition: width 0.25s ease, height 0.25s ease, opacity 0.25s ease;

  &.hovering {
    opacity: 0;
  }
`;

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const INTERACTIVES = 'a, button, [role="button"], input, textarea, select, label[for], .magnetic-btn';

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Ring lags slightly behind dot for fluid feel
    const animateRing = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.14;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      raf.current = requestAnimationFrame(animateRing);
    };
    raf.current = requestAnimationFrame(animateRing);

    const enterInteractive = (e) => {
      if (e.target.closest(INTERACTIVES)) setHovering(true);
    };
    const leaveInteractive = (e) => {
      if (e.target.closest(INTERACTIVES)) setHovering(false);
    };
    const mouseDown = () => setClicking(true);
    const mouseUp = () => setClicking(false);

    document.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', enterInteractive);
    document.addEventListener('mouseout', leaveInteractive);
    document.addEventListener('mousedown', mouseDown);
    document.addEventListener('mouseup', mouseUp);

    // Hide default cursor globally
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', enterInteractive);
      document.removeEventListener('mouseout', leaveInteractive);
      document.removeEventListener('mousedown', mouseDown);
      document.removeEventListener('mouseup', mouseUp);
      document.body.style.cursor = 'auto';
      cancelAnimationFrame(raf.current);
    };
  }, []);

  // Hide on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <Dot ref={dotRef} className={`${hovering ? 'hovering' : ''} ${clicking ? 'clicking' : ''}`} />
      <Ring ref={ringRef} className={hovering ? 'hovering' : ''} />
    </>
  );
};

export default CustomCursor;
```


### frontend\my_portfolio\src\components\ui\EmptyState.jsx

```
// src/components/ui/EmptyState.jsx
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

/**
 * Props
 * ─────
 * icon     string   emoji or character shown large   default "📭"
 * title    string   bold heading                     default "Nothing here yet"
 * message  string   subtext                          default ""
 * action   node     optional CTA button/element      default null
 */
const EmptyState = ({
  icon    = "📭",
  title   = "Nothing here yet",
  message = "",
  action  = null,
}) => (
  <Wrap
    as={motion.div}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
  >
    <IconRing>
      <IconPulse />
      <IconEl>{icon}</IconEl>
    </IconRing>
    <Title>{title}</Title>
    {message && <Message>{message}</Message>}
    {action && <ActionWrap>{action}</ActionWrap>}
  </Wrap>
);

export default EmptyState;

/* ── styles ── */

const floatAnim = keyframes`
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(-6px); }
`;

const pulseRing = keyframes`
  0%   { transform: scale(0.92); opacity: 0.5; }
  70%  { transform: scale(1.12); opacity: 0; }
  100% { transform: scale(0.92); opacity: 0; }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  gap: 0.75rem;
`;

const IconRing = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const IconPulse = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.accentPink};
  opacity: 0;
  animation: ${pulseRing} 2.4s ease-out infinite;
`;

const IconEl = styled.div`
  font-size: 2.5rem;
  line-height: 1;
  animation: ${floatAnim} 3s ease-in-out infinite;
  filter: drop-shadow(0 4px 12px ${({ theme }) => theme.colors.accentPinkGlow});
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

const Message = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  max-width: 28ch;
  line-height: 1.6;
  margin: 0;
`;

const ActionWrap = styled.div`
  margin-top: 0.75rem;
`;
```


### frontend\my_portfolio\src\components\ui\FilterTab.jsx

```
import styled from 'styled-components';

const Tab = styled.button`
  padding: 0.5rem 1.25rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  color: ${({ $active, theme }) => $active ? theme.colors.textWhite : theme.colors.textTertiary};
  background: ${({ $active, theme }) => $active ? theme.colors.gradientPinkBlue : 'transparent'};
  border: 1px solid ${({ $active, theme }) => $active ? theme.colors.gradientPinkBlue : theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.borderHover};
  }
`;

const FilterTab = ({ active, children, onClick }) => (
  <Tab $active={active} onClick={onClick}>{children}</Tab>
);

export default FilterTab;
```


### frontend\my_portfolio\src\components\ui\FloatingInput.jsx

```
import styled from 'styled-components';

const Group = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.25rem 1rem 0.5rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  outline: none;
  transition: border-color 0.3s;

  &:focus { border-color: ${({ theme }) => theme.colors.gradientPinkBlue}; }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0.5rem;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
  }
`;

const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  pointer-events: none;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1.25rem 1rem 0.5rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  outline: none;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus { border-color: ${({ theme }) => theme.colors.gradientPinkBlue}; }
  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0.5rem;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.gradientPinkBlue};
  }
`;

export const FloatingInput = ({ label, type = 'text', ...props }) => (
  <Group>
    <Input type={type} placeholder=" " {...props} />
    <Label>{label}</Label>
  </Group>
);

export const FloatingTextArea = ({ label, ...props }) => (
  <Group>
    <TextArea placeholder=" " {...props} />
    <Label>{label}</Label>
  </Group>
);
```


### frontend\my_portfolio\src\components\ui\LoadingScreen.jsx

```
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

/*
  Comic-book style loading screen.
  Shows on first app load AND whenever ProtectedRoute is checking auth.
  Auto-dismisses once `done` prop is true, or after 2.2s by default.
*/
const LoadingScreen = ({ done = false, minMs = 1800 }) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    /* Animate progress bar from 0 → 100 over minMs */
    const start = performance.now();
    let raf;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / minMs) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [minMs]);

  /* If parent signals done early, close */
  useEffect(() => {
    if (done) setVisible(false);
  }, [done]);

  return (
    <AnimatePresence>
      {visible && (
        <Overlay
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
        >
          {/* Comic panel grid lines */}
          <PanelGrid />

          <Inner>
            {/* Glitching logo / name */}
            <LogoWrap>
              <LogoText>DA</LogoText>
              <LogoGlitch aria-hidden>DA</LogoGlitch>
              <LogoGlitch2 aria-hidden>DA</LogoGlitch2>
            </LogoWrap>

            <TagLine>Initialising Panel One…</TagLine>

            {/* Progress bar */}
            <BarTrack>
              <BarFill style={{ width: `${progress}%` }} />
              <BarGlow style={{ left: `${progress}%` }} />
            </BarTrack>

            <ProgressLabel>{Math.round(progress)}%</ProgressLabel>

            {/* Scanning dots */}
            <Dots>
              {[0, 1, 2, 3, 4].map((i) => (
                <Dot key={i} $i={i} />
              ))}
            </Dots>
          </Inner>

          {/* Corner panel marks — comic aesthetic */}
          <Corner $pos="tl" />
          <Corner $pos="tr" />
          <Corner $pos="bl" />
          <Corner $pos="br" />
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

/* ─── Keyframes ──────────────────────────────────────── */

const scanLine = keyframes`
  0%   { top: -2px; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { top: 100%; opacity: 0; }
`;

const glitch1 = keyframes`
  0%, 90%, 100% { clip-path: inset(50% 0 50% 0); transform: translate(0); opacity: 0; }
  91%  { clip-path: inset(15% 0 60% 0); transform: translate(-4px, 2px); opacity: 0.7; }
  93%  { clip-path: inset(70% 0 10% 0); transform: translate(4px, -2px); opacity: 0.7; }
  95%  { clip-path: inset(40% 0 40% 0); transform: translate(-2px, 1px); opacity: 0.6; }
`;

const glitch2 = keyframes`
  0%, 88%, 100% { clip-path: inset(50% 0 50% 0); transform: translate(0); opacity: 0; }
  89%  { clip-path: inset(20% 0 55% 0); transform: translate(5px, -3px); opacity: 0.6; }
  91%  { clip-path: inset(65% 0 15% 0); transform: translate(-5px, 3px); opacity: 0.6; }
`;

const dotBlink = keyframes`
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50%       { opacity: 1;    transform: scale(1.2); }
`;

const barShimmer = keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position: 200%  0; }
`;

/* ─── Styles ─────────────────────────────────────────── */

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Scan line effect */
  &::after {
    content: "";
    position: absolute;
    left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(255, 45, 107, 0.6) 40%,
      rgba(59, 130, 246, 0.6) 60%,
      transparent 100%
    );
    animation: ${scanLine} 2.8s linear infinite;
    pointer-events: none;
  }
`;

/* Faint comic grid background */
const PanelGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  position: relative;
  z-index: 1;
`;

/* Glitch logo */
const LogoWrap = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const logoBase = `
  position: absolute;
  font-size: 4.5rem;
  font-weight: 900;
  letter-spacing: -0.06em;
  line-height: 1;
  user-select: none;
`;

const LogoText = styled.span`
  ${logoBase}
  background: linear-gradient(135deg, #FF2D6B 0%, #3B82F6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: serif;
`;

const LogoGlitch = styled.span`
  ${logoBase}
  color: #FF2D6B;
  animation: ${glitch1} 3.5s infinite;
`;

const LogoGlitch2 = styled.span`
  ${logoBase}
  color: #3B82F6;
  animation: ${glitch2} 3.5s infinite;
`;

const TagLine = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

/* Progress bar */
const BarTrack = styled.div`
  width: 220px;
  height: 3px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 999px;
  position: relative;
  overflow: visible;
`;

const BarFill = styled.div`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 50%, #FF2D6B 100%);
  background-size: 200% 100%;
  animation: ${barShimmer} 1.4s linear infinite;
  transition: width 0.05s linear;
`;

const BarGlow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #FF2D6B;
  box-shadow: 0 0 12px 4px rgba(255, 45, 107, 0.6);
  transition: left 0.05s linear;
`;

const ProgressLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-variant-numeric: tabular-nums;
`;

/* Scanning dots */
const Dots = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

const Dot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({ $i }) =>
    $i % 2 === 0 ? "#FF2D6B" : "#3B82F6"};
  animation: ${dotBlink} 1.1s ease-in-out infinite;
  animation-delay: ${({ $i }) => $i * 0.18}s;
`;

/* Comic panel corner marks */
const Corner = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: rgba(255, 45, 107, 0.35);
  border-style: solid;

  ${({ $pos }) => $pos === "tl" && "top:20px;left:20px;border-width:2px 0 0 2px;border-radius:3px 0 0 0;"}
  ${({ $pos }) => $pos === "tr" && "top:20px;right:20px;border-width:2px 2px 0 0;border-radius:0 3px 0 0;"}
  ${({ $pos }) => $pos === "bl" && "bottom:20px;left:20px;border-width:0 0 2px 2px;border-radius:0 0 0 3px;"}
  ${({ $pos }) => $pos === "br" && "bottom:20px;right:20px;border-width:0 2px 2px 0;border-radius:0 0 3px 0;"}
`;
```


### frontend\my_portfolio\src\components\ui\LoadMoreButton.jsx

```
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-top: 3rem;
`;

const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentPink};
    color: ${({ theme }) => theme.colors.textPrimary};
    background: rgba(255, 45, 107, 0.06);
    transform: translateY(-2px);
  }
  &:active { transform: translateY(0); }
`;

const Count = styled.span`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

// shown  — how many are currently visible
// total  — total count
// onLoad — callback to load more
const LoadMoreButton = ({ shown, total, onLoad }) => (
  <Wrap>
    <Btn onClick={onLoad}>Load more ↓</Btn>
    <Count>Showing {shown} of {total}</Count>
  </Wrap>
);

export default LoadMoreButton;
```


### frontend\my_portfolio\src\components\ui\MagneticButton.jsx

```
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../../media';
const Btn = styled(motion.button)`
  position: relative;
  padding: ${({ $size }) => $size === 'sm' ? '0.4rem 0.9rem' : '0.875rem 2rem'};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ $variant, theme }) => {
    switch ($variant) {
      case 'outline':
      case 'nav':
      case 'ghost':
        return theme.colors.codeText; // Specific theme color for transparent backgrounds
      default:
        return '#ffffff'; // White text for gradient backgrounds (default, edit, delete)
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  overflow: hidden;
  border: none;

  transition: ${({ theme }) => theme.transitions.default};

  /* Background variants */
  background: ${({ $variant, theme }) => {
    switch ($variant) {
      case 'outline': return 'transparent';
      case 'ghost':   return 'transparent';
      case 'nav':     return theme.colors.bgGlassLight;
      case 'edit':    return `linear-gradient(90deg, ${theme.colors.accentBlue}, ${theme.colors.accentNavyLight})`;
      case 'delete':  return `linear-gradient(90deg, ${theme.colors.accentCrimson}, ${theme.colors.accentCoral})`;
      default:        return theme.colors.gradientPinkBlue;
    }
  }};

  border: ${({ $variant, theme }) => {
    if ($variant === 'outline' || $variant === 'nav') return `1px solid ${theme.colors.textWhite}`;
    if ($variant === 'ghost') return '1px solid transparent';
    return 'none';
  }};

  /* Shimmer effect */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({ theme }) => theme.colors.bgGlassLight} 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);

    box-shadow: ${({ $variant, theme }) => {
      if ($variant === 'delete') return theme.colors.shadowGlowPink;
      if ($variant === 'outline' || $variant === 'ghost' || $variant === 'nav') return theme.colors.shadowGlowPink;
      return theme.colors.shadowGlowPink;
    }};
   
    &::after {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $variant, theme }) =>
    $variant === 'outline' &&
    `
      &:hover {
        background: ${theme.colors.bgGlassLight};
        border-color: ${theme.colors.borderAccent};
      }
    `}
`;
const Ripple = styled.span`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bgGlassLight};
  transform: scale(0);
  animation: ripple-expand 0.6s ease-out forwards;
  pointer-events: none;

  @keyframes ripple-expand {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

const MagneticButton = ({ children, variant = 'default', onClick, ...props }) => {
  const ref = useRef(null);
  const [ripples, setRipples] = useState([]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = 'translate(0, 0)';
  };

  const handleClick = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    setRipples((prev) => [...prev, { x, y, size, id: Date.now() }]);
    setTimeout(() => setRipples((prev) => prev.slice(1)), 600);
    onClick && onClick(e);
  };

  return (
    <Btn
      ref={ref}
      $variant={variant}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...props}
    >
      {children}
      {ripples.map((r) => (
        <Ripple key={r.id} style={{ left: r.x, top: r.y, width: r.size, height: r.size }} />
      ))}
    </Btn>
  );
};

export default MagneticButton;
```


### frontend\my_portfolio\src\components\ui\NotFound.jsx

```
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 64px;
`;

const Text = styled.p`
  margin-top: 10px;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <Text>Page Not Found</Text>
    </Wrapper>
  );
};

export default NotFound;
```


### frontend\my_portfolio\src\components\ui\PageHero.jsx

```
import styled from "styled-components";
import { motion } from "framer-motion";

const PageHero = ({ number = "01", eyebrow = "", title = "", titleAccent = "", subtitle = "", badge = "", children }) => (
  <Wrap>
    <GlowOrb />
    <Inner initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
      <TopRow>
        <NumberTag>{number}</NumberTag>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      </TopRow>
      <Heading>{title} {titleAccent && <AccentWord>{titleAccent}</AccentWord>}</Heading>
      {subtitle && <Sub>{subtitle}</Sub>}
      {(badge || children) && (
        <BottomRow>
          {badge && <Badge>{badge}</Badge>}
          {children}
        </BottomRow>
      )}
    </Inner>
    <BottomRule />
  </Wrap>
);

export default PageHero;

const Wrap = styled.section`
  padding: clamp(1rem, 5vh, 2rem) clamp(1.5rem, 6vw, 5rem) clamp(2.5rem, 5vh, 4rem);
  position: relative; overflow: hidden;
`;
const GlowOrb = styled.div`
  position: absolute; top: -60px; right: -80px; width: 480px; height: 380px;
  background: radial-gradient(ellipse at top right, rgba(255,45,107,0.07) 0%, transparent 70%);
  pointer-events: none;
`;
const Inner = styled(motion.div)`position: relative; z-index: 1; max-width: 720px;`;
const TopRow = styled.div`display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.9rem;`;
const NumberTag = styled.span`
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.2rem 0.65rem; border-radius: 6px;
  font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em;
  background: rgba(255,45,107,0.1); border: 1px solid rgba(255,45,107,0.25);
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
`;
const Eyebrow = styled.p`font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: ${({ theme }) => theme.colors.textTertiary};`;
const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.8rem, 7vw, 4rem); font-weight: 800; line-height: 1.0;
  letter-spacing: -0.04em; color: ${({ theme }) => theme.colors.textPrimary}; margin-bottom: 1.1rem;
`;
const AccentWord = styled.span`
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
`;
const Sub = styled.p`font-size: clamp(0.95rem, 2vw, 1.1rem); color: ${({ theme }) => theme.colors.textSecondary}; line-height: 1.7; max-width: 560px; margin-bottom: 1.75rem;`;
const BottomRow = styled.div`display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;`;
const Badge = styled.span`
  display: inline-flex; align-items: center; padding: 0.3rem 0.85rem; border-radius: 999px;
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
  background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.2); color: ${({ theme }) => theme.colors.accentBlue};
`;
const BottomRule = styled.div`
  position: absolute; bottom: 0; left: clamp(1.5rem, 6vw, 5rem); right: clamp(1.5rem, 6vw, 5rem);
  height: 1px; background: ${({ theme }) => theme.colors.borderDefault};
`;
```


### frontend\my_portfolio\src\components\ui\PageLoader.jsx

```
// src/components/ui/PageLoader.jsx
// Full-screen loading state for pages that are fetching API data.
// Uses 100vh so it fills the entire viewport, not just the content area.
// Used by: Blog, CaseStudies, Admin dashboard

import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  gap: 1.5rem;
`;

const Ring = styled.div`
  position: relative;
  width: 52px;
  height: 52px;

  /* Outer track */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.borderDefault};
  }

  /* Spinning arc */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.accentPink};
    border-right-color: ${({ theme }) => theme.colors.accentBlue};
    animation: ${spin} 0.8s cubic-bezier(0.6, 0.2, 0.4, 0.8) infinite;
  }
`;

const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
  animation: ${pulse} 1.6s ease-in-out infinite;
`;

const PageLoader = ({ label = "Loading…" }) => (
  <Wrap>
    <Ring />
    <Label>{label}</Label>
  </Wrap>
);

export default PageLoader;
```


### frontend\my_portfolio\src\components\ui\ProseContent.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Prose = styled(motion.div)`
  line-height: 1.85;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: ${({ theme }) => theme.colors.textSecondary};

  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(1.4rem, 3vw, 1.75rem);
    margin: 3rem 0 1rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    position: relative;
    padding-left: 1rem;
    &::before {
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 3px;
      background: ${({ theme }) => theme.colors.accentPink};
      border-radius: 2px;
    }
  }

  h3 {
    font-size: 1.2rem;
    margin: 2rem 0 0.75rem;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p { margin-bottom: 1.4rem; }

  strong { color: ${({ theme }) => theme.colors.textPrimary}; }

  a {
    color: ${({ theme }) => theme.colors.accentBlue};
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  blockquote {
    border-left: 3px solid ${({ theme }) => theme.colors.accentPink};
    padding: 0.75rem 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textTertiary};
    background: ${({ theme }) => theme.colors.bgGlassLight};
    border-radius: 0 8px 8px 0;
  }

  /* ── pre block — styled dark/light grey ─────────────────── */
  pre {
    background: ${({ theme }) => theme.colors.preBg};
    border: 1px solid ${({ theme }) => theme.colors.preBorder};
    color: ${({ theme }) => theme.colors.preText};
    padding: 1.5rem 1.25rem;
    border-radius: 10px;
    overflow-x: auto;
    font-size: 0.875rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    margin: 1.75rem 0;
    line-height: 1.7;
    position: relative;

    /* subtle top accent line */
    &::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.codeGradientBg};
      border-radius: 10px 10px 0 0;
      opacity: 0.7;
    }
  }

  /* ── inline code — gradient text + gradient bg ───────────── */
  code {
    background: ${({ theme }) => theme.colors.codeGradientBg};
    border: 1px solid ${({ theme }) => theme.colors.codeGradientBorder};
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 0.875em;
    font-family: ${({ theme }) => theme.fonts.mono};
    color:${({ theme }) => theme.colors.preText};
    /* gradient text effect */
    // background-clip: text;
    // -webkit-background-clip: text;
    // color: transparent;
    /* fallback for browsers that don't support background-clip: text */
    // background-image: ${({ theme }) => theme.colors.codeGradientBg};
    // -webkit-text-fill-color: transparent;

    /* re-apply background for the box (gradient-clip removes it) */
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.codeGradientBorder};
    // background-color: transparent;
  }

  /* ── code inside pre — no gradient, inherits pre color ───── */
  pre code {
    background: none;
    background-image: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.preText};
    color: ${({ theme }) => theme.colors.preText};
    box-shadow: none;
    border: none;
    padding: 0;
    font-size: inherit;
  }

  img {
    max-width: 100%;
    border-radius: 10px;
    margin: 1.5rem 0;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  }

  ul, ol {
    padding-left: 1.5rem;
    margin-bottom: 1.4rem;
    li { margin-bottom: 0.5rem; }
  }

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
    margin: 2.5rem 0;
  }
`;

const animProps = {
  initial:    { y: 20, opacity: 0 },
  animate:    { y: 0,  opacity: 1 },
  transition: { duration: 0.6, delay: 0.2 },
};

const ProseContent = ({ html, text, contentType = 'rich', animate = true }) => {
  const motionProps = animate ? animProps : {};

  if (contentType === 'text' || text) {
    return <Prose {...motionProps}><p>{text || html}</p></Prose>;
  }

  return (
    <Prose
      {...motionProps}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default ProseContent;
```


### frontend\my_portfolio\src\components\ui\RichEditor.jsx

```
import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Youtube from "@tiptap/extension-youtube";
import Placeholder from "@tiptap/extension-placeholder";
import styled from "styled-components";
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough,
  Heading2, Heading3, List, ListOrdered, Quote, Code, Code2,
  Link as LinkIcon, Image as ImageIcon, Youtube as YoutubeIcon,
  AlignLeft, AlignCenter, AlignRight, Minus, Undo, Redo
} from "lucide-react";

const RichEditor = ({ value, onChange, uploadMediaToCloudinary }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      Image.configure({ inline: false, allowBase64: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Youtube.configure({ width: "100%", height: 480 }),
      Placeholder.configure({ placeholder: "Start writing..." }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value]);

  if (!editor) return null;

  const addLink = () => {
    const url = window.prompt("Enter URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const addImage = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      // Upload to Cloudinary via parent handler
      const url = await uploadMediaToCloudinary(file, "image");
      if (url) editor.chain().focus().setImage({ src: url }).run();
    };
    input.click();
  };

  const addYoutube = () => {
    const url = window.prompt("Enter YouTube URL:");
    if (url) editor.commands.setYoutubeVideo({ src: url });
  };

  const tools = [
    { icon: <Undo size={15} />, action: () => editor.chain().focus().undo().run(), title: "Undo" },
    { icon: <Redo size={15} />, action: () => editor.chain().focus().redo().run(), title: "Redo" },
    { separator: true },
    { icon: <Bold size={15} />, action: () => editor.chain().focus().toggleBold().run(), title: "Bold", active: editor.isActive("bold") },
    { icon: <Italic size={15} />, action: () => editor.chain().focus().toggleItalic().run(), title: "Italic", active: editor.isActive("italic") },
    { icon: <UnderlineIcon size={15} />, action: () => editor.chain().focus().toggleUnderline().run(), title: "Underline", active: editor.isActive("underline") },
    { icon: <Strikethrough size={15} />, action: () => editor.chain().focus().toggleStrike().run(), title: "Strike", active: editor.isActive("strike") },
    { separator: true },
    { icon: <Heading2 size={15} />, action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), title: "H2", active: editor.isActive("heading", { level: 2 }) },
    { icon: <Heading3 size={15} />, action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), title: "H3", active: editor.isActive("heading", { level: 3 }) },
    { separator: true },
    { icon: <List size={15} />, action: () => editor.chain().focus().toggleBulletList().run(), title: "Bullet List", active: editor.isActive("bulletList") },
    { icon: <ListOrdered size={15} />, action: () => editor.chain().focus().toggleOrderedList().run(), title: "Ordered List", active: editor.isActive("orderedList") },
    { icon: <Quote size={15} />, action: () => editor.chain().focus().toggleBlockquote().run(), title: "Blockquote", active: editor.isActive("blockquote") },
    { separator: true },
    { icon: <Code size={15} />, action: () => editor.chain().focus().toggleCode().run(), title: "Inline Code", active: editor.isActive("code") },
    { icon: <Code2 size={15} />, action: () => editor.chain().focus().toggleCodeBlock().run(), title: "Code Block", active: editor.isActive("codeBlock") },
    { separator: true },
    { icon: <AlignLeft size={15} />, action: () => editor.chain().focus().setTextAlign("left").run(), title: "Align Left" },
    { icon: <AlignCenter size={15} />, action: () => editor.chain().focus().setTextAlign("center").run(), title: "Align Center" },
    { icon: <AlignRight size={15} />, action: () => editor.chain().focus().setTextAlign("right").run(), title: "Align Right" },
    { separator: true },
    { icon: <LinkIcon size={15} />, action: addLink, title: "Add Link" },
    { icon: <ImageIcon size={15} />, action: addImage, title: "Upload Image" },
    { icon: <YoutubeIcon size={15} />, action: addYoutube, title: "Embed YouTube" },
    { icon: <Minus size={15} />, action: () => editor.chain().focus().setHorizontalRule().run(), title: "Divider" },
  ];

  return (
    <Wrapper>
      <Toolbar>
        {tools.map((tool, i) =>
          tool.separator ? (
            <Sep key={i} />
          ) : (
            <ToolBtn
              key={i}
              type="button"
              title={tool.title}
              $active={tool.active}
              onClick={tool.action}
            >
              {tool.icon}
            </ToolBtn>
          )
        )}
      </Toolbar>
      <EditorArea>
        <EditorContent editor={editor} />
      </EditorArea>
    </Wrapper>
  );
};

export default RichEditor;

/* ---- Styles ---- */

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: 8px;
  overflow: hidden;
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const ToolBtn = styled.button`
  padding: 6px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ active, theme }) =>
    active ? theme.colors.gradientPinkBlue : "transparent"};
  color: ${({ active, theme }) =>
    active ? "#fff" : theme.colors.textSecondary};

  &:hover {
    background: ${({ theme }) => theme.colors.borderDefault};
  }
`;

const Sep = styled.div`
  width: 1px;
  height: 24px;
  background: ${({ theme }) => theme.colors.borderDefault};
  margin: 4px 4px;
  align-self: center;
`;

const EditorArea = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.colors.bgPrimary};
  min-height: 300px;

  .ProseMirror {
    outline: none;
    min-height: 280px;
    line-height: 1.7;

    p { margin: 0 0 1rem; }
    h2 { font-size: 1.5rem; margin: 1.5rem 0 0.5rem; }
    h3 { font-size: 1.2rem; margin: 1.2rem 0 0.5rem; }
    ul, ol { padding-left: 1.5rem; margin-bottom: 1rem; }
    blockquote {
      border-left: 3px solid ${({ theme }) => theme.colors.gradientPinkBlue};
      padding-left: 1rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin: 1rem 0;
    }
    code {
      background: ${({theme})=> theme.colors.codeGradientBg};
      border: 1px solid ${({ theme }) => theme.colors.codeGradientBorder};
      color:${({ theme }) => theme.colors.preText};
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
    }
    pre {
      background: ${({theme})=> theme.colors.codeGhostBg};
      border: 1px solid ${({ theme }) => theme.colors.codeGhostBorder};
      color:${({ theme }) => theme.colors.preText};
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
     
    }
       /* ── code inside pre — no gradient, inherits pre color ───── */
  pre code {
    background: none;
    background-image: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.preText};
    color: ${({ theme }) => theme.colors.preText};
    box-shadow: none;
    border: none;
    padding: 0;
    font-size: inherit;
  }
    img {
      max-width: 100%;
      border-radius: 8px;
      margin: 1rem 0;
    }
    iframe {
      width: 100%;
      border-radius: 8px;
      margin: 1rem 0;
    }
    a { color: ${({ theme }) => theme.colors.gradientPinkBlue}; text-decoration: underline; }
    hr { border: none; border-top: 1px solid ${({ theme }) => theme.colors.borderDefault}; margin: 1.5rem 0; }
    p.is-editor-empty:first-child::before {
      content: attr(data-placeholder);
      color: ${({ theme }) => theme.colors.textTertiary};
      pointer-events: none;
      float: left;
      height: 0;
    }
  }
`;
```


### frontend\my_portfolio\src\components\ui\SectionHeader.jsx

```
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

// const Label = styled.span`
//   font-family: ${({ theme }) => theme.fonts.mono};
//   font-size: ${({ theme }) => theme.fontSizes.xs};
//   color: ${({ theme }) => theme.colors.gradientPinkBlue};
//   text-transform: uppercase;
//   letter-spacing: 0.2em;
// `;

const Label = styled.span`
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.2rem 0.65rem; border-radius: 6px;
  font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em;
  background: rgba(255,45,107,0.1); border: 1px solid rgba(255,45,107,0.25);
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
`;
const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 700;
  margin-top: 0.5rem;

    ${'' /* font-size: clamp(2.8rem, 7vw, 5rem);  */}
    font-weight: 800; 
    line-height: 1.0;
  letter-spacing: -0.04em;  
  margin-bottom: 1.1rem;
  span {
    background: ${({ theme }) => theme.colors.gradientPinkBlue};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SectionHeader = ({ number, title }) =>{
  const [firstName, lastName] = title.split(" ");
  return(<Wrapper
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    {/* <Label>.{number}</Label> */}
    <Title>  {firstName} <span>{lastName}</span></Title>
  </Wrapper>
)};

export default SectionHeader;
```


### frontend\my_portfolio\src\components\ui\Tag.jsx

```
import styled from 'styled-components';
const TagPill = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 700;
  letter-spacing: 0.02em;
  background: ${({ theme }) => theme.colors.techGradientSubtle};
  border: 1px solid ${({ theme }) => theme.colors.techBorder};

  /* gradient text on the span inside */
  span {
    background: ${({ theme }) => theme.colors.techGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;
// const TagPill = styled.span`
//   display: inline-block;
//   padding: 3px 10px;
//   border-radius: 6px;
//   font-size: ${({ theme }) => theme.fontSizes.xs};
//   font-family: ${({ theme }) => theme.fonts.mono};
//   font-weight: 500;
//   background: linear-gradient(
//     90deg,
//     ${({ theme }) => theme.mode === 'dark'
//       ? 'rgba(255,45,107,0.22) 0%, rgba(59,130,246,0.22) 100%'
//       : 'rgba(232,23,74,0.13) 0%, rgba(29,78,216,0.13) 100%'
//     }
//   );
//   border: 0.5px solid ${({ theme }) =>
//     theme.mode === 'dark'
//       ? 'rgba(255,45,107,0.28)'
//       : 'rgba(232,23,74,0.22)'
//   };
//   color: ${({ theme }) => theme.mode === 'dark' ? '#ffffff' : '#1A1A2E'};
// `;
const Tag = ({ children }) => <TagPill><span>{children}</span></TagPill>;
export default Tag;
```


### frontend\my_portfolio\src\components\ui\TagList.jsx

```
import Tag from './Tag';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

// tags — comma-separated string OR array of strings
// max  — slice to first N tags (default: show all)
const TagList = ({ tags, max }) => {
  const arr = Array.isArray(tags)
    ? tags
    : (tags || '').split(',').map(t => t.trim()).filter(Boolean);

  const shown = max ? arr.slice(0, max) : arr;
  const extra = max ? arr.length - max : 0;

  return (
    <Row>
      {shown.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
      {extra > 0 && <Tag>+{extra}</Tag>}
    </Row>
  );
};

export default TagList;
```


### frontend\my_portfolio\src\components\ui\ThemeToggle.jsx

```
// src/components/ui/ThemeToggle.jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const Track = styled.button`
  position: relative;
  width: 52px;
  height: 28px;
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ $isDark }) =>
    $isDark
      ? 'rgba(30, 58, 95, 0.4)'
      : 'rgba(200, 216, 236, 0.8)'};
  cursor: pointer;
  transition: background 0.4s ease;
  padding: 0;
  display: flex;
  align-items: center;
`;

const Knob = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ $isDark }) =>
    $isDark
      ? 'linear-gradient(135deg, #3B82F6, #FF2D6B)'
      : 'linear-gradient(135deg, #FFB347, #FF6B4A)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
`;

const ThemeToggle = () => {
  const { isDark, toggle } = useTheme();

  return (
    <Track $isDark={isDark} onClick={toggle} title="Toggle theme">
      <Knob
        $isDark={isDark}
        animate={{ left: isDark ? '4px' : '28px' }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {isDark ? '🌙' : '☀️'}
      </Knob>
    </Track>
  );
};

export default ThemeToggle;
```


### frontend\my_portfolio\src\components\ui\Toast.jsx

```
import { createContext, useContext, useState, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { CheckCircle, Trash2, AlertCircle, X } from 'lucide-react';

/* ── animations ──────────────────────────────────────────────── */
const slideIn = keyframes`
  from { opacity: 0; transform: translateX(110%); }
  to   { opacity: 1; transform: translateX(0);    }
`;

const slideOut = keyframes`
  from { opacity: 1; transform: translateX(0);    }
  to   { opacity: 0; transform: translateX(110%); }
`;

const shrink = keyframes`
  from { width: 100%; }
  to   { width: 0%;   }
`;

/* ── styled components ───────────────────────────────────────── */
const Wrap = styled.div`
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${({ theme }) => theme.zIndex.toast};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  pointer-events: none;

  @media (max-width: 480px) {
    top: 5rem;
    left: 1rem;
    right: 1rem;
    transform: none;
    align-items: stretch;
  }
`;

const ToastItem = styled.div`
  pointer-events: all;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.7rem 1rem 0.7rem 0.85rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ $type, theme }) => {
    if ($type === 'success') return theme.colors.accentGreen + '55';
    if ($type === 'delete')  return theme.colors.accentDanger + '55';
    if ($type === 'error')   return theme.colors.accentDanger + '55';
    return theme.colors.accentBlue + '55';
  }};
  background: ${({ theme }) => theme.colors.bgSecondary};
  box-shadow: ${({ theme }) => theme.colors.shadowCard};
  min-width: 260px;
  max-width: 360px;
  position: relative;
  overflow: hidden;
  animation: ${({ $leaving }) => $leaving ? slideOut : slideIn} 0.28s
    ${({ theme }) => theme.transitions.smooth} both;

  @media (max-width: 480px) { min-width: unset; max-width: unset; }
`;

const IconWrap = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  color: ${({ $type, theme }) => {
    if ($type === 'success') return theme.colors.accentGreen;
    if ($type === 'delete')  return theme.colors.accentDanger;
    if ($type === 'error')   return theme.colors.accentDanger;
    return theme.colors.accentBlue;
  }};
`;

const TextWrap = styled.div`
  flex: 1;
  min-width: 0;
`;

const ToastTitle = styled.p`
  font-size: 0.83rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ToastSub = styled.p`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin: 0;
  margin-top: 1px;
`;

const CloseBtn = styled.button`
  flex-shrink: 0;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textTertiary};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: color ${({ theme }) => theme.transitions.fast};
  &:hover { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0; left: 0;
  height: 2px;
  background: ${({ $type, theme }) => {
    if ($type === 'success') return theme.colors.accentGreen;
    if ($type === 'delete')  return theme.colors.accentDanger;
    if ($type === 'error')   return theme.colors.accentDanger;
    return theme.colors.accentBlue;
  }};
  animation: ${shrink} ${({ $duration }) => $duration}ms linear forwards;
`;

/* ── icons per type ──────────────────────────────────────────── */
const ICONS = {
  success: <CheckCircle size={16} />,
  delete:  <Trash2      size={16} />,
  error:   <AlertCircle size={16} />,
  info:    <CheckCircle size={16} />,
};

/* ── context ─────────────────────────────────────────────────── */
const ToastContext = createContext(null);

let _id = 0;
const DURATION = 3500;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const timers = useRef({});

  const dismiss = useCallback((id) => {
    // Mark as leaving first for exit animation
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, leaving: true } : t))
    );
    // Remove after animation completes
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 300);
  }, []);

  const toast = useCallback(({ type = 'info', title, sub, duration = DURATION }) => {
    const id = ++_id;
    setToasts((prev) => [...prev, { id, type, title, sub, leaving: false }]);
    timers.current[id] = setTimeout(() => dismiss(id), duration);
    return id;
  }, [dismiss]);

  // Convenience methods
  toast.success = (title, sub) => toast({ type: 'success', title, sub });
  toast.delete  = (title, sub) => toast({ type: 'delete',  title, sub });
  toast.error   = (title, sub) => toast({ type: 'error',   title, sub });
  toast.info    = (title, sub) => toast({ type: 'info',    title, sub });

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {createPortal(
        <Wrap>
          {toasts.map((t) => (
            <ToastItem key={t.id} $type={t.type} $leaving={t.leaving}>
              <IconWrap $type={t.type}>{ICONS[t.type]}</IconWrap>
              <TextWrap>
                <ToastTitle>{t.title}</ToastTitle>
                {t.sub && <ToastSub>{t.sub}</ToastSub>}
              </TextWrap>
              <CloseBtn onClick={() => dismiss(t.id)} aria-label="Dismiss">
                <X size={13} />
              </CloseBtn>
              <ProgressBar $type={t.type} $duration={DURATION} />
            </ToastItem>
          ))}
        </Wrap>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside ToastProvider');
  return ctx;
};
```


### frontend\my_portfolio\src\contexts\AuthContext.jsx

```
import { createContext, useContext, useState, useEffect } from "react";
import { authAPI } from "../services/apis";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user,        setUser]        = useState(null);
  const [loading,     setLoading]     = useState(true);
  const [demoSession, setDemoSession] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) { setLoading(false); return; }

    authAPI.me()
      .then((res) => {
        setUser(res.data);
        if (res.data.role === "demo") {
          const wasDemo = sessionStorage.getItem("demo_session") === "true";
          if (wasDemo) setDemoSession(true);
        }
      })
      .catch(() => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
      })
      .finally(() => setLoading(false));
  }, []);

  const loginAsDemo = async (email, password) => {
    const res = await authAPI.login(email, password);
    localStorage.setItem("access_token",  res.data.access_token);
    localStorage.setItem("refresh_token", res.data.refresh_token);
    const me = await authAPI.me();
    setUser(me.data);
    if (me.data.role === "demo") {
      setDemoSession(true);
      sessionStorage.setItem("demo_session", "true");
    }
  };

const login = async (email, password) => {
  const res = await authAPI.login(email, password);
  localStorage.setItem("access_token",  res.data.access_token);
  localStorage.setItem("refresh_token", res.data.refresh_token);
  const me = await authAPI.me();
  setUser(me.data);
  return me.data.role;
};
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    sessionStorage.removeItem("demo_session");
    setUser(null);
    setDemoSession(false);
  };

  const isAdmin = user?.role === "admin";
  const isDemo  = user?.role === "demo";

  return (
    <AuthContext.Provider value={{
      user, loading,
      isAdmin, isDemo,
      demoSession,
      login, loginAsDemo, logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```


### frontend\my_portfolio\src\contexts\ThemeContext.jsx

```
// src/contexts/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { darkTheme, lightTheme } from '../styles/theme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? saved === 'dark' : true;
  });

  const toggle = () => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem('portfolio-theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
```


### frontend\my_portfolio\src\data\siteData.jsx

```
// ============================================================
// siteData.js — Single source of truth for all portfolio data
// Darshan Agrawal | Full Stack Engineer
// Icons: react-icons/si — import { SiReact } from 'react-icons/si'
// ============================================================

export const personalInfo = {
  name: 'Darshan',
  lastName: 'Agrawal',
  roles: [
    'Full Stack Engineer',
    'React + Python Developer',
    'Remote-First Builder',
  ],
  bio: "Full Stack Engineer with 4+ years building performant, data-driven web apps. I specialize in React ecosystems and Python backends — from real-time KPI dashboards to automated data pipelines — with a sharp eye for clean code and intuitive design.",
  email: 'darshanagrawal007@gmail.com',
  location: 'India (Remote Worldwide)',
  resumeUrl: '/resume.pdf',
  socials: {
    github:   'https://github.com/darshan12-code/',
    linkedin: 'https://www.linkedin.com/in/darshan-agrawal-012/',
    twitter:  'https://twitter.com',
  },
};

export const navLinks = [
  { label: 'Home',         path: '/'            },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog',         path: '/blog'         },
  { label: 'Contact',      path: '/contact'      },
];

// ── Skills ──────────────────────────────────────────────────
// icon: string name of the Si* export from 'react-icons/si'
// Usage in component:
//   import * as SiIcons from 'react-icons/si';
//   const Icon = SiIcons[skill.icon];
//   <Icon />
export const skills = [
  { name: 'React.js',           icon: 'SiReact'             },
  { name: 'TypeScript',         icon: 'SiTypescript'        },
  { name: 'JavaScript',         icon: 'SiJavascript'        },
  { name: 'Python',             icon: 'SiPython'            },
  { name: 'Flask',              icon: 'SiFlask'             },
  { name: 'Node.js',            icon: 'SiNodedotjs'         },
  { name: 'Express.js',         icon: 'SiExpress'           },
  { name: 'Angular',            icon: 'SiAngular'           },
  { name: 'GraphQL',            icon: 'SiGraphql'           },
  { name: 'D3.js',              icon: 'SiD3Dotjs'           },
  { name: 'SCSS',               icon: 'SiSass'              },
  { name: 'PostgreSQL',         icon: 'SiPostgresql'        },
  { name: 'MySQL',              icon: 'SiMysql'             },
  { name: 'MongoDB',            icon: 'SiMongodb'           },
  { name: 'Azure Databricks',   icon: 'SiDatabricks'        },
  { name: 'Azure Data Factory', icon: 'SiMicrosoftazure'    },
  { name: 'Docker',             icon: 'SiDocker'            },
  { name: 'Git',                icon: 'SiGit'               },
  { name: 'Jira',               icon: 'SiJira'              },
  { name: 'Pandas',             icon: 'SiPandas'            },
];

// ── Experience ───────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: 'Full Stack Engineer',
    company: 'Rhombuz',
    location: 'Remote — Seattle, USA',
    period: 'Feb 2023 – Present',
    description:
      'Led full-stack delivery of a real-time KPI dashboard visualizing 26 metrics with D3.js graphs. Automated telecom data workflows processing 16+ public records, cutting PDF processing time by 70%. Optimized API performance, reduced query latency, and mentored junior developers.',
    tech: ['React', 'Python', 'Flask', 'Azure Databricks', 'Azure Data Factory', 'D3.js', 'PostgreSQL', 'MySQL'],
  },
  {
    id: 2,
    role: 'Frontend Engineer',
    company: 'Rhombuz',
    location: 'Remote — Seattle, USA',
    period: 'Dec 2021 – Jan 2023',
    description:
      'Reduced dashboard load times by 45% through architecture optimization and code splitting. Redesigned UI components for cross-platform compatibility. Delivered 3+ key frontend projects and improved feature rollout speed by 30%.',
    tech: ['React', 'TypeScript', 'Angular', 'SCSS', 'D3.js', 'GraphQL'],
  },
  {
    id: 3,
    role: 'System Engineer Intern',
    company: 'Western Coalfields Ltd.',
    location: 'Chandrapur, India',
    period: 'Jun 2021 – Sep 2021',
    description:
      'Built a full-stack PHP tool to monitor equipment breakdown and system status for the GM Office, digitizing manual paper-based workflows.',
    tech: ['PHP', 'MySQL'],
  },
];

// ── Counters ─────────────────────────────────────────────────
// All values directly sourced from resume bullet points.
// "26 KPIs" = metrics built for the telecom dashboard project at Rhombuz.
// Full project context lives in Case Studies.
export const counters = [
  { value: 4,  suffix: '+', label: 'Years Experience'       },
  // { value: 26, suffix: '',  label: 'KPIs Shipped'           },
  { value: 45, suffix: '%', label: 'Load Time Reduced'      },
  { value: 70, suffix: '%', label: 'Faster PDF Processing'  },
];

// ── About Traits (flip cards) ────────────────────────────────
export const aboutTraits = [
  {
    emoji: '🎨',
    label: 'Creative',
    description: 'Clay, paint & digital art — design thinking runs deep.',
  },
  {
    emoji: '🧠',
    label: 'Strategic',
    description: 'Architecture first, syntax second. Systems that scale.',
  },
  {
    emoji: '🛠',
    label: 'Builder',
    description: 'Ship fast, iterate faster.',
  },
];

// ── Filter Categories (Case Studies page) ───────────────────
export const filterCategories = [
  { key: 'all',       label: 'All'        },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'frontend',  label: 'Frontend'   },
  { key: 'backend',   label: 'Backend'    },
];
```


### frontend\my_portfolio\src\hooks\useApiData.jsx

```
import { useQuery } from "@tanstack/react-query";
import { blogAPI, caseStudyAPI, portfolioAPI } from "../services/apis";
import { useAuth } from "../contexts/AuthContext";

export const QUERY_KEYS = {
  blogs:           (demo) => [demo ? "demo-blogs"  : "blogs"],
  blogDetail:      (slug, demo) => [demo ? "demo-blog"  : "blog",         slug],
  caseStudies:     (demo) => [demo ? "demo-cases"  : "case-studies"],
  caseStudyDetail: (slug, demo) => [demo ? "demo-case"  : "case-study",   slug],
  featuredWork:    ["featured-work"],
  portfolio:       ["portfolio-data"],
};

export function useBlogs() {
  const { isDemo, demoSession } = useAuth();
  // Demo user in an active session always sees demo content
  const demo = isDemo && demoSession;

  return useQuery({
    queryKey: QUERY_KEYS.blogs(demo),
    queryFn: async () => {
      const res = demo
        ? await blogAPI.getDemoPreview()
        : await blogAPI.getAll(1, 100);
      return res.data.data.map((blog) => ({
        id:       blog.id,
        title:    blog.title,
        excerpt:  blog.excerpt,
        category: blog.category || "Article",
        readTime: blog.read_time,
        date:     new Date(blog.created_at).toLocaleDateString(),
        link:     `/blog/${blog.slug}`,
      }));
    },
    staleTime: 0, // ← always treat as stale so navigating back refetches
  });
}

export function useBlogDetail(slug) {
  const { isDemo, demoSession } = useAuth();
  const demo = isDemo && demoSession;

  return useQuery({
    queryKey: QUERY_KEYS.blogDetail(slug, demo),
    queryFn: async () => {
      const res = demo
        ? await blogAPI.getDemoPreviewBySlug(slug)
        : await blogAPI.getBySlug(slug);
      return res.data;
    },
    enabled:   !!slug,
    staleTime: 0,
  });
}

export function useCaseStudies() {
  const { isDemo, demoSession } = useAuth();
  const demo = isDemo && demoSession;

  return useQuery({
    queryKey: QUERY_KEYS.caseStudies(demo),
    queryFn: async () => {
      const res = demo
        ? await caseStudyAPI.getDemoPreview()
        : await caseStudyAPI.getAll();
      return res.data.data.map((item) => ({
        id:          item.id,
        title:       item.title,
        description: item.summary,
        image:       item.thumbnail || null,
        tags:        item.tech_stack ? item.tech_stack.split(",") : [],
        link:        `/case-studies/${item.slug}`,
      }));
    },
    staleTime: 0,
  });
}

export function useCaseStudyDetail(slug) {
  const { isDemo, demoSession } = useAuth();
  const demo = isDemo && demoSession;

  return useQuery({
    queryKey: QUERY_KEYS.caseStudyDetail(slug, demo),
    queryFn: async () => {
      const res = demo
        ? await caseStudyAPI.getDemoPreviewBySlug(slug)
        : await caseStudyAPI.getBySlug(slug);
      return res.data;
    },
    enabled:   !!slug,
    staleTime: 0,
  });
}

// These two never change based on demo — home page always shows your real data
export function useFeaturedWork() {
  return useQuery({
    queryKey: QUERY_KEYS.featuredWork,
    queryFn: async () => {
      const res = await caseStudyAPI.getFeatured();
      return res.data.data.map((item) => ({
        id:          item.id,
        title:       item.title,
        description: item.summary,
        image:       item.thumbnail || null,
        tags:        item.tech_stack ? item.tech_stack.split(",") : [],
        link:        `/case-studies/${item.slug}`,
      }));
    },
      staleTime: 0,
  });
}

export function usePortfolioData() {
  return useQuery({
    queryKey: QUERY_KEYS.portfolio,
    queryFn: async () => {
      const res = await portfolioAPI.getAll();
      return res.data;
    },
      staleTime: 0,
  });
}
```


### frontend\my_portfolio\src\hooks\useCountUp.jsx

```
import { useState, useEffect, useRef } from 'react';

export function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return { count, ref };
}
```


### frontend\my_portfolio\src\hooks\useFetch.jsx

```
```


### frontend\my_portfolio\src\hooks\useMousePosition.jsx

```
import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,   // -1 to 1
        y: (e.clientY / window.innerHeight - 0.5) * 20,   // -1 to 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}
```


### frontend\my_portfolio\src\hooks\usePost.jsx

```
```


### frontend\my_portfolio\src\hooks\useScrollProgress.jsx

```
import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
```


### frontend\my_portfolio\src\hooks\useScrollReveal.jsx

```
// src/hooks/useScrollReveal.jsx
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export function useScrollReveal(options = {}) {
  const { ref, inView } = useInView({
    threshold: options.threshold || 0.15,
    triggerOnce: options.once !== false,
  });

  return { ref, inView };
}
```


### frontend\my_portfolio\src\hooks\useTypewriter.jsx

```
import { useState, useEffect } from 'react';

export function useTypewriter(words, typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return text;
}
```


### frontend\my_portfolio\src\pages\Admin.jsx

```
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { ArrowBigLeft, ArrowBigRight, Plus } from 'lucide-react';
import { useToast } from '../components/ui/Toast';
import { useAuth } from '../contexts/AuthContext';
import DemoBanner from '../components/admin/DemoBanner';
import { blogAPI, caseStudyAPI, contactAPI, uploadAPI } from '../services/apis';
import MagneticButton from '../components/ui/MagneticButton';
import CardSkeleton from '../components/ui/CardSkeleton';
import EmptyState from '../components/ui/EmptyState';
import MessageModal from '../components/admin/MessageModal';
import AdminContentCard from '../components/admin/AdminContentCard';
import ContentModal from '../components/admin/ContentModal';
import PreviewModal from '../components/admin/PreviewModal';
import {
  Page, Sidebar, NavSection, SideLink, SideDot, SideLabelText, CountPill,
  MainContent, PageTitleBlock, PageTitle, TitleAccent, TitleSub,
  ActionRow, CreateBtn, GridWrap, CardGrid, GridFog,
  EmptyStateWrap, Pagination, PageInfo, PaginationSep,
  MobileTabBar, MobileTab, MobileTabLabel, MobileTabCount, MobileTabIcon,
} from '../components/admin/adminStyles';
import { useQueryClient } from '@tanstack/react-query';
import { validateForm } from '../components/admin/AdminFormFields';

const ITEMS_PER_PAGE = 9;

const Portal = ({ children }) => {
  const el = useRef(document.createElement('div'));
  useEffect(() => {
    const node = el.current;
    node.setAttribute('id', 'modal-portal');
    document.body.appendChild(node);
    return () => { if (document.body.contains(node)) document.body.removeChild(node); };
  }, []);
  return createPortal(children, el.current);
};

const SCHEMAS = {
  blogs: [
    { name: 'title' }, { name: 'excerpt' }, { name: 'category' },
    { name: 'content_type' }, { name: 'content' }, { name: 'is_published' },
  ],
  cases: [
    { name: 'title' }, { name: 'summary' }, { name: 'category' },
    { name: 'tech_stack' }, { name: 'github_url' }, { name: 'live_url' },
    { name: 'thumbnail' }, { name: 'company_project' }, { name: 'content' },
    { name: 'is_published' },
  ],
  messages: [{ name: 'name' }, { name: 'email' }, { name: 'message' }],
};

const BOOLEAN_FIELDS = new Set(['is_published', 'company_project']);

const TAB_CONFIG = [
  { key: 'blogs',    label: 'Blogs',    color: '#FF2D6B', icon: '📝' },
  { key: 'cases',    label: 'Cases',    color: '#3B82F6', icon: '📁' },
  { key: 'messages', label: 'Messages', color: '#00E89D', icon: '💬' },
];

const Admin = () => {
  const { isDemo, user } = useAuth();
  const [tab, setTab]                     = useState('blogs');
  const [blogs, setBlogs]                 = useState([]);
  const [cases, setCases]                 = useState([]);
  const [messages, setMessages]           = useState([]);
  const [page, setPage]                   = useState(1);
  const [showForm, setShowForm]           = useState(false);
  const [showPreview, setShowPreview]     = useState(false);
  const [editItem, setEditItem]           = useState(null);
  const [formData, setFormData]           = useState({});
  const [saving, setSaving]               = useState(false);
  const [loading, setLoading]             = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const toast = useToast();
  const savedScrollY = useRef(0);
  const queryClient  = useQueryClient();

  // ── scroll lock when modal open ──────────────────────────────
  useEffect(() => {
    const open = showForm || showPreview;
    if (open) {
      savedScrollY.current = window.scrollY;
      Object.assign(document.body.style, {
        overflow: 'hidden', position: 'fixed',
        top: `-${savedScrollY.current}px`, left: '0', right: '0',
      });
    } else {
      Object.assign(document.body.style, { overflow: '', position: '', top: '', left: '', right: '' });
      if (savedScrollY.current > 0) {
        window.scrollTo(0, savedScrollY.current);
        savedScrollY.current = 0;
      }
    }
    return () => Object.assign(document.body.style, { overflow: '', position: '', top: '', left: '', right: '' });
  }, [showForm, showPreview]);

  // ── fetch — uses adminGetAll so backend scopes by role ───────
  // admin  → is_demo=False (your real content only)
  // demo   → is_demo=True  (sandbox content only)
  const fetchData = async () => {
    setLoading(true);
    try {
      const [b, c, m] = await Promise.all([
        blogAPI.adminGetAll(),          // ← was getAll()
        caseStudyAPI.adminGetAll(),     // ← was getAll()
        contactAPI.getAll(1, 100),      // backend already scopes by role
      ]);
      setBlogs(b.data.data       || []);
      setCases(c.data.data       || []);
      setMessages(m.data.data    || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);
  useEffect(() => { setPage(1); }, [tab]);

  const dataset    = tab === 'blogs' ? blogs : tab === 'cases' ? cases : messages;
  const paginated  = dataset.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(dataset.length / ITEMS_PER_PAGE);

  const closeForm = () => { setShowForm(false); setEditItem(null); setFormData({}); };

  const openCreate = () => {
    setEditItem(null);
    const empty = {};
    SCHEMAS[tab].forEach(({ name }) => {
      if (BOOLEAN_FIELDS.has(name))      empty[name] = name === 'is_published';
      else if (name === 'content_type')  empty[name] = 'rich';
      else                               empty[name] = '';
    });
    setFormData(empty);
    setShowForm(true);
  };

  const openEdit = (item) => {
    setEditItem(item);
    const filtered = {};
    SCHEMAS[tab].forEach(({ name }) => {
      filtered[name] = BOOLEAN_FIELDS.has(name)
        ? Boolean(item[name])
        : (item[name] ?? '');
    });
    if (tab === 'blogs') filtered.content_type = item.content_type || 'rich';
    setFormData(filtered);
    setShowForm(true);
  };

  // ── invalidate TanStack Query cache so public pages refetch ──
  const invalidatePublicCaches = () => {
    queryClient.invalidateQueries({ queryKey: ['blogs'] });
    queryClient.invalidateQueries({ queryKey: ['demo-blogs'] });
    queryClient.invalidateQueries({ queryKey: ['case-studies'] });
    queryClient.invalidateQueries({ queryKey: ['demo-cases'] });
    queryClient.invalidateQueries({ queryKey: ['featured-work'] });
  };

   const handleSave = async () => {
  // ── validate first ────────────────────────────────────────
  if (tab !== 'messages') {
    const errors = validateForm(formData, tab);
    if (Object.keys(errors).length > 0) {
      // Show the first error as a toast
      const firstError = Object.values(errors)[0];
      toast.error('Please fix the form', firstError);
      return; // ← don't proceed
    }
  }

  setSaving(true);
  try {
    if (tab === 'blogs') {
      editItem
        ? await blogAPI.update(editItem.id, formData)
        : await blogAPI.create(formData);
    }
    if (tab === 'cases') {
      const fd = new FormData();
      ['title','summary','content','category','tech_stack','github_url','live_url','thumbnail']
        .forEach(k => fd.append(k, formData[k] || ''));
      fd.append('company_project', formData.company_project ? 'true' : 'false');
      fd.append('is_published',    formData.is_published    ? 'true' : 'false');
      editItem
        ? await caseStudyAPI.update(editItem.id, fd)
        : await caseStudyAPI.create(fd);
    }

    const label = tab === 'blogs' ? 'Blog post' : 'Case study';
    editItem
      ? toast.success(`${label} updated`, formData.title)
      : toast.success(`${label} created`, formData.title);

    invalidatePublicCaches();
    closeForm();
    await fetchData();
  } catch (err) {
    toast.error('Something went wrong', err.response?.data?.error || 'Please try again.');
  } finally {
    setSaving(false);
  }
};

const handleDelete = async (id) => {
  // Find the item title before deleting
  const item  = (tab === 'blogs' ? blogs : cases).find((x) => x.id === id);
  const label = tab === 'blogs' ? 'Blog post' : 'Case study';

  try {
    tab === 'blogs'
      ? await blogAPI.delete(id)
      : await caseStudyAPI.delete(id);

    toast.delete(`${label} deleted`, item?.title);

    invalidatePublicCaches();
    await fetchData();
  } catch (err) {
    if (err.response?.status === 403) {
      toast.error('Cannot delete real content', 'Demo users can only delete sandbox data.');
    } else {
      toast.error('Delete failed', err.response?.data?.error || 'Please try again.');
    }
  }
};

  const uploadMedia = async (file, type) => {
    try {
      const res = await uploadAPI.uploadMedia(file, type);
      return res.data.files[0]?.url || null;
    } catch { return null; }
  };

  const tabCounts = {
    blogs:    blogs.length,
    cases:    cases.length,
    messages: messages.length,
  };

  return (
    <>
     {isDemo && <DemoBanner variant="admin" />}
      <Page>
        <Sidebar>
          <NavSection>
            {TAB_CONFIG.map(({ key, label, color }) => (
              <SideLink key={key} $active={tab === key} onClick={() => setTab(key)}>
                <SideDot style={{ background: color, opacity: tab === key ? 1 : 0.35 }} />
                <SideLabelText>{label}</SideLabelText>
                <CountPill $active={tab === key} style={tab === key ? { background: color } : {}}>
                  {tabCounts[key]}
                </CountPill>
              </SideLink>
            ))}
          </NavSection>
        </Sidebar>

        <MainContent>
          <PageTitleBlock>
            <PageTitle>Command<TitleAccent> Centre</TitleAccent></PageTitle>
            <TitleSub>
              Welcome back, <strong>{user?.name || 'Admin'}</strong>. Manage your content below.
            </TitleSub>
          </PageTitleBlock>

          {tab !== 'messages' && (
            <ActionRow>
              <CreateBtn onClick={openCreate}>
                <Plus size={15} />
                New {tab === 'blogs' ? 'Blog Post' : 'Case Study'}
              </CreateBtn>
            </ActionRow>
          )}

          <GridWrap>
            <CardGrid>
              {loading ? (
                <CardSkeleton count={6} />
              ) : paginated.length === 0 ? (
                <EmptyStateWrap>
                  <EmptyState
                    icon={tab === 'blogs' ? '📝' : tab === 'cases' ? '📁' : '💬'}
                    title={`No ${tab} yet`}
                    message={
                      tab === 'messages'
                        ? "When visitors send you messages they'll appear here."
                        : `Create your first ${tab === 'blogs' ? 'blog post' : 'case study'} to get started.`
                    }
                    action={tab !== 'messages' ? (
                      <CreateBtn onClick={openCreate}>
                        <Plus size={15} /> New {tab === 'blogs' ? 'Blog Post' : 'Case Study'}
                      </CreateBtn>
                    ) : null}
                  />
                </EmptyStateWrap>
              ) : (
                paginated.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    style={{ height: '100%' }}
                  >
                    <AdminContentCard
                      item={item}
                      tab={tab}
                      onEdit={openEdit}
                      onDelete={handleDelete}
                      onMessageClick={tab === 'messages' ? setSelectedMessage : undefined}
                    />
                  </motion.div>
                ))
              )}
            </CardGrid>
            {/* {!loading && paginated.length >= 6 && <GridFog />} */}
          </GridWrap>

          {!loading && totalPages > 1 && (
            <Pagination>
              <MagneticButton
                variant="nav" size="sm"
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
              >
                <ArrowBigLeft size={18} />
              </MagneticButton>
              <PageInfo>
                <strong>{page}</strong><PaginationSep>/</PaginationSep>{totalPages}
              </PageInfo>
              <MagneticButton
                variant="nav" size="sm"
                disabled={page >= totalPages}
                onClick={() => setPage(p => p + 1)}
              >
                <ArrowBigRight size={18} />
              </MagneticButton>
            </Pagination>
          )}
        </MainContent>
      </Page>

      <MobileTabBar>
        {TAB_CONFIG.map(({ key, label, color, icon }) => (
          <MobileTab key={key} $active={tab === key} $color={color} onClick={() => setTab(key)}>
            <MobileTabIcon $active={tab === key} $color={color}>{icon}</MobileTabIcon>
            <MobileTabLabel $active={tab === key}>{label}</MobileTabLabel>
            {tabCounts[key] > 0 && (
              <MobileTabCount $color={color}>
                {tabCounts[key] > 99 ? '99+' : tabCounts[key]}
              </MobileTabCount>
            )}
          </MobileTab>
        ))}
      </MobileTabBar>

      <Portal>
        <ContentModal
          isOpen={showForm}
          editItem={editItem}
          tab={tab}
          formData={formData}
          setFormData={setFormData}
          saving={saving}
          onSave={handleSave}
          onClose={closeForm}
          onPreview={() => setShowPreview(true)}
          uploadMedia={uploadMedia}
        />
      </Portal>

      <Portal>
        <PreviewModal
          isOpen={showPreview}
          onClose={() => setShowPreview(false)}
          formData={formData}
        />
      </Portal>

      <Portal>
        <MessageModal
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
        />
      </Portal>
    </>
  );
};

export default Admin;
```


### frontend\my_portfolio\src\pages\Blog.jsx

```
import { useState } from 'react';
import styled from 'styled-components';
import BlogCard from '../components/cards/BlogCard';
import PageLoader from '../components/ui/PageLoader';
import PageHero from '../components/ui/PageHero';
import LoadMoreButton from '../components/ui/LoadMoreButton';
import { useBlogs } from '../hooks/useApiData';
import EmptyState from '../components/ui/EmptyState';
const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const Page = styled.div`
  padding: 4rem 4rem 6rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) { padding: 8rem 1.5rem 4rem; }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 460px;
  padding: 0.75rem 1.25rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  outline: none;
  margin-bottom: 2.5rem;
  transition: border-color 0.3s;

  &:focus { border-color: ${({ theme }) => theme.colors.accentPink}; }
  &::placeholder { color: ${({ theme }) => theme.colors.textTertiary}; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: stretch;   /* ← add this */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const Blog = () => {
  const [search, setSearch]   = useState('');
  const [visible, setVisible] = useState(INITIAL_COUNT);

  const { data: posts = [], isLoading } = useBlogs();

  if (isLoading) return <PageLoader label="Loading posts…" />;

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    (p.category || '').toLowerCase().includes(search.toLowerCase())
  );

  const shown   = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setVisible(INITIAL_COUNT);
  };

  return (
    <Page>
      <PageHero
        number="03"
        eyebrow="The Field Journal"
        title="Blog"
        titleAccent="Posts"
        subtitle="Thoughts, tutorials, and deep-dives from 4 years of building things."
        badge={`${posts.length} Articles`}
      />

      <SearchInput
        placeholder="Search posts..."
        value={search}
        onChange={handleSearch}
      />

      {/* ── no posts at all ── */}
      {posts.length === 0 ? (
        <EmptyState
          icon="📝"
          title="No posts yet"
          message="Blog posts will appear here once published."
        />
      ) : filtered.length === 0 ? (
        /* ── search returned nothing ── */
        <EmptyState
          icon="🔍"
          title="No results found"
          message={`Nothing matched "${search}" — try a different search.`}
        />
      ) : (
        <>
          <Grid>
            {shown.map(post => <BlogCard key={post.id} post={post} />)}
          </Grid>
          {hasMore && (
            <LoadMoreButton
              shown={shown.length}
              total={filtered.length}
              onLoad={() => setVisible(v => v + LOAD_MORE_COUNT)}
            />
          )}
        </>
      )}
    </Page>
  );
};
export default Blog;
```


### frontend\my_portfolio\src\pages\BlogDetails.jsx

```
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { useBlogDetail } from '../hooks/useApiData';
import PageLoader from '../components/ui/PageLoader';
import BackButton from '../components/ui/BackButton';
import CategoryBadge from '../components/ui/CategoryBadge';
import ProseContent from '../components/ui/ProseContent';

const Page = styled.div`
  min-height: 100vh;
  padding: clamp(5rem, 10vh, 8rem) clamp(1.25rem, 5vw, 2rem) 4rem;
`;

const Inner = styled.div`
  max-width: 740px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 5vw, 3rem);
  line-height: 1.08;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1.25rem;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  margin-top: 1.25rem;
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textTertiary};

  span {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.borderDefault};
    margin-top: 1rem;
  }
`;

const CategoryRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1rem;
  align-items: center;
`;

const BlogDetail = () => {
  const { slug } = useParams();
  const { data: blog, isLoading } = useBlogDetail(slug);

  if (isLoading) return <PageLoader label="Loading post…" />;
  if (!blog)     return <Page><Inner><p>Post not found.</p></Inner></Page>;

  return (
    <Page>
      <Inner>
        {/* ← BackButton replaces 20 lines of inline styled button */}
        <BackButton to="/blog" label="Back to Blog" />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {blog.category.length > 0 && (
            <CategoryRow>
             
              {blog.category.split(',').map((cat, i) => (
                  <CategoryBadge key={i} category={cat.trim()} />
                ))}
            </CategoryRow>
          )}
          <Title
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {blog.title}
          </Title>

          <MetaRow>
            <span><Clock size={13} />{blog.read_time || '5 min read'}</span>
            <span>
              {new Date(blog.created_at).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </span>
          </MetaRow>
        </motion.div>

        {/* ← ProseContent replaces 60 lines of inline styled Content component */}
        <ProseContent
          html={blog.content}
          contentType={blog.content_type}
        />
      </Inner>
    </Page>
  );
};

export default BlogDetail;
```


### frontend\my_portfolio\src\pages\CaseStudies.jsx

```
import { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/cards/ProjectCard';
import PageHero from '../components/ui/PageHero';
import LoadMoreButton from '../components/ui/LoadMoreButton';
import { useCaseStudies } from '../hooks/useApiData';
import PageLoader from '../components/ui/PageLoader';
import EmptyState from '../components/ui/EmptyState';
const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const Page = styled.div`
  padding: 4rem 4rem 6rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) { padding: 6rem 1.5rem 4rem; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const CaseStudies = () => {
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const { data: projects = [], isLoading } = useCaseStudies();

  if (isLoading) return <PageLoader label="Loading projects…" />;

  const shown   = projects.slice(0, visible);
  const hasMore = visible < projects.length;

  return (
    <Page>
      <PageHero
        number="02"
        eyebrow="Mission Dossier"
        title="Case"
        titleAccent="Studies"
        subtitle="Full-stack projects, technical write-ups, and production work."
        badge={`${projects.length} Projects`}
      />

      {/* ── no projects ── */}
      {projects.length === 0 ? (
        <EmptyState
          icon="📁"
          title="No case studies yet"
          message="Projects will appear here once published."
        />
      ) : (
        <>
          <Grid>
            {shown.map(p => <ProjectCard key={p.id} project={p} />)}
          </Grid>
          {hasMore && (
            <LoadMoreButton
              shown={shown.length}
              total={projects.length}
              onLoad={() => setVisible(v => v + LOAD_MORE_COUNT)}
            />
          )}
        </>
      )}
    </Page>
  );
};
export default CaseStudies;
```


### frontend\my_portfolio\src\pages\CaseStudyDetails.jsx

```
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import styled from 'styled-components';
import { useCaseStudyDetail } from '../hooks/useApiData';
import PageLoader from '../components/ui/PageLoader';
import BackButton from '../components/ui/BackButton';
import CategoryBadge from '../components/ui/CategoryBadge';
import ProseContent from '../components/ui/ProseContent';
import TagList from '../components/ui/TagList';

const Page = styled.div`
  min-height: 100vh;
  padding: clamp(5rem, 10vh, 8rem) clamp(1.25rem, 5vw, 2rem) 5rem;
`;

const Inner = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const CategoryRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1rem;
  align-items: center;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.05;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1rem;
`;

const Summary = styled.p`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 680px;
`;

const TechRow = styled.div`margin-bottom: 3rem;`;

const Thumbnail = styled(motion.img)`
  width: 100%;
  max-height: 440px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const LinkRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const LinkBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.5rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  background: linear-gradient(90deg, #ff2d6b 0%, #3b82f6 100%);
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(255, 45, 107, 0.3);
  }

  &.outline {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};
    color: ${({ theme }) => theme.colors.textSecondary};
    &:hover {
      border-color: ${({ theme }) => theme.colors.accentPink};
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;

const CaseStudyDetails = () => {
  const { slug } = useParams();
  const { data, isLoading } = useCaseStudyDetail(slug);

  if (isLoading) return <PageLoader label="Loading project…" />;
  if (!data)     return <Page><Inner><p>Project not found.</p></Inner></Page>;

  const categories = (data.category || '')
    .split(',').map(c => c.trim()).filter(Boolean);

  return (
    <Page>
      <Inner>
        {/* ← BackButton */}
        <BackButton to="/case-studies" label="Back to Case Studies" />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {categories.length > 0 && (
            <CategoryRow>
              {/* ← CategoryBadge, one per category */}
              {categories.map((cat, i) => (
                <CategoryBadge key={i} category={cat} />
              ))}
            </CategoryRow>
          )}

          <Title>{data.title}</Title>
          <Summary>{data.summary}</Summary>

          <TechRow>
            {/* ← TagList replaces the manual split + map + Tag loop */}
            <TagList tags={data.tech_stack} />
          </TechRow>
        </motion.div>

        {data.thumbnail && (
          <Thumbnail
            src={data.thumbnail}
            alt={data.title}
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        )}

        {/* ← ProseContent — always rich HTML for case studies */}
        <ProseContent html={data.content} />

        <LinkRow>
          {data.github_url && (
            <LinkBtn href={data.github_url} target="_blank" rel="noreferrer">
              <Github size={15} /> GitHub
            </LinkBtn>
          )}
          {data.live_url && (
            <LinkBtn href={data.live_url} target="_blank" rel="noreferrer" className="outline">
              <ExternalLink size={15} /> Live Site
            </LinkBtn>
          )}
        </LinkRow>
      </Inner>
    </Page>
  );
};

export default CaseStudyDetails;
```


### frontend\my_portfolio\src\pages\Contact.jsx

```
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingInput, FloatingTextArea } from "../components/ui/FloatingInput";
import MagneticButton from "../components/ui/MagneticButton";
import { contactAPI } from "../services/apis";
import { Github, Linkedin, Twitter, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { personalInfo } from "../data/siteData";
import { useToast } from '../components/ui/Toast';

const SOCIALS = [
  { icon: Github,   label: "GitHub",    href: `${personalInfo.socials.github}`,   handle: "@darshan12-code" },
  { icon: Linkedin, label: "LinkedIn",  href: `${personalInfo.socials.linkedin}`, handle: "darshan-agrawal-012" },
  { icon: Twitter,  label: "Twitter",   href: `${personalInfo.socials.twitter}`,  handle: "@darshan_agrawal" },
  { icon: Mail,     label: "Email",     href: `mailto:${personalInfo.email}`,      handle: `${personalInfo.email}` },
];

const AVAILABILITY = [
  { label: "Status",    value: "Open to work",         color: "#00E89D" },
  { label: "Type",      value: "Full-time / Freelance / Contract", color: "#3B82F6" },
  { label: "Location",  value: "Remote Worldwide",      color: "#FF2D6B" },
  { label: "Response",  value: "Within 24 hours",       color: "#FF9F4A" },
];

/* ─── Component ─────────────────────────────────────── */
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await contactAPI.send(formData);
       toast.success('Message received!', "I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch {
       toast.error('Failed to send', 'Please try again or email me directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      {/* ── Page Header ── */}
      <Header>
        <HeaderInner
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {/* <Eyebrow>05 — GET IN TOUCH</Eyebrow> */}
          <H1>
            Let's Build<br />
            <GradientText>Something Great</GradientText>
          </H1>
          <HeaderSub>
            Have a project in mind, a role to fill, or just want to talk tech?
            I'm always open to new conversations.
          </HeaderSub>

          <RemoteBadge>
            <PulseDot />
            Available for remote work
          </RemoteBadge>
        </HeaderInner>
      </Header>

      {/* ── Two-col layout ── */}
      <BodyGrid>

        {/* LEFT — info panel */}
        <InfoCol
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {/* Availability cards */}
          <InfoCard>
            <InfoCardTitle>Availability</InfoCardTitle>
            <AvailList>
              {AVAILABILITY.map(({ label, value, color }) => (
                <AvailRow key={label}>
                  <AvailDot style={{ background: color }} />
                  <AvailLabel>{label}</AvailLabel>
                  <AvailValue style={{ color }}>{value}</AvailValue>
                </AvailRow>
              ))}
            </AvailList>
          </InfoCard>

          {/* Location */}
          <InfoCard>
            <InfoCardTitle>
              <MapPin size={14} style={{ marginRight: "0.4rem", verticalAlign: "middle" }} />
              Location
            </InfoCardTitle>
            <LocationText>Based in India — working globally</LocationText>
            <TimeRow>
              <Clock size={13} />
              <span id="localTime">IST (UTC+5:30)</span>
            </TimeRow>
          </InfoCard>

          {/* Socials */}
          <InfoCard>
            <InfoCardTitle>Find me online</InfoCardTitle>
            <SocialList>
              {SOCIALS.map(({ icon: Icon, label, href, handle }) => (
                <SocialItem
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noreferrer"
                >
                  <SocialIconWrap>
                    <Icon size={15} />
                  </SocialIconWrap>
                  <SocialText>
                    <SocialLabel>{label}</SocialLabel>
                    <SocialHandle>{handle}</SocialHandle>
                  </SocialText>
                  <ArrowRight size={13} className="arrow" />
                </SocialItem>
              ))}
            </SocialList>
          </InfoCard>
        </InfoCol>

        {/* RIGHT — form */}
        <FormCol
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <FormCard>
            <FormCardTitle>Send a Message</FormCardTitle>
            <FormCardSub>
              Fill in the details below and I'll reply as soon as possible.
            </FormCardSub>

            <Form onSubmit={handleSubmit}>
              <FloatingInput
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FloatingInput
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FloatingTextArea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <SubmitBtn type="submit" disabled={loading}>
                <span>{loading ? "Sending…" : "Send Message"}</span>
                {!loading && <ArrowRight size={16} />}
                {loading && <Spinner />}
              </SubmitBtn>
            </Form>
          </FormCard>
        </FormCol>
      </BodyGrid>

    </Page>
  );
};

export default Contact;

/* ─────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────── */

const Page = styled.div`
  min-height: 100vh;
  padding-bottom: 6rem;
`;

/* ── Header ── */
const Header = styled.section`
  padding: clamp(6rem, 12vh, 9rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 5vh, 4rem);
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
  position: relative;
  overflow: hidden;

  /* Radial glow behind heading */
  &::before {
    content: "";
    position: absolute;
    top: 0; right: 0;
    width: 31.25rem; height: 25rem;
    background: radial-gradient(ellipse at top right, rgba(255,45,107,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const HeaderInner = styled(motion.div)`
  max-width: 42.5rem;
`;

const Eyebrow = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gradientPinkBlue};
  margin-bottom: 1rem;
`;

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.6rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1.25rem;
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeaderSub = styled.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  max-width: 520px;
  margin-bottom: 1.75rem;
`;

const pulseDotAnim = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(1.4); }
`;

const RemoteBadge = styled.div`
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 0.55rem 1.1rem;
  font-size: 0.78rem; font-weight: 600;
  color: ${({ theme }) => theme.colors.accentGreen};
  background: rgba(0,232,157,0.07);
  border: 1px solid rgba(0,232,157,0.2);
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

const PulseDot = styled.span`
  width: 8px; height: 8px; border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentGreen};
  animation: ${pulseDotAnim} 2s ease-in-out infinite;
  flex-shrink: 0;
`;

/* ── Body grid ── */
const BodyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 2.5rem;
  padding: clamp(2.5rem, 5vh, 4rem) clamp(1.5rem, 6vw, 5rem);
  max-width: 100vw;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

/* ── Info col ── */
const InfoCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const InfoCard = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: 0 6px 24px rgba(0,0,0,0.2);
  }
`;

const InfoCardTitle = styled.h3`
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: 1rem;
`;

/* Availability rows */
const AvailList = styled.div`display: flex; flex-direction: column; gap: 0.6rem;`;

const AvailRow = styled.div`
  display: flex; align-items: center; gap: 0.6rem;
  font-size: 0.875rem;
`;

const AvailDot = styled.span`
  width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
`;

const AvailLabel = styled.span`
  color: ${({ theme }) => theme.colors.textTertiary};
  min-width: 70px; font-size: 0.82rem;
`;

const AvailValue = styled.span`
  font-weight: 600; font-size: 0.85rem;
`;

/* Location */
const LocationText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.6rem;
`;

const TimeRow = styled.div`
  display: flex; align-items: center; gap: 0.45rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

/* Socials */
const SocialList = styled.div`display: flex; flex-direction: column; gap: 0.5rem;`;

const SocialItem = styled.a`
  display: flex; align-items: center; gap: 0.85rem;
  padding: 0.65rem 0.75rem;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid transparent;
  transition: all 0.2s ease;

  .arrow { opacity: 0; transform: translateX(-4px); transition: all 0.2s; margin-left: auto; color: ${({ theme }) => theme.colors.gradientPinkBlue}; }

  &:hover {
    background: rgba(255,45,107,0.06);
    border-color: rgba(255,45,107,0.15);
    .arrow { opacity: 1; transform: translateX(0); }
  }
`;

const SocialIconWrap = styled.div`
  width: 32px; height: 32px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  color: ${({ theme }) => theme.colors.textSecondary};
  flex-shrink: 0;
`;

const SocialText = styled.div`display: flex; flex-direction: column; gap: 1px;`;
const SocialLabel = styled.span`font-size: 0.8rem; font-weight: 600; color: ${({ theme }) => theme.colors.textPrimary};`;
const SocialHandle = styled.span`font-size: 0.72rem; color: ${({ theme }) => theme.colors.textTertiary};`;

/* ── Form col ── */
const FormCol = styled(motion.div)``;

const FormCard = styled.div`
  padding: clamp(1.5rem, 4vw, 2.5rem);
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: 18px;
  position: relative;
  overflow: hidden;

  /* Pink glow top-left corner */
  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 200px; height: 200px;
    background: radial-gradient(circle at top left, rgba(255,45,107,0.06) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const FormCardTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.4rem;
  position: relative;
`;

const FormCardSub = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;
`;

/* Gradient submit button — matches global button style */
const spinAnim = keyframes`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`;
const Spinner = styled.span`
  width: 14px; height: 14px; border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  animation: ${spinAnim} 0.7s linear infinite;
`;

const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1rem;
  padding: 0.95rem 2.25rem;
  border-radius: 999px;
  border: none;
  background: linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  align-self: flex-start;

  /* Shimmer sweep on hover */
  &::after {
    content: "";
    position: absolute; inset: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.14) 50%, transparent 100%);
    transform: translateX(-100%);
    transition: transform 0.55s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 32px rgba(255,45,107,0.38), 0 4px 16px rgba(59,130,246,0.2);
    &::after { transform: translateX(100%); }
  }

  &:active { transform: translateY(0); box-shadow: none; }

  &:disabled {
    opacity: 0.65; cursor: not-allowed;
    transform: none; box-shadow: none;
  }

  @media (max-width: 480px) { align-self: stretch; }
`;

/* ── Toast ── */
const Toast = styled(motion.div)`
  position: fixed;
  bottom: 2rem; right: 2rem;
  z-index: 9999;
  display: flex; align-items: center; gap: 0.75rem;
  padding: 1rem 1.4rem;
  border-radius: 12px;
  font-size: 0.875rem; font-weight: 500;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  background: ${({ $type }) => $type === "success" ? "rgba(0,232,157,0.1)" : "rgba(239,68,68,0.1)"};
  border: 1px solid ${({ $type }) => $type === "success" ? "rgba(0,232,157,0.3)" : "rgba(239,68,68,0.3)"};
  color: ${({ $type }) => $type === "success" ? "#00e89d" : "#ef4444"};
  max-width: 360px;

  @media (max-width: 640px) {
    right: 1rem; left: 1rem; bottom: 1rem; max-width: none;
  }
`;

const ToastIcon = styled.span`
  width: 22px; height: 22px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: currentColor; color: #0D0F14;
  font-size: 0.75rem; font-weight: 800; flex-shrink: 0;
`;
```


### frontend\my_portfolio\src\pages\DemoLanding.jsx

```
import { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FlaskConical, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

/* ── same scan line animation as AdminLogin ──────────────────── */
const scanMove = keyframes`
  0%   { top: 0%;   }
  100% { top: 100%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px);  }
  50%       { transform: translateY(-6px); }
`;

/* ── layout — identical to AdminLogin ────────────────────────── */
const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.gradientHero};
`;

const Card = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 440px;
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgSecondary};
  backdrop-filter: blur(20px);
`;





const IconBox = styled(motion.div)`
  width: 64px; height: 64px;
  margin: 0 auto 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.demoGradient};
  border: 1px solid ${({ theme }) => theme.colors.demoAccentBorder};
  animation: ${float} 3s ease-in-out infinite;
`;

// Badge — use demo tokens:
const Badge = styled.span`
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 3px 9px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.demoAccentBg};
  border: 1px solid ${({ theme }) => theme.colors.demoAccentBorder2};
  color: ${({ theme }) => theme.colors.demoAccent};
`;

// CredsBox:
const CredsBox = styled.div`
  padding: 0.85rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.demoAccentBg};
  border: 1px dashed ${({ theme }) => theme.colors.demoAccentBorder};
  margin-bottom: 0.25rem;
`;

// CredsLabel:
const CredsLabel = styled.p`
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.demoAccent};
  margin: 0 0 0.5rem;
`;

// AutoFillBtn:
const AutoFillBtn = styled.button`
  font-size: 0.69rem;
  font-weight: 700;
  padding: 4px 11px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.demoAccentBorder};
  background: ${({ theme }) => theme.colors.demoAccentBg2};
  color: ${({ theme }) => theme.colors.demoAccent};
  cursor: pointer;
  transition: background ${({ theme }) => theme.transitions.fast};
  white-space: nowrap;
  &:hover { background: ${({ theme }) => theme.colors.demoAccentFocus}; }
`;

// Input focus state — use demo colors:
const Input = styled.input`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.9rem;
  outline: none;
  box-sizing: border-box;
  transition: border-color ${({ theme }) => theme.transitions.fast},
              box-shadow    ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.demoAccentBorder};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.demoAccentFocus};
  }
`;

// SubmitBtn — uses demoGradient instead of gradientPinkBlue:
const SubmitBtn = styled(motion.button)`
  width: 100%;
  padding: 0.78rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: none;
  background: ${({ theme }) => theme.colors.demoGradient};
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: box-shadow ${({ theme }) => theme.transitions.fast},
              opacity    ${({ theme }) => theme.transitions.fast};

  &:hover:not(:disabled) {
    box-shadow: 0 8px 28px ${({ theme }) => theme.colors.demoAccentGlow};
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

// ScanLine — use demoAccent instead of accentPink:
const ScanLine = styled(motion.div)`
  position: absolute;
  top: -10px;
  left: 0; right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.demoAccent},
    transparent
  );
  box-shadow:
    0 0 8px  ${({ theme }) => theme.colors.demoAccentGlow},
    0 0 16px ${({ theme }) => theme.colors.demoAccentBg};
  pointer-events: none;
`;











const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 1.75rem;
`;

/* ── glitch title — same keyframe trick as AdminLogin ─────────── */
const GlitchTitle = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  position: relative;

  &::before, &::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    opacity: 0.08;
  }
  &::before { color: #FF2D6B; transform: translate(-2px, 0); }
  &::after  { color: #3B82F6; transform: translate( 2px, 0); }

  &:hover::before { animation: glitch-clip 0.3s steps(5) infinite; }
  &:hover::after  { animation: glitch-clip 0.3s steps(5) infinite reverse; }

  @keyframes glitch-clip {
    0%  { clip-path: inset(0 0 95% 0);  }
    20% { clip-path: inset(30% 0 50% 0); }
    40% { clip-path: inset(60% 0 20% 0); }
    60% { clip-path: inset(10% 0 80% 0); }
    80% { clip-path: inset(80% 0 5% 0);  }
    100%{ clip-path: inset(0 0 95% 0);   }
  }
`;

const Subtitle = styled.p`
  font-size: 0.85rem;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

/* ── demo badge row — only difference from AdminLogin header ──── */
const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
  margin-top: 0.75rem;
`;


const CredsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const CredsVal = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
  gap: 2px;
`;


/* ── form — identical to AdminLogin ──────────────────────────── */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Field = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`;

const InputRow = styled.div`position: relative;`;



const EyeBtn = styled.button`
  position: absolute;
  right: 10px; top: 50%;
  transform: translateY(-50%);
  background: none; border: none;
  color: ${({ theme }) => theme.colors.textTertiary};
  cursor: pointer;
  display: flex; align-items: center;
  padding: 0;
  &:hover { color: ${({ theme }) => theme.colors.textSecondary}; }
`;

const ErrorBox = styled(motion.div)`
  padding: 0.7rem 0.9rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.accentDangerBg};
  border: 1px solid ${({ theme }) => theme.colors.accentDanger};
  color: ${({ theme }) => theme.colors.accentDangerLight};
  font-size: 0.83rem;
`;



const Divider = styled.div`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  margin: 0.25rem 0;
`;

const FinePrint = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  text-align: center;
  line-height: 1.55;
  margin: 0;
`;

const FinePrintLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: underline;
  text-underline-offset: 2px;
  &:hover { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

/* ── component ───────────────────────────────────────────────── */
const DEMO_EMAIL = "demo@portfoliolab.dev";
const DEMO_PASS  = "demo1234";

const DemoLanding = () => {
  const { loginAsDemo, isDemo, demoSession } = useAuth();
  const navigate = useNavigate();

  const [email,    setEmail]    = useState(DEMO_EMAIL);
  const [password, setPassword] = useState(DEMO_PASS);
  const [showPass, setShowPass] = useState(false);
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);

  // Already logged in as demo — go straight to admin
  if (isDemo && demoSession) return <Navigate to="/admin" replace />;

  const autoFill = () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASS);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await loginAsDemo(email, password);
      navigate("/admin");
    } catch {
      setError("Invalid credentials. Use the demo account details shown above.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <Card
        initial={{ scale: 0.85, opacity: 0, rotateX: 15 }}
        animate={{ scale: 1,    opacity: 1, rotateX: 0  }}
        transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ perspective: 1000 }}
      >
        <ScanLine
          initial={{ top: "0%" }}
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
        />

        <Header initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <IconBox>
            <FlaskConical size={28} color="#EDE8DC" />
          </IconBox>
          <GlitchTitle data-text="Demo Access">Demo Access</GlitchTitle>
          <Subtitle>Explore a live sandboxed admin dashboard</Subtitle>
          <BadgeRow>
            <Badge>Sandbox</Badge>
            <Badge>Full CRUD</Badge>
            <Badge>Image Upload</Badge>
            <Badge>Live Preview</Badge>
          </BadgeRow>
        </Header>

        {/* Credentials box */}
        <CredsBox>
          <CredsLabel>Demo credentials — ready to use</CredsLabel>
          <CredsRow>
            <CredsVal>
              <span>{DEMO_EMAIL}</span>
              <span>{DEMO_PASS}</span>
            </CredsVal>
            <AutoFillBtn type="button" onClick={autoFill}>
              Auto-fill ↓
            </AutoFillBtn>
          </CredsRow>
        </CredsBox>

        {error && (
          <ErrorBox
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1,  y:  0 }}
            style={{ marginBottom: "1rem", marginTop: "0.75rem" }}
          >
            {error}
          </ErrorBox>
        )}

        <Form onSubmit={handleSubmit}>
          <Field
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Label htmlFor="demo-email">Email</Label>
            <Input
              id="demo-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </Field>

          <Field
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <Label htmlFor="demo-pass">Password</Label>
            <InputRow>
              <Input
                id="demo-pass"
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <EyeBtn
                type="button"
                onClick={() => setShowPass((p) => !p)}
                aria-label="Toggle password visibility"
              >
                {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
              </EyeBtn>
            </InputRow>
          </Field>

          <SubmitBtn
            type="submit"
            disabled={loading}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "Signing in…" : <> Enter Demo <ArrowRight size={15} /> </>}
          </SubmitBtn>
        </Form>

        <Divider style={{ margin: "1.5rem 0 1rem" }} />

        <FinePrint>
          All changes are sandboxed — real portfolio data is never affected.{" "}
          <FinePrintLink to="/">View the real portfolio →</FinePrintLink>
        </FinePrint>
      </Card>
    </Page>
  );
};

export default DemoLanding;
```


### frontend\my_portfolio\src\pages\Home.jsx

```
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import SkillsMarquee from '../components/home/SkillsMarquee';
import Timeline from '../components/home/Timeline';
import Counters from '../components/home/Counters';
import FeaturedProjects from '../components/home/FeaturedProjects';
import { usePortfolioData } from '../hooks/useApiData';
import PageLoader from '../components/ui/PageLoader';


const Home = () => {
  const { data, isLoading, error } = usePortfolioData();

  if (isLoading) return <PageLoader label="Loading data..." />;
  if (error) return <PageLoader label="Loading data..." />;

  return (
    <>
      <Hero personalInfo={data.personalInfo} />
      <About personalInfo={data.personalInfo} />
      <SkillsMarquee skills={data.skills} />
      <Counters counters={data.counters} />
      <Timeline experience={data.experience} />
      <FeaturedProjects />
    </>
  );
};

export default Home;
```


### frontend\my_portfolio\src\services\apis.jsx

```
import axios from "axios";

const API_BASE =
  import.meta.env.VITE_API_URL || "https://portfolio-backend-x9am.onrender.com" || "http://127.0.0.1:5000/portfolio";

const api = axios.create({
  baseURL: API_BASE,
});

// Attach JWT token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto-refresh on 401
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      const refresh = localStorage.getItem("refresh_token");

      if (refresh) {
        try {
          const { data } = await axios.post(
            `${API_BASE}/auth/refresh`,
            {},
            { headers: { Authorization: `Bearer ${refresh}` } }
          );
          localStorage.setItem("access_token", data.access_token);
          original.headers.Authorization = `Bearer ${data.access_token}`;
          return api(original);
        } catch {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          window.location.href = "/admin/login";
        }
      }
    }

    return Promise.reject(error);
  }
);

// ====================
// AUTH API
// ====================
export const authAPI = {
  login: (email, password) => api.post("/auth/login", { email, password }),
  me: () => api.get("/auth/me"),
};

// ====================
// BLOG API
// ====================
export const blogAPI = {
  getAll: (page = 1, limit = 10) =>
    api.get("/blogs", { params: { page, limit } }),

  getBySlug: (slug) => api.get(`/blogs/${slug}`),

  // ── Admin scoped (returns only demo data when called with demo JWT) ──
  adminGetAll: () => api.get("/blogs/admin"),

  create: (data) => api.post("/blogs", data),

  update: (id, data) => api.put(`/blogs/${id}`, data),

  delete: (id) => api.delete(`/blogs/${id}`),

  // ── Demo preview endpoints ──────────────────────────────────────────
  getDemoPreview: (page = 1, limit = 100) =>
    api.get("/blogs/demo-preview", { params: { page, limit } }),

  getDemoPreviewBySlug: (slug) => api.get(`/blogs/demo-preview/${slug}`),
};

// ====================
// CASE STUDY API
// ====================
export const caseStudyAPI = {
  getFeatured: () => api.get("/case-studies/featured"),

  getAll: (page = 1, limit = 10) =>
    api.get("/case-studies", { params: { page, limit } }),

  getBySlug: (slug) => api.get(`/case-studies/${slug}`),

  // ── Admin scoped ────────────────────────────────────────────────────
  adminGetAll: () => api.get("/case-studies/admin"),

  create: (data) => api.post("/case-studies", data),

  update: (id, data) => api.put(`/case-studies/${id}`, data),

  delete: (id) => api.delete(`/case-studies/${id}`),

  // ── Demo preview endpoints ──────────────────────────────────────────
  getDemoPreview: () => api.get("/case-studies/demo-preview"),

  getDemoPreviewBySlug: (slug) => api.get(`/case-studies/demo-preview/${slug}`),
};

// ====================
// CONTACT API
// ====================
export const contactAPI = {
  send: (data) => api.post("/contact", data),

  // Returns only demo messages when called with demo JWT (backend scopes it)
  getAll: (page = 1, limit = 10) =>
    api.get("/contact", { params: { page, limit } }),
};

// ====================
// UPLOAD API
// ====================
export const uploadAPI = {
  // Demo uploads → backend routes to portfolio/demo-content on Cloudinary
  // Real uploads → portfolio/content — all scoping happens server-side via JWT
  uploadImages: (formData) => api.post("/upload", formData),

  uploadMedia: (file, type) => {
    const form = new FormData();
    form.append(type === "video" ? "videos" : "images", file);
    return api.post("/upload", form);
  },
};

// ====================
// PORTFOLIO API
// ====================
export const portfolioAPI = {
  getAll: () => api.get("/portfolio-data/data"),
};

export default api;
```


### frontend\my_portfolio\src\services\queryClient.jsx

```
// src/services/queryClient.jsx
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime:            0,        // always stale — refetch on mount
      gcTime:               15 * 60 * 1000, // keep cache in memory 15 min (instant nav)
      refetchOnMount:       true,     // ← was false, this was the bug
      refetchOnWindowFocus: false,    // no need to refetch on tab switch
      refetchOnReconnect:   "always",
      retry:                1,
    },
  },
});

export default queryClient;
```


### frontend\my_portfolio\src\styles\globalStyles.jsx

```
import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    max-width: 100%;
    padding: 0;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    overflow-x: hidden;
    line-height: 1.6;
  }

  ::selection {
    background: rgba(255, 45, 107, 0.3);
    color: #fff;
  }

  ::-webkit-scrollbar { width: 0.375rem; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.colors.bgPrimary}; }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.1875rem;
  }
  ::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }

  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }

  /* Remove all default focus outlines — we handle them below */
  :focus { outline: none; }
  :focus:not(:focus-visible) { outline: none; box-shadow: none; }

  
  //  :focus-visible {
  //   outline: none;
  //   border-radius: 4px;
  //   box-shadow:
  //     0 0 0 2px ${({ theme }) => theme.colors.accentBlue},
  //     0 0 0 5px ${({ theme }) => theme.colors.accentBlueBg};
  // }

  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: none;
    border-radius: 6px;
    box-shadow:
      0 0 0 2px ${({ theme }) => theme.colors.accentBlue},
      0 0 0 5px ${({ theme }) => theme.colors.accentBlueBg};
  }
`;
export default GlobalStyles;
```


### frontend\my_portfolio\src\styles\theme.js

```
// src/styles/theme.js

const darkColors = {
  // ── Backgrounds ──────────────────────────────────────────────
  bgPrimary:            '#0D0F14',
  bgSecondary:          '#12141A',
  bgTertiary:           '#181B23',
  bgGlass:              'rgba(13, 15, 20, 0.72)',
  bgGlassLight:         'rgba(255, 255, 255, 0.04)',

  // ── Text ─────────────────────────────────────────────────────
  textPrimary:          '#EAEDF3',
  textSecondary:        '#9BA1B0',
  textTertiary:         '#5C6170',
  textWhite:            '#FFFFFF',

  // ── Accent – Navy ────────────────────────────────────────────
  accentNavy:           '#1E3A5F',
  accentNavyLight:      '#2A5A8F',

  // ── Accent – Pink / Gradient ──────────────────────────────────
  accentPink:                  '#FF2D6B',          // raw hex, use for text/icon
  accentPinkGlow:              'rgba(255, 45, 107, 0.35)',   // hover shadows
  accentPinkFocus:             'rgba(255, 45, 107, 0.10)',   // focus rings, hover overlays
  accentPinkSubtleBg:          'rgba(255, 45, 107, 0.09)',   // chip / badge backgrounds
  accentPinkSubtleBorder:      'rgba(255, 45, 107, 0.18)',   // chip / badge borders
  accentPinkSubtleBg2:         'rgba(255, 45, 107, 0.08)',   // slightly lighter variant (preview badge)
  accentPinkSubtleBorder2:     'rgba(255, 45, 107, 0.20)',   // preview badge border
  accentPinkRingShadow:        'rgba(255, 45, 107, 0.06)',   // modal card ring shadow
  accentPinkSidebarBorder:     'rgba(255, 45, 107, 0.28)',   // sidebar active item border
  accentPinkSidebarBg:         'rgba(255, 45, 107, 0.07)',   // sidebar active item bg

  // ── Accent – Blue ─────────────────────────────────────────────
  accentBlue:           '#3B82F6',
  accentBlueBg:         'rgba(59, 130, 246, 0.12)',          // preview btn bg
  accentBlueBorder:     'rgba(59, 130, 246, 0.25)',          // preview btn border
  accentBlueBgHover:    'rgba(59, 130, 246, 0.20)',          // preview btn hover bg

  // ── Accent – Green ────────────────────────────────────────────
  accentGreen:          '#00E89D',
  accentGreenGlow:      'rgba(0, 232, 157, 0.25)',

  // ── Accent – Coral / Crimson / Danger ─────────────────────────
  accentCoral:          '#FF6B4A',
  accentCrimson:        '#DC2626',
  accentDanger:         '#EF4444',              // icon danger color (brighter red)
  accentDangerLight:    '#FF6060',              // icon danger hover color
  accentDangerBg:       'rgba(239, 68, 68, 0.12)',    // danger icon btn bg
  accentDangerBgHover:  'rgba(239, 68, 68, 0.22)',    // danger icon btn hover bg

  // ── Borders ───────────────────────────────────────────────────
  borderDefault:        'rgba(255, 255, 255, 0.06)',
  borderHover:          'rgba(255, 255, 255, 0.12)',
  borderAccent:         'rgba(255, 45, 107, 0.40)',   // strong pink border (form focus etc.)
  borderSubtle:         'rgba(255, 255, 255, 0.08)',  // cancel btn border / modal btn

  // ── Surfaces (alpha whites for glass / inactive elements) ─────
  surfaceSubtle:        'rgba(255, 255, 255, 0.05)',  // cancel btn bg, mobile tab active press
  surfaceLight:         'rgba(255, 255, 255, 0.10)',  // toggle track, radio chip inactive

  // ── Overlay ───────────────────────────────────────────────────
  overlayBg:            'rgba(0, 0, 0, 0.70)',        // modal backdrop

  // ── Shadows ───────────────────────────────────────────────────
  shadowCard:           '0 4px 24px rgba(0, 0, 0, 0.4)',
  shadowCardHover:      '0 8px 32px rgba(0, 0, 0, 0.25)',   // card hover (was inline)
  shadowCardStrong:     '0 12px 40px rgba(0, 0, 0, 0.6)',   // original shadowCardHover
  shadowModal:          '0 32px 80px rgba(0, 0, 0, 0.55)',  // modal card shadow
  shadowModalPreview:   '0 32px 80px rgba(0, 0, 0, 0.60)',  // preview modal shadow
  shadowGlowPink:       '0 0 40px rgba(255, 45, 107, 0.2)',
  shadowGlowGreen:      '0 0 40px rgba(0, 232, 157, 0.15)',
  shadowGlowNavy:       '0 0 40px rgba(30, 58, 95, 0.3)',
  shadowPinkHover:      '0 8px 28px rgba(255, 45, 107, 0.35)',  // create btn hover
  shadowBlueBtnHover:   '0 6px 20px rgba(255, 45, 107, 0.35)',  // save btn hover (pink-blue)

  // ── Pre / Code block ──────────────────────────────────────────
  preBg:                'rgba(0, 0, 0, 0.40)',        // <pre> background in preview

  // ── Gradients ─────────────────────────────────────────────────
  gradientPinkBlue:     'linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%)',
  gradientHero:         'linear-gradient(135deg, #0D0F14 0%, #1E3A5F 50%, #0D0F14 100%)',
  gradientCard:         'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
  gradientNavy:         'linear-gradient(180deg, #1E3A5F 0%, #0D0F14 100%)',
  gradientText:         'linear-gradient(90deg, #FF2D6B, #FF6B4A, #00E89D, #3B82F6)',
  gradientRing:         'conic-gradient(#FF2D6B, #FF6B4A, #00E89D, #3B82F6, #FF2D6B)',
  gradientShimmer:      'linear-gradient(90deg, #FF2D6B 0%, #3B82F6 50%, #FF2D6B 100%)',  // card shimmer bar

  // ── Decorative ────────────────────────────────────────────────
  inkStroke:            'rgba(255, 255, 255, 0.03)',
  comicPanel:           'rgba(255, 255, 255, 0.02)',
  codeGradientBg:     'linear-gradient(90deg, rgba(255,45,107,0.22) 0%, rgba(59,130,246,0.22) 100%)',
  codeGradientBorder: 'rgba(255, 45, 107, 0.28)',
  codeGhostBg:        'rgba(255, 255, 255, 0.06)',
  codeGhostBorder:    'rgba(255, 255, 255, 0.10)',
  codeText:          '#fff',
  preBg:          '#1A1A2E',       
  preBorder:      'rgba(255,255,255,0.08)',
  preText:        '#E2E8F0',        
  preTextMuted:   '#94A3B8',       

  demoAccent:         '#F97316',
demoAccentLight:    '#FB923C',
demoAccentGlow:     'rgba(249,115,22,0.20)',
demoAccentBg:       'rgba(249,115,22,0.09)',
demoAccentBg2:      'rgba(249,115,22,0.16)',
demoAccentBorder:   'rgba(249,115,22,0.28)',
demoAccentBorder2:  'rgba(249,115,22,0.18)',
demoAccentFocus:    'rgba(249,115,22,0.12)',
demoGradient:       'linear-gradient(135deg, #F97316 0%, #EF4444 100%)',
demoGradientSoft:   'linear-gradient(90deg, rgba(249,115,22,0.15) 0%, rgba(239,68,68,0.10) 100%)',

// darkColors — keep as is or slightly boost:
// techGradientSubtle: 'linear-gradient(90deg, rgba(6,182,212,0.14) 0%, rgba(139,92,246,0.14) 50%, rgba(236,72,153,0.14) 100%)',
// techBorder:         'rgba(139, 92, 246, 0.35)',
// techText:           '#C4B5FD',


techGradient:       'linear-gradient(90deg, #06B6D4 0%, #8B5CF6 50%, #EC4899 100%)',
techGradientSubtle: 'linear-gradient(90deg, rgba(6,182,212,0.14) 0%, rgba(139,92,246,0.14) 50%, rgba(236,72,153,0.14) 100%)',
techBorder:         'rgba(139, 92, 246, 0.35)',
};

const lightColors = {
  // ── Backgrounds ──────────────────────────────────────────────
  bgPrimary:            '#F5F0E8',
  bgSecondary:          '#EDE8DC',
  bgTertiary:           '#E0D9CC',
  bgGlass:              'rgba(245, 240, 232, 0.85)',
  bgGlassLight:         'rgba(0, 0, 0, 0.03)',

  // ── Text ─────────────────────────────────────────────────────
  textPrimary:          '#1A1A2E',
  textSecondary:        '#3D3D5C',
  textTertiary:         '#7A7A99',
  textWhite:            '#1A1A2E',

  // ── Accent – Navy ────────────────────────────────────────────
  accentNavy:           '#1E3A5F',
  accentNavyLight:      '#2A5A8F',

  // ── Accent – Pink / Gradient ──────────────────────────────────
  accentPink:                  '#E8174A',
  accentPinkGlow:              'rgba(232, 23, 74, 0.20)',
  accentPinkFocus:             'rgba(232, 23, 74, 0.10)',
  accentPinkSubtleBg:          'rgba(232, 23, 74, 0.07)',
  accentPinkSubtleBorder:      'rgba(232, 23, 74, 0.14)',
  accentPinkSubtleBg2:         'rgba(232, 23, 74, 0.06)',
  accentPinkSubtleBorder2:     'rgba(232, 23, 74, 0.16)',
  accentPinkRingShadow:        'rgba(232, 23, 74, 0.05)',
  accentPinkSidebarBorder:     'rgba(232, 23, 74, 0.22)',
  accentPinkSidebarBg:         'rgba(232, 23, 74, 0.06)',

  // ── Accent – Blue ─────────────────────────────────────────────
  accentBlue:           '#1D4ED8',
  accentBlueBg:         'rgba(29, 78, 216, 0.10)',
  accentBlueBorder:     'rgba(29, 78, 216, 0.22)',
  accentBlueBgHover:    'rgba(29, 78, 216, 0.18)',

  // ── Accent – Green ────────────────────────────────────────────
  accentGreen:          '#007A52',
  accentGreenGlow:      'rgba(0, 122, 82, 0.15)',

  // ── Accent – Coral / Crimson / Danger ─────────────────────────
  accentCoral:          '#D44D28',
  accentCrimson:        '#B91C1C',
  accentDanger:         '#DC2626',
  accentDangerLight:    '#EF4444',
  accentDangerBg:       'rgba(220, 38, 38, 0.10)',
  accentDangerBgHover:  'rgba(220, 38, 38, 0.18)',

  // ── Borders ───────────────────────────────────────────────────
  borderDefault:        'rgba(0, 0, 0, 0.08)',
  borderHover:          'rgba(0, 0, 0, 0.16)',
  borderAccent:         'rgba(232, 23, 74, 0.30)',
  borderSubtle:         'rgba(0, 0, 0, 0.10)',

  // ── Surfaces ─────────────────────────────────────────────────
  surfaceSubtle:        'rgba(0, 0, 0, 0.04)',
  surfaceLight:         'rgba(0, 0, 0, 0.06)',

  // ── Overlay ───────────────────────────────────────────────────
  overlayBg:            'rgba(0, 0, 0, 0.50)',

  // ── Shadows ───────────────────────────────────────────────────
  shadowCard:           '0 4px 24px rgba(0, 0, 0, 0.10)',
  shadowCardHover:      '0 8px 32px rgba(0, 0, 0, 0.14)',
  shadowCardStrong:     '0 12px 40px rgba(0, 0, 0, 0.18)',
  shadowModal:          '0 32px 80px rgba(0, 0, 0, 0.20)',
  shadowModalPreview:   '0 32px 80px rgba(0, 0, 0, 0.24)',
  shadowGlowPink:       '0 0 40px rgba(232, 23, 74, 0.12)',
  shadowGlowGreen:      '0 0 30px rgba(0, 122, 82, 0.10)',
  shadowGlowNavy:       '0 0 40px rgba(30, 58, 95, 0.15)',
  shadowPinkHover:      '0 8px 28px rgba(232, 23, 74, 0.22)',
  shadowBlueBtnHover:   '0 6px 20px rgba(232, 23, 74, 0.22)',

  // ── Pre / Code block ──────────────────────────────────────────
  preBg:                'rgba(0, 0, 0, 0.06)',

  // ── Gradients ─────────────────────────────────────────────────
  gradientPinkBlue:     'linear-gradient(90deg, #E8174A 0%, #1D4ED8 100%)',
  gradientHero:         'linear-gradient(135deg, #F5F0E8 0%, #C8D8EC 50%, #F5F0E8 100%)',
  gradientCard:         'linear-gradient(145deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
  gradientNavy:         'linear-gradient(180deg, #1E3A5F 0%, #F5F0E8 100%)',
  gradientText:         'linear-gradient(90deg, #E8174A, #D44D28, #007A52, #1D4ED8)',
  gradientRing:         'conic-gradient(#E8174A, #D44D28, #007A52, #1D4ED8, #E8174A)',
  gradientShimmer:      'linear-gradient(90deg, #E8174A 0%, #1D4ED8 50%, #E8174A 100%)',

  // ── Decorative ────────────────────────────────────────────────
  inkStroke:            'rgba(0, 0, 0, 0.04)',
  comicPanel:           'rgba(0, 0, 0, 0.02)',

  codeGradientBg:     'linear-gradient(90deg, rgba(232,23,74,0.13) 0%, rgba(29,78,216,0.13) 100%)',
  codeGradientBorder: 'rgba(232, 23, 74, 0.22)',
  codeGhostBg:        'rgba(0, 0, 0, 0.06)',
  codeGhostBorder:    'rgba(0, 0, 0, 0.12)',
  codeText:          '#1A1A2E',
  preBg:          '#F1F0EC',        
  preBorder:      'rgba(0,0,0,0.10)',
  preText:        '#1A1A2E',       
  preTextMuted:   '#4A5568',


//demo
demoAccent:         '#EA580C',
demoAccentLight:    '#F97316',
demoAccentGlow:     'rgba(234,88,12,0.18)',
demoAccentBg:       'rgba(234,88,12,0.07)',
demoAccentBg2:      'rgba(234,88,12,0.13)',
demoAccentBorder:   'rgba(234,88,12,0.25)',
demoAccentBorder2:  'rgba(234,88,12,0.16)',
demoAccentFocus:    'rgba(234,88,12,0.10)',
demoGradient:       'linear-gradient(135deg, #EA580C 0%, #DC2626 100%)',
demoGradientSoft:   'linear-gradient(90deg, rgba(234,88,12,0.12) 0%, rgba(220,38,38,0.08) 100%)',



// light:

// techGradientSubtle: 'linear-gradient(90deg, rgba(6,182,212,0.15) 0%, rgba(139,92,246,0.15) 50%, rgba(236,72,153,0.15) 100%)',
// techBorder:         'rgba(139, 92, 246, 0.40)',
// techText:           '#5B21B6',

// techGradientSubtle: 'linear-gradient(90deg, #E0F7FA 0%, #EDE9FE 50%, #FCE7F3 100%)',
// techBorder:         '#A78BFA',  // solid purple border
// techText:           '#5B21B6',  // deep purple text


techGradient:       'linear-gradient(90deg, #0891B2 0%, #7C3AED 50%, #DB2777 100%)',
techGradientSubtle: 'linear-gradient(90deg, #E0F7FA 0%, #EDE9FE 50%, #FCE7F3 100%)',
techBorder:         '#A78BFA',
};

export const darkTheme = {
  colors: darkColors,
  mode: 'dark',
  fonts: {
    heading: "'Clash Display', sans-serif",
    body:    "'DM Sans', sans-serif",
    mono:    "'JetBrains Mono', monospace",
  },
  fontSizes: {
    heroName: 'clamp(3rem, 8vw, 7rem)',
    heroRole: 'clamp(1rem, 2.5vw, 1.5rem)',
    h1:       'clamp(2rem, 4vw, 3.5rem)',
    h2:       'clamp(1.5rem, 3vw, 2.5rem)',
    h3:       '1.25rem',
    body:     '1rem',
    small:    '0.875rem',
    xs:       '0.75rem',
  },
  spacing: {
    xs:      '0.5rem',
    sm:      '1rem',
    md:      '1.5rem',
    lg:      '2rem',
    xl:      '3rem',
    xxl:     '5rem',
    section: 'clamp(4rem, 10vh, 8rem)',
  },
  borderRadius: {
    sm:   '0.375rem',
    md:   '0.75rem',
    lg:   '1.25rem',
    xl:   '1.75rem',
    full: '624.9375rem',
  },
  transitions: {
    fast:    '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    default: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    smooth:  '0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    slow:    '0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    spring:  '0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  zIndex: {
    behind:    -1,
    base:       0,
    card:      10,
    navbar:   100,
    modal:    200,
    overlay:  9999,   // ← add this
    toast:    10000,  
    scrollbar: 400,
  },
};

export const lightTheme = {
  ...darkTheme,
  colors: lightColors,
  mode: 'light',
};


// Keep backward compat
export const theme = darkTheme;
```


### frontend\my_portfolio\src\utils\categoryColors.js

```
// src/utils/categoryColors.js

const CATEGORY_MAP = {
  dark: {
    // ── Blog ──────────────────────────────────────────────────
    'tutorial':    { bg: 'rgba(59,130,246,0.12)',   border: 'rgba(59,130,246,0.28)',   text: '#60A5FA' },
    'opinion':     { bg: 'rgba(255,107,74,0.12)',   border: 'rgba(255,107,74,0.28)',   text: '#FF6B4A' },
    'deep-dive':   { bg: 'rgba(0,232,157,0.10)',    border: 'rgba(0,232,157,0.25)',    text: '#00E89D' },
    'career':      { bg: 'rgba(255,45,107,0.12)',   border: 'rgba(255,45,107,0.28)',   text: '#FF2D6B' },
    'technology':  { bg: 'rgba(139,92,246,0.12)',   border: 'rgba(139,92,246,0.28)',   text: '#A78BFA' },
    'article':     { bg: 'rgba(59,130,246,0.12)',   border: 'rgba(59,130,246,0.28)',   text: '#60A5FA' },
    // ── Case Study ────────────────────────────────────────────
    'fullstack':   { bg: 'rgba(255,45,107,0.12)',   border: 'rgba(255,45,107,0.28)',   text: '#FF2D6B' },
    'frontend':    { bg: 'rgba(59,130,246,0.12)',   border: 'rgba(59,130,246,0.28)',   text: '#60A5FA' },
    'backend':     { bg: 'rgba(0,232,157,0.10)',    border: 'rgba(0,232,157,0.25)',    text: '#00E89D' },
    'data':        { bg: 'rgba(250,204,21,0.10)',   border: 'rgba(250,204,21,0.22)',   text: '#FCD34D' },
    'ml':          { bg: 'rgba(139,92,246,0.12)',   border: 'rgba(139,92,246,0.28)',   text: '#A78BFA' },
    'devops':      { bg: 'rgba(255,107,74,0.12)',   border: 'rgba(255,107,74,0.28)',   text: '#FF6B4A' },
    'database':    { bg: 'rgba(0,232,157,0.10)',    border: 'rgba(0,232,157,0.25)',    text: '#00E89D' },
    'case study':  { bg: 'rgba(139,92,246,0.12)',   border: 'rgba(139,92,246,0.28)',   text: '#A78BFA' },
  },
  light: {
    // ── Blog ──────────────────────────────────────────────────
    'tutorial':    { bg: 'rgba(29,78,216,0.08)',    border: 'rgba(29,78,216,0.20)',    text: '#1D4ED8' },
    'opinion':     { bg: 'rgba(212,68,40,0.08)',    border: 'rgba(212,68,40,0.20)',    text: '#D44D28' },
    'deep-dive':   { bg: 'rgba(0,122,82,0.08)',     border: 'rgba(0,122,82,0.20)',     text: '#007A52' },
    'career':      { bg: 'rgba(232,23,74,0.08)',    border: 'rgba(232,23,74,0.20)',    text: '#C0143C' },
    'technology':  { bg: 'rgba(109,40,217,0.08)',   border: 'rgba(109,40,217,0.20)',   text: '#6D28D9' },
    'article':     { bg: 'rgba(29,78,216,0.08)',    border: 'rgba(29,78,216,0.20)',    text: '#1D4ED8' },
    // ── Case Study ────────────────────────────────────────────
    'fullstack':   { bg: 'rgba(232,23,74,0.08)',    border: 'rgba(232,23,74,0.20)',    text: '#C0143C' },
    'frontend':    { bg: 'rgba(29,78,216,0.08)',    border: 'rgba(29,78,216,0.20)',    text: '#1D4ED8' },
    'backend':     { bg: 'rgba(0,122,82,0.08)',     border: 'rgba(0,122,82,0.20)',     text: '#007A52' },
    'data':        { bg: 'rgba(180,137,0,0.08)',    border: 'rgba(180,137,0,0.20)',    text: '#92700A' },
    'ml':          { bg: 'rgba(109,40,217,0.08)',   border: 'rgba(109,40,217,0.20)',   text: '#6D28D9' },
    'devops':      { bg: 'rgba(212,68,40,0.08)',    border: 'rgba(212,68,40,0.20)',    text: '#D44D28' },
    'database':    { bg: 'rgba(0,122,82,0.08)',     border: 'rgba(0,122,82,0.20)',     text: '#007A52' },
    'case study':  { bg: 'rgba(109,40,217,0.08)',   border: 'rgba(109,40,217,0.20)',   text: '#6D28D9' },
  },
};

const FALLBACK = {
  dark:  { bg: 'rgba(255, 255, 255, 0.04)', border: 'rgba(255,255,255,0.12)', text: '#9BA1B0' },
  light: { bg: 'rgba(0,0,0,0.06)',       border: 'rgba(0,0,0,0.12)',       text: '#3D3D5C' },
};

// mode comes from theme.mode — 'dark' | 'light'
export const getCategoryColor = (category = '', mode = 'dark') => {
  const key = category.toLowerCase().trim().replace(/\s+/g, '-');
  return CATEGORY_MAP[mode]?.[key] ?? FALLBACK[mode];
};
```


### frontend\my_portfolio\src\utils\helpers.js

```
// src/utils/helpers.js
export const parseDate = (dateStr) => {
  if (!dateStr) return null;
  // Normalize space separator to T (handles old format from DB)
  const normalized = dateStr.replace(' ', 'T');
  return new Date(normalized);
};

export const formatDate = (dateStr) => {
  const d = parseDate(dateStr);
  if (!d || isNaN(d)) return '—';
  return d.toLocaleDateString('en-IN', {
    day:      '2-digit',
    month:    'short',
    year:     'numeric',
    timeZone: 'Asia/Kolkata', // ← always show in IST regardless of viewer's locale
  });
};

export const formatDateTime = (dateStr) => {
  const d = parseDate(dateStr);
  if (!d || isNaN(d)) return '—';
  return d.toLocaleString('en-IN', {
    day:      '2-digit',
    month:    'short',
    year:     'numeric',
    hour:     '2-digit',
    minute:   '2-digit',
    hour12:   true,
    timeZone: 'Asia/Kolkata', // ← IST always
  });
};
```

