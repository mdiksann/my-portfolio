import React, { useState, useEffect, useRef } from "react";
import JSONNode from "./JSONNode";

const About = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className={`min-h-screen py-40 px-4 sm:px-6 mt-32 relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      {/* Background overlay untuk About section */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#05070a] via-[#0a0e1a] to-[#050810]"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-8xl mx-10">
        {/* JSON Viewer */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-0 border border-gray-700 overflow-hidden">
          <div className="bg-gray-900/50 rounded-lg p-4 sm:p-8 font-mono text-base sm:text-lg md:text-lg border border-gray-700 overflow-x-auto">
            <JSONNode data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
