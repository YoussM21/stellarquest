import React from "react";
import "./News.css";
import side from "./images/sideImage.svg";
import NewsImage from "./images/NewsImage.svg";

const News = () => {
  return (
    <div className="news-page-container">
      <div className="news-page-title">News</div>
      <div className="section-2-container">
        <img src={side} alt="" className="side-image" />
        <div className="news-cards-container">
          <div className="new-card-wrapper">
            <img src={NewsImage} alt="" className="news-image" />
            <div className="news-content">
              <div className="news-title">Lorum Ipsum</div>
              <div className="content-wrapper2">
                <div className="news-description">
                    Lorem ipsum dolor sit amet, consectetur adipisc Lorem ipsum
                    dolor sit amet, consectetur adipiscLorem ipsum dolor sit amet,
                    consectetur adipiscLorem ipsum dolor sit amet, consectetur
                    adipisc Lorem ipsum dolor sit amet, consectetur adipisc Lorem
                    ipsum dolor sit amet, consectetur adipisc 
                </div>
                <div className="continue-reading">....Continue Reading</div>
              </div>
            </div>
          </div>
          <div className="new-card-wrapper">
            <img src={NewsImage} alt="" className="news-image" />
            <div className="news-content">
              <div className="news-title">Lorum Ipsum</div>
              <div className="content-wrapper2">
                <div className="news-description">
                    Lorem ipsum dolor sit amet, consectetur adipisc Lorem ipsum
                    dolor sit amet, consectetur adipiscLorem ipsum dolor sit amet,
                    consectetur adipiscLorem ipsum dolor sit amet, consectetur
                    adipisc Lorem ipsum dolor sit amet, consectetur adipisc Lorem
                    ipsum dolor sit amet, consectetur adipisc 
                </div>
                <div className="continue-reading">....Continue Reading</div>
              </div>
            </div>
          </div>
          <div className="new-card-wrapper">
            <img src={NewsImage} alt="" className="news-image" />
            <div className="news-content">
              <div className="news-title">Lorum Ipsum</div>
              <div className="content-wrapper2">
                <div className="news-description">
                    Lorem ipsum dolor sit amet, consectetur adipisc Lorem ipsum
                    dolor sit amet, consectetur adipiscLorem ipsum dolor sit amet,
                    consectetur adipiscLorem ipsum dolor sit amet, consectetur
                    adipisc Lorem ipsum dolor sit amet, consectetur adipisc Lorem
                    ipsum dolor sit amet, consectetur adipisc 
                </div>
                <div className="continue-reading">....Continue Reading</div>
              </div>
            </div>
          </div>
          <div className="new-card-wrapper">
            <img src={NewsImage} alt="" className="news-image" />
            <div className="news-content">
              <div className="news-title">Lorum Ipsum</div>
              <div className="content-wrapper2">
                <div className="news-description">
                    Lorem ipsum dolor sit amet, consectetur adipisc Lorem ipsum
                    dolor sit amet, consectetur adipiscLorem ipsum dolor sit amet,
                    consectetur adipiscLorem ipsum dolor sit amet, consectetur
                    adipisc Lorem ipsum dolor sit amet, consectetur adipisc Lorem
                    ipsum dolor sit amet, consectetur adipisc 
                </div>
                <div className="continue-reading">....Continue Reading</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
