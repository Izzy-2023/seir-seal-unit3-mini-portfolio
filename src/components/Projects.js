// Projects.js

import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.name} className="project-image" />
          <div className="project-content">
            <h3>{project.name}</h3>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;


