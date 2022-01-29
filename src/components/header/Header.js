import { HeaderContainer, NameDiv, NavUl, NavLi } from "./header.style";

const Header = () => (
  <HeaderContainer>
    <NameDiv>
      <h1>Maho Morinaga</h1>
    </NameDiv>
    <nav>
      <NavUl>
        <NavLi>Projects</NavLi>
        <NavLi>About Me</NavLi>
        <NavLi>Resume</NavLi>
      </NavUl>
    </nav>
  </HeaderContainer>
);

export default Header;
