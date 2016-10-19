import React, { Component } from 'react';

export default class Nav extends Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render () {
    return (
      <nav id="nav">
        <ul>
          <li>
            <a href="#intro" className="active">Introduction</a>
          </li>
          <li>
            <a href="#first">Sponsors</a>
          </li>
          <li>
            <a href="#second">Premios</a>
          </li>
          <li>
            <a href="#cta">Consigue tu entrada</a>
          </li>
          <li>
            <a href="#talk">Contácto</a>
          </li>
        </ul>
      </nav>
    );
  }
}
