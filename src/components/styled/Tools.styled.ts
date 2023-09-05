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
  position: relative;
  overflow: hidden;

  a {
    width: 100%;
    height: 100%;

    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${({ theme }) => theme.colors.text};
    }
    img {
      position: absolute;
      top: 0;
      left: -100vw;
      width: 100%;
      transition: left 800ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }

  img {
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: -100vw;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.body};
    transition: left;
  }

  &:hover img {
    left: 0;
  }

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

export const ToolWrapper = styled.section`
  max-width: 500px;
  margin: 4rem auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.container};
  box-shadow: 0 0 5px -3px ${({ theme }) => theme.colors.shadow};
  overflow: hidden;
  position: relative;

  figcaption {
    padding: 1.3rem;
    text-align: center;
    font-weight: bold;
    font-size: 1.6rem;
    text-transform: uppercase;
  }

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;

    figcaption {
      padding: 2rem;
    }
  }
`;

export const ToolDescription = styled.p`
  font-size: 1.4rem;
  padding: 0 0 6rem 0 !important;

  @media (min-width: 768px) {
    min-width: 360px;
    max-width: 480px;
  }
`;

export const PreviousPage = styled.button`
  border: 0;
  outline: none;
  background-color: transparent;
  position: absolute;
  color: white;
  font-size: 3rem;
  left: 2rem;
  bottom: 0.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    bottom: 1rem;
  }
`;
