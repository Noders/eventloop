import React, { Component } from 'react';
import style from './style.css';

export default class Questions extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <section id="talk" className="main special">
        <header className="major">
          <h2>¿Dudas, consultas?</h2>
          <p>
            Contáctate con nosotros!
          </p>
        </header>
        <footer className="major">
          <ul className="actions">
            <li>
              <a href="//twitter.com/NodersCL" rel="noopener noreferrer" target="_blank" className="button">
                <span className="icon fa-twitter" />
                <span className={style.iconTextMargin}>Twitter</span>
              </a>
            </li>
            <li>
              <a href="//facebook.com/NodersCL" rel="noopener noreferrer" target="_blank" className="button">
                <span className="icon fa-facebook" />
                <span className={style.iconTextMargin}>Facebook</span>
              </a>
            </li>
            <li>
              <a href="mailto:mail@mail.mail" rel="noopener noreferrer" target="_blank" className="button">
                <span className="icon fa-envelope" />
                <span className={style.iconTextMargin}>Email</span>
              </a>
            </li>
          </ul>
        </footer>
      </section>
    );
  }
}
