import IconSet from "../icon-set/IconSet";

import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import { FooterContainer, StyledLink, LinkIcon } from "./footer.style";

const Footer = () => (
  <FooterContainer>
    <IconSet />
    <p>
      Top Illustration by{" "}
      <StyledLink href="https://picrew.me/image_maker/701767" target="_blank">
        Picrew 껍질-미리깐 메이커&nbsp;
        <LinkIcon icon={faExternalLinkAlt} />
      </StyledLink>
    </p>
  </FooterContainer>
);

export default Footer;
