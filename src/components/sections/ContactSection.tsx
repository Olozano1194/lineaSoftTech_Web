import { useForm } from 'react-hook-form';
//Mensajes
import { toast } from 'react-hot-toast';
import { MdOutlineEmail, MdOutlinePhone, MdOutlineCircle } from "react-icons/md";

type FormData = {
    nombre: string;
    email: string;
    servicio: string;
    mensaje: string;
    website?: string; // honeypot
};


const ContactSection = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = handleSubmit(async (data) => {
        if (data.website) return; // honeypot
        try {
            const response = await fetch("https://formsubmit.co/ajax/contacto@lineasofttech.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();

            if (!response.ok) throw new Error(result.message || "Error al enviar el mensaje");

            toast.success("Mensaje enviado. Te responderemos en menos de 24 horas.");
            reset();

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error al enviar el mensaje";
            toast.error(errorMessage);
        }
    });

    return (
        <section id="contacto" className="flex flex-col py-15 relative overflow-hidden md:flex-row px-3.5 md:px-5 lg:px-16 lg:gap-x-8 lg:items-center lg:justify-center">
            <section className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-8">
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
                {/* btn whatsapp */}
                <div className="mt-8">
                    <a
                        href="https://wa.me/573003024589"
                        target="_blank"
                        rel="noopener noreFerrer" 
                        className="w-full bg-green-500 cursor-pointer font-bold gap-3 flex items-center px-8 py-4 text-lg text-white shadow-green-500/20 transition-all rounded-xl hover:bg-green-600 hover:scale-105 md:w-sm"
                    >
                        <MdOutlineCircle className="bg-white text-sm rounded-full" />
                        Escríbenos por WhatsApp
                    </a>
                </div>
            </section>
            <form
                onSubmit={onSubmit}
                className="w-80 bg-white/80 flex flex-col items-center justify-center m-auto mt-10 py-5 px-6 gap-6 space-y-6 rounded-xl md:w-2xl md:max-w-2xl md:px-10 md:py-15"
            >
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="Nuevo mensaje desde la web" />
                {/* honeypot anti bots */}
                <input
                    type="text"
                    {...register("website")}
                    className="hidden"
                />
                <div className="w-full grid grid-cols-1 mb-0 gap-4 md:grid-cols-2">
                    {/* name */}
                    <label className="w-full flex flex-col font-black gap-1">
                        Nombre
                        <input
                            type="text"
                            className="bg-white border border-slate-300 font-medium px-4 py-3 rounded-lg focus:ring-2 focus:ring-btn-primary focus:border-btn-primary outline-none transition-all" placeholder="Ej. Juan Pérez"
                            {...register('nombre', {
                                required: {
                                    value: true,
                                    message: 'Nombre requerido'
                                },
                                minLength: {
                                    value: 4,
                                    message: 'El nombre debe tener como minimo 4 letras'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'El nombre debe tener como maximo 20 letras'
                                },
                                pattern: {
                                    value: /^[A-Za-z]+(?:\s[A-Za-z]+)?$/,
                                    message: 'Nombre invalido'
                                },
                            })}
                        />
                        {
                            errors.nombre && <span className='text-red-500 text-sm'>{errors.nombre.message}</span>
                        }
                    </label>
                    {/* email */}
                    <label className="w-full flex flex-col font-black gap-1">
                        Correo
                        <input
                            type="email"
                            className="bg-white border border-slate-300 font-medium px-4 py-3 rounded-lg focus:ring-2 focus:ring-btn-primary focus:border-btn-primary outline-none transition-all" placeholder="tu@empresa.com"
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Correo requerido'
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Correo invalido'
                                },
                            })}
                        />
                        {
                            errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>
                        }
                    </label>
                </div>
                {/* Service */}
                <label className="w-full flex flex-col font-black gap-1 mb-0">
                    Servicio de interés
                    <select
                        className="bg-white border border-slate-300 font-medium px-4 py-3 rounded-lg focus:ring-2 focus:ring-btn-primary focus:border-btn-primary outline-none transition-all"
                        {...register('servicio', {
                            required: {
                                value: true,
                                message: 'Servicio requerido'
                            },
                        })}
                    >
                        <option value="">Escoge una opción</option>
                        <option value="landingPage">Landing Page</option>
                        <option value="aplicacionWeb">Aplicacion Web</option>
                        <option value="optimizacionWeb">Optimización Web</option>
                        <option value="automatizacion">Automatización</option>
                        <option value="mantenimientoComputadores">Mantenimiento de Computadores</option>
                    </select>
                    {
                        errors.servicio && <span className='text-red-500 text-sm'>{errors.servicio.message}</span>
                    }
                </label>
                {/* Message */}
                <label className="w-full flex flex-col font-black gap-1 mb-0">
                    Mensaje
                    <textarea
                        className="bg-white border border-slate-300 font-medium px-4 py-3 rounded-lg focus:ring-2 focus:ring-btn-primary focus:border-btn-primary outline-none transition-all"
                        placeholder="Cuéntanos un poco sobre tu idea...."
                        {...register("mensaje", {
                            required: "Escribe un mensaje",
                            minLength: {
                                value: 10, message: "Explica un poco más tu proyecto"
                            }
                        })}
                    >

                    </textarea>
                    {errors.mensaje && <span className='text-red-500 text-sm'>{errors.mensaje.message}</span>}
                </label>
                {/* btn */}
                <div className="flex md:mt-8 md:items-center md:justify-center">
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-btn-primary font-bold flex items-center justify-center px-7 py-4 text-white rounded-xl hover:bg-btn-primary/90 hover:scale-105 shadow-lg shadow-btn-primary/20 transition-all md:w-60"
                    >
                        Enviar mensaje
                    </button>
                </div>
            </form>
        </section>
    );
};
export default ContactSection;