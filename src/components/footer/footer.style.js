import styled from "styled-components";
import { color } from "../../globalStyle";
import { device } from "../../assets/screenSize";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterContainer = styled.footer`
  background-color: #ff8b49;
  text-align: center;

  margin-top: 6rem;
  padding: 0.75rem 0;

  & > div:first-child {
    @media ${device.tablet} {
      margin-bottom: 0.75rem;
    }
  }
`;

export const StyledLink = styled.a`
  color: ${color.white};

  text-decoration: none;
`;

export const LinkIcon = styled(FontAwesomeIcon)`
  color: ${color.white};
`;
