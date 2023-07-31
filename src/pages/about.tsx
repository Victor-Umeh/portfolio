import { Main } from "../components/styled/elements.styled";
import { StyledCanvas, AboutWrapper } from "../components/styled/About.styled";
const about = () => {
  return (
    <Main>
      <AboutWrapper>
      <StyledCanvas min="58vh">About</StyledCanvas>
      <StyledCanvas min="30vh">About</StyledCanvas>
      </AboutWrapper>
    </Main>
  );
};

export default about;
