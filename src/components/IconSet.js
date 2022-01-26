import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const IconSet = () => (
  <>
    <FontAwesomeIcon icon={faEnvelope} />
    <FontAwesomeIcon icon={faLinkedin} />
    <FontAwesomeIcon icon={faGithub} />
  </>
);

export default IconSet;
