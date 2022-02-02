import styled from "styled-components";
import { color } from "../../globalStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterContainer = styled.footer`
  background-color: #ff8b49;
  text-align: center;

  margin-top: 6rem;
  padding: 0.75rem 0;
`;

export const StyledLink = styled.a`
  color: ${color.white};

  text-decoration: none;
`;

export const LinkIcon = styled(FontAwesomeIcon)`
  color: ${color.white};
`;
