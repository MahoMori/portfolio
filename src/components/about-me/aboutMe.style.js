import styled from "styled-components";
import { color, font } from "../../globalStyle";
import { device } from "../../assets/screenSize";

export const AboutMeText = styled.div`
  font-family: ${font.sourceSansPro};

  margin: 2.5rem auto;

  line-height: 1.6rem;

  & > p:nth-child(2) {
    margin: 1.5rem 0;
  }

  @media ${device.mobileS} {
    font-size: 1.25rem;
    width: 85vw;
  }

  @media ${device.tablet} {
    width: 65vw;
  }

  @media ${device.laptopL} {
    font-size: 1.75rem;
    line-height: 2.5rem;
  }
`;

export const Marker = styled.span`
  background: linear-gradient(transparent 60%, ${color.skyBlue} 60%);

  font-weight: bold;
`;
