import "./App.css";
import AboutMe from "./components/AboutMe";
import Starter from "./components/Starter";
import React, { useEffect } from 'react';
import Projects from "./components/Projects";
import Service from "./components/Service";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import './CssFile/Navbar.css'

function App() {

  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
    window.addEventListener("scroll", reveal);
    // On component mount (initial load), add the attribute or class
    const element = document.querySelector('.App');
    if (element) {
      element.setAttribute('transition-style', 'in:circle:bottom-right');
    }

  }, []);

  return (
    
    <div className="App">
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <h4 style={{ letterSpacing: '3px' }}>Portfolio</h4>
    </a>
    <button style={{ outline:'none' ,border:'none',}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#aboutme">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contactus">Contact us</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    
    <div id="starter">

      <Starter />
      </div>
      <div  id="aboutme" className='reveal fade-bottom'>

      <AboutMe />
      </div>
      <div className='reveal fade-bottom' id="projects">

      <Projects />
      </div>

      <div id="skills" className='reveal fade-bottom'>

      <Service  id="services"/>
      </div>
      <div id="contactus" className='reveal fade-bottom'>

      <Contact id="contact" />
      </div>

      <div id="footer" className='reveal fade-bottom'>

      <Footer />
      </div>
     


    </div>
  );
}

export default App;
