import { GitBranch, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, site } from "../data/site";

export function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Home">
          <span className="brand-mark">{site.initials}</span>
          <span>{site.name}</span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="nav-links" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`} id="nav-links">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a className="nav-github" href={site.github || "#contact"} onClick={() => setOpen(false)} aria-label={site.github ? "GitHub profile" : "GitHub link available in contact section"}>
            <GitBranch size={17} aria-hidden="true" /> GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
