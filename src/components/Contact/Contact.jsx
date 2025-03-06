import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Phongsathon Makdankang</h3>
          <p>College of Social Communication Innovation</p>
          <div className="contact-details">
            <div className="contact-item">
              <span>Email :</span>
              <a href="mailto:phongsathon.mdk@gmail.com">phongsathon.mdk@gmail.com</a>
            </div>
            <div className="contact-item">
              <span>Tel :</span>
              <a href="tel:+66625241514">+66 625241514</a>
            </div>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/phongsathon-makdankang/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/ppstqx" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;