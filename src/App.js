import React from 'react';
import Nav from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/Aboutme/Aboutme';
import Projects from './Components/Myprojects/Myprojects';
import Contact from './Components/Contactme/Contactme';
import './App.css';

const App = () => {
  const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
      <div className="App">
          <Nav scrollToSection={scrollToSection} />
          <Hero id="hero" />
          <About id="about" />
          <Projects id="projects" />
          <Contact id="contact" />
      </div>
  );
};

export default App;

