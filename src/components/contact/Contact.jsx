import React, { useState } from "react";
import { init, send } from "emailjs-com";
import { HeartSpinner } from "react-spinners-kit";
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

  const [isSending, setIsSending] = useState(false);

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

    setIsSending(true);

    send(emailjsServiceId, emailjsTemplateId, templateParams).then(
      (res) => {
        setIsSending(false);
        setFormContext({
          name: "",
          email: "",
          message: "",
        });
        alert("Message sent! Thank you! <3");
        console.log("sent", res.status, res.text);
      },
      (error) => {
        setIsSending(false);
        alert("Something went wrong! Please submit again.");
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
              value={formContext.name}
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={formContext.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <textarea
              name="message"
              cols="30"
              rows="7"
              value={formContext.message}
              placeholder="Message"
              onChange={handleChange}
            ></textarea>
            <FormButton type="submit">
              {isSending ? <HeartSpinner /> : "send message"}
            </FormButton>
          </form>
        </RightPanel>
      </PanelParentDiv>
    </ContactSectionContainer>
  );
};

export default Contact;
