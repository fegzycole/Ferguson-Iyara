import React, { Component } from 'react';
import Publication from '../Publication/Publication';

class Publications extends Component {
  constructor() {
    super();

    this.state = {
      publications: [
        {
          imageSrc: 'https://miro.medium.com/max/660/0*CPQGD_Iq6bUgdiJz.png',
          name: 'Why stop at cool? you could be so much more!',
          url: 'https://medium.com/@fegor/why-stop-at-cool-you-could-be-so-much-more-a3c1497cbc48'
        }
      ]
    }
  }

  render () {
    const myPublications = this.state.publications.map(({ imageSrc, name, url }) => (
      <Publication bgImage={imageSrc} title={name} url={url} />
    ))
    return (
      <section id="publications">
        <h1>Publications</h1>

        <div className="publications">
          {myPublications}
        </div>
      </section>
    )
  }
};

export default Publications;
