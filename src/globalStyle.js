import styled, { createGlobalStyle } from "styled-components";

export const color = {
  orange: "#FF8B49",
  lightGreen: "#7CF3A0",
  mint: "#B4F8C8",
  yellow: "#F7CD34",
  darkPink: "#EC4E59",
  skyBlue: "#4ED7E9",
  navy: "#200D39",
  white: "#fff",
};

export const sansSerif = {
  import:
    "@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');",
  fontFamily: "font-family: 'Source Sans Pro', sans-serif;",
  // import:
  //   "@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');",
  // fontFamily: "font-family: 'Raleway', sans-serif;",
};

export const StyledLink = styled.a`
  color: ${color.white};
  text-decoration: none;
`;

// GlobalStyle
const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    scroll-behavior : smooth;
}
body {
font-family: 'Zilla Slab', serif;
}
`;

export default GlobalStyle;
