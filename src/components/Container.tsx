// import ContactBtn from "./ContactBtn";
import { Main } from "./styled/elements.styled";
import ContactBtn from "./ContactBtn";
import FormModal from "./FormModal";

interface Props {
  children?: JSX.Element;
}

const Container = ({ children }: Props) => {
  return (
    <Main>
      {children}
      <ContactBtn />
      <FormModal />
    </Main>
  );
};

export default Container;
