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
  @media ${device.mobileS} and (max-width: 767px) {
    background-color: ${color.lightGreen};

    width: 100%;
    height: ${(props) => (props.isOpen ? "15rem" : "0")};

    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    left: 0;
    top: 3.074rem;
    position: absolute;

    transition: height 0.3s linear;
  }

  @media ${device.tablet} {
    display: block;
  }
`;

export const NavUl = styled.ul`
  @media ${device.mobileS} and (max-width: 767px) {
    // background-color: skyblue;

    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-content: space-around;
    flex-wrap: wrap;
  }

  @media ${device.tablet} {
    & > li:nth-child(2) {
      margin: 0 1.25rem;
    }
  }
`;

export const NavLi = styled.li`
  @media ${device.mobileS} and (max-width: 767px) {
    font-size: 1.75rem;

    list-style: none;

    cursor: pointer;
  }

  @media ${device.tablet} {
    font-size: 1.75rem;

    list-style: none;
    float: left;

    cursor: pointer;
  }
`;

export const HamburgerContainer = styled.div`
  margin-right: 2rem;

  @media ${device.mobileS} {
    display: block;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const HamburgerSpan = styled.span`
  display: block;
  height: 0.2rem;
  width: 1.25rem;
  background-color: ${color.white};
  position: absolute;

  &::before {
    content: "";
    height: 0.2rem;
    width: 0.75rem;
    bottom: 0.5rem;
    background-color: ${color.white};
    position: absolute;
  }

  &::after {
    content: "";
    height: 0.2rem;
    width: 1.75rem;
    top: 0.5rem;
    background-color: ${color.white};
    position: absolute;
  }
`;
