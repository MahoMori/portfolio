import { FaExternalLinkAlt } from "react-icons/fa";

import { FooterContainer, StyledLink } from "./footer.style";

const Footer = () => (
  <FooterContainer>
    <p>
      Top Illustration by{" "}
      <StyledLink href="https://picrew.me/image_maker/701767" target="_blank">
        Picrew 껍질-미리깐 메이커&nbsp;
        <FaExternalLinkAlt />
      </StyledLink>
    </p>
  </FooterContainer>
);

export default Footer;
