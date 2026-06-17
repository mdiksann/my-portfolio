import React from "react";
import { GitBranch, Check, Bell } from "lucide-react";
import { getFile } from "./fileTree";

const StatusBar = ({ activeFile }) => {
  const file = getFile(activeFile);

  return (
    <div className="flex items-center justify-between px-3 h-6 flex-shrink-0 bg-tn-accent text-tn-bg text-xs font-mono">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <GitBranch className="w-3.5 h-3.5" />
          main
        </span>
        <span className="flex items-center gap-1">
          <Check className="w-3.5 h-3.5" />
          0 errors
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline">Ln 1, Col 1</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span>{file.lang}</span>
        <Bell className="w-3.5 h-3.5" />
      </div>
    </div>
  );
};

export default StatusBar;
