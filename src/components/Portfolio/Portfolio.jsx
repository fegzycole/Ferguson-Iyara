import React, { Component } from 'react';
import Project from '../Project/Project';
import BankaImage from '../../assets/files/myBanka.png';
import TwitterImage from '../../assets/files/myTwitter.png';
import FacebookImage from '../../assets/files/myFacebook.png';
import EndlessRunnerImg from '../../assets/files/myEndlessRunner.png';

class Portfolio extends Component {
  constructor() {
    super();

    this.state = {
      projects: [
        {
          name: 'Banka',
          imageSrc: BankaImage,
          about:
            'Banka is a light-weight core banking application that powers banking operations like account creation, customer deposit and withdrawals. This app is meant to support a single bank, where users can signup and create bank accounts online, but must visit the branch to withdraw or deposit money',
          repository: 'https://github.com/fegzycole/BANKA',
          liveVersion: 'https://vast-tor-00576.herokuapp.com'
        },
        {
          name: 'Twitter Redesign',
          imageSrc: TwitterImage,
          about:
            'A social media application mimicking some of the functionalities of twitter.com, built as a capstone project in the rails section of the microverse curriculum.',
          repository: 'https://github.com/fegzycole/Rails-Capstone',
          liveVersion: 'https://secure-shelf-49955.herokuapp.com'
        },
        {
          name: 'Fakebook',
          imageSrc: FacebookImage,
          about:
            'A social media application mimicking some of the functionalities of facebook.com, built as a project in the rails section of the microverse curriculum.',
          repository: 'https://github.com/kalavhan/facebook-clone',
          liveVersion: 'https://frozen-forest-23599.herokuapp.com'
        },
        {
          name: 'Endless Runner',
          imageSrc: EndlessRunnerImg,
          about:
          'An Endless Runner game built with Phaser.js, built as a capstone project in the javascript section of the microverse technical curriculum',
          repository: 'https://github.com/fegzycole/Javascript-Capstone',
          liveVersion: 'https://nameless-sea-41411.herokuapp.com/',
        }
      ]
    };
  }

  render() {
    const myProjects = this.state.projects.map(
      ({ name, imageSrc, about, repository, liveVersion }) => (
        <Project
          name={name}
          key={name}
          imageSrc={imageSrc}
          about={about}
          repository={repository}
          liveVersion={liveVersion}
        />
      )
    );
    return (
      <section id="portfolio">
        <h1>Portfolio</h1>

        <div className="projects">{myProjects}</div>
      </section>
    );
  }
}

export default Portfolio;
