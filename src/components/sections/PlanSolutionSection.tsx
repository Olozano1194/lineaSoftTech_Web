import PlanCard from "../ui/PlanCard";
import { MdLanguage, MdStorefront, MdSpeed } from "react-icons/md";


const PlanSolutionSection = () => {
    return (
        <section id="planes" className="py-16 px-6">
            <div className="max-w-300 mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="font-black leading-tight mb-4 text-3xl text-text-primary tracking-tight md:text-4xl">Planes y Soluciones</h2>
                    <p>Ofrecemos soluciones tecnológicas adaptadas a las necesidades de emprendedores y pequeños negocios. Elige el camino hacia tu transformación digital.</p>
                </div>
                <article className="gap-8 grid grid-cols-1 md:grid-cols-3">
                    <PlanCard
                        icon={MdLanguage}
                        title="Plan Presencia Web"
                        description="Ideal para profesionales que buscan visibilidad inmediata."
                        priceFrom={280000}
                        features={[
                            "Landing page profesional",
                            "Diseño Responsive",
                            "Formulario de contacto",
                            "Botón directo de WhatsApp",
                            "Configuración inicial SEO",
                        ]}
                        planName="Plan Presencia Web"
                    />
                    <PlanCard
                        icon={MdStorefront}
                        title="Plan Negocio Digital"
                        description="Transforma tus procesos y gestiona tu contenido."
                        priceFrom={900000}
                        features={[
                            "Sitio Web Multipágina completo",
                            "Panel de administración privado",
                            "Base de datos estructurada",
                            "Formularios personalizados",
                            "Soporte técnico prioritario",
                        ]}
                        planName="Plan Negocio Digital"
                        isPopular
                    />
                    <PlanCard
                        icon={MdSpeed}
                        title="Plan Optimización Web"
                        description="Mejora el rendimiento de tu sitio actual."
                        priceFrom={200000}
                        features={[
                            "Mejora de velocidad de carga",
                            "Optimización para dispositivos móviles",
                            "Corrección de errores (Bugs)",
                            "Auditoría SEO técnica",
                        ]}
                        planName="Plan Optimización Web"
                    />
                </article>
            </div>
        </section>
    );
};
export default PlanSolutionSection;