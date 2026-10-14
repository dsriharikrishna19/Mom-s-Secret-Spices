# Gemini AI Context — Mom's Secret Spices

**Purpose:** AI assistant context and system instructions for future development.  
**Updated:** October 13, 2026  
**Version:** 1.0  

---

## Context Summary

This document provides comprehensive context for AI assistants (Gemini, Claude, or other) working on the Mom's Secret Spices project.

### Quick Facts
- **Project Name:** Mom's Secret Spices
- **Type:** Premium Indian cooking experience website with 3D AI companion
- **Framework:** Next.js 16.4.0 + React 19 + TypeScript (strict)
- **Status:** Phase 1 Complete (Repository & Asset Audit)
- **Current Phase:** Preparing Phase 2 (UX & Design System)
- **Deployment:** Vercel
- **Team:** Single developer + AI assistant

---

## Project Vision

### Core Mission
Build a premium, responsive website for Mom's Secret Spices that combines:
1. Authentic Indian food brand experience
2. Cinematic, realistic 3D kitchen environment
3. Human-feeling AI cooking companion
4. Product discovery and enquiry system

### User Experience Goal
Visitors should feel as if they've entered a real Indian home kitchen. An animated cooking companion welcomes them, understands what they want to cook, guides through steps, animates spices and cooking, and naturally introduces relevant products.

### Design Principles
- **Warm & Authentic:** Feels like home, not corporate
- **Culturally Respectful:** Honor Indian heritage
- **Performance-Focused:** Fast loads, optimized for mobile
- **Accessible:** Keyboard navigation, screen reader support
- **Type-Safe:** TypeScript strict mode, no `any` types

---

## Architecture Overview

### Folder Structure (Feature-Based)

```
src/
├── app/                    # Next.js App Router
│   ├── (public)/          # Public routes
│   │   ├── products/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── experience/
│   │   └── privacy-policy/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── features/              # Feature modules (NEW ARCHITECTURE)
│   ├── products/          # Product feature
│   │   ├── types.ts
│   │   ├── data.ts
│   │   ├── utils.ts
│   │   └── index.ts
│   ├── conversation/      # Recipe & dialogue
│   │   ├── types.ts
│   │   ├── data.ts
│   │   └── index.ts
│   └── experience/        # 3D scene configuration
│       ├── types.ts
│       ├── config.ts
│       └── index.ts
│
├── components/            # Shared UI components
├── hooks/                 # Shared custom hooks
├── lib/                   # Shared utilities
└── utils/                 # General utilities
```

### Key Architectural Principles
1. **Feature-Based Organization:** Related code grouped by feature
2. **Barrel Exports:** Public APIs via `index.ts`
3. **Server Components by Default:** Only use Client Components when necessary
4. **Static Data (MVP):** No database, all data in TypeScript files
5. **Type-First Development:** Define types before implementation
6. **Encapsulation:** Features are self-contained

---

## Development Workflow

### Standard Development Process

```
1. Understand Requirements
   └─ Read relevant documentation
   └─ Check existing code
   └─ Identify phase and deliverables

2. Plan Implementation
   └─ Outline files to create/modify
   └─ Identify affected features
   └─ Check for type compatibility

3. Implement
   └─ Follow TypeScript strict mode
   └─ Use barrel exports for features
   └─ Write TSDoc comments for complex logic
   └─ Use path aliases (@/features/...)

4. Verify
   └─ Run `npm run build` (must pass)
   └─ Run `npx tsc --noEmit` (type checking)
   └─ Check for console errors
   └─ Test on mobile viewport

5. Document
   └─ Update KNOWLEDGE_BASE.md if needed
   └─ Add commit message
   └─ Update phase logs
```

### Code Standards

**TypeScript:**
- Strict mode always (`"strict": true` in tsconfig.json)
- No `any` types (use `unknown` if necessary)
- Explicit return types on all functions
- Document complex types with TSDoc

