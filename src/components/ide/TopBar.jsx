import React from "react";
import { getFile } from "./fileTree";

// The application title bar: window dots + centered document title.
const TopBar = ({ activeFile }) => {
  const file = getFile(activeFile);

  return (
    <div className="flex items-center h-9 flex-shrink-0 bg-tn-elevated border-b border-tn-border px-3 text-sm font-mono">
      {/* window dots */}
      <div className="flex items-center gap-2" aria-hidden="true">
        <span className="w-3 h-3 rounded-full bg-tn-boolean/80"></span>
        <span className="w-3 h-3 rounded-full bg-tn-number/80"></span>
        <span className="w-3 h-3 rounded-full bg-tn-string/80"></span>
      </div>

      {/* centered title */}
      <div className="flex-1 text-center text-tn-muted truncate px-2">
        <span className="text-tn-text">{file.name}</span>
        <span className="hidden sm:inline"> — portfolio-iksan</span>
      </div>

      {/* spacer to keep title centered against the dots */}
      <div className="w-[52px]" aria-hidden="true" />
    </div>
  );
};

export default TopBar;
