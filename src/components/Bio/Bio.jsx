import React from 'react';
import '../../assets/scsss/index.scss';
import Resume from '../../assets/files/Ferguson-Iyara.pdf';

const Bio = () => {
  return (
    <section id="Bio">
      <div>
        <p className="name">Ferguson Iyara</p>
        <p className="desc">I am a self taught web developer based in Lagos, Nigeria</p>
        <a rel="noopener noreferrer" href={Resume} target="_blank">Resume</a>
      </div>
    </section>
  );
}

export default Bio;
