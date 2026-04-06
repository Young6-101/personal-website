import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="projects relative pb-[200px]" id="projects-cards">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}
