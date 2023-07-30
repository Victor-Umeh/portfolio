import styled from "styled-components";
// import { CssPropsType } from ../../utils/styled-prop-model;

interface Props {
  theme: {};
}

export const Button = styled.button`
  outline: 0px;
  border: 0px;
  background: transparent;
`;

export const StyledBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  aspect-ratio: 1;
  margin-left: auto;
  margin-right: 2rem;
  padding: 0.4rem;
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 4px;
  transition: all 300ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    border-radius: 50%;
  }
`;

export const Hamburger = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`;

export const StyledNav = styled.nav<Props>`
  width: auto;
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
  background-color: ${({ theme }) => theme.body};
  padding-block: 2rem;
  padding-inline: clamp(2rem, 8vw, 20rem);
  z-index: 999;

  /* 
  @media (min-width: 481px) {
  
  }
*/

  @media (min-width: 768px) {
    padding-block: 2.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.accent};
  }
  /*
  @media (min-width: 1025px) {
   
  } */
`;

export const Line = styled.span<Props>`
  height: 2px;
  width: 4.5rem;
  background-color: ${({ theme }) => theme.accent};
  display: block;
`;

export const List = styled.ul<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6vw;
  padding-top: 15rem;
  background-color: ${({ theme }) => theme.accent};
  width: 100%;
  height: 100vh;
  position: absolute;
  display: none;
  inset: 0;

  /* 
  @media (min-width: 481px) {
  
  }
*/

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: clamp(3rem, 8vw, 12rem);
  }
  /*
  @media (min-width: 1025px) {
   
  } */
`;

export const Link = styled.li<Props>`
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  list-style: none;
  color: ${({ theme }) => theme.body};
  transition: all 300ms;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    font-size: 3.5rem;
  }
`;

export const Main = styled.main<Props>`
  width: 100%;
  background-color: ${({ theme }) => theme.body};

  @media (min-width: 481px) {
  }
  @media (min-width: 768px) {
    display: flex;
  }
  /*
@media (min-width: 1025px) {
 
} */
`;

export const StyledCta = styled(Button)`
  padding: 1rem 2rem;
`;
