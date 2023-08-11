import { Contact } from "./styled/ContactBtn.styled";
import { AiFillMessage } from "react-icons/ai";

const ContactBtn = () => {
  return (
    <Contact>
      <span className="icon">
        <AiFillMessage />
      </span>
    </Contact>
  );
};

export default ContactBtn;
