import React from "react";
import JSONNode from "../../JSONNode";

const AboutPanel = ({ data }) => {
  return (
    <div className="p-3 sm:p-5 md:p-6 animate-fade-in">
      <JSONNode data={data} />
    </div>
  );
};

export default AboutPanel;
