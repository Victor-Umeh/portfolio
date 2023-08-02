// import ContactBtn from "./ContactBtn";
import { Main } from "./styled/elements.styled";
import ContactBtn from "./ContactBtn";

interface Props {
  children?: JSX.Element;
}

const Container = ({ children }: Props) => {
  return (
    <Main>
      {children}
      <ContactBtn />
    </Main>
  );
};

export default Container;
