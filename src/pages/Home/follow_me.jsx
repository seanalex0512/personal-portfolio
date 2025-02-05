import React, { useState, useEffect } from 'react';
import './follow_me.css';
import githubIcon from '../../Assets/github.png';
import emailIcon from '../../Assets/email.png';
import linkedinIcon from '../../Assets/linkedin.png';


const FollowMe = () => {
  const [localTime, setLocalTime] = useState('');

  // Function to update the local Malaysian time
  useEffect(() => {
    const updateTime = () => {
      const malaysiaTime = new Intl.DateTimeFormat('en-MY', {
        timeZone: 'Asia/Kuala_Lumpur',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(new Date());
      setLocalTime(malaysiaTime);
    };

    updateTime(); // Initialize the time on load
    const interval = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="connect-container">
      <p className="subtitle">Have a project?</p>
      <h1 className="intro">Let's Connect!</h1>
      <p className="local-time">My local time: {localTime}</p>
      <footer className="footer">
        <div className="footer-left">
          <p className="name">Sean Alexander</p>
          <span className="designation">Software Developer</span>
        </div>
        <div className="footer-right">
  <a href="https://github.com/seanalex0512" aria-label="GitHub">
    <img src={githubIcon} alt="GitHub" className="social-icon" />
  </a>
  <a href="mailto:seanalex0512@gmail.com" aria-label="Email">
    <img src={emailIcon} alt="Email" className="social-icon" />
  </a>
  <a href="https://www.linkedin.com/in/seanalexander0512/" aria-label="LinkedIn">
    <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
  </a>
</div>

      </footer>
    </div>
  );
};

export default FollowMe;
