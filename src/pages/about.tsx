import { Main } from "../components/styled/elements.styled";
import { Contact } from "../components/styled/ContactBtn.styled";
import { StyledCanvas, AboutWrapper } from "../components/styled/About.styled";

const about = () => {
  return (
    <Main>
      <AboutWrapper>
        <StyledCanvas min="58vh" width="65%">
          <div className="article">
            <div>
              <p>Hey there,</p>
              <p>
                I'm Victor Umeokoli or Umeh for short living in Jos, plateau
                state Nigeria
              </p>
              <p>
                I am a frontend developer, logo & vector designer and an
                aspiring blockchain developer.
              </p>
            </div>

            <div>
              <h3>Hobbies</h3>
              <p>
                I love hiking, reading fictional and comic books, learning new
                things that catches my interest or that is required for a job.
                On my leisure time I watch soccer or animes.
              </p>
            </div>
            <p>
              My technical skills and tools I work with are HTML, CSS,
              tailwindcss, SASS, styled-components, git, Javascript, Typescript,
              Figma, Adobe XD, Photoshop, Illustrator, Lightroom and others
              .......
            </p>
          </div>
        </StyledCanvas>
        <StyledCanvas min="30vh" width="35%">
          <div className="article hobbies__img">
            <p>Hobbies</p>
          </div>
        </StyledCanvas>
      </AboutWrapper>
      <Contact pos={true}>Contact</Contact>
    </Main>
  );
};

export default about;
