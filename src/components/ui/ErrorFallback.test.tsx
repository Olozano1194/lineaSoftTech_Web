import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

// Mock static asset import for logo.png
vi.mock('../../assets/logo.png', () => ({ default: null }));

// ---------------------------------------------------------------------------
// Unit tests: ErrorFallback component
// ---------------------------------------------------------------------------
describe('ErrorFallback', () => {
  it('renders logo, "Algo salió mal", error message, and retry button', () => {
    const mockReset = vi.fn();
    const mockError = new Error('Fallo en la conexión');

    render(
      <ErrorFallback error={mockError} resetErrorBoundary={mockReset} />,
    );

    expect(screen.getByAltText('LineaSoftTech logo')).toBeInTheDocument();
    expect(screen.getByText('Algo salió mal')).toBeInTheDocument();
    expect(screen.getByText('Fallo en la conexión')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Reintentar' }),
    ).toBeInTheDocument();
  });

  it('"Reintentar" button triggers resetErrorBoundary', () => {
    const mockReset = vi.fn();
    const mockError = new Error('Test error');

    render(
      <ErrorFallback error={mockError} resetErrorBoundary={mockReset} />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Reintentar' }));
    expect(mockReset).toHaveBeenCalledTimes(1);
  });

  it('shows fallback message when error has no message', () => {
    const mockReset = vi.fn();
    const emptyError = new Error();

    render(
      <ErrorFallback error={emptyError} resetErrorBoundary={mockReset} />,
    );

    expect(screen.getByText('Ocurrió un error inesperado')).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// Integration tests: ErrorBoundary behavior
// ---------------------------------------------------------------------------
describe('ErrorBoundary integration', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('catches thrown error and displays ErrorFallback', () => {
    const onError = vi.fn();

    function ThrowingComponent(): React.ReactNode {
      throw new Error('Boom!');
    }

    render(
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={onError}
      >
        <ThrowingComponent />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Algo salió mal')).toBeInTheDocument();
    expect(screen.getByText('Boom!')).toBeInTheDocument();
    expect(onError).toHaveBeenCalled();
  });

  it('onError callback fires with error and componentStack', () => {
    const onError = vi.fn();

    function ThrowingComponent(): React.ReactNode {
      throw new Error('Detalle del error');
    }

    render(
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={onError}
      >
        <ThrowingComponent />
      </ErrorBoundary>,
    );

    expect(onError).toHaveBeenCalledTimes(1);
    const [error, info] = onError.mock.calls[0];
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe('Detalle del error');
    expect(info).toHaveProperty('componentStack');
    expect(typeof info.componentStack).toBe('string');
  });

  it('retry clears error state and re-renders child', () => {
    const onError = vi.fn();

    function TestApp({ shouldThrow }: { shouldThrow: boolean }) {
      if (shouldThrow) throw new Error('Crash!');
      return <div>Todo funciona</div>;
    }

    const { rerender } = render(
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={onError}
        resetKeys={[true]}
      >
        <TestApp shouldThrow={true} />
      </ErrorBoundary>,
    );

    // Fallback is displayed after crash
    expect(screen.getByText('Algo salió mal')).toBeInTheDocument();

    // Simulate error resolution and reset via resetKeys
    rerender(
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={onError}
        resetKeys={[false]}
      >
        <TestApp shouldThrow={false} />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Todo funciona')).toBeInTheDocument();
  });
});