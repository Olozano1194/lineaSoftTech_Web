# Tasks: trust-signals

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~100 |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | Single PR |
| Delivery strategy | ask-on-risk |
| Chain strategy | pending |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: pending
400-line budget risk: Low

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Full trust-signals implementation | PR 1 | All 7 files, tests not required (no test runner) |

## Phase 1: Foundation — Type Model

- [x] 1.1 Add `ProjectStatus` union type (`"portfolio" | "pilot" | "completed"`) to `src/utils/models/types.ts`
- [x] 1.2 Add required `status: ProjectStatus` field to `Project` interface in same file

## Phase 2: Data Layer

- [x] 2.1 Update `src/utils/projectsData.ts` — add `status` to every project entry (FiadoApp: "pilot", rest: "portfolio")
- [x] 2.2 Rewrite FiadoApp description to mention "fase de prueba piloto en un comercio local"
- [x] 2.3 Rewrite remaining project descriptions to remove any implied client relationships

## Phase 3: New Components

- [x] 3.1 Create `src/components/ui/TrustBar.tsx` — section with 4 stats items (proyectos, años, tecnologías, atención), responsive flex-wrap, icons from react-icons
- [x] 3.2 Create `src/components/ui/StatusBadge.tsx` — accepts `status: ProjectStatus`, renders colored label via config map, returns null on invalid status

## Phase 4: Integration

- [x] 4.1 Import and render TrustBar in `src/pages/HomePage.tsx` between HeroSection and ServicesSection
- [x] 4.2 Import and render StatusBadge in `src/components/projects/ProjectCard.tsx` (top-left corner)
- [x] 4.3 Import and render StatusBadge in `src/pages/ProjectDetailPage.tsx` (next to project tag in header)

## Phase 5: Verification

- [x] 5.1 Run `npx tsc --noEmit` — 0 errors ✅
- [x] 5.2 Run `npm run build` — pre-existing node_modules issue in `tsc -b`, `npx vite build` succeeds ✅
- [ ] 5.3 Verify TrustBar renders between Hero and Services in browser (manual)
- [ ] 5.4 Verify each project shows correct badge color and label (manual)
