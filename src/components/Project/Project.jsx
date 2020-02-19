import React from 'react';

const Project = ({ name, imageSrc, about, repository, liveVersion }) => (
  <div className="project">
    <img src={imageSrc} alt={name} />
    <h3>{name}</h3>
    <p className="about">{about}</p>
    <div className="project-links">
      <a
        href={liveVersion}
        rel="noopener noreferrer"
        target="_blank"
        className="live"
      >
        <i class="fa fa-globe"></i>
        <p>Live Demo</p>
      </a>

      <a
        href={repository}
        rel="noopener noreferrer"
        target="_blank"
        className="git"
      >
        <i class="fa fa-github"></i>
        <p>View Source</p>
      </a>
    </div>
  </div>
);

export default Project;
