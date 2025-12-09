import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import StarryBackground from "./components/StarryBackground";
import portfolioData from "./data/portfolioData.json";

function App() {
  return (
    <div className="min-h-screen relative">
      <StarryBackground />
      <Header />
      <Hero data={portfolioData} />
      <About data={portfolioData} />
      <Contact data={portfolioData} />
    </div>
  );
}

export default App;
