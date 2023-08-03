import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  BiLogoGmail,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  StyledNav,
  Hamburger,
  StyledBtn,
  Line,
  Menu,
  StyledList,
  StyledLink,
  SocialLink,
  SocialBlock,
} from "./styled/elements.styled";
// import homeIcon from "../assets/home-icon-circle.svg";
import darkThemeIcon from "../assets/dark-theme.svg";
import lightThemeIcon from "../assets/light-theme.svg";

const LightTheme = {
  text: "#474444",
  body: "#FCFBF8",
  accent: "#171B20",
  heroText: "#474444",
};

const DarkTheme = {
  text: "#D9D9D9",
  body: "#171B20",
  heroText: "#474444",
  accent: "#F5F5F5",
};

const MainNav: React.FC = () => {
  const [theme, setTheme] = useState<boolean>(true);

  const logoColor = theme ? "#171B20" : "#F5F5F5";
  const isLight = theme ? LightTheme : DarkTheme;

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
        <StyledBtn auto={true}>En</StyledBtn>
        <StyledBtn
          onClick={() => {
            setTheme(!theme);
          }}
          auto={false}
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

        <Menu>
          <StyledList>
            <StyledLink>
              <Link to={"/"}>Home</Link>
            </StyledLink>
            <StyledLink>
              <Link to={"/work"}>Work</Link>
            </StyledLink>
            <StyledLink>
              <Link to={"/about"}>About</Link>
            </StyledLink>
            <StyledLink>
              <Link to={"/resume"}>Resume</Link>
            </StyledLink>
          </StyledList>

          <SocialBlock as="div">
            <SocialLink href="">
              <BiLogoLinkedinSquare style={{ color: isLight.text }} />
            </SocialLink>
            <SocialLink href="">
              <IoLogoWhatsapp style={{ color: isLight.text }} />
            </SocialLink>
            <SocialLink href="">
              <BiLogoTwitter style={{ color: isLight.text }} />
            </SocialLink>
            <SocialLink href="">
              <BiLogoGmail style={{ color: isLight.text }} />
            </SocialLink>
          </SocialBlock>
          <img src={""} alt="" />
        </Menu>
      </StyledNav>
    </ThemeProvider>
  );
};

export default MainNav;
