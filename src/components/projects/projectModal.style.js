import styled from "styled-components";
import { color, font, StyledLink } from "../../globalStyle";
import { device } from "../../assets/screenSize";

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);

  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalCard = styled.div`
  background-color: ${color.white};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow-y: auto;

  border-radius: 0.5rem;

  @media ${device.mobileS} {
    height: 80vh;
    width: 85vw;
  }

  @media ${device.laptop} {
    height: 90vh;
    width: 50vw;
  }

  @media ${device.laptopL} {
    height: 75vh;
    width: 50vw;
  }
`;

export const ModalContent = styled.div`
  text-align: center;

  @media ${device.mobileS} {
    margin: 0.75rem;
  }

  @media ${device.tablet} {
    margin: 1.5rem;
  }
`;

export const ModalImage = styled.img`
  width: 100%;

  margin-bottom: 0.5rem;
`;

export const ModalVideo = styled.video`
  width: 100%;

  margin-bottom: 0.5rem;
`;

export const ModalTitle = styled.h3`
  margin-bottom: 0.25rem;

  @media ${device.mobileS} {
    font-size: 1.5rem;
  }

  @media ${device.tablet} {
    font-size: 2rem;
  }

  @media ${device.desktop} {
    font-size: 3rem;
  }
`;

export const Language = styled.p`
  color: ${color.orange};

  font-family: ${font.sourceSansPro};

  font-style: italic;

  @media ${device.mobileS} {
    font-size: 1rem;
  }

  @media ${device.tablet} {
    font-size: 1.15rem;
  }

  @media ${device.desktop} {
    font-size: 2.15rem;
  }
`;

export const ModalIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobileS} {
    font-size: 1.6rem;
    margin: 0.7rem auto;

    width: 60%;
  }

  @media ${device.tablet} {
    font-size: 1.75rem;
    margin: 1rem auto;
    width: 50%;
  }

  @media ${device.desktop} {
    font-size: 2.75rem;
    margin: 1.25rem auto;
    width: 40%;
  }
`;

export const ModalStyledLink = styled(StyledLink)`
  display: flex;
  align-items: center;

  color: #000;
  /* margin: 0 1.5rem; */
`;

export const Description = styled.p`
  font-family: ${font.sourceSansPro};

  text-align: left;
  line-height: 1.6rem;

  @media ${device.desktop} {
    font-size: 1.75rem;
    line-height: 2.4rem;
  }
`;
