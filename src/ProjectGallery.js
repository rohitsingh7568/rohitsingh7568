import React from 'react';
import './ProjectGallery.css';

import girlImage from '../src/images/girl.jpg.jpg';


const projects = [
  { name: 'BLVCK', type: 'Branding', img: girlImage },
  { name: 'CREAM', type: 'Branding', img: girlImage }, 
  { name: 'FREDI', type: 'Branding', img: girlImage },
  // { name: 'APOLLO', type: 'Branding', img: girlImage }
];

const ProjectGallery = () => {
  return (
    <div className="project-gallery">
      <header className="gallery-header">
        <h2>PROJECTS</h2>
        <h1>We guide game-changing companies, across platforms & places, through agile design & digital experience. We make waves.</h1>
      </header>
      
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.name} className="project-image" />
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.type}</p>
            </div>
          </div>
        ))}
      </div>
      
      <footer className="gallery-footer">
        <button className="explore-button">Explore all projects</button>
      </footer>
    </div>
  );
};

export default ProjectGallery;
