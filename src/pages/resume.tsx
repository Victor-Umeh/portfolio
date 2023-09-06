import resume from "/umeokoli-victor-onyeka.pdf";
import { StyledWrapper } from "../components/styled/elements.styled";
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
import { hardSkills, softSkills } from "../libs/skills.data";
import { resumeAnimationVariants } from "../libs/animationVariants.data";

const Resume = () => {
  return (
    <StyledWrapper style={{ marginBottom: "8rem" }}>
      <H1>RESUME</H1>
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
              <address>Victor Onyeka Umeokoli</address>
              <address>Jos, plateau state. Nigeria</address>
              <address>victorumeh196@gmail.com</address>
              <address>(+234) 8087411750</address>
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
            <h3>Objective: </h3>
            <p>
              Dedicated and passionate frontend developer, creating engaging,
              interactive and user-centric web applications. Adept at
              translating UI/UX designs into functional and responsive
              interfaces while staying up-to-date with the latest web
              development trends and technologies. Seeking a junior level
              frontend development role at a forward-thinking tech company.
            </p>
          </m.article>

          {/* Experience */}
          <article>
            <h3>Professional Experience:</h3>
            <m.div
              className="experience"
              variants={resumeAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={2}
            >
              <h4>Amono Digital Studios</h4>
              <span className="company">Photo Editor and Printer</span>
              <p>
                A photo printing company providing digital, photo enargements
                and printing services for photographers and individuals in jos,
                plateau state Nigeria. Jun 2018 - Dec 2020
              </p>
            </m.div>

            <m.div
              className="experience"
              variants={resumeAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={2.5}
            >
              <h4>Photo World</h4>
              <span className="company">Senior Photo Editor and Printer</span>
              <p>
                Jan 2021 - Feb 2022 A photograghy studio and photo printing
                company providing digital,photo shoot, photo enargements and
                printing services for photographers and individuals in jos,
                plateau state Nigeria.
              </p>
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
            <h3>Education:</h3>
            <p>
              Trinity Model Secondary School - Anambra - Jan 2012 - Dec 2013
            </p>
            <p>St Stephen Secondary School - Anambra - Jan 2014 - Dec 2015 </p>
            <p>
              New Dominion Comprehensive School - Plateau - Jun 2015 - Dec 2017
            </p>
          </m.article>
          <m.article
            variants={resumeAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={3.5}
          >
            <h3>Soft Skills:</h3>
            <ul>
              {softSkills.map((skill, index) => (
                <>
                  <li key={skill}>{skill}</li>
                  {softSkills.length - 1 === index ? null : <Divider />}
                </>
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
            <h3>Hard Skills:</h3>
            <ul>
              {hardSkills.map((skill, index) => (
                <>
                  <li key={skill}>{skill}</li>
                  {hardSkills.length - 1 === index ? null : <Divider />}
                </>
              ))}
            </ul>
          </m.article>
        </InnerWrap>
      </Wrapper>
    </StyledWrapper>
  );
};

export default Resume;
