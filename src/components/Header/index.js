import React, { Component } from 'react';
import image from '../../images/eventloop.png';
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
      <header id="header" className={css.header}>
        <iframe src="http://mdstrm.com/live-stream/582a227de9ac82db08896abd" allowFullScreen className={css.iframe} />
        <span className="logo">
          <img src={image} alt="eventloop logo" className={css.image} />
        </span>
        <h1> Hackathón - 26-27 Noviembre </h1>
        <p>
          <h3> BigData, Data Visualization, OSS, Javascript y NodeJS</h3>
          <h5> Por Developers, para developers.</h5>
        </p>
      </header>
    );
  }
}
