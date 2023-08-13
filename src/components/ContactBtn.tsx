import { Contact } from "./styled/ContactBtn.styled";
import { useContactFormContext } from "../context/formModalContext";
import { AiFillMessage } from "react-icons/ai";

const ContactBtn = () => {
  const { showFormModal, setShowFormModal } = useContactFormContext();
  return (
    <Contact onClick={() => setShowFormModal(!showFormModal)}>
      <span className="icon">
        <AiFillMessage />
      </span>
    </Contact>
  );
};

export default ContactBtn;