**Naming:**
- Files: `kebab-case` (e.g., `product-card.tsx`)
- Components: `PascalCase` (e.g., `ProductCard`)
- Functions: `camelCase` (e.g., `getProducts()`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_ITEMS`)
- Types: `PascalCase` (e.g., `Product`)

**Organization:**
- One component per file (unless very small)
- Group related functions in feature folders
- Use barrel exports for public APIs
- Keep implementation details private

---

## Technology Stack

### Core

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.4.0 | Framework & routing |
| React | 19.3.0 | UI rendering |
| TypeScript | 5+ | Type safety |
| Tailwind CSS | 4 | Styling |
| Turbopack | Latest | Build tool |

### Phase 4+ (To Be Added)

| Technology | Purpose |
|------------|---------|
| Three.js | 3D graphics |
| @react-three/fiber | React-Three bridge |
| @react-three/drei | Utilities |
| GSAP | Animations (3D) |
| Motion | Animations (UI) |
| shadcn/ui | Component library |
| Lucide React | Icons |

### Development Tools

| Tool | Purpose |
|------|---------|
| ESLint | Code quality |
| TypeScript Compiler | Type checking |
| Vercel CLI | Deployment |

---

## Feature Details

### Feature: Products

**Location:** `src/features/products/`  
**Responsibility:** Product data, filtering, pricing, enquiries

**Current State:**
- 3 sample products (Turmeric, Garam Masala, Coriander)
- Filtering by category and search
- Price formatting (INR)
- WhatsApp/Email enquiry URL generation

**API:**
```typescript
import {
  Product,
  getAllProducts,
  getProductBySlug,
  filterAndSortProducts,
  formatPrice,
  getWhatsAppEnquiryUrl,
} from '@/features/products';
```

**TODO:**
- [ ] Replace sample data with verified products
- [ ] Add product images
- [ ] Implement search in UI
- [ ] Add filtering UI
- [ ] Handle out-of-stock items

---

### Feature: Conversation

**Location:** `src/features/conversation/`  
**Responsibility:** Recipes, cooking stories, scene state

**Current State:**
- 2 scripted recipes (Golden Milk, Dal Tadka)
- Full cooking steps with durations
- Scene action definitions
- Product recommendations per recipe

**API:**
```typescript
import {
  Recipe,
  getAllRecipes,
  getRecipeBySlug,
  getRecipesByDifficulty,
} from '@/features/conversation';
```

**Scene States:**
- `welcome` — Initial greeting
- `idle` — Waiting for input
- `listening` — Recording voice
- `thinking` — Processing
- `speaking` — Playing response
- `cooking` — Animating steps
- `show_spice` — Highlighting spice
- `product_spotlight` — Showing product
- `complete` — Recipe finished
- `error` — Error occurred

**TODO:**
- [ ] Add more recipes
- [ ] Implement branching dialogue
- [ ] Add voice integration
- [ ] Implement scene transitions
- [ ] Add animation triggers

---

### Feature: Experience

**Location:** `src/features/experience/`  
**Responsibility:** 3D scene configuration, lighting, animations

**Current State:**
- Scene configuration template
- Camera and light setup
- Character animation definitions
- Quality presets (high/medium/low)

**API:**
```typescript
import {
  DEFAULT_SCENE_CONFIG,
  CHARACTER_ANIMATIONS,
  QUALITY_PRESETS,
  VIEWPORT_CONFIGS,
} from '@/features/experience';
```

**Quality Presets:**
- `high` — Desktop (shadows, antialiasing, 2x DPR)
- `medium` — Tablet (shadows, antialiasing, 1.5x DPR)
- `low` — Mobile (no shadows, no antialiasing, 1x DPR)

**TODO:**
- [ ] Load 3D models (GLB format)
- [ ] Implement Three.js scene
- [ ] Add lighting
- [ ] Implement character rigging
- [ ] Add particle effects

---

## Common Tasks

### Add a New Product

```typescript
// 1. Edit src/features/products/data.ts
export const PRODUCTS: Product[] = [
  // ...existing products
  {
    id: 'product_004',
    slug: 'new-spice',
    name: 'New Spice',
    // ...fill in all fields
  }
];

// 2. Done! Automatically available everywhere
// import { getProductBySlug } from '@/features/products';
// const product = getProductBySlug('new-spice');
```

### Add a New Recipe

```typescript
// 1. Edit src/features/conversation/data.ts
export const RECIPES: Recipe[] = [
  // ...existing recipes
  {
    id: 'recipe_003',
    slug: 'new-dish',
    name: 'New Dish',
    // ...fill in all fields
  }
];

// 2. Done! Automatically available everywhere
```

### Add a New Page

```typescript
// 1. Create folder: src/app/(public)/new-page/
// 2. Create file: page.tsx

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | Mom\'s Secret Spices',
  description: 'Description',
};

