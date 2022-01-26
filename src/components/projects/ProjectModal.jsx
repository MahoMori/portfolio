import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectModal = ({ data, handleModalOpen }) => {
  const { title, image, language, pageLink, githubLink, description } = data;
  return (
    <>
      {/* <Modal> */}
      {/* <img src={image} alt="project" /> */}
      <h3>{title}</h3>
      <p>{language}</p>
      <div>
        <FontAwesomeIcon icon={faGlobe} />
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <p>{description}</p>
      {/* </Modal>; */}
    </>
  );
};

export default ProjectModal;
