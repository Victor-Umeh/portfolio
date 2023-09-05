import { useParams, useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { frontendTools, workFlowTools } from "../libs/tools.data";
import {
  PreviousPage,
  ToolDescription,
  ToolWrapper,
} from "../components/styled/tools.styled";
import { StyledWrapper } from "../components/styled/elements.styled";

const ToolsDetails = () => {
  const { name } = useParams();
  let navigate = useNavigate();
  const [frontendData] = frontendTools.filter((tool) => tool.name === name);
  const [workFlowData] = workFlowTools.filter((tool) => tool.name === name);
  const selected = frontendData || workFlowData;

  return (
    <StyledWrapper style={{}}>
      <ToolWrapper>
        <figure>
          <PreviousPage onClick={() => navigate(-1)}>
            <FaArrowCircleLeft />
          </PreviousPage>
          <img src={selected.img} alt={selected.name} />
          <figcaption>{selected.name}</figcaption>
        </figure>
      </ToolWrapper>

      <ToolDescription>{selected.description}</ToolDescription>
    </StyledWrapper>
  );
};

export default ToolsDetails;
