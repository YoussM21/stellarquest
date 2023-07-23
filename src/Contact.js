import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = ({ language, contactTranslations }) => {
  const translations =
    language === "fr" ? contactTranslations.fr : contactTranslations.en;


  const schema = yup.object().shape({
    fullName: yup.string().required(translations.fullNameError),
    email: yup.string().email(translations.emailError).required(translations.emailError),
    messageTitle: yup.string().required(translations.messageTitleError),
    messageContent: yup.string().required(translations.messageContentError),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
      initialValues={{
        fullName: "",
        email: "",
        messageTitle: "",
        messageContent: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className="contact-form">
          <FloatingLabel
            controlId="fullName"
            label={translations.fullNameLabel}
            className="mb-3"
          >
            <Field
              type="text"
              name="fullName"
              placeholder={translations.fullNamePlaceholder}
              className={`form-control ${
                touched.fullName && errors.fullName ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="invalid-feedback"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="email"
            label={translations.emailLabel}
            className="mb-3"
          >
            <Field
              type="email"
              name="email"
              placeholder={translations.emailPlaceholder}
              className={`form-control ${
                touched.email && errors.email ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="messageTitle"
            label={translations.messageTitleLabel}
            className="mb-3"
          >
            <Field
              type="text"
              name="messageTitle"
              placeholder={translations.messageTitlePlaceholder}
              className={`form-control ${
                touched.messageTitle && errors.messageTitle ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage
              name="messageTitle"
              component="div"
              className="invalid-feedback"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="messageContent"
            label={translations.messageContentLabel}
            className="mb-3"
          >
            <Field
              as="textarea"
              name="messageContent"
              placeholder={translations.messageContentPlaceholder}
              style={{ height: "150px" }}
              className={`form-control ${
                touched.messageContent && errors.messageContent ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage
              name="messageContent"
              component="div"
              className="invalid-feedback"
            />
          </FloatingLabel>

          <Link to = "/PageNotFound">
            <Button type="submit" className="button1">
              {translations.sendMessageButton}
            </Button>
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default Contact;
