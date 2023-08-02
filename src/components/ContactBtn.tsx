import { Contact } from "./styled/ContactBtn.styled";
import { AiFillPhone } from "react-icons/ai";

const ContactBtn = () => {
  return (
    <Contact>
      <span className="icon">
        <AiFillPhone />
      </span>
    </Contact>
  );
};

export default ContactBtn;
