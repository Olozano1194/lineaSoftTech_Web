


const WorkSection = () => { 
    return (
        <section className="py-15 bg-white" id="portafolio">
            <section className="flex items-center flex-col gap-6 justify-between mb-16 md:flex-row">
                <div id="portafolio">
                    <h2 className="font-black text-3xl text-text-primary tracking-tight lg:text-4xl">Proyectos y Prácticas Realizadas</h2>
                    <p className="max-w-xl text-text-secondary">Algunos trabajos y desarrollos que hemos realizado como parte de nuestra experiencia profesional y académica.</p>                    
                </div>
                <div className="flex gap-2">
                    <button className="font-bold bg-btn-primary cursor-pointer  px-4 py-2 text-white text-sm rounded-lg">Todos</button>
                    <button className="cursor-pointer font-bold px-4 py-2 text-text-secondary text-sm rounded-lg transition-colors hover:bg-slate-100">Personales</button>
                    <button className="cursor-pointer font-bold px-4 py-2 text-text-secondary text-sm rounded-lg transition-colors hover:bg-slate-100">Académicos</button>
                </div>
            </section>
            <article className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <picture className="group relative overflow-hidden rounded-2xl bg-text-primary">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9eAOPy5WPHTssbjZK57MW5vxsbRSmSiNXxWQsXAzwA3BEkzIBsmtyNUHPRMKUdE8mU7qIfKs5rgV24htRgnYklOFaTm7GQS2RxBUVWj8KkyesENwCwMqNnU40GQ1v8CCc0aS-jV4dR-fAUav1L03MhBIdNS9_55DHuBTOpQTulvjYjT1VyHFi7CQUT2SwqAnDJJUV2dfZgUVpwlFi7XuIB98AucXsaE-JXPhWvdZGHCN5J7YANIut9OBBjMw2tn_bGn0Mb26q9_0"
                        className="w-full h-80 object-cover opacity-90 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500" 
                        alt="Project 1"
                        data-alt="SaaS plataform UI for financial data visualization" 
                    />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-btn-primary text-sm font-bold uppercase mb-2">SaaS / Fintech</span>
                        <h4 className="text-2xl font-bold text-white mb-2">Financify Dashboard</h4>
                        <p className="text-slate-300 text-sm">Plataforma de gestión financiero automatizado con integración bancaria.</p>
                    </div>                        
                </picture>
                <picture className="group relative overflow-hidden rounded-2xl bg-text-primary">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPiZZl8b4Q8tMwWBBzWLOZqngGJLZ8-mYkiJbWWRAbGoYONbINi-l2EMGuOcon8RSxjlvcaWqZf_iuXW7hljqRGEsgLOnxWAywIMW8TlUR5ky5WYARIZw9uIt-VLWYOInmXWTVEMNSbGj0BB0il2YXf6vD62_x3_WBx6VB4wLBQ9y1aWSfrdoC7fWACMJIQkXwZB_nuSlzCy4WBjzuQpJS5aOjmOH6izAI35af-AhC3B6aDPJoVBQsMePfbI8oVCfNDCNOmn4uHSI"
                        className="w-full h-80 object-cover opacity-90 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500" 
                        alt="Project 1"
                        data-alt="SaaS plataform UI for financial data visualization" 
                    />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-btn-primary text-sm font-bold uppercase mb-2">E-commerce / Retail</span>
                        <h4 className="text-2xl font-bold text-white mb-2">LuxeCart Shop</h4>
                        <p className="text-slate-300 text-sm">Landing page de alta conversión para marca de moda premium.</p>
                    </div>
                </picture>
                <picture className="group relative overflow-hidden rounded-2xl bg-text-primary">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu9EUhKQ8zOz0g2WD8pRq_iYAmn-lczLyDnhuRbVj7WnsElaMOWZmyMPq0rf4c3svgZ2MzHXKSbC8XPMfNL_zmU8sDVLQ1KU6yvggyeynaicMJymrLp3FNirROG8bsXwqvkzL8PHexRk2xfvAr78Gcqg2g3L8FQq8P7Kq84U_LPuhmqthlLi41zkcpITLPNgZcMgvzn4iL9ce844Ut3VdClAIAJaECNhRa8JcBSzLn776vM1owctBfBqngOlPjDB6ICooVzUd6pX4"
                        className="w-full h-80 object-cover opacity-90 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500" 
                        alt="Project 1"
                        data-alt="SaaS plataform UI for financial data visualization" 
                    />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-btn-primary text-sm font-bold uppercase mb-2">Software / Logística</span>
                        <h4 className="text-2xl font-bold text-white mb-2">LogiTrack System</h4>
                        <p className="text-slate-300 text-sm">Software a medida para rastreo de flotas en tiempo real.</p>
                    </div>
                </picture>
            </article>
        </section>

    );
};
export default WorkSection;