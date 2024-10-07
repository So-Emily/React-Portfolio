import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => (
    <div className="project">
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a> | 
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </p>
    </div>
);

export default Project;