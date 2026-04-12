import { MdAdsClick, MdFavorite, MdVisibility } from "react-icons/md";

const MisionVisionSection = () => {
    return (
        <section className="px-6 py-24">
            <section className="max-w-7xl mx-auto" id="misionVisionValores">
                <div className="mb-16 text-center">
                    <h2 className="font-bold font-roboto mb-4 text-3xl">Lo Que Nos Define</h2>
                    <div className="bg-btn-primary h-1.5 mx-auto rounded-full w-20"></div>
                </div>
                <section className="gap-8 grid grid-cols-1 md:grid-cols-3">
                    {/* Mision */}
                    <article className="border border-text-footer-primary/20 bg-white flex flex-col items-center p-8 rounded-3xl shadow-sm text-center transition-shadow hover:shadow-md">
                        <div className="bg-bg-primary-fixed flex h-16 items-center justify-center mb-6 rounded-2xl w-16">
                            <span className="text-btn-primary text-3xl">
                                <MdAdsClick />
                            </span>
                        </div>
                        <h3 className="font-bold mb-4 text-xl text-text-primary">Misión</h3>
                        <p className="text-text-secondary">
                            Facilitar el acceso a la tecnología para emprendedores, creando soluciones digitales sencillas y accesibles que les permitan competir en el mercado actual.
                        </p>
                    </article>
                    {/* Vision */}
                    <article className="border border-text-footer-primary/20 bg-white flex flex-col items-center p-8 rounded-3xl shadow-sm text-center transition-shadow hover:shadow-md">
                        <div className="bg-bg-tertiary-fixed flex h-16 items-center justify-center mb-6 rounded-2xl w-16">
                            <span className="text-text-tertiary text-3xl">
                                <MdVisibility />
                            </span>
                        </div>
                        <h3 className="font-bold mb-4 text-xl text-text-primary">Visión</h3>
                        <p className="text-text-secondary">
                            Consolidarnos como un equipo de confianza para la digitalización de pequeños negocios, creciendo de la mano de nuestros clientes y perfeccionando nuestras capacidades técnicas.
                        </p>
                    </article>
                    {/* Valores */}
                    <article className="border border-text-footer-primary/20 bg-white flex flex-col items-center p-8 rounded-3xl shadow-sm text-center transition-shadow hover:shadow-md">
                        <div className="bg-bg-error-container flex h-16 items-center justify-center mb-6 rounded-2xl w-16">
                            <span className="text-text-error text-3xl">
                                <MdFavorite />
                            </span>
                        </div>
                        <h3 className="font-bold mb-4 text-xl text-text-primary">Valores</h3>
                        <p className="text-text-secondary">
                            Pasión por el detalle, ética inquebrantable, colaboración radical y una curiosidad insaciable por las tecnologías emergentes.
                        </p>
                    </article>
                </section>
            </section>
        </section>
    )
};
export default MisionVisionSection;