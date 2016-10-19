import React, { Component } from 'react';

export default class Sponsors extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <section id="first" className="main special">
        <header className="major">
          <h2>Nuestros Sponsors</h2>
        </header>
        <ul className="features">
          <li>
            <span className="icon major style1 fa-code" />
            <h3>Ipsum consequat</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
          </li>
          <li>
            <span className="icon major style3 fa-copy" />
            <h3>Amed sed feugiat</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
          </li>
          <li>
            <span className="icon major style5 fa-diamond" />
            <h3>Dolor nullam</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
          </li>
        </ul>
        <footer className="major">
          <ul className="actions">
            <li>
              <a href="generic.html" className="button">Learn More</a>
            </li>
          </ul>
        </footer>
      </section>
    );
  }
}
