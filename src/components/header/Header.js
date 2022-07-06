import React, { useState } from "react";

import Resume from "../../assets/Resume_Maho Morinaga.pdf";

import {
  HeaderContainer,
  NameDiv,
  HeaderNav,
  NavUl,
  NavLi,
  HamburgerContainer,
  HamburgerSpan,
} from "./header.style";
import { StyledLink } from "../../globalStyle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <HeaderContainer>
      <NameDiv>
        <h1>Maho Morinaga</h1>
      </NameDiv>

      <HeaderNav isOpen={isOpen}>
        <NavUl isOpen={isOpen}>
          <NavLi>
            <StyledLink href="#project">Projects</StyledLink>
          </NavLi>
          <NavLi>
            <StyledLink href="#contact">Contact</StyledLink>
          </NavLi>
          <NavLi>
            <StyledLink href={Resume} target="_blank">
              Resume
            </StyledLink>
          </NavLi>
        </NavUl>
      </HeaderNav>

      <HamburgerContainer onClick={handleMenuOpen}>
        <HamburgerSpan></HamburgerSpan>
      </HamburgerContainer>
    </HeaderContainer>
  );
};

export default Header;
