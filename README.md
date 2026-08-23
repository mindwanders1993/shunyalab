# 🌌 ShunyaLabs (शून्य Labs) — Tech Consulting Website

> **"From Zero to Infinite Architecture: Engineering Scalable SaaS, AI, and Autonomous Systems."**

Welcome to the official web repository for **ShunyaLabs** — a modern tech consultancy and venture studio operating on **Teal Organizational** principles.

---

## 🏛️ About ShunyaLabs

*Shunya* (शून्य / Zero) represents the foundational void from which all complex architectures arise.

We partner with fast-growing startups and local enterprises to deliver:
1. **Bespoke B2B SaaS Architecture:** High-throughput microservices, multi-agent frameworks, and scalable cloud platforms.
2. **MSME Digital Growth Engines:** Hyper-local search domination (Google Business Profile SEO), high-conversion web storefronts, and AI-assisted WhatsApp CRM workflows.
3. **Autonomous Engineering Units:** Direct collaboration with lead system architects — zero middle-management overhead.

---

## 🚀 Quick Start: Run with Docker

You can run the ShunyaLabs consulting website using Docker Compose:

```bash
docker compose up -d --build
```

Access the website at: **[http://localhost:3010](http://localhost:3010)**

---

## 💻 Local Development (Without Docker)

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Next.js Development Server
```bash
pnpm dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 3. Production Build & Test
```bash
pnpm build
pnpm start
```

---

## 📁 Repository Structure

```
shunyalabs/
├── Dockerfile                   # Production Node 22 / Next.js Dockerfile
├── docker-compose.yml           # Single-command Docker runner
├── package.json                 # Standalone Next.js package config
├── tailwind.config.ts           # Custom Teal design system tokens
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Global layout & metadata
│   │   ├── page.tsx             # Main consulting landing page
│   │   ├── globals.css          # Glassmorphic utilities & animations
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts     # Serverless project inquiry API endpoint
│   ├── components/
│   │   ├── Navbar.tsx           # Frosted glass navigation with brand glyph [ 0 ]
│   │   ├── Hero.tsx             # Headline, live ticker & terminal preview
│   │   ├── Philosophy.tsx       # Frederic Laloux Teal organization pillars
│   │   ├── Services.tsx         # 3-column service capability matrix
│   │   ├── Portfolio.tsx        # Case studies (Hopping Cars, KaizenCodes)
│   │   ├── Team.tsx             # Core autonomous engineering team
│   │   ├── Contact.tsx          # Direct inquiry form & WhatsApp click-to-chat
│   │   └── Footer.tsx           # Studio manifesto & links
│   └── lib/
│       └── utils.ts             # Tailwind class merging utilities
└── docs/                        # Strategic & business documentation suite
```

---

*Authored by the ShunyaLabs Engineering & Strategy Team — August 2026.*
