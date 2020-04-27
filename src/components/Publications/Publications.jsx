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
          url:
            'https://medium.com/@fegor/why-stop-at-cool-you-could-be-so-much-more-a3c1497cbc48',
        },
        {
          imageSrc:
            'https://images.unsplash.com/photo-1459347268516-3ed71100e718?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0',
          name: 'How To Setup Environmental Variables In A Rails Application',
          url:
            'https://hackernoon.com/how-to-setup-environmental-variables-in-a-rails-application-ipdz3ygs',
        },
        {
          imageSrc:
            'https://hackernoon.com/drafts/4p5zj2a9d.png',
          name: 'How To Use SASS In Your Create-React-App',
          url:
            'https://hackernoon.com/how-to-use-sass-in-your-create-react-app-oh2x3ywb',
        },
      ],
    };
  }

  render() {
    const myPublications = this.state.publications.map(
      ({ imageSrc, name, url }) => (
        <Publication bgImage={imageSrc} title={name} url={url} />
      )
    );
    return (
      <section id="publications">
        <h1>Publications</h1>

        <div className="publications">{myPublications}</div>
      </section>
    );
  }
}

export default Publications;
