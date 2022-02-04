import styled from "styled-components";
import { color } from "../../globalStyle";
import { device } from "../../assets/screenSize";

export const HeaderContainer = styled.header`
  background-color: ${color.orange};
  color: ${color.white};

  border-bottom: solid 0.2rem ${color.white};

  padding: 0.25rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameDiv = styled.div`
  // cursor: pointer;

  @media ${device.mobileS} {
    font-size: 1rem;
  }

  @media ${device.laptop} {
    font-size: 1.75rem;
  }
`;

export const HeaderNav = styled.nav`
  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.tablet} {
    display: block;
  }
`;

export const NavUl = styled.ul`
  & > li:nth-child(2) {
    margin: 0 1.25rem;
  }
`;

export const NavLi = styled.li`
  font-size: 1.75rem;

  list-style: none;
  float: left;

  cursor: pointer;
`;
