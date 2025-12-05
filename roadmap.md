# WFN — End-to-End Roadmap With Checkpoints & Stage Reports

## Project Overview
**WFN (Worldwide Football News)** is a high-performance, real-time football media platform.
**Goal:** Create a personalized, elite-speed, and visually stunning football experience.
**Tech Stack:** Next.js 15, React 19, TailwindCSS, Node.js/Next.js API, SSE/Polling, PostgreSQL, Redis, Vercel.

---

## 🗺️ Roadmap Phases

### 🏁 Phase 0: Initialization & Foundation (Current)
**Goal:** Set up the project structure, development environment, and core design system.
- [x] **0.1 Project Setup**
    - Initialize Next.js 15 App (App Router).
    - Configure TailwindCSS v4 (or v3.4 with v4 prep).
    - Setup ESLint, Prettier, Husky.
    - Create folder structure (`/frontend`, `/backend`, `/services`, etc. mapped to Next.js structure).
- [x] **0.2 Design System Foundation**
    - Define color palette (Dark mode first, premium feel).
    - Setup typography (Inter/Outfit).
    - Create base UI components (Button, Card, Badge, Input).
- [x] **0.3 CI/CD Setup**
    - Initial Vercel Deployment.
    - Setup GitHub Actions (Lint/Test).

**🚦 Checkpoint 0:**
- [x] Repo initialized.
- [x] Local dev server running.
- [x] Basic "Hello World" with correct fonts/colors.
- [x] **Stage Report 0 Generated.**

---

### 🏗️ Phase 1: Data Layer & Architecture
**Goal:** Establish the database, authentication, and data fetching strategies.
- [x] **1.1 Database Design**
    - Schema for `Users`, `Teams`, `Leagues`, `Matches`, `Players`, `News`.
    - Setup PostgreSQL (Supabase/PlanetScale).
    - Setup ORM (Prisma/Drizzle).
- [x] **1.2 Authentication**
    - Implement Auth (NextAuth/Supabase Auth).
    - User Onboarding Flow (Select fav teams/leagues).
- [x] **1.3 External API Integration Strategy**
    - Define interfaces for Football Data Providers (API-Football/SportMonks).
    - Create mock data seeders for development.

**🚦 Checkpoint 1:**
- [x] DB Schema applied.
- [x] Users can sign up/login.
- [x] Seed data populated.
- [x] **Stage Report 1 Generated.**

---

### ⚡ Phase 2: Real-Time Engine & Backend
**Goal:** Build the hybrid polling/SSE system for live scores.
- [x] **2.1 Live Score Service**
    - Implement Polling for general matches.
    - Implement SSE for "High Interest" matches.
- [x] **2.2 Backend API Routes**
    - `/api/matches/live`
    - `/api/news/latest`
    - `/api/user/feed`
- [x] **2.3 Caching Layer**
    - Setup Redis for caching live scores.
    - Implement ISR revalidation strategies.

**🚦 Checkpoint 2:**
- [x] Real-time updates working in isolation.
- [x] API endpoints returning correct data.
- [x] Cache hits verified.
- [x] **Stage Report 2 Generated.**

---

### 🎨 Phase 3: Frontend Core & Features (Part 1)
**Goal:** Build the main user interfaces and the "Personalized Universe".
- [ ] **3.1 Global Layout**
    - Responsive Navigation (Mobile Bottom Bar, Desktop Sidebar).
    - Quick Search overlay.
- [ ] **3.2 Homepage (Personalized)**
    - "Tonight for You" widget.
    - News Feed (Masonry/Grid).
    - Live Score Ticker.
- [ ] **3.3 Match Centre**
    - Header (Score, Time, Status).
    - Momentum Graph (Recharts/Visx).
    - Live Commentary Feed.

**🚦 Checkpoint 3:**
- [ ] Homepage renders with personalized data.
- [ ] Match Centre visualizes dummy live data.
- [ ] Responsive design verified on Mobile/Desktop.
- [ ] **Stage Report 3 Generated.**

---

### 🚀 Phase 4: Frontend Features (Part 2) & Content
**Goal:** Deep dive content, stats, and community.
- [ ] **4.1 League & Team Pages**
    - Standings Tables (Visual cards).
    - Fixtures lists.
- [ ] **4.2 Player Profiles**
    - "Smart Stats" visualization (Hot/Cold icons).
    - Career history.
- [ ] **4.3 Content & Community**
    - "Explainer" article layout.
    - "Question of the Day" component.
    - Comments section (Read-only top comments).

**🚦 Checkpoint 4:**
- [ ] All major pages implemented.
- [ ] Navigation flows smooth.
- [ ] **Stage Report 4 Generated.**

---

### 🏎️ Phase 5: Performance & Polish
**Goal:** Hit Core Web Vitals Gold Standard.
- [ ] **5.1 Optimization**
    - Image optimization (Next/Image).
    - Font optimization.
    - Bundle analysis & splitting.
- [ ] **5.2 SEO**
    - Dynamic Metadata generation.
    - Sitemap & Robots.txt.
    - Structured Data (JSON-LD).
- [ ] **5.3 Final UX Polish**
    - Micro-animations (Framer Motion).
    - Loading skeletons.
    - Error boundaries.

**🚦 Checkpoint 5:**
- [ ] Lighthouse Score > 95.
- [ ] LCP < 2.5s, INP < 200ms.
- [ ] **Stage Report 5 Generated.**

---

### 🚢 Phase 6: Deployment & Handover
**Goal:** Go live.
- [ ] **6.1 Production Build**
    - Final environment variable check.
    - Database migration on prod.
- [ ] **6.2 Deployment**
    - Deploy to Vercel.
    - Domain configuration.
- [ ] **6.3 Documentation**
    - API Docs.
    - Architecture diagrams.

**🚦 Final Checkpoint:**
- [ ] Site is Live.
- [ ] All features operational.
- [ ] **Final Project Report.**

---

## 📂 Project Structure Plan

```
/
├── .github/              # CI/CD workflows
├── .vscode/              # VSCode settings
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── (auth)/       # Auth routes
│   │   ├── (main)/       # Main app routes
│   │   ├── api/          # API Routes
│   │   └── layout.tsx    # Root layout
│   ├── components/
│   │   ├── ui/           # Base UI components (Button, etc.)
│   │   ├── features/     # Feature-specific components (MatchCard, etc.)
│   │   └── layout/       # Layout components (Navbar, etc.)
│   ├── lib/              # Utilities, DB clients, constants
│   ├── hooks/            # Custom React hooks
│   ├── services/         # Business logic & external API calls
│   ├── store/            # State management (Zustand/Context)
│   ├── types/            # TypeScript definitions
│   └── styles/           # Global styles & Tailwind config
├── prisma/               # Database schema (if using Prisma)
├── docs/                 # Documentation
├── next.config.ts        # Next.js config
├── tailwind.config.ts    # Tailwind config
└── package.json
```
