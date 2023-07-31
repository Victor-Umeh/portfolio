import styled from "styled-components";
// import { CssPropsType } from ../../utils/styled-prop-model;

interface Props {
  theme: {};
  pos?: boolean;
  auto?: boolean;
}

export const Main = styled.main<Props>`
  width: 100%;
  background-color: ${({ theme }) => theme.body};
  position: relative;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Button = styled.button<Props>`
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
  gap: 0vw;
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

export const List = styled.ul<Props>`
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

export const Link = styled.li<Props>`
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  padding: 0.5rem;
  list-style: none;
  color: ${({ theme }) => theme.accent};
  transform-origin: center;
  transition: all 600ms;
  cursor: pointer;

  &:hover {
    font-weight: 600;
    transform: scale(1.2);
  }
`;

export const SocialBlock = styled(List)`
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

export const CtaButton = styled(Button)`
  position: relative;
  padding: 1rem 4rem;
  color: ${({ theme }) => theme.accent};
  margin-top: 1.5rem;
  border: 1px solid #474444;
  border-radius: 5rem;
  overflow: hidden;
  transform-origin: left;
  right: ${({ pos }) => pos && "-50%"};
  transform: ${({ pos }) => pos && "translateX(-50%)"};
  transition: all 600ms;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: #474444;
    opacity: 0.2;
    transform: scaleX(0);
    transform-origin: center;
    z-index: -100;
    transition: all 600ms;
  }

  &:hover {
    color: ${({ theme }) => theme.text};
  }

  &:hover:before {
    transform: scaleX(1);
  }

  @media (min-width: 768px) {
    position: ${({ pos }) => (pos ? "absolute" : "relative")};
    right: ${({ pos }) => pos && "13rem"};
    bottom: ${({ pos }) => pos && "10rem"};
    transform: translateX(0);
  }
`;

export const Contact = styled(CtaButton)`
  background-color: #179d75;
  color: white;

  &:before {
    background: white;
  }
`;

export const CtaWrapper = styled.div`
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
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
