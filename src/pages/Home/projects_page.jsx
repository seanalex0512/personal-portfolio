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

const projects = [
  {
    title: 'Invoice Generator',
    description: 'An Invoice Generator that allows you to create and download custom invoices.',
    link: '#',
    image: invoice1,
    tags: ['React', 'Tailwind', 'JavaScript', 'WordPress'],
  },
  {
    title: 'Linconlite',
    description: 'A freelance project for an Electrical Engineering company that required a modern and sleek design that matched the company theme.',
    link: 'https://liconlite.webflow.io/',
    image: linconlite,
    tags: ['Webflow'],
  },
  {
    title: 'TM Smart Building',
    description: 'Designed a smart all-in-one building system prototype for TM, integrating advanced features to enhance automation, energy efficiency, and overall building management.',
    link: 'https://www.figma.com/design/mdURxLWbiIkOA36QTJcd4M/TM-Smart-Management-System?node-id=0-1&t=TKl97EpKv4IVNEZc-1',
    image: TM,
    tags: ['Figma'],
  },
  {
    title: 'INTI Campus Booking Facility App',
    description: 'Developed an INTI Campus Booking Facility App, enabling students and staff to seamlessly book campus facilities, manage reservations, and improve overall accessibility.',
    link: 'https://github.com/seanalex0512/BookingFacilityApp.git',
    image: booking,
    tags: ['Flutter', 'Firebase', 'Authentication', 'Material-UI', 'Figma'],
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
        },
      },
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
        <strong>Ranging from Web and App developments to Figma prototypes</strong>, here are some of the personal and company-based projects I have worked on!
      </p>
      <div className="projects-slider" ref={carouselRef}>
        {projects.map((project, index) => (
          <div className="gallery-cell" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>

            {/* Technology Tags */}
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="project-tag">{tag}</span>
              ))}
            </div>

            {/* Conditional Rendering for "Still In Test Mode" */}
            {project.title === 'Invoice Generator' ? (
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
