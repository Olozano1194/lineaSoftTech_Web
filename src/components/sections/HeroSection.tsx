import { ArrowRightIcon } from "@heroicons/react/16/solid";


const Hero = () => {
    return (
        <section className="flex flex-col py-15">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-btn-primary/10 text-btn-primary text-sm font-bold uppercase tracking-wider w-fit">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-btn-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-btn-primary"></span>
                </span>
                Soluciones Tecnológicas accesibles
            </div>
            <section className="mx-auto gap-12 items-center grid lg:grid-cols-2">
                {/* article */}
                <article className="mt-10 lg:mt-0">
                    <h1 className="font-black leading-[1.1] text-4xl text-text-primary tracking-tight lg:text-7xl">
                        Tecnológia Práctica para Hacer <span className="text-btn-primary underline decoration-btn-primary/20 ">Crecer tu Negocio</span>
                    </h1>
                    <p className="mt-5 text-text-secondary text-lg max-w-xl leading-relaxed lg:text-xl">
                        Creamos páginas web, sistemas básicos y brindamos soporte técnico para ayudarte a digitalizar tu negocio de forma simple, clara y sin complicaciones.
                    </p>
                    {/* btn */}
                    <div className="w-full mt-4 md:flex md:gap-5">
                        <button className="flex bg-btn-primary cursor-pointer font-bold gap-x-1.5 items-center px-8 py-4 text-white text-lg transition-all rounded-lg shadow-lg shadow-btn-primary/20 hover:bg-btn-primary/90 hover:scale-105 md:text-lg">Ver Servicios <ArrowRightIcon className="w-5 h-5"/></button>
                        <button className="bg-white cursor-pointer font-bold items-center mt-5 px-8 py-4 text-text-primary text-lg transition-all rounded-lg hover:border-btn-primary hover:scale-105 md:mt-0 md:text-lg">Contactar</button>                    
                    </div>                
                </article>
                <figure className="relative max-w-2xl">
                    <div className="absolute -top-10 -let-10 w-40 h-40 bg-btn-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-btn-primary/5 rounded-full blur-3xl"></div>
                    <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 max-w-2xl">
                        <div className="w-full bg-slate-50 aspect-4/3 rounded-lg overflow-hidden relative">
                            <img 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9vdjziNPntoQSNco7upKTB7xrajUxWS9miz7N8wqPtv6hPu6WbR6NBsLwaxDfG25cozKpYUp9eC-khP5qH5TLrf1087zigGJ0JXQHmZxCWk_4k91GSm8YHDDtFU_rXYYcX-0fdBPUYEDgCTej6AmzABbWOa2_6kGevRHsXiIVL2wivLFg128ObV_dbF3-d_igOKIEn1gYisop1JQmvss6oBi7XMsCXS2P8V8CHfAJigf2nXfHgHtbIL-VrjrVs9nI_h3vvYPfyeY" 
                                className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Interface Showcase" 
                                data-alt="Dashboard analytics and modern software interface" 
                            />
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-btn-primary/20 to-transparent"></div>
                    </div>                                
                </figure>
            </section>            
        </section>
    );
};
export default Hero;