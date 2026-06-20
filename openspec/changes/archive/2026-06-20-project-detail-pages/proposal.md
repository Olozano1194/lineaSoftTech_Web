# Proposal: Project Detail Pages

## Intent

Convert project cards (currently static) into clickable entry points to dedicated detail pages. Each page shows the problem, solution, tech stack, gallery, and results — turning passive portfolio browsing into active lead generation.

## Scope

### In Scope
- Extend `Project` interface with slug, techStack, gallery, role, challenges, solution, results, liveUrl, repoUrl
- Add route `/proyecto/:slug` with `ProjectDetailPage`
- Make `ProjectCard` clickable via `<Link>`
- Handle missing gallery (0 images → section hidden)
- Handle invalid slug → "Proyecto no encontrado" fallback
- Dynamic SEO per project

### Out of Scope
- Gallery images — user provides them manually later
- Blog or case-study format (this is project showcase, not blog)
- Analytics/visit tracking (separate change)

## Capabilities

### New Capabilities
- `project-detail`: Dedicated project page at `/proyecto/:slug` with full project info, gallery, tech stack, and CTAs

### Modified Capabilities
- None

## Approach

- Extend `Project` interface with optional/computed fields
- Add `slug` field manually per project (stable URLs)
- `ProjectCard` wraps in `<Link to={/proyecto/${slug}}>`
- `ProjectDetailPage` reads `:slug` from `useParams()`, finds project, renders sections conditionally
- Missing data (gallery, demo) → section hidden, no broken layout
- Invalid slug → show fallback UI with CTA to go back

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/utils/models/types.ts` | Modified | Extend `Project` interface |
| `src/utils/projectsData.ts` | Modified | Add new fields to 4 projects |
| `src/components/projects/ProjectCard.tsx` | Modified | Wrap in `<Link>` |
| `src/App.tsx` | Modified | Add `/proyecto/:slug` route |
| `src/pages/ProjectDetailPage.tsx` | New | Full project detail page |
| `public/assets/projects/gallery/` | New (empty) | Gallery images (user adds later) |
| `openspec/changes/project-detail-pages/` | New | SDD artifacts |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| No gallery images → empty section | Medium | Conditionally render gallery only if `gallery.length > 0` |
| Invalid slug → broken page | Low | Fallback UI with "Proyecto no encontrado" + back link |
| SEO duplicates (title/desc) | Low | Dynamic `<SEO>` per project |

## Rollback Plan

- Revert `src/App.tsx` route addition
- Revert `ProjectCard.tsx` link wrapping
- Restore `types.ts` and `projectsData.ts` from git

## Dependencies

- User provides gallery images for `/public/assets/projects/gallery/` (post-merge)
- Existing `SEO.tsx` component is reused for dynamic meta tags

## Success Criteria

- [ ] `/proyecto/fiadoapp` renders FiadoApp detail with all available data
- [ ] Clicking any ProjectCard navigates to its detail page
- [ ] `/proyecto/slug-invalido` shows fallback without crashing
- [ ] Missing gallery → section hidden, page renders correctly
- [ ] Build passes with 0 errors
