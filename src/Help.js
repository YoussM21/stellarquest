// import React from "react";
// import FaqAccordion from "./FaqAccordion";
// import Contact from "./Contact";
// import "./Help.css";

// const Help = ({ language }) => {
//   return (
//     <div className="help-container">
//       <div className="help-title">Help Support</div>
//       <div className="help-content">
//         <div className="faq-section">
//           <div className="faq-title">Frequently Asked Questions</div>
//           <FaqAccordion></FaqAccordion>
//         </div>
//         <div className="contact-us-section">
//           <div className="contact-us-title">Contact us</div>
//           <Contact></Contact>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Help;

import React, { useState } from "react";
import FaqAccordion from "./FaqAccordion";
import Contact from "./Contact";
import "./Help.css";
import {faqTranslations, contactTranslations} from "./translations";

const Help = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setCurrentLanguage(event.target.value);
  };

  return (
    <div className="help-container">
      <div className="help-title">{currentLanguage === "en" ? "Help Support" : "Support d'Aide"}</div>
      <div className="language-switcher">
        <select value={currentLanguage} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>
      <div className="help-content">
        <div className="faq-section">
          <div className="faq-title">{currentLanguage === "en" ? "Frequently Asked Questions" : "Questions Fréquemment Posées"}</div>
          <FaqAccordion language={currentLanguage} faqTranslations={faqTranslations} />
        </div>
        <div className="contact-us-section">
          <div className="contact-us-title">{currentLanguage === "en" ? "Contact us" : "Contactez-nous"}</div>
          <Contact language={currentLanguage} contactTranslations={contactTranslations} />
        </div>
      </div>
    </div>
  );
};

export default Help;