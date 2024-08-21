import React from 'react';
import '../App.css'; // Ensure CSS file is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ProjectPopup = ({ project, closePopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={closePopup}>
        <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="popup-header">
          <h3>{project.title}</h3>
        </div>
        <div className="popup-body">
          <img src={project.image} alt={project.title} className="popup-image" />
          <p className='techst'><strong>Tech Stack : </strong> {project.techStack}</p>
          <p>{project.fullDescription}</p>
        </div>
        <div className="popup-footer">
          <a href={project.codeLink} className="btn" target="_blank" rel="noopener noreferrer">View Code</a>
          <a href={project.deploymentLink} className="btn" target="_blank" rel="noopener noreferrer">View Live</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
