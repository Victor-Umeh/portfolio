import styled from "styled-components";
import { ExploreBtn } from "./ExploreBtn.styled";

export const Contact = styled(ExploreBtn)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  aspect-ratio: 1;
  background-color: indianred;
  color: white;
  border-radius: 50%;
  padding: 2rem;
  margin-top: 0;
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  /* border: none; */

  & .icon {
    font-size: 2.8rem;
    margin-bottom: 0.6rem;
    rotate: -180deg;
  }

  &:before {
    background: white;
  }

  @media (min-width: 768px) {
    width: 5.6rem;
    right: 5rem;
    bottom: 5rem;
  }
`;

// export const CtaWrapper = styled.div`
//   padding: 3rem 2rem;
//   display: flex;
//   justify-content: center;
//   gap: 2rem;
// `;
