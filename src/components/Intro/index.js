import React, { Component } from 'react';
import image from '../../images/hackathon.jpg';

import style from './style.css';

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
            <p>Exacto! Eventloop es una iniciativa internacional, non-profit, realizada <b>por y para developers!</b> Una hackatón centrada en solucionar problemas usando BigData y Data Visualization, Open Data, JS y NodeJS!</p>
            <p>(Si, nos gusta JavaScript, pero no somos excluyentes, puedes codear otros lenguajes si así lo quieres :) )</p>
            <ul className="actions">
              <li>
                {/* href="https://ti.to/eventloop16/eventloop-16" */}
                <a href="#tito" target="_blank" rel="noopener noreferrer" className="button">Reserva tu entrada!</a>
              </li>
            </ul>
          </div>
          {/* <img src={image} className={style.image} alt="eventloop" /> */}
        </div>
      </section>
    );
  }
}
