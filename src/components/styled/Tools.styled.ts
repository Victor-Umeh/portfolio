import styled from "styled-components";
interface Props {
  mb?: string;
}

export const ToolsWrapper = styled.section`
  font-family: "Poppins", sans-serif;
  width: 85%;
  height: 100%;
  margin-inline: auto;
  padding-top: 1rem;
  color: ${({ theme }) => theme.colors.text};

  & p {
    padding: 2rem 2.5rem;
    text-align: center;
    margin-inline: auto;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      width: 70%;
      text-align: center;
      margin-bottom: 8rem;
    }
  }

  @media (min-width: 768px) {
    padding-top: 3.5rem;
  }
`;

export const StyledSection = styled.section<Props>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2.3vw;
  padding-bottom: ${({ mb }) => mb};
`;
export const Tool = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 85vw;
  max-width: 37.5vw;
  min-height: 20rem;
  border: 1px solid grey;
  cursor: pointer;

  @media (min-width: 600px) {
    min-width: auto;
    width: min(50vw, 30%);
    max-width: 22rem;
    height: 12rem;
    min-height: auto;
  }
`;
export const StyledHeader = styled.h2`
  font-size: 1.8rem;
  padding-bottom: 1rem;
`;
