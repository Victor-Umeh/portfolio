import styled from "styled-components";

interface Props {
  width: string;
  dis?: string;
}
export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  font-size: 1.3rem;

  @media (min-width: 768px) {
    width: 85%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 84%;
    gap: 1vw;
    font-size: 1.6rem;
  }
`;
export const StyledCanvas = styled.section<Props>`
  display: ${({ dis }) => dis};
  position: relative;
  font-family: "Poppins", sans-serif;
  height: 100%;
  z-index: 0;

  & .article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.text};
    padding: 2rem;
    overflow-y: auto;
  }
  & h3 {
    color: orangered;
  }

  @media (min-width: 768px) {
    display: block;
    height: 100%;
    width: ${({ width }) => (width ? width : "50%")};
    padding-block: 2rem;

    & p {
      margin-block: 10px;
    }

    & .swiper .swiper-wrapper {
      width: 100%;
    }
    & .swiper .swiper-slide span {
      position: absolute;
      bottom: 5rem;
      left: 50%;
      font-size: 4rem;
      color: white;
      opacity: 0.4;
      transform: translateX(-50%);
    }
    & .swiper .swiper-slide span:nth-child(2) {
      top: 2rem;
      font-weight: bold;
      font-size: 2rem;
      opacity: 0.5;
      letter-spacing: 0.8rem;
    }
  }
`;
