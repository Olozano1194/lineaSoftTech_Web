# Tasks: Error Boundaries System

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 150-180 |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | Single PR |
| Delivery strategy | single-pr |
| Chain strategy | pending |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: size-exception
400-line budget risk: Low

## Phase 1: Dependencies & Foundation

- [x] 1.1 Install `react-error-boundary` via `npm install react-error-boundary`
- [x] 1.2 Install test dev dependencies: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`
- [x] 1.3 Add `test` script to `package.json` (`"test": "vitest run"`) and vitest config to `vite.config.ts`
- [x] 1.4 Create `src/components/ui/ErrorFallback.tsx` — branded fallback with logo, "Algo salió mal" message, error text, "Reintentar" button, and contact link

## Phase 2: Boundary Integration

- [x] 2.1 Modify `src/main.tsx` — import `ErrorBoundary` and `ErrorFallback`, wrap `<Router>` with global `<ErrorBoundary>`, move `<Toaster>` inside `<Router>`
- [x] 2.2 Modify `src/layouts/LayoutAdmin.tsx` — import `ErrorBoundary` and `ErrorFallback`, wrap `<Outlet>` with per-section `<ErrorBoundary>`

## Phase 3: Testing

- [x] 3.1 Write unit test: `ErrorFallback` renders logo, error message, and retry button
- [x] 3.2 Write unit test: "Reintentar" button triggers `resetErrorBoundary`
- [x] 3.3 Write integration test: ErrorBoundary catches thrown error and shows `ErrorFallback`
- [x] 3.4 Write integration test: retry clears error state and re-renders child
- [x] 3.5 Write integration test: `onError` callback fires with error and componentStack

## Phase 4: Verification

- [x] 4.1 Run `npm test` — all tests pass
- [x] 4.2 Run `npm run build` — no TypeScript errors
- [ ] 4.3 Manual verification: crash in a page shows fallback with Header/Footer visible
- [ ] 4.4 Manual verification: crash in LayoutAdmin shows global fallback
