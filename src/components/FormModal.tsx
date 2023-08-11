import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  Overlay,
} from "./styled/elements.styled";

const FormModal = () => {
  return (
    <>
      <Overlay />
      <StyledForm>
        <div>
          <StyledInput />
          <StyledInput />
        </div>
        <StyledTextArea />
        <StyledButton>Send</StyledButton>
      </StyledForm>
    </>
  );
};

export default FormModal;
