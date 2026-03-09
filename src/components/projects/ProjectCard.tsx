import type { Project } from "../../utils/models/types";


interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <picture className="group relative overflow-hidden rounded-2xl bg-text-primary">
      <img
        src={project.image}
        className="w-full h-80 object-cover opacity-90 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
        alt={project.title}
      />

      <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-btn-primary text-sm font-bold uppercase mb-2">
          {project.tag}
        </span>

        <h4 className="text-2xl font-bold text-white mb-2">
          {project.title}
        </h4>

        <p className="text-slate-300 text-sm">
          {project.description}
        </p>
      </div>
    </picture>
  );
};
export default ProjectCard;