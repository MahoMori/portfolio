import { HeaderContainer, NameDiv, NavUl, NavLi } from "./header.style";
import { StyledLink } from "../../globalStyle";

import Resume from "../../assets/Resume_Maho_Morinaga.pdf";

const Header = () => (
  <HeaderContainer>
    <NameDiv>
      <h1>Maho Morinaga</h1>
    </NameDiv>
    <nav>
      <NavUl>
        <NavLi>
          <StyledLink href="#project">Projects</StyledLink>
        </NavLi>
        <NavLi>
          <StyledLink href="#about-me">About Me</StyledLink>
        </NavLi>
        <NavLi>
          <StyledLink href={Resume} target="_blank">
            Resume
          </StyledLink>
        </NavLi>
      </NavUl>
    </nav>
  </HeaderContainer>
);

export default Header;
