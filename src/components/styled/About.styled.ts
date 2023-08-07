import styled from "styled-components";

interface Props {
  width: string;
  dis?: string;
}
export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  margin-inline: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: stretch;
    width: 84%;
    gap: 1vw;
  }
`;
export const StyledCanvas = styled.section<Props>`
  display: ${({ dis }) => dis};
  height: 100%;
  position: relative;
  font-family: "Poppins", sans-serif;

  & div,
  p {
    color: ${({ theme }) => theme.colors.text};
  }

  @media (min-width: 768px) {
    display: block;
    height: 100%;
    width: ${({ width }) => width};
    padding-block: 4rem;
  }

  & .article {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
    border: 1px solid gray;
    max-height: 100%;
    height: 100%;

    overflow-y: auto;

    @media (min-width: 768px) {
      height: 100%;
      padding: 3rem 5rem;
    }
  }

  & .hobbies__img {
    background-color: transparent;
    display: none;

    & p {
      color: ${({ theme }) => theme.colors.text} !important;
    }
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
