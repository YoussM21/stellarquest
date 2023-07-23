// import React from "react";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";
// import "./Contact.css";

// const Contact = () => {
//   return (
//     <div className="contact-form">
//       <Form>
//         <FloatingLabel controlId="fullName" label="Full Name" className="mb-3">
//           <Form.Control type="text" placeholder="Enter your full name" />
//         </FloatingLabel>

//         <FloatingLabel controlId="email" label="Email address" className="mb-3">
//           <Form.Control type="email" placeholder="name@example.com" />
//         </FloatingLabel>

//         <FloatingLabel
//           controlId="messageTitle"
//           label="Message Title"
//           className="mb-3"
//         >
//           <Form.Control type="text" placeholder="Enter your message title" />
//         </FloatingLabel>

//         <FloatingLabel controlId="messageContent" label="Message Content" className="mb-3">
//           <Form.Control
//             as="textarea"
//             placeholder="Enter your message content"
//             style={{ height: "150px" }}
//           />
//         </FloatingLabel>

//         <button className="button1">Send Message</button>
//       </Form>
//     </div>
//   );
// };

// export default Contact;


import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./Contact.css";

const Contact = ({ language, contactTranslations }) => {
  // Access the translations based on the selected language
  const translations = language === "fr" ? contactTranslations.fr : contactTranslations.en;

  return (
    <div className="contact-form">
      <Form>
        <FloatingLabel controlId="fullName" label={translations.fullNameLabel} className="mb-3">
          <Form.Control type="text" placeholder={translations.fullNamePlaceholder} />
        </FloatingLabel>

        <FloatingLabel controlId="email" label={translations.emailLabel} className="mb-3">
          <Form.Control type="email" placeholder={translations.emailPlaceholder} />
        </FloatingLabel>

        <FloatingLabel
          controlId="messageTitle"
          label={translations.messageTitleLabel}
          className="mb-3"
        >
          <Form.Control type="text" placeholder={translations.messageTitlePlaceholder} />
        </FloatingLabel>

        <FloatingLabel controlId="messageContent" label={translations.messageContentLabel} className="mb-3">
          <Form.Control
            as="textarea"
            placeholder={translations.messageContentPlaceholder}
            style={{ height: "150px" }}
          />
        </FloatingLabel>

        <button className="button1">{translations.sendMessageButton}</button>
      </Form>
    </div>
  );
};

export default Contact;