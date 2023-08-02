import {
  HeroSection,
  HeroCard,
  CardHeader,
  AboutSect,
  SubText,
  AboutContent,
} from "../components/styled/home.styled";
import { ExploreBtn } from "../components/styled/ExploreBtn.styled";
import { Contact } from "../components/styled/ContactBtn.styled";
import { Main, NameTag } from "../components/styled/elements.styled";

const Home: React.FC = () => {
  return (
    <Main>
      <HeroSection>
        <HeroCard>
          <CardHeader>Hi, I am Victor</CardHeader>
          <CardHeader
            as="span"
            $fontf=" Antonio"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            Frontend.......
          </CardHeader>
        </HeroCard>
      </HeroSection>

      <AboutSect>
        <AboutContent>
          <NameTag>Victor Onyeka Umeh.</NameTag>
          <SubText as="h2" $fontz="2.7rem" marginTop="5rem" $fontw="bold">
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

          <ExploreBtn>Explore</ExploreBtn>
        </AboutContent>
      </AboutSect>
      <Contact pos={true}>Contact</Contact>
    </Main>
  );
};

export default Home;
