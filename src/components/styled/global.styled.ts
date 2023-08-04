import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* transition: all 300ms; */

}

html{
  font-size: 62.5%;
}

img{
  display: block;
  max-width: 100%;
}

body {
  font-family: 'Anton', sans-serif;
  font-size: 1.6rem;
  background-color: #FAF9F6;

  /* background-color: #171B20; */
// font-family: 'Poppins', sans-serif;
/* #171B20 */
}
`;

export default GlobalStyles;
