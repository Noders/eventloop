import React, { Component } from 'react';
import image from '../../images/eventloop.png';
import nodersLogo from '../../images/noders_logo_white.png';
import css from './style.css';

export default class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render () {
    return (
      <header id="header" className="alt">
        <span className="logo">
          <img src={image} alt="eventloop logo" className={css.image} />
        </span>
        <h1> Hackathón - 26-27 Noviembre </h1>
        <p>
          <h4>By</h4>
          <a href="https://twitter.com/noders_cl">
            <img src={nodersLogo} alt="noders logo" />
          </a>
        </p>
      </header>
    );
  }
}
