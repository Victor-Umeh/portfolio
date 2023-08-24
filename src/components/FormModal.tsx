import { useContactFormContext } from "../context/formModalContext";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  Overlay,
} from "./styled/elements.styled";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const formVariants = {
  hidden: { left: "-100vw" },
  visible: {
    left: "50%",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 19,
    },
  },
};

const FormModal = () => {
  const { showFormModal, setShowFormModal } = useContactFormContext();
  useEffect(() => {});
  return (
    showFormModal && (
      <AnimatePresence>
        <Overlay
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setShowFormModal(!showFormModal)}
        />

        <StyledForm
          variants={formVariants}
          initial="hidden"
          animate="visible"
          exit={{ right: "100vw" }}
        >
          <label>
            <h2>CONTACT ME</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              voluptatibus laboriosam alias,
            </p>
          </label>

          <StyledInput type="text" placeholder="Your Name" />
          <StyledInput type="email" placeholder="Your Email" />
          <StyledTextArea placeholder="Your Message" />
          <StyledButton>Send</StyledButton>
        </StyledForm>
      </AnimatePresence>
    )
  );
};

export default FormModal;
