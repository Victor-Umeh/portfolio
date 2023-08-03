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
  width: 4.5rem;
  aspect-ratio: 1;
  background-color: indianred;
  color: white;
  border-radius: 50%;
  padding: 1rem;
  margin-top: 0;
  position: fixed;
  bottom: 0.5rem;
  right: 1rem;

  & .icon {
    font-size: 2.3rem;
    margin-bottom: 0.6rem;
    rotate: -180deg;
  }

  &:before {
    background: white;
  }

  @media (min-width: 768px) {
    width: 5.2rem;
    right: 7rem;
    bottom: 6rem;
  }
`;
