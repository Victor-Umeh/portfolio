import resume from "/umeokoli-victor-onyeka.pdf";
import { StyledWrapper } from "../components/styled/elements.styled";
import { HiOutlineFolderDownload } from "react-icons/hi";
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

const Resume = () => {
  return (
    <StyledWrapper style={{ marginBottom: "8rem" }}>
      <H1>RESUME</H1>
      <Wrapper>
        <InnerWrap>
          <Header>
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
          <article>
            <h3>Objective: </h3>
            <p>
              Dedicated and innovative frontend developer, creating engaging,
              interactive and user-centric web applications. Adept at
              translating UI/UX designs into functional and responsive
              interfaces while staying up-to-date with the latest web
              development trends and technologies. Seeking a junior level
              frontend development role at a forward-thinking tech company.
            </p>
          </article>

          {/* Experience */}
          <article>
            <h3>Professional Experience:</h3>
            <div className="experience">
              <h4>Amono Digital Studios</h4>
              <span className="company">Photo Editor and Printer</span>
              <p>
                A photo printing company providing digital, photo enargements
                and printing services for photographers and individuals in jos,
                plateau state Nigeria. Jun 2018 - Dec 2020
              </p>
            </div>

            <div className="experience">
              <h4>Photo World</h4>
              <span className="company">Senior Photo Editor and Printer</span>
              <p>
                Jan 2021 - Feb 2022 A photograghy studio and photo printing
                company providing digital,photo shoot, photo enargements and
                printing services for photographers and individuals in jos,
                plateau state Nigeria.
              </p>
            </div>
          </article>

          {/* Education */}
          <article>
            <h3>Education:</h3>
            <p>
              Trinity Model Secondary School - Anambra - Jan 2012 - Dec 2013
            </p>
            <p>St Stephen Secondary School - Anambra - Jan 2014 - Dec 2015 </p>
            <p>
              New Dominion Comprehensive School - Plateau - Jun 2015 - Dec 2017
            </p>
          </article>
          <article>
            <h3>Soft Skills:</h3>
            <ul>
              {softSkills.map((skill, index) => (
                <>
                  <li key={skill}>{skill}</li>
                  {softSkills.length - 1 === index ? null : <Divider />}
                </>
              ))}
            </ul>
          </article>
          <article>
            <h3>Hard Skills:</h3>
            <ul>
              {hardSkills.map((skill, index) => (
                <>
                  <li key={skill}>{skill}</li>
                  {hardSkills.length - 1 === index ? null : <Divider />}
                </>
              ))}
            </ul>
          </article>
        </InnerWrap>
      </Wrapper>
    </StyledWrapper>
  );
};

export default Resume;
