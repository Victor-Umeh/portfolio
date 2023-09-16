import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { m } from "framer-motion";
import {
  HeroSection,
  HeroCard,
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
import { IntroCard } from "../components/IntroCard.tsx";

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
            $fontz="2rem"
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
            $fontz="1.3rem"
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
              style={{ marginRight: "auto" }}
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
