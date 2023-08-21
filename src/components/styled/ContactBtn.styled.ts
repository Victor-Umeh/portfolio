import styled from "styled-components";
import { ExploreBtn } from "./ExploreBtn.styled";

interface Props {
  bottom?: string;
  right?: string;
  top?: string;
}
export const Contact = styled(ExploreBtn)<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.5rem;
  aspect-ratio: 1;
  background-color: indianred;
  color: white;
  border-radius: 50%;
  padding: 1rem;
  margin-top: 0;
  position: fixed;
  bottom: 1rem;
  right: 3rem;
  border: none;

  & .icon {
    font-size: 3rem;
    margin-top: 0.6rem;
  }

  @media (min-width: 768px) {
    width: 6rem;
    right: 7rem;
    bottom: 6rem;

    &:hover {
      scale: 1.05;
      transition: scale 800ms;
      color: white;
    }
  }
`;
