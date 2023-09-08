import {
  Tool,
  ToolsWrapper,
  StyledSection,
  StyledHeader,
} from "../components/styled/tools.styled";
import { frontendTools, workFlowTools } from "../libs/tools.data";
import { Link } from "react-router-dom";
import { m } from "framer-motion";
import {
  toolCardVariants,
  toolHeaderVariants,
} from "../libs/animationVariants.data";

const Tools = () => {
  return (
    <>
      <ToolsWrapper>
        <m.p variants={toolHeaderVariants} initial="initial" animate="animate">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae
          sed quaerat alias! Quo earum totam neque vel non odio magni officia,
          excepturi sint, quasi vero saepe libero,facilis quas.
        </m.p>
        <StyledHeader>Frontend</StyledHeader>
        <StyledSection style={{ paddingBottom: "7rem" }}>
          {frontendTools.map((tool, index) => (
            <Tool
              key={tool.name}
              tabIndex={0}
              as={m.div}
              variants={toolCardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <Link to={`/uses/${tool.name}`}>
                <p>{tool.name}</p>
                <img src={tool.img} alt={tool.name} />
              </Link>
            </Tool>
          ))}
        </StyledSection>

        <StyledHeader>Work Flow</StyledHeader>
        <StyledSection style={{ paddingBottom: "7rem" }}>
          {workFlowTools.map((tool, index) => (
            <Tool
              key={tool.name}
              tabIndex={0}
              as={m.div}
              variants={toolCardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
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
