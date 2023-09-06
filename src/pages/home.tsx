//@ts-ignore
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  HeroSection,
  HeroCard,
  CardHeader,
  AboutSect,
  SubText,
  AboutContent,
} from "../components/styled/home.styled";
import { ExploreBtn } from "../components/styled/exploreBtn.styled";
import { NameTag } from "../components/styled/elements.styled";
import {
  HeroTextsVariants,
  HeroCardVariants,
  nameTagVariants,
} from "../libs/animationVariants.data";
// import i18next from "i18next";

const IntroCard = () => {
  const { t } = useTranslation();
  // console.log(HeroTextVariants);

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
      // startDelay: 0,
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
  const aboutHeaderVariants = HeroTextsVariants();
  const aboutTextVariants = HeroTextsVariants(1.8);
  const buttonVariants = HeroTextsVariants(2.3);

  return (
    <>
      <HeroSection>
        <HeroCard
          as={motion.section}
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
            as={motion.span}
            variants={nameTagVariants}
            initial="initial"
            animate="animate"
          >
            Victor Onyeka Umeh.
          </NameTag>
          <SubText
            as={motion.h2}
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
            as={motion.p}
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
              as={motion.button}
              variants={buttonVariants}
              initial="initial"
              animate="animate"
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
