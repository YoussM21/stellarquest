import React, { useState, useEffect } from "react";
import "./PeopleInSpace.css";
import astronaut from "./images/astronaut.svg";
import planetPOV from "./images/planetPOV.svg";
import axios from "axios";

const PeopleInSpace = () => {
  const [peopleCount, setPeopleCount] = useState(0);

  useEffect(() => {
      axios.get('http://api.open-notify.org/astros.json')
        .then(response => {
          setPeopleCount(response.data.number);
        })
        .catch(error => {
          console.error('Error fetching space people count:', error);
        });
    }, []);

  return (
    <div className="Container">
      <div className="box-people">
        <div className="text-wrapper3">
          <div className="title-people">Number Of People In Space</div>
          <div className="number"> {peopleCount} </div>
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
