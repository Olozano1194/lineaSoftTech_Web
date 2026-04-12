const ProcessSection = () => {
    return (
        <section id="comoTrabajamos" className="bg-white overflow-hidden py-15 px-3.5 md:px-5 lg:px-16">
            <section className="grid gap-20 items-center lg:grid-cols-2">
                <div>
                    <h2 className="font-black mb-8 px-2 text-text-primary text-3xl tracking-tight lg:text-2xl">Cómo Trabajamos Contigo</h2>
                    <article className="space-y-12">
                        <article className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 rounded-full bg-btn-primary text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-btn-primary/30">
                                1
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-text-primary mb-2">Reunión Inicial</h4>
                                <p className="text-text-secondary leading-relaxed">Escuchamos tu idea o necesidad y definimos qué solución se adapta mejor a tu negocio.</p>
                            </div>
                        </article>
                        <article className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 rounded-full bg-btn-primary text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-btn-primary/30">
                                2
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-text-primary mb-2">Propuesta y Diseño</h4>
                                <p className="text-text-secondary leading-relaxed">Presentamos una propuesta clara con el alcance del proyecto y una vista previa de la solución.</p>
                            </div>
                        </article>
                        <article className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 rounded-full bg-btn-primary text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-btn-primary/30">
                                3
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-text-primary mb-2">Desarrollo</h4>
                                <p className="text-text-secondary leading-relaxed">Construimos tu página o sistema paso a paso, manteniéndote informado durante el proceso.</p>
                            </div>
                        </article>
                        <article className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 rounded-full bg-btn-primary text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-btn-primary/30">
                                4
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-text-primary mb-2">Entrega y Soporte</h4>
                                <p className="text-text-secondary leading-relaxed">Entregamos la solución lista para usar y brindamos acompañamiento inicial para su correcta implementación.</p>
                            </div>
                        </article>
                    </article>
                </div>
                <figure className="relative lg:max-w-xl">
                    <img 
                        src="/assets/images/process-team.jpg"
                        alt="Team Work"
                        className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-square"
                        data-alt="Team colla borating in a modern tech office environment" 
                    />
                    <div className="absolute -top-10 -right-10 w-3xl h-full border-2 border-btn-primary/20 rounded-3xl z-0 lg:max-w-xl"></div>
                </figure>                                
            </section>            
        </section>
    );
};
export default ProcessSection;