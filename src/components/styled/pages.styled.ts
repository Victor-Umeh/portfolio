import styled from "styled-components";
// import imgMobile from "../../assets/mobile-img.jpg";
import img from "../../assets/desktop-img.jpg";

export const StyledPicture = styled.picture`
  width: 100%;
  height: 100vh;
`;

export const HeroSection = styled.section`
  background: url(${img}) 40% no-repeat;
  background-size: cover;
  display: grid;
  place-items: center;
  min-height: 50vh;

  @media (min-width: 768px) {
    background-position: right 0%;  
    min-height: calc(100vh - 8rem);
    width: 60%;
  }
`;

export const HeroCard = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  max-width: 500px;
  height: 245px;
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
`;
export const CardHeader = styled.h1<{ $fontz?: string; $fontf?: string }>`
  text-align: center;
  font-family: ${({ $fontf = "anton" }) => $fontf}, sans-serif;
  color: #474444;
  font-size: ${({ $fontz = "4.2rem" }) => $fontz};
  font-weight: 400;
  text-transform: uppercase;
`;

export const AboutSect = styled.section`
  text-align: center;
`
