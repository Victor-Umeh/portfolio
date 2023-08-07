import { useState } from "react";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import {
  BiLogoGmail,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
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
  StyledText,
} from "./styled/elements.styled";
import darkThemeIcon from "../assets/dark-theme.svg";
import lightThemeIcon from "../assets/light-theme.svg";

interface Props {
  toggleTheme: (bool: unknown) => any;
}

const MainNav = ({ toggleTheme }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const theme = useTheme();

  const lightTheme = theme.name === "light-theme";
  const logoColor = lightTheme ? "#171B20" : "#F5F5F5";

  //toggle burger menu
  const handleToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
        onClick={() => toggleTheme((prev: unknown) => !prev)}
        auto={false}
      >
        <img
          src={lightTheme ? darkThemeIcon : lightThemeIcon}
          alt="color theme switcher"
        />
      </StyledBtn>

      <StyledText fz="1.6rem">
        <Link to={"/work"}>Works</Link>
        <span>
          <FaArrowRight />
        </span>
      </StyledText>

      <Hamburger onClick={handleToggle} open={isMenuOpen}>
        <Line istop={true} open={isMenuOpen} />
        <Line istop={false} open={isMenuOpen} />
      </Hamburger>

      <Menu open={isMenuOpen}>
        <StyledList onClick={handleToggle}>
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
            <BiLogoLinkedinSquare style={{ color: theme.colors.text }} />
          </SocialLink>
          <SocialLink href="">
            <IoLogoWhatsapp style={{ color: theme.colors.text }} />
          </SocialLink>
          <SocialLink href="">
            <BiLogoTwitter style={{ color: theme.colors.text }} />
          </SocialLink>
          <SocialLink href="">
            <BiLogoGmail style={{ color: theme.colors.text }} />
          </SocialLink>
        </SocialBlock>
        <img src={""} alt="" />
      </Menu>
    </StyledNav>
  );
};

export default MainNav;
