import styled from "styled-components";
import { device } from "../../assets/screenSize";

export const IconContainer = styled.div`
  @media ${device.mobileS} {
    font-size: 2rem;

    & > * {
      margin: 0 1.5rem;
    }
  }

  @media ${device.laptop} {
    font-size: 2.25rem;

    & > * {
      margin: 0 3rem;
    }
  }
`;
