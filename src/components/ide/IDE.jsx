import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import ActivityBar from "./ActivityBar";
import Sidebar from "./Sidebar";
import EditorArea from "./EditorArea";
import StatusBar from "./StatusBar";

// Full-screen VS Code style shell. `activeFile` drives the editor. A single
// `sidebarOpen` state powers both layouts: a static column on desktop and an
// overlay on mobile. It starts open on desktop and closed on small screens.
const IDE = ({ data }) => {
  const [activeFile, setActiveFile] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(() => (typeof window !== "undefined" ? window.matchMedia("(min-width: 768px)").matches : true));

  // Lock body scroll — the IDE manages its own scrolling regions.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const selectFile = (id) => {
    setActiveFile(id);
    // On mobile the sidebar is an overlay — close it after picking a file.
    if (window.matchMedia("(max-width: 767px)").matches) setSidebarOpen(false);
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-tn-bg/80 text-tn-text">
      <TopBar activeFile={activeFile} />

      <div className="flex flex-1 min-h-0 relative">
        <ActivityBar explorerOpen={sidebarOpen} onToggleExplorer={() => setSidebarOpen((v) => !v)} social={data.social} />

        {sidebarOpen && (
          <>
            {/* Desktop: static column */}
            <div className="hidden md:flex">
              <Sidebar activeFile={activeFile} onSelect={selectFile} />
            </div>

            {/* Mobile: overlay */}
            <div className="md:hidden absolute inset-0 z-30 flex">
              <Sidebar activeFile={activeFile} onSelect={selectFile} />
              <div className="flex-1 bg-black/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} aria-hidden="true" />
            </div>
          </>
        )}

        <EditorArea activeFile={activeFile} data={data} onSelect={selectFile} />
      </div>

      <StatusBar activeFile={activeFile} />
    </div>
  );
};

export default IDE;
