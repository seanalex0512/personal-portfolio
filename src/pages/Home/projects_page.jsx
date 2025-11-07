import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './projects_page.css';

// Import Images
import invoice1 from '../../Assets/invoice1.png';
import linconlite from '../../Assets/linconlite.png';
import TM from '../../Assets/TM.png';
import finance1 from '../../Assets/finance1.png';
import booking from '../../Assets/booking.png';
import ecommerce from '../../Assets/ecommerce.png';
import movies from '../../Assets/movies.png';

const projects = [
  {
    title: 'Bumi Panel Cell Tower Management System',
    description: 'Designed a cell tower management system prototype for Bumi Panel, integrating advanced features to enhance automation, oversee overall building management, and check the status of their cell towers.',
    link: '#',
    image: TM,
    tags: ['Retool', 'JavaScript', 'SQL'],
  },
  {
    title: 'Invoice Generator',
    description: 'An Invoice Generator that allows you to create and download custom invoices.',
    link: '#',
    image: invoice1,
    tags: ['React', 'CSS', 'JavaScript', 'WordPress'],
  },
  {
    title: 'Linconlite',
    description: 'A freelance project for an Electrical Engineering company that required a modern and sleek design that matched the company theme.',
    link: 'https://liconlite.webflow.io/',
    image: linconlite,
    tags: ['Webflow'],
  },
  
 
  {
    title: 'Finance Tracking App',
    description: 'A modern finance tracking app that allows you to track your expenses, income and manage your budgets with ease.',
    link: 'https://www.figma.com/design/DgkVKrTaDIYN35Z8pUzeHl/Finance-Tracker-App?node-id=46-1701&t=P6T4idp0GCNEFfof-1',
    image: finance1,
    tags: ['Figma'],
  },
  {
    title: 'Augmented Reality Ecommerce App',
    description: 'An ecommerce app that allowed you to leverage AR to try on products before purchasing.',
    link: 'https://www.figma.com/design/nNDLedw0ODWTIZbGPCO9Ve/E-commerce?node-id=0-1&t=wfoIJpqiWrvHBCKe-1',
    image: ecommerce,
    tags: ['Figma'],
  },
  {
    title: 'Latest Movies App',
    description: 'A fullstack Movie App that allows you to search for movies, view details, and add them to your favorites.',
    link: 'https://github.com/seanalex0512/Movie-System/tree/main/frontend',
    image: movies,
    tags: ['React','Vite','CSS','JavaScript'],
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
          const slides = carouselRef.current.querySelectorAll('.gallery-cell');
          slides.forEach((slide, index) => {
            if (index === flickityInstance.selectedIndex) {
              slide.classList.add('active-slide');
              slide.style.opacity = 1;
            } else {
              slide.classList.remove('active-slide');
              slide.style.opacity = 0.5;
            }
          });
        },
      },
    });

    const initialSlides = carouselRef.current.querySelectorAll('.gallery-cell');
    if (initialSlides.length > 0) {
      initialSlides[0].style.opacity = 1;
    }

    return () => {
      flickityInstance.destroy();
    };
  }, []);

  return (
    <div className="projects-page">
      <h1 className="projects-title">List Of Projects</h1>
      <p className="projects-subtitle">
        <strong>Ranging from Web and App developments to Figma prototypes</strong>, here are some of the personal and company-based projects I have worked on!
      </p>
      <div className="projects-slider" ref={carouselRef}>
        {projects.map((project, index) => (
          <div className="gallery-cell" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="project-tag">{tag}</span>
              ))}
            </div>

            {(project.title === 'Invoice Generator' || project.title === 'Bumi Panel Cell Tower Management System') ? (
              <span className="test-mode">Still In Test Mode</span>
            ) : (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Learn more
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
