# Spec: Error Boundaries System

## Capability: error-boundary

Branded Error Boundary system with per-section and global crash recovery using `react-error-boundary`.

---

## ADDED Requirements

### Requirement: Branded ErrorFallback Component

`ErrorFallback` MUST render a branded error UI with the project logo, contact info, and a retry button.

#### Scenario: ErrorFallback renders with error details

- GIVEN an error was caught by an ErrorBoundary
- WHEN ErrorFallback is rendered with `error`, `resetErrorBoundary`, and optional `resetKeys`
- THEN the component displays the LineaSoftTech logo
- AND displays "Algo salió mal" as the primary message
- AND displays the error message text
- AND shows a "Reintentar" button that calls `resetErrorBoundary`
- AND shows a contact link/email for support
- AND uses Tailwind styling matching the project design system

#### Scenario: Retry button resets the boundary

- GIVEN ErrorFallback is displayed after a caught error
- WHEN the user clicks "Reintentar"
- THEN `resetErrorBoundary` is called
- AND the failed section re-renders

---

### Requirement: Per-Section Error Boundary (LayoutAdmin)

`LayoutAdmin` MUST wrap its `<Outlet>` with `<ErrorBoundary>` so Header and Footer survive a page crash.

#### Scenario: Page crash shows fallback, Header/Footer still visible

- GIVEN a page inside LayoutAdmin throws during render
- WHEN the error propagates
- THEN the ErrorBoundary catches it
- AND ErrorFallback is displayed in place of the page content
- AND the Header component remains visible and interactive
- AND the Footer component remains visible
- AND the error is logged via `onError` callback

#### Scenario: Retry re-renders the page

- GIVEN ErrorFallback is displayed after a page crash
- WHEN the user clicks "Reintentar"
- THEN `resetErrorBoundary` is called
- AND the page component re-renders

---

### Requirement: Global Error Boundary (main.tsx)

`main.tsx` MUST wrap `<Router>` with `<ErrorBoundary>` as the last line of defense.

#### Scenario: Global crash shows fallback

- GIVEN an error occurs outside any per-section boundary (e.g., in LayoutAdmin itself or Router)
- WHEN the error propagates
- THEN the global ErrorBoundary catches it
- AND ErrorFallback is rendered as the full page
- AND the error is logged via `onError` callback

---

### Requirement: Toaster Inside Router

The `<Toaster>` component from `react-hot-toast` MUST be rendered inside `<Router>` to allow navigation access from fallback components.

#### Scenario: Toaster renders inside Router context

- GIVEN the app renders in main.tsx
- WHEN the DOM is inspected
- THEN `<Toaster>` is a child of `<Router>` (not outside it)
- AND toast notifications work as before

---

### Requirement: Error Logging on Catch

`onError` callback MUST log caught errors and optionally show a toast notification.

#### Scenario: Error is logged on catch

- GIVEN an ErrorBoundary catches an error
- WHEN the `onError` callback fires
- THEN `console.error` is called with the error and errorInfo
- AND a toast notification is shown (optional, via `react-hot-toast`)

---

### Requirement: Unit Test for ErrorFallback

A unit test MUST verify ErrorFallback renders correctly with mock error data.

#### Scenario: ErrorFallback test renders with mock error

- GIVEN a mock Error object
- WHEN ErrorFallback is rendered in a test with Vitest + React Testing Library
- THEN the logo alt text is present
- AND the error message is displayed
- AND the "Reintentar" button is rendered
- AND calling `resetErrorBoundary` is triggered on button click

---

### Requirement: Integration Test for Error Boundary

An integration test MUST verify that a crashing child component is caught and ErrorFallback is displayed.

#### Scenario: Boundary catches thrown error in integration test

- GIVEN a component that throws during render
- WHEN it is rendered inside an ErrorBoundary
- THEN ErrorFallback is displayed instead of the thrown component
- AND `onError` callback was called with the expected error
- AND clicking "Reintentar" clears the error state
