// Projects.js

import React from 'react';
import ProjectCard from'./ProjectCard'

const Project = ({ name, githubLink, deployedLink, image }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>GitHub: <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a></p>
      {deployedLink && <p>Deployed Site: <a href={deployedLink} target="_blank" rel="noopener noreferrer">{deployedLink}</a></p>}
      <p>Image: <img src={image} alt={name} ></img></p>
      <hr />
    </div>
  );
};

const Projects = ({ projects }) => {
  return (
    <div>
      <h2 >Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;

