import { useState } from "react";
import { ThemeProvider } from "styled-components";

import {
  StyledNav,
  Hamburger,
  StyledBtn,
  Line,
  List,
  Link,
} from "./styled/elements.styled";
// import homeIcon from "../assets/home-icon-circle.svg";
import darkThemeIcon from "../assets/dark-theme.svg";
import lightThemeIcon from "../assets/light-theme.svg";

const LightTheme = {
  text: "#474444",
  body: "#F5F5F5",
  accent: "#171B20",
};

const DarkTheme = {
  text: "#D9D9D9",
  body: "#171B20",
  accent: "#F5F5F5",
};

const MainNav: React.FC = () => {
  const [theme, setTheme] = useState<boolean>(true);

  const logoColor = theme ? "#171B20" : "#F5F5F5";

  return (
    <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
      <StyledNav>
        <svg
          width="36"
          height="10"
          viewBox="0 0 36 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill={logoColor} />
          <circle cx="17.7778" cy="5" r="5" fill={logoColor} />
          <circle cx="30.5555" cy="5" r="5" fill={logoColor} />
        </svg>
        <StyledBtn
          onClick={() => {
            setTheme(!theme);
          }}
        >
          <img
            src={theme ? darkThemeIcon : lightThemeIcon}
            alt="color theme switcher"
          />
        </StyledBtn>

        <Hamburger>
          <Line />
          <Line />
        </Hamburger>

        <List>
          <Link>Home</Link>
          <Link>Work</Link>
          <Link>About</Link>
          <Link>Resume</Link>

          <img src={""} alt="" />
        </List>
      </StyledNav>
    </ThemeProvider>
  );
};

export default MainNav;
