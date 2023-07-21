import React, { useState } from "react";
import "./News.css";
import side from "./images/sideImage.svg";
import Popup from "./Popup";
import kelper from "./images/kelperPlanet.svg";
import voyager from "./images/Voyager-x.svg";
import spaceWalk from "./images/spaceWalk.svg";
import blackhole from "./images/blackhole.svg";
import searchlens from "./images/searchlens.svg";


const newsData = [
  {
    title: "New Exoplanet Discovered!",
    image: kelper,
    description:
      "Astronomers have announced the discovery of a new exoplanet orbiting a distant star. The exoplanet, named Kepler-452b, is located in the habitable zone of its host star, meaning it may have conditions suitable for liquid water and potentially life.",
    fullDescription:
      "Astronomers have announced the discovery of a new exoplanet orbiting a distant star. The exoplanet, named Kepler-452b, is located about 1,400 light-years away from Earth in the constellation Cygnus. It is estimated to be about 60% larger than Earth and orbits its host star in the habitable zone, where conditions might be suitable for liquid water and potentially life. The discovery was made using NASA's Kepler Space Telescope. Kepler-452b is often referred to as Earth's 'cousin' due to its similarities in size and distance from its star. Scientists are excited about the possibility of studying this distant exoplanet in more detail to learn about its atmosphere and potential habitability.",
  },
  {
    title: "NASA's New Spacecraft Successfully Launches",
    image: voyager,
    description:
      "NASA's latest spacecraft, named Voyager-X, has successfully launched into space. Voyager-X is equipped with advanced instruments to study the outer planets and interstellar space. Scientists hope to learn more about the mysteries of the solar system and beyond.",
    fullDescription:
      "NASA's latest spacecraft, named Voyager-X, has successfully launched into space. The spacecraft, part of the Voyager program, is designed to explore the outer planets of the solar system and continue its journey into interstellar space. Voyager-X is equipped with advanced instruments to study the magnetic fields, solar wind, and cosmic rays in the outer solar system. It will provide valuable data and insights into the dynamics of these distant regions, which will aid our understanding of the universe. Voyager-X follows in the footsteps of its predecessors, Voyager 1 and Voyager 2, both of which have reached interstellar space and continue to send back data from beyond our solar system.",
  },
  {
    title: "Astronauts Complete Historic Spacewalk",
    image: spaceWalk,
    description:
      "Two astronauts from the International Space Station (ISS) have completed a historic spacewalk lasting over eight hours. During the spacewalk, they repaired critical equipment on the ISS and conducted important scientific experiments.",
    fullDescription:
      "Two astronauts from the International Space Station (ISS) have completed a historic spacewalk, making it one of the longest spacewalks in history. The spacewalk, lasting over eight hours, was conducted to repair critical equipment on the exterior of the ISS and to perform important scientific experiments. During the spacewalk, the astronauts also installed new instruments and conducted tests for future missions. The successful completion of this challenging spacewalk highlights the expertise and dedication of the astronauts and the significance of human space exploration.",
  },
  {
    title: "First Images of a Black Hole Captured",
    image: blackhole,
    description:
      "Astronomers have captured the first-ever images of a black hole in a distant galaxy. The images provide valuable insights into the extreme gravitational forces and physics of these mysterious cosmic objects.",
    fullDescription:
      "Astronomers have made a groundbreaking achievement by capturing the first-ever images of a black hole located in a distant galaxy. The black hole, residing at the center of the galaxy Messier 87, is approximately 55 million light-years away from Earth. The images were captured using a global network of telescopes known as the Event Horizon Telescope (EHT). The captured images show a bright ring-like structure around the black hole, known as the 'photon ring,' which is caused by the intense gravitational forces bending light around the black hole's event horizon. These historic images provide valuable insights into the extreme physics of black holes and confirm many aspects of Einstein's theory of general relativity.",
  },
];

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  const handleClosePopup = () => {
    setSelectedNews(null);
  };

  return (
    <div className="news-page-container">
      <div className="news-page-title">News</div>
      <div className="search-container">
        <input type="text" placeholder="Search news..." />
        <img src={searchlens} alt="searchlens" className="searchIcon"/>
      </div>
      <div className="section-2-container">
        <img src={side} alt="" className="side-image" />
        <div className="news-cards-container">
          {newsData.map((news, index) => (
            <div
              className="new-card-wrapper"
              key={index}
              onClick={() => handleNewsClick(news)}
            >
              <img src={news.image} alt="" className="news-image" />
              <div className="news-content">
                <div className="news-title">{news.title}</div>
                <div className="content-wrapper2">
                  <div className="news-description">{news.description}</div>
                  <div className="continue-reading">....Continue Reading</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedNews && <Popup news={selectedNews} onClose={handleClosePopup} />}
    </div>
  );
};

export default News;
