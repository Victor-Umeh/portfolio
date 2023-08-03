import styled from "styled-components";
import { Button } from "./Button.styled";

export const ExploreBtn = styled(Button)`
  position: relative;
  padding: 1rem 4rem;
  color: ${({ theme }) => theme.accent};
  margin-top: 1.5rem;
  border: 0.5px solid #474444;
  border-radius: 5rem;
  overflow: hidden;
  transform-origin: left;
  right: ${({ pos }) => pos && "-50%"};
  transform: ${({ pos }) => pos && "translateX(-50%)"};
  transition: all 50ms;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: #474444;
    opacity: 0.15;
    transform: scaleX(0);
    transform-origin: center;
    z-index: -100;
    transition: all 200ms;
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