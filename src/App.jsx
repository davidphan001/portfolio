import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";

const App = () => {
  const handleClick = (event, componentId) => {
    event.preventDefault();
    const component = document.getElementById(componentId);
    component.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Nav handleClick={handleClick} />
      <Header id="header" />
      <About id="about" />
      <Portfolio id="projects" />
      <Footer />
    </div>
  );
};

export default App;
