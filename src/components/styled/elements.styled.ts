import styled from "styled-components";
import { Button } from "./Button.styled";
import { ToolsWrapper } from "./Tools.styled";

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
  isTop?: boolean;
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
  margin-bottom: 1.8rem;
  border: 1px solid grey;
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);

  & a:hover {
    cursor: pointer;
    color: indianred;
  }
  &:hover {
    opacity: 0.8;
    box-shadow: 0 10px 8px rgba(0, 0, 0, 0.1);
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
  width: 25px;
  aspect-ratio: 1;
  font-weight: 400;
  color: ${({ theme }) => theme.accent};
  margin-left: ${({ auto }) => auto && "auto"};
  margin-right: 2.5rem;
  padding: 0.4rem;
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 4px;
  transition: all 300ms;
  cursor: pointer;

  &:hover {
    font-weight: 400;
    transform: scale(1.05);
    border-radius: 50%;
  }
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

  @media (min-width: 768px) {
    padding-block: 2.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.accent};
  }
`;
export const Hamburger = styled(Button)<MenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transform: rotate(${({ open }) => (open ? "180deg" : "0deg")});
  transition: all 400ms;

  & span {
    transition: all 400ms;
  }
`;

export const Line = styled.span<MenuProps>`
  height: 2px;
  width: 5rem;
  background-color: ${({ theme }) => theme.accent};
  display: block;
  transform: translateY(
      ${({ isTop, open }) =>
        (isTop && open ? "5px" : null) || (!isTop && open ? "-7px" : null)}
    )
    rotate(
      ${({ isTop, open }) =>
        (isTop && open ? "45deg" : null) || (!isTop && open ? "-45deg" : null)}
    );
`;

export const Menu = styled.div<MenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
  background-color: ${({ theme }) => theme.body};
  height: 100vh;
  position: fixed;
  /* top: ${({ open }) => (open ? "0" : "-100rem")}; */
  left: 0;
  right: 0;
  bottom: ${({ open }) => (open ? "-6.5rem" : "100rem")};
  z-index: -999;
  transition: bottom 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86);

  @media (min-width: 768px) {
    padding-top: 20rem;
    bottom: ${({ open }) => (open ? "-8.6rem" : "100rem")};
  }
`;

export const StyledList = styled.ul<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: min(4vw, 8rem);
  background-color: ${({ theme }) => theme.body};

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

  &:hover {
    font-weight: 600;
    transform: scale(1.2);
  }

  & a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
  }
`;
export const StyledText = styled(StyledLink)`
  display: none;

  @media (min-width: 768px) {
    display: block;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 10rem;
    margin-right: 10rem;
    gap: 6px;
    /* border: 1px solid red; */

    & span {
      display: flex;
      align-items: center;
      rotate: 45deg;
      font-size: 1.15rem;
      color: ${({ theme }) => theme.accent};
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
  width: 38vw;
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
