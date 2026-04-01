import fotoPerfilOscar from '../../../../public/fotoPerfil.png'

const TeamSection = () => {
    return (
        <section className="bg-white px-6 py-24">
            <section className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-6 items-center justify-between mb-16 md:flex-row">
                    <div className="max-w-2xl">
                        <h2 className="font-bold font-roboto mb-4 text-3xl text-text-primary md:text-4xl">El equipo detrás de LineaSoftTech</h2>
                        <p className="text-lg text-text-secondary">
                            Somos un equipo de ingenieros de sistemas en constante aprendizaje, enfocados en crear soluciones digitales prácticas y accesibles.
                            Trabajamos con emprendedores y pequeñas empresas para desarrollar páginas web, aplicaciones sencillas y mejoras que realmente aporten valor a sus negocios.
                        </p>
                    </div>
                    {/* <button className="font-bold flex items-center gap-2 group text-btn-primary">Ver todo el equipo</button> */}
                </div>
                <section className="gap-8 grid grid-cols-1 md:grid-cols-2">
                    {/* Team Member 1 */}
                    <article className="group flex flex-col">
                        <picture className="aspect-4/5 mb-6 overflow-hidden relative">
                            <img
                                className="duration-500 grayscale h-full object-cover rounded-3xl transition-all w-full group-hover:grayscale-0"
                                src={fotoPerfilOscar}
                                alt="Professional portrait of a male CEO in a modern office, wearing a smart casual blazer, confident expression"
                            />
                        </picture>
                        <h3 className="font-bold mb-1 text-xl text-text-primary">Oscar Lozano</h3>
                        <p className="font-semibold mb-3 text-btn-primary">
                            Co-Fundador & Desarrollador Web
                        </p>
                        <p className="mt-auto text-text-secondary text-sm">
                            Me enfoco en el desarrollo web frontend, creando interfaces claras y funcionales.
                            Me gusta entender cómo funcionan las tecnologías desde la base, lo que me permite construir soluciones bien organizadas y adaptadas a cada necesidad.
                            También cuento con experiencia en soporte técnico y configuración de equipos.
                        </p>
                    </article>
                    {/* Team Member 2 */}
                    <article className="group flex flex-col">
                        <picture className="aspect-4/5 mb-6 overflow-hidden relative">
                            <img
                                className="duration-500 grayscale h-full object-cover rounded-3xl transition-all w-full group-hover:grayscale-0"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJAbDO2gIPDmPDkksr0ce9mO_XYACGWHFyEBTQwPyKwhKUz0AMvSY9QIUaXDdY8wTuZorCPzrImp78DFRsTMkOhqOFtMrcITnCgy47qx33X2g9b5t1wW1uWffhVpq9H1SoLl68sB9ZojUQEf_5cbfJhYwRrN61WjQGbq6z0s52B9FdNl_QqeWPfUWDKpuAy8rg7ln3gxPaLePBuk_XkVGBwVFaQukRXt5XtcoyeEnyFBJMMdurXVVCDLG8P-NFBozx12jCZebsIjI"
                                alt="Professional portrait of a male CEO in a modern office, wearing a smart casual blazer, confident expression"
                            />
                        </picture>
                        <h3 className="font-bold mb-1 text-xl text-text-primary">Yeison Bocanegra</h3>
                        <p className="font-semibold mb-3 text-btn-primary">
                            Co-Fundador & Especialista en Automatización
                        </p>
                        <p className="mt-auto text-text-secondary text-sm">
                            Trabajo con herramientas de inteligencia artificial para agilizar procesos y encontrar soluciones más eficientes.
                            Complemento esto con conocimientos de programación, lo que me permite aportar un enfoque práctico y moderno en cada proyecto.
                        </p>
                    </article>
                    {/* Team Member 3 */}
                    {/* <article className="group flex flex-col">
                        <picture className="aspect-4/5 mb-6 overflow-hidden relative">
                            <img
                                className="duration-500 grayscale h-full object-cover rounded-3xl transition-all w-full group-hover:grayscale-0"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiALP6bb1aY-Ha85fNcTMKw-a_I-0ot4yu2UmEVQ291ahVXvf2_uza4QtIjbtoaXwb5bLd8A6LN5aFr7gSrgsAFr2HOBZ7kZIP_7nQMUPIEj5UDU5z4iX2xgTwTL8kN49f04yi6RbozGS2ZU_uTjqkRb6ZE6axcIWFEyyBUGTVHczXks5TksXkGstOk3W1XXl3k9sZjmkVcNA1f7eVnfO3TXc1bNe1WxgpbKKhcftxSYWKIsoWNWKLOQS2Mwzl6pWnNs2XeD3ebqQ"
                                alt="Professional portrait of a male CEO in a modern office, wearing a smart casual blazer, confident expression"
                            />
                        </picture>
                        <h3 className="font-bold mb-1 text-xl text-text-primary">Sofia Ortiz</h3>
                        <p className="font-semibold mb-3 text-btn-primary">
                            Director Creativo
                        </p>
                        <p className="mt-auto text-text-secondary text-sm">
                            Líder de diseño UI/UX enfocado en crear experiencias intuitivas que deleitan a los usuarios finales.
                        </p>
                    </article> */}
                </section>
            </section>
        </section>
    )
};
export default TeamSection;