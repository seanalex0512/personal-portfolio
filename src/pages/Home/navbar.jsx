import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Function to scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Function to determine which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about', 'follow'];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section is in the viewport (with some buffer)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-links">
          <button
            onClick={() => scrollToSection('hero')}
            className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
            data-page="home"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            data-page="projects"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            data-page="about"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('follow')}
            className={`nav-link ${activeSection === 'follow' ? 'active' : ''}`}
            data-page="connect"
          >
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;