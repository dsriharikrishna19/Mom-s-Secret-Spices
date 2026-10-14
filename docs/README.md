# Documentation — Mom's Secret Spices

**Location:** `docs/` folder  
**Purpose:** Central hub for all project documentation, context, and development logs.  

---

## Folder Structure

```
docs/
├── README.md                     # This file
├── KNOWLEDGE_BASE.md             # Complete project knowledge
├── GEMINI.md                     # AI assistant context
├── knowledge-base/               # Additional KB articles (organized)
│   ├── Architecture.md
│   ├── Features.md
│   ├── DataModels.md
│   └── Patterns.md
└── logs/                         # Development activity logs
    ├── LOGS.md                   # Main log file
    ├── 2026-10-Phase1.md         # Phase-specific logs
    ├── 2026-11-Phase2.md
    └── README.md                 # Logs directory guide
```

---

## Main Documentation Files

### 1. **KNOWLEDGE_BASE.md**
**What it contains:**
- Complete project overview and vision
- Architecture and design decisions
- Feature documentation (products, conversation, experience)
- Data models and type definitions
- Common patterns and best practices
- Troubleshooting guide
- Performance considerations
- Security guidelines
- Deployment information
- Future roadmap
- FAQ

**When to read:**
- Starting work on the project
- Need to understand how something works
- Want to know design decisions and why
- Looking for patterns to follow

**Size:** ~200KB (comprehensive)

---

### 2. **GEMINI.md**
**What it contains:**
- AI assistant context and instructions
- Project vision and architecture overview
- Development workflow and code standards
- Technology stack overview
- Feature details with current state
- Common tasks (how to add products, recipes, pages, features)
- Common mistakes to avoid
- Build and deployment process
- When to ask for clarification
- Debugging tips
- Performance benchmarks
- Phase roadmap
- Important constraints
- FAQ

**When to read:**
- AI assistant (Gemini, Claude, etc.) starting work
- Need quick reference for development
- Want to understand constraints and guidelines
- Looking for common task procedures

**Size:** ~120KB (focused for AI)

---

### 3. **logs/LOGS.md**
**What it contains:**
- Development activity log (chronological)
- Phase 1 completion details
- Time tracking and metrics
- Decisions made during development
- Challenges and resolutions
- Asset status
- Next steps planning
- Quick reference section
- Important commands

**When to read:**
- Want to know what was done and when
- Need to understand context of decisions
- Want to see progress and metrics
- Looking for phase-specific information

**Size:** ~30KB (ongoing log file)

---

## Quick Navigation

### By Purpose

**For Understanding the Project:**
→ Read: `KNOWLEDGE_BASE.md` → Project Overview

**For Understanding Architecture:**
→ Read: `KNOWLEDGE_BASE.md` → Architecture & Design Decisions

**For Development Guidelines:**
→ Read: `GEMINI.md` → Development Workflow

**For Understanding Features:**
→ Read: `KNOWLEDGE_BASE.md` → Feature Documentation

**For Code Patterns:**
→ Read: `KNOWLEDGE_BASE.md` → Common Patterns

**For Troubleshooting:**
→ Read: `KNOWLEDGE_BASE.md` → Troubleshooting Guide

**For Development History:**
→ Read: `logs/LOGS.md`

**For AI Assistant Context:**
→ Read: `GEMINI.md`

---

### By Role

**Project Manager/Lead:**
1. `KNOWLEDGE_BASE.md` → Project Overview
2. `KNOWLEDGE_BASE.md` → Future Roadmap
3. `logs/LOGS.md` → Current Status & Metrics

**Developer (New to Project):**
1. `GEMINI.md` → Project Vision & Architecture Overview
2. `KNOWLEDGE_BASE.md` → Feature Documentation
3. `KNOWLEDGE_BASE.md` → Common Patterns
4. Project root `DEVELOPMENT.md` and `GETTING_STARTED.md`

**Developer (Adding Feature):**
1. `GEMINI.md` → Common Tasks
2. `KNOWLEDGE_BASE.md` → Feature Documentation
3. Check existing features in `src/features/`

**AI Assistant:**
1. `GEMINI.md` → Complete context document
2. Reference `KNOWLEDGE_BASE.md` as needed
3. Check `logs/LOGS.md` for recent changes

