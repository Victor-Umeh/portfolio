import {
  Tool,
  ToolsWrapper,
  StyledSection,
  StyledHeader,
} from "../components/styled/tools.styled";
import { frontendTools, workFlowTools } from "../libs/tools.data";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <>
      <ToolsWrapper>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae
          sed quaerat alias! Quo earum totam neque vel non odio magni officia,
          excepturi sint, quasi vero saepe libero,facilis quas.
        </p> 
        <StyledHeader>Frontend</StyledHeader>
        <StyledSection mb="7rem">
          {frontendTools.map((tool) => (
            <Tool key={tool.name}>
              <Link to={`/uses/${tool.name}`}>
                <p>{tool.name}</p>
                <img src={tool.img} alt={tool.name} />
              </Link>
            </Tool>
          ))}
        </StyledSection>

        <StyledHeader>Work Flow</StyledHeader>
        <StyledSection mb="7rem">
          {workFlowTools.map((tool) => (
            <Tool key={tool.name}>
              <Link to={`/uses/${tool.name}`}>
                <p>{tool.name}</p>
                <img src={tool.img} alt={tool.name} />
              </Link>
            </Tool>
          ))}
        </StyledSection>
      </ToolsWrapper>
    </>
  );
};

export default Tools;
