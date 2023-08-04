import styled from "styled-components";
import { Button } from "./Button.styled";
import { ToolsWrapper } from "./Tools.styled";

interface Props {
  theme: {};
  pos?: boolean;
  auto?: boolean;
  top?: string;
  pad?: string;
  border?: string;
}
export const StyledWrapper = styled(ToolsWrapper)<Props>`
  max-width: 500px;
  margin-block: 3rem;
  padding: ${({ pad }) => pad};
  height: auto;
  overflow-y: auto;
  /* border: ${({ border }) => border}; */
`;
export const ProjectCard = styled.div`
  min-height: 18rem;
  margin-bottom: 2rem;
  border: 1px solid grey;
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);

  & a:hover {
    cursor: pointer;
    color: indianred;
  }
  &:hover {
    opacity: 0.5;
  }
`;

export const Main = styled.main<Props>`
  background-color: ${({ theme }) => theme.body};
  position: relative;
  /* border: 1px solid red; */
  height: 90vh;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const StyledBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  aspect-ratio: 1;
  margin-left: ${({ auto }) => auto && "auto"};
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

export const Menu = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
  background-color: ${({ theme }) => theme.body};
  height: 100vh;
  position: fixed;
  top: 6.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  /* display: none; */
  visibility: hidden;
`;

export const StyledList = styled.ul<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: min(3vw, 4rem);
  background-color: ${({ theme }) => theme.body};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledLink = styled.li<Props>`
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  padding: 0.5rem;
  list-style: none;
  transform-origin: center;
  transition: all 600ms;
  cursor: pointer;

  &:hover {
    font-weight: 600;
    transform: scale(1.2);
  }

  & a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
  }
`;

export const SocialBlock = styled(StyledList)`
  position: relative;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  flex-direction: row;
  width: 34vw;
  min-width: max-content;
  margin-top: 1rem;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 5rem;
    opacity: 0.1;
    width: 100%;
    height: 5rem;
    opacity: 0.1;
    background-color: ${({ theme }) => theme.text};
  }

  @media (min-width: 768px) {
  }
`;

export const SocialLink = styled.a`
  font-size: 2.6rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 10;

  &:hover {
    opacity: 0.5;
  }
`;

export const NameTag = styled.span`
  position: absolute;
  top: 0.5rem;
  font-size: 1.1rem;
  font-family: "poppins";
  color: #474444;
  width: max-content;

  @media (min-width: 768px) {
    top: 5rem;
    right: 0;
  }
`;
