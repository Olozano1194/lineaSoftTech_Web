import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";



const FAQSection = () => {
    const [ activateIndex, setActivateIndex ] = useState<number | null>(null);

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
            answer: "Si. Podemos implementar herramientas de automarización e integración con servicios de IA ya ecistentes para mejorar procesos."
        }
    ];

    return (
        <section className="py-15" id='fqa'>
            <h2 className="font-black mb-10 text-3xl text-center text-text-primary tracking-tight lg:text-4xl">Preguntas Frecuentes</h2>
            { faqs.map((faq, index) => (
                <Disclosure
                    key={index} 
                    as="div"
                    defaultOpen={activateIndex === index} 
                    className="space-y-4 mb-7"
                >
                    {({ open }) => (
                        <div className='bg-white rounded-xl border border-slate-200 max-w-3xl overflow-hidden md:mx-auto'>
                            <DisclosureButton
                                className="w-full flex items-center justify-between p-6 cursor-pointer list-none transition-colors hover:bg-slate-50"
                                onClick={() => setActivateIndex(open ? null : index)}
                            >
                                <span className="font-bold text-text-primary">
                                    {faq.question}                                    
                                </span>
                                <MdArrowForwardIos 
                                    className={`transition-transform duration-300 ${ open ? "rotate-90" : ""}`} 
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