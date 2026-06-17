import React from "react";
import { X, ChevronRight } from "lucide-react";
import { getFile } from "./fileTree";
import HomePanel from "./panels/HomePanel";
import AboutPanel from "./panels/AboutPanel";
import ContactPanel from "./panels/ContactPanel";

// The main editing surface: active tab + breadcrumb + the file's content panel.
const EditorArea = ({ activeFile, data, onSelect }) => {
  const file = getFile(activeFile);

  return (
    <div className="flex-1 min-w-0 flex flex-col bg-tn-surface">
      {/* tab bar */}
      <div className="flex items-stretch bg-tn-elevated/60 border-b border-tn-border text-sm font-mono overflow-x-auto">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-tn-surface border-r border-tn-border border-t-2 border-t-tn-accent whitespace-nowrap">
          <file.Icon className={`w-4 h-4 ${file.iconClass}`} />
          <span className="text-tn-text">{file.name}</span>
          <X className="w-3.5 h-3.5 text-tn-muted hover:text-tn-text ml-1" />
        </div>
      </div>

      {/* breadcrumb */}
      <div className="flex items-center px-4 py-1.5 bg-tn-surface/50 border-b border-tn-border text-xs font-mono text-tn-muted overflow-x-auto whitespace-nowrap">
        {file.crumbs.map((crumb, i) => {
          const last = i === file.crumbs.length - 1;
          return (
            <span key={crumb} className="flex items-center">
              <span className={last ? "text-tn-accent" : "text-tn-muted"}>{crumb}</span>
              {!last && <ChevronRight className="w-3.5 h-3.5 mx-0.5 text-tn-muted/50" />}
            </span>
          );
        })}
      </div>

      {/* content */}
      <div className="flex-1 overflow-y-auto overflow-x-auto">
        {activeFile === "home" && <HomePanel data={data} onOpen={onSelect} />}
        {activeFile === "about" && <AboutPanel data={data} />}
        {activeFile === "contact" && <ContactPanel data={data} />}
      </div>
    </div>
  );
};

export default EditorArea;
