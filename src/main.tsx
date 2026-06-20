import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Toaster, toast } from 'react-hot-toast';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ui/ErrorFallback';
import App from './App.tsx';

function globalErrorHandler(error: Error, info: { componentStack?: string | null }) {
  console.error('Global Error Boundary caught:', error, info);
  toast.error('Algo salió mal. Inténtalo de nuevo.');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={globalErrorHandler}
    >
      <Router>
        <App />
        <Toaster />
      </Router>
    </ErrorBoundary>
  </StrictMode>,
)