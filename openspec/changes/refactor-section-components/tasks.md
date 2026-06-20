# Tasks: Refactor Section Components

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 270 (range 250‑300) |
| 400‑line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | single PR |
| Delivery strategy | ask‑on‑risk |
| Chain strategy | pending |

Decision needed before apply: Yes
Chained PRs recommended: No
Chain strategy: pending
400‑line budget risk: Low

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | PlanCard component + test + section refactor | PR 1 | base: main; tests included |
| 2 | ProcessStep component + test + section refactor | PR 1 | same PR as unit 1 (size OK) |
| 3 | TeamMemberCard component + test + section refactor | PR 1 | same PR as unit 1 (size OK) |

## Phase 1: PlanCard Component

- [x] 1.1 Create `src/components/ui/PlanCard.tsx` with `PlanCardProps` interface and full JSX (icon, title, description, price, features list, BtnPrice, conditional popular badge).
- [x] 1.2 Write `src/components/ui/PlanCard.test.tsx` – smoke test renders with props, snapshot match, isPopular badge appears.

## Phase 2: PlanSolutionSection Refactor

- [x] 2.1 Replace three inline plan cards in `src/components/sections/PlanSolutionSection.tsx` with `<PlanCard>` components, passing correct props for each plan.
- [x] 2.2 Verify visual parity: run dev server, compare before/after; ensure popular badge only on middle plan.

## Phase 3: ProcessStep Component

- [x] 3.1 Create `src/components/ui/ProcessStep.tsx` with `ProcessStepProps` and JSX (number circle, title, description).
- [x] 3.2 Write `src/components/ui/ProcessStep.test.tsx` – smoke test renders number, title, description.

## Phase 4: ProcessSection Refactor

- [x] 4.1 Replace four inline steps in `src/components/sections/ProcessSection.tsx` with `<ProcessStep>` components.
- [x] 4.2 Visual check: ensure each step displays number, title, description correctly.

## Phase 5: TeamMemberCard Component

- [x] 5.1 Create `src/components/ui/TeamMemberCard.tsx` with `TeamMemberCardProps` and JSX (image, name, role, description).
- [x] 5.2 Write `src/components/ui/TeamMemberCard.test.tsx` – smoke test renders all elements.

## Phase 6: TeamSection Refactor

- [x] 6.1 Replace two inline member cards in `src/components/sections/about/TeamSection.tsx` with `<TeamMemberCard>` components.
- [x] 6.2 Visual check: ensure image, name, role, description render as before.

## Phase 7: Verification & Cleanup

- [x] 7.1 Run `npm run build` to confirm zero TypeScript/build errors.
- [x] 7.2 Run `npx vitest` to confirm all new tests pass.
- [x] 7.3 Remove any unused imports or dead code left after refactoring.
