import React from 'react';
import './navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-links">
          <button
            onClick={() => scrollToSection('hero')}
            className="nav-link"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="nav-link"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="nav-link"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('follow')}
            className="nav-link"
          >
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;