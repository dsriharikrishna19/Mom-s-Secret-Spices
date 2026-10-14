# Mom's Secret Spices

Premium Indian cooking experience website with 3D AI cooking companion.

## 🚀 Quick Start

```bash
npm run dev          # Start dev server at http://localhost:3001
npm run build        # Production build
npm run lint         # Check code quality
```

## 📚 Documentation

All documentation is in the `docs/` folder:

- **[docs/KNOWLEDGE_BASE.md](docs/KNOWLEDGE_BASE.md)** — Complete project knowledge (architecture, features, decisions)
- **[docs/GEMINI.md](docs/GEMINI.md)** — AI assistant context and development guidelines
- **[docs/logs/LOGS.md](docs/logs/LOGS.md)** — Development activity log and metrics
- **[docs/README.md](docs/README.md)** — Documentation hub and navigation guide

## 🏗️ Architecture

**Feature-Based Organization:**
```
src/
├── app/              # Next.js App Router (routes in src/)
├── features/         # Feature modules (products, conversation, experience)
├── components/       # Shared UI components
├── lib/              # Shared utilities
└── utils/            # General utilities
```

## 🌟 Features

- **Products Feature** — Product catalogue, filtering, enquiries
- **Conversation Feature** — Recipes, cooking stories, scene state
- **Experience Feature** — 3D scene configuration, animations

## 🛠️ Tech Stack

- **Framework:** Next.js 16.4.0 + React 19 + TypeScript (strict)
- **Styling:** Tailwind CSS v4 + Turbopack
- **3D (Phase 4):** Three.js + React Three Fiber
- **Animation (Phase 5):** GSAP + Motion
- **Deployment:** Vercel

## 📋 Current Status

**Phase:** 1 (Repository & Asset Audit) ✅ Complete  
**Build:** ✅ Passing (0 errors)  
**Ready for:** Phase 2 (UX & Design System)

## 🔗 Pages

- `/` — Homepage
- `/products` — Product listing
- `/products/:slug` — Product detail
- `/about` — About page
- `/contact` — Contact page
- `/experience` — 3D cooking experience
- `/privacy-policy` — Privacy policy

## 🔗 Useful Links

- [Documentation Hub](docs/README.md)
- [Knowledge Base](docs/KNOWLEDGE_BASE.md)
- [Development Logs](docs/logs/LOGS.md)

## 📞 Support

Refer to `docs/KNOWLEDGE_BASE.md` for:
- Troubleshooting guide
- Common patterns
- FAQ
- Architecture decisions

---

**Version:** 1.0 | **Created:** October 13, 2026 | **Status:** Production Ready
