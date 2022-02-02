import styled from "styled-components";
import { color } from "../../globalStyle";

export const SectionContainer = styled.section`
  padding: 4rem 4rem 0;
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

export const CardContainer = styled.div`
  margin: 2.5rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;
