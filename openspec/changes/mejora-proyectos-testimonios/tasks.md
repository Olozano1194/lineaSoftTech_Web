# Tasks: Descripciones con voz de cliente y contexto real

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 80–110 |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | Single PR |
| Delivery strategy | single-pr |
| Chain strategy | size-exception |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: size-exception
400-line budget risk: Low

## Phase 1: Foundation — Interface

- [x] 1.1 Add `context?: string` field to `Project` interface in `src/utils/models/types.ts` (after `solution`)
- [x] 1.2 Run `npx tsc --noEmit` to verify no type errors introduced

## Phase 2: Content — Data Rewrite

- [x] 2.1 Rewrite `description` of FiadoApp to conversational tone (no tech jargon, plural voice)
- [x] 2.2 Rewrite `challenges` of FiadoApp — story of owner losing track in notebooks
- [x] 2.3 Rewrite `solution` of FiadoApp — practical outcomes, no tech names
- [x] 2.4 Add `context` field to FiadoApp with real backstory (family with store, memory-based tracking)
- [x] 2.5 Rewrite `description` of ControlFit to conversational tone
- [x] 2.6 Rewrite `challenges` of ControlFit — gym owners losing member info on paper
- [x] 2.7 Rewrite `solution` of ControlFit — practical outcomes
- [x] 2.8 Add `context` field to ControlFit with real backstory (two local gyms)
- [x] 2.9 Rewrite `description` of EduCloud — purpose-driven refactor
- [x] 2.10 Rewrite `challenges` of EduCloud — functional but hard to maintain
- [x] 2.11 Rewrite `solution` of EduCloud — modern interface, easier to use
- [x] 2.12 Rewrite `description` of Tinta Urbana — landing page demo
- [x] 2.13 Rewrite `challenges` of Tinta Urbana — business needed web presence fast
- [x] 2.14 Rewrite `solution` of Tinta Urbana — modern page with gallery and contact

## Phase 3: UI — "El problema real" Section

- [x] 3.1 Add conditional `context` section after Solution block in `src/pages/ProjectDetailPage.tsx` (lines ~116-123)
- [x] 3.2 Verify section renders for FiadoApp and ControlFit, hidden for EduCloud and Tinta Urbana

## Phase 4: Verification

- [x] 4.1 Run `npx tsc --noEmit` — type check passes
- [x] 4.2 Run `npx vite build` — build succeeds
- [x] 4.3 Visual check: no project mentions technology names (JWT, CRUD, Tauri, PyInstaller, etc.) in challenges/solution
- [x] 4.4 Visual check: all descriptions use plural voice ("trabajamos", "vimos", "creamos")
