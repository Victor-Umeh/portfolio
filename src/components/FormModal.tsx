import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useContactFormContext } from "../context/formModalContext";
import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  Overlay,
  ButtonSpinner,
} from "./styled/elements.styled";
import StatusMessage from "./StatusMessage";
import { overlayVariants, formVariants } from "../libs/animationVariants.data";
import { AnimatePresence } from "framer-motion";

const FormModal = () => {
  const { showFormModal, setShowFormModal } = useContactFormContext();
  const [emailStatus, setEmailStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef<string | (HTMLFormElement & any)>(null);

  const resetState = () => {
    setTimeout(() => setEmailStatus(""), 2000);
    setTimeout(() => setShowFormModal(!showFormModal), 2500);
  };
  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_d7spvug",
        "contact_template-01",
        form.current,
        "w-AKxJIsy9l0W2zpa"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text !== "OK") {
            setEmailStatus("❌");
            resetState();
          }

          setEmailStatus("✔");
          resetState();
          setLoading(false);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <StatusMessage emailStatus={emailStatus} />
      <AnimatePresence>
        {showFormModal && (
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
              exit="hidden"
              ref={form}
              onSubmit={(e) => sendEmail(e)}
            >
              <label>
                <h2>CONTACT ME</h2>
                <p>
                  Do you want to start a project. Give me a call
                  <b> +2348087411750</b>, I'd love to hear from you.
                </p>
              </label>

              <StyledInput
                type="text"
                placeholder="Your Name"
                name="sender_name"
                required
              />
              <StyledInput
                type="email"
                placeholder="Your Email"
                name="sender_email"
                required
              />
              <StyledTextArea
                placeholder="Your Message"
                rows={7}
                cols={50}
                name="message"
                required
              />
              <StyledButton type="submit" value="Send" disabled={loading}>
                {loading ? <ButtonSpinner /> : "Send Message"}
              </StyledButton>
            </StyledForm>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FormModal;
