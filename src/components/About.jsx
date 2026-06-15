import React, { useState, useEffect, useRef } from "react";
import { FileJson, GitBranch, Check } from "lucide-react";
import JSONNode from "./JSONNode";

const About = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return (
    <section id="about" ref={sectionRef} className={`min-h-screen py-20 sm:py-32 px-3 sm:px-6 mt-10 sm:mt-20 relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      {/* Section background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-tn-bg via-[#0a0e1a] to-[#050810]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(122,162,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(122,162,247,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="mb-6 font-mono">
          <h2 className="text-2xl sm:text-3xl font-bold text-tn-text">
            <span className="text-tn-violet">{"// "}</span>
            About me
          </h2>
          <p className="text-tn-muted text-sm sm:text-base mt-1">A snapshot of who I am — straight from the source.</p>
        </div>

        {/* Editor window */}
        <div className="rounded-xl border border-tn-border bg-tn-surface/80 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-tn-elevated border-b border-tn-border">
            <span className="w-3 h-3 rounded-full bg-tn-boolean/80"></span>
            <span className="w-3 h-3 rounded-full bg-tn-number/80"></span>
            <span className="w-3 h-3 rounded-full bg-tn-string/80"></span>
          </div>

          {/* Tab bar */}
          <div className="flex items-center bg-tn-elevated/60 border-b border-tn-border text-sm font-mono">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-tn-surface border-r border-tn-border border-t-2 border-t-tn-accent">
              <FileJson className="w-4 h-4 text-tn-number" />
              <span className="text-tn-text">about.json</span>
              <span className="w-2 h-2 rounded-full bg-tn-muted ml-1"></span>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="px-4 py-1.5 bg-tn-surface/50 border-b border-tn-border text-xs font-mono text-tn-muted">
            <span className="text-tn-muted">src</span>
            <span className="mx-1.5 text-tn-muted/50">›</span>
            <span className="text-tn-muted">data</span>
            <span className="mx-1.5 text-tn-muted/50">›</span>
            <span className="text-tn-accent">about.json</span>
          </div>

          {/* Editor body */}
          <div className="p-3 sm:p-5 md:p-6 bg-tn-surface overflow-x-auto">
            <JSONNode data={data} />
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1.5 bg-tn-accent/90 text-tn-bg text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <GitBranch className="w-3.5 h-3.5" />
                main
              </span>
              <span className="hidden sm:flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                0 errors
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline">UTF-8</span>
              <span>JSON</span>
              <span>{"{ }"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
