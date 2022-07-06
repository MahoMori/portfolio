import styled from "styled-components";
import { color, sansSerif } from "../../globalStyle";
import { device } from "../../assets/screenSize";
import {
  SectionContainer,
  TitleContainer,
  TitleH2,
} from "../projects/projects.style";

export const ContactSectionContainer = styled(SectionContainer)`
  background-color: ${color.orange}40;
`;

export const ContactTitleContainer = styled(TitleContainer)`
  text-align: left;
  width: fit-content;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin: 0;
  border-bottom: dashed ${color.skyBlue} 0.22rem;

  /* @media ${device.mobileS} {
    width: 100%;
  } */

  /* @media ${device.tablet} {
    width: 50vw;
  } */

  /* @media ${device.desktop} {
    width: 40vw;
  } */
`;

export const ContactTitleH2 = styled(TitleH2)`
  /* @media ${device.mobileS} {
    font-size: 1.75rem;
  }

  @media ${device.laptop} {
    font-size: 2.25rem;
  } */

  @media ${device.laptopL} {
    /* font-size: 3.25rem; */
    font-size: 3rem;
  }
`;

export const PanelParentDiv = styled.div`
  @media ${device.laptopL} {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LeftPanel = styled.div`
  ${sansSerif.import}
  ${sansSerif.fontFamily}

  & p {
    /* font-size: 1.5rem;
    line-height: 2rem; */

    font-size: 1.5rem;
    line-height: 2rem;

    @media ${device.laptopL} {
      font-size: 1.75rem;
      line-height: 2.5rem;
    }
  }

  & div {
    display: flex;
    justify-content: center;
    margin: 1.25rem 0;
  }
`;

export const FormButton = styled.button`
  text-transform: uppercase;
`;
