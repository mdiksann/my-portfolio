import React from "react";
import { ChevronDown } from "lucide-react";
import { FILES } from "./fileTree";

// The Explorer panel: a collapsible "PORTFOLIO-IKSAN" folder listing the files.
const Sidebar = ({ activeFile, onSelect }) => {
  return (
    <aside className="w-56 sm:w-60 flex-shrink-0 bg-tn-elevated/70 border-r border-tn-border flex flex-col font-mono select-none">
      {/* panel header */}
      <div className="px-4 py-2.5 text-[11px] tracking-wider text-tn-muted uppercase">Explorer</div>

      {/* folder root */}
      <div className="flex items-center gap-1 px-2 py-1 text-sm text-tn-text font-bold">
        <ChevronDown className="w-4 h-4 text-tn-muted" />
        <span className="uppercase text-xs tracking-wide">Portfolio-Iksan</span>
      </div>

      {/* file list */}
      <nav className="mt-0.5">
        {FILES.map((file) => {
          const active = file.id === activeFile;
          return (
            <button
              key={file.id}
              type="button"
              onClick={() => onSelect(file.id)}
              className={`group relative w-full flex items-center gap-2 pl-7 pr-3 py-1.5 text-sm text-left transition-colors ${
                active ? "bg-tn-accent/15 text-tn-text" : "text-tn-muted hover:text-tn-text hover:bg-tn-surface/60"
              }`}
            >
              {active && <span className="absolute left-0 top-1 bottom-1 w-0.5 bg-tn-accent"></span>}
              <file.Icon className={`w-4 h-4 flex-shrink-0 ${file.iconClass}`} />
              <span className="truncate">{file.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
