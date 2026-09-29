import { ArrowDownRight, GitBranch, Terminal } from "lucide-react";
import { site } from "../data/site";

const tech = ["C++", "Unreal Engine 5", "C#", "Unity", "Multiplayer", "GAS"];

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="status"><span /> Available for engineering opportunities</p>
          <p className="hero-name">{site.name}</p>
          <h1>Software Engineer<br /><span>specialized in game engine technology.</span></h1>
          <p className="hero-intro">ICT Engineer building gameplay systems, multiplayer architecture and real-time applications with Unreal Engine, Unity, C++ and C#.</p>
          <div className="button-row">
            <a className="button primary" href="#projects">View projects <ArrowDownRight size={18} aria-hidden="true" /></a>
            <a className="button secondary" href={site.github || "#contact"}><GitBranch size={18} aria-hidden="true" /> GitHub</a>
            {site.cv ? <a className="button text-button" href={site.cv} download>Download CV</a> : <span className="button text-button disabled" title="Add the CV path in src/data/site.ts">CV coming soon</span>}
          </div>
        </div>
        <div className="hero-console" aria-label="Developer specialization summary">
          <div className="console-bar"><span /><span /><span /><p>engineer.profile</p></div>
          <div className="console-body">
            <Terminal size={30} aria-hidden="true" />
            <p><b>role</b> <span>Software Engineer</span></p>
            <p><b>focus</b> <span>Game Engine &amp; Gameplay</span></p>
            <p><b>systems</b> <span>Multiplayer / Real-Time</span></p>
            <div className="signal" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          </div>
        </div>
      </div>
      <div className="tech-strip" aria-label="Core technologies"><div className="container">{tech.map((item) => <span key={item}>{item}</span>)}</div></div>
    </section>
  );
}
