import React, { Component } from 'react';

import microsoft from '../../images/microsoft.png';
import uss from '../../images/uss.png';
import pageload from '../../images/pageload.png';

// Partners
import noders from '../../images/noders.png';
import proin from '../../images/proin.png';
import ivdevs from '../../images/ivdevs.png';

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
          <h2>Nuestros Sponsors</h2>
        </header>
        <div className={style.body}>
          <img src={microsoft} alt="microsoft" className={style.images} />
          <img src={uss} alt="universidad san sebastian" className={style.images} />
          <img src={pageload} alt="pageload" className={style.images} />
        </div>
        <br />
        <header className={['major', style.subTitle].join(' ')}>
          <h2 className={style.subTitle}>Community Partners</h2>
        </header>
        <div className={style.body}>
          <img src={noders} alt="noders" className={style.imagesSponsors} />
          <img src={proin} alt="proin" className={style.imagesSponsors} />
          <img src={ivdevs} alt="iv devs" className={style.imagesSponsors} />
        </div>
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
