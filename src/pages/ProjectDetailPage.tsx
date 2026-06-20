import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MdArrowBack, MdCheckCircle, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { SEO } from "../components/ui/SEO";
import { projects } from "../utils/projectsData";

const ProjectDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((p) => p.slug === slug);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const prevGallery = () => setGalleryIndex((i) => (i === 0 ? (project?.gallery.length ?? 1) - 1 : i - 1));
    const nextGallery = () => setGalleryIndex((i) => (i === (project?.gallery.length ?? 1) - 1 ? 0 : i + 1));

    if (!project) {
        return (
            <>
                <SEO
                    title="Proyecto no encontrado - LineaSoftTech"
                    description="El proyecto que buscas no existe o ha sido eliminado."
                />
                <section className="py-15 px-3.5 md:px-5 lg:px-16">
                    <div className="max-w-4xl mx-auto text-center py-20">
                        <h1 className="text-4xl font-black text-text-primary mb-4">
                            Proyecto no encontrado
                        </h1>
                        <p className="text-text-secondary mb-8 text-lg">
                            El proyecto que buscas no existe o ha sido eliminado.
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-btn-primary font-bold hover:underline transition-all"
                        >
                            <MdArrowBack className="text-xl" />
                            Volver a proyectos
                        </Link>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <SEO
                title={`${project.title} - LineaSoftTech`}
                description={project.description}
                image={project.image}
            />

            {/* Hero */}
            <section className="relative w-full h-[50vh] min-h-100 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
            </section>

            {/* Content */}
            <section className="py-15 px-3.5 md:px-5 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    {/* Header: title, tag, role */}
                    <div className="mb-12">
                        <span className="text-btn-primary text-sm font-bold uppercase mb-2 block">
                            {project.tag}
                        </span>
                        <h1 className="text-4xl font-black text-text-primary mb-2">
                            {project.title}
                        </h1>
                        <p className="text-text-secondary text-lg">{project.role}</p>
                    </div>

                    {/* Challenge Section */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-black text-text-primary mb-4">
                            El Desafío
                        </h2>
                        <p className="text-text-secondary leading-relaxed">
                            {project.challenges}
                        </p>
                    </div>

                    {/* Solution Section */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-black text-text-primary mb-4">
                            La Solución
                        </h2>
                        <p className="text-text-secondary leading-relaxed">
                            {project.solution}
                        </p>
                    </div>

                    {/* TechStack Pills */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-black text-text-primary mb-4">
                            Tecnologías
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-btn-primary/10 text-btn-primary font-medium px-4 py-2 rounded-lg text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Results — conditional */}
                    {project.results.length > 0 && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-black text-text-primary mb-4">
                                Resultados
                            </h2>
                            <ul className="space-y-3">
                                {project.results.map((result, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-text-secondary"
                                    >
                                        <MdCheckCircle className="text-btn-primary mt-0.5 shrink-0 text-lg" />
                                        <span>{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Gallery — carousel */}
                    {project.gallery.length > 0 && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-black text-text-primary mb-4">
                                Galería
                            </h2>
                            <div className="relative rounded-2xl overflow-hidden bg-text-primary/5">
                                <img
                                    src={project.gallery[galleryIndex]}
                                    alt={`${project.title} - Imagen ${galleryIndex + 1}`}
                                    className="w-full aspect-16/9 object-cover transition-opacity duration-300"
                                    loading="lazy"
                                />

                                {project.gallery.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevGallery}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                            aria-label="Imagen anterior"
                                        >
                                            <MdChevronLeft className="text-2xl" />
                                        </button>
                                        <button
                                            onClick={nextGallery}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                            aria-label="Imagen siguiente"
                                        >
                                            <MdChevronRight className="text-2xl" />
                                        </button>

                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                            {project.gallery.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setGalleryIndex(index)}
                                                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === galleryIndex
                                                            ? "bg-white scale-110"
                                                            : "bg-white/40 hover:bg-white/70"
                                                        }`}
                                                    aria-label={`Ir a imagen ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                            <p className="text-text-secondary text-sm text-center mt-3">
                                {galleryIndex + 1} / {project.gallery.length}
                            </p>
                        </div>
                    )}

                    {/* Action Buttons — conditional */}
                    <div className="flex flex-wrap gap-4 mb-10">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-btn-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-btn-primary/90 hover:scale-105 transition-all shadow-lg shadow-btn-primary/20"
                            >
                                Ver demo
                            </a>
                        )}
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-btn-primary font-bold px-6 py-3 rounded-xl border-2 border-btn-primary hover:bg-btn-primary hover:text-white hover:scale-105 transition-all"
                            >
                                Ver código
                            </a>
                        )}
                    </div>

                    {/* CTA Section */}
                    <div className="bg-bg-primary-fixed rounded-2xl p-8 md:p-12 text-center mb-10">
                        <h2 className="text-3xl font-black text-text-primary mb-4">
                            ¿Interesado en este proyecto?
                        </h2>
                        <p className="text-text-secondary mb-6 max-w-lg mx-auto">
                            ¿Tienes un proyecto similar en mente? Hablemos y creemos algo increíble juntos.
                        </p>
                        <Link
                            to="/#contacto"
                            className="inline-block bg-btn-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-btn-primary/90 hover:scale-105 transition-all shadow-lg shadow-btn-primary/20"
                        >
                            Contáctame
                        </Link>
                    </div>

                    {/* Back link */}
                    <div className="text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-text-secondary hover:text-btn-primary font-medium transition-colors"
                        >
                            <MdArrowBack className="text-xl" />
                            Volver a proyectos
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};
export default ProjectDetailPage;