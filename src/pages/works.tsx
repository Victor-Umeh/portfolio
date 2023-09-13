import {
  ProjectWrapper,
  ProjectCard,
} from "../components/styled/elements.styled";

const Works = () => {
  return (
    <>
      <ProjectWrapper>
        <h2>Works</h2>
        <div className="project__wrapper">
          <ProjectCard>
            <div className="project__context">
              <h3>Project Name</h3>
              <p className="project__desc">Project desc</p>
              <p>technologies used</p>
            </div>
            <span className="links">
              <a href={""}>Live</a>
              <a href={""}>GitHub</a>
            </span>
          </ProjectCard>
        </div>
      </ProjectWrapper>
    </>
  );
};

export default Works;
