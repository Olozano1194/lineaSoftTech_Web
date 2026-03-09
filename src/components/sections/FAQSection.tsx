import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
// import { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";


const FAQSection = () => {
    // const [ activateIndex, setActivateIndex ] = useState<number | null>(null);

    const faqs = [
        {
            question: "¿Cuánto tiempo toma desarrollar una Landing Page?",
            answer: "El tiempo promedio de desarrollo es de 7 a 10 días hábiles, dependiendo del alcance del proyecto y la claridad de la información proporcionada."
        },
        {
            question: "¿Ofrecen mantenimiento después del lanzamiento?",
            answer: "Sí. Ofrecemos servicios de soporte y mantenimiento para asegurar que tu sitio o sistema funcione correctamente después de su publicación."
        },
        {
            question: "¿Ofrecen mantenimiento de computadores?",
            answer: "Sí. Tambien contamos con planes de soporte técnico para equipos y software, según tus necesidades."
        },
        {
            question: "¿Pueden integrar soluciones con Inteligencia Artificial en mis procesos?",
            answer: "Si. Podemos implementar herramientas de automarización e integración con servicios de IA ya existentes para mejorar procesos."
        },
        {
            question: "¿Cuánto cuesta una página web?",
            answer: "El costo de una página web depende de la complejidad, número de secciones y funcionalidades que necesites. Podemos hacer desde páginas simples hasta soluciones personalizadas a medida."
        },
        {
            question: "¿Necesito comprar dominio y hosting?",
            answer: "Sí, el dominio y el hosting son necesarios para que tu página esté disponible en Internet. Podemos asesorarte para elegir las mejores opciones y ayudarte con la configuración."
        },
        {
            question: "¿La página funciona en celulares?",
            answer: "Sí. Todas nuestras páginas son responsivas, lo que significa que se adaptan y se ven correctamente en celulares, tablets y computadoras."
        }
    ];

    return (
        <section className="bg-white py-15 px-3.5 md:px-5 lg:px-16" id='faq'>
            <h2 className="font-black mb-10 text-3xl text-center text-text-primary tracking-tight lg:text-4xl">Preguntas Frecuentes</h2>
            {faqs.map((faq, index) => (
                <Disclosure
                    key={index}
                    as="div"
                    // defaultOpen={activateIndex === index} 
                    className="space-y-4 mb-7"
                >
                    {({ open }) => (
                        <div className='rounded-xl border border-slate-200 max-w-3xl overflow-hidden md:mx-auto'>
                            <DisclosureButton
                                className="w-full flex items-center justify-between p-6 cursor-pointer list-none transition-colors hover:bg-slate-50"
                            // onClick={() => setActivateIndex(open ? null : index)}
                            >
                                <span className="font-bold text-text-primary">
                                    {faq.question}
                                </span>
                                <MdArrowForwardIos
                                    className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`}
                                />
                            </DisclosureButton>
                            <DisclosurePanel className="p-4 text-text-secondary">
                                {faq.answer}
                            </DisclosurePanel>
                        </div>
                    )}
                </Disclosure>
            ))}
        </section>
    );
};
export default FAQSection;