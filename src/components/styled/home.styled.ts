import styled from "styled-components";
import img from "../../assets/desktop-img.jpg";

interface HeaderProps {
  $fontw?: string;
  $fontz?: string;
  $fontf?: string;
  $marginTop?: string;
  $minWidth?: string;
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
  border: 0.5px solid ${({ theme }) => theme.colors.text};
  /* background: linear-gradient(
    218deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(242, 235, 171, 0.1) 10.47%,
    rgba(242, 235, 171, 0.1) 10.48%,
    rgba(215, 193, 0, 0.3) 76.96%,
    rgba(255, 0, 0, 0.76) 140%
  ); */
  background: linear-gradient(
    218deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(83, 234, 255, 0.1) 24.48%,
    rgba(86, 141, 138, 0.3) 73.96%,
    rgba(11, 39, 48, 0.76) 140%
  );
  backdrop-filter: blur(3px);
  z-index: 0;
`;
export const CardHeader = styled.h1<HeaderProps>`
  text-align: center;
  font-family: ${({ $fontf = "anton" }) => $fontf}, sans-serif;
  color: ${({ theme }) => theme.colors.text};
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
  margin-top: ${({ $marginTop: marginTop }) => marginTop};
  color: ${({ color }) => color};
  font-family: "poppins";
  text-transform: none;
  text-align: left;
  margin-right: auto;

  @media (min-width: 768px) {
    margin-inline: 0;
    margin-top: 1rem;
  }
`;
export const AboutSect = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin-inline: auto;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const AboutContent = styled.section`
  position: relative;
  width: min(90%, 450px);
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
