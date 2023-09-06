import { StyledCanvas, AboutWrapper } from "../components/styled/about.styled";
import { useTranslation } from "react-i18next";
import { m } from "framer-motion";
import Slider from "../components/slider";
import { aboutPageTextAnimationVariants as variants } from "../libs/animationVariants.data";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <AboutWrapper>
        <StyledCanvas width="55%">
          <m.div
            className="article"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            <div>
              <p>{t("aboutPage.description")}</p>
              <p>{t("aboutPage.brief")}</p>
              <p>{t("aboutPage.skills")}</p>
            </div>

            <div>
              <h3>{t("aboutPage.hobby")}</h3>
              <p>{t("aboutPage.hobbyDesc")}</p>
            </div>
            <p>{t("aboutPage.skillsList")}</p>
          </m.div>
        </StyledCanvas>
        <Slider />
      </AboutWrapper>
    </>
  );
};

export default About;
