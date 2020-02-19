import React from 'react';

const Project = ({ name, imageSrc, about }) => (
  <div className="project">
    <img src={imageSrc} alt={name} />
    <h3>{name}</h3>
    <p className="about">{about}</p>
  </div>
);

export default Project;
