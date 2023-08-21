//@ts-ignore
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import {
  HeroSection,
  HeroCard,
  CardHeader,
  AboutSect,
  SubText,
  AboutContent,
} from "../components/styled/home.styled";
import { ExploreBtn } from "../components/styled/ExploreBtn.styled";
import { NameTag } from "../components/styled/elements.styled";

const IntroCard = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "💖",
        "Adventurer.",
        "Tech Enthusiast.",
        "Aspiring Blockchain Dev.",
        "Open to learning new technologies.",
        "Frontend Dev.",
      ],
      typeSpeed: 120,
      startDelay: 4,
      showCursor: false,
      bindInputFocusEvents: true,
      backDelay: 1000,
      loop: true,
      loopCount: 2,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <CardHeader style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
        Hi, I am Victor
      </CardHeader>
      <CardHeader
        as="span"
        $fontf=" Antonio"
        style={{
          fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
          height: "2.5vh",
        }}
        ref={el}
      />
    </>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroCard
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1, originY: "top" }}
          transition={{
            delay: 1,
            duration: 1,
            type: "spring",
            damping: 20,
            stiffness: 150,
          }}
        >
          <IntroCard />
        </HeroCard>
      </HeroSection>

      <AboutSect>
        <AboutContent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            {
              // delay: 1,
              // duration: 0.5,
              // type: "spring",
              // damping: 20,
              // stiffness: 100,
            }
          }
        >
          <NameTag>Victor Onyeka Umeh.</NameTag>
          <SubText as="h2" $fontz="2.7rem" $marginTop="5rem" $fontw="bold">
            About
          </SubText>
          <SubText
            as="p"
            $fontz="1.4rem"
            $minWidth="20ch"
            $marginTop="1.1rem"
            color="000000"
          >
            Hi, I am a frontend developer, logo designer and photo editor in
            Jos, Nigeria. Eager to expand knowledge and skills
          </SubText>
          <ExploreBtn>Explore</ExploreBtn>
        </AboutContent>
      </AboutSect>
    </>
  );
};

export default Home;
