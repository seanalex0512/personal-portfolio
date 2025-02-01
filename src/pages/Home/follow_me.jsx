// follow_me.jsx
import React from 'react';
import './follow_me.css';

const FollowMe = () => {
  return (
    <div className="social-container">
      <h2 className="social-title">Follow Me</h2>
      <p className="social-description">
        Let's connect! Follow me on social media or drop me an email.
      </p>
      <div className="social-links">
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/email.png"
            alt="Email"
            className="social-icon"
          />
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/ios-glyphs/50/000000/github.png"
            alt="GitHub"
            className="social-icon"
          />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/ios-filled/50/0077b5/linkedin.png"
            alt="LinkedIn"
            className="social-icon"
          />
        </a>
      </div>
      <div className="social-stats">
        <p>💻 50+ Projects</p>
        <p>🌟 1k+ Followers</p>
        <p>📧 Always open to collaboration!</p>
      </div>
    </div>
  );
};

export default FollowMe;