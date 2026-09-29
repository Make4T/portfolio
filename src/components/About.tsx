import { Blocks, Cpu, Network } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const specialties = [
  { icon: Blocks, title: "Gameplay Engineering", text: "Gameplay mechanics, interaction systems, character systems and reusable gameplay architecture." },
  { icon: Network, title: "Multiplayer Systems", text: "Replication, authority, RPC communication and network-aware PlayerState / GameState architecture." },
  { icon: Cpu, title: "Engine Technology", text: "C++, Unreal Engine, Unity, GAS, animation systems and performance-minded real-time applications." },
];

export function About() {
  return (
    <section className="section container" id="about">
      <SectionHeading eyebrow="01 / About" title="Engineering systems behind the experience." />
      <div className="about-layout">
        <div className="about-copy">
          <p>I'm an ICT Engineer and software developer specializing in game-engine technology and gameplay systems.</p>
          <p>My work focuses on Unreal Engine and Unity development, including multiplayer architecture, gameplay systems, user interfaces, animation systems and engine-level programming. I enjoy solving technical gameplay problems and building systems that are maintainable, reusable and multiplayer-ready.</p>
        </div>
        <div className="specialty-grid">
          {specialties.map(({ icon: Icon, title, text }) => (
            <article className="small-card" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}
