import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { light, dark } from "./components/styled/theme.styled";
import { Routes, Route } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import ContactFormProvider from "./context/formModalContext";
import GlobalStyles from "./components/styled/global.styled";
import MainNav from "./components/MainNav";
import Container from "./components/Container";
import { Home, About, Tools, Works, Resume, ToolDetails } from "./pages";
import ContactBtn from "./components/ContactBtn";

const App = (): React.ReactNode => {
  const [initialTheme, setInitilaTheme] = useState<boolean>(true);
  const theme = initialTheme ? light : dark;

  useEffect(() => {
    const currentTheme = localStorage.getItem("current-theme");

    if (currentTheme) {
      const storedTheme = JSON.parse(currentTheme);
      setInitilaTheme(storedTheme);
    }
  }, []);

  const toggleTheme = (bool: any) => {
    setInitilaTheme(bool);
    localStorage.setItem("current-theme", JSON.stringify(bool));
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LazyMotion features={domAnimation}>
        <MainNav toggleTheme={toggleTheme} initialTheme={initialTheme} />
        <ContactFormProvider>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Works />}></Route>
              <Route path="/resume" element={<Resume />}></Route>
              <Route path="/uses" element={<Tools />}></Route>
              <Route path="/uses/:name" element={<ToolDetails />}></Route>
            </Routes>
          </Container>
          <ContactBtn />
        </ContactFormProvider>
      </LazyMotion>
    </ThemeProvider>
  );
};

export default App;
