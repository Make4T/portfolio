import { site } from "../data/site";

export function Footer() {
  return <footer><div className="container footer-inner"><p>© {new Date().getFullYear()} {site.name}</p><p>Software Engineer <span>•</span> Game Engine Programmer</p><p>Built with React + TypeScript <span>•</span> Hosted on GitHub Pages</p></div></footer>;
}
