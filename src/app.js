import { render } from 'react-dom';
import React from 'react';
import './css/main.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/App';
import js from './js';

console.log(js);
js.then(() => {
  const containerEl = document.getElementById('app');
  render(
    <App />,
    containerEl
  );
});
