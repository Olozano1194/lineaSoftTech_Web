import { MdCheckCircle } from "react-icons/md";

const stats = [
    { value: "+4", label: "proyectos desarrollados" },
    { value: "+1", label: "años de experiencia" },
    { value: "React · TS · Django", label: "tecnologías modernas" },
    { value: "Atención personalizada", label: "— sin grandes corporaciones" },
];

const TrustBar = () => {
    return (
        <section className="bg-btn-primary/5 border-y border-btn-primary/10">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-3.5 md:px-5 lg:px-16 py-4">
                {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-2 text-sm">
                        <MdCheckCircle className="text-btn-primary shrink-0 text-lg" />
                        <span className="font-bold text-text-primary">{stat.value}</span>
                        <span className="text-text-secondary">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default TrustBar;