// import birdImgMobile from "../assets/mobile-img.jpg";
// import birdImgDesktop from "../assets/desktop-img.jpg";
import {
  HeroSection,
  HeroCard,
  CardHeader,
} from "../components/styled/pages.styled";
import { Main } from "../components/styled/elements.styled";

const Home: React.FC = () => {
  return (
    <Main>
      <HeroSection>

        <HeroCard>
          <CardHeader>HI, am Victor</CardHeader>
          <CardHeader as="span" $fontz="2rem" $fontf=" Antonio">
            Frontend.......
          </CardHeader>
        </HeroCard>
        
      </HeroSection>
    </Main>
  );
};

export default Home;
