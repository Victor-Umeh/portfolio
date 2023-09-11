import styled from "styled-components";

const Status = styled.div`
  position: absolute;
  bottom: 1rem;
  padding: 2rem 4rem;
  z-index: 999;
  background: white;
  height: 6rem;
`;

const StatusMessage = ({ children }: any) => {
  return <Status>{children}</Status>;
};

export default StatusMessage;
