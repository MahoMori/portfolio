import styled from "styled-components";
import { color } from "../../globalStyle";
import { device } from "../../assets/screenSize";

export const HeroSection = styled.section`
  background-color: ${color.orange};

  // height: calc(100vh * 0.9);
  // height: 100vh;
  height: contain;

  text-align: center;

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  // background-color: skyblue;

  // max-width: 70vw;
  max-width: 90vw;

  display: flex;

  @media ${device.mobileS} {
    padding: 1rem 0;

    // flex-wrap: wrap-reverse;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
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

  @media ${device.laptopL} {
    height: 45rem;
  }
`;

export const MyImgIcon = styled.img`
  height: 13rem;
  width: auto;
`;

export const TextIconContainer = styled.div`
  // background-color: pink;

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

export const NameTextBlock = styled.div`
  @media ${device.mobileS} {
    font-size: 2.25rem;
  }

  @media ${device.tablet} {
    font-size: 2.5rem;
  }

  @media ${device.laptop} {
    font-size: 3.5rem;
  }

  @media ${device.laptopL} {
    font-size: 4.5rem;
  }
`;

export const NameDecoratedSpan = styled.span`
  font-size: 1.35em;
  // @media ${device.mobileS} {
  //   font-size: 1.25em;
  // }

  // @media ${device.tablet} {
  //   font-size: 1.4em;
  // }

  // @media ${device.laptop} {
  //   font-size: 1.65em;
  // }

  // @media ${device.laptop} {
  //   font-size: 1.65em;
  // }

  text-shadow: 0.05em 0.05em ${color.white};
`;

export const TextBlock = styled.div`
  @media ${device.mobileS} {
    font-size: 1.75rem;
  }

  @media ${device.tablet} {
    font-size: 1.75rem;
  }

  @media ${device.laptop} {
    font-size: 2.25rem;
  }

  @media ${device.laptopL} {
    font-size: 3.25rem;
  }
`;

export const DecoratedSpan = styled.span`
  font-size: 1.25em;
  // @media ${device.mobileS} {
  //   font-size: 1em;
  // }

  // @media ${device.tablet} {
  //   font-size: 1.25em;
  // }

  // @media ${device.laptop} {
  //   font-size: 1.5em;
  // }

  text-shadow: 0.05em 0.05em ${color.white};
`;
