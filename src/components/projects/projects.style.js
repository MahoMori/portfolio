import styled from "styled-components";
import { color } from "../../globalStyle";

export const ProjectsContainer = styled.section`
  // text-align: center;
  padding: 2rem 4rem;
`;

export const TitleContainer = styled.div`
  width: 50%;

  text-align: center;

  margin: 0 auto;
  padding-bottom: 0.5rem;

  border-bottom: dashed ${color.orange} 0.22rem;
`;

export const TitleH2 = styled.h2`
  font-size: 2.25rem;
`;
