import React from "react";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./Contact.css";

const Contact = ({ language, contactTranslations }) => {
  const translations =
    language === "fr" ? contactTranslations.fr : contactTranslations.en;

  return (
    <div className="contact-form">
      <Form>
        <FloatingLabel
          controlId="fullName"
          label={translations.fullNameLabel}
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder={translations.fullNamePlaceholder}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="email"
          label={translations.emailLabel}
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder={translations.emailPlaceholder}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="messageTitle"
          label={translations.messageTitleLabel}
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder={translations.messageTitlePlaceholder}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="messageContent"
          label={translations.messageContentLabel}
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder={translations.messageContentPlaceholder}
            style={{ height: "150px" }}
          />
        </FloatingLabel>
        <Link to = "/PageNotFound">
          <button className="button1">{translations.sendMessageButton}</button>
        </Link>
      </Form>
    </div>
  );
};

export default Contact;
