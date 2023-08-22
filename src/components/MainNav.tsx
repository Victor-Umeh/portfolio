import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  Line,
  Menu,
  StyledList,
  StyledLink,
  SocialLink,
  SocialBlock,
  StyledText,
  StyledBtn,
} from "./styled/elements.styled";
import darkThemeIcon from "../assets/dark-theme.svg";
import lightThemeIcon from "../assets/light-theme.svg";
import logo from "/logo.svg";
import LanguageSelector from "./LanguageSelector";
import "../i18n";

interface Props {
  toggleTheme: (initialTheme: boolean) => any;
  initialTheme: boolean;
}

const MainNav = ({ toggleTheme, initialTheme }: Props) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const theme = useTheme();

  const lightTheme = theme.name === "light-theme";

  //toggle burger menu
  const handleToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledNav>
      <Link to={"/"} style={{ zIndex: -1 }}>
        <img src={logo} alt="" />
      </Link>

      <LanguageSelector />

      <StyledBtn onClick={() => toggleTheme(!initialTheme)} auto={false}>
        <img
          src={lightTheme ? darkThemeIcon : lightThemeIcon}
          alt="color theme switcher"
        />
      </StyledBtn>

      <StyledText fz="1.6rem">
        <Link to={"/work"}>{t("nav.works")}</Link>
        <span>
          <FaArrowRight />
        </span>
      </StyledText>

      <Hamburger onClick={handleToggle} open={isMenuOpen}>
        <Line istop={"top"} open={isMenuOpen} />
        <Line istop={"bottom"} open={isMenuOpen} />
      </Hamburger>

      <Menu open={isMenuOpen}>
        <StyledList onClick={handleToggle}>
          <StyledLink>
            <Link to={"/"}>{t("nav.home")}</Link>
          </StyledLink>
          <StyledLink>
            <Link to={"/resume"}>{t("nav.resume")}</Link>
          </StyledLink>
          <StyledLink>
            <Link to={"/work"}>{t("nav.works")}</Link>
          </StyledLink>
          <StyledLink>
            <Link to={"/about"}>{t("nav.about")}</Link>
          </StyledLink>
          <StyledLink>
            <Link to={"/uses"}>{t("nav.tools")}</Link>
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
