import styled from "styled-components";
import { color } from "../../globalStyle";

export const HeroSection = styled.section`
  background-color: ${color.orange};

  height: calc(100vh * 0.8);

  text-align: center;

  display: flex;
  justify-content: center;
`;

export const MyImg = styled.img`
  height: 30rem;
  width: auto;

  float: left;
`;

export const Container = styled.div`
  // background-color: skyblue;

  height: 100%;
  min-width: 70vw;

  display: flex;
  align-items: center;
`;

export const TextIconContainer = styled.div`
  // background-color: pink;

  width: 100%;

  & > div:nth-child(2) {
    // background-color: yellow;
    margin: 2.5rem 0 2.25rem;
  }
`;

export const TextBlock = styled.div`
  font-size: ${(props) => props.fontSize};
  // font-size: 3.5rem;
`;

export const DecoratedSpan = styled.span`
  font-size: ${(props) => props.fontSize};
  // font-size: 1.5em;

  text-shadow: 0.05em 0.05em ${color.white};
`;
