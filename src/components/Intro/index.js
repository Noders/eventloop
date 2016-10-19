import React, { Component } from 'react';

export default class Intro extends Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render () {
    return (
      <section id="intro" className="main">
        <div className="spotlight">
          <div className="content">
            <header className="major">
              <h2>¿Eventloop?</h2>
            </header>
            <p>Exacto! Eventloop es una iniciativa internacional realizada <b>por y para developers!</b> Una hackatón centrada en solucionar problemas usando BigData y Data Visualization, Open Data, JS y NodeJS!</p>
            <p>(Si, nos gusta JavaScript, pero no somos excluyentes, puedes codear otros lenguajes si así lo quieres :) )</p>
            <ul className="actions">
              <li>
                <a href="https://ti.to/eventloop16/eventloop-16" target="_blank" rel="noopener noreferrer" className="button">Learn More</a>
              </li>
            </ul>
          </div>
          <span className="image"><img src="images/pic01.jpg" alt="" /></span>
        </div>
      </section>
    );
  }
}
