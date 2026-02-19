

const ServicesSection = () => {
    return (
        <section className="w-full bg-white mt-8 pt-8">
            <div className="mb-12 text-center">
                <h2 className="font-black mb-4 text-text-primary text-3xl">Servicios Especializados</h2>
                <p className="max-auto text-text-secondary text-sm md:text-lg">
                    Diseñamos soluciones tecnológicas que resuelven problemas reales y generan impacto medible.
                </p>
            </div>
            <article className="gap-6 grid grid-cols-1 mt-8 pt-4 md:grid-cols-2 lg:grid-cols-4">
                <article className="group p-8 duration-300 border border-slate-100 bg-slate-50 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:translate-y-2">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-btn-primary/10 text-btn-primary flex items-center justify-center mb-6 group-hover:bg-btn-primary group-hover:text-white transition-colors">
                    <span>Icon</span>
                </div>
                <h3 className="text-text-primary text-xl font-bold mb-3 md:text-2xl">Landing Pages</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 md:text-lg">Sitios de alta conversión optimizados para SEO y experiencia de usuario.</p>
                <ul className="space-y-2 text-sm font-medium text-text-footer-primary">
                    <li className="flex items-center gap-2"><span className="text-xs text-btn-primary"></span>Diseño Responsivo</li>
                    <li className="flex items-center gap-2"><span className="text-xs text-btn-primary"></span>Copywriting Persuasivo</li>
                </ul>
                </article>
                {/* Software a medida */}
                <article className="group p-8 duration-300 border border-slate-100 bg-slate-50 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:translate-y-2">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-btn-primary/10 text-btn-primary flex items-center justify-center mb-6 group-hover:bg-btn-primary group-hover:text-white transition-colors">
                        <span>Icon</span>
                    </div>
                    <h3 className="text-text-primary text-xl font-bold mb-3 md:text-2xl">Software a Medida</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 md:text-lg">Desarrollo de aplicaciones web y móviles escalables y robustas.</p>
                    <ul className="space-y-2 text-sm font-medium text-text-footer-primary">
                        <li className="flex items-center gap-2"><span className="text-xs text-btn-primary"></span>Arquitectura</li>
                        <li className="flex items-center gap-2"><span className="text-xs text-btn-primary"></span>UX/UI Profesional</li>
                    </ul>
                </article>
                {/* Automatizacion */}
                <article className="group p-8 duration-300 border border-slate-100 bg-slate-50 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:translate-y-2">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-btn-primary/10 text-btn-primary flex items-center justify-center mb-6 group-hover:bg-btn-primary group-hover:text-white transition-colors">
                        <span>Icon</span>
                    </div>
                    <h3 className="text-text-primary text-xl font-bold mb-3 md:text-2xl">Automatización</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 md:text-lg">Optimización de flujos de trabajo con IA y herramientas no-code.</p>
                    <ul className="space-y-2 text-sm font-medium text-text-footer-primary">
                        <li className="flex items-center gap-2"><span className="text-xs text-btn-primary"></span>Integraciones API</li>
                        <li className="flex items-center gap-2"><span className="text-xs text-btn-primary"></span>Ahorro de tiempo</li>
                    </ul>
                </article>
                {/* Soporte */}
                <article className="group p-8 duration-300 border border-slate-100 bg-slate-50 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:translate-y-2">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-btn-primary/10 text-btn-primary flex items-center justify-center mb-6 group-hover:bg-btn-primary group-hover:text-white transition-colors">
                        <span>Icon</span>
                    </div>
                    <h3 className="text-text-primary text-xl font-bold mb-3 md:text-2xl">Soporte TI</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 md:text-lg">Mantenimiento preventivo y asistencia técnica 24/7 para tu empresa.</p>
                    <ul className="space-y-2 text-sm font-medium text-text-footer-primary">
                        <li className="flex items-center gap-2"><span className="text-xs text-btn-primary"></span>Seguridad 24/7</li>
                        <li className="flex items-center gap-2"><span className="text-xs text-btn-primary"></span>Consultoría</li>
                    </ul>
                </article>
            </article>            
        </section>
    );
};
export default ServicesSection;