import { render } from 'react-dom';
import React from 'react';
import './css/main.css';
import './css/font-awesome.min.css';
import './css/fonts.css';

// if (module.hot) {
//   document.getElementById('css-bundle').href = `styles.css?t=${Date.now()}`;
//   module.hot.accept();
// }

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/App';
import js from './js';

js.then(() => {
  const containerEl = document.getElementById('app');
  render(
    <App />,
    containerEl
  );
});
