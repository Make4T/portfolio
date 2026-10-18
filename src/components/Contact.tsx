import { BriefcaseBusiness, Download, GitBranch, Mail } from "lucide-react";
import { site } from "../data/site";

// CONTACT-OSIO: yhteyspainikkeiden osoitteet tulevat src/data/site.ts-tiedostosta.
// Muuta tämän osion otsikko ja kuvausteksti alempana tässä tiedostossa.
const contacts = [
  { label: "GitHub", value: site.github, icon: GitBranch, external: true },
  { label: "LinkedIn", value: site.linkedin, icon: BriefcaseBusiness, external: true },
  { label: "Email", value: site.email ? `mailto:${site.email}` : "", icon: Mail },
  { label: "Download CV", value: site.cv, icon: Download, download: true },
];

export function Contact() {
  return (
    <section className="contact-section" id="contact"><div className="container contact-inner">
      <p className="eyebrow">08 / Contact</p><h2>Let's build something<br /><span>thoughtful and robust.</span></h2><p>I'm interested in software engineering, gameplay programming and game-engine development opportunities.</p>
      <div className="contact-links">{contacts.map(({ label, value, icon: Icon, download, external }) => value ? <a key={label} className="button secondary" href={value} download={download} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}><Icon size={18} />{label}</a> : <span key={label} className="button secondary disabled" title={`Add ${label} in src/data/site.ts`}><Icon size={18} />{label}</span>)}</div>
      <p className="contact-note">View my work on GitHub, connect on LinkedIn, or download my CV.</p>
    </div></section>
  );
}
