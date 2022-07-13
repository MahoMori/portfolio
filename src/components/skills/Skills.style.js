import styled from "styled-components";

import { color, font } from "../../globalStyle";
import { device } from "../../assets/screenSize";

export const SkillsContainer = styled.div`
  font-family: ${font.sourceSansPro};
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 2.5rem auto;
  font-size: 1.5rem;
  line-height: 2rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(4, 1fr);
    font-size: 1.75rem;
    line-height: 2.5rem;
  }
`;

export const SkillsCard = styled.div`
  height: auto;
  padding: 0 1rem 1rem;
  box-shadow: 0.3rem 0.3rem 0.4rem 0.1rem rgba(137, 137, 137, 0.3);

  background: ${(props) => color[props.color]};

  @media ${device.tablet} {
    padding: 0 1.5rem 1.5rem;
  }

  & div {
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & h3 {
    padding: 0 1.5rem;
    text-align: center;
  }

  & p {
    display: flex;
    align-items: center;
  }

  & svg {
    margin-right: 1rem;
  }
`;
