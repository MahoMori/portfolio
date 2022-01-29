import styled from "styled-components";

export const RowContainer = styled.div`
  width: 100%;

  position: absolute;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 2fr 2fr 2fr 8fr 8fr 2fr;
  grid-template-areas:
    "row1 row1 row1 row1"
    "row2 row2 row2 row2"
    "title-l title-m title-m title-r"
    "row-card1 row-card1 row-card1 row-card1"
    "row-card2 row-card2 row-card2 row-card2"
    "row3 row3 row3 row3";

  & > * {
    border-bottom: dashed orange 0.25rem;
  }
`;

// prettier-ignore
export const Row = styled.div`
  grid-area: ${props => props.gridArea};
  background-color: ${props => props.color};
`;

export const Row1 = styled.div`
  grid-area: row-card1;
  background-color: ${(props) => props.color};
`;

export const Row2 = styled.div`
  grid-area: row-card2;
  background-color: ${(props) => props.color};
`;

// .row-card1 { grid-area: row-card1; }
// .row-card2 { grid-area: row-card2; }
// .row1 { grid-area: row1; }
// .title-l { grid-area: title-l; }
// .title-m { grid-area: title-m; text-align: center;}
// .title-r { grid-area: title-r; }
// .row3 { grid-area: row3; }
