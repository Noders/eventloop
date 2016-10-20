import React, { Component } from 'react';

export default class Footer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render () {
    return (
      <footer id="footer">
        <section>
          <h2>Disclaimer</h2>
          <p>
            Eventloop es un evento non-profit, sin fines de lucro, realizado por <a href="http://www.noders.com">Noders</a> la comunidad de JS y NodeJS.
            <br />
            <b>Noders</b> es llevado por voluntarios, desarrolladores, entusiastas que disfrutan generando instancias para la comunidad de desarrollo en Chile.
            <br />
            Nos basamos en el siguiente <a href="https://github.com/Noders/code_of_conduct">Código de Conducta</a>.
          </p>
        </section>
        <section>
          <h2>Contactos</h2>
          <dl className="alt">
            <dt>Dirección</dt>
            <dd>
              <a href="https://www.google.cl/maps/place/Bellavista+7,+Providencia,+Regi%C3%B3n+Metropolitana/@-33.4347841,-70.6377205,17z/data=!3m1!4b1!4m5!3m4!1s0x9662c59add13d3c9:0x8b6caac0d51ac375!8m2!3d-33.4347886!4d-70.6355265">Bellavista 7, Providencia</a>
            </dd>
            <dt>Fecha</dt>
            <dd>26 y 27 de Noviembre</dd>
            <dt>Email</dt>
            <dd>
              <a href="mailto:eventloop@noders.com">eventloop@noders.com</a>
            </dd>
          </dl>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/noderscl" className="icon fa-twitter alt">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/noderscl" className="icon fa-facebook alt">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/noders" className="icon fa-github alt">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
        </section>
        <p className="copyright">&copy; Noders <br />
          Design: <a href="https://html5up.net">HTML5 UP</a> and <a href="https://twitter.com/fforres">@fforres</a>.
        </p>
      </footer>
    );
  }
}
