import myImg from "../../assets/my-img.png";
import IconSet from "../IconSet";

const Hero = () => (
  <section>
    <div>
      Hello, I’m <span>Maho</span>.
    </div>
    <div>
      I’m a <span>Frontend Developer</span>
      focusing on <span>React</span>
      and passionate about learning new skills!
    </div>
    <div>
      <IconSet />
    </div>
    <img src={require("../../assets/my-img.png")} alt="my-img" />
  </section>
);

export default Hero;
