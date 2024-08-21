// Achievements.js
import React, { useState } from 'react';
import Popup from './Popup'; // Import the Popup component
import bvrit from "../assets/bvrit.jpeg"
import skykar from "../assets/skykar.jpg"
import tv from "../assets/tv.jpg"

const achievements = [
  {
    title: 'Winner of Yukthi hackathon',
    description: 'The team won the Yukthi Hackathon at TechSurge 2k24, hosted by Coding Brigade BVRIT. Their innovative solution impressed the judges, showcasing exceptional technical skills and creativity. The victory highlights their problem-solving prowess and stands as a testament to their dedication and talent in the competitive tech landscape.',
    image: bvrit,
  },
  {
    title: 'Winner of Webathon',
    description: 'The team emerged victorious at the Webathon during Skhykar 2k24, held at TKR College. Their winning project showcased outstanding web development skills and innovative thinking. This achievement underscores their technical expertise and creative problem-solving abilities, marking a significant accomplishment in the competitive tech event.',
    image: skykar,
  },
  
  {
    title: 'Final round in TechnoVista hackathon',
    description: 'The team participated in the 24-hour TechnoVista hackathon, organized by the Dataquesters Club, and advanced to the final round. Their performance demonstrated strong problem-solving skills and innovative solutions, showcasing their ability to thrive in a competitive and time-intensive tech challenge.',
    image: tv,
  },
  // Add more achievements as needed
];

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const openPopup = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const closePopup = () => {
    setSelectedAchievement(null);
  };

  return (
    <section id="achievements" className="achievements-section">
      <h2>Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card" onClick={() => openPopup(achievement)}>
            <img src={achievement.image} alt={achievement.title} className="achievement-image" />
            <div className="achievement-info">
              <h3>{achievement.title}</h3>
              {/* <p>{achievement.description}</p> */}
            </div>
            <button className="btn">Read More</button>
          </div>
        ))}
      </div>
      {selectedAchievement && (
        <Popup achievement={selectedAchievement} onClose={closePopup} />
      )}
    </section>
  );
};

export default Achievements;
