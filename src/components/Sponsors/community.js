import React, { Component } from 'react';

// Partners
import noders from '../../images/noders.png';
import proin from '../../images/proin.png';
import ivdevs from '../../images/ivdevs.png';
import android from '../../images/android_chile.png';
import womenwhocode from '../../images/womenwhocode.jpg';
import javascriptchile from '../../images/javascriptchile.png';
import beerjs from '../../images/beerjs.png';
import hybrid from '../../images/hybrid.jpeg';
import GitHub from '../../images/GitHub.png';

import style from './style.css';

export default class Community extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <header className={['major', style.subTitle].join(' ')}>
          <h2 className={style.subTitle}>Community Partners</h2>
        </header>
        <div className={style.body}>
          <a className={style.imageLinks} href="http://www.noders.com">
            <img src={noders} alt="noders" className={[style.imagesSponsors, style.noders].join(' ')} />
          </a>
          <a className={style.imageLinks} href="https://www.meetup.com/es/Javascript-Chile/">
            <img src={javascriptchile} alt="JavaScript Chile" className={style.imagesSponsors} />
          </a>
          <a className={style.imageLinks} href="http://www.ivdevs.cl">
            <img src={ivdevs} alt="iv devs" className={[style.imagesSponsors, style.noders].join(' ')} />
          </a>
          <a className={style.imageLinks} href="http://www.androidchile.org">
            <img src={android} alt="noders" className={style.imagesSponsors} />
          </a>
          <a className={style.imageLinks} href="http://www.programadores.cl/">
            <img src={proin} alt="proin" className={style.imagesSponsors} />
          </a>
          <a className={style.imageLinks} href="https://www.meetup.com/es-ES/Women-Who-Code-Santiago/">
            <img src={womenwhocode} alt="Women Who Code Santiago" className={style.imagesSponsors} />
          </a>
          <a className={style.imageLinks} href="http://www.beerjs.cl/">
            <img src={beerjs} alt="Beer J.S." className={style.imagesSponsors} />
          </a>
          <a className={style.imageLinks} href="https://www.Github.com/">
            <img src={GitHub} alt="GitHub" className={style.imagesSponsors} />
          </a>
          <a className={style.imageLinks} href="http://www.meetup.com/es-ES/Hybrid-Apps-Chile/">
            <img src={hybrid} alt="Hybrid Apps Chile" className={style.imagesSponsors} />
          </a>
        </div>
      </div>
    );
  }
}
