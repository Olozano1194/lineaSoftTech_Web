# Proposal: Error Boundaries System

## Intent

Zero crash resilience today — any React render error kills the entire app with a blank screen. Add branded Error Boundaries at two levels so users see a fallback with recovery options instead of nothing.

## Scope

### In Scope
- Install `react-error-boundary`
- Branded `ErrorFallback` component with logo, contact info, retry button
- Per-section boundary in `LayoutAdmin` (wraps `<Outlet>`) so Header/Footer survive
- Global boundary in `main.tsx` (wraps `<Router>`) as last line of defense
- Move `<Toaster>` inside `<Router>` for navigation access from fallback
- `console.error` + `react-hot-toast` for error logging
- Unit test for `ErrorFallback` + integration test for boundary behavior

### Out of Scope
- Error reporting service (Sentry, Datadog, etc.) — hook is wired but no provider
- Boundary for `LayoutAdmin` itself (if Header/Footer crash, global boundary catches it)
- Error recovery beyond retry/reload

## Capabilities

### New Capabilities
- `error-boundary`: Branded Error Boundary system with per-section and global crash recovery, using `react-error-boundary` library.

### Modified Capabilities
None.

## Approach

Two-tier defense: `react-error-boundary` `<ErrorBoundary>` wraps `<Outlet>` inside `LayoutAdmin` (per-section) and `<Router>` in `main.tsx` (global). `ErrorFallback` component shows logo, error message, contact link, and retry button. `onError` callback logs via `console.error` + toast.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `package.json` | Modified | Add `react-error-boundary` dep |
| `src/main.tsx` | Modified | Wrap `<Router>` with ErrorBoundary, move `<Toaster>` inside |
| `src/layouts/LayoutAdmin.tsx` | Modified | Wrap `<Outlet>` with ErrorBoundary |
| `src/components/ui/ErrorFallback.tsx` | New | Branded fallback component with logo + contact + retry |
| `src/components/ui/ErrorFallback.test.tsx` | New | Unit + integration tests |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Boundary swallows dev errors silently | Low | `onError` always logs to console |
| Double boundary nesting confusion | Low | Clear separation: per-section inside, global outside |

## Rollback Plan

1. `npm uninstall react-error-boundary`
2. Revert `main.tsx`, `LayoutAdmin.tsx` via `git checkout`
3. Delete `ErrorFallback.tsx` and its test

## Dependencies

- `npm install react-error-boundary`

## Success Criteria

- [ ] Render crash in a page shows branded fallback (Header/Footer still visible)
- [ ] Render crash in layout shows global fallback
- [ ] Retry button re-renders the failed section
- [ ] Error is logged to console + toast notification shown
- [ ] `ErrorFallback` renders correctly in test
- [ ] Boundary catches thrown errors in integration test
