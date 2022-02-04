import useMedia from "use-media";

import IconSet from "../icon-set/IconSet";

import {
  HeroSection,
  Container,
  MyImg,
  MyImgIcon,
  TextIconContainer,
  TextBlock,
  DecoratedSpan,
} from "./hero.style";

const Hero = () => {
  const isAboveTablet = useMedia({ minWidth: "768px" });
  const isAboveLaptop = useMedia({ minWidth: "1024px" });
  const isTablet = useMedia({ minWidth: "768px", maxWidth: "1023px" });

  return (
    <HeroSection>
      <Container>
        {isAboveTablet ? (
          <MyImg src={require("../../assets/my-img.png")} alt="my-img" />
        ) : (
          <MyImgIcon
            src={require("../../assets/my-img-icon.png")}
            alt="my-img-icon"
          ></MyImgIcon>
        )}

        <TextIconContainer>
          <TextBlock
            fontSize={
              isTablet ? "2.5rem" : isAboveLaptop ? "3.5rem" : "1.75rem"
            }
          >
            {/* <TextBlock> */}
            <p>
              Hello, I’m{" "}
              <DecoratedSpan
                fontSize={
                  isTablet ? "0.75em" : isAboveLaptop ? "1.75em" : "1.25em"
                }
              >
                Maho
              </DecoratedSpan>
              .
            </p>
          </TextBlock>
          <TextBlock
            fontSize={isTablet ? "1.5rem" : isAboveLaptop ? "2rem" : "1.25rem"}
          >
            <p>
              I’m a{" "}
              <DecoratedSpan
                fontSize={isTablet ? "1.25em" : isAboveLaptop ? "1.5em" : "1em"}
              >
                Frontend Developer
              </DecoratedSpan>
            </p>
            <p>
              focusing on{" "}
              <DecoratedSpan
                fontSize={isTablet ? "1.25em" : isAboveLaptop ? "1.5em" : "1em"}
              >
                React
              </DecoratedSpan>
            </p>
            <p>and passionate about learning new&nbsp;skills!</p>
          </TextBlock>
          <IconSet />
        </TextIconContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;
