import React from "react";
import FaqAccordion from "./FaqAccordion";
import Contact from "./Contact";
import "./Help.css";

const Help = () => {
  return (
    <div className="help-container">
      <div className="help-title">Help Support</div>
      <div className="help-content">
        <div className="faq-section">
          <div className="faq-title">Frequently Asked Questions</div>
          <FaqAccordion></FaqAccordion>
        </div>
        <div className="contact-us-section">
          <div className="contact-us-title">Contact us</div>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
};

export default Help;
