import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/about-me/AboutMe";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <Projects />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
