import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

// Render a leaf value with syntax highlighting (and clickable links for URLs).
const LeafValue = ({ value }) => {
  if (value === null) return <span className="text-tn-boolean">null</span>;

  if (typeof value === "string") {
    const isUrl = /^https?:\/\//i.test(value.trim());
    if (isUrl) {
      return (
        <span className="text-tn-string">
          "
          <a href={value.trim()} target="_blank" rel="noopener noreferrer" className="text-tn-teal underline decoration-tn-teal/40 underline-offset-2 hover:decoration-tn-teal break-all">
            {value}
          </a>
          "
        </span>
      );
    }
    return <span className="text-tn-string break-words">"{value}"</span>;
  }

  if (typeof value === "number") return <span className="text-tn-number">{String(value)}</span>;
  if (typeof value === "boolean") return <span className="text-tn-boolean">{String(value)}</span>;
  return <span className="text-tn-text">{String(value)}</span>;
};

// JSON viewer with a line-number gutter, collapsible nodes and editor-style highlighting.
const JSONNode = ({ data }) => {
  const [closed, setClosed] = useState(() => new Set());

  const toggle = (path) =>
    setClosed((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });

  // Flatten the tree (respecting collapse state) into ordered rows so the
  // line-number gutter stays aligned regardless of nesting depth.
  const rows = [];

  const walk = (value, path, depth, keyLabel, showKey, isLast) => {
    const isObject = value !== null && typeof value === "object";
    const isOpen = !closed.has(path);

    if (isObject) {
      const entries = Array.isArray(value) ? value.map((v, i) => [i, v]) : Object.entries(value);
      const open = Array.isArray(value) ? "[" : "{";
      const close = Array.isArray(value) ? "]" : "}";

      rows.push({ kind: "branch", path, depth, keyLabel, showKey, open, close, isOpen, count: entries.length, isLast });

      if (isOpen) {
        entries.forEach(([k, v], idx) => walk(v, `${path}/${k}`, depth + 1, k, !Array.isArray(value), idx === entries.length - 1));
        rows.push({ kind: "close", path: `${path}::close`, depth, close, isLast });
      }
    } else {
      rows.push({ kind: "leaf", path, depth, keyLabel, showKey, value, isLast });
    }
  };

  walk(data, "root", 0, "root", false, true);

  return (
    <div className="font-mono text-xs sm:text-sm md:text-base leading-relaxed">
      {rows.map((row, index) => {
        const indent = { paddingLeft: `${row.depth * 1.25}rem` };

        return (
          <div key={row.path} className="flex hover:bg-tn-accent/5 group">
            {/* line-number gutter */}
            <span className="w-8 sm:w-10 flex-shrink-0 text-right pr-2 sm:pr-3 mr-2 sm:mr-3 text-tn-muted/60 select-none border-r border-tn-border group-hover:text-tn-muted">{index + 1}</span>

            {/* content */}
            <div className="min-w-0 flex-1" style={indent}>
              {row.kind === "branch" && (
                <span className="cursor-pointer inline-flex items-baseline" onClick={() => toggle(row.path)}>
                  {row.isOpen ? <ChevronDown className="w-3.5 h-3.5 text-tn-muted translate-y-0.5 flex-shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 text-tn-muted translate-y-0.5 flex-shrink-0" />}
                  {row.showKey && (
                    <>
                      <span className="text-tn-keyword ml-1">"{row.keyLabel}"</span>
                      <span className="text-tn-muted">: </span>
                    </>
                  )}
                  {!row.showKey && <span className="ml-1" />}
                  <span className="text-tn-violet">{row.open}</span>
                  {!row.isOpen && (
                    <>
                      <span className="text-tn-muted mx-1">…</span>
                      <span className="text-tn-violet">{row.close}</span>
                      {!row.isLast && <span className="text-tn-muted">,</span>}
                      <span className="text-tn-muted/60 ml-2 text-xs">{`// ${row.count} ${row.count === 1 ? "item" : "items"}`}</span>
                    </>
                  )}
                </span>
              )}

              {row.kind === "close" && (
                <span>
                  <span className="text-tn-violet">{row.close}</span>
                  {!row.isLast && <span className="text-tn-muted">,</span>}
                </span>
              )}

              {row.kind === "leaf" && (
                <span className="break-words">
                  {row.showKey && (
                    <>
                      <span className="text-tn-keyword">"{row.keyLabel}"</span>
                      <span className="text-tn-muted">: </span>
                    </>
                  )}
                  <LeafValue value={row.value} />
                  {!row.isLast && <span className="text-tn-muted">,</span>}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JSONNode;
