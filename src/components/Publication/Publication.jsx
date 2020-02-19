/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const Publication = ({ bgImage, title, url }) => {
  return (
    <div className="publication" style={{ backgroundImage: `url(${bgImage})` }}>
      <a
        href={url}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
      <p className="publication-title">{title}</p>
    </div>
  );
};

export default Publication;
