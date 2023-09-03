import resume from "/resume.pdf";
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
              Dedicated and innovative Frontend Developer with over 10 years of
              experience creating engaging and user-centric web applications.
              Adept at translating UI/UX designs into functional and responsive
              interfaces while staying up-to-date with the latest web
              development trends and technologies. Seeking a challenging
              Frontend Development role at a forward-thinking tech company.
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
              Bachelor of Science in Computer Science University Name] | City,
              State] | Year of Graduation] Relevant Coursework: - Advanced Web
              Development - User Interface Design - Software Engineering
              Principles - Data Structures and Algorithms
            </p>
          </article>
          <article>
            <h3>Soft Skills:</h3>
            <ul>
              <li>Interpersonal Skills</li>
              <Divider />
              <li>Attention to Detail</li>
              <Divider />
              <li> Problem Solving</li>
              <Divider />
              <li>Communication</li>
              <Divider />
              <li>Team Work</li>
              <Divider />
              <li>Adaptability</li>
            </ul>
          </article>
          <article>
            <h3>Hard Skills:</h3>
            <ul>
              <li>HTMl,</li>
              <Divider />
              <li>CSS,</li>
              <Divider />
              <li>Responsive Design,</li>
              <Divider />
              <li>Tailwindcss,</li>
              <Divider />
              <li>SASS,</li>
              <Divider />
              <li>MUI,</li>
              <Divider />
              <li>Styled Components,</li>
              <Divider />
              <li>Javascript,</li>
              <Divider />
              <li>Typescript,</li>
              <Divider />
              <li>React,</li>
              <Divider />
              <li>Redux-Toolkit,</li>
              <Divider />
              <li>Context API,</li>
              <Divider />
              <li>Figma,</li>
              <Divider />
              <li>Adobe XD,</li>
              <Divider />
              <li>Git,</li>
              <Divider />
              <li>Github,</li>
              <Divider />
              <li>Adobe Photoshop.</li>
            </ul>
          </article>
        </InnerWrap>
      </Wrapper>
    </StyledWrapper>
  );
};

export default Resume;
