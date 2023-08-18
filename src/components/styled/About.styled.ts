import styled from "styled-components";

interface Props {
  width: string;
  dis?: string;
}
export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-inline: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    width: 84%;
    gap: 1vw;
  }
`;
export const StyledCanvas = styled.section<Props>`
  display: ${({ dis }) => dis};
  position: relative;
  font-family: "Poppins", sans-serif;
  /* border: 3px solid green; */

  & .article {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: ${({ theme }) => theme.colors.text};
    padding: 3rem;
    /* border: 1px solid gray; */
    height: 100%;
    overflow-y: auto;
  }

  @media (min-width: 768px) {
    display: block;
    height: 100%;
    width: ${({ width }) => width};
    padding-block: 4rem;

    display: block;
    max-width: 100%;

    & p {
      margin-block: 10px;
    }

    & h3 {
      color: orangered;
    }
  }
`;
