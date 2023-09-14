import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import useNavMenuAnimation from "../libs/useNavMenuAnimation";
import { FaArrowRight } from "react-icons/fa";
import {
  StyledNav,
  Hamburger,
  Line,
  Menu,
  StyledList,
  StyledLink,
  StyledText,
  StyledBtn,
} from "./styled/elements.styled";
import { m } from "framer-motion";
import darkThemeIcon from "../assets/dark-theme.svg";
import lightThemeIcon from "../assets/light-theme.svg";
import logo from "/logo.svg";
import LanguageSelector from "./LanguageSelector";
import "../i18n";
import PreviewImage from "./PreviewImage";
import about from "/images/about.jpg";
import home from "/images/home.jpg";
import resume from "/images/resume.jpg";
import space from "/images/space.jpg";
import work from "/images/work.jpg";

interface Props {
  toggleTheme: (initialTheme: boolean) => any;
  initialTheme: boolean;
}

const images = [home, resume, work, about, space];
const dropdownLinks = [
  { to: "/", text: "nav.home" },
  { to: "/resume", text: "nav.resume" },
  { to: "/work", text: "nav.works" },
  { to: "/about", text: "nav.about" },
  { to: "/uses", text: "nav.tools" },
] as const;

const MainNav = ({ toggleTheme, initialTheme }: Props) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scope = useNavMenuAnimation(isMenuOpen);
  const [currentImage, setCurrentImage] = useState<string | undefined>(
    images[0]
  );
  const theme = useTheme();

  const lightTheme = theme.name === "light-theme";

  //toggle burger menu
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledNav>
      <Link to={"/"} style={{ zIndex: -1 }}>
        <img src={logo} alt="" />
      </Link>

      <LanguageSelector isMenuOpen={isMenuOpen} />

      <StyledBtn onClick={() => toggleTheme(!initialTheme)}>
        <img
          src={lightTheme ? darkThemeIcon : lightThemeIcon}
          alt="color theme switcher"
        />
      </StyledBtn>

      <StyledText>
        <Link to={"/work"} style={{ fontSize: "initial" }}>
          {t("nav.works")}
        </Link>
        <span>
          <FaArrowRight />
        </span>
      </StyledText>

      <Hamburger onClick={handleToggle} $open={isMenuOpen}>
        <Line $istop={"top"} $open={isMenuOpen} />
        <Line $istop={"bottom"} $open={isMenuOpen} />
      </Hamburger>

      <Menu $open={isMenuOpen} ref={scope}>
        {/* Nav Links */}
        <StyledList onClick={handleToggle} as="ul">
          {dropdownLinks.map((link, index) => (
            <StyledLink
              as={m.li}
              key={link.text}
              onMouseOver={() => setCurrentImage(images[index])}
              onMouseLeave={() => setCurrentImage(undefined)}
              whileHover={{ scale: 1.15 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            >
              <Link to={link.to}>{t(link.text)}</Link>
            </StyledLink>
          ))}
        </StyledList>

        <PreviewImage
          image={currentImage}
          alt={""}
          currState={currentImage}
          setCurrentImage={setCurrentImage}
        />
      </Menu>
    </StyledNav>
  );
};

export default MainNav;
