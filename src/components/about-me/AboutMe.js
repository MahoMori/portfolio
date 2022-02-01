import { TitleContainer } from "../projects/projects.style";
import { Marker } from "./aboutMe.style";

const AboutMe = () => (
  <div className="row-container">
    <TitleContainer>
      <h2>About Me</h2>
      <hr />
    </TitleContainer>

    <div className="row-section1">
      <p>
        I started this tech path in 2021. It has been challenging, but each
        challenges taught me the most important thing.
        <Marker>Coding is fun!</Marker> (Especially when I see a light after
        looking for a solution for bugs.)
      </p>

      <p>
        With the background as a Manual Editor, I pay excellent attention to
        details. I constantly keep trying to broaden what I can do, and most
        importantly, <Marker>love what I do!</Marker>
      </p>
    </div>

    <div className="row1"></div>
  </div>
);

export default AboutMe;
