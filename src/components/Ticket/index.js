import React, { Component } from 'react';

export default class Ticket extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <section id="cta" className="main special">
        <header className="major">
          <h2>Consigue tu entrada</h2>
          <p>
            Eventloop la Hackathón internacional realizada por y para developers.
          </p>
        </header>
        <footer className="major">
          <ul className="actions">
            <li>
              <a href="generic.html" className="button special">Inscríbete acá</a>
            </li>
          </ul>
        </footer>
      </section>
    );
  }
}
