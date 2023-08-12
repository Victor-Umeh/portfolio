import { useState } from "react";
import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  Overlay,
} from "./styled/elements.styled";

const FormModal = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    showForm && (
      <>
        <Overlay />
        <StyledForm>
          <label>
            <h2>CONTACT ME</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              voluptatibus laboriosam alias,
            </p>
          </label>

          <StyledInput type="text" placeholder="Your Name" />
          <StyledInput type="text" placeholder="Your Email" />
          <StyledTextArea placeholder="Your Message" />
          <StyledButton>Send</StyledButton>
        </StyledForm>
      </>
    )
  );
};

export default FormModal;
