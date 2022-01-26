import React from "react";
import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="row-container">
      <div className="row1"></div>

      <div className="row2"></div>

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
    </div>
  );
};
export default Projects;
