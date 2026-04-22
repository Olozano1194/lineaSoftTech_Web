const TermsPage = () => {
    return (
        <main className="pt-24 pb-16 px-6 min-h-screen bg-white">
                <article className="max-w-3xl mx-auto">
                    <h1 className="font-black text-3xl md:text-4xl text-text-primary mb-8">
                        Términos y Condiciones
                    </h1>
                    
                    <div className="space-y-6 text-text-secondary">
                        <p>
                            <strong>Última actualización:</strong> 12 de abril de 2026
                        </p>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">1. Aceptación de términos</h2>
                            <p>
                                Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguno de estos términos, por favor no utilice nuestro sitio.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">2. Uso del sitio</h2>
                            <p>
                                Este sitio web es proporcionado para información sobre nuestros servicios de desarrollo web, soporte técnico y automatización. Usted se compromete a utilizar el sitio únicamente para fines legales y de acuerdo con estos términos.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">3. Propiedad intelectual</h2>
                            <p>
                                Todo el contenido de este sitio, incluyendo textos, imágenes, logotipos y código, es propiedad de LineaSoftTech y está protegido por las leyes de propiedad intelectual. No puede copiar, modificar o distribuir ningún contenido sin nuestro consentimiento previo por escrito.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">4. Limitación de responsabilidad</h2>
                            <p>
                                LineaSoftTech no será responsable por ningún daño directo, indirecto, incidental o consecuente que resulte del uso de este sitio web o de la información contenida en él. Los servicios que展示amos son ejemplos de nuestro trabajo y pueden variar según los requisitos específicos de cada proyecto.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">5. Enlaces a terceros</h2>
                            <p>
                                Este sitio puede contener enlaces a sitios web de terceros. No tenemos control sobre el contenido de estos sitios y no somos responsables de ellos.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-bold text-text-primary text-lg mb-3">6. Contacto</h2>
                            <p>
                                Si tiene alguna pregunta sobre estos términos, puede contactarnos en{' '}
                                <a href="mailto:lineasofttech@gmail.com" className="text-btn-primary hover:underline">
                                    lineasofttech@gmail.com
                                </a>
                            </p>
                        </section>
                    </div>
                </article>
        </main>
    );
};
export default TermsPage;