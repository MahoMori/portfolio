import ReactDOM from "react-dom";
import { useMediaQuery } from "usehooks-ts";

import { FaGlobe, FaGithub, FaFigma } from "react-icons/fa";

import {
  ModalOverlay,
  ModalCard,
  ModalContent,
  ModalImage,
  ModalVideo,
  ModalTitle,
  ModalIconContainer,
  ModalStyledLink,
  Language,
  Description,
} from "./projectModal.style";

const ProjectModal = ({ data, handleModalOpen }) => {
  const isAboveLaptop = useMediaQuery("(min-width: 1024px)");

  const {
    title,
    modalImage,
    modalVideoMp4,
    modalVideoOgg,
    language,
    pageLink,
    githubLink,
    figmaLink,
    description,
  } = data;

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={handleModalOpen}></ModalOverlay>
      <ModalCard>
        <ModalContent>
          {modalImage === "none" ? (
            <ModalVideo autoPlay={isAboveLaptop ? "autoPlay" : ""} loop>
              <source src={modalVideoMp4} type="video/mp4" />
              <source src={modalVideoOgg} type="video/ogg" />
              Your browser does not support the video tag.
            </ModalVideo>
          ) : (
            <ModalImage src={modalImage} alt="project" />
          )}
          <ModalTitle>{title}</ModalTitle>
          <Language>{language}</Language>
          <ModalIconContainer>
            <ModalStyledLink href={pageLink} target="_blank">
              <FaGlobe />
            </ModalStyledLink>

            <ModalStyledLink href={githubLink} target="_blank">
              <FaGithub />
            </ModalStyledLink>

            {figmaLink && (
              <ModalStyledLink href={figmaLink} target="_blank">
                <FaFigma />
              </ModalStyledLink>
            )}
          </ModalIconContainer>
          <Description>{description}</Description>
        </ModalContent>
      </ModalCard>
    </>,
    document.body
  );
};

export default ProjectModal;
