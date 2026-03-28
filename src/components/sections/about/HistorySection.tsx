import { MdRocketLaunch } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";


const HistorySection = () => {
    return (
        <section className="px-6 py-24 bg-white">
            <section className="max-w-7xl mx-auto">
                <section className="gap-12 grid grid-cols-1 items-center lg:grid-cols-2">
                    <article className="relative">
                        <picture className="aspect-square overflow-hidden shadow-2xl">
                            <img
                                className="h-full object-cover rounded-3xl w-full"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgECokCoXaXgtKRrUC5CLr219B59nZbCZ5-74Ntwh0s7zJoX35EgsSxNcbDvBAcScjUv1CVe5qHmybqLg6NOV8BPuMZ1uYEL5vMnYOJZhZS495nv5oczG8XVFAgHro3BMmxq49OjbcmeN7cgdKMPFGaOZJ2lAbowaFuOArPV2ZfCre83DlZ1oPOTYGdocl8ummWvaFVRecr_ZueH224pc-tbKUgDLs5RPNKZNdfbobBcj2VVxI7D7XVQComafH_5TWqtqK2C8HONI"
                                alt="Modern collaborative office space with team members working on glass boards and laptops in a bright airy environment" />
                        </picture>
                        <div className="absolute -bottom-6 bg-white hidden p-6 rounded-2xl -right-6 shadow-xl md:flex md:flex-col">
                            <span className="font-black text-btn-primary text-4xl">
                                1+
                            </span>
                            <span className="font-medium text-sm text-text-secondary">
                                Años de experiencia
                            </span>
                        </div>
                    </article>
                    <article className="space-y-6">
                        <h2 className="font-roboto font-bold text-3xl text-text-primary">
                            Nuestra Historia
                        </h2>
                        <p className="leading-relaxed text-lg text-text-secondary">
                            LineaSoftTech surge de una idea clara: apoyar a los negocios locales y emprendedores que quieren evolucionar hacia lo digital pero no saben por dónde empezar.                           
                        </p>
                        <p className="leading-relaxed text-lg text-text-secondary">
                            Estamos iniciando nuestro camino como desarrolladores independientes, lo que nos permite volcar toda nuestra energía y aprendizaje constante en cada proyecto real que asumimos. Entendemos que no necesitas sistemas complejos y costosos, sino herramientas simples, funcionales y económicas que funcionen desde el primer día.
                        </p>
                        <div className="gap-4 grid grid-cols-2 pt-4">
                            <div className="border border-text-footer-primary/10 bg-text-footer-primary/5 p-4 rounded-xl">
                                <span className="mg-2 text-btn-primary">
                                    <MdRocketLaunch className="text-2xl mb-2" />
                                </span>
                                <h4 className="font-bold text-text-primary">Aprendizaje constante</h4>
                                <p className="text-xs text-text-secondary">Aplicamos las últimas tendencias y herramientas para que tu proyecto no se quede atrás.</p>
                            </div>
                            <div className="border border-text-footer-primary/10 bg-text-footer-primary/5 p-4 rounded-xl">
                                <span className="mg-2 text-btn-primary">
                                    <FaShieldAlt className="text-2xl mb-2" />
                                </span>
                                <h4 className="font-bold text-text-primary">Cercanía</h4>
                                <p className="text-xs text-text-secondary">Sin tecnicismos complicados. Trabajamos de forma directa y clara contigo para que entiendas cada paso.</p>
                            </div>
                        </div>
                    </article>
                </section>
            </section>
        </section>
    )
};
export default HistorySection;