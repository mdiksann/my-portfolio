import React from "react";
import TextType from "./TextType";

const Hero = ({ data }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-6xl w-full text-center">
        {/* Hero Content */}
        <div className="space-y-10">
          <h3 className="text-2xl md:text-3xl lg:text-6xl text-gray-400 animate-fade-in">Hello, I'm</h3>
          <h1 className="text-7xl md:text-8xl lg:text-9xl text-gray-400 animate-fade-in">{data.name}</h1>
          <div className="h-20 md:h-24 lg:h-28 flex items-center justify-center">
            <div className="relative inline-block">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400">
                <TextType text={data.title} typingSpeed={75} pauseDuration={1500} showCursor={true} cursorCharacter="|" className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
