import { IconContainer } from "./iconSet.style";
import { StyledLink } from "../../globalStyle";

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const IconSet = ({ iconColor }) => (
  <IconContainer iconColor={iconColor}>
    <StyledLink href="mailto:tr27e1104@gmail.com">
      <FaEnvelope />
    </StyledLink>
    <StyledLink
      href="https://www.linkedin.com/in/maho-morinaga/"
      target="_blank"
    >
      <FaLinkedin />
    </StyledLink>
    <StyledLink href="https://github.com/MahoMori" target="_blank">
      <FaGithub />
    </StyledLink>
  </IconContainer>
);

export default IconSet;
