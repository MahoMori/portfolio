import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/about-me/AboutMe";
import Footer from "./components/footer/Footer";

import { MainContainer, LineContainer } from "./app.style";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />

      <MainContainer>
        <LineContainer>
          <div></div>
          <div></div>
          <div></div>
        </LineContainer>

        <Projects />
        <AboutMe />
      </MainContainer>

      <Footer />
    </div>
  );
}

export default App;
