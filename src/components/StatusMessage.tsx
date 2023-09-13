import styled from "styled-components";
import { AnimatePresence, m } from "framer-motion";

type TProp<T> = {
  emailStatus: T;
};
type TStyled = {
  color: string;
};
const Status = styled(m.p)<TStyled>`
  position: fixed;
  font-size: 3rem;
  bottom: 0rem;
  padding: 0.5rem 1.5rem;
  z-index: 999;
  background: white;
  color: ${({ color }) => (color === "✔" ? "green" : "red")};
`;

const statusVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const StatusMessage = ({ emailStatus }: TProp<string>) => {
  return (
    <AnimatePresence>
      {emailStatus && (
        <Status
          color={emailStatus}
          variants={statusVariants}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          {emailStatus}
        </Status>
      )}
    </AnimatePresence>
  );
};

export default StatusMessage;
