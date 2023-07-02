import React from "react";
import "./DestinationBox.css";
import moon from "./images/moon.png";
import mars from "./images/mars.png";
import jupiter from "./images/jupiter.png";
import saturn from "./images/saturn.png";

const DestinationBox = () => {
  return (
    <div className="destination">
      <div className="rectangle">
        <div className="frame-wrapper">
          <div className="frame">
            <div className="text-wrapper4">D</div>
            <h1 className="h-1">ESTINATIONS</h1>
          </div>
        </div>
        <div className="cards">
          <article className="card">
            <div className="card__inner">
              <div className="card__side card__side--front">
                <div className="card__image-wrapper">
                  <img src={moon} alt="" className="card__image" />
                </div>
                <div className="card__body card__body--flex">
                  <h2 className="card__title">Moon</h2>
                  {/* <span className="card__arrow">&rarr;</span> */}
                </div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__body">
                  <p>
                  The Moon is Earth's only natural satellite, orbiting around our planet. 
                  It has a barren and rocky surface, covered in impact craters, with no atmosphere or liquid water.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="card">
            <div className="card__inner">
              <div className="card__side card__side--front">
                <div className="card__image-wrapper">
                  <img src={mars} alt="" className="card__image" />
                </div>
                <div className="card__body card__body--flex">
                  <h2 className="card__title">Mars</h2>
                  {/* <span className="card__arrow">&rarr;</span> */}
                </div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__body">
                  <p>
                  Mars is the fourth planet from the Sun and is often called the "Red Planet" due to its reddish appearance. 
                  It has a thin atmosphere composed mainly of carbon dioxide and a landscape marked by ancient riverbeds, 
                  towering volcanoes, and deep canyons, including Valles Marineris, one of the largest canyons in the solar system.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article  className="card">
            <div className="card__inner">
              <div className="card__side card__side--front">
                <div className="card__image-wrapper">
                  <img src={jupiter} alt="" className="card__image" />
                </div>
                <div className="card__body card__body--flex">
                  <h2 className="card__title">Jupiter</h2>
                  {/* <span className="card__arrow">&rarr;</span> */}
                </div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__body">
                  <p>
                  Jupiter is the largest planet in our solar system, known for its distinctive 
                  bands of clouds and the iconic Great Red Spot, a massive storm system. It
                  is a gas giant composed mostly of hydrogen and helium and has a powerful magnetic field. 
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="card">
            <div className="card__inner">
              <div className="card__side card__side--front">
                <div className="card__image-wrapper">
                  <img src={saturn} alt="" className="card__image" />
                </div>
                <div className="card__body card__body--flex">
                  <h2 className="card__title">Saturn</h2>
                  {/* <span className="card__arrow">&rarr;</span> */}
                </div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__body">
                  <p>
                  Saturn is the sixth planet from the Sun and is recognized for its striking system of rings made up of ice particles and dust. 
                  It is a gas giant similar in composition to Jupiter, with a complex atmosphere featuring bands of clouds and swirling storms.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="button-container">
          <button className="button">Book Now</button>
          <button className="button">All Destinations</button>
        </div>
      </div>
    </div>
  );
};

export default DestinationBox;
