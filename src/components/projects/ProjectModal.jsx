import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
  const {
    title,
    modalImage,
    modalVideoMp4,
    modalVideoOgg,
    language,
    pageLink,
    githubLink,
    description,
  } = data;
  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={handleModalOpen}></ModalOverlay>
      <ModalCard>
        <ModalContent>
          {modalImage === "none" ? (
            <ModalVideo autoPlay loop muted>
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
              <FontAwesomeIcon icon={faGlobe} />
            </ModalStyledLink>

            <ModalStyledLink href={githubLink} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </ModalStyledLink>
          </ModalIconContainer>
          <Description>{description}</Description>
        </ModalContent>
      </ModalCard>
    </>,
    document.body
  );
};

export default ProjectModal;
