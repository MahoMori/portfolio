import React from "react";
import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard";

import {
  ProjectsContainer,
  TitleContainer,
  TitleH2,
  CardContainer,
} from "./projects.style";

const Projects = () => {
  return (
    <ProjectsContainer>
      <TitleContainer>
        <TitleH2>Projects</TitleH2>
      </TitleContainer>
      <CardContainer>
        {projectsData.length > 0 &&
          projectsData.map((project, i) => (
            <ProjectCard key={i} data={project} i={i} />
          ))}
      </CardContainer>
    </ProjectsContainer>
  );
};
export default Projects;