export default function NewPage() {
  return <main>{/* content */}</main>;
}

// 3. Route automatically created: /new-page
```

### Create a New Feature

```typescript
// 1. Create folder: src/features/feature-name/
// 2. Create types.ts
export interface MyType { /* ... */ }

// 3. Create data.ts
import { MyType } from './types';
export const DATA: MyType[] = [ /* ... */ ];
export function getById(id: string) { /* ... */ }

// 4. Create index.ts (barrel export)
export type { MyType } from './types';
export { DATA, getById } from './data';

// 5. Use anywhere
import { MyType, getData } from '@/features/feature-name';
```

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Importing from Internals
```typescript
// Bad
import { Product } from '@/features/products/types';

// Good
import { Product } from '@/features/products';
```

### ❌ Mistake 2: Using `any` Type
```typescript
// Bad
const product: any = { /* ... */ };

// Good
const product: Product = { /* ... */ };
```

### ❌ Mistake 3: Mixing Data Types
```typescript
// Bad
const product = {
  id: 123,           // Should be string
  name: null,        // Should never be null
  price: '199',      // Should be number
};

// Good
const product: Product = {
  id: 'product_001',
  name: 'Turmeric',
  // ...follow Product interface
};
```

### ❌ Mistake 4: Not Using Path Aliases
```typescript
// Bad
import { Product } from '../../../features/products';

// Good
import { Product } from '@/features/products';
```

### ❌ Mistake 5: Client Component Without Need
```typescript
// Bad - doesn't need 'use client'
'use client';
export function ProductCard({ product }: { product: Product }) {
  return <div>{product.name}</div>;
}

// Good - Server Component
export function ProductCard({ product }: { product: Product }) {
  return <div>{product.name}</div>;
}

// Only use 'use client' when you need:
// - useState, useEffect, hooks
// - Event listeners
// - Browser APIs
```

---

## Build & Deployment

### Local Development
```bash
npm run dev          # Start at http://localhost:3000
npm run build        # Test production build
npm run lint         # Check code quality
npx tsc --noEmit    # Type check
```

### Production Build
```bash
npm run build
# Creates .next/ with optimized output
# All pages pre-rendered as static
```

### Deployment (Vercel)
```bash
# Simply push to main branch
git push origin main
# Vercel auto-deploys
# Check https://momssecretspices.com
```

---

## When to Ask for Clarification

Before implementing, ask clarification if:

1. **Requirements unclear:** "Should product filtering include brand?"
2. **Data format ambiguous:** "Should prices be strings or numbers?"
3. **Scope uncertain:** "For Phase 2, should we build the 3D scene?"
4. **Technical approach unclear:** "Should we use Redux for state?"
5. **Performance concerns:** "Is 4KB bundle size acceptable?"
6. **Accessibility questions:** "What's the minimum screen reader support?"

---

## Debugging Tips

### Build Fails
```bash
# 1. Check for TypeScript errors
npx tsc --noEmit

# 2. Check for ESLint issues
npm run lint

# 3. Delete cache and rebuild
rm -rf .next
npm run build
```

### Type Errors
```bash
# 1. Check imports use barrel exports
import { Product } from '@/features/products';  // ✓

# 2. Verify all required fields are set
const product: Product = {
  id: 'xxx',
  slug: 'xxx',
  // ...all fields needed
};

# 3. Use type assertion only as last resort
const item = data as Product;  // ⚠️ Only if absolutely sure
```

### Import Errors
```bash
# 1. Check path alias in tsconfig.json
"@/features/*": ["./src/features/*"]

# 2. Verify barrel export exists
# src/features/products/index.ts must exist

# 3. Restart IDE/terminal
```

---

## Performance Benchmarks

**Target Metrics:**
- Build time: < 5 seconds
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Bundle size: < 200KB (gzipped)

**Current Status (Phase 1):**
- Build time: ~4 seconds ✅
- TypeScript check: ~2 seconds
- Pages generated: 8 (static pre-rendered)
- Bundle: ~150KB (optimized)

---

## Phase Roadmap

```
Phase 1: Repository & Asset Audit ✅ COMPLETE
├─ Set up Next.js project
├─ Create feature-based structure
├─ Define types and data models
└─ Verify build

