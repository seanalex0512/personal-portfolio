import React, { useState, useEffect, useRef } from 'react';
import './about_page.css';
import surfingPic from '../../Assets/surfing.JPG';
import climbingPic from '../../Assets/climbing.JPEG';
import outdoorPic from '../../Assets/outdoor.PNG';
import bjjPic from '../../Assets/bjj.jpg';

const AboutPage = () => {
  const images = [
    { src: surfingPic, alt: "Surfing" },
    { src: climbingPic, alt: "Climbing" },
    { src: outdoorPic, alt: "Outdoor" },
    { src: bjjPic, alt: "BJJ" }
  ];
  
  const [currentImage, setCurrentImage] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const changeImage = (newIndex) => {
    setSlideDirection(newIndex > currentImage ? 'next' : 'prev');
    setCurrentImage(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection('next');
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-container" ref={aboutRef}>
      <div className="story-header">
        <div className="line"></div>
        <h1>ABOUT ME</h1>
      </div>
    
      <div className={`about-content ${isVisible ? 'fade-in' : ''}`}>
        <div className="image-section">
          <div className="carousel-container">
            <img 
              src={images[currentImage].src} 
              alt={images[currentImage].alt} 
              className={`carousel-image slide-${slideDirection}`}
            />
            <div className="carousel-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${currentImage === index ? 'active' : ''}`}
                  onClick={() => changeImage(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      
        <div className="text-section">
          <h2 className="section-title">A Sports & Developer Enthusiast</h2>
        
          <p className="main-text">
            I'm a software developer who loves building cool things—whether it's a sleek mobile app, a clean and functional website, or just tinkering with new tech for fun. Right now, I'm deep into Flutter, learning how to craft beautiful, cross-platform apps.
          </p>
        
          <p className="main-text">
            I also have a curiosity for digital forensics (think NIST guidelines and the science behind uncovering digital evidence) and love exploring how tech can solve real-world problems. When I'm not coding, you'll probably find me diving into new hobbies, tweaking my portfolio, or geeking out over the latest innovations in software development.
          </p>
        
          <p className="main-text">
            Check out my work, browse my resume, or just say hi—I'm always up for a good tech chat!
          </p>
        
          <h3 className="sub-section">Finally, some quick bits about me.</h3>
        
          <p className="closing-text">
            One last thing, I'm available for freelance work, so feel free to reach out and say hello! 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;