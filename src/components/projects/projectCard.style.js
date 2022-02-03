import styled from "styled-components";
import { color } from "../../globalStyle";

export const Card = styled.figure`
  position: relative;

  box-shadow: 0.3rem 0.3rem 0.4rem 0.1rem rgba(137, 137, 137, 0.3);

  cursor: pointer;

  overflow: hidden;
  height: 100%;

  &:hover figcaption {
    bottom: 0;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

let colorChange = [1, 2];
const check = (i) => {
  if (colorChange.includes(i)) {
    colorChange.push(i + 4);
    return `${color.lightGreen}`;
  } else {
    return `${color.skyBlue}`;
  }
};

export const CardImageCaption = styled.figcaption`
  background-color: ${(props) => check(props.i)};

  width: 100%;
  height: 100%;

  position: absolute;
  bottom: -100%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.5s ease-in-out;
`;

export const CaptionP = styled.p`
  color: ${color.white};

  font-size: 2rem;

  //   font-weight: bold;
`;
