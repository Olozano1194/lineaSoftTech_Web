import { MdOutlineSupportAgent, MdWeb } from "react-icons/md";
import { FaRobot, FaCheck } from "react-icons/fa6";
import { IoMdCode } from "react-icons/io";


const ServicesSection = () => {
    return (
        <section className="w-full bg-white pt-8 py-15">
            <div className="mb-12 text-center">
                <h2 className="font-black mb-4 text-text-primary text-3xl">Nuestros Servicios</h2>
                <p className="max-auto text-text-secondary text-sm md:text-lg">
                    Ayudamos a emprendedores y pequeños negocios a digitalizar sus procesos con soluciones prácticas y funcionales.
                </p>
            </div>
            <article className="gap-6 grid grid-cols-1 mt-8 pt-4 md:grid-cols-2 lg:grid-cols-4">
                <article className="group p-8 duration-300 border border-slate-100 bg-slate-50 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:translate-y-2">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-btn-primary/10 text-btn-primary flex items-center justify-center mb-6 group-hover:bg-btn-primary group-hover:text-white transition-colors">
                    <span><MdWeb className="text-3xl" /></span>
                </div>
                <h3 className="text-text-primary text-xl font-bold mb-3 md:text-2xl">Landing Pages y Páginas Web</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 md:text-lg">Diseñamos páginas web modernas y funcionales para que tu negocio tenga presencia profesional en internet.</p>
                <ul className="space-y-2 text-sm font-medium text-text-footer-primary">
                    <li className="flex items-center gap-2">
                        <span className="text-[10px] bg-btn-primary p-0.5 text-white rounded-full"><FaCheck /></span>
                        Diseño adaptable a celular y computadoras
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-[10px] bg-btn-primary p-0.5 text-white rounded-full"><FaCheck /></span>
                        Formularios de contecto y WhatsApp
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-[10px] bg-btn-primary p-0.5 text-white rounded-full"><FaCheck /></span>
                        Estructura clara y profesional
                    </li>
                </ul>
                </article>
                {/* Software a medida */}
                <article className="group p-8 duration-300 border border-slate-100 bg-slate-50 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:translate-y-2">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-btn-primary/10 text-btn-primary flex items-center justify-center mb-6 group-hover:bg-btn-primary group-hover:text-white transition-colors">
                        <span><IoMdCode className="text-3xl" /></span>
                    </div>
                    <h3 className="text-text-primary text-xl font-bold mb-3 md:text-2xl">Desarrollo de Aplicaciones Web</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 md:text-lg">Creamos sistemas web básicos para digitalizar procesos como inventarios, registros o gestión interna.</p>
                    <ul className="space-y-2 text-sm font-medium text-text-footer-primary">
                        <li className="flex items-center gap-2">
                            <span className="text-[10px] bg-btn-primary p-0.5 text-white rounded-full"><FaCheck /></span>
                            Panel administrativo sencillo
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[10px] bg-btn-primary p-0.5 text-white rounded-full"><FaCheck /></span>
                            Base de datos estructurada
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[10px] bg-btn-primary p-0.5 text-white rounded-full"><FaCheck /></span>
                            Interfaz clara y funcional
                        </li>
                    </ul>
                </article>
                {/* Automatizacion */}
                <article className="group p-8 duration-300 border border-slate-100 bg-slate-50 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:translate-y-2">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-btn-primary/10 text-btn-primary flex items-center justify-center mb-6 group-hover:bg-btn-primary group-hover:text-white transition-colors">
                        <span><FaRobot className="text-3xl" /></span>
                    </div>
                    <h3 className="text-text-primary text-xl font-bold mb-3 md:text-2xl">Automatización Básica de Procesos</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 md:text-lg">Implementamos soluciones simples para reducir tareas manuales y mejorar la organización.</p>
                    <ul className="space-y-2 text-sm font-medium text-text-footer-primary">
                        <li className="flex items-center gap-2">
                            <span className="text-[10px] bg-btn-primary p-0.5 text-white rounded-full"><FaCheck /></span>
                            Formularios automatizados
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[10px] bg-btn-primary p-0.5 text-white rounded-full"><FaCheck /></span>
                            Integraciones básicas entre herramientas
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[10px] bg-btn-primary p-0.5 text-white rounded-full"><FaCheck /></span>
                            Organización digital de información
                        </li>
                    </ul>
                </article>
                {/* Soporte */}
                <article className="group p-8 duration-300 border border-slate-100 bg-slate-50 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:translate-y-2">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-btn-primary/10 text-btn-primary flex items-center justify-center mb-6 group-hover:bg-btn-primary group-hover:text-white transition-colors">
                        <span><MdOutlineSupportAgent className="text-3xl" /></span>
                    </div>
                    <h3 className="text-text-primary text-xl font-bold mb-3 md:text-2xl">Soporte Técnico y Mantenimiento</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 md:text-lg">Brindamos soporte técnico para equipos de escritorio y portátiles en hogares y pequeños negocios.</p>
                    <ul className="space-y-2 text-sm font-medium text-text-footer-primary">
                        <li className="flex items-center gap-2">
                            <span className="text-[10px] bg-btn-primary p-0.5 text-white rounded-full"><FaCheck /></span>
                            mantenimiento preventivo y correctivo
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[10px] bg-btn-primary p-0.5 text-white rounded-full"><FaCheck /></span>
                            Formateo e instalación de sistemas operativos
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[10px] bg-btn-primary p-0.5 text-white rounded-full"><FaCheck /></span>
                            Instalación de impresoras y periféricos
                        </li>                        
                    </ul>
                </article>
            </article>            
        </section>
    );
};
export default ServicesSection;