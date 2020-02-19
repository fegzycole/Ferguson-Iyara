import React, { Component } from 'react';

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      from: '',
      message: '',
      email: ''
    };
  }

  render() {
    return (
      <section id="contact">
        <h1>Contact</h1>

        <form method="post" action="#">
          <div className="form-container">
            <input type="text" name="from" placeholder="Name" />
            <input type="email" name="email" id="" placeholder="Email" />
          </div>
          <textarea name="" placeholder="Message" />

          <input type="submit" value="Send Message" />
        </form>
      </section>
    );
  }
}

export default Contact;
