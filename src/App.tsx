import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./components/styled/global.styled";
import MainNav from "./components/MainNav";
import Home from "./pages/home";
import About from "./pages/about";
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
            <Route path="/test" element={<Container />}></Route>
            <Route path="/work" element={<Container />}></Route>
            <Route path="/resume" element={<Container />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
