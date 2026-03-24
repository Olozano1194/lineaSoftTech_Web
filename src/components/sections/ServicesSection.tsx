import ServiceCard from "../ui/ServiceCard";
import { services } from "../../utils/servicesData";

const ServicesSection = () => {
    return (
        <section id="servicios" className="w-full bg-white py-15 px-3.5 md:px-5 lg:px-16">
            <div className="w-full mb-12 text-center">
                <h2 className="font-black mb-4 text-text-primary text-3xl">Nuestros Servicios</h2>
                <p className="text-text-secondary text-sm md:text-lg">
                    Ayudamos a emprendedores y pequeños negocios a digitalizar sus procesos con soluciones prácticas y funcionales.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 pt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </section>
    );
};
export default ServicesSection;
