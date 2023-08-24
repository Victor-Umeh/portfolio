import soccer from "/images/soccer.jpg";
import { StyledWrapper } from "../components/styled/elements.styled";
import { HiOutlineFolderDownload } from "react-icons/hi";

const Styled = () => {
  return (
    <StyledWrapper style={{ paddingBottom: "6rem" }}>
      <h2 className="resume__header">RESUME</h2>
      <div className="resume__context">
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          <header style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "3rem",
                lineHeight: "33px",
              }}
            >
              <address> Your Full Name </address>
              <address>Your Address</address>
              <address>City, State, ZIP Code</address>
              <address>Your Phone Number</address>
              <address>Your Email Address </address>
              <address>LinkedIn Profile URL</address>
            </div>
            <a
              className="download"
              href={soccer}
              download={soccer}
              style={{
                width: "50px",
                height: "50px",
                fontSize: "3.5rem",
                color: "black",
              }}
            >
              <span>
                <HiOutlineFolderDownload />
              </span>
            </a>
          </header>
          <article>
            <h3>Objective: </h3>
            Dedicated and innovative Frontend Developer with over 10 years of
            experience creating engaging and user-centric web applications.
            Adept at translating UI/UX designs into functional and responsive
            interfaces while staying up-to-date with the latest web development
            trends and technologies. Seeking a challenging Frontend Development
            role at a forward-thinking tech company.
          </article>
          <article>
            <h3>Professional Experience:</h3>
            Senior Frontend Developer Company Name] | City, State] | Dates] -
            Collaborated with cross-functional teams to design, develop, and
            maintain dynamic web applications, enhancing user experience and
            interface usability. - Implemented modern frontend technologies such
            as React, TypeScript, and CSS-in-JS to create performant and
            visually appealing user interfaces. - Led efforts in optimizing
            website performance, resulting in a 30% decrease in page load times
            and improved user engagement. - Contributed to the creation of a
            reusable component library, streamlining development processes and
            ensuring consistency across applications. - Actively participated in
            code reviews, mentoring junior developers, and providing technical
            guidance to ensure code quality and best practices. Frontend
            Developer Company Name] | City, State] | Dates] - Translated UI/UX
            designs and wireframes into responsive and interactive web pages
            using HTML, CSS, and JavaScript. - Implemented RESTful API
            integrations to fetch and display dynamic content, enhancing user
            engagement and interactivity. - Collaborated closely with the design
            team to refine user interfaces, iterate on designs, and ensure a
            seamless user experience. - Utilized version control systems (Git)
            to manage codebase and collaborate with team members effectively. -
            Participated in regular stand-up meetings and project planning
            sessions to ensure alignment with project goals and timelines.
          </article>
          <article>
            <h3>Education:</h3>
            Bachelor of Science in Computer Science University Name] | City,
            State] | Year of Graduation] Relevant Coursework: - Advanced Web
            Development - User Interface Design - Software Engineering
            Principles - Data Structures and Algorithms
          </article>
          <article>
            <h3>Skills:</h3>- Languages: HTML, CSS, JavaScript, TypeScript -
            Frameworks: React, Redux - CSS-in-JS: Styled Components, Emotion -
            Version Control: Git - Frontend Tooling: Webpack, Babel - Responsive
            Design - Cross-Browser Compatibility - UI/UX Design Collaboration -
            Problem Solving and Debugging - Strong Communication Skills
          </article>

          <span>
            Projects:{" "}
            <a className="link" href="#">
              Link to Your Portfolio Website
            </a>
          </span>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Styled;
