import styled from "styled-components";

interface Props {
  min: string;
  width: string;
}
export const AboutWrapper = styled.section`
  width: 90%;
  margin-inline: auto;

  @media (min-width: 768px) {
    display: flex;
    justify-content: stretch;
    width: 84%;
  }
`;
export const StyledCanvas = styled.section<Props>`
  padding: 2rem 1rem;
  min-height: ${({ min }) => min};
  /* border: 2px solid cyan; */
  position: relative;
  font-family: "Poppins", sans-serif;

  @media (min-width: 768px) {
    height: 90vh;
    width: ${({ width }) => width};
    padding-block: 4rem;
  }

  & .article {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 4rem 8rem;
    border: 1px solid gray;
    height: 100%;
  }

  & p {
    margin-block: 10px;
  }
  & h3 {
    color: orangered;
  }
`;
