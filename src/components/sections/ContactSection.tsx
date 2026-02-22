import { MdOutlineEmail, MdOutlinePhone, MdOutlineCircle } from "react-icons/md";


const ContactSection = () => {
    return (
        <section className="bg-white flex flex-col py-15 relative overflow-hidden md:flex-row lg:gap-x-8 lg:items-center lg:justify-center">
            <section className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-8" id="contacto">
                    <h2 className="font-black text-4xl text-text-primary tracking-tight lg:text-5xl">Hablemos de tu Próximo<br />
                    <span className="text-btn-primary">Gran Proyecto</span>                    
                    </h2>
                    <p className="mb-8 leading-relaxed text-sm text-text-secondary md:text-lg">
                        Estamos listos para escucharte y diseñar la solución tecnológica que tu negocio necesita para escalar.
                    </p>
                </div>
                <div className="space-y-6">
                    <p className="flex items-center gap-4 text-slate-700">
                        <MdOutlineEmail className="w-12 h-12 rounded-full bg-btn-primary/10 p-2 text-btn-primary flex items-center justify-center" />
                        <span className="font-bold">contacto@lineasofttech.com</span>                    
                    </p>
                    <p className="flex items-center gap-4 text-slate-700">
                        <MdOutlinePhone className="w-12 h-12 rounded-full bg-green-500/10 p-2 text-green-600 flex items-center justify-center" />
                        <span className="font-bold">+57 300 302 4589</span>
                    </p>
                </div>
                <div className="mt-8">
                    <button className="w-full bg-green-500 cursor-pointer font-bold gap-3 flex items-center px-8 py-4 text-lg text-white shadow-green-500/20 transition-all rounded-xl hover:bg-green-600 hover:scale-105 md:w-sm">
                        <MdOutlineCircle className="bg-white text-sm rounded-full" />
                        Escríbenos pr WhatsApp
                    </button>
                </div>                                
            </section>
            <form className="w-80 bg-slate-100/80 flex flex-col items-center justify-center m-auto mt-10 py-5 px-6 gap-6 space-y-6 rounded-xl md:w-2xl md:max-w-2xl md:px-10 md:py-15">
                <div className="w-full grid grid-cols-1 mb-0 gap-4 md:grid-cols-2">
                    {/* name */}
                    <label className="w-full flex flex-col font-black gap-1">
                        Nombre
                        <input type="text" className="bg-white border border-slate-300 font-medium px-4 py-3 rounded-lg focus:ring-2 focus:ring-btn-primary focus:border-btn-primary outline-none transition-all" placeholder="Ej. Juan Pérez"></input>
                    </label>
                    {/* email */}
                    <label className="w-full flex flex-col font-black gap-1">
                        Correo
                        <input type="email" className="bg-white border border-slate-300 font-medium px-4 py-3 rounded-lg focus:ring-2 focus:ring-btn-primary focus:border-btn-primary outline-none transition-all" placeholder="tu@empresa.com" />
                    </label>                    
                </div>                
                {/* Service */}
                <label className="w-full flex flex-col font-black gap-1 mb-0">
                    Servicio de interés
                    <select className="bg-white border border-slate-300 font-medium px-4 py-3 rounded-lg focus:ring-2 focus:ring-btn-primary focus:border-btn-primary outline-none transition-all">
                        <option value="">Escoge una opción</option>
                        <option value="">Landing Page</option>
                        <option value="">Desarrollo de Aplicaciones Web</option>
                        <option value="">Mantenimiento de Computadores</option>
                    </select>
                </label>
                {/* Message */}
                <label className="w-full flex flex-col font-black gap-1 mb-0">
                    Mensaje
                    <textarea name="" id="" className="bg-white border border-slate-300 font-medium px-4 py-3 rounded-lg focus:ring-2 focus:ring-btn-primary focus:border-btn-primary outline-none transition-all" placeholder="Cuéntanos un poco sobre tu idea...."></textarea>
                </label>
                {/* btn */}
                <div className="flex md:mt-8 md:items-center md:justify-center">
                    <button type="submit" className="w-full cursor-pointer bg-btn-primary font-bold flex items-center justify-center px-7 py-4 text-white rounded-xl hover:bg-btn-primary/90 hover:scale-105 shadow-lg shadow-btn-primary/20 transition-all md:w-60">
                        Enviar mensaje
                    </button>
                </div>                
            </form>
        </section>
    );    
};
export default ContactSection;