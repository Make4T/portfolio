import { useMemo, useState } from "react";
import { projects, type ProjectArea } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

const projectAreas: Array<ProjectArea | "All projects"> = [
  "All projects",
  "Game Development",
  "Web & Services",
  "Data & Tooling",
  "Embedded Systems",
  "Interactive Media",
];

export function Projects() {
  const [activeArea, setActiveArea] = useState<ProjectArea | "All projects">("All projects");
  const featuredProjects = useMemo(() => projects.filter((project) => project.featured), []);
  const visibleProjects = activeArea === "All projects"
    ? featuredProjects
    : featuredProjects.filter((project) => project.area === activeArea);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionHeading eyebrow="02 / Selected work" title="Featured engineering projects." description="Case studies in gameplay architecture, multiplayer networking and real-time technology." />
        <div className="project-controls" aria-label="Filter projects by area">
          <div className="project-filter-list" role="group" aria-label="Project areas">
            {projectAreas.map((area) => <button key={area} className={activeArea === area ? "active" : ""} type="button" aria-pressed={activeArea === area} onClick={() => setActiveArea(area)}>{area}</button>)}
          </div>
          <p aria-live="polite">Showing {visibleProjects.length} project{visibleProjects.length === 1 ? "" : "s"}</p>
        </div>
        <div className="projects-list">{visibleProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
      </div>
    </section>
  );
}
