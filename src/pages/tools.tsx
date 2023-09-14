import {
  Tool,
  ToolsWrapper,
  StyledSection,
  StyledHeader,
} from "../components/styled/tools.styled";
// import { frontendTools, workFlowTools } from "../libs/tools.data";
import { Link } from "react-router-dom";
import { m } from "framer-motion";
import {
  toolCardVariants,
  toolHeaderVariants,
} from "../libs/animationVariants.data";
import { useTranslation } from "react-i18next";
import { frontendImages, workflowImages } from "../libs/tools.data";

const Tools = () => {
  const { t, ready } = useTranslation();

  function includeImagesInArray(objArray: any, imgArray: string[]) {
    objArray?.forEach((tool: any, index: any) => {
      //at each index, create a new property: "img"
      // pass the value from frontendimages base on the index

      tool.img = imgArray[index];
    });
  }

  function trans() {
    if (!ready) return "Loading translations....";

    return t("toolsPage", {
      returnObjects: true,
    });
  }

  const _18n_tools = trans();
  const { frontend, workflow }: any = _18n_tools;
  includeImagesInArray(frontend, frontendImages);
  includeImagesInArray(workflow, workflowImages);

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
          {frontend.map((tool: any, index: number) => (
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
          {workflow.map((tool: any, index: number) => (
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

// export { frontend, workflow };
export default Tools;
