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
        <div className="reviews" role="list">
          <div className="review1-wrapper" role="listitem">
            <div className="profile" aria-hidden="true"></div>
            <div className="review1">
              <div className="star-frame" aria-label="Rating: 5 out of 5">
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
              </div>
              <p className="review-title">Justin dough</p>
              <p className="review-content-wrapper">
                This was a fantastic experience! Highly recommended.
              </p>
            </div>
          </div>
          <div className="review1-wrapper" role="listitem">
            <div className="profile" aria-hidden="true"></div>
            <div className="review1">
              <div className="star-frame" aria-label="Rating: 5 out of 5">
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
              </div>
              <p className="review-title">Cristiano Ronaldo</p>
              <p className="review-content-wrapper">
                Something I've never experienced before. Better than UEFA!
              </p>
            </div>
          </div>
          <div className="review1-wrapper" role="listitem">
            <div className="profile" aria-hidden="true"></div>
            <div className="review1">
              <div className="star-frame" aria-label="Rating: 5 out of 5">
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
              </div>
              <p className="review-title">Lionel Messi</p>
              <p className="review-content-wrapper">
                The trip was a 10 out 10! It was fun and magical.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

