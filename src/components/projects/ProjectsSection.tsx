import { projects } from "../../utils/projectsData";
import ProjectCard  from "./ProjectCard";
import type { ProjectCategory } from "../../utils/models/types"


interface Props {
  category?: ProjectCategory;
}

const ProjectsSection = ({ category }: Props) => {

  const filteredProjects = category
    ? projects.filter(p => p.category === category)
    : projects;

  return (
    <article className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </article>
  );
};
export default ProjectsSection;