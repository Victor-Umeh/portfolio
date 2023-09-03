import { Contact } from "./styled/contactBtn.styled";
import { useContactFormContext } from "../context/formModalContext";
import { AiFillMessage, AiFillCloseCircle } from "react-icons/ai";
import { useEffect } from "react";

const ContactBtn = () => {
  const { showFormModal, setShowFormModal } = useContactFormContext();
  const handleClick = () => setShowFormModal(!showFormModal);

  useEffect(() => {
    setShowFormModal(false);
  }, []);

  return (
    <Contact onClick={handleClick}>
      <span className="icon">
        {showFormModal ? <AiFillCloseCircle /> : <AiFillMessage />}
      </span>
    </Contact>
  );
};

export default ContactBtn;
