import { Outlet } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from "../components/ui/ErrorFallback";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/ui/ScrollToTop";

function sectionErrorHandler(error: Error, info: { componentStack?: string | null }) {
  console.error('Section Error Boundary caught:', error, info);
  toast.error('Error al cargar esta sección');
}

function LayoutAdmin() {
    return (
        <>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
                <div className="xl:col-span-5">
                    <Header />
                    <main aria-label="Contenido principal" className="flex-1 overflow-y-auto pt-16">
                        <ErrorBoundary
                          FallbackComponent={ErrorFallback}
                          onError={sectionErrorHandler}
                        >
                            <Outlet />
                        </ErrorBoundary>
                    </main>
                    <Footer />                 
                </div>
            </div>
        </>
    );
}
export default LayoutAdmin;