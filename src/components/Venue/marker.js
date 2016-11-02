import React, { PropTypes, Component } from 'react';
import image from '../../images/eventloop.png';
import style from './style.css';

const K_WIDTH = 40;
const K_HEIGHT = 40;

const greatPlaceStyle = {
  position: 'absolute',
  width: '3.5em',
  bottom: '0',
  right: '0'
};
export default class MyGreatPlace extends Component {
  render () {
    return (
      <img src={image} alt="eventloop logo" style={greatPlaceStyle} />
    );
  }
}

MyGreatPlace.propTypes = {
  text: PropTypes.string
};
