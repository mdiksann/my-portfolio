import React from "react";
import IDE from "./components/ide/IDE";
import StarryBackground from "./components/StarryBackground";
import portfolioData from "./data/portfolioData.json";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <StarryBackground />
      <IDE data={portfolioData} />
    </div>
  );
}

export default App;
