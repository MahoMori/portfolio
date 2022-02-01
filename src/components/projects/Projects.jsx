import React from "react";
import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard";

import { ProjectsContainer, TitleContainer, TitleH2 } from "./projects.style";

const Projects = () => {
  return (
    <ProjectsContainer>
      <TitleContainer>
        <TitleH2>Projects</TitleH2>
      </TitleContainer>
      <div className="row-card1">
        {projectsData.length > 0 &&
          projectsData.map((project, i) => (
            <ProjectCard key={i} data={project} />
          ))}
      </div>
    </ProjectsContainer>
  );
};
export default Projects;
