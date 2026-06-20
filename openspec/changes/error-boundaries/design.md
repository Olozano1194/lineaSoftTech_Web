# Design: Error Boundaries System

## Technical Approach

Two-tier crash defense using `react-error-boundary` library:
1. **Per-section**: `<ErrorBoundary>` wraps `<Outlet>` inside `LayoutAdmin` — a page crash keeps Header/Footer alive
2. **Global**: `<ErrorBoundary>` wraps `<Router>` in `main.tsx` — last resort if everything else fails

`ErrorFallback` is a reusable presentational component rendered by both boundaries.

## Architecture Decisions

### Decision: react-error-boundary over native class component

**Choice**: `react-error-boundary` library
**Alternatives**: Hand-rolled class component with `componentDidCatch`
**Rationale**: The library provides `useErrorHandler` hook, `resetErrorBoundary`, `FallbackComponent` prop typing, and `onError` callback out of the box. Zero boilerplate vs ~40 lines of class component code. ~2KB minified.

### Decision: Two boundaries, not one

**Choice**: Per-section (LayoutAdmin) + Global (main.tsx)
**Alternatives**: Single global boundary only
**Rationale**: Defense in depth. Per-section preserves navigation chrome (Header/Footer) so the user can navigate away. Global catches errors in LayoutAdmin itself or in the Router.

### Decision: ErrorFallback as shared component

**Choice**: Single `ErrorFallback` used by both boundaries via `FallbackComponent` prop
**Alternatives**: Inline fallback UI in each boundary
**Rationale**: DRY. Consistent look and behavior. Both boundaries need the same branded experience.

## Component Tree

```
<StrictMode>
  <ErrorBoundary                    // GLOBAL — last resort
    FallbackComponent={ErrorFallback}
    onError={logError}>
    <BrowserRouter>
      <Toaster />                   // Inside Router for navigation access
      <App>
        <LayoutAdmin>
          <Header />
          <ErrorBoundary            // PER-SECTION — page crashes
            FallbackComponent={ErrorFallback}
            onError={logError}>
            <Outlet />              // Page content
          </ErrorBoundary>
          <Footer />
        </LayoutAdmin>
      </App>
    </BrowserRouter>
  </ErrorBoundary>
</StrictMode>
```

## Error Propagation Flow

```
Page throws during render
        │
        ▼
Per-section ErrorBoundary catches
        │
        ├─► onError(error, errorInfo)
        │      ├─ console.error(error, errorInfo)
        │      └─ toast.error("Algo salió mal")
        │
        └─► Renders ErrorFallback in place of Outlet
               ├─ Shows logo + message + contact + retry
               └─ "Reintentar" → resetErrorBoundary()
                                      │
                                      ▼
                              Page re-renders
```

```
LayoutAdmin / Router throws during render
        │
        ▼
Global ErrorBoundary catches
        │
        ├─► Same onError flow
        │
        └─► Renders ErrorFallback (full page, Header not available)
               └─ "Reintentar" → resetErrorBoundary()
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `package.json` | Modify | Add `react-error-boundary` dependency |
| `src/main.tsx` | Modify | Wrap `<Router>` with `<ErrorBoundary>`, move `<Toaster>` inside `<Router>` |
| `src/layouts/LayoutAdmin.tsx` | Modify | Wrap `<Outlet>` with `<ErrorBoundary>` |
| `src/components/ui/ErrorFallback.tsx` | New | Branded fallback component |
| `src/components/ui/ErrorFallback.test.tsx` | New | Unit + integration tests |

## Interfaces / Contracts

### ErrorFallback Props

```typescript
// From react-error-boundary
interface FallbackProps {
  error: Error;
  resetErrorBoundary: (...args: unknown[]) => void;
}

// ErrorFallback receives these via FallbackComponent prop
type ErrorFallbackProps = FallbackProps;
```

### main.tsx ErrorBoundary config

```typescript
const globalErrorHandler = (error: Error, info: { componentStack: string }) => {
  console.error('Global Error Boundary caught:', error, info);
  toast.error('Algo salió mal. Intentalo de nuevo.');
};
```

### LayoutAdmin ErrorBoundary config

```typescript
const sectionErrorHandler = (error: Error, info: { componentStack: string }) => {
  console.error('Section Error Boundary caught:', error, info);
  toast.error('Error al cargar esta sección');
};
```

## Testing Strategy

| Test | Type | What it verifies |
|------|------|------------------|
| ErrorFallback renders | Unit | Logo, error message, retry button present |
| Retry button triggers reset | Unit | `resetErrorBoundary` called on click |
| Boundary catches thrown error | Integration | Fallback replaces crashed component, `onError` fires |
| Boundary recovers on retry | Integration | `resetErrorBoundary` clears error, child re-renders |
