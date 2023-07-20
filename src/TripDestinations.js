import React from "react";
import "./TripDestinations.css";
import star1 from "./images/star-1.svg";
import moon2 from "./images/moon2.svg";
import mars2 from "./images/mars2.svg";
import jupiter2 from "./images/jupiter2.svg";
import saturn2 from "./images/saturn2.svg";
import mercury2 from "./images/mercury2.svg";
import uranus from "./images/uranus.png";

const TripDestinations = () => {
  return (
    <div className="destinations-container">
      <div className="section-title">Destinations</div>
      <div className="cards-container">
        <div className="card-wrapper">
          <img src={moon2} alt="" className="planet-pic" />
          <div className="content-text-wrapper">
            <div className="title-review-price">
              <div className="destination-title">Moon</div>
              <div className="price">$2,000</div>
            </div>
            <div className="star-frame">
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
            </div>
            <div className="description">
              The Moon is Earth's only natural satellite, orbiting around our
              planet. It has a barren and rocky surface, covered in impact
              craters, with no atmosphere or liquid water.
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <img src={mars2} alt="" className="planet-pic" />
          <div className="content-text-wrapper">
            <div className="title-review-price">
              <div className="destination-title">Mars</div>
              <div className="price">$3,500</div>
            </div>
            <div className="star-frame">
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
            </div>
            <div className="description">
              Mars is the fourth planet from the Sun and is often called the
              "Red Planet" due to its reddish appearance. It has a landscape
              marked by ancient riverbeds.
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <img src={jupiter2} alt="" className="planet-pic" />
          <div className="content-text-wrapper">
            <div className="title-review-price">
              <div className="destination-title">Jupiter</div>
              <div className="price">$4,000</div>
            </div>
            <div className="star-frame">
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
            </div>
            <div className="description">
              Jupiter is the largest planet in our solar system, known for its
              distinctive bands of clouds and the iconic Great Red Spot, a
              massive storm system.
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <img src={saturn2} alt="" className="planet-pic" />
          <div className="content-text-wrapper">
            <div className="title-review-price">
              <div className="destination-title">Saturn</div>
              <div className="price">$2,500</div>
            </div>
            <div className="star-frame">
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
            </div>
            <div className="description">
              Saturn is the sixth planet from the Sun and is recognized for its
              striking system of rings made up of ice particles and dust.
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <img src={mercury2} alt="" className="planet-pic" />
          <div className="content-text-wrapper">
            <div className="title-review-price">
              <div className="destination-title">Mercury</div>
              <div className="price">$5,000</div>
            </div>
            <div className="star-frame">
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
            </div>
            <div className="description">
              Mercury is the smallest planet in our solar system. It has a rocky
              surface with extreme temperature variations, ranging from
              scorching hot days to freezing cold nights.
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <img src={uranus} alt="" className="planet-pic" />
          <div className="content-text-wrapper">
            <div className="title-review-price">
              <div className="destination-title">Venus</div>
              <div className="price">$3,000</div>
            </div>
            <div className="star-frame">
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
              <img className="star" alt="Star" src={star1} />
            </div>
            <div className="description">
              Uranus is the seventh planet from the Sun and is characterized by
              its unique sideways rotation, giving it its distinct "rolling"
              appearance. It is an ice giant.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDestinations;
