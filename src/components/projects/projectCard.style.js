import styled from "styled-components";
import { color } from "../../globalStyle";
import { device } from "../../assets/screenSize";

export const Card = styled.figure`
  height: auto;

  position: relative;

  box-shadow: 0.3rem 0.3rem 0.4rem 0.1rem rgba(137, 137, 137, 0.3);

  cursor: pointer;

  overflow: hidden;

  &:hover figcaption,
  &:active figcaption {
    bottom: 0;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const oneThreeColumns = (i) => {
  if (i % 2 === 0) {
    return `${color.skyBlue}`;
  } else {
    return `${color.lightGreen}`;
  }
};

let colorChange = [1, 2];
const twoColumns = (i) => {
  if (colorChange.includes(i)) {
    colorChange.push(i + 4);
    return `${color.lightGreen}`;
  } else {
    return `${color.skyBlue}`;
  }
};

export const CardImageCaption = styled.figcaption`
  width: 100%;
  height: 100%;

  position: absolute;
  bottom: -100%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.5s ease-out;

  @media ${device.mobileS} {
    background-color: ${(props) => oneThreeColumns(props.i)};
  }

  @media ${device.tablet} {
    background-color: ${(props) => twoColumns(props.i)};
  }

  @media ${device.desktop} {
    background-color: ${(props) => oneThreeColumns(props.i)};
  }
`;

export const CaptionP = styled.p`
  color: ${color.white};

  @media ${device.mobileS} {
    font-size: 2rem;
  }

  @media ${device.laptopL} {
    font-size: 3rem;
  }

  //   font-weight: bold;
`;
