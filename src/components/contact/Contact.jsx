import React, { useState } from "react";
import { init, send } from "emailjs-com";
import IconSet from "../icon-set/IconSet";
import {
  ContactSectionContainer,
  ContactTitleContainer,
  ContactTitleH2,
  PanelParentDiv,
  LeftPanel,
  RightPanel,
  FormButton,
} from "./contact.style";

const Contact = () => {
  const [formContext, setFormContext] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setFormContext({ ...formContext, [e.target.name]: value });
  };

  const onSubmitSendMail = (e) => {
    e.preventDefault();
    init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    const templateParams = {
      from_name: formContext.name,
      email: formContext.email,
      message: formContext.message,
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

  return (
    <ContactSectionContainer id="contact">
      <ContactTitleContainer>
        <ContactTitleH2>
          Thank you for checking out my portfolio!
        </ContactTitleH2>
      </ContactTitleContainer>

      <PanelParentDiv>
        <LeftPanel>
          <p>
            If you are interested in working with me or have any comments or
            questions, feel free to contact me on LinkedIn or send a message
            here!
          </p>
          <div>
            <IconSet iconColor="skyBlue" />
          </div>
        </LeftPanel>

        <RightPanel>
          <form onSubmit={onSubmitSendMail}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <textarea
              name="message"
              cols="30"
              rows="7"
              placeholder="Message"
              onChange={handleChange}
            ></textarea>
            <FormButton type="submit">send message</FormButton>
          </form>
        </RightPanel>
      </PanelParentDiv>
    </ContactSectionContainer>
  );
};

export default Contact;
