import React from "react";
import { init, send } from "emailjs-com";

const onClickSendMail = () => {
  init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

  const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  const templateParams = {
    from_name: "NANASHI",
    email: "test@test.com",
    message: "this is a message",
  };

  send(emailjsServiceId, emailjsTemplateId, templateParams).then(
    (res) => {
      // sent 200 OK
      console.log("sent", res.status, res.text);
    },
    (error) => {
      console.log("failed", error);
    }
  );
};
// onClickSendMail();

const Contact = () => {
  return <div>Contact</div>;
};

export default Contact;
