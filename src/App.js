import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Bio from './components/Bio/Bio';
import SocialLinks from './components/SocialLinks/SocialLinks';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Navbar />
      <Bio />
      <SocialLinks />
      <Portfolio />
    </div>
  );
}

export default App;
