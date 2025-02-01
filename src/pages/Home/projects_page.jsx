import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './projects_page.css';

// Import Images
import screenshotMac from '../../Assets/screenshotmac.jpg';
import screenshotMac2 from '../../Assets/screenshot2.jpg';
import screenshotMac3 from '../../Assets/screenshot3.jpg';

const projects = [
  {
    title: 'Project One',
    description: 'A powerful tool designed to enhance productivity and efficiency.',
    link: '#',
    image: screenshotMac,
  },
  {
    title: 'Project Two',
    description: 'An innovative solution for seamless collaboration and communication.',
    link: '#',
    image: screenshotMac2,
  },
  {
    title: 'Project Three',
    description: 'A sleek and modern approach to digital content management.',
    link: '#',
    image: screenshotMac3,
  },
];

const ProjectsPage = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const flickityInstance = new Flickity(carouselRef.current, {
      wrapAround: false,
      cellAlign: 'center',
      contain: true,
      prevNextButtons: true,
      pageDots: false,
      selectedAttraction: 0.02,
      friction: 0.28,
      on: {
        settle: function () {
          // Get all slides
          const slides = carouselRef.current.querySelectorAll('.gallery-cell');
          
          slides.forEach((slide, index) => {
            // Check if it's the selected slide
            if (index === flickityInstance.selectedIndex) {
              slide.classList.add('active-slide');
              slide.style.opacity = 1; // Set active slide opacity to 1
            } else {
              slide.classList.remove('active-slide');
              slide.style.opacity = 0.5; // Set inactive slide opacity to 0.5
            }
          });
        }
      }
    });

    const initialSlides = carouselRef.current.querySelectorAll('.gallery-cell');
  if (initialSlides.length > 0) {
    initialSlides[0].style.opacity = 1; // Ensure the first slide is fully opaque
  }
  
    return () => {
      flickityInstance.destroy();
    };
  }, []);
  
  return (
    <div className="projects-page">
      <h1 className="projects-title">List Of Projects</h1>
      <p className="projects-subtitle">
        <strong>Ranging from Web and App developments to Figma prototypes</strong> ,here are some of the projects I have worked on!
      </p>
      <div className="projects-slider" ref={carouselRef}>
        {projects.map((project, index) => (
          <div className="gallery-cell" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
