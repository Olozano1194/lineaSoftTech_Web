import { MdLanguage, MdOutlineChat } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";


const PlanSolutionSection = () => {
    return (
        <section id="planes" className="bg-white py-16 px-6">
            <div className="max-w-300 mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="font-black leading-tight mb-4 text-3xl text-text-primary tracking-tight md:text-4xl">Planes y Soluciones</h2>
                    <p>Ofrecemos soluciones tecnológicas adaptadas a las necesidades de emprendedores y pequeños negocios. Elige el camino hacia tu transformación digital.</p>
                </div>
                <article className="gap-8 grid grid-cols-1 md:grid-cols-3">
                    {/* Plan 1 */}
                    <article className="bg-white border border-slate-200 flex flex-col gap-6 p-8 rounded-xl shadow-sm transition-shadow hover:shadow-md">
                        <section className="flex flex-col gap-2">
                            <div className="bg-btn-primary/10 p-3 reunded-lg w-fit">
                                <span className="text-btn-primary"><MdLanguage /></span>
                            </div>
                            <h3 className="font-bold leading-tight mt-2 text-text-primary text-xl">Plan Presencia Web</h3>
                            <p className="text-text-secondary text-sm">Ideal para profesionales que buscan visibilidad inmediata.</p>
                        </section>
                        <ul className="flex flex-col gap-4 grow">
                            <li className="text-slate-700 text-sm">
                                <span className="flex font-semibold gap-3 items-center"><FaCheckCircle className="text-green-500 text-lg" />Landing page profesional</span>
                            </li>
                            <li className="text-slate-700 text-sm">
                                <span className="flex font-semibold gap-3 items-center"><FaCheckCircle className="text-green-500 text-lg" />Diseño Responsive</span>
                            </li>
                            <li className="text-slate-700 text-sm">
                                <span className="flex font-semibold gap-3 items-center"><FaCheckCircle className="text-green-500 text-lg" />Formulario de contacto</span>
                            </li>
                            <li className="text-slate-700 text-sm">
                                <span className="flex font-semibold gap-3 items-center"><FaCheckCircle className="text-green-500 text-lg" />Botón directo de WhatsApp</span>
                            </li>
                            <li className="text-slate-700 text-sm">
                                <span className="flex font-semibold gap-3 items-center "><FaCheckCircle className="text-green-500 text-lg" />Configuración inicial SEO</span>
                            </li>
                        </ul>
                        <button className="bg-btn-primary cursor-pointer font-bold flex ga-2 h-12 items-center justify-center mt-4 px-4 rounded-lg text-white text-sm transition-all w-full hover:bg-btn-primary/90">
                            <span className="text-lg"><MdOutlineChat /></span>
                            Cotización personalizada
                        </button>
                    </article>
                    {/* Plan 2 */}
                    <article className="bg-white border-2 border-btn-primary flex flex-col gap-6 p-8 rounded-xl scale-105 shadow-sm transition-shadow z-10 hover:shadow-md">
                        <section className="absolute bg-btn-primary font-bold -left-1 px-4 py-2 text-xs text-white tracking-wider -top-3 translate-x-30 rounded-full uppercase md:text-sm md:translate-x-15 md:-top-5">
                            Más Popular
                        </section>
                        <section className="flex flex-col gap-2">
                            <div className="bg-btn-primary/10 p-3 reunded-lg w-fit">
                                <span className="text-btn-primary"><MdLanguage /></span>
                            </div>
                            <h3 className="font-bold leading-tight mt-2 text-text-primary text-xl">Plan Negocio Digital</h3>
                            <p className="text-text-secondary text-sm">Transforma tus procesos y gestiona tu contenido.</p>
                        </section>
                        <ul className="flex flex-col gap-4 grow">
                            <li className="text-slate-700 text-sm">
                                <span className="flex font-semibold gap-3 items-center"><FaCheckCircle className="text-green-500 text-lg" />Sitio Web Multipágina completo</span>
                            </li>
                            <li className="text-slate-700 text-sm">
                                <span className="flex font-semibold gap-3 items-center"><FaCheckCircle className="text-green-500 text-lg" />Panel de administración privado</span>
                            </li>
                            <li className="text-slate-700 text-sm">
                                <span className="flex font-semibold gap-3 items-center"><FaCheckCircle className="text-green-500 text-lg" />Base de datos estructurada</span>
                            </li>
                            <li className="text-slate-700 text-sm">
                                <span className="flex font-semibold gap-3 items-center"><FaCheckCircle className="text-green-500 text-lg" />Formularios personalizados</span>
                            </li>
                            <li className="text-slate-700 text-sm">
                                <span className="flex font-semibold gap-3 items-center "><FaCheckCircle className="text-green-500 text-lg" />Soporte técnico prioritario</span>
                            </li>
                        </ul>
                        <button className="bg-btn-primary cursor-pointer font-bold flex ga-2 h-12 items-center justify-center mt-4 px-4 rounded-lg text-white text-sm transition-all w-full hover:bg-btn-primary/90">
                            <span className="text-lg"><MdOutlineChat /></span>
                            Cotización personalizada
                        </button>
                    </article>
                    {/* Plan 3 */}
                    <article className="bg-white border border-slate-200 flex flex-col gap-6 p-8 rounded-xl shadow-sm transition-shadow hover:shadow-md">
                        <section className="flex flex-col gap-2">
                            <div className="bg-btn-primary/10 p-3 reunded-lg w-fit">
                                <span className="text-btn-primary"><MdLanguage /></span>
                            </div>
                            <h3 className="font-bold leading-tight mt-2 text-text-primary text-xl">Plan Optimización Web</h3>
                            <p className="text-text-secondary text-sm">Mejora el rendimiento de tu sitio actual.</p>
                        </section>
                        <ul className="flex flex-col gap-4 grow">
                            <li className="text-slate-700 text-sm">
                                <span className="flex font-semibold gap-3 items-center"><FaCheckCircle className="text-green-500 text-lg" />Mejora de velocidad de carga</span>
                            </li>
                            <li className="text-slate-700 text-sm">
                                <span className="flex font-semibold gap-3 items-center"><FaCheckCircle className="text-green-500 text-lg" />Optimización para dispositivos móviles</span>
                            </li>
                            <li className="text-slate-700 text-sm">
                                <span className="flex font-semibold gap-3 items-center"><FaCheckCircle className="text-green-500 text-lg" />Corrección de errores (Bugs)</span>
                            </li>
                            <li className="text-slate-700 text-sm">
                                <span className="flex font-semibold gap-3 items-center"><FaCheckCircle className="text-green-500 text-lg" />Auditoría SEO técnica</span>
                            </li>                            
                        </ul>
                        <button className="bg-btn-primary cursor-pointer font-bold flex ga-2 h-12 items-center justify-center mt-4 px-4 rounded-lg text-white text-sm transition-all w-full hover:bg-btn-primary/90">
                            <span className="text-lg"><MdOutlineChat /></span>
                            Cotización personalizada
                        </button>
                    </article>

                </article>
            </div>
        </section>
    );
};
export default PlanSolutionSection;