import IconSet from "../icon-set/IconSet";

import {
  HeroSection,
  ImgContainer,
  MyImg,
  TextBackground,
  TextIconContainer,
  TextBlock,
  DecoratedSpan,
} from "./hero.style";

const Hero = () => (
  <HeroSection>
    <ImgContainer>
      <MyImg src={require("../../assets/my-img.png")} alt="my-img" />
    </ImgContainer>
    <TextBackground>
      <TextIconContainer>
        <TextBlock>
          <p>
            Hello, I’m <DecoratedSpan>Maho</DecoratedSpan>.
          </p>
          {/* </TextBlock>
      <TextBlock> */}
          <p>
            I’m a <DecoratedSpan>Frontend Developer</DecoratedSpan>
          </p>
          <p>
            focusing on <DecoratedSpan>React</DecoratedSpan>
          </p>
          <p>and passionate about learning new skills!</p>
        </TextBlock>
        <IconSet />
      </TextIconContainer>
    </TextBackground>
  </HeroSection>
);

export default Hero;
