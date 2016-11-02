import React, { Component, PropTypes } from 'react';

import style from './style.css';

export default class activity extends Component {
  constructor (props) {
    super(props);
    this.state = {
      active: true,
    };
    this.toggleDescription = this.toggleDescription.bind(this);
  }
  componentDidMount () {
    this.animate.addEventListener('transitionend', () => {
      console.log(this);
    });
  }

  toggleDescription () {
    const state = this.state.active;
    this.setState({ active: !state });
  }

  render () {
    const active = () => {
      if (this.state.active) {
        return [style.description, style.descriptionHidden].join(' ');
      }
      return [style.description, style.descriptionShown].join(' ');
    };
    return (
      <div
        className={style.activity}
        onClick={this.toggleDescription}
      >
        <div className={style.time}> { this.props.time } </div>
        <div className={style.title}> { this.props.title } </div>
        <div
          ref={(animate) => { this.animate = animate; }}
          className={active()}
        > { this.props.description } </div>
      </div>
    );
  }
}
activity.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
