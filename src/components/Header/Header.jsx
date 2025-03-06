import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <h1>Phongsathon Makdankang</h1>
          <p>👨‍💻An enthusiastic third-year student at the College of Social Communication Innovation, majoring in Computer for Communication. Passionate about web development with React.js. Seeking opportunities to apply my skills and knowledge in an internship position to further prepare for my future career in this field.</p>
          <a href="https://drive.google.com/file/d/11DSN4A2kZOLxedYDda9DJS3q0gZ1ru2C/view?usp=sharing" target="_blank" 
                 rel="noopener noreferrer" className="download-button">
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;