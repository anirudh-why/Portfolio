import React from "react";
import { FaCode, FaTools, FaGraduationCap } from "react-icons/fa"; // Importing Font Awesome icons

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skills-card">
          <FaCode className="skill-icon" /> {/* Icon for Programming Languages */}
          <h3>Programming Languages and Databases</h3>
          <p>Java, JavaScript, Python, MongoDB , Sql Plus, C++, C, R Language</p>
        </div>
        <div className="skills-card">
          <FaTools className="skill-icon" /> {/* Icon for Frameworks and Tools */}
          <h3>Frameworks and Tools</h3>
          <p>React, Express.js, React.js, Node.js, Mongoose, Redux, NPM, Webpack, Babel, Git, Docker, Postman, Vercel</p>
        </div>
        <div className="skills-card">
          <FaGraduationCap className="skill-icon" /> {/* Icon for Courses */}
          <h3>Courses</h3>
          <p>Full-Stack Development, Data Structures and Algorithms, Machine Learning</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
