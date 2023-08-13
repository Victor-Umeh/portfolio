import { useContactFormContext } from "../context/formModalContext";
// import { motion, AnimatePresence } from "framer-motion";
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
    transition: {
      duration: 0.3,
    },
  },
};

// const formVariants = {
//   hidden: { Y: "-1000" },
//   visible: {
//     Y: 100,
//     transition: {
//       duration: 1,
//     },
//   },
// };

const FormModal = () => {
  const { showFormModal } = useContactFormContext();
  return (
    showFormModal && (
      <>
        <Overlay
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
        />
        <StyledForm>
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
      </>
    )
  );
};

export default FormModal;
