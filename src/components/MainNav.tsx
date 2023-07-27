import { StyledNav } from "./styled/nav.styled";
import { Button } from "./styled/button.styled";
import homeIcon from "../../public/home-icon-circle.svg";
import darkModeIcon from "../../public/moon-icon.svg";

const MainNav = () => {
  return (
    <StyledNav>
      <img src={homeIcon} alt="" />
      <Button style={{ marginLeft: "auto", marginRight: "1rem" }}>
        <img src={darkModeIcon} alt="" />
      </Button>
      <Button>
        <span
          style={{
            height: "3px",
            width: "4.4rem",
            backgroundColor: "#474444",
            display: "block",
            marginBottom: ".7rem",
          }}
        ></span>
        <span
          style={{
            height: "3px",
            width: "4.4rem",
            backgroundColor: "#474444",
            display: "block",
          }}
        ></span>
      </Button>
    </StyledNav>
  );
};

export default MainNav;
