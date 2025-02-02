import React, { useEffect, useState } from 'react';
import './home_page.css';
import AboutPage from './about_page';
import ProjectsPage from './projects_page';
import Navbar from './navbar';
import FollowMe from './follow_me';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isWhite, setIsWhite] = useState(false); // State to track logo color

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      const projectsSectionRect = projectsSection.getBoundingClientRect();

      // Change logo color to white when the projects section is in view
      if (projectsSectionRect.top <= 0 && projectsSectionRect.bottom >= 0) {
        setIsWhite(true);
      } else {
        setIsWhite(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-container">
      {/* Developer logo in top left corner */}
      <div className="logo-container">
        <div className={`developer-logo ${isWhite ? 'white-logo' : ''}`}>
          <span className="logo-text">{'</>'}</span>
        </div>
      </div>

      <Navbar />
    
      {/* Enhanced Hero Section */}
      <section id="hero" className="main-content center-text">
        <div className="hero-background">
          <div className="animated-shapes">
            <div className="shape shape1"></div>
            <div className="shape shape2"></div>
            <div className="shape shape3"></div>
          </div>
        </div>
      
        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="greeting">Hi 👋, I am</h2>
          <h1 className="title">Sean Alexander </h1>
          <div className="glow-text">Software Developer</div>
        
          <button className="cta-button">View My Work</button>
        </div>
      </section>

      <section id="about">
        <AboutPage />
      </section>

      <section id="projects">
        <ProjectsPage />
      </section>

      <section id="follow">
        <FollowMe />
      </section>
    </div>
  );
}
      
export default HomePage;