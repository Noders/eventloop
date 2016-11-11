import { render } from 'react-dom';
import React from 'react';

import './css/main.css';
import './css/font-awesome.min.css';
import './css/fonts.css';

import App from './components/App';
import js from './js';

import offline from 'offline-plugin/runtime';

if (process.env.NODE_ENV === 'production') {
  offline.install();
}

js.then(() => {
  const containerEl = document.getElementById('app');
  render(
    <App />,
    containerEl
  );
});
