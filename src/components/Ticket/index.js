import React, { Component } from 'react';

export default class Ticket extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <section id="cta" className="main special">
        <header className="major">
          <h2>Consigue tu entrada</h2>
          <p>
            ¿Aún no reservas tu entrada? ¿Qué estás esperando!?
          </p>

        </header>
        <footer className="major">
          <ul className="actions">
            <li>
              {/*  */}
              <a href="https://ti.to/eventloop16/eventloop-16" target="_blank" rel="noopener noreferrer"  className="button special">Inscríbete acá</a>
            </li>
          </ul>
          <p>
            <i>
              <b>Eventloop</b>, nombre y logo son propiedad de la comunidad de Javascript de Ciudad de México.
              <br />
              Esta versión de EventLoop está siendo realizado por <a href="http://noders.com">Noders</a>, la comunidad de JavaScript en Chile.
            </i>
          </p>
        </footer>
      </section>
    );
  }
}
