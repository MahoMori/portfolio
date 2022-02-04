import styled from "styled-components";
import { color } from "../../globalStyle";
import { device } from "../../assets/screenSize";

export const SectionContainer = styled.section`
  @media ${device.mobileS} {
    padding: 2rem 1rem 0;
  }

  @media ${device.laptop} {
    padding: 4rem 4rem 0;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;

  margin: 0 auto;
  padding-bottom: 0.5rem;

  border-bottom: dashed ${color.orange} 0.22rem;

  @media ${device.mobileS} {
    width: 70vw;
  }

  @media ${device.tablet} {
    width: 50vw;
  }

  @media ${device.desktop} {
    width: 40vw;
  }
`;

export const TitleH2 = styled.h2`
  @media ${device.mobileS} {
    font-size: 1.75rem;
  }

  @media ${device.laptop} {
    font-size: 2.25rem;
  }

  @media ${device.laptopL} {
    font-size: 3.25rem;
  }
`;

export const CardContainer = styled.div`
  margin: 2.5rem 0;

  display: grid;

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;
