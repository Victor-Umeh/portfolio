import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
} from "./styled/elements.styled";

const FormModal = () => {
  return (
    <StyledForm>
      <div>
        <StyledInput />
        <StyledInput />
      </div>
      <StyledTextArea />
      <StyledButton>Send</StyledButton>
    </StyledForm>
  );
};

export default FormModal;
