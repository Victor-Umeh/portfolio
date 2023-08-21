import React from "react";
import { StyledBtn } from "./styled/elements.styled";
import { motion } from "framer-motion";

const lngs = {
  en: { nativeName: "English" },
  fr: { nativeName: "French" },
  ig: { nativeName: "Igbo" },
  hau: { nativeName: "Hausa" },
  yo: { nativeName: "Yoruba" },
  sw: { nativeName: "Swahili" },
} as const;

// const dropdownVariants = {
//   visible: { scaleY: 1 },
// };
type TDropdown = "close" | "open";

const LanguageSelector = () => {
  const [showDropdown, setShowDropdown] = React.useState<TDropdown>("close");
  return (
    <StyledBtn
      auto={true}
      onMouseOver={() => {
        setShowDropdown("open");
      }}
      onMouseLeave={() => {
        setShowDropdown("close");
      }}
    >
      En
      <motion.div
        className="lang__wrapper"
        initial={{ opacity: 0, x: -200 }}
        animate={{
          originY: "top",
          opacity: showDropdown === "open" ? 1 : 0,
          x: 0,
        }}
        transition={{ duration: 0.2 }}
      ></motion.div>
    </StyledBtn>
  );
};

export default LanguageSelector;
