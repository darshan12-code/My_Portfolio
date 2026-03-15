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