//@ts-ignore
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
// import i18next from "i18next";

const IntroCard = () => {
  const { t } = useTranslation();

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // const paths = ["t1", "t2", "t3", "t4", "t5"];
  // const typedItems = paths.map((path) => {
  //   const items = i18next.t("typed", path);
  //   return items;
  // });
  // console.log(typedItems);

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
      loopCount: 1,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <CardHeader style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
        {t("homePage.greet")}
        Victor
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
  const { t } = useTranslation();
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
        <AboutContent initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <NameTag>Victor Onyeka Umeh.</NameTag>
          <SubText as="h2" $fontz="2.7rem" $marginTop="5rem" $fontw="bold">
            {t("homePage.aboutText")}
          </SubText>
          <SubText
            as="p"
            $fontz="1.4rem"
            $minWidth="20ch"
            $marginTop="1.1rem"
            color="000000"
          >
            {t("homePage.heroText")}
          </SubText>

          <Link to="/work">
            <ExploreBtn>{t("homePage.exploreBtn")}</ExploreBtn>
          </Link>
        </AboutContent>
      </AboutSect>
    </>
  );
};

export default Home;
