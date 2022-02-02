import styled from "styled-components";
import { color, sansSerif } from "../../globalStyle";

export const AboutMeText = styled.div`
  ${sansSerif.import}
  ${sansSerif.fontFamily}

  font-size: 1.25rem;

  width: 65vw;

  margin: 2.5rem auto;

  line-height: 1.75rem;

  & > p:nth-child(2) {
    margin: 1.5rem 0;
  }
`;

export const Marker = styled.span`
  background: linear-gradient(transparent 60%, ${color.skyBlue} 60%);

  font-weight: bold;
`;
