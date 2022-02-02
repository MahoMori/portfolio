import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  ModalOverlay,
  ModalCard,
  ModalContent,
  ModalImage,
  ModalTitle,
  ModalIconContainer,
  ModalStyledLink,
  Language,
  Description,
} from "./projectModal.style";

const ProjectModal = ({ data, handleModalOpen }) => {
  const { title, image, language, pageLink, githubLink, description } = data;
  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={handleModalOpen}></ModalOverlay>
      <ModalCard>
        <ModalContent>
          <ModalImage src={image} alt="project" />
          <ModalTitle>{title}</ModalTitle>
          <Language>{language}</Language>
          <ModalIconContainer>
            <ModalStyledLink href={pageLink}>
              <FontAwesomeIcon icon={faGlobe} />
            </ModalStyledLink>

            <ModalStyledLink href={githubLink}>
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
