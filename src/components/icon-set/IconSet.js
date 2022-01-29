import { IconContainer, StyledLink } from "./iconSet.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const IconSet = () => (
  <IconContainer>
    <StyledLink href="mailto:tr27e1104@gmail.com">
      <FontAwesomeIcon icon={faEnvelope} />
    </StyledLink>
    <StyledLink href="https://www.linkedin.com/in/maho-morinaga/">
      <FontAwesomeIcon icon={faLinkedin} />
    </StyledLink>
    <StyledLink href="https://github.com/MahoMori">
      <FontAwesomeIcon icon={faGithub} />
    </StyledLink>
  </IconContainer>
);

export default IconSet;
