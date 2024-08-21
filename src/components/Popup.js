// Popup.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Popup = ({ achievement, onClose }) => {
  if (!achievement) return null; // Don't render if there's no achievement

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="popup-header">
          <h3>{achievement.title}</h3>
        </div>
        <div className="popup-body">
          <img src={achievement.image} alt={achievement.title} className="popup-image" />
          <p>{achievement.description}</p>
        </div>
        <div className="popup-footer">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
