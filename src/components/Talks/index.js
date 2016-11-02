import React, { Component } from 'react';

import style from './style.css';

export default class Talks extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <section id="talks" className="main special">
        <header className="major">
          <h2>Charlas</h2>
          <p>
            (Por anunciar)
          </p>
        </header>
        {/* <footer className="major">
          <ul className="actions">
            <li>
              <a href="#tito" target="_blank" rel="noopener noreferrer" className="button">Pide tu entrada aquí</a>
            </li>
          </ul>
        </footer> */}
      </section>

    );
  }
}
