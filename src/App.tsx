import { ThemeProvider } from "styled-components";
// import { ThemeProps } from "./components/styled/theme.styled";
import { useState } from "react";
import { light, dark } from "./components/styled/theme.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./components/styled/global.styled";
import MainNav from "./components/MainNav";
import Home from "./pages/home";
import About from "./pages/about";
import Tools from "./pages/tools";
import Works from "./pages/Works";
import Resume from "./pages/resume";
import Container from "./components/Container";

// interface Props extends ThemeProps {
//   setInitialTheme?: React.Dispatch<React.SetStateAction<Props>>;
// }

const App = (): React.ReactNode => {
  const [initialTheme, setInitilaTheme] = useState<boolean>(true);
  const theme = initialTheme ? dark : light;

  const toggleTheme = (bool: any) => setInitilaTheme(bool);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainNav toggleTheme={toggleTheme} />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Works />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
            <Route path="/uses" element={<Tools />}></Route>
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
