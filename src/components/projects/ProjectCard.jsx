import React, { useState } from "react";

import ProjectModal from "./ProjectModal";

const ProjectCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <figure className="card" onClick={handleModalOpen}>
        {/* <img src={data.image} alt="project" /> */}
        <figcaption>{data.title}</figcaption>
      </figure>
      <ProjectModal data={data} handleModalOpen={handleModalOpen} />
    </>
  );
};

export default ProjectCard;
