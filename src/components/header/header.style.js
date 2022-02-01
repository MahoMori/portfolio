import styled from "styled-components";
import { color } from "../../globalStyle";

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
  font-size: 1.75rem;
  cursor: pointer;
`;

export const HeaderNav = styled.nav``;

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
