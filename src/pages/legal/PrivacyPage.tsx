import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const PrivacyPage = () => {
    return (
        <>
            <Header />
            <main className="pt-24 pb-16 px-6 min-h-screen bg-white">
                <article className="max-w-3xl mx-auto">
                    <h1 className="font-black text-3xl md:text-4xl text-text-primary mb-8">
                        Política de Privacidad
                    </h1>
                    
                    <div className="space-y-6 text-text-secondary">
                        <p>
                            <strong>Última actualización:</strong> 12 de abril de 2026
                        </p>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">1. Información que recopilamos</h2>
                            <p>
                                Recopilamos información que usted nos proporciona directamente a través de nuestro formulario de contacto, incluyendo: nombre, correo electrónico, tipo de servicio de interés y mensaje.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">2. Cómo usamos su información</h2>
                            <p>
                                Utilizamos la información recopilada para:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-2">
                                <li>Responder a sus consultas y solicitudes</li>
                                <li>Brindar información sobre nuestros servicios</li>
                                <li>Establecer comunicación para proyectos potenciales</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">3. Protección de datos</h2>
                            <p>
                                Implementamos medidas de seguridad apropiadas para proteger su información personal contra accesos no autorizados, alteration, divulgación o destrucción. Sus datos se almacenan de forma segura y solo personal autorizado tiene acceso a ellos.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">4. Compartir información</h2>
                            <p>
                                <strong>No compartimos</strong> su información personal con terceros. Su datos son utilizados exclusivamente por LineaSoftTech para los fines descritos en esta política.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">5. Retención de datos</h2>
                            <p>
                                Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, o según lo requiera la ley.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">6. Sus derechos</h2>
                            <p>
                                Usted tiene derecho a acceder, corregir o eliminar su información personal. Si desea ejercer estos derechos, puede contactarnos en{' '}
                                <a href="mailto:lineasofttech@gmail.com" className="text-btn-primary hover:underline">
                                    lineasofttech@gmail.com
                                </a>
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">7. Contacto</h2>
                            <p>
                                Si tiene preguntas sobre esta política de privacidad, no dude en contactarnos.
                            </p>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
};
export default PrivacyPage;