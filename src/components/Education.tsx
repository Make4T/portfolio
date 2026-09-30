import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

// EDUCATION-OSIO: muuta tutkinto, oppilaitos, erikoistuminen ja kurssit tässä tiedostossa.
export function Education() {
  return (
    <section className="section education-section" id="education"><div className="container">
      <SectionHeading eyebrow="07 / Education" title="Engineering foundation." />
      <article className="education-card"><GraduationCap aria-hidden="true" /><div><p className="eyebrow">Bachelor of Engineering</p><h3>Information and Communication Technology</h3><p>Kajaani University of Applied Sciences</p><p className="education-focus">Specialization: Game Development / Game Engine Technology</p></div><ul><li>Game Programming</li><li>C++</li><li>Real-Time Graphics</li><li>Physics Programming</li><li>Multiplayer Systems</li><li>Software Engineering</li></ul></article>
    </div></section>
  );
}
