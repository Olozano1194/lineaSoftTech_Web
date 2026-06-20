# Tasks: Project Detail Pages

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 250–300 |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | single PR |
| Delivery strategy | ask-on-risk |
| Chain strategy | pending |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: size-exception
400-line budget risk: Low

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Full feature in one PR | PR 1 | All 5 files; tests included |

## Phase 1: Data Model Extension

- [x] 1.1 Add new fields to `Project` interface in `src/utils/models/types.ts`: `slug: string`, `techStack: string[]`, `liveUrl?: string`, `repoUrl?: string`, `role: string`, `challenges: string`, `solution: string`, `results: string[]`, `gallery: string[]`
- [x] 1.2 Add new fields to all 4 projects in `src/utils/projectsData.ts` — slugs: `fiadoapp`, `control-fit`, `educloud-platform`, `tinta-urbana`. Populate techStack, role, challenges, solution, results for each. Gallery stays `[]`.

## Phase 2: Core Page

- [x] 2.1 Create `src/pages/ProjectDetailPage.tsx` — read `slug` from `useParams()`, find project in `projectsData`, render `<SEO>` with project-specific title/description/image
- [x] 2.2 Add hero section: full-width `project.image`, title, tag, role
- [x] 2.3 Add content sections: ChallengeSection, SolutionSection, TechStackSection (pills), ResultsSection (list)
- [x] 2.4 Add conditional gallery section — only render if `gallery.length > 0`
- [x] 2.5 Add conditional action buttons — "Ver demo" if `liveUrl`, "Ver código" if `repoUrl`
- [x] 2.6 Add CTA section at bottom: "¿Interesado en este proyecto?" with link to contact section
- [x] 2.7 Add fallback for invalid slug: render "Proyecto no encontrado" with `<Link to="/">` back to home

## Phase 3: Integration

- [x] 3.1 Wrap `<picture>` in `<Link to={/proyecto/${project.slug}}>` in `src/components/projects/ProjectCard.tsx`. Import `Link` from `react-router-dom`. Use `prefetch="intent"` for hover performance
- [x] 3.2 Add route `<Route path="proyecto/:slug" element={<ProjectDetailPage />} />` to `src/App.tsx`. Import `ProjectDetailPage`
- [x] 3.3 Create empty directory `public/assets/projects/gallery/` (placeholder for future gallery images)

## Phase 4: Verification

- [x] 4.1 Verify: `npm run build` passes with 0 errors
- [x] 4.2 Verify: clicking any ProjectCard navigates to `/proyecto/:slug` and page renders
- [x] 4.3 Verify: `/proyecto/slug-invalido` shows "Proyecto no encontrado" without crash
- [x] 4.4 Verify: projects with empty gallery render without empty gallery section
