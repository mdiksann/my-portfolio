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
      <div className="absolute inset-0 bg-[#08090e] -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* JSON Viewer */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-0 border border-gray-700 overflow-hidden">
          <div className="bg-gray-900/50 rounded-lg p-4 sm:p-8 font-mono text-sm sm:text-base border border-gray-700 overflow-x-auto">
            <JSONNode data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
