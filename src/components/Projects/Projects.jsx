import React, { useEffect } from 'react';
import nolanverse1 from '../../assets/images/Nolanverse1.png';
import homevision1 from '../../assets/images/Homevision.png';
import canteen1 from '../../assets/images/Swucanteen1.png';
import hyukoh1 from '../../assets/images/Hyukoh1.png';
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">
            <img src={nolanverse1} alt="Nolanverse" />
          </div>
          <div className="project-info">
            <h3>Nolanverse (2024)</h3>
            <p>Developed a landing page showcasing Christopher Nolan's career including his biography, filmography, awards, and news using WordPress. Designed with aesthetic elements that capture the director's unique cinematic vision.</p>
            <div className="project-languages">
              <span>WordPress</span>
            </div>
            <div className="project-links">
              <a href="https://dev-christopher-nolan.pantheonsite.io/" target="_blank" 
                 rel="noopener noreferrer" className="project-link">See More</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={homevision1} alt="Home Vision" />
          </div>
          <div className="project-info">
            <h3>Home Vision VR Software Concept (2024)</h3>
            <p>Designed and developed a prototype landing page and mobile application for Home Vision, a VR-integrated architectural design software, using Figma to create intuitive user interfaces and ensure seamless user experiences.</p>
            <div className="project-languages">
              <span>Figma</span>
            
            </div>
            <div className="project-links">
              <a href="https://www.figma.com/proto/UlFtePnOXurHr2KqncqkDU/Home-Vision?node-id=103-143&t=w1cTUEZWG5Bt19I0-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"target="_blank" 
                 rel="noopener noreferrer"  className="project-link">See More (Website)</a>
              <a href="https://www.figma.com/proto/dPqqq6hxilAMI6ikz0a77C/Home-vision-(Mobile)?node-id=63-327&t=bZLX1VxdNC1Ol06I-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1" target="_blank" 
                 rel="noopener noreferrer"  className="project-link">See More (Mobile)</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={canteen1} alt="SWU Canteen" />
          </div>
          <div className="project-info">
            <h3>SWU Canteen Table Booking (2023)</h3>
            <p>Ideated and developed a SWU canteen table booking mobile application for students based on comprehensive user research, using SwiftUI and integrated with Firebase to manage and store booking data with real-time updates.</p>
            <div className="project-languages">
              <span>SwiftUI</span>
              <span>Firebase</span>
              <span>Figma</span>
            </div>
            <div className="project-links">
              <a href="https://drive.google.com/file/d/1VQsWS1ANbovNnnc3UTZ2Xz1YTOhmSJgI/view?usp=sharing" target="_blank" 
                 rel="noopener noreferrer"  className="project-link">See More</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image hyukoh-image">
            <img src={hyukoh1} alt="Hyukoh" />
          </div>
          <div className="project-info">
            <h3>Hyukoh (2021)</h3>
            <p>Designed and developed responsive musician websites (hyukoh) featuring band information, member profiles, discographies, and music videos using React.js.</p>
            <div className="project-languages">
            <span>HTML&CSS</span>

              <span>React.js</span>
            </div>
            <div className="project-links">
              <a href="https://ppstqx.github.io/Hyukoh/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="project-link">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;