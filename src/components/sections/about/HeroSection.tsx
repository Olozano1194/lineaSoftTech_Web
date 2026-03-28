const HeroSection = () => {
    return (
        <section className="overflow-hidden px-6 py-24 relative md:py-32">
            <section className="max-w-7xl mx-auto text-center">
                <h1 className="font-roboto font-extrabold leading-tight mb-8 text-4xl text-text-primary tracking-tight md:text-6xl lg:text-7xl">
                    Impulsamos Tu Negocio <br className="hidden md:block" /> <span className="text-btn-primary">En El Mundo Digital</span>
                </h1>
                <p className="max-w-2xl mx-auto mb-5 text-lg text-text-secondary md:text-xl">
                    Somos dos ingenieros de sistemas apasionados por la tecnología. Ayudamos a emprendedores y pequeños negocios a dar sus primeros pasos digitales con soluciones prácticas y a su medida.                    
                </p>                
                <div className="flex flex-col gap-4 justify-center sm:flex-row">
                    <button className="bg-btn-primary cursor-pointer font-bold px-8 py-4 rounded-xl text-white transition-all hover:shadow-lg hover:shadow-btn-primary/20">Ver soluciones</button>
                    <button className="bg-text-secondary/10 cursor-pointer font-bold px-8 py-4 rounded-xl text-text-primary transition-all hover:bg-text-secondary/20">Nuestros valores</button>
                </div>
            </section>            
        </section>
    )
};
export default HeroSection;