import { useState } from "react";
import {
  StyledNav,
  Hamburger,
  ColorMode,
  Line,
} from "./styled/elements.styled";
import homeIcon from "../assets/home-icon-circle.svg";
import darkThemeIcon from "../assets/dark-theme.svg";
import lightThemeIcon from "../assets/light-theme.svg";

const MainNav: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <StyledNav>
      <img src={homeIcon} alt="Home icon" />

      <ColorMode
        onClick={() => {
          setTheme((prev) => (prev === "light" ? "dark" : "light"));
        }}
      >
        <img
          src={theme === "light" ? darkThemeIcon : lightThemeIcon}
          alt="color theme switcher"
        />
      </ColorMode>

      <Hamburger>
        <Line />
        <Line />
      </Hamburger>
    </StyledNav>
  );
};

export default MainNav;
