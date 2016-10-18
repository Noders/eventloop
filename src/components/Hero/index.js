import React, { Component } from 'react';
import image from '../../images/eventloop.png';
import css from './hero.css';

export default class Hero extends Component {
  constructor (props) {
    super(props);
    this.state = { counter: 0 };
  }

  render () {
    const { counter } = this.state;
    return (
      <div className={css.hero}>
        <img src={image} alt="logo" />
        <div>Webpack is doing its thing with React and ES2015</div>
        <div>{counter}</div>
      </div>
    );
  }
}
