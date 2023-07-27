import styled from "styled-components";
// import { CssPropsType } from ../../utils/styled-prop-model;

export const Button = styled.button`
  outline: none;
  border: none;
  background: transparent;
`;

export const ColorMode = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  aspect-ratio: 1;
  margin-left: auto;
  margin-right: 2rem;
  padding: 0.4rem;
  border: 1px solid #171b20;
  border-radius: 4px;
  transition: all 300ms;
  cursor: pointer;

  &:hover {
    transform: rotate(10deg) scale(1.05);
  }
`;

export const Hamburger = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const StyledNav = styled.section`
  width: auto;
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
  background-color: hsl(0, 0, 98);
  padding-block: 2rem;
  padding-inline: clamp(2rem, 8vw, 20rem);
  /* 
  @media (min-width: 481px) {
  
  }
*/

  @media (min-width: 768px) {
    padding-block: 2.5rem;
    border-bottom: 1px solid #171b20;
  }
  /*
  @media (min-width: 1025px) {
   
  } */
`;

export const Line = styled.span`
  height: 2px;
  width: 4.5rem;
  background-color: #171b20;
  display: block;
`;

// export const `