**DevOps/Deployment:**
1. `KNOWLEDGE_BASE.md` → Deployment & DevOps
2. `GEMINI.md` → Build & Deployment
3. Root `DEVELOPMENT.md`

---

## Documentation Index

### Project Foundation
- Vision and mission — `KNOWLEDGE_BASE.md` → Project Overview
- Tech stack — `KNOWLEDGE_BASE.md` → Project Overview & Tech Stack
- Design principles — `KNOWLEDGE_BASE.md` → Project Overview

### Architecture
- Folder structure — `KNOWLEDGE_BASE.md` → Architecture Overview
- Design decisions — `KNOWLEDGE_BASE.md` → Architecture & Design Decisions
- Feature organization — `FEATURE_BASED_STRUCTURE.md` (root)
- Type definitions — `KNOWLEDGE_BASE.md` → Data Models

### Features
- Products feature — `KNOWLEDGE_BASE.md` → Feature Documentation → Products
- Conversation feature — `KNOWLEDGE_BASE.md` → Feature Documentation → Conversation
- Experience feature — `KNOWLEDGE_BASE.md` → Feature Documentation → Experience

### Development
- Setup & install — `GETTING_STARTED.md` (root)
- Code standards — `DEVELOPMENT.md` (root)
- Common patterns — `KNOWLEDGE_BASE.md` → Common Patterns
- Troubleshooting — `KNOWLEDGE_BASE.md` → Troubleshooting Guide

### Deployment
- Build process — `GEMINI.md` → Build & Deployment
- Vercel setup — `KNOWLEDGE_BASE.md` → Deployment & DevOps
- Environment setup — `GEMINI.md` → Build & Deployment

### Progress & History
- Phase 1 completion — `logs/LOGS.md` → 2026-10-13 entry
- Phase roadmap — `KNOWLEDGE_BASE.md` → Future Roadmap
- Metrics & status — `logs/LOGS.md` → Metrics section

---

## How to Use This Documentation

### Scenario 1: "I need to add a new product"
1. Read: `GEMINI.md` → Common Tasks → Add a New Product
2. Edit: `src/features/products/data.ts`
3. Reference: `KNOWLEDGE_BASE.md` → Data Models → Product Model

### Scenario 2: "Where should I put this new utility function?"
1. Read: `GEMINI.md` → Code Standards → Organization
2. Check: `KNOWLEDGE_BASE.md` → Architecture Overview
3. Pattern: `KNOWLEDGE_BASE.md` → Common Patterns

### Scenario 3: "The build is failing, what do I check?"
1. Read: `KNOWLEDGE_BASE.md` → Troubleshooting Guide
2. Try: Commands in `logs/LOGS.md` → Useful Commands
3. Check: Console output and error messages

### Scenario 4: "I want to understand the 3D scene setup"
1. Read: `KNOWLEDGE_BASE.md` → Feature Documentation → Experience
2. Reference: `src/features/experience/config.ts`
3. Timeline: `KNOWLEDGE_BASE.md` → Future Roadmap → Phase 4

### Scenario 5: "What design decisions have been made?"
1. Read: `KNOWLEDGE_BASE.md` → Architecture & Design Decisions
2. Check: `logs/LOGS.md` → Key Decisions section
3. Reference: `DEVELOPMENT.md` → Code Standards

---

## Keeping Documentation Updated

### When to Update

1. **After Phase Completion:**
   - Add new phase entry to `logs/LOGS.md`
   - Update phase roadmap if needed
   - Update metrics and status

2. **When Adding New Feature:**
   - Update `KNOWLEDGE_BASE.md` → Feature Documentation
   - Update `GEMINI.md` → Feature Details
   - Add to logs

3. **When Making Architecture Decision:**
   - Document in `KNOWLEDGE_BASE.md` → Architecture & Design Decisions
   - Explain rationale and impact
   - Add to logs

4. **When Adding New Pattern:**
   - Document in `KNOWLEDGE_BASE.md` → Common Patterns
   - Add code example
   - Reference in `GEMINI.md` → Common Tasks

### How to Update

