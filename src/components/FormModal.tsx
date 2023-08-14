import { useContactFormContext } from "../context/formModalContext";
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
  hidden: { top: "-100vh" },
  visible: {
    top: "50%",
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};

const FormModal = () => {
  const { showFormModal } = useContactFormContext();
  return (
    showFormModal && (
      <>
        <AnimatePresence>
          <Overlay
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        </AnimatePresence>
        <AnimatePresence>
          <StyledForm
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
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
      </>
    )
  );
};

export default FormModal;
