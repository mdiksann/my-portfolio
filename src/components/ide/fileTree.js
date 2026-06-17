import { FileCode2, FileJson, FileType2 } from "lucide-react";

// Single source of truth for the "files" shown in the IDE. Each entry drives
// the sidebar tree, the editor tab, the breadcrumb and the status bar.
export const FILES = [
  {
    id: "home",
    name: "home.jsx",
    lang: "JavaScript JSX",
    Icon: FileCode2,
    iconClass: "text-tn-accent",
    crumbs: ["portfolio-iksan", "src", "home.jsx"],
  },
  {
    id: "about",
    name: "about.json",
    lang: "JSON",
    Icon: FileJson,
    iconClass: "text-tn-number",
    crumbs: ["portfolio-iksan", "src", "data", "about.json"],
  },
  {
    id: "contact",
    name: "contact.tsx",
    lang: "TypeScript JSX",
    Icon: FileType2,
    iconClass: "text-tn-keyword",
    crumbs: ["portfolio-iksan", "src", "contact.tsx"],
  },
];

export const getFile = (id) => FILES.find((f) => f.id === id) || FILES[0];
