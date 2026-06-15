import React from "react";
import TextType from "./TextType";

const Hero = ({ data }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24">
      <div className="w-full max-w-3xl">
        {/* Terminal window */}
        <div className="rounded-xl border border-tn-border bg-tn-surface/80 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden animate-fade-in">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-tn-elevated border-b border-tn-border">
            <span className="w-3 h-3 rounded-full bg-tn-boolean/80"></span>
            <span className="w-3 h-3 rounded-full bg-tn-number/80"></span>
            <span className="w-3 h-3 rounded-full bg-tn-string/80"></span>
            <span className="ml-3 font-mono text-xs sm:text-sm text-tn-muted">iksan@portfolio: ~/welcome</span>
          </div>

          {/* Terminal body */}
          <div className="p-5 sm:p-8 md:p-10 font-mono space-y-4 sm:space-y-6">
            {/* whoami */}
            <div className="text-sm sm:text-base">
              <span className="text-tn-string">$</span>
              <span className="text-tn-text ml-2">whoami</span>
            </div>

            {/* greeting comment */}
            <p className="text-tn-muted text-base sm:text-lg">{"// Hello, I'm"}</p>

            {/* name */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-tn-text leading-tight">{data.name}</h1>

            {/* role typing */}
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

            {/* location */}
            <div className="text-sm sm:text-base text-tn-muted pt-2">
              <span className="text-tn-string">$</span>
              <span className="ml-2">cat location.txt</span>
              <span className="text-tn-text ml-2">→ {data.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
