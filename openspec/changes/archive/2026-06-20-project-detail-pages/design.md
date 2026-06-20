# Design: Project Detail Pages

## Technical Approach

Add a new route `/proyecto/:slug` that resolves a project by slug and renders a dedicated detail page. ProjectCards become clickable links. Detail sections render conditionally based on data availability. No new state management — data comes from the existing static `projectsData.ts`.

## Architecture Decisions

### Decision: Manual slugs over auto-generated

| Option | Tradeoff | Decision |
|--------|----------|----------|
| Auto-generate from title | Fragile (title change breaks URLs) | ❌ |
| Manual `slug` field | Explicit control, stable URLs | ✅ |

**Rationale**: URLs are permanent. Manual slugs prevent broken bookmarks if titles change later.

### Decision: New page over modal/drawer

| Option | Tradeoff | Decision |
|--------|----------|----------|
| Modal/drawer | No navigation, no shareable URL | ❌ |
| New route `/proyecto/:slug` | Shareable URL, SEO, back/forward support | ✅ |

**Rationale**: Shareable URLs are essential for a portfolio — clients share links, Google indexes pages.

### Decision: Conditional rendering over hidden elements

| Option | Tradeoff | Decision |
|--------|----------|----------|
| Hide with CSS (`display: none`) | DOM pollution, empty space issues | ❌ |
| Conditional render (`&&` / ternary) | Clean DOM, no layout artifacts | ✅ |

**Rationale**: If a project has no gallery, there's no reason to render an empty section wrapper.

## Data Flow

```
ProjectCard click
  → <Link to="/proyecto/:slug">
  → React Router matches route /proyecto/:slug
  → ProjectDetailPage reads slug from useParams()
  → Finds project in projectsData by slug
  → If found: renders sections (gallery, stack, demo, repo, CTA)
  → If not found: renders "Proyecto no encontrado" fallback
  → SEO component renders with project-specific meta tags
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/utils/models/types.ts` | Modify | Add slug, techStack, liveUrl?, repoUrl?, role, challenges, solution, results[], gallery[] |
| `src/utils/projectsData.ts` | Modify | Add new fields to all 4 projects |
| `src/components/projects/ProjectCard.tsx` | Modify | Wrap `<picture>` in `<Link to={/proyecto/${slug}}>` with `preload` |
| `src/App.tsx` | Modify | Import ProjectDetailPage, add `<Route path="proyecto/:slug">` |
| `src/pages/ProjectDetailPage.tsx` | Create | Full detail page with conditional sections |
| `public/assets/projects/gallery/` | Create (empty) | Directory for gallery images (user populates) |

## Interfaces / Contracts

### Extended Project Interface

```ts
export interface Project {
  // Existing
  id: number;
  title: string;
  category: ProjectCategory;
  tag: string;
  description: string;
  image: string;

  // New
  slug: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  role: string;
  challenges: string;
  solution: string;
  results: string[];
  gallery: string[];
}
```

### ProjectDetailPage Props (internal)

```ts
interface ProjectDetailContentProps {
  project: Project;
}
```

No external props — page reads from `useParams()` and `projectsData` directly.

## Component Structure

```
ProjectDetailPage
├── SEO (title, description, image)
├── Hero (project.image full-width)
├── Content
│   ├── Header (title, tag, role)
│   ├── ChallengeSection (challenges)
│   ├── SolutionSection (solution)
│   ├── TechStackSection (techStack pills)
│   ├── ResultsSection (results list) — conditional
│   ├── GallerySection (gallery images) — conditional if gallery.length > 0
│   └── ActionsSection (liveUrl button, repoUrl button) — conditional
├── CTASection (contact CTA)
└── BackLink (← Volver a proyectos)
```

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Unit | ProjectCard renders Link | Check `<Link>` exists with correct `to` prop |
| Unit | ProjectDetailPage resolves project | Render with valid slug, verify content renders |
| Unit | Invalid slug fallback | Render with unknown slug, verify "no encontrado" message |
| Unit | Conditional sections | Mock project with/without gallery, demo, repo — verify render |
| Integration | Navigation flow | Click ProjectCard → verify URL changes to `/proyecto/:slug` |

## Migration / Rollout

No migration required. New route doesn't affect existing pages. ProjectCards gain click behavior. Old direct image access still works.

## Open Questions

- [ ] None resolved
