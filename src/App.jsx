import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useRefs } from "./Refs";

const App = () => {
  const { homeRef, contactRef, skillsRef, aboutRef } = useRefs();

  const pages = [
    { Page: "Home", ref: homeRef },
    { Page: "Skills", ref: skillsRef },
    { Page: "About Me", ref: aboutRef },
    { Page: "Contact US", ref: contactRef },
  ];

  return (
    <>
      <Navbar pages={pages} />
      <Hero homeRef={homeRef} />
      <Skills skillsRef={skillsRef} />
      <About aboutRef={aboutRef} />
      <Projects />
      <Reviews />
      <Contact contactRef={contactRef} />
      <Footer pages={pages} />
    </>
  );
};

export default App;
