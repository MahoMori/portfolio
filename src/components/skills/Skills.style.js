import styled from "styled-components";

import { color } from "../../globalStyle";
import { device } from "../../assets/screenSize";

export const SkillsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem auto;

  @media ${device.mobileS} {
    flex-wrap: wrap;
    justify-content: space-around;
    border-bottom: solid 3px
      ${(props) => (props.kw === "skills" ? color.skyBlue : color.lightGreen)};
    padding-bottom: 0.5rem;
  }

  @media ${device.tablet} {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media ${device.laptop} {
    width: 70%;
  }

  & * {
    @media ${device.mobileS} {
      font-size: 2rem;
    }

    @media ${device.tablet} {
      font-size: 2.5rem;
      box-shadow: 3px 3px 0
          ${(props) =>
            props.kw === "skills" ? color.skyBlue : color.lightGreen},
        -3px -3px 0
          ${(props) =>
            props.kw === "skills" ? color.skyBlue : color.lightGreen};
      padding: 0.3rem;
    }

    @media ${device.desktop} {
      font-size: 3rem;
      padding: 0.5rem;
    }
  }
`;
