import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./FaqAccordion.css";

const FaqAccordion = ({ language, faqTranslations }) => {
  // Access the translations based on the selected language
  const translations = language === "fr" ? faqTranslations.fr : faqTranslations.en;

  return (
    <Accordion className="Accordion" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="custom-accordion-header">
          {translations.howLongTrips}
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-item">
          {translations.howLongTripsContent}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          {translations.specialPassport}
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-item">
          {translations.specialPassportContent}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          {translations.ticketIncludes}
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-item">
          {translations.ticketIncludesContent}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FaqAccordion;