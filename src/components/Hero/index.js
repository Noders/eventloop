import React, { Component } from 'react';
import image from '../../images/eventloop.png';
import nodersLogo from '../../images/noders_logo_white.png';
import css from './hero.css';

export default class Hero extends Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render () {
    return (
      <div>
        <header id="header" className="alt">
          <span className="logo">
            <img src={image} alt="eventloop logo" className={css.image} />
          </span>
          <h1> Hackathón - 26-27 Noviembre </h1>
          <p>
            <h4>By</h4>
            <a href="https://twitter.com/noders_cl">
              <img src={nodersLogo} alt="noders logo" />
            </a>
          </p>
        </header>

        <nav id="nav">
          <ul>
            <li>
              <a href="#intro" className="active">Introduction</a>
            </li>
            <li>
              <a href="#first">First Section</a>
            </li>
            <li>
              <a href="#second">Second Section</a>
            </li>
            <li>
              <a href="#cta">Consigue tu entrada acá</a>
            </li>
          </ul>
        </nav>

        <div id="main">

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
                    <a href="generic.html" className="button">Learn More</a>
                  </li>
                </ul>
              </div>
              <span className="image"><img src="images/pic01.jpg" alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Magna veroeros</h2>
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

          <section id="second" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork" />
                <strong>5,120</strong>
                Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o" />
                <strong>8,192</strong>
                Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal" />
                <strong>2,048</strong>
                Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop" />
                <strong>4,096</strong>
                Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond" />
                <strong>1,024</strong>
                Nullam
              </li>
            </ul>
            <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="generic.html" className="button">Learn More</a>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Consigue tu entrada</h2>
              <p>
                Eventloop la Hackathón internacional realizada por y para developers.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="generic.html" className="button special">Inscríbete acá</a>
                </li>
              </ul>
            </footer>
          </section>
        </div>

        <footer id="footer">
          <section>
            <h2>Aliquam sed mauris</h2>
            <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
            <ul className="actions">
              <li>
                <a href="generic.html" className="button">Learn More</a>
              </li>
            </ul>
          </section>
          <section>
            <h2>Etiam feugiat</h2>
            <dl className="alt">
              <dt>Address</dt>
              <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
              <dt>Phone</dt>
              <dd>(000) 000-0000 x 0000</dd>
              <dt>Email</dt>
              <dd>
                <a href="#s">information@untitled.tld</a>
              </dd>
            </dl>
            <ul className="icons">
              <li>
                <a href="#s" className="icon fa-twitter alt">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#s" className="icon fa-facebook alt">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#s" className="icon fa-instagram alt">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#s" className="icon fa-github alt">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="#s" className="icon fa-dribbble alt">
                  <span className="label">Dribbble</span>
                </a>
              </li>
            </ul>
          </section>
          <p className="copyright">&copy; Untitled. Design:
            <a href="https://html5up.net">HTML5 UP</a>.</p>
        </footer>
      </div>
    );
  }
}
