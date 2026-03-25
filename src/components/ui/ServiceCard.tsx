import type { Service } from "../../utils/models/service.types";
import { FaCheck } from "react-icons/fa6";

interface ServiceCardProps {
    service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
    const Icon = service.icon;

    return (
        <article className="group p-8 duration-300 border border-slate-100 bg-slate-50 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:-translate-y-2">
            <div className="w-12 h-12 rounded-lg bg-btn-primary/10 text-btn-primary flex items-center justify-center mb-6 group-hover:bg-btn-primary group-hover:text-white transition-colors">
                <span>
                    <Icon className="text-3xl" />
                </span>
            </div>
            <h3 className="text-text-primary text-xl font-bold mb-3 md:text-2xl">{service.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4 md:text-lg">{service.description}</p>
            <ul className="space-y-2 text-sm font-medium text-text-footer-primary">
                {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <span className="text-[10px] bg-btn-primary p-0.5 text-white rounded-full">
                            <FaCheck />
                        </span>
                        {feature.text}
                    </li>
                ))}
            </ul>
        </article>
    );
};
export default ServiceCard;
