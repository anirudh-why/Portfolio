import React, { useState } from "react";
import ProjectPopup from "./ProjectPopup";
import blogappimg from "../assets/blogapp-img.png"
import javaproj from "../assets/javaproj.png"
import pf from "../assets/portfolio.png"

const Projects = () => {
  const [popupData, setPopupData] = useState(null);

  const projects = [
    {
      image:blogappimg,
      title: "Blog app",
      techStack: "ReactJS, MongoDb, NodeJS, JavaScript, ExpressJS, Bootstrap",
      description: "Blogging website allowing users to post, update, view, delete blogs",
      fullDescription: "A blogging website enables users to create, update, view, and delete blog posts. It offers a user-friendly interface for managing content, allowing bloggers to share their thoughts, ideas, and stories. Users can easily edit or remove posts, ensuring their content remains relevant and up-to-date.",
      codeLink: "https://github.com/anirudh-why/blogapp/",
      deploymentLink: "https://blogapp-trekease-yv5o.onrender.com/",
    },
    {
      image: javaproj,
      title: "House Rental Management system",
      techStack: "Java for front end and Sql Plus for backend",
      description: "Java app for house management: input, store property info, and streamline search for rent seekers.",
      fullDescription: "A Java app for house management allows users to input and store property information. It streamlines the search process for rent seekers by organizing listings efficiently, making it easy to find suitable properties. The app enhances property management and rental experiences with an intuitive interface and robust data handling.",
      codeLink: "https://github.com/anirudh-why/House-rental-system",
      deploymentLink: "",
    },
    {
      image: pf,
      title: "Porfolio",
      techStack: "React Js, Javascript ,Bootstrap.",
      description: "A portfolio website showcasing skills, projects, achievements, and contact information with interactive features.",
      fullDescription: "This portfolio website highlights personal skills, projects, and achievements, featuring a dynamic and interactive layout. It offers detailed sections on education, skills, and notable accomplishments, with engaging elements such as animated text and a visually appealing design. Users can explore projects, learn more about the individual, and easily make contact.",
      codeLink: "https://github.com",
      deploymentLink: "https://deployment-link.com",
    },
  ];

  const openPopup = (project) => {
    setPopupData(project);
  };

  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p className="techst">{project.techStack}</p>
            <p>{project.description}</p>
            <button className="btn" onClick={() => openPopup(project)}>
              Read More
            </button>
          </div>
        ))}
      </div>
      {popupData && <ProjectPopup project={popupData} closePopup={closePopup} />}
    </section>
  );
};

export default Projects;
