import { Link } from "react-router-dom";
import type { Project } from "../../utils/models/types";


interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Link to={`/proyecto/${project.slug}`} prefetch="intent">
      <picture className="group relative overflow-hidden rounded-2xl bg-text-primary">
        <img
          src={project.image}
          className="w-full aspect-4/3 object-cover opacity-90 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
          alt={project.title}
          loading="lazy"
        />

        <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-linear-to-t from-black/90 via-black/50 to-transparent">
          <span className="text-btn-primary text-sm font-bold uppercase mb-2">
            {project.tag}
          </span>

          <h4 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h4>

          <p className="text-gray-300 text-sm">
            {project.description}
          </p>
        </div>
      </picture>
    </Link>
  );
};
export default ProjectCard;