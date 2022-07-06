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
  margin: 0;
  border-bottom: dashed ${color.skyBlue} 0.22rem;

  @media ${device.mobileS} {
    padding-left: 0;
    padding-right: 0;
  }

  /* @media ${device.tablet} {
    width: 50vw;
  } */

  @media ${device.laptop} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

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
  padding: 2rem 0;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LeftPanel = styled.div`
  ${sansSerif.import}
  ${sansSerif.fontFamily}

  & p {
    font-size: 1.5rem;
    line-height: 2rem;

    @media ${device.laptop} {
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

export const RightPanel = styled.div`
  text-align: center;

  & input,
  & textarea {
    ${sansSerif.import}
    ${sansSerif.fontFamily}
    border: solid ${color.skyBlue} 3px;
    font-size: 1.2rem;
    width: 90%;

    @media ${device.tablet} {
      width: 85%;
      font-size: 1.5rem;
    }
  }

  & input {
    height: 2.5rem;
    padding: 0 0.25rem;
  }

  & input:last-of-type {
    margin: 0.5rem 0;
  }

  & textarea {
    padding: 0.25rem;
    resize: vertical;
  }
`;

export const FormButton = styled.button`
  text-transform: uppercase;
  margin: 1rem 0;
  background-color: ${color.skyBlue}99;
  color: ${color.white};
  border: none;
  transition: background-color 0.3s;
  cursor: pointer;
  box-shadow: 5px 5px 15px -5px #c2c2c2;
  font-size: 1.25rem;
  width: 80%;
  height: 3rem;

  @media ${device.tablet} {
    width: 35%;
  }

  @media ${device.laptop} {
    width: 50%;
  }

  @media ${device.laptopL} {
    width: 35%;
  }

  &:hover {
    background-color: ${color.skyBlue};
  }
`;
