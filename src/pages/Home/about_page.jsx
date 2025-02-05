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
    From a young age, I was fascinated by technology—taking gadgets apart and putting them back together just to see how they worked. That curiosity eventually led me to study Computer Science in college, paving the way for my journey as a Software Developer. Now, I’m passionate about translating ideas into clean, efficient code and delivering intuitive digital experiences. I focus on building fast, elegant, and accessible solutions that enhance user experiences.
  </p>

  <p className="main-text">
    A problem-solver at heart, I thrive on collaboration, continuous learning, and bringing a touch of creativity to every project. Whether it's developing sleek mobile apps or crafting seamless web applications, I enjoy tackling challenges with a thoughtful and innovative approach.
  </p>

  <h3 className="sub-section">My Personal Coaching</h3>

  <p className="main-text">
    Beyond coding, I’m also a personal coach for swimming and rock climbing, as well as a private math tutor. Helping others achieve their goals and milestones gives me immense fulfillment, and I love being part of their growth journey.
  </p>

  <p className="main-text">
    As a sports fanatic, I thrive on competition as a way to push myself and continuously improve. I’ve participated in several sports competitions, including swimming, football, rock climbing, and Brazilian Jiu-Jitsu.
  </p>

</div>

      </div>
    </div>
  );
};

export default AboutPage;