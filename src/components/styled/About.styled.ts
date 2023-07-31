import styled from "styled-components";

interface Props {
  min: string;
}
export const AboutWrapper = styled.section`
  width: 90%;
  margin-inline: auto;

  @media (min-width: 768px) {
    width: 84%;
  }
`;
export const StyledCanvas = styled.section<Props>`
  padding: 2rem 1rem;
  border: 1px solid red;
  min-height: ${({ min }) => min};

  @media (min-width: 768px) {
    height: 90vh;
  }
`;
