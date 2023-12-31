import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after, 
input,
Textarea {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
}

::-webkit-scrollbar {
  width: 7px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb{
  background-color: grey;
  border-radius: 5px;
}

img{
  display: block;
  max-width: 100%;
}

body {
  font-family: 'Anton', sans-serif;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.body};

  /* background-color: #171B20; */
// font-family: 'Poppins', sans-serif;
/* #171B20 */
}

.nav__preview-image{
  display: none;

  @media(min-width: 768px){
    display: block;
  }
}
`;

export default GlobalStyles;
