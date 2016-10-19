import React, { Component } from 'react';

export default class Questions extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <section id="talk" className="main special">
        <header className="major">
          <h2>¿Tienes dudas?</h2>
          <p>
            Si tienes dudas o consultas, contáctate con nosotros!
          </p>
        </header>
        <footer className="major">
          <ul className="actions">
            <li>
              <a href="//twitter.com/NodersCL" rel="noopener noreferrer" target="_blank" className="button"><span className="icon fa-twitter" />Twitter</a>
            </li>
          </ul>
        </footer>
      </section>
    );
  }
}
