import { experience } from "../data/experience";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section className="section container" id="experience">
      <SectionHeading eyebrow="06 / Experience" title="Building technology and teams." />
      <div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.company}><div className="timeline-marker" /><div><h3>{item.company}</h3><p className="role-list">{item.roles.join(" · ")}</p><ul>{item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul></div></article>)}</div>
    </section>
  );
}
