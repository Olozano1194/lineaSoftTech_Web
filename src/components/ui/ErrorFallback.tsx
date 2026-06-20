import type { FallbackProps } from 'react-error-boundary';
import logo from '../../assets/logo.png';
import { FaExclamationTriangle } from 'react-icons/fa';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center p-8">
      <div className="max-w-md space-y-6 text-center">
        <img
          src={logo}
          alt="LineaSoftTech logo"
          className="mx-auto h-16 w-auto"
        />

        <FaExclamationTriangle className="mx-auto text-4xl text-text-error" />

        <h2 className="text-2xl font-bold text-text-primary">
          Algo salió mal
        </h2>

        <p className="text-text-secondary">
          {error?.message || 'Ocurrió un error inesperado'}
        </p>

        <button
          onClick={resetErrorBoundary}
          className="cursor-pointer rounded-lg bg-btn-primary px-6 py-2 font-medium text-white transition-transform hover:scale-105"
        >
          Reintentar
        </button>

        <p className="text-sm text-text-secondary">
          Si el problema persiste, contáctanos en{' '}
          <a
            href="mailto:soporte@lineasofttech.com"
            className="text-text-tertiary hover:underline"
          >
lineasofttech@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
export default ErrorFallback;