import { Contact } from "./styled/contactBtn.styled.ts";
import { useContactFormContext } from "../context/formModalContext";
import { AiFillMessage, AiFillCloseCircle } from "react-icons/ai";

const ContactBtn = () => {
  const { showFormModal, setShowFormModal } = useContactFormContext();
  const handleClick = () => setShowFormModal(!showFormModal);

  // useEffect(() => {
  //   // setShowFormModal(false);
  // }, []);

  return (
    <Contact onClick={handleClick}>
      <span className="icon">
        {showFormModal ? <AiFillCloseCircle /> : <AiFillMessage />}
      </span>
    </Contact>
  );
};

export default ContactBtn;
