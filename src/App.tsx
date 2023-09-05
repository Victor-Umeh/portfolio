import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { light, dark } from "./components/styled/theme.styled";
import { Routes, Route } from "react-router-dom";
import ContactFormProvider from "./context/formModalContext";
import GlobalStyles from "./components/styled/global.styled";
import MainNav from "./components/MainNav";
import Home from "./pages/home";
import About from "./pages/about";
import Tools from "./pages/tools";
import Works from "./pages/Works";
import Resume from "./pages/resume";
import Container from "./components/Container";
import ToolsDetails from "./pages/toolsDetails";

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
      <MainNav toggleTheme={toggleTheme} initialTheme={initialTheme} />
      <ContactFormProvider>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Works />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
            <Route path="/uses" element={<Tools />}></Route>
            <Route path="/uses/:name" element={<ToolsDetails />}></Route>
          </Routes>
        </Container>
      </ContactFormProvider>
    </ThemeProvider>
  );
};

export default App;
