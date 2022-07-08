import React, { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

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

  const isAboveLaptop = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <Card
        onClick={() => (isAboveLaptop ? handleModalOpen() : "")}
        ontouchstart=""
      >
        <CardImage src={data.image} alt="project" />
        <CardImageCaption
          i={i}
          onClick={() => (isAboveLaptop ? "" : handleModalOpen())}
        >
          <CaptionP>{data.title}</CaptionP>
        </CardImageCaption>
      </Card>
      {isOpen && <ProjectModal data={data} handleModalOpen={handleModalOpen} />}
    </>
  );
};

export default ProjectCard;
