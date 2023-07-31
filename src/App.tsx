import GlobalStyles from "./components/styled/global.styled";
import MainNav from "./components/MainNav";
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MainNav />
      {/* <Home /> */}
      <About />
    </>
  );
};

export default App;
