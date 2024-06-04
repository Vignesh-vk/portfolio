import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Services from "./components/Services";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Bot /> */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      {/* <Hireme /> */}
      <Services />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