```markdown
## Section Title

**Change Made:** Brief description

**When:** Date and phase

**Why:** Rationale for the change

**Impact:** What it affects

**Reference:** Links to relevant code
```

---

## Documentation Status

| Document | Status | Last Updated | Version |
|----------|--------|--------------|---------|
| KNOWLEDGE_BASE.md | ✅ Complete | 2026-10-13 | 1.0 |
| GEMINI.md | ✅ Complete | 2026-10-13 | 1.0 |
| logs/LOGS.md | ✅ Complete | 2026-10-13 | 1.0 |
| knowledge-base/ | 📅 Planned | — | — |

---

## Quick Reference Commands

```bash
# Start here
cat docs/README.md

# Main knowledge
cat docs/KNOWLEDGE_BASE.md

# AI context
cat docs/GEMINI.md

# Development history
cat docs/logs/LOGS.md

# Full documentation in root
cat FEATURE_BASED_STRUCTURE.md
cat DEVELOPMENT.md
cat GETTING_STARTED.md
```

---

## File Locations Map

```
Project Root
├── docs/
│   ├── README.md                    ← Start here
│   ├── KNOWLEDGE_BASE.md            ← Complete knowledge
│   ├── GEMINI.md                    ← AI context
│   ├── knowledge-base/              ← Detailed articles
│   │   ├── Architecture.md
│   │   ├── Features.md
│   │   ├── DataModels.md
│   │   └── Patterns.md
│   └── logs/
│       ├── LOGS.md                  ← Development log
│       └── README.md                ← Logs guide
│
├── FEATURE_BASED_STRUCTURE.md       ← Architecture guide
├── DEVELOPMENT.md                   ← Dev standards
├── GETTING_STARTED.md               ← Quick start
├── PROJECT_STRUCTURE.md             ← Structure reference
│
├── src/
│   ├── app/                         ← Pages & routes
│   ├── features/
│   │   ├── products/
│   │   ├── conversation/
│   │   └── experience/
│   ├── components/
│   ├── lib/
│   └── utils/
│
└── README.md                        ← Project overview
```

---

## FAQ

**Q: Which file should I read first?**  
A: Start with `GEMINI.md` if you're working on development. Start with `KNOWLEDGE_BASE.md` if you want complete understanding.

**Q: Where do I log what I've done?**  
A: Add an entry to `logs/LOGS.md` with date, phase, and what you completed.

**Q: Are all documents kept up to date?**  
A: Yes. Each phase completion includes documentation updates.

**Q: Can I add my own documentation?**  
A: Yes. Add articles to `docs/knowledge-base/` subfolder and reference them in the index.

**Q: What if documentation conflicts with code?**  
A: Code is source of truth. Update documentation to match code, then document the change in logs.

---

## Contributing to Documentation

### Adding a New Article

1. Create file in `docs/knowledge-base/Topic.md`
2. Follow markdown format with clear headings
3. Add reference to this README
4. Update relevant main documents
5. Add change to `logs/LOGS.md`

### Updating Existing Documentation

1. Make changes to relevant file
2. Update Last Updated timestamp
3. Add brief change note
4. Log the update

### Format Standards

- Use markdown with clear headings
- Include code examples where relevant
- Add links to related documentation
- Keep sections focused and scannable
- Use tables for comparisons
- Add status badges and emojis for clarity

---

## Support

**For Documentation Issues:**
1. Check if information exists elsewhere
2. Create or update relevant document
3. Add to logs
4. Request review

**For Questions About Content:**
1. Check KNOWLEDGE_BASE.md first
2. Check GEMINI.md for guidance
3. Review code examples in `src/`
4. Ask team or AI assistant

---

## Additional Resources

### In Project Root
- `FEATURE_BASED_STRUCTURE.md` — Deep dive into architecture
- `DEVELOPMENT.md` — Complete development guide
- `GETTING_STARTED.md` — Quick start guide
- `PROJECT_STRUCTURE.md` — Folder organization

### External
- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com)

---

**Documentation Hub Version:** 1.0  
**Created:** October 13, 2026  
**Last Updated:** October 13, 2026  
**Maintained By:** Development Team  

---

*Navigate to specific documents above or check logs/ for development history.*
