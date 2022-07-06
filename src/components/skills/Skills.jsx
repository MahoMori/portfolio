import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiMaterialui,
  SiStyledcomponents,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiGraphql,
  SiReact,
  SiRedux,
  SiMongodb,
  SiFirebase,
  SiMysql,
} from "react-icons/si";
import { FaSass, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import { GrCycle } from "react-icons/gr";

import { SkillsContainer, SkillsCard } from "./Skills.style";

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

      <SkillsContainer>
        <SkillsCard color={"orange"}>
          <div>
            <h3>Languages</h3>
          </div>

          <p>
            <SiHtml5 />
            HTML5
          </p>
          <p>
            <SiCss3 />
            CSS3
          </p>
          <p>
            <FaSass />
            Sass
          </p>
          <p>
            <SiJavascript />
            JavaScript
          </p>
          <p>
            <SiTypescript />
            TypeScript
          </p>
          <p>
            <SiGraphql />
            GraphQL
          </p>
        </SkillsCard>

        <SkillsCard color={"lightGreen"}>
          <div>
            <h3>Frameworks and Libraries</h3>
          </div>

          <p>
            <SiReact />
            React.js
          </p>

          <p>
            <SiRedux />
            Redux
          </p>

          <p>
            <SiMaterialui />
            Material UI
          </p>

          <p>
            <SiStyledcomponents />
            styled components
          </p>

          <p>
            <FaNodeJs />
            Node.js
          </p>
        </SkillsCard>

        <SkillsCard color={"darkPink"}>
          <div>
            <h3>Systems and Database</h3>
          </div>

          <p>
            <FaGithub />
            GitHub
          </p>

          <p>
            <SiMongodb />
            MongoDB
          </p>

          <p>
            <SiFirebase />
            Firebase
          </p>

          <p>
            <SiMysql />
            MySQL
          </p>
        </SkillsCard>

        <SkillsCard color={"skyBlue"}>
          <div>
            <h3>Other</h3>
          </div>

          <p>
            <GrCycle />
            Agile
          </p>

          <p>
            <FaFigma />
            Figma
          </p>

          <p>
            <SiAdobeillustrator />
            Adobe Illustrator
          </p>

          <p>
            <SiAdobephotoshop />
            Adobe Photoshop
          </p>
        </SkillsCard>
      </SkillsContainer>
    </SectionContainer>
  );
};

export default Skills;
