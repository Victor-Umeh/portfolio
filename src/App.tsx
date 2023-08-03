import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./components/styled/global.styled";
import MainNav from "./components/MainNav";
import Home from "./pages/home";
import About from "./pages/about";
import Tools from "./pages/tools";
import Works from "./pages/Works";
import Resume from "./pages/resume";
import Container from "./components/Container";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <MainNav />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Works />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
            <Route path="/uses" element={<Tools />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
