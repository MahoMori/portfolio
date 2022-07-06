import React from "react";
import { init, send } from "emailjs-com";
import IconSet from "../icon-set/IconSet";
import {
  ContactSectionContainer,
  ContactTitleContainer,
  ContactTitleH2,
  PanelParentDiv,
  LeftPanel,
  FormButton,
} from "./contact.style";

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
        <div>
          <form>
            <input type="text" name="name" />
            <input type="text" name="email" />
            <textarea name="message" cols="30" rows="10"></textarea>
            <FormButton type="submit">send message</FormButton>
          </form>
        </div>
      </PanelParentDiv>
    </ContactSectionContainer>
  );
};

export default Contact;
