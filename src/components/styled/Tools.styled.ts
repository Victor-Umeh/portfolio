import styled from "styled-components";
interface Props {
  mt?: string;
}

export const ToolsWrapper = styled.section`
  font-family: "Poppins", sans-serif;
  width: 85%;
  height: 100%;
  margin-inline: auto;
  padding-top: 1rem;

  @media (min-width: 768px) {
    padding-top: 3.5rem;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: no-wrap;
  gap: 2vw;
  overflow-x: hidden;

  @media (min-width: 600px) {
    flex-wrap: wrap;
  }
`;
export const Tool = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(80vw, 23rem);
  min-height: 50rem;
  border: 1px solid grey;

  @media (min-width: 600px) {
    width: min(50vw, 23rem);
    height: 12rem;
    min-height: auto;
  }
`;
export const StyledHeader = styled.h2<Props>`
  font-size: 1.8rem;
  margin-top: ${({ mt }) => mt};
  padding-bottom: 1rem;
`;
