//@ts-ignore
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { m } from "framer-motion";
import {
  HeroSection,
  HeroCard,
  CardHeader,
  AboutSect,
  SubText,
  AboutContent,
} from "../components/styled/home.styled.ts";
import { ExploreBtn } from "../components/styled/exploreBtn.styled.ts";
import { NameTag } from "../components/styled/elements.styled.ts";
import {
  HeroTextsVariants,
  HeroCardVariants,
  nameTagVariants,
} from "../libs/animationVariants.data.ts";
// import i18next from "i18next";

const IntroCard = () => {
  const [lang, setLang] = useState(false);
  const { t, ready, i18n } = useTranslation();

  /*
  An i18next method, changing language has not effect, unless the browser is refreshed,
   the useState(lang) changes when i18n detects a language change, 
   rerendering the useEffect hook and typedJs library
   */
  i18n.on("languageChanged", () => {
    setLang(!lang);
  });

  function getTranslation() {
    if (!ready) return "Loading getTranslationlations....";

    return t("typed", {
      returnObjects: true,
    });
  }
  const typedData = Object.values(getTranslation());
  typedData.unshift("💖");

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: typedData,
      typeSpeed: 120,
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
  }, [lang]);

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
  const aboutHeaderVariants = HeroTextsVariants();
  const aboutTextVariants = HeroTextsVariants(1.8);
  const buttonVariants = HeroTextsVariants(2.3);

  return (
    <>
      <HeroSection>
        <HeroCard
          as={m.section}
          variants={HeroCardVariants}
          initial="initial"
          animate="animate"
        >
          <IntroCard />
        </HeroCard>
      </HeroSection>

      <AboutSect>
        <AboutContent>
          <NameTag
            as={m.span}
            variants={nameTagVariants}
            initial="initial"
            animate="animate"
          >
            Victor Onyeka Umeh.
          </NameTag>
          <SubText
            as={m.h2}
            $fontz="2.7rem"
            $marginTop="5rem"
            $fontw="bold"
            variants={aboutHeaderVariants}
            initial="initial"
            animate="animate"
          >
            {t("homePage.aboutText")}
          </SubText>
          <SubText
            as={m.p}
            $fontz="1.4rem"
            $minWidth="20ch"
            $marginTop="1.1rem"
            color="000000"
            variants={aboutTextVariants}
            initial="initial"
            animate="animate"
          >
            {t("homePage.heroText")}
          </SubText>

          <Link to="/work">
            <ExploreBtn
              as={m.button}
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="while"
              whileTap="while"
            >
              {t("homePage.exploreBtn")}
            </ExploreBtn>
          </Link>
        </AboutContent>
      </AboutSect>
    </>
  );
};

export default Home;
