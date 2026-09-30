import { Code2, Network, Puzzle, ScanEye } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

// HOW I BUILD SYSTEMS -OSIO: muuta neljä periaatekorttia tässä tiedostossa.
const principles = [
  { icon: Network, title: "Multiplayer First", text: "Gameplay systems are designed with ownership, authority and replication in mind." },
  { icon: Puzzle, title: "Modular Architecture", text: "Systems should be reusable, maintainable and straightforward to extend." },
  { icon: Code2, title: "C++ Core", text: "Core architecture lives primarily in C++ while designers configure content through Blueprints." },
  { icon: ScanEye, title: "Player Experience", text: "Technical systems should ultimately improve clarity, responsiveness and gameplay." },
];

export function Philosophy() {
  return (
    <section className="section container philosophy">
      <SectionHeading eyebrow="03 / Approach" title="How I build systems." />
      <div className="principle-grid">{principles.map(({ icon: Icon, title, text }, index) => <article key={title}><span>0{index + 1}</span><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
  );
}
