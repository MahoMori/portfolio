import React from "react";
import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard";

import { RowContainer, Row, Row1, Row2 } from "./projects.style";

const Projects = () => {
  return (
    <RowContainer>
      <Row1></Row1>
      <Row2></Row2>
      <Row gridArea="1" color="blue" className="row1"></Row>

      <div className="title-l"></div>
      <div className="title-m">Projects</div>
      <div className="title-r"></div>

      <div className="row-card1">
        <ProjectCard data={projectsData[0]} />
        {/* <ProjectCard data={projectsData[1]} /> */}
        {/* <ProjectCard data={projectsData[2]} /> */}
      </div>

      <div className="row-card2">
        {/* <ProjectCard data={projectsData[3]} />
        <ProjectCard data={projectsData[4]} />
        <ProjectCard data={projectsData[5]} /> */}
      </div>

      <div className="row3"></div>
    </RowContainer>
  );
};
export default Projects;
