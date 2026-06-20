import ProcessStep from "../ui/ProcessStep";

const ProcessSection = () => {
    return (
        <section id="comoTrabajamos" className="bg-white overflow-hidden py-15 px-3.5 md:px-5 lg:px-16">
            <section className="grid gap-20 items-center lg:grid-cols-2">
                <div>
                    <h2 className="font-black mb-8 px-2 text-text-primary text-3xl tracking-tight lg:text-2xl">Cómo Trabajamos Contigo</h2>
                    <article className="space-y-12">
                        <ProcessStep
                            number={1}
                            title="Reunión Inicial"
                            description="Escuchamos tu idea o necesidad y definimos qué solución se adapta mejor a tu negocio."
                        />
                        <ProcessStep
                            number={2}
                            title="Propuesta y Diseño"
                            description="Presentamos una propuesta clara con el alcance del proyecto y una vista previa de la solución."
                        />
                        <ProcessStep
                            number={3}
                            title="Desarrollo"
                            description="Construimos tu página o sistema paso a paso, manteniéndote informado durante el proceso."
                        />
                        <ProcessStep
                            number={4}
                            title="Entrega y Soporte"
                            description="Entregamos la solución lista para usar y brindamos acompañamiento inicial para su correcta implementación."
                        />
                    </article>
                </div>
                <figure className="relative lg:max-w-xl">
                    <img 
                        src="/assets/images/process-team.webp"
                        alt="Team Work"
                        className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-square"
                        loading="lazy"
                    />
                    <div className="absolute -top-10 -right-10 w-3xl h-full border-2 border-btn-primary/20 rounded-3xl z-0 lg:max-w-xl"></div>
                </figure>                                
            </section>            
        </section>
    );
};
export default ProcessSection;