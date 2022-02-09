import React, { useState } from "react";
import { useMedia } from "use-media";
import "./safari.css";

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

  const isAboveLaptop = useMedia({ minWidth: "1024px" });

  return (
    <>
      <Card
        onClick={() => (isAboveLaptop ? handleModalOpen() : "")}
        ontouchstart=""
      >
        <CardImage src={data.image} alt="project" className="safari" />
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
