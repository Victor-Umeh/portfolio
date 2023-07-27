import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, ul{
  paddin: 0;
  margin: 0;
}

html{
  font-size: 62.5%;
  box-sizing: border-box;
}

img{
  display: block;
  max-width: 100%;
}

body {
  font-family: 'Anton', sans-serif;
  font-size: 1.6rem;
  background-color: #FAF9F6;
// font-family: 'Poppins', sans-serif;
}
`;

export default GlobalStyles;
