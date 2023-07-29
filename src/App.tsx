import GlobalStyles from "./components/styled/global.styled";
import MainNav from "./components/MainNav";
import Home from "./pages/home";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MainNav />
      <Home />
    </>
  );
};

export default App;
