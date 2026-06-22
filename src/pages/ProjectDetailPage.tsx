import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MdArrowBack, MdCheckCircle, MdChevronLeft, MdChevronRight, MdClose } from "react-icons/md";
import { SEO } from "../components/ui/SEO";
import StatusBadge from "../components/ui/StatusBadge";
import { projects } from "../utils/projectsData";

const ProjectDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((p) => p.slug === slug);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const totalImages = project?.gallery.length ?? 0;

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const goToPrev = () => setLightboxIndex((prev) => prev !== null ? (prev - 1 + totalImages) % totalImages : null);
    const goToNext = () => setLightboxIndex((prev) => prev !== null ? (prev + 1) % totalImages : null);

    // Keyboard support for lightbox
    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") goToPrev();
            if (e.key === "ArrowRight") goToNext();
        };
        window.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [lightboxIndex]);

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
            <section className="relative w-full h-[50vh] min-h-80 md:min-h-100 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-10 lg:p-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-wider">
                                {project.tag}
                            </span>
                            <StatusBadge status={project.status} />
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl line-clamp-2 md:line-clamp-none">
                            {project.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-15 px-3.5 md:px-5 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    {/* Role (title, tag, badge moved to hero overlay) */}
                    <div className="mb-12">
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

                    {/* Real Context — conditional */}
                    {project.context && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-black text-text-primary mb-4">
                                El problema real
                            </h2>
                            <p className="text-text-secondary leading-relaxed">
                                {project.context}
                            </p>
                        </div>
                    )}

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

                    {/* Gallery — grid + lightbox */}
                    {project.gallery.length > 0 && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-black text-text-primary mb-4">
                                Galería
                            </h2>
                            <div className="space-y-6">
                                {/* Primary image — large */}
                                <div
                                    className="group relative aspect-video rounded-2xl overflow-hidden bg-text-primary/5 cursor-pointer"
                                    onClick={() => openLightbox(0)}
                                >
                                    <img
                                        src={project.gallery[0]}
                                        alt={`${project.title} - Imagen 1`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                        <span className="text-white/90 text-sm font-medium">
                                            Ver galería completa
                                        </span>
                                    </div>
                                </div>

                                {/* Secondary images — grid */}
                                {project.gallery.length > 1 && (
                                    <div className="grid grid-cols-2 gap-6">
                                        {project.gallery.slice(1, 3).map((img, idx) => (
                                            <div
                                                key={idx}
                                                className="group relative aspect-square rounded-2xl overflow-hidden bg-text-primary/5 cursor-pointer"
                                                onClick={() => openLightbox(idx + 1)}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`${project.title} - Imagen ${idx + 2}`}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                                {/* Last visible tile — show remaining count */}
                                                {idx === 1 && project.gallery.length > 3 && (
                                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                                        <span className="text-white text-3xl font-black">
                                                            +{project.gallery.length - 3}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Lightbox */}
                    {lightboxIndex !== null && (
                        <div
                            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
                            onClick={closeLightbox}
                        >
                            {/* Close */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 z-10 text-white/80 hover:text-white transition-colors"
                                aria-label="Cerrar"
                            >
                                <MdClose size={36} />
                            </button>

                            {/* Prev / Next */}
                            {totalImages > 1 && (
                                <>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                                        className="absolute left-4 z-10 text-white/80 hover:text-white transition-colors"
                                        aria-label="Imagen anterior"
                                    >
                                        <MdChevronLeft size={48} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); goToNext(); }}
                                        className="absolute right-4 z-10 text-white/80 hover:text-white transition-colors"
                                        aria-label="Imagen siguiente"
                                    >
                                        <MdChevronRight size={48} />
                                    </button>
                                </>
                            )}

                            {/* Image */}
                            <img
                                src={project.gallery[lightboxIndex]}
                                className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg select-none"
                                onClick={(e) => e.stopPropagation()}
                                alt={`${project.title} - ${lightboxIndex + 1}`}
                                draggable={false}
                            />

                            {/* Counter */}
                            {totalImages > 1 && (
                                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-widest">
                                    {lightboxIndex + 1} / {totalImages}
                                </span>
                            )}
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
                </div>
            </section>
        </>
    );
};
export default ProjectDetailPage;