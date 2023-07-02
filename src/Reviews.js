import React from "react";
import "./Reviews.css";
import john from "./images/JonBruce.svg";
import star1 from "./images/star-1.svg";

const Reviews = () => {
  return (
    <div className="reviews-container">
      <div className="header">Why Trust us</div>
      <div className="group-wrapper">
        <div className="pic-wrapper">
          <div className="jonbruce">
            <img src={john} alt="John Bruce" />
          </div>
          <div className="text-wrapper">
            <div className="name">Jon Bruce</div>
            <div className="name2">Owner, Flight captain</div>
          </div>
        </div>
        <div className="reviews">
          <div className="review1-wrapper">
            <div className="profile"></div>
            <div className="review1">
              <div className="star-frame">
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
              </div>
              <p className="review-title">Lorum ipsum</p>
              <p className="review-content-wrapper">
                Lorem ipsum dolor sit amet, consectetur adipisc
              </p>
            </div>
          </div>
          <div className="review1-wrapper">
            <div className="profile"></div>
            <div className="review1">
              <div className="star-frame">
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
              </div>
              <p className="review-title">Lorum ipsum</p>
              <p className="review-content-wrapper">
                Lorem ipsum dolor sit amet, consectetur adipisc
              </p>
            </div>
          </div>
          <div className="review1-wrapper">
            <div className="profile"></div>
            <div className="review1">
              <div className="star-frame">
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
              </div>
              <p className="review-title">Lorum ipsum</p>
              <p className="review-content-wrapper">
                Lorem ipsum dolor sit amet, consectetur adipisc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
