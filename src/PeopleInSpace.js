import React from "react";
import "./PeopleInSpace.css";
import astronaut from "./images/astronaut.svg";
import planetPOV from "./images/planetPOV.svg";

const PeopleInSpace = () => {
  return (
    <div className="Container">
      <div className="box-people">
        <div className="text-wrapper3">
          <div className="title-people">Number Of People In Space</div>
          <div className="number">21</div>
        </div>
      </div>
      <div className="image-container2">
        <img src={astronaut} alt="astronaut" className="astronaut" />
        <img src={planetPOV} alt="Planet" className="planet" />
      </div>
    </div>
  );
};

export default PeopleInSpace;
