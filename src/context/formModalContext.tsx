import { createContext, useState, useContext } from "react";

type Prop = {
  children: React.ReactNode;
};
type TContext = {
  showFormModal: boolean;
  setShowFormModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const ContactFormContext = createContext<TContext | null>(null);

const ContactFormProvider = ({ children }: Prop) => {
  const [showFormModal, setShowFormModal] = useState(false);

  return (
    <ContactFormContext.Provider value={{ showFormModal, setShowFormModal }}>
      {children}
    </ContactFormContext.Provider>
  );
};

export const useContactFormContext = () => {
  const context = useContext(ContactFormContext);
  if (!context) throw new Error("can't use context outside of provider");

  return context; 
};
export default ContactFormProvider;
