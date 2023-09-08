import { useContactFormContext } from "../context/formModalContext";
import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  Overlay,
} from "./styled/elements.styled";
import { overlayVariants, formVariants } from "../libs/animationVariants.data";

const FormModal = () => {
  const { showFormModal, setShowFormModal } = useContactFormContext();
  // useEffect(() => {});

  return (
    showFormModal && (
      <>
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
      </>
    )
  );
};

export default FormModal;
