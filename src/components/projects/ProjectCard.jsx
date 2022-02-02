import React, { useState } from "react";

import ProjectModal from "./ProjectModal";

import {
  Card,
  CardImage,
  CardImageCaption,
  CaptionP,
} from "./projectCard.style";

const ProjectCard = ({ data, i }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <Card onClick={handleModalOpen}>
        <CardImage src={data.image} alt="project" />
        <CardImageCaption i={i}>
          <CaptionP>{data.title}</CaptionP>
        </CardImageCaption>
      </Card>
      {isOpen && <ProjectModal data={data} handleModalOpen={handleModalOpen} />}
    </>
  );
};

export default ProjectCard;
