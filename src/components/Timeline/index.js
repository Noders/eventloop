import React, { Component } from 'react';
import Activity from './activity';

import style from './style.css';

export default class Timeline extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <section id="timeline" className="main special">
        <header className="major">
          <h2>Horarios</h2>
          <div className={style.dayContainer}>
            <div id="day1" className={style.day}>
              <div className={style.intro}>
                <h3 className={style.dayText}>26 de Noviembre</h3>
                <h4 className={style.dayDescription}>30+ Horas de código! (Calentando motores)</h4>
              </div>
              <div className={style.activities}>
                <Activity
                  time="09:30 AM - 10:30 AM"
                  title="Recepción y on-boarding"
                  description="Recepción, saludos, desayuno, premios y reglas del juego."
                />
                <Activity
                  time="10:30 AM - 13:00 PM"
                  title="Hacking Time!"
                  description="Júntate con tus viejos amigos, conoce a tu equipo nuevo, y trabaja en tu idea!"
                />
                <Activity
                  time="13:00 PM - 14:00 PM"
                  title="Almuerzo"
                  description="Porque no solo de código vive el developer! Snacks, comidas, y energía para seguir codeando"
                />
                <Activity
                  time="14:00 AM - 18:00 PM"
                  title="Charlas y Workshops"
                  description="Workshops y charlas, (Por devs, para devs) conoce tecnologías, apis e implementaciones para hacer tu idea aún mas cool."
                />
                <Activity
                  time="18:00 PM - 19:00 PM"
                  title="Coffe Break"
                  description="Repone energías, tómate un café, conversa con los sponsors, developers y mentores. Carpe Diem!"
                />
                <Activity
                  time="19:00 PM - 01:00 AM"
                  title="Hacking Time!"
                  description="Hay un bug que te sigue molestando? Llévate un café hasta tu escritorio y vuelve al código!"
                />
                <Activity
                  time="01:00 AM - 01:45 AM "
                  title="SNACKS!"
                  description="No queremos desconcentrarte, así que pondremos algunos snacks en silencio. (Shhhhh.... Genios Trabajando)"
                />
              </div>
            </div>
            <div id="day2" className={style.day}>
              <div className={style.intro}>
                <h3 className={style.dayText}>27 de Noviembre</h3>
                <h4 className={style.dayDescription}>Vamos por el 2do día! (La recta final)</h4>
              </div>
              <div className={style.activities}>
                <Activity
                  time="09:00 AM - 10:00 AM"
                  title="Desayuno de Campeones"
                  description="Fruta, café, cereales, sucaritas y PAF! ... volver a codear!"
                />
                <Activity
                  time="10:00 AM - 12:30 PM"
                  title="Hacking Time!"
                  description="(Tick...Tock...)Toques finales!"
                />
                <Activity
                  time="13:00 PM - 14:00 PM"
                  title="Time's UP!"
                  description="Sube tu código, prepara tu presentación, y relajate unos minutos! (Te lo ganaste)"
                />
                <Activity
                  time="15:00 PM - 16:30 PM"
                  title="Live Demos"
                  description="Súbete al escenario, presentanos tu código, tu solución tu problema y tu equipo."
                />
                <Activity
                  time="17:00 PM - 18:00 PM"
                  title="Premiación"
                  description="Fue una ardua noche, pero lo lograste! Felicitaciones a todo el equipo! ¿Quién se llevará el premio mayor?"
                />
              </div>
            </div>
          </div>
        </header>
        <br />
        <footer className="major">
          <ul className="actions">
            <li>
              {/* href="https://ti.to/eventloop16/eventloop-16" */}
              <a href="https://ti.to/eventloop16/eventloop-16" target="_blank" rel="noopener noreferrer" className="button">Pide tu entrada aquí</a>
            </li>
          </ul>
        </footer>
      </section>

    );
  }
}
