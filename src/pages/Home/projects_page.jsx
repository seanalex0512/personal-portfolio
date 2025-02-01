import React, { useState } from 'react';
import './projects_page.css';
import screenshotMac from '../../Assets/screenshotmac.jpg';

const projects = [
  {
    title: 'Project One',
    description: 'A powerful tool designed to enhance productivity and efficiency.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'An innovative solution for seamless collaboration and communication.',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A sleek and modern approach to digital content management.',
    link: '#',
  },
];

const ProjectsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="projects-page">
      <h1 className="projects-title">Sharp as a Mac.</h1>
      <p className="projects-subtitle">
        <strong>Tens of thousands of apps are optimized</strong> to unlock the full capabilities of technology — 
        from your go-to productivity apps to your favorite tools and hardest working pro apps.
      </p>
      <div className="projects-slider">
        <button className="nav-button left" onClick={handlePrev}>&#8249;</button>
        <div className="project-main">
          <img src={screenshotMac} alt="Project Screenshot" className="project-image" />
          <h2 className="project-title">{projects[currentIndex].title}</h2>
          <p className="project-description">{projects[currentIndex].description}</p>
          <a href={projects[currentIndex].link} className="project-link">Learn more</a>
        </div>
        <button className="nav-button right" onClick={handleNext}>&#8250;</button>
      </div>
    </div>
  );
};

export default ProjectsPage;