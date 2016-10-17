import React, { Component } from 'react';
import image from '../../images/eventloop.png';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = { counter: 0 };
  }

  render () {
    const { counter } = this.state;
    return (
      <div>
        <img src={image} alt='logo' />
        <div>Webpack is doing its thing with React and ES2015</div>
        <div>{counter}</div>
      </div>
    );
  }
}
