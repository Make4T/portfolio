import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionHeading eyebrow="02 / Selected work" title="Featured engineering projects." description="Case studies in gameplay architecture, multiplayer networking and real-time technology." />
        <div className="projects-list">{projects.filter((project) => project.featured).map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
      </div>
    </section>
  );
}
