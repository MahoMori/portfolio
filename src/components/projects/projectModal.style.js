import styled from "styled-components";
import { color, sansSerif, StyledLink } from "../../globalStyle";

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

  width: 50%;
  height: 90vh;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 0.5rem;
`;

export const ModalContent = styled.div`
  text-align: center;

  height: 100%;

  margin: 1.5rem;

  overflow-y: auto;
`;

export const ModalImage = styled.img`
  height: 50%;
  margin-bottom: 0.5rem;
`;

export const ModalTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.25rem;
`;

export const Language = styled.p`
  color: ${color.orange};

  ${sansSerif.import}
  ${sansSerif.fontFamily}

  font-size: 1.15rem;

  font-style: italic;
`;

export const ModalIconContainer = styled.div`
  font-size: 1.75rem;

  margin: 0.5rem 0;
`;

export const ModalStyledLink = styled(StyledLink)`
  color: #000;
  margin: 0 1.5rem;
`;

export const Description = styled.p`
  ${sansSerif.import}
  ${sansSerif.fontFamily}

  text-align: left;
  line-height: 1.6rem;
`;
