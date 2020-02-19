import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Bio from './components/Bio/Bio';
import SocialLinks from './components/SocialLinks/SocialLinks';
import Portfolio from './components/Portfolio/Portfolio';
import Publications from './components/Publications/Publications';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Bio />
      <SocialLinks />
      <Portfolio />
      <Publications />
      <Contact />
    </div>
  );
}

export default App;
