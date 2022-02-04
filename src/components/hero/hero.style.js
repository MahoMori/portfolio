import styled from "styled-components";
import { color } from "../../globalStyle";
import { device } from "../../assets/screenSize";

export const HeroSection = styled.section`
  background-color: ${color.orange};

  height: calc(100vh * 0.9);
  // height: 100vh;

  text-align: center;

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  background-color: skyblue;

  // max-width: 70vw;
  max-width: 90vw;

  display: flex;

  @media ${device.mobileS} {
    padding: 1rem 0;

    flex-wrap: wrap-reverse;
    justify-content: center;
  }

  @media ${device.tablet} {
    padding: 0;

    flex-wrap: nowrap;
    justify-content: left;

    align-items: center;
  }
`;

export const MyImg = styled.img`
  height: 30rem;
  width: auto;

  float: left;
`;

export const MyImgIcon = styled.img`
  height: 10rem;
  width: auto;

  // margin-top: 1rem;
`;

export const TextIconContainer = styled.div`
  background-color: pink;

  width: 100%;
  height: fit-content;

  & > div:nth-child(2) {
    // background-color: yellow;

    @media ${device.mobileS} {
      margin: 1rem 0;
    }

    @media ${device.laptop} {
      margin: 2.5rem 0 2.25rem;
    }
  }
`;

export const TextBlock = styled.div`
  font-size: ${(props) => props.fontSize};
  // font-size: 3.5rem;
`;

export const DecoratedSpan = styled.span`
  font-size: ${(props) => props.fontSize};
  font-size: 1.5em;

  text-shadow: 0.05em 0.05em ${color.white};
`;
