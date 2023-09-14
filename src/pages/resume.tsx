import resume from "/umeokoli-victor-onyeka.pdf";
import { Fragment } from "react";
import { StyledWrapper } from "../components/styled/elements.styled";
import { useTranslation } from "react-i18next";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { m } from "framer-motion";
import {
  H1,
  Wrapper,
  InnerWrap,
  Header,
  Address,
  DownloadBtn,
  Divider,
} from "../components/styled/resume.styled";
// import { hardSkills, softSkills } from "../libs/skills.data";
import { resumeAnimationVariants } from "../libs/animationVariants.data";

type Tskills = {
  softSkills: any;
  hardSkills: any;
};
const Resume = () => {
  //https://stackoverflow.com/questions/71449362/how-to-iterate-i18n-array-of-objects-in-react-app
  //reading from language json files
  const { t, ready } = useTranslation();

  //Creates a suspense or lazy loads translations from i8next
  if (!ready) return "Loading translations....";

  //destructuring returned obj from i8next, unable to access deeply nested objects
  const { softSkills, hardSkills }: Tskills = t("resumePage.skills", {
    returnObjects: true,
  });
  //accessing array of from translation json file
  const _18n_hardSkills = hardSkills.skills;
  const _18n_softSkills = softSkills.skills;

  return (
    <StyledWrapper style={{ marginBottom: "8rem" }}>
      <H1>{t("resumePage.header")}</H1>
      <Wrapper>
        <InnerWrap>
          <Header
            as={m.header}
            variants={resumeAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Address>
              <address>{t("resumePage.address.1")}</address>
              <address>{t("resumePage.address.2")}</address>
              <address>{t("resumePage.address.3")}</address>
              <address>{t("resumePage.address.4")}</address>
            </Address>
            <DownloadBtn href={resume} download={resume}>
              <span>
                <HiOutlineFolderDownload />
              </span>
            </DownloadBtn>
          </Header>
          <m.article
            variants={resumeAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
          >
            <h3>{t("resumePage.objective.header")}: </h3>
            <p>{t("resumePage.objective.body")}</p>
          </m.article>

          {/* Experience */}
          <article>
            <h3>{t("resumePage.experience.header")}:</h3>
            <m.div
              className="experience"
              variants={resumeAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={2}
            >
              <h4>{t("resumePage.experience.section1.comp")}</h4>
              <span className="company">
                {t("resumePage.experience.section1.role")}
              </span>
              <p>{t("resumePage.experience.section1.text")}</p>
            </m.div>

            <m.div
              className="experience"
              variants={resumeAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={2.5}
            >
              <h4>{t("resumePage.experience.section2.comp")}</h4>
              <span className="company">
                {t("resumePage.experience.section2.role")}
              </span>
              <p>{t("resumePage.experience.section2.text")}</p>
            </m.div>
          </article>

          {/* Education */}
          <m.article
            variants={resumeAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={3}
          >
            <h3>{t("resumePage.education.header")}:</h3>
            <p>{t("resumePage.education.details.1")}</p>
            <p>{t("resumePage.education.details.2")}</p>
            <p>{t("resumePage.education.details.3")}</p>
          </m.article>
          <m.article
            variants={resumeAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={3.5}
          >
            <h3>{t("resumePage.skills.softSkills.header")}:</h3>
            <ul>
              {_18n_softSkills.map((skill: string, index: number) => (
                <Fragment key={skill}>
                  <li>{skill}</li>
                  {softSkills.length - 1 === index ? null : <Divider />}
                </Fragment>
              ))}
            </ul>
          </m.article>
          <m.article
            variants={resumeAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={4}
          >
            <h3>{t("resumePage.skills.hardSkills.header")}:</h3>
            <ul>
              {_18n_hardSkills.map((skill: string, index: number) => (
                <Fragment key={skill}>
                  <li key={skill}>{skill}</li>
                  {hardSkills.length - 1 === index ? null : <Divider />}
                </Fragment>
              ))}
            </ul>
          </m.article>
        </InnerWrap>
      </Wrapper>
    </StyledWrapper>
  );
};

export default Resume;
