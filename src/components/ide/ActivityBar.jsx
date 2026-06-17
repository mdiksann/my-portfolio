import React from "react";
import { Files, Github } from "lucide-react";

// The slim vertical icon bar on the far left of VS Code. Only interactive
// items remain: Explorer toggles the sidebar, GitHub opens the real profile.
const ActivityBar = ({ explorerOpen, onToggleExplorer, social }) => {
  return (
    <div className="flex flex-col items-center justify-between w-12 flex-shrink-0 bg-tn-elevated border-r border-tn-border py-2">
      <div className="flex flex-col items-center gap-1">
        <button
          type="button"
          onClick={onToggleExplorer}
          title="Explorer"
          aria-label="Toggle Explorer"
          className={`relative w-12 h-11 flex items-center justify-center transition-colors ${explorerOpen ? "text-tn-text" : "text-tn-muted hover:text-tn-text"}`}
        >
          {explorerOpen && <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-tn-accent rounded-r"></span>}
          <Files className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </div>

      <a href={social.github} target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub" className="w-12 h-11 flex items-center justify-center text-tn-muted hover:text-tn-text transition-colors">
        <Github className="w-6 h-6" strokeWidth={1.5} />
      </a>
    </div>
  );
};

export default ActivityBar;
