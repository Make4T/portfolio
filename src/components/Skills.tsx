import { skillCategories } from "../data/skills";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionHeading eyebrow="04 / Technical toolkit" title="Tools chosen for the system." description="Practical experience across gameplay code, networking, engines and graphics programming." />
        <div className="skills-grid">{skillCategories.map((category) => <article className="skill-card" key={category.title}><h3>{category.title}</h3><ul>{category.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
      </div>
    </section>
  );
}
