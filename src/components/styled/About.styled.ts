import styled from "styled-components";

interface Props {
  min: string;
  max?: string;
  width: string;
}
export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-inline: auto;
  gap: 0rem;

  @media (min-width: 768px) {
    justify-content: stretch;
    width: 84%;
    gap: 6rem;
  }
`;
export const StyledCanvas = styled.section<Props>`
  padding: 2rem 0;
  min-height: ${({ min }) => min};
  max-height: ${({ max }) => max};
  position: relative;
  font-family: "Poppins", sans-serif;

  @media (min-width: 768px) {
    height: 100%;
    width: ${({ width }) => width};
    padding-block: 4rem;
  }

  & .article {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 8rem;
    border: 1px solid gray;
    min-height: 30%;
    overflow-y: auto;

    @media (min-width: 768px) {
      height: 100%;
    }
  }

  & .hobbies__img {
    background-color: lightgreen;
    display: none;

    @media (min-width: 768px) {
      min-height: 200px;
      display: block;
    }
  }
  & p {
    margin-block: 10px;
  }
  & h3 {
    color: orangered;
  }
`;
