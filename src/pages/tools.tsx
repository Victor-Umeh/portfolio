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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae
          sed quaerat alias! Quo earum totam neque vel non odio magni officia,
          excepturi sint, quasi vero saepe libero, facilis quas.
        </p>
        <StyledHeader>Frontend</StyledHeader>
        <StyledSection mb="7rem">
          <Tool>HTML</Tool>
          <Tool>CSS</Tool>
          <Tool>SASS</Tool>
          <Tool>TAILWINDCSS</Tool>
          <Tool>MUI</Tool>
          <Tool>JAVASCRIPT</Tool>
          <Tool>TYPESCRIPT</Tool>
          <Tool>REACT</Tool>
        </StyledSection>

        <StyledHeader>Work Flow</StyledHeader>
        <StyledSection mb="7rem">
          <Tool>FIGMA</Tool>
          <Tool>ADOBE XD</Tool>
          <Tool>PHOTOSHOP</Tool>
          <Tool>ILLUSTRATOR</Tool>
          <Tool>GIT</Tool>
          <Tool>GITHUB</Tool>
          <Tool>LIGHTROOM</Tool>
        </StyledSection>
      </ToolsWrapper>
    </>
  );
};

export default Tools;
