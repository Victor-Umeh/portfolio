// import birdImgMobile from "../assets/mobile-img.jpg";
// import birdImgDesktop from "../assets/desktop-img.jpg";
import {
  HeroSection,
  HeroCard,
  CardHeader,
  AboutSect,
  SubText,
  NameTag,
  AboutContent,
} from "../components/styled/home.styled";
import { Main, StyledCta } from "../components/styled/elements.styled";

const Home: React.FC = () => {
  return (
    <Main>
      <HeroSection>
        <HeroCard>
          <CardHeader>Hi, I am Victor</CardHeader>
          <CardHeader as="span" $fontz="2rem" $fontf=" Antonio">
            Frontend.......
          </CardHeader>
        </HeroCard>
      </HeroSection>

      <AboutSect>
        <AboutContent>
          <NameTag>Victor Onyeka Umeh.</NameTag>
          <SubText as="h2" $fontz="2rem" marginTop="5rem" $fontw="bold">
            About
          </SubText>
          <SubText
            as="p"
            $fontz="1.4rem"
            minWidth="20ch"
            marginTop="1.1rem"
            color="000000"
          >
            Hi, I am a frontend developer, logo designer and photo editor in
            Jos, Nigeria. Eager to expand knowledge and skills
          </SubText>
        </AboutContent>
      </AboutSect>

      <StyledCta></StyledCta>
    </Main>
  );
};

export default Home;
