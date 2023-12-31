import styled from "styled-components";
import { Button } from "./button.styled.ts";
import { ToolsWrapper } from "./tools.styled.ts";
import { ExploreBtn } from "./exploreBtn.styled.ts";
import { m } from "framer-motion";

interface Props {
  theme: {};
}

interface MenuProps extends Props {
  $open?: boolean;
  $istop?: string;
}
export const StyledWrapper = styled(ToolsWrapper)<Props>`
  max-width: 850px;
`;

export const ProjectWrapper = styled(StyledWrapper)`
  width: 90%;
  max-width: 700px;
  padding-top: clamp(1rem, 5vh, 10rem);
  overflow-y: visible;
  margin-block: 0;

  & p {
    margin: 0;
    padding: 0;
    text-align: left;
  }
  & h2 {
    font-size: 2.3rem;
    margin-bottom: 1rem;
    letter-spacing: 0.2rem;
  }

  & .project__wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 8rem;

    @media (min-width: 768px) {
      gap: 3rem;
    }
  }
`;

export const ProjectCard = styled.div`
  height: 18rem;
  padding: 1.8rem 2.3rem 2.3rem 2.3rem;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 0.7rem;

  h3 {
    font-size: 2.4rem;
  }

  h3,
  p {
    color: ${({ theme }) => theme.colors.body};
    line-height: 1.6;
  }
  .project__context {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .links {
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
    & a {
      color: ${({ theme }) => theme.colors.links};
    }
    & a:hover {
      opacity: 0.7;
    }
  }
`;

export const Main = styled.main<Props>`
  background-color: ${({ theme }) => theme.colors.body};
  position: relative;
  height: 89vh;
  overflow-x: hidden;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const StyledBtn = styled(Button)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  aspect-ratio: 1;
  font-size: 1.5rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.accent};
  margin-right: 2.5rem;
  padding: 0.4rem;
  border-radius: 50%;
  transition: transform 300ms;
  cursor: pointer;

  &:hover:not() {
    opacity: 0.5;
  }

  & .lang__wrapper {
    position: absolute;
    bottom: -21.5rem;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-block: 1rem;
    background-color: ${({ theme }) => theme.colors.accent};

    &::before {
      content: "";
      position: absolute;
      top: 0.85rem;
      left: 50%;
      transform: rotate(45deg) translateX(-50%);
      width: 30px;
      aspect-ratio: 1;
      background-color: inherit;
      z-index: -1;
    }

    & .lang__selector {
      outline: 0px;
      border: 0px;
      color: ${({ theme }) => theme.colors.body};
      background-color: transparent;
      font-size: 1.5rem;
      display: block;
      width: 100%;
      padding-block: 1rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        font-size: 1.6rem;
        font-weight: bold;
      }
    }
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
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
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
      ${({ $istop, $open }) =>
        ($istop === "top" && $open ? "5px" : null) ||
        ($istop === "bottom" && $open ? "-7px" : null)}
    )
    rotate(
      ${({ $istop, $open }) =>
        ($istop === "top" && $open ? "45deg" : null) ||
        ($istop === "bottom" && $open ? "-45deg" : null)}
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
  bottom: 0.5px;

  transform: scaleY(${({ $open }) => ($open ? 1 : 0)});
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

export const StyledLink = styled(m.li)<Props>`
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  padding: 0.5rem;
  list-style: none;
  transform-origin: center;
  transition: all 600ms;
  cursor: pointer;

  & a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
  }

  @media (min-width) {
    font-size: 6rem;
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
  right: 2.5rem;
  font-size: 1rem;
  font-family: "poppins";
  color: ${({ theme }) => theme.colors.text};
  width: max-content;

  @media (min-width: 768px) {
    top: 5rem;
    // right: 0;
  }
`;
export const Overlay = styled(m.div)`
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
export const StyledForm = styled(m.form)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 700px;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.body};
  outline: 1px solid ${({ theme }) => theme.colors.accent};
  z-index: 100;
  font-family: "poppins";
  backdrop-filter: blur(3px);
  box-shadow: 0 0px 12px rgba(0, 0, 0, 0.9);

  @media (min-width: 768px) {
    padding: 2rem 3rem;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  h2,
  p {
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }

  p {
    font-size: 1.5rem;
    max-width: 50ch;
    margin-inline: auto;
  }

  label {
    margin-bottom: 2rem;
  }
`;
export const StyledTextArea = styled.textarea`
  display: block;
  resize: none;
  padding: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  border: 0;
  outline: 0;
  background-color: ${({ theme }) =>
    theme.name === "dark-theme" ? "#0F172A" : "#F1F5F9"};
  font-size: 1.6rem;
  transition: filter 300ms;

  &::placeholder {
    font-size: 1.6rem;
  }
  &:hover,
  &:focus {
    filter: brightness(
      ${({ theme }) => (theme.name === "dark-theme" ? "88%" : "96%")}
    );
  }
`;
export const StyledInput = styled.input`
  display: block;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  background-color: ${({ theme }) =>
    theme.name === "dark-theme" ? "#0F172A" : "#F1F5F9"};
  border: 0;
  outline: 0;
  padding: 1.5rem 2rem;
  transition: filter 300ms;

  &::placeholder {
    font-size: 1.4rem;
  }
  &:hover,
  &:focus {
    filter: brightness(
      ${({ theme }) => (theme.name === "dark-theme" ? "88%" : "96%")}
    );
  }
`;
export const StyledButton = styled(ExploreBtn)`
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: white;
  background-color: indianred;
  border: none;
  padding: 1.8rem 5rem;
  max-height: 5.3rem;
  min-width: 20rem;

  &:hover {
    color: white;
  }

  &:disabled {
    opacity: 0.8;
    pointer-events: none;
    &:hover:before {
      transform: scaleX(0);
    }
  }
`;

export const Spinner = styled.div`
  border: 6px solid lightgrey;
  border-top: 6px grey solid;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ButtonSpinner = styled.div`
  border: 3px solid lightgrey;
  border-top: 3px grey solid;
  border-radius: 50%;
  height: 23px;
  width: 23px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
