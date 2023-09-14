import { useParams, useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
// import { frontendTools, workFlowTools } from "../libs/tools.data.ts";
import {
  PreviousPage,
  ToolDescription,
  ToolWrapper,
} from "../components/styled/tools.styled.ts";
import { StyledWrapper } from "../components/styled/elements.styled.ts";
import { m } from "framer-motion";
import {
  toolDetailAnimationVariants,
  toolDetailTextAnimationVariants,
} from "../libs/animationVariants.data.ts";
import { useTranslation } from "react-i18next";
import { frontendImages, workflowImages } from "../libs/tools.data";

const ToolDetails = () => {
  const { name } = useParams();
  let navigate = useNavigate();

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

  const [frontendData] = frontend.filter((tool: any) => tool.name === name);
  const [workFlowData] = workflow.filter((tool: any) => tool.name === name);
  const selected = frontendData || workFlowData;

  return (
    <StyledWrapper style={{ overflowY: "hidden" }}>
      <ToolWrapper
        as={m.section}
        variants={toolDetailAnimationVariants}
        initial="initial"
        animate="animate"
      >
        <figure>
          <PreviousPage
            as={m.button}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(-1)}
          >
            <FaArrowCircleLeft />
          </PreviousPage>
          <m.img
            src={selected.img}
            alt={selected.name}
            whileHover={{
              opacity: 0.88,
              scale: 1.01,
              rotate: 0.2,
            }}
            transition={{ duration: 0.3 }}
          />
          <figcaption>{selected.name}</figcaption>
        </figure>
      </ToolWrapper>

      <ToolDescription
        as={m.p}
        variants={toolDetailTextAnimationVariants}
        initial="initial"
        animate="animate"
      >
        {selected.description}
      </ToolDescription>
    </StyledWrapper>
  );
};

export default ToolDetails;
