import { ArrowUpRight, GitBranch } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps { project: Project; index: number }

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={`project-card ${index % 2 ? "reverse" : ""}`}>
      <div className="project-visual"><img src={project.image} alt={project.imageAlt} loading="lazy" /></div>
      <div className="project-content">
        <div className="project-index">0{index + 1}</div>
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-role">{project.role}</p>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Technologies">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <details>
          <summary>View case study <ArrowUpRight size={17} aria-hidden="true" /></summary>
          <div className="case-study">
            <h4>Key systems</h4>
            <ul>{project.systems.map((system) => <li key={system}>{system}</li>)}</ul>
            <h4>Technical challenge</h4>
            <p>{project.challenge}</p>
          </div>
        </details>
        {(project.github || project.demo) && <div className="project-links">
          {project.github && <a href={project.github}><GitBranch size={16} /> GitHub</a>}
          {project.demo && <a href={project.demo}><ArrowUpRight size={16} /> Demo</a>}
        </div>}
      </div>
    </article>
  );
}
