import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import Marker from './marker';
import style from './style.css';

const createMapOptions = () => ({
  panControl: false,
  mapTypeControl: false,
  scrollwheel: false,
  styles: [{
    stylers: [{
      saturation: -100
    }, {
      gamma: 1
    }, {
      lightness: 5
    }, {
      visibility: 'on'
    }]
  }]
});

export default class Offer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      center: {
        lat: -33.4352267,
        lng: -70.6352001
      },
      zoom: 15,
      greatPlaceCoords: {
        lat: -33.4346377,
        lng: -70.6357276
      }
    };
  }


  render () {
    return (
      <section id="venue" className="main special">
        <header className="major">
          <h2>Lugar</h2>
          <p>
            Nuestro venue para esta versión de Eventloop, será la <a href="https://goo.gl/RchBSZ" target="_blank" rel="noopener noreferrer">Universidad San Sebastián</a><br />
            Bellavista Nº7 (A 2 cuadras de la estación de Metro Baquedano)
          </p>
        </header>
        <div className={style.mapContainer}>
          <GoogleMap
            options={createMapOptions}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            <Marker
              lat={this.state.greatPlaceCoords.lat}
              lng={this.state.greatPlaceCoords.lng}
              text={'A'}
            />
          </GoogleMap>
        </div>
        <footer className="major">
          <ul className="actions" />
        </footer>
      </section>

    );
  }
}
