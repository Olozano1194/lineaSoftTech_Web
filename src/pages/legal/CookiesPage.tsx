import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const CookiesPage = () => {
    return (
        <>
            <Header />
            <main className="pt-24 pb-16 px-6 min-h-screen bg-white">
                <article className="max-w-3xl mx-auto">
                    <h1 className="font-black text-3xl md:text-4xl text-text-primary mb-8">
                        Política de Cookies
                    </h1>
                    
                    <div className="space-y-6 text-text-secondary">
                        <p>
                            <strong>Última actualización:</strong> 12 de abril de 2026
                        </p>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">1. ¿Qué son las cookies?</h2>
                            <p>
                                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Se utilizan para mejorar la experiencia del usuario y proporcionar funcionalidad al sitio.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">2. Cookies que utilizamos</h2>
                            <p>
                                Nuestro sitio utiliza las siguientes categorías de cookies:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-2">
                                <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio. El sitio no funcionará correctamente sin estas.</li>
                                <li><strong>Cookies analíticas:</strong> Nos ayudan a entender cómo los visitantes interactúan con el sitio, permitiendo mejorar su funcionamiento.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">3. Cookies de terceros</h2>
                            <p>
                                En la actualidad, nuestro sitio no utiliza cookies de terceros para seguimiento o publicidad. Las únicos scripts externos son necesarios para la funcionalidad básica.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">4. Cómo gestionar las cookies</h2>
                            <p>
                                Puede controlar o eliminar las cookies en cualquier momento a través de la configuración de su navegador. Tenga en cuenta que si desactiva las cookies esenciales, algunas partes del sitio pueden no funcionar correctamente.
                            </p>
                            <p className="mt-2">
                                Para más información sobre cómo gestionar cookies en los navegadores más populares:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-2">
                                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-btn-primary hover:underline">Chrome</a></li>
                                <li><a href="https://support.mozilla.org/es-ES/kb/cookies-informacion-que-almacenan-los-sitios-web-123" target="_blank" rel="noopener noreferrer" className="text-btn-primary hover:underline">Firefox</a></li>
                                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-btn-primary hover:underline">Safari</a></li>
                                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-btn-primary hover:underline">Edge</a></li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">5. Cambios en esta política</h2>
                            <p>
                                Podemos actualizar esta política de cookies periódicamente. Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">6. Contacto</h2>
                            <p>
                                Si tiene preguntas sobre nuestra política de cookies, puede contactarnos en{' '}
                                <a href="mailto:lineasofttech@gmail.com" className="text-btn-primary hover:underline">
                                    lineasofttech@gmail.com
                                </a>
                            </p>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
};
export default CookiesPage;