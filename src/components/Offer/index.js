import React, { Component } from 'react';

import style from './style.css';

export default class Offer extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <section id="second" className="main special">
        <header className="major">
          <h2>¿Qué ofecemos?</h2>
          <p>
            Ofrecemos una experiencia genial! Creada por y para developers, para crear soluciones utilizando las últimas tecnologías<br />
            Eres el dueño de todo lo que desarrolles. No catch!
            <br />
            Y lo mejor de todo? Gratis!
          </p>
        </header>
        <ul className="statistics">
          <li className="style1">
            <span className="icon fa-user" />
            <strong>150+</strong>
            Developers
          </li>
          <li className="style2">
            <span className="icon fa-coffee" />
            <strong>500+</strong>
            Cafés (o té)
          </li>
          <li className="style3">
            <span className="icon fa-clock-o" />
            <strong>1</strong>
            Fin de semana
          </li>
          <li className="style4">
            <span className="icon fa-laptop" />
            <strong> 5 </strong>
            Charlas y Workshops
          </li>
          <li className="style5">
            <span className="icon fa-cutlery" />
            <strong>Mucha</strong>
            Comida, Snacks y Pizzas.
          </li>
        </ul>
        <p className="content">
          Durante el evento se dicatarán workshops y se realizarán charlas interesantes, por lo que si quieres un respiro de codear, te tenemos cubierto.
          Nos gustar participar y realizar eventos! Nos encanta estar organizando actividades, pero somos antes que nada Developers, Ingenieros, Diseñadores, Geeks. Hacemos la comunidad de las que nos gusta participar.
          <br />
        </p>
        <header className="major">
          <h2>Premios</h2>
        </header>
        <p>
          Wow, quieres algo más despues de todo lo que comentamos arriba?
          No hay problema! Te tenemos cubierto!
        </p>
        <p className={style.column}>
          <div className={style.columnItem}>
            <span className={['icon', 'fa-home', style.icon].join(' ')} />
            <span className={style.text}>Mentoría y espacio @ 'Diego`s Cowork'</span>
          </div>
          <div className={style.columnItem}>
            <span className={['icon', 'fa-graduation-cap', style.icon].join(' ')} />
            <span className={style.text}>Cuentas de FrontendMasters</span>
          </div>
          <div className={style.columnItem}>
            <span className={['icon', 'fa-book', style.icon].join(' ')} />
            <span className={style.text}>Cuentas de CodeSchool</span>
          </div>
          <div className={style.columnItem}>
            <span className={['icon', 'fa-windows', style.icon].join(' ')} />
            <span className={style.text}>Créditos de Azure</span>
          </div>
          <div className={style.columnItem}>
            <span className={['icon', 'fa-windows', style.icon].join(' ')} />
            <span className={style.text}>Créditos de Azure</span>
          </div>
        </p>
        <br />
        <footer className="major">
          <ul className="actions">
            <li>
              {/* href="https://ti.to/eventloop16/eventloop-16" */}
              <a href="#tito" target="_blank" rel="noopener noreferrer" className="button">Pide tu entrada aquí</a>
            </li>
          </ul>
        </footer>
      </section>

    );
  }
}
