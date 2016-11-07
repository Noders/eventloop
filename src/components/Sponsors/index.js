import React, { Component } from 'react';

import microsoft from '../../images/microsoft.png';
import uss from '../../images/uss.png';
import pageload from '../../images/pageload.png';
import mediastream from '../../images/mediastream.png';
import frontendmasters from '../../images/frontendmasters.png';
import codeschool from '../../images/codeschool.png';
import balsamiq from '../../images/balsamiq.png';
import edge from '../../images/edge.png';

import Community from './community';

import style from './style.css';

export default class Sponsors extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <section id="first" className="main special">
        <header className="major">
          <h2>Platinum Sponsors</h2>
        </header>
        <div className={style.body}>
          <a className={style.imageLinks} href="http://www.microsoft.com">
            <img src={microsoft} alt="microsoft" className={[style.images, style.big].join(' ')} />
          </a>
          <a className={style.imageLinks} href="http://www.mediastre.am">
            <img src={mediastream} alt="mediastream" className={[style.images, style.big].join(' ')} />
          </a>
        </div>
        <br />
        <header className="major">
          <h2>Gold Sponsors</h2>
        </header>
        <div className={style.body}>
          <a className={style.imageLinks} href="http://www.uss.cl">
            <img src={uss} alt="universidad san sebastian" className={style.images} />
          </a>
        </div>
        <header className="major">
          <h2>Silver Sponsors</h2>
        </header>
        <div className={style.body}>
          <a className={style.imageLinks} href="http://edgecowork.com/">
            <img src={edge} alt="Edge Cowork" className={style.images} />
          </a>
          <a className={style.imageLinks} href="http://www.frontendmasters.com">
            <img src={frontendmasters} alt="frontend masters" className={style.images} />
          </a>
          {/* <a className={style.imageLinks} href="http://www.github.com">
            <img src={GitHub} alt="github" className={style.images} />
          </a> */}
          <a className={style.imageLinks} href="http://www.codeschool.com">
            <img src={codeschool} alt="codeschool" className={style.images} />
          </a>
          <a className={style.imageLinks} href="https://balsamiq.com/products/mockups/">
            <img src={balsamiq} alt="balsamiq" className={style.images} />
          </a>
          <a className={style.imageLinks} href="http://www.pageload.io">
            <img src={pageload} alt="pageload" className={style.images} />
          </a>
        </div>
        <br />
        <Community />
        <footer className="major">
          <p>
            ¿Nos falta alguien? ¿Quieres apoyarnos? ¿Te gustaría estar entre nuestros sponsors?
          </p>
          <ul className="actions">
            <li>
              <a href="mailto:eventloop@noders.com" className="button">Envíanos un mensaje</a>
            </li>
          </ul>
        </footer>
      </section>
    );
  }
}


/*
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
*/
