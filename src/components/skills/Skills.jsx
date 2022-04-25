import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiMaterialui,
  SiStyledcomponents,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";
import { FaSass, FaGithub, FaFigma } from "react-icons/fa";

import { SkillsDiv } from "./Skills.style";

import {
  SectionContainer,
  TitleContainer,
  TitleH2,
} from "../projects/projects.style";

const Skills = () => {
  return (
    <SectionContainer>
      <TitleContainer>
        <TitleH2>Skills</TitleH2>
      </TitleContainer>

      {/* skills */}
      <SkillsDiv kw="skills">
        <SiHtml5 title="HTML5" />
        <SiCss3 title="CSS3" />
        <FaSass title="Sass" />
        <SiJavascript title="JavaScript" />
        <SiTypescript title="TypeScript" />
        <SiMaterialui title="Material UI" />
        <SiStyledcomponents title="styled components" />
      </SkillsDiv>

      {/* other skills */}
      <SkillsDiv kw="other-skills">
        <FaGithub title="GitHub" />
        <FaFigma title="Figma" />
        <SiAdobeillustrator title="Adobe Illustrator" />
        <SiAdobephotoshop title="Adobe Photoshop" />
      </SkillsDiv>
    </SectionContainer>
  );
};

export default Skills;
