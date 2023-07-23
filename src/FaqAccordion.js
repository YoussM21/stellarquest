import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./FaqAccordion.css";

const FaqAccordion = () => {
  return (
    <Accordion className="Accordion" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="custom-accordion-header">
          How long do trips take?
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-item">
          Trips durations depend on the destination. Our trips average time is 7
          to 10 hours. Some trips might take longer, espcially for destinations
          outside our galaxy.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Do you need a special passport to travel?
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-item">
          No, all you need is a goverment issued passport and you'll be able to
          enjoy this amazing experience. We might need to do some tests and
          background check before confirming your flight. Please refer to Terms
          of service section.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Does the ticket include stay and activities?
        </Accordion.Header>
        <Accordion.Body className="custom-accordion-item">
          Yes, our tickets include a 5 star hotel stay for singles, couples and
          families. it also includes different activities planned and ready for
          you to enjoy. Customers are allowed to opt out from the activities if
          requested at least 3 days before the flight date. Please email
          stellarquest@support.ca or fill out the forum down below.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FaqAccordion;
