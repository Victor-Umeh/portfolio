import React from "react";
import { StyledBtn } from "./styled/elements.styled";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type TData = {
  nativeName: string;
};
/*
Reference source---------------------------
######stackoverflow.com/questions/56568423/typescript-no-index-signature-with-a-parameter-of-type-string-was-found-on-ty
*/
type TLngs = {
  [key: string]: TData;
};
const lngs: TLngs = {
  en: { nativeName: "English" },
  fr: { nativeName: "French" },
  ig: { nativeName: "Igbo" },
  hau: { nativeName: "Hausa" },
  yo: { nativeName: "Yoruba" },
};

type TDropdown = {
  isMenuOpen: boolean;
};

const LanguageSelector = ({ isMenuOpen }: TDropdown) => {
  //i18next translation hook
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = React.useState("close");
  const openDropDown = showDropdown === "open" && !isMenuOpen;

  return (
    <StyledBtn
      as={"div"}
      style={{ marginLeft: "auto" }}
      onClick={() =>
        setShowDropdown((prev) => (prev === "close" ? "open" : "close"))
      }
    >
      Lang
      <motion.div
        className="lang__wrapper"
        initial={{
          scaleY: 0,
          y: -200,
        }}
        animate={{
          scaleY: openDropDown ? 1 : 0,
          y: openDropDown ? 0 : -200,
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 200,
          damping: 18,
        }}
      >
        {Object.keys(lngs).map((lng) => (
          <button
            className="lang__selector"
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </motion.div>
    </StyledBtn>
  );
};

export default LanguageSelector;
