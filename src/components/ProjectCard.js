// ProjectCard.js

import React from 'react';
import './ProjectCard.css'; // Import the CSS file for styling

const ProjectCard = ({ name, githubLink, deployedLink, image }) => {
  return (
    <div className="project-card">
      <h3>{name}</h3>
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <p>GitHub: <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a></p>
      {deployedLink && <p>Deployed Site: <a href={deployedLink} target="_blank" rel="noopener noreferrer">{deployedLink}</a></p>}
    </div>
  );
};

export default ProjectCard;
