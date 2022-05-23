import { useMedia } from "use-media";

import IconSet from "../icon-set/IconSet";

import {
  HeroSection,
  Container,
  MyImg,
  MyImgIcon,
  TextIconContainer,
  NameTextBlock,
  NameDecoratedSpan,
  TextBlock,
  DecoratedSpan,
} from "./hero.style";

const Hero = () => {
  const isAboveTablet = useMedia({ minWidth: "768px" });

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
          <NameTextBlock>
            <p>
              Hello, I’m <NameDecoratedSpan>Maho</NameDecoratedSpan>.
            </p>
          </NameTextBlock>
          <TextBlock>
            <p>
              I’m a <DecoratedSpan>Full&nbsp;Stack </DecoratedSpan>Developer
            </p>
            <p>
              who is <DecoratedSpan>Technology Agnostic</DecoratedSpan>
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
