import styled from "styled-components";

export const HeaderContainer = styled.header`
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
  color: #5c5c5c;

  list-style: none;
  float: left;

  cursor: pointer;
`;
