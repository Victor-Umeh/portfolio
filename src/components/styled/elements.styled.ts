import styled from "styled-components";
import { Button } from "./Button.styled";
import { ToolsWrapper } from "./Tools.styled";
import { ExploreBtn } from "./ExploreBtn.styled";
import { motion } from "framer-motion";

interface Props {
  theme: {};
  pos?: boolean;
  auto?: false;
  top?: string;
  pad?: string;
  border?: string;
  fz?: string;
}
interface MenuProps extends Props {
  open: boolean;
  istop?: string;
}
export const StyledWrapper = styled(ToolsWrapper)<Props>`
  max-width: 500px;
  margin-block: 3rem;
  padding: ${({ pad }) => pad};
  height: auto;
  overflow-y: auto;
`;

export const ProjectWrapper = styled(StyledWrapper)`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    align-content: start;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    gap: min(3vw, 3rem);
    width: 64%;
    max-width: inherit;
    padding-top: 4rem;
  }
`;

export const ProjectCard = styled.div`
  height: 20rem;
  border: 1px solid grey;
  background-color: ${({ theme }) => theme.colors.body};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 7px 2px
    ${({ theme }) =>
      theme.name === "light-theme"
        ? "rgba(0, 10, 20, 0.1)"
        : "rgba(0, 10, 20, 0.4)"};
  transition: opacity, box-shadow 0.8s cubic-bezier(0.785, 0.135, 0.15, 0.86);

  & a:hover {
    cursor: pointer;
    color: indianred;
  }
  &:hover {
    opacity: 0.95;
    box-shadow: 0 10px 8px
      ${({ theme }) =>
        theme.name === "light-theme"
          ? "rgba(0, 10, 20, 0.1)"
          : "rgba(0, 10, 20, 0.4)"};
  }
`;

export const Main = styled.main<Props>`
  background-color: ${({ theme }) => theme.colors.body};
  position: relative;
  height: 90vh;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const StyledBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  aspect-ratio: 1;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.accent};
  margin-left: ${({ auto }) => auto && "auto"};
  margin-right: 2.5rem;
  padding: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 4px;
  transition: all 300ms;
  cursor: pointer;
  z-index: -100;

  &:hover {
    font-weight: 400;
    transform: scale(1.05);
    border-radius: 50%;
  }
`;

export const StyledNav = styled.nav<Props>`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  margin-inline: auto;
  background-color: ${({ theme }) => theme.colors.body};
  padding-block: 2rem;
  padding-inline: clamp(2rem, 8vw, 20rem);
  z-index: 10;

  & img {
    width: 40px;
  }

  @media (min-width: 768px) {
    padding-block: 2.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.accent};

    & img {
      width: 50px;
    }
  }
`;
export const Hamburger = styled(Button)<MenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transform: rotate(${({ open }) => (open ? "180deg" : "0deg")});
  transition: transform 0.8s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: 1;
  & span {
    transition: transform 0.8s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
`;

export const Line = styled.span<MenuProps>`
  height: 2px;
  width: 5rem;
  background-color: ${({ theme }) => theme.colors.accent};
  display: block;
  transform: translateY(
      ${({ istop, open }) =>
        (istop === "top" && open ? "5px" : null) ||
        (istop === "bottom" && open ? "-7px" : null)}
    )
    rotate(
      ${({ istop, open }) =>
        (istop === "top" && open ? "45deg" : null) ||
        (istop === "bottom" && open ? "-45deg" : null)}
    );
`;

export const Menu = styled.div<MenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
  background-color: ${({ theme }) => theme.colors.body};
  height: 92%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  transform: scaleY(${({ open }) => (open ? 1 : 0)});
  transform-origin: top;
  transition: transform 0.8s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: 999;
  @media (min-width: 768px) {
    padding-top: 8rem;
    height: 89%;
  }
`;

export const StyledList = styled.ul<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: min(3vw, 5rem);
  background-color: ${({ theme }) => theme.colors.body};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledLink = styled.li<Props>`
  font-family: "Poppins", sans-serif;
  font-size: ${({ fz }) => fz || "3rem"};
  padding: 0.5rem;
  list-style: none;
  transform-origin: center;
  transition: all 600ms;
  cursor: pointer;

  & a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
  }
`;
export const StyledText = styled(StyledLink)`
  display: none;
  z-index: -1;

  @media (min-width: 768px) {
    display: block;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 10rem;
    margin-right: 10rem;
    gap: 6px;

    & span {
      display: flex;
      align-items: center;
      rotate: 45deg;
      font-size: 1.15rem;
      color: ${({ theme }) => theme.colors.accent};
      transition: rotate 600ms;
    }

    &:hover {
      font-weight: 400;
      transform: scale(1);
    }

    &:hover span {
      rotate: 0deg;
    }
  }
`;

export const SocialBlock = styled(StyledList)`
  position: relative;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-direction: row;
  width: 44vw;
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
    background-color: ${({ theme }) => theme.colors.text};
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
  color: ${({ theme }) => theme.colors.text};
  width: max-content;

  @media (min-width: 768px) {
    top: 5rem;
    right: 0;
  }
`;
export const Overlay = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(5, 5, 15, 0.6);
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(1.5px);
  z-index: 20;
`;
export const StyledForm = styled(motion.form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 550px;
  padding: 4rem;
  background: ${({ theme }) => theme.colors.body};
  outline: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 14px;
  z-index: 888;
  font-family: "poppins";
  backdrop-filter: blur(3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  & label {
    margin-bottom: 2rem;
  }
  & h2,
  p {
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }

  & p {
    font-size: 1.5rem;
    max-width: 42ch;
    margin-inline: auto;
  }
`;
export const StyledTextArea = styled.textarea`
  display: block;
  resize: none;
  padding: 0 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 0;
  outline: 0;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.text};
  font-size: 1.6rem;

  &::placeholder {
    font-size: 1.6rem;
  }
`;
export const StyledInput = styled.input`
  display: block;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  background-color: transparent;
  border: 0;
  outline: 0;
  padding: 1rem;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.text};

  &::placeholder {
    font-size: 1.4rem;
  }
`;
export const StyledButton = styled(ExploreBtn)`
  font-weight: bold;
  color: white;
  background-color: indianred;
  border: none;
  padding: 1.5rem 5rem;

  &:hover {
    color: white;
  }
`;
