import React from "react";


const Popup = ({ news, onClose }) => {
  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="popup-container" onClick={onClose}>
      <div className="popup-content" onClick={handlePopupClick}>
        <span className="popup-close" onClick={onClose}>
          &times;
        </span>
        <h2>{news.title}</h2>
        <div className="img-text">
            <img src={news.image} alt="" className="planet-pic" />
            <p>{news.fullDescription}</p>
            </div>
      </div>
    </div>
  );
};

export default Popup;
