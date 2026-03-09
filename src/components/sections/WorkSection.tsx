import { useState } from "react";
import ProjectsSection from "../projects/ProjectsSection";
import type { ProjectCategory } from "../../utils/models/types";

const WorkSection = () => {

    const [category, setCategory] = useState<ProjectCategory | undefined>();

    return (
        <section id="portafolio" className="py-15 px-3.5 md:px-5 lg:px-16">

            <section className="flex items-center flex-col gap-2 justify-between mb-16 md:flex-row">
                <div>
                    <h2 className="font-black text-3xl text-text-primary tracking-tight lg:text-4xl">
                        Proyectos Desarrollados
                    </h2>
                    <p className="max-w-xl pt-5 text-text-secondary">
                        Algunos proyectos y soluciones digitales que hemos desarrollado,
                        enfocados en crear aplicaciones funcionales, modernas y eficientes.
                    </p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setCategory(undefined)}
                        className={`font-bold px-4 py-2 text-sm rounded-lg ${category === undefined
                                ? "bg-btn-primary text-white"
                                : "text-text-secondary hover:bg-white"
                            }`}
                    >
                        Todos
                    </button>
                    <button
                        onClick={() => setCategory("webapp")}
                        className={`font-bold px-4 py-2 text-sm rounded-lg ${category === "webapp"
                                ? "bg-btn-primary text-white"
                                : "text-text-secondary hover:bg-white"
                            }`}
                    >
                        Aplicaciones Web
                    </button>
                    <button
                        onClick={() => setCategory("landing")}
                        className={`font-bold px-4 py-2 text-sm rounded-lg ${category === "landing"
                                ? "bg-btn-primary text-white"
                                : "text-text-secondary hover:bg-white"
                            }`}
                    >
                        Landing Pages
                    </button>
                </div>
            </section>
            <ProjectsSection category={category} />
        </section>
    );
};
export default WorkSection;