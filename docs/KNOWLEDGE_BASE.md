# Knowledge Base — Mom's Secret Spices

**Purpose:** Central repository for project knowledge, decisions, patterns, and tribal knowledge.  
**Last Updated:** October 13, 2026  
**Version:** 1.0  

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture & Design Decisions](#architecture--design-decisions)
3. [Feature Documentation](#feature-documentation)
4. [Data Models](#data-models)
5. [Common Patterns](#common-patterns)
6. [Troubleshooting Guide](#troubleshooting-guide)
7. [Performance Considerations](#performance-considerations)
8. [Security Considerations](#security-considerations)
9. [Deployment & DevOps](#deployment--devops)
10. [Future Roadmap](#future-roadmap)

---

## Project Overview

### Mission
Build a premium, responsive website for **Mom's Secret Spices** that combines an authentic Indian food brand experience with a cinematic, realistic 3D kitchen and an AI cooking companion.

### Target Experience
Visitors should feel as if they have entered a real Indian home kitchen. A lifelike cooking companion welcomes them, understands what they want to cook, guides them through cooking steps, animates the spices and cooking process, and naturally introduces relevant Mom's Secret Spices products.

### Tech Stack
- **Framework:** Next.js 16.4.0 with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with Turbopack
- **3D Graphics:** Three.js + React Three Fiber (Phase 4)
- **Animation:** GSAP + Motion for React (Phase 5)
- **UI Components:** shadcn/ui (Phase 2)
- **Database:** None (MVP) → Future database in Phase 8+
- **Deployment:** Vercel

### Key Constraints
- **No Backend Required (MVP):** Static data only, no database
- **No Fake AI:** Distinguish scripted dialogue from genuine AI
- **No Secrets in Code:** Permanent API keys never in client-side code
- **Type Safety:** Strict TypeScript, no `any` types
- **Performance:** Fast builds (Turbopack), optimized for mobile

---

## Architecture & Design Decisions

### Decision 1: Feature-Based Organization

**Decision:** Organize code by feature rather than by file type.

```
CHOSEN:
src/features/products/
├── types.ts
├── data.ts
├── utils.ts
└── index.ts

REJECTED:
src/types/
src/data/
src/lib/
```

**Rationale:**
- Related code stays together (easier to maintain)
- Features are self-contained (encapsulation)
- Easy to add new features without reorganizing
- Clear public API via barrel exports

**Impact:** All development must follow this pattern. See `FEATURE_BASED_STRUCTURE.md` for details.

---

### Decision 2: App Router in src/app/

**Decision:** Move Next.js App Router into `src/app/` instead of root `app/`.

**Rationale:**
- Cleaner folder structure
- Aligns with feature-based organization
- Industry standard for Next.js projects
- Easier to co-locate pages with features

**Impact:** All routes must be created in `src/app/`. Configuration done in `next.config.ts`.

---

### Decision 3: Static Data (MVP Phase)

**Decision:** Use TypeScript files in `src/features/*/data.ts` for all data in MVP.

```typescript
// No database, no CMS, no API calls (yet)
export const PRODUCTS: Product[] = [ /* ... */ ];
export const RECIPES: Recipe[] = [ /* ... */ ];
```

**Rationale:**
- Simplifies MVP development (no infrastructure needed)
- Type-safe data definitions
- Easy to migrate to database later
- Serves as schema definition

**Migration Path:** When database is needed, replace `data.ts` with API calls but keep types unchanged.

---

### Decision 4: Barrel Exports for Clean APIs

**Decision:** Use `index.ts` as barrel exports for each feature.

```typescript
// ✅ Good: Import from barrel export
import { Product, getAllProducts } from '@/features/products';

// ❌ Bad: Direct import from internals
import { Product } from '@/features/products/types';
```

**Rationale:**
- Public API is explicit and controlled
- Internal implementation can change without breaking imports
- Clear separation between public and private

**Enforcement:** Code reviews must check that all feature imports use barrel exports.

---

### Decision 5: Server Components by Default

**Decision:** Use Next.js Server Components by default; only use Client Components when necessary.

```typescript
// ✅ Server Component (default)
export default function ProductList({ products }) {
  return <div>{/* ... */}</div>;
}

// ❌ Client Component only when needed
'use client';
export default function ProductFilter() {
  const [state, setState] = useState();
  // ...
}
```

**Rationale:**
- Smaller client-side bundle
- Faster page loads
- Secure data fetching
- Better SEO

**Impact:** Always question if a component needs to be client-side before adding `'use client'`.

---

### Decision 6: No Authentication (MVP)

**Decision:** MVP has no user authentication, database, or CMS.

**Rationale:**
- Simplifies MVP scope
- Focuses on core cooking experience
- Can be added in future phases

**Future:** Authentication will be added in Phase 8+ if needed.

---

## Feature Documentation

### Products Feature

**Location:** `src/features/products/`

**Responsibility:** Product catalogue, filtering, searching, and enquiry generation.

**Key Files:**
- `types.ts` — Product, PackSize, Filter types
- `data.ts` — Product array with 3 samples (Turmeric, Garam Masala, Coriander)
- `utils.ts` — Filtering, sorting, pricing, enquiry URL generation
- `index.ts` — Barrel export

**Public API:**
```typescript
import {
  Product,
  ProductPackSize,
  ProductFilters,
  PRODUCTS,
  getProductBySlug,
  getProductById,
  getAllProducts,
  getCategories,
  filterAndSortProducts,
  formatPrice,
  getWhatsAppEnquiryUrl,
  getEmailEnquiry,
} from '@/features/products';
```

**Current State:**
- ✅ 3 sample products (to be replaced with verified data)
- ✅ Filtering and sorting utilities
- ✅ WhatsApp and email enquiry generation
- ❌ Product images (use placeholders)
- ❌ Real product prices (marked for verification)

**Roadmap:**
- Phase 9: Complete product catalogue with real data
- Phase 9: Product images and photography
- Future: Product reviews and ratings

---

### Conversation Feature

**Location:** `src/features/conversation/`

**Responsibility:** Recipes, cooking stories, scene state management, and dialogue scripting.

**Key Files:**
- `types.ts` — Recipe, RecipeStep, SceneState, Message types
- `data.ts` — Recipe array with 2 samples (Golden Milk, Dal Tadka)
- `index.ts` — Barrel export

**Public API:**
```typescript
import {
  Recipe,
  RecipeStep,
  RecipeIngredient,
  SceneState,
  InteractionMode,
  ConversationMessage,
  SceneAction,
  StoryContext,
  ConversationResponse,
  RECIPES,
  getRecipeBySlug,
  getRecipeById,
  getAllRecipes,
  getRecipesByDifficulty,
} from '@/features/conversation';
```

**Scene States:**
```typescript
'welcome'       // Initial greeting from companion
'idle'          // Waiting for user input
'listening'     // Recording voice input
'thinking'      // Processing user request
'speaking'      // Playing response
'cooking'       // Animating cooking steps
'show_spice'    // Highlighting spice animations
'product_spotlight' // Showing product recommendation
'complete'      // Recipe finished
'error'         // Error state
```

**Interaction Modes:**
- `text` — Text-based conversation
- `voice` — Voice-based interaction
- `hybrid` — Both text and voice

**Current State:**
- ✅ 2 scripted recipes with full steps
- ✅ Scene state definitions
- ✅ Message and action types
- ❌ Actual voice integration (Phase 6)
- ❌ AI responses (Phase 8)

**Roadmap:**
- Phase 5: Animation system with GSAP
- Phase 6: Voice recognition and playback
- Phase 7: Scripted dialogue branching
- Phase 8: Real AI integration

---

### Experience Feature

**Location:** `src/features/experience/`

**Responsibility:** 3D scene configuration, rendering setup, animation clips, and quality presets.

**Key Files:**
- `types.ts` — SceneConfig, CameraConfig, CharacterState, Animation types
- `config.ts` — Default configurations, preset values
- `index.ts` — Barrel export

**Public API:**
```typescript
import {
  SceneConfig,
  CameraConfig,
  LightConfig,
  CharacterState,
  KitchenScene,
  AnimationClip,
  ParticleEffect,
  DEFAULT_SCENE_CONFIG,
  KITCHEN_MODELS,
  CHARACTER_ANIMATIONS,
  VIEWPORT_CONFIGS,
  QUALITY_PRESETS,
} from '@/features/experience';
```

**Quality Presets:**
```typescript
// High quality (desktop)
QUALITY_PRESETS.high = {
  shadows: true,
  antialiasing: true,
  pixelRatio: 2,
}

// Medium quality (tablet)
QUALITY_PRESETS.medium = {
  shadows: true,
  antialiasing: true,
  pixelRatio: 1.5,
}

// Low quality (mobile)
QUALITY_PRESETS.low = {
  shadows: false,
  antialiasing: false,
  pixelRatio: 1,
}
```

**Character Animations:**
- `idle` — Waiting/neutral
- `talking` — Mouth animation while speaking
- `gesturing` — Expressive hand gestures
- `cooking` — Cooking motions
- `pointing` — Pointing at ingredients
- `stirring` — Stirring pot animation

**Current State:**
- ✅ Scene configuration templates
- ✅ Animation clip definitions
- ✅ Quality presets
- ❌ Actual 3D models (Phase 4)
- ❌ Model loading and rendering (Phase 4)

**Roadmap:**
- Phase 4: Load GLB models (kitchen, character, utensils)
- Phase 4: Three.js scene setup
- Phase 5: Animation system with GSAP
- Phase 5: Particle effects (steam, smoke, spice)

---

## Data Models

### Product Model

```typescript
interface Product {
  id: string;                           // Unique identifier
  slug: string;                         // URL-friendly name
  name: string;                         // Display name
  description: string;                  // Short description
  category: 'spice' | 'blend' | 'seasoning' | 'masala';
  image: string;                        // Path to product image
  packSizes: PackSize[];                // Available sizes and prices
  ingredients: string[];                // List of ingredients
  certifications?: string[];            // Organic, Non-GMO, etc.
  healthBenefits?: string[];           // Health advantages
  origin?: string;                      // Where it's from
  createdAt: Date;                      // Creation date
}

interface PackSize {
  id: string;                           // Unique identifier
  weight: number;                       // Quantity
  unit: 'g' | 'kg' | 'ml' | 'l';       // Unit of measurement
  mrp: number;                          // Maximum Retail Price
  currency: 'INR' | 'USD';              // Currency
  available: boolean;                   // In stock?
}
```

---

### Recipe Model

```typescript
interface Recipe {
  id: string;                           // Unique identifier
  slug: string;                         // URL-friendly name
  name: string;                         // Dish name
  description: string;                  // What it is
  servings: number;                     // Serves how many?
  prepTime: number;                     // Minutes to prepare
  cookTime: number;                     // Minutes to cook
  difficulty: 'easy' | 'medium' | 'hard';
  image: string;                        // Dish photo
  ingredients: RecipeIngredient[];      // What you need
  steps: RecipeStep[];                  // How to cook
  productSpotlights: string[];          // Product IDs to recommend
}

interface RecipeStep {
  order: number;                        // Step number (1, 2, 3...)
  title: string;                        // Step title
  description: string;                  // Detailed instructions
  duration?: number;                    // Seconds to complete
  sceneAction?: string;                 // Animation trigger
  animationKey?: string;                // Animation identifier
}
```

---

## Common Patterns

### Pattern 1: Creating a New Feature

1. **Create folder:** `src/features/feature-name/`
2. **Create files:**
   - `types.ts` — Type definitions
   - `data.ts` — Data and query functions
   - `utils.ts` — Utility functions (if needed)
   - `index.ts` — Barrel export

3. **Export from index.ts:**
```typescript
export type { MyType } from './types';
export { getData, getItemById } from './data';
export { utilityFunction } from './utils';
```

4. **Use throughout app:**
```typescript
import { MyType, getData } from '@/features/feature-name';
```

---

### Pattern 2: Creating a New Page

1. **Create route folder:** `src/app/(public)/route-name/`
2. **Create page file:** `page.tsx`
3. **Add metadata:**
```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | Mom\'s Secret Spices',
  description: 'Page description for SEO',
};

export default function PageComponent() {
  return <main>{/* ... */}</main>;
}
```

---

### Pattern 3: Using Feature Data in Pages

```typescript
// src/app/(public)/products/page.tsx
import { getAllProducts } from '@/features/products';

export default function ProductsPage() {
  const products = getAllProducts();
  
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

---

### Pattern 4: Dynamic Routes with Static Generation

```typescript
// src/app/(public)/products/[slug]/page.tsx
import { getAllProducts, getProductBySlug } from '@/features/products';

// Generate all possible paths at build time
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map(product => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) return <div>Not found</div>;
  return <div>{product.name}</div>;
}
```

---

## Troubleshooting Guide

### Build Issues

**Problem:** TypeScript errors after adding code
**Solution:**
1. Check imports use correct path aliases
2. Verify types are exported from barrel exports
3. Run `npm run lint` to see all errors
4. Run `npx tsc --noEmit` for type checking

**Problem:** Build fails with "Cannot find module"
**Solution:**
1. Verify path alias in `tsconfig.json`
2. Check barrel export in `index.ts`
3. Ensure file names match imports (case-sensitive)

---

### Import Issues

**Problem:** "Module not found" error
**Solution:**
1. Check barrel export exists at `src/features/feature-name/index.ts`
2. Verify exported names match what you're importing
3. Use exact import path: `@/features/products` not `@/features/products/`

**Problem:** Circular dependency
**Solution:**
1. Check if Feature A imports from Feature B and vice versa
2. Move shared logic to `src/lib/` instead
3. Use lazy loading for circular dependencies

---

### TypeScript Issues

**Problem:** Type errors with Product or Recipe
**Solution:**
1. Import type from barrel export: `import type { Product } from '@/features/products'`
2. Verify all required fields are populated
3. Use optional chaining: `product?.name`

**Problem:** "Object is possibly undefined"
**Solution:**
```typescript
// ❌ Bad
console.log(product.name);

// ✅ Good
if (product) {
  console.log(product.name);
}

// ✅ Also good
console.log(product?.name);
```

---

### Performance Issues

**Problem:** Page loads slowly
**Solution:**
1. Check bundle size: `npm run build` shows output size
2. Lazy-load large components: `React.lazy()`
3. Use Server Components instead of Client Components
4. Optimize images with `next/image`

---

## Performance Considerations

### Current Optimizations
- ✅ **Turbopack:** 908ms builds (vs ~30s with Webpack)
- ✅ **Static Generation:** All pages pre-rendered at build time
- ✅ **Server Components:** Default reduces JS bundle
- ✅ **Code Splitting:** Each page gets its own bundle

### Future Optimizations
- **Image Optimization:** Use `next/image` for all product photos
- **Font Optimization:** Load only needed font weights
- **3D Model Compression:** Use gzip/brotli for GLB files
- **Lazy Loading:** Load 3D scene on demand
- **Caching Headers:** Configure CDN caching strategy

### Mobile Performance
- Quality presets available for different devices
- Touch-friendly interfaces (min 44px tap targets)
- Responsive images (srcset)
- Reduced animation on `prefers-reduced-motion`

---

## Security Considerations

### Current Implementation
- ✅ **No Secrets in Code:** Placeholder values for emails/WhatsApp
- ✅ **Environment Variables:** Sensitive config in `.env.local` (not committed)
- ✅ **No Database Exposure:** Static data only (MVP)
- ✅ **Type Safety:** TypeScript prevents injection attacks

### Future Security

**Phase 6 (Voice Integration):**
- Validate and sanitize voice transcripts
- Don't store raw voice data
- Clear microphone access after use

**Phase 8 (AI Integration):**
- Keep API keys server-side only
- Validate all AI responses before rendering
- Implement rate limiting
- Log AI interactions for monitoring

**Database (Future):**
- Use parameterized queries (never string interpolation)
- Hash passwords with bcrypt
- Implement CSRF protection
- Use HTTPS only

---

## Deployment & DevOps

### Current Setup
- **Hosting:** Vercel (recommended for Next.js)
- **Domain:** `momssecretspices.com` (to be configured)
- **SSL:** Automatic (Vercel)
- **CDN:** Automatic (Vercel)

### Deployment Process
```bash
# 1. Code on main branch
git push origin main

# 2. Vercel automatically deploys
# 3. Build happens on Vercel servers
# 4. Tests run (if configured)
# 5. Deploy to production

# 6. Verify
# Visit https://momssecretspices.com
```

### Environment Variables for Deployment
```env
# .env.production (set in Vercel dashboard)
NEXT_PUBLIC_SITE_URL=https://momssecretspices.com
NEXT_PUBLIC_WHATSAPP_NUMBER=91xxxxxxxxxx
NEXT_PUBLIC_EMAIL=contact@momssecretspices.com
```

### Monitoring
- **Errors:** Sentry or similar (to be configured)
- **Performance:** Web Vitals (Vercel dashboard)
- **Analytics:** Google Analytics (to be configured)

---

## Future Roadmap

### Phase 2: UX & Design System (Next)
- [ ] Design tokens finalized
- [ ] Component library with shadcn/ui
- [ ] Homepage design
- [ ] Product page designs
- [ ] Mobile responsive layouts

### Phase 3: Next.js Foundation
- [ ] Error boundaries
- [ ] Loading states
- [ ] Metadata optimization
- [ ] Sitemap generation

### Phase 4: 3D Kitchen Prototype
- [ ] Source/create 3D models
- [ ] Three.js scene setup
- [ ] Model loading and rendering
- [ ] Camera controls

### Phase 5: Animation System
- [ ] GSAP integration
- [ ] Character animations
- [ ] Camera sequences
- [ ] Particle effects (steam, smoke)

### Phase 6: Voice & Text Interaction
- [ ] Text input interface
- [ ] Voice recognition integration
- [ ] Speech playback
- [ ] Microphone permission handling

### Phase 7: Scripted MVP
- [ ] Dialogue branching logic
- [ ] Recipe cooking stories
- [ ] Product recommendations
- [ ] Skip/pause/replay controls

### Phase 8: Real AI Integration
- [ ] Secure backend setup
- [ ] AI provider integration
- [ ] Response validation
- [ ] Rate limiting

### Phase 9: Product Catalogue
- [ ] Real product data import
- [ ] Product photography
- [ ] Filters and search
- [ ] Enquiry workflow

### Phase 10: SEO & Accessibility
- [ ] Metadata per page
- [ ] Open Graph tags
- [ ] Structured data (Schema.org)
- [ ] ARIA labels
- [ ] Keyboard navigation

### Phase 11: Testing & Deployment
- [ ] Unit tests
- [ ] Component tests
- [ ] E2E tests
- [ ] Performance testing
- [ ] Deploy to production

---

## Contributing Guidelines

### Before Adding Code
1. Check if feature already exists
2. Follow feature-based organization
3. Add TypeScript types
4. Use barrel exports
5. Add comments for complex logic

### Code Review Checklist
- [ ] TypeScript strict mode (no `any`)
- [ ] Barrel exports used correctly
- [ ] No secrets in code
- [ ] Build passes
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Accessibility considerations

### Commit Message Format
```
<type>: <description>

feat: add product filtering by category
fix: resolve button alignment on mobile
docs: update knowledge base with new patterns
refactor: simplify product utils
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

---

## FAQ

**Q: Where should I add a new product?**  
A: Edit `src/features/products/data.ts` and add to the `PRODUCTS` array.

**Q: How do I add a new page?**  
A: Create folder in `src/app/(public)/page-name/` with `page.tsx`.

**Q: Can I use Redux or Zustand?**  
A: Not yet (MVP uses React Context). Decision will be made in Phase 5.

**Q: What about API calls?**  
A: MVP uses static data. Phase 8 will add backend integration.

**Q: How do I deploy?**  
A: Push to main branch. Vercel auto-deploys. See Deployment & DevOps section.

**Q: Can I modify the 3D scene?**  
A: Configuration in `src/features/experience/config.ts`. See Phase 4 for actual rendering.

---

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Documentation](https://react.dev)
- [Three.js Documentation](https://threejs.org/docs)
- [GSAP Documentation](https://gsap.com/docs)

---

## Project Statistics

**Created:** October 13, 2026  
**Framework:** Next.js 16.4.0  
**Build Time:** ~4 seconds  
**Bundle Size:** ~150KB (optimized)  
**TypeScript Errors:** 0  
**ESLint Warnings:** 0  
**Features:** 3 (Products, Conversation, Experience)  
**Routes:** 7 (+ 404)  
**Sample Data:** 5 items (3 products, 2 recipes)  

---

## Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-10-13 | Initial knowledge base created |
| | | Feature documentation added |
| | | Patterns and guidelines documented |

---

**Last Updated:** October 13, 2026  
**Maintained By:** Development Team  
**Status:** Active — Updated with each phase
