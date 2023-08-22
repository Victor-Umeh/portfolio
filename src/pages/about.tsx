import { StyledCanvas, AboutWrapper } from "../components/styled/About.styled";
import { useTranslation } from "react-i18next";
import Slider from "../components/slider";

const about = () => {
  const { t } = useTranslation();
  return (
    <>
      <AboutWrapper>
        <StyledCanvas width="55%">
          <div className="article">
            <div>
              <p>{t("aboutPage.description")}</p>
              <p>{t("aboutPage.brief")}</p>
              <p>{t("aboutpage.skills")}</p>
            </div>
            <div>
              <h3>{t("aboutPage.hobby")}</h3>
              <p>{t("aboutPage.hobbyDesc")}</p>
            </div>
            <p>{t("aboutPage.skillsList")}</p>
          </div>
        </StyledCanvas>
        <Slider />
      </AboutWrapper>
    </>
  );
};

export default about;
