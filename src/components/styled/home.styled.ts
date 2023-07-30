import styled from "styled-components";
// import imgMobile from "../../assets/mobile-img.jpg";
import img from "../../assets/desktop-img.jpg";

interface HeaderProps {
  $fontw?: string;
  $fontz?: string;
  $fontf?: string;
  marginTop?: string;
  minWidth?: string;
  color?: string;
}

export const StyledPicture = styled.picture`
  width: 100%;
  height: 100vh;
`;

export const HeroSection = styled.section`
  background: url(${img}) 40% no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  /* min-width: 100%; */

  @media (min-width: 768px) {
    background-position: center 0%;
    min-height: calc(100vh - 8rem);
    width: 60%;
    justify-content: flex-start;
    padding-inline: 8%;
  }
`;

export const HeroCard = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-inline: 4.6rem;
  width: min(90%, 450px);
  height: 245px;
  min-height: 275px;
  border: 0.5px solid #474444;
  background: linear-gradient(
    218deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(242, 235, 171, 0.1) 10.47%,
    rgba(242, 235, 171, 0.1) 10.48%,
    rgba(215, 193, 0, 0.3) 76.96%,
    rgba(255, 0, 0, 0.76) 140%
  );
  backdrop-filter: blur(3px);
  z-index: 0;
  @media (min-width: 768px) {
  }
`;
export const CardHeader = styled.h1<HeaderProps>`
  text-align: center;
  font-family: ${({ $fontf = "anton" }) => $fontf}, sans-serif;
  color: #474444;
  /* color: ${({ theme }) => theme.heroText}; */
  font-size: ${({ $fontz = "4.2rem" }) => $fontz};
  font-weight: 400;
  text-transform: uppercase;

  @media (min-width: 768px) {
    text-align: left;
    margin-inline: 0;
    margin-top: 0;
  }
`;
export const SubText = styled(CardHeader)`
  font-weight: ${({ $fontw }) => $fontw};
  margin-top: ${({ marginTop }) => marginTop};
  min-width: ${({ minWidth }) => minWidth};
  color: ${({ color }) => color};
  margin-inline: auto;
  font-family: "poppins";
  @media (min-width: 768px) {
    margin-inline: 0;
    margin-top: 1rem;
  }
`;
export const AboutSect = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 90%;
  margin-inline: auto;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const AboutContent = styled.section`
  position: relative;
  width: 60%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;

  @media (min-width: 768px) {
    align-items: flex-start;
    padding-inline: 3rem;
  }
`;

export const NameTag = styled.span`
  position: absolute;
  top: 0.5rem;

  font-size: 1.1rem;
  font-family: "poppins";
  color: #474444;
  width: max-content;

  @media (min-width: 768px) {
    top: 0;
    right: 0;
  }
`;
