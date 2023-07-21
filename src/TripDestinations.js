import React, { useState } from "react";
import "./TripDestinations.css";
import star1 from "./images/star-1.svg";
import moon2 from "./images/moon2.svg";
import mars2 from "./images/mars2.svg";
import jupiter2 from "./images/jupiter2.svg";
import saturn2 from "./images/saturn2.svg";
import mercury2 from "./images/mercury2.svg";
import uranus from "./images/uranus.png";

const TripDestinations = () => {
  const [sortByPrice, setSortByPrice] = useState("none");
  const [sortByTitle, setSortByTitle] = useState("none");

  const destinations = [
    {
      id: 1,
      title: "Moon",
      price: "2,000$",
      image: moon2,
      description:
        "The Moon is Earth's only natural satellite, orbiting around our planet. It has a barren and rocky surface, covered in impact craters, with no atmosphere or liquid water.",
    },

    {
      id: 2,
      title: "Mars",
      price: "4,000$",
      image: mars2,
      description:
        "Mars is the fourth planet from the Sun and is often called the Red Planet due to its reddish appearance. It has a landscape marked by ancient riverbeds.",
    },

    {
      id: 3,
      title: "Jupiter",
      price: "3,500$",
      image: jupiter2,
      description:
        "Jupiter is the largest planet in our solar system, known for its distinctive bands of clouds and the iconic Great Red Spot, a massive storm system.",
    },

    {
      id: 4,
      title: "Saturn",
      price: "2,500$",
      image: saturn2,
      description:
        "Saturn is the sixth planet from the Sun and is recognized for its striking system of rings made up of ice particles and dust.",
    },

    {
      id: 5,
      title: "Mercury",
      price: "5,000$",
      image: mercury2,
      description:
        "Mercury is the smallest planet in our solar system. It has a rocky surface with extreme temperature variations, ranging from scorching hot days to freezing cold nights.",
    },

    {
      id: 6,
      title: "Uranus",
      price: "3,000$",
      image: uranus,
      description:
        "Uranus is the seventh planet from the Sun and is characterized by its unique sideways rotation, giving it its distinct 'rolling' appearance. It is an ice giant.",
    },
  ];

  // Function to sort destinations based on price
  const sortDestinationsByPrice = (destinations, sortOrder) => {
    return destinations.sort((a, b) => {
      const priceA = parseFloat(a.price.replace("$", "").replace(",", ""));
      const priceB = parseFloat(b.price.replace("$", "").replace(",", ""));

      if (sortOrder === "lowToHigh") {
        return priceA - priceB;
      } else if (sortOrder === "highToLow") {
        return priceB - priceA;
      } else {
        return 0;
      }
    });
  };

  // Function to sort destinations alphabetically by title
  const sortDestinationsByTitle = (destinations, sortOrder) => {
    return destinations.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (sortOrder === "aToZ") {
        return titleA.localeCompare(titleB);
      } else if (sortOrder === "zToA") {
        return titleB.localeCompare(titleA);
      } else {
        return 0;
      }
    });
  };

  // Combine both sorting methods based on the selected options
  const sortedDestinations = sortDestinationsByTitle(
    sortDestinationsByPrice(destinations, sortByPrice),
    sortByTitle
  );

  return (
    <div className="destinations-container">
      <div className="section-title">Destinations</div>
      <div className="filter-destination">
        <div className="filter-bar">
          <label>Filter by:</label>
          <select
            className="filter"
            value={`${sortByPrice}-${sortByTitle}`}
            onChange={(e) => {
              const [price, title] = e.target.value.split("-");
              setSortByPrice(price);
              setSortByTitle(title);
            }}
          >
            <option value="none-none">None</option>
            <option value="lowToHigh-none">Price low to high</option>
            <option value="highToLow-none">Price high to low</option>
            <option value="none-aToZ">A to Z</option>
            <option value="none-zToA">Z to A</option>
          </select>
        </div>
        <div className="cards-container">
          {sortedDestinations.map((destination) => (
            <div key={destination.id} className="card-wrapper">
              <img src={destination.image} alt="" className="planet-pic" />
              <div className="content-text-wrapper">
                <div className="title-review-price">
                  <div className="destination-title">{destination.title}</div>
                  <div className="price">{destination.price}</div>
                </div>
                <div className="star-frame">
                  <img className="star" alt="Star" src={star1} />
                  <img className="star" alt="Star" src={star1} />
                  <img className="star" alt="Star" src={star1} />
                  <img className="star" alt="Star" src={star1} />
                  <img className="star" alt="Star" src={star1} />
                </div>
                <div className="description">{destination.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripDestinations;
