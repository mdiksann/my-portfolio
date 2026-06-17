import React from "react";
import TextType from "../../TextType";

const HomePanel = ({ data, onOpen }) => {
  return (
    <div className="p-5 sm:p-8 md:p-12 font-mono max-w-3xl mx-auto animate-fade-in">
      {/* doc comment */}
      <div className="text-tn-muted/80 text-sm sm:text-base space-y-0.5 mb-8">
        <p>/**</p>
        <p>{" * Welcome to my portfolio."}</p>
        <p>{" * You're now browsing the source — pick a file on the left."}</p>
        <p>{" */"}</p>
      </div>

      <div className="space-y-5 sm:space-y-6">
        <div className="text-sm sm:text-base">
          <span className="text-tn-string">$</span> <span className="text-tn-text">whoami</span>
        </div>

        <p className="text-tn-muted text-base sm:text-lg">{"// Hello, I'm"}</p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-tn-text leading-tight">{data.name}</h1>

        <div className="flex flex-wrap items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold min-h-[2.5rem]">
          <span className="text-tn-violet">const</span>
          <span className="text-tn-keyword">role</span>
          <span className="text-tn-text">=</span>
          <span className="text-tn-teal">
            "
            <TextType text={data.title} typingSpeed={75} pauseDuration={1500} showCursor={true} cursorCharacter="|" className="text-tn-teal" />
            "
          </span>
        </div>

        <div className="text-sm sm:text-base text-tn-muted">
          <span className="text-tn-string">$</span> cat location.txt <span className="text-tn-text">→ {data.location}</span>
        </div>
      </div>

      {/* hint to open about.json */}
      <button onClick={() => onOpen("about")} className="mt-12 inline-flex items-center gap-2 text-sm sm:text-base text-tn-muted hover:text-tn-accent transition-colors group">
        <span className="text-tn-violet">{"//"}</span>
        open
        <span className="text-tn-accent underline decoration-tn-accent/40 underline-offset-2 group-hover:decoration-tn-accent">about.json</span>
        to learn more →
      </button>
    </div>
  );
};

export default HomePanel;
