import styled from "styled-components";

export const MainContainer = styled.main`
  // background-color: pink;

  position: relative;
`;

export const LineContainer = styled.div`
  width: 100%;

  //   position: absolute;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1000px;

  & > div:nth-child(1) {
    border-right: dashed orange 0.25rem;
  }

  & > div:nth-child(3) {
    border-left: dashed orange 0.25rem;
  }
`;
