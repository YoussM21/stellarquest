import React, { useState } from "react";
import "./DestinationBox.css";
import moon from "./images/moon.png";
import mars from "./images/mars.png";
import jupiter from "./images/jupiter.png";
import saturn from "./images/saturn.png";
import mercury from "./images/mercury.svg";
import { Link } from "react-router-dom";

const destinationsData = [
  {
    title: "Moon",
    image: moon,
    description:
      "The Moon is Earth's only natural satellite, orbiting around our planet. It has a barren and rocky surface, covered in impact craters, with no atmosphere or liquid water.",
  },
  {
    title: "Mars",
    image: mars,
    description:
      "Mars is the fourth planet from the Sun and is often called the 'Red Planet' due to its reddish appearance. It has a thin atmosphere composed mainly of carbon dioxide and a landscape marked by ancient riverbeds, towering volcanoes, and deep canyons, including Valles Marineris, one of the largest canyons in the solar system.",
  },
  {
    title: "Jupiter",
    image: jupiter,
    description:
      "Jupiter is the largest planet in our solar system, known for its distinctive bands of clouds and the iconic Great Red Spot, a massive storm system. It is a gas giant composed mostly of hydrogen and helium and has a powerful magnetic field.",
  },
  {
    title: "Saturn",
    image: saturn,
    description:
      "Saturn is the sixth planet from the Sun and is recognized for its striking system of rings made up of ice particles and dust. It is a gas giant similar in composition to Jupiter, with a complex atmosphere featuring bands of clouds and swirling storms.",
  },
  {
    title: "Mercury",
    image: mercury,
    description:
      "Mercury is the smallest planet in our solar system, located closest to the Sun. It has a rocky surface with extreme temperature variations, ranging from scorching hot days to freezing cold nights. The planet's slow rotation and thin atmosphere make it a fascinating celestial body to study.",
  },
];

const DestinationBox = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="destination">
      <div className="rectangle">
        <div className="frame-wrapper">
          <h1 className="h-1">Destinations</h1>
        </div>
        <div className="cards">
          {destinationsData.map((destination, index) => (
            <article
              key={index}
              className={`card${
                expandedCard === index ? " card--expanded" : ""
              }`}
              role="button"
              aria-expanded={expandedCard === index ? "true" : "false"}
              onClick={() => handleCardClick(index)}
            >
              <div className="card__inner">
                <div className="card__side card__side--front">
                  <div className="card__image-wrapper">
                    <img
                      src={destination.image}
                      alt=""
                      className="card__image"
                    />
                  </div>
                  <div className="card__body card__body--flex">
                    <h2 className="card__title">{destination.title}</h2>
                    <span className="card__arrow">&rarr;</span>
                  </div>
                </div>
                <div className="card__side card__side--back">
                  <div className="card__body">
                    <p>{destination.description}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="button-container">
          <Link to="/destinations?section=bookingform">
            <button className="button1">Book Now</button>
          </Link>
          <Link to="/destinations?section=planetdestinations">
            <button className="button2">All Destinations</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationBox;
