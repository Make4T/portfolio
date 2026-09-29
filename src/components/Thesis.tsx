import { BookOpen, ExternalLink } from "lucide-react";
import { site } from "../data/site";

export function Thesis() {
  return (
    <section className="section container" id="thesis">
      <article className="thesis-card">
        <div className="thesis-icon"><BookOpen aria-hidden="true" /></div>
        <div><p className="eyebrow">05 / Bachelor’s thesis</p><h2>Unreal Engine 5 UI Widgets in a Multiplayer Environment</h2><p>The thesis explores how Unreal Engine UI systems behave in multiplayer environments and how shared gameplay information should be synchronized between clients.</p><ul className="tag-list"><li>UMG</li><li>Replication</li><li>GameState</li><li>PlayerState</li><li>RPC</li></ul></div>
        {site.thesis ? <a className="button secondary" href={site.thesis}>Read thesis <ExternalLink size={17} /></a> : <span className="button secondary disabled">Thesis link coming soon</span>}
      </article>
    </section>
  );
}
