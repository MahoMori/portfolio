import IconSet from "../icon-set/IconSet";

import {
  HeroSection,
  Container,
  MyImg,
  TextIconContainer,
  TextBlock,
  DecoratedSpan,
} from "./hero.style";

const Hero = () => (
  <HeroSection>
    <Container>
      <MyImg src={require("../../assets/my-img.png")} alt="my-img" />

      <TextIconContainer>
        <TextBlock fontSize="3.5rem">
          <p>
            Hello, I’m <DecoratedSpan fontSize="1.75em">Maho</DecoratedSpan>.
          </p>
        </TextBlock>
        <TextBlock fontSize="2rem">
          <p>
            I’m a{" "}
            <DecoratedSpan fontSize="1.5em">Frontend Developer</DecoratedSpan>
          </p>
          <p>
            focusing on <DecoratedSpan fontSize="1.5em">React</DecoratedSpan>
          </p>
          <p>and passionate about learning new skills!</p>
        </TextBlock>
        <IconSet />
      </TextIconContainer>
    </Container>
  </HeroSection>
);

export default Hero;
