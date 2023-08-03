import {
  Tool,
  ToolsWrapper,
  StyledSection,
  StyledHeader,
} from "../components/styled/Tools.styled";

const Tools = () => {
  return (
    <>
      <ToolsWrapper>
        <StyledHeader>Work Flow</StyledHeader>
        <StyledSection>
          <Tool>FIGMA</Tool>
          <Tool>ADOBE XD</Tool>
          <Tool>PHOTOSHOP</Tool>
          <Tool>ILLUSTRATOR</Tool>
          <Tool>GIT</Tool>
          <Tool>GITHUB</Tool>
          <Tool>LIGHTROOM</Tool>
        </StyledSection>

        <StyledHeader mt="6rem">Frontend</StyledHeader>
        <StyledSection>
          <Tool>HTML</Tool>
          <Tool>CSS</Tool>
          <Tool>SASS</Tool>
          <Tool>TAILWINDCSS</Tool>
          <Tool>MUI</Tool>
          <Tool>JAVASCRIPT</Tool>
          <Tool>TYPESCRIPT</Tool>
          <Tool>REACT</Tool>
        </StyledSection>
      </ToolsWrapper>
    </>
  );
};

export default Tools;
