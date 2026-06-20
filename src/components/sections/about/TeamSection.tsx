import TeamMemberCard from "../../ui/TeamMemberCard";

const TeamSection = () => {
    return (
        <section className="bg-white px-6 py-24">
            <section className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-6 items-center justify-between mb-16 md:flex-row">
                    <div className="max-w-2xl">
                        <h2 className="font-bold font-roboto mb-4 text-3xl text-text-primary md:text-4xl">El equipo detrás de LineaSoftTech</h2>
                        <p className="text-lg text-text-secondary">
                            Somos un equipo de ingenieros de sistemas en constante aprendizaje, enfocados en crear soluciones digitales prácticas y accesibles.
                            Trabajamos con emprendedores y pequeñas empresas para desarrollar páginas web, aplicaciones sencillas y mejoras que realmente aporten valor a sus negocios.
                        </p>
                    </div>
                </div>
                <section className="gap-8 grid grid-cols-1 md:grid-cols-2">
                    <TeamMemberCard
                        name="Oscar Lozano"
                        role="Co-Fundador & Desarrollador Web"
                        description="Me enfoco en el desarrollo web frontend, creando interfaces claras y funcionales. Me gusta entender cómo funcionan las tecnologías desde la base, lo que me permite construir soluciones bien organizadas y adaptadas a cada necesidad. También cuento con experiencia en soporte técnico y configuración de equipos."
                        image="/assets/fotoPerfil.webp"
                        imageAlt="Professional portrait of Oscar Lozano, Co-Fundador and Desarrollador Web"
                    />
                    <TeamMemberCard
                        name="Yeison Bocanegra"
                        role="Co-Fundador & Especialista en Automatización"
                        description="Trabajo con herramientas de inteligencia artificial para agilizar procesos y encontrar soluciones más eficientes. Complemento esto con conocimientos de programación, lo que me permite aportar un enfoque práctico y moderno en cada proyecto."
                        image="/assets/images/team-yeison.webp"
                        imageAlt="Professional portrait of Yeison Bocanegra, Co-Fundador and Especialista en Automatización"
                    />
                </section>
            </section>
        </section>
    )
};
export default TeamSection;