import { Link } from "react-router-dom";
import type { Project } from "../../utils/models/types";
import StatusBadge from "../ui/StatusBadge";


interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Link to={`/proyecto/${project.slug}`} prefetch="intent">
      <picture className="group relative overflow-hidden rounded-2xl bg-text-primary">
        <div className="absolute top-3 left-3 z-10">
          <StatusBadge status={project.status} />
        </div>
        <img
          src={project.image}
          className="w-full aspect-4/3 object-cover opacity-90 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
          alt={project.title}
          loading="lazy"
        />

        <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 bg-linear-to-t from-black/90 via-black/50 to-transparent">
          <span className="text-btn-primary text-xs sm:text-sm font-bold uppercase mb-1 sm:mb-2">
            {project.tag}
          </span>

          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 leading-tight">
            {project.title}
          </h4>

          <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 sm:line-clamp-none">
            {project.description}
          </p>
        </div>
      </picture>
    </Link>
  );
};
export default ProjectCard;