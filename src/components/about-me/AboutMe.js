import { Marker, AboutMeText } from "./aboutMe.style";
import {
  SectionContainer,
  TitleContainer,
  TitleH2,
} from "../projects/projects.style";

const AboutMe = () => (
  <SectionContainer id="about-me">
    <TitleContainer>
      <TitleH2>About Me</TitleH2>
    </TitleContainer>

    <AboutMeText>
      <p>
        I started this tech path in 2021. It has been challenging, but each
        challenge has taught me the most important thing.
      </p>

      <p>
        <Marker>Coding is fun!</Marker> (Especially when I see a light after
        looking for a solution for bugs.)
      </p>

      <p>
        With the background as a Manual Editor, I pay excellent attention to
        details. I constantly keep trying to broaden what I can do, and most
        importantly, <Marker>love what I do!</Marker>
      </p>
    </AboutMeText>
  </SectionContainer>
);

export default AboutMe;
