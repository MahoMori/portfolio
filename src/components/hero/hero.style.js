import styled from "styled-components";

export const HeroSection = styled.section`
  background-color: #ff8b49;
  height: calc(100vh * 0.8);
  position: relative;
`;

export const ImgContainer = styled.figure`
  //   background-color: pink;

  height: 100%;
  width: 30%;

  text-align: center;

  position: absolute;
  left: 0;
  top: 15%;
`;

export const MyImg = styled.img`
  height: 30rem;
  width: auto;
`;

export const TextBackground = styled.div`
  //   background-color: skyblue;

  height: 100%;
  width: 70%;

  position: absolute;
  right: 0;
`;

export const TextIconContainer = styled.div`
  //   background-color: pink;

  width: 90%;

  text-align: center;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const TextBlock = styled.div`
  font-size: 3rem;
  margin-bottom: 1.25rem;
`;

export const DecoratedSpan = styled.span`
  font-size: 1.5em;

  text-shadow: 0.25rem 0.25rem #fff;
`;