Phase 2: UX & Design System (NEXT)
├─ Design tokens
├─ Component library
├─ Homepage design
└─ Product pages

Phase 3: Next.js Foundation
├─ Error boundaries
├─ Loading states
├─ SEO metadata
└─ Navigation

Phase 4: 3D Kitchen Prototype
├─ Source 3D models
├─ Three.js setup
├─ Character rigging
└─ Basic scene

Phase 5: Animation System
├─ GSAP integration
├─ Character animations
├─ Camera sequences
└─ Particle effects

Phase 6: Voice & Text Interaction
├─ Text input
├─ Voice recognition
├─ Speech playback
└─ UI indicators

Phase 7: Scripted MVP
├─ Dialogue branching
├─ Recipe automation
├─ Product recommendations
└─ Skip/pause controls

Phase 8: Real AI Integration
├─ Backend setup
├─ AI provider integration
├─ Response validation
└─ Rate limiting

Phase 9: Product Catalogue
├─ Real product data
├─ Photography
├─ Filters & search
└─ Enquiry workflow

Phase 10: SEO & Accessibility
├─ Metadata
├─ Open Graph
├─ Structured data
└─ ARIA labels

Phase 11: Testing & Deployment
├─ Unit tests
├─ Component tests
├─ E2E tests
└─ Production deploy
```

---

## Important Constraints

### NO DATABASE (MVP)
- All data in TypeScript files
- Static generation at build time
- No API routes needed
- Easy to migrate to database later

### NO SECRETS IN CODE
- Never commit API keys
- Use `.env.local` (not committed)
- Permanent keys stored on server only
- Client-side has only placeholders

### STRICT TYPESCRIPT
- `"strict": true` in tsconfig.json
- No `any` types allowed
- All functions have explicit types
- Type errors must be fixed

### FEATURE-BASED ORGANIZATION
- Related code grouped by feature
- Public API via barrel exports
- No scattered imports from internals
- Clear separation of concerns

---

## Questions & Answers

**Q: Where should I add a new function?**  
A: If it's product-related, add to `src/features/products/utils.ts`. If shared, add to `src/lib/utils.ts`.

**Q: How do I add CSS?**  
A: Use Tailwind classes in components. For global styles, edit `src/app/globals.css`. For custom animations, add to `tailwind.config.ts`.

**Q: Can I use other libraries?**  
A: Check existing dependencies first. New packages need approval. Keep bundle size < 200KB.

**Q: How do I test locally?**  
A: Run `npm run dev`, visit http://localhost:3000, check browser console for errors.

**Q: What if I break something?**  
A: Git history is your friend. Use `git reset --hard` to revert. Build must pass before committing.

---

## Resources for This Project

### Documentation
- `docs/KNOWLEDGE_BASE.md` — Complete knowledge base
- `FEATURE_BASED_STRUCTURE.md` — Architecture guide
- `DEVELOPMENT.md` — Development standards
- `GETTING_STARTED.md` — Quick start

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Docs](https://react.dev)

### Phase-Specific Resources
- Phase 4: [Three.js Docs](https://threejs.org/docs), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- Phase 5: [GSAP](https://gsap.com/docs), [Motion](https://motion.dev)
- Phase 8: [Vercel Functions](https://vercel.com/docs/functions), [AI Provider Docs](provider-specific)

---

## Contact & Escalation

**For Questions:**
1. Check KNOWLEDGE_BASE.md first
2. Review relevant documentation
3. Search existing code examples
4. Ask AI assistant directly
5. If blocked, contact project lead

**For Decisions:**
- Design decisions: Documented in KNOWLEDGE_BASE.md → Architecture section
- Code style: Check DEVELOPMENT.md
- New technologies: Get approval before adding

---

## Final Notes

This is a **professional, production-ready codebase** with:
✅ Strict TypeScript  
✅ Feature-based organization  
✅ Clear separation of concerns  
✅ Comprehensive documentation  
✅ Optimized build process  
✅ Mobile-first design approach  

**Treat it accordingly.** Every change should maintain quality standards and follow established patterns.

---

**Version:** 1.0  
**Created:** October 13, 2026  
**Last Updated:** October 13, 2026  
**Maintained By:** Development Team  
**Status:** Active
