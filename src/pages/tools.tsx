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
import { frontendImages, workflowImages } from "../libs/tools.images";
import { includeImagesInArray } from "../libs/mutateArray";

const Tools = () => {
  const { t, ready } = useTranslation();

  function getTranslation() {
    if (!ready) return "Loading getTranslationlations....";

    return t("toolsPage", {
      returnObjects: true,
    });
  }

  /*
  destructuring necessary data directly tends to throw an error, hence I called the func
  on a variable and destructured the variable from then.
  */

  const _18n_translated_tools_data = getTranslation();
  const { frontend, workflow }: any = _18n_translated_tools_data;
  includeImagesInArray(frontend, frontendImages);
  includeImagesInArray(workflow, workflowImages);

  return (
    <>
      <ToolsWrapper>
        <m.h3
          className="tool__header"
          variants={toolHeaderVariants}
          initial="initial"
          animate="animate"
        >
          {t("toolsPage.header")}
        </m.h3>
        <StyledHeader>Frontend</StyledHeader>
        <StyledSection style={{ paddingBottom: "7rem", marginInline: "auto" }}>
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
